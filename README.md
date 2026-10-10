# EB Keramika

Personīgas keramikas prakses vietne latviešu valodā. Galvenais lietošanas ceļš ir video stundas sagatavošana: izvēlies prasmi, sagatavo paraugus un rīkus, seko ainu plānam un dokumentē praktisko rezultātu.

## Saturs

- [Sākumlapa](index.html) un [18 video stundas](video/index.html): virpošana, veidošana ar rokām un darbnīcas labiekārtošana.
- Katrā stundā: konkrēts rezultāts, priekšzināšanas, rīki, paraugu secība, drošība, detalizētas ainas, oriģināls ieteicamais runājamais teksts, prakses plāns, kļūdu analīze un drukājama darba lapa. Kopā 130 ainas.
- [Sešas lokālas shēmas un veidnes](video/index.html#paligmateriali), tostarp kadrējums, šķērsgriezums, telpas zonas un parauga etiķete.
- [100 pētījumu raksti](research/index.html) un [94 rīku ieraksti](tools/index.html), saistīti ar atbilstošajām stundām.
- [Personīgais mācību ceļš](uni/index.html), [atlasīti avoti](academic-research/index.html) un [rīku kontrolsaraksts](tools/checklist.html).

Stundu statuss ir **“Scenārijs izmēģināšanai”**. Ainu ilgumi un 60 minūšu aktīvā prakse ir plānoti. Praktiska filmēšana, reāli izmērīti izpildes laiki un iekārtu drošības novērtēšana šajā repozitorijā vēl nav dokumentēti. Žūšana un cita gaidīšana aprakstīta atsevišķi.

## Atvēršana un pārbaude

Vietne sastāv no HTML, kopīga CSS un diviem nelieliem JavaScript failiem. Nav būvēšanas soļa, ārēju bibliotēku, servera datubāzes vai instalējamu vietnes atkarību. Lapas var atvērt tieši pārlūkā; vienotai lokālās glabāšanas un kopēšanas pārbaudei izmanto lokālu serveri:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Atver `http://127.0.0.1:8765/`. Vietnes statiskos failus var izvietot jebkurā statiskā tīmekļa serverī, saglabājot mapju struktūru.

Pārbaude izmanto tikai Python standarta bibliotēku:

```sh
python3 check_site.py
```

Tā pārbauda HTML iekšējās saites un enkurus, lokālos resursus, 100 rakstu secību un obligātās sadaļas, 18 stundu ainu laukus, laiku summas, stundu secību un izvēlētus valodas ierobežojumus. Tā nepārbauda ārējo avotu pieejamību vai apgalvojumu tehnisko pareizību. Pēc izkārtojuma izmaiņām pārbaudi šauru ekrānu un drukas priekšskatījumu. JavaScript sintaksi pēc izvēles var pārbaudīt ar `node --check video/video.js` un `node --check tools/checklist-storage.js`; Node nav vajadzīgs vietnes lietošanai.

## Stundas rediģēšana

1. Atver atbilstošo HTML failu mapē `video/`. Jaunai tēmai izmanto [sagatavi](video/sagatave.html), aizstājot visus `{vietturi}` laukus.
2. Nosaki vienu pārbaudāmu rezultātu un vienādus paraugu kodus sagatavošanās sarakstā, ainās un darba lapā. Atšķir uz vietas paveicamu darbību no iepriekš sagatavota rezultāta vai vēlākas žūšanas pārbaudes.
3. Katrā ainā norādi kadrējumu, darbību, runājamo tekstu, ekrāna tekstu, pārbaudes kadru un montāžas norādi. Mainot laiku, saskaņo intervālu, `data-duration`, kopējo ilgumu un kataloga kartīti.
4. Saglabā unikālos ainu identifikatorus, piemēram, `rata-02-a03`. Ja ainas nozīme būtiski mainās, piešķir jaunu identifikatoru, lai iepriekš saglabāta atzīme neattiektos uz citu saturu.
5. Pievieno tiešas saites uz konkrētiem pētījumiem, rīku enkuriem un vietējiem palīgmateriāliem. Ja pievieno vai izņem stundu, atjauno katalogu, iepriekšējās/nākamās stundas saites un pārbaudes skripta paredzēto struktūru.
6. Pēc faktiskā izmēģinājuma aizpildi redakcijas pierakstu un precizē ilgumus. Drošības vai tehniskus apgalvojumus pamato ar pārbaudītu avotu un konkrētās iekārtas dokumentāciju.

`research/research.css` nosaka kopējo vizuālo valodu; `video/video.css` pievieno stundu, ainu un darba lapu stilus. Neveido katrai stundai atsevišķu stilu failu. Pilnas satura prasības ir [AGENTS.md](AGENTS.md).

## Lokālās atzīmes un druka

Ainu un inventāra izvēles saglabājas tikai konkrētā pārlūka `localStorage`. Ierīces savā starpā nesinhronizējas; dzēšot pārlūka datus, atzīmes pazūd. Atzīme “Nofilmēta aina” ir filmēšanas progresa pieraksts. Viss mācību saturs un parastā pārlūka druka darbojas arī bez JavaScript.

Poga “Drukāt darba lapu” drukā tikai konkrētās stundas pierakstu lapu, savukārt “Drukāt stundas plānu” ietver arī ainas. Ja vajadzīgs precīzs plāksnes veidnes izmērs, atver [SVG veidni](video/materiali/plaksnes-veidne.svg) atsevišķi un drukā 100% mērogā. Pārbaudi 50 mm kontrollīniju ar lineālu; lapā parādītā ilustrācija pielāgojas ekrāna platumam.

Sākotnējais audits un ieviešanas statuss: [attīstības plāns](video-attistibas-plans.md).
