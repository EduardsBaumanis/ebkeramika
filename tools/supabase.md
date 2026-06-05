# Supabase datubāze kontrolsaraksta atzīmēm

Īss algoritms, kā panākt, lai `tools/checklist.html` atzīmētās rūtiņas saglabātos Supabase datubāzē un nākamajā lapas atvēršanas reizē tiktu atjaunotas.

## Mērķis

Saglabāt tikai kontrolsaraksta stāvokli:

- kurš rīks ir atzīmēts;
- vai rūtiņa ir ieslēgta;
- kad atzīme pēdējo reizi mainīta.

Šai sistēmai nav vajadzīgi komercdati, personiska informācija vai citi dati ārpus kontrolsaraksta.

## 1. Sagatavo kontrolsarakstu

Katrai rūtiņai `tools/checklist.html` vajag stabilu identifikatoru. Teksts var mainīties, bet `data-tool-id` nedrīkst mainīties, ja tā ir tā pati lieta.

Piemērs:

```html
<label>
  <input type="checkbox" data-tool-id="mala-spainis-ar-vaku">
  Māla spainis ar vāku
</label>
```

## 2. Izveido Supabase projektu

1. Supabase panelī izveido jaunu projektu.
2. Atver sadaļu SQL redaktors.
3. Izveido vienu tabulu kontrolsaraksta stāvoklim.

Šim projektam dotais Postgres hosts ir:

```text
db.kqaoagvusvmfxunbswju.supabase.co
```

No tā pārlūka REST API adrese ir:

```text
https://kqaoagvusvmfxunbswju.supabase.co
```

Tiešo Postgres connection string ar paroli nedrīkst likt HTML vai JavaScript failos. Tas ir paredzēts datubāzes administrēšanai, nevis statiskai lapai pārlūkā.

Vienkāršs variants personīgai lietošanai:

```sql
create table checklist_state (
  profile_key text not null,
  tool_id text not null,
  checked boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (profile_key, tool_id)
);
```

`profile_key` var būt, piemēram, `eb-keramika`. Tas ļauj nākotnē atdalīt vairākus kontrolsarakstus, ja tādi būs vajadzīgi.

## 3. Ieslēdz piekļuves noteikumus

Supabase tabulām, kuras sasniedzamas no pārlūka, jāizmanto rindu līmeņa drošība (RLS).

Personīgai publiski nepieejamai testa versijai var sākt ar ļoti vienkāršu piekļuvi, bet drošākai versijai ieteicams izmantot Supabase pieslēgšanās sistēmu (Auth) un saglabāt atzīmes pie konkrēta lietotāja.

Svarīgi:

- nekad neliec `service_role` atslēgu HTML vai JavaScript failā;
- pārlūkā drīkst izmantot tikai publisko anonīmo atslēgu;
- ja lapa ir publiski pieejama internetā, izveido ierobežojošus RLS noteikumus pirms datu saglabāšanas.

## 4. Pievieno nelielu JavaScript failu

Izveido, piemēram, `tools/checklist-storage.js`. Tam jābūt parastam vanilla JavaScript failam bez ārējām bibliotēkām un CDN.

Šajā repo fails jau ir pieslēgts `tools/checklist.html` šādi:

```html
<script src="checklist-storage.js" defer></script>
```

Kad Supabase projekts ir izveidots, šai pašai rindai var pievienot projekta adresi un publisko anonīmo atslēgu:

```html
<script
  src="checklist-storage.js"
  defer
  data-supabase-url="https://kqaoagvusvmfxunbswju.supabase.co"
  data-supabase-anon-key="PUBLIC_ANON_KEY"
></script>
```

`PUBLIC_ANON_KEY` jāpaņem Supabase projekta API iestatījumos. Tā nav datubāzes parole. Ja šīs vērtības nav norādītas, lapa joprojām strādā kā drukājams kontrolsaraksts un izmanto tikai pārlūka lokālo atmiņu.

Neobligātais `npx skills add supabase/agent-skills` solis nav vajadzīgs pašai lapai. To var izmantot tikai AI darba vides uzlabošanai, ja gribi, lai nākotnē aģents strādā ar Supabase specifiskām instrukcijām.

Algoritms:

1. Ielasa visas rūtiņas ar `data-tool-id`.
2. Pie lapas atvēršanas prasa Supabase tabulai visus ierakstus ar izvēlēto `profile_key`.
3. Katram atrastajam ierakstam sameklē atbilstošo rūtiņu.
4. Ja datubāzē `checked` ir `true`, rūtiņu atzīmē.
5. Katru reizi, kad rūtiņa mainās, nosūta uz Supabase jauno stāvokli.
6. Saglabāšanai izmanto `upsert`, lai viena un tā pati rūtiņa netiktu ierakstīta vairākas reizes.

Pseidokods:

```js
const PROFILE_KEY = "eb-keramika";

// 1. Lapas sākumā ielādē saglabātās atzīmes.
// 2. Atrod checkbox pēc data-tool-id.
// 3. Uz checkbox change notikumu nosūta { profile_key, tool_id, checked }.
// 4. Ja Supabase īslaicīgi nav pieejams, lapai joprojām jāstrādā kā drukājamam sarakstam.
```

## 5. Datu ielāde lapas atvēršanas brīdī

No Supabase jāpaņem tikai šie lauki:

```text
tool_id
checked
```

Pēc atbildes saņemšanas:

1. izveido sarakstu pēc `tool_id`;
2. salīdzina to ar HTML rūtiņu `data-tool-id` vērtībām;
3. atzīmē tikai tās rūtiņas, kurām datubāzē ir `checked = true`.

Faktiskajā `tools/checklist-storage.js` failā šo darbu dara `loadSupabaseCheckedToolIds()` un `applySupabaseStateToCheckboxes()`.

## 6. Datu saglabāšana pēc klikšķa

Kad rūtiņa mainās:

1. nolasa `data-tool-id`;
2. nolasa, vai rūtiņa ir atzīmēta;
3. nosūta ierakstu uz `checklist_state`;
4. atjauno `updated_at`.

Saglabājamais ieraksts:

```json
{
  "profile_key": "eb-keramika",
  "tool_id": "mala-spainis-ar-vaku",
  "checked": true
}
```

## 7. Pārbaudes pēc ieviešanas

Pārbaudi šādi:

1. Atver `tools/checklist.html`.
2. Atzīmē dažas rūtiņas.
3. Aizver lapu.
4. Atver lapu vēlreiz.
5. Pārliecinies, ka tās pašas rūtiņas ir atzīmētas.
6. Noņem kādu atzīmi un pārbaudi, vai pēc atkārtotas atvēršanas tā paliek noņemta.
7. Pārbaudi, vai drukāšanas skats joprojām strādā arī tad, ja Supabase nav sasniedzams.

## Noderīgas oficiālās lapas

- [Supabase REST API dokumentācija](https://supabase.com/docs/guides/api)
- [Supabase rindu līmeņa drošības dokumentācija](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase pieslēgšanās sistēmas dokumentācija](https://supabase.com/docs/guides/auth)
