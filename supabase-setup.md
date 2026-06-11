# Supabase kontrolsaraksta iestatīšana

Šis fails apraksta, kā Supabase pieslēgt `tools/checklist.html` rīku kontrolsarakstam. Esošais JavaScript fails `tools/checklist-storage.js` sagaida tabulu `checklist_state` un saglabā ierakstus ar `profile_key` un `tool_id`.

## 1. Izveido vai atver Supabase projektu

1. Ieej Supabase panelī.
2. Izveido jaunu projektu vai atver esošo EB Keramika projektu.
3. Atver SQL Editor sadaļu.

## 2. Izveido tabulu un drošības noteikumus

SQL Editor sadaļā palaid šo SQL:

```sql
create table if not exists public.checklist_state (
  profile_key text not null,
  tool_id text not null,
  checked boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (profile_key, tool_id)
);

alter table public.checklist_state enable row level security;

drop policy if exists "Lasit EB Keramika kontrolsarakstu" on public.checklist_state;
drop policy if exists "Pievienot EB Keramika kontrolsaraksta atzimi" on public.checklist_state;
drop policy if exists "Atjaunot EB Keramika kontrolsaraksta atzimi" on public.checklist_state;

create policy "Lasit EB Keramika kontrolsarakstu"
on public.checklist_state
for select
to anon
using (profile_key = 'eb-keramika');

create policy "Pievienot EB Keramika kontrolsaraksta atzimi"
on public.checklist_state
for insert
to anon
with check (profile_key = 'eb-keramika');

create policy "Atjaunot EB Keramika kontrolsaraksta atzimi"
on public.checklist_state
for update
to anon
using (profile_key = 'eb-keramika')
with check (profile_key = 'eb-keramika');

grant usage on schema public to anon;
grant select, insert, update on table public.checklist_state to anon;
```

Šis variants ir publisks koplietots kontrolsaraksts. Ikviens, kurš atver lapu un kuram ir pieejama Supabase projekta publiskā atslēga, var mainīt šīs pašas atzīmes. Privātam kontrolsarakstam vajadzīga Supabase Auth pieslēgšana un lietotājam piesaistītas RLS politikas.

## 3. Paņem projekta URL un publisko atslēgu

1. Supabase panelī atver Project Settings vai Connect sadaļu.
2. Nokopē Project URL, tam jāizskatās līdzīgi `https://projekta-ref.supabase.co`.
3. Nokopē Publishable key, kas sākas ar `sb_publishable_`.
4. Ja projekts vēl rāda veco `anon` atslēgu, to var lietot tajā pašā vietā. Neievieto `sb_secret_` vai `service_role` atslēgu HTML failā.

## 4. Pieraksti datubāzes savienojumu administrēšanai

Šis savienojums nav vajadzīgs `tools/checklist.html` lapai. To izmanto tikai lokālam SQL klientam, migrācijām vai administrēšanas darbam ārpus pārlūka lapas.

```text
host: db.kqaoagvusvmfxunbswju.supabase.co
port: 5432
database: postgres
user: postgres
```

Savienojuma virkne:

```text
postgresql://postgres:[SUPABASE-DATABASE-PASSWORD]@db.kqaoagvusvmfxunbswju.supabase.co:5432/postgres
```

Neievieto īsto datubāzes paroli HTML, JavaScript, Markdown failos vai publiskā repozitorijā. Ja tīkls ir tikai IPv4, izmanto Supabase Session Pooler iestatījumus vai Supabase IPv4 add-on, jo tiešais `db.kqaoagvusvmfxunbswju.supabase.co:5432` savienojums var nebūt pieejams no IPv4 tīkla.

## 5. Agent Skills izvēles solis

Supabase panelis piedāvā uzstādīt Agent Skills AI kodēšanas rīkiem. Tas nav vajadzīgs šai statiskajai HTML lapai, bet var palīdzēt citā vidē, kur AI rīks prot izmantot šīs prasmes.

```bash
npx skills add supabase/agent-skills
```

Palaid šo komandu tikai tad, ja attiecīgais AI rīks prasa Agent Skills atbalstu. Šajā projektā nav jāievieš `npm`, `package.json` vai būvēšanas sistēma.

## 6. Ieliec vērtības HTML failā

Atver `tools/checklist.html` un pārbaudi skripta atribūtus:

```html
<script
  src="checklist-storage.js"
  defer
  data-supabase-url="https://projekta-ref.supabase.co"
  data-supabase-anon-key="sb_publishable_..."
></script>
```

`data-supabase-url` jābūt projekta URL. `data-supabase-anon-key` jābūt publicējamai klienta atslēgai.

## 7. Pārbaudi darbību

1. Atver `tools/checklist.html` pārlūkā.
2. Atzīmē vienu rīku.
3. Pārlādē lapu. Atzīmei jāsaglabājas.
4. Supabase panelī atver Table Editor sadaļu un pārbaudi `checklist_state` tabulu.
5. Tabulā vajadzētu redzēt rindu ar `profile_key = eb-keramika`, attiecīgo `tool_id`, `checked` vērtību un `updated_at`.

## 8. Ja saglabāšana nestrādā

1. Pārlūka konsolē meklē ziņojumu `Supabase saglabāšanas kļūda`.
2. Ja redzi `401` vai `403`, pārbaudi publisko atslēgu, grants un RLS politikas.
3. Ja redzi `404`, pārbaudi projekta URL un tabulas nosaukumu `checklist_state`.
4. Ja redzi konflikta vai dublikāta kļūdu, pārbaudi, vai tabulai ir `primary key (profile_key, tool_id)`.
5. Ja Supabase nav pieejams, atzīmes joprojām saglabājas pārlūka lokālajā atmiņā.

## Avoti

- Supabase API keys: https://supabase.com/docs/guides/getting-started/api-keys
- Supabase Data REST API: https://supabase.com/docs/guides/api
- Supabase API drošība un RLS: https://supabase.com/docs/guides/api/securing-your-api
- Supabase upsert uzvedība: https://supabase.com/docs/reference/javascript/upsert
