# EB Keramika video palīgmateriālu attīstības plāns

Sagatavots 2026. gada 10. oktobrī pēc repozitorija satura un struktūras pārskatīšanas.

Mērķis: vietnes galveno lietošanas ceļu veidot ap keramikas mācību video sagatavošanu. Katras stundas lapai jāpalīdz sagatavot darbnīcu, nofilmēt saprotamu demonstrējumu, pateikt vajadzīgo īstajā brīdī un pārbaudīt praktisko rezultātu. Video tēmas paliek keramikas prasmes un darbnīcas labiekārtošana.

Ar individuālu stundu šeit saprasta viena tematiska video nodarbība ar savu praktisko uzdevumu. Piedāvātie citāti ir oriģināli pasniedzēja runas varianti, kas jāizmēģina kopā ar demonstrējumu.

## Ieviešanas statuss, 10.10.2026.

Vietnes izmaiņas ir ieviestas: jauna sākumlapa un stundu katalogs, 18 izvērstas stundas ar 130 ainām, katrai sava darba lapa, precīzas rīku un pētījumu saites, sešas vietējas SVG shēmas un veidnes, pilna stundas sagatave, personīgais mācību ceļš un atlasīti pārbaudītie avoti. Saglabāta 100 rakstu bibliotēka un 94 rīku ieraksti. Papildināta kopīgā navigācija, drukas noformējums un lokāla filmēšanas atzīmju saglabāšana; inventāra atzīmes arī darbojas lokāli.

Pārstrādāti septiņi tehniski jutīgie pētījumi (060, 074, 075, 076, 077, 079, 080), pārējiem sakārtota saistība ar stundām un atkārtotais vispārīgais teksts. Tas nav visu 100 rakstu neatkarīgs tehnisks apstiprinājums. Agrākais ārējo avotu saraksts saglabāts atsevišķi marķētā arhīvā.

Stundu laiki ir ieceres. Nākamais darbs darbnīcā ir praktiskais izmēģinājums, faktisko laiku pierakstīšana un video filmēšana. Reālu ierakstu vietā lapās netiek rādīti izdomāti video vai rezultāti. Uzturēšanas norādes un pārbaudes komandas ir [README.md](README.md).

Ieviešanas pārbaudes:

- `python3 check_site.py`: visas 126 HTML lapas, 100 raksti, 18 stundas un 130 ainas bez konstatētām struktūras vai vietējo saišu kļūdām.
- Chromium pārlūkā pārbaudītas visas 126 lapas 320 px un 1280 px platumā, bez dokumenta horizontālas pārplūdes, JavaScript izņēmumiem vai neveiksmīgas vietējo resursu ielādes.
- Pārbaudīta ainu un inventāra atzīmju saglabāšana pēc pārlādes, stundu atzīmju neatkarība, citātu kopēšana, liegtas glabāšanas apstrāde un stundas saturs ar izslēgtu JavaScript.
- Visu 18 darba lapu A4 PDF izdrukas Chromium pārlūkā ietilpst vienā lapā. Pārbaudīta arī pilna stundas plāna druka; fiziska printera izvade var atšķirties pēc tā iestatījumiem.
- Abi JavaScript faili iziet `node --check`; `git diff --check` neuzrāda atstarpju kļūdas.

Tālāk saglabāts sākotnējais audits un tā pamatojumā veidotais plāns. Sadaļa par sākotnējo stāvokli apraksta vietni pirms šīs ieviešanas.

## 1. Kas repozitorijā jau ir

| Daļa | Pārbaudītais stāvoklis | Loma attīstāmajā vietnē |
| --- | --- | --- |
| [Sākumlapa](index.html) | Vispārīga zināšanu bāzes ieeja ar piecām līdzvērtīgām sadaļu saitēm un nākotnes sadaļu sarakstu. | Galvenā ieeja video stundu sagatavošanai. |
| [Video sadaļa](video/index.html) | Trīs cikli, katrā sešas stundas: virpošana, veidošana ar rokām, telpas iekārtošana. | Stundu katalogs un secīgi mācību ceļi. |
| [Video sagatave](video/sagatave.html) | Mērķis, ilgums, sagatavošanās, drošība, ainas, prakses laiks, kļūdas un žurnāls. | Vienots pilnas stundas paraugs. |
| [Pētījumu bibliotēka](research/index.html) | Visi 100 raksti no 001 līdz 100; automatizētā pārbaudē visiem atrasta kopīgā CSS saite, terminoloģija, praktiskā rezultāta formulējums, drošības bloks un žurnāla sadaļa. | Metožu, terminu, testu un paskaidrojumu pamats konkrētām stundām. |
| [Rīku katalogs](tools/index.html) | 94 ieraksti ar enkuriem un saitēm uz pētījumiem. | Precīzi stundas rīku saraksti ar saitēm uz vajadzīgajiem ierakstiem. |
| [Rīku kontrolsaraksts](tools/checklist.html) | Drukājama lapa ar izvēles rūtiņām. | Esošs paraugs sagatavošanās un drukas saskarnei. |
| [Studiju modelis](uni/index.html) | Sešu semestru personīgs plāns; pašlaik nav saišu uz video stundām. | Prasmju secība ar saitēm uz praktiskām nodarbībām. |
| [Akadēmisko avotu saraksts](academic-research/index.html) | 100 ārējās atsauces, sagrupētas pēc tēmām. Lapā norādīts agrāks saišu pārbaudes datums. | Atlasīti avoti konkrētu scenārija apgalvojumu pārbaudei. |

### Audita robežas un rezultāti

- Pārbaudītas visu 126 HTML lapu relatīvās `href` un `src` atsauces, kā arī HTML enkuru esamība. Trūkstoši mērķi netika atrasti. Divas vietturu saites ir paredzētas tukšajā video sagatavē.
- Izlasīti visu 18 stundu mērķi, ainu apraksti, runājamie teksti un laika tabulas. Stundās ir 107 ainas: vienā stundā piecas, pārējās sešas.
- Plānotie video ilgumi ir 2:35 līdz 3:10. Visu 18 praktisko uzdevumu tabulas aritmētiski summējas līdz 60 minūtēm. Tas neapstiprina reāli izmērītu nodarbības ilgumu.
- Nevienā no 18 stundu lapām nav tiešas saites uz pētījumu rakstu vai rīka ierakstu. Visās ir atsevišķs drošības bloks.
- HTML lapās nav attēlu, video, audio vai iegultu atskaņotāju. Pašreizējais saturs ir scenāriju uzmetumi.
- CSS failos nav `url()` atsauču uz pārbaudāmiem aktīviem. Ar HTML saistītie lokālie CSS un JavaScript faili pastāv.
- [Esošais kontrolsaraksta skripts](tools/checklist-storage.js) izmanto lokālu glabāšanu un satur Supabase sinhronizāciju. Tā ir esoša arhitektūras atkāpe no pašreizējās statiskās vietnes vadlīnijām. Video sadaļas attīstībai pietiek ar HTML, CSS un pēc vajadzības lokālu JavaScript; šo integrāciju nav nepieciešams pārnest uz stundām.
- Audits neapstiprina visu 100 ārējo avotu pieejamību vai zinātnisko kvalitāti. Netika veikta pārlūka vizuālā pārbaude, praktiska filmēšana vai iekārtu drošības novērtēšana.

## 2. Galvenās problēmas un prioritātes

| Prioritāte | Novērojums | Plānotais uzlabojums |
| --- | --- | --- |
| P0 | Telpas stundās tehniski jutīgas darbības ir saspiestas īsos vispārīgos norādījumos. | Pirms filmēšanas pārskatīt ūdens sistēmas, ventilācijas un elektrības scenārijus; precizēt, ko var demonstrēt un ko izvērtē speciālists. |
| P1 | Video sadaļa ir viena no vairākām paralēlām ieejām. | Sākumlapas galveno darbību veidot kā “Izvēlēties video stundu”. |
| P1 | Aina pārsvarā satur tikai laiku, vienu kadra teikumu un citātu. | Pievienot darbības secību, rakursu, nepieciešamo paraugu, ekrāna tekstu, pauzi un redzamo pārbaudes pazīmi. |
| P1 | Stundas ir atrautas no jau esošajiem palīgmateriāliem. | Katrai stundai atlasīt konkrētus rakstus, rīkus un darba lapu. |
| P1 | Visur minēts “pārbaudīts” aptuveni 60 minūšu ilgums. | Skaidri nodalīt plānoto un izmēģinājumā novēroto laiku, kā arī žūšanu un citu gaidīšanu. |
| P1 | Tekstā ir filmējamas darbības neprecizitātes. | Veikt valodas un demonstrējuma saskaņas redakciju. |
| P2 | Nav vizuālu paraugu, kadrējuma shēmu vai pilna drukas scenārija. | Pievienot lokālus foto/shēmas un sakārtot ainu drukāšanu. |
| P2 | Studiju modelis rāda tēmas, bet ne konkrētu nākamo darbību. | Saistīt prasmju posmus ar esošajām stundām un to rezultātiem. |

Konkrēti redakcijas piemēri:

- [Centrēšanas stundā](video/rata-02-mala-centresana.html) “svīst” jāaizstāj ar saprotamu sānu svārstības vai mešanas aprakstu. Kadrs ar māla ārpusi nevar pats par sevi pierādīt, ka iekšēji gaisa ieslēgumi izzuduši.
- [Nogriešanas stundā](video/rata-06-nogriesana-zavesana.html) apraksts “lēnām rotē uz apturēta rata” ir pretrunīgs. Jānorāda konkrēts iekārtas stāvoklis katrā darbībā.
- [Ventilācijas stundā](video/telpa-04-ventilacija-un-putekli.html) ir kļūdains apzīmējums “bisera slīpēšana”. Jānosauc iecerētais materiāla stāvoklis un atbilstošā darbība.
- Vienādot uzrunu “tu”, pēdiņas „…”, terminus “virpošana”, “podnieka virpa”, “šlikeris” un “ieskrāpēšana”. Stundu virsrakstos izmantot latviskus nosaukumus; pētniecības terminu tulkojumus saglabāt atbilstoši repozitorija noteikumiem.
- [Video rādītāja](video/index.html) metadatos joprojām izcelta tikai viena piemēra tēma, lai gan lapā ir trīs cikli.
- [Video CSS](video/video.css) drukā nepārraksta, piemēram, gaišo `.time-total` teksta krāsu. Jāpārbauda visu metadatu un ainu salasāmība uz balta papīra.

## 3. Vietnes saturs ap vienu darba gaitu

Ieteicamais ceļš: **izvēlos prasmi → atveru stundu → sagatavoju paraugus un rīkus → filmēju ainas → pārbaudu rezultātu → pierakstu labojumus**.

### Sākumlapa

Virsraksta variants: **“Palīgmateriāli keramikas video veidošanai”**.

Īsais ievads: “Stundu scenāriji, ainu plāni un darbnīcas darba lapas keramikas prasmju apguvei un darbnīcas iekārtošanai.”

Satura secība:

1. Galvenā saite uz stundu katalogu un saite uz stundas sagatavi.
2. Divi satura virzieni: **Keramikas prasmes** un **Darbnīcas labiekārtošana**. Pirmajā sākumā ir divi esošie cikli, otrajā telpas cikls.
3. Skaidrs sākuma ceļš iesācējam: telpas sākotnējā izvērtēšana, atbilstošā darba vietas sagatavošanas stunda, pirmā veidošanas vai virpošanas prasme.
4. Palīgmateriāli: rīki, praktiskie pētījumi, pārbaudāmie avoti un personīgais mācību plāns.

Esošo nākotnes ideju sarakstu aizstāt ar saitēm uz konkrēti izmantojamiem materiāliem. Aprēķinus un citus papildrīkus attīstīt tad, kad konkrēta stunda tos prasa.

### Stundu katalogs

Katrai kartītei parādīt tēmu, vienu praktisko rezultātu, līmeni, priekšzināšanas, plānoto video un aktīvās prakses ilgumu. Norādīt faktisko sagatavotības stāvokli: “Uzmetums”, “Scenārijs pārskatīts”, “Izmēģināts darbnīcā” vai “Video pievienots”. Sākotnēji esošās stundas atzīmēt kā uzmetumus.

Pamatā lietot parastas sadaļas un enkursaites. Kad materiālu skaits pieaug, var pievienot nelielu lokālu filtru pēc tēmas vai līmeņa, saglabājot pilnu sarakstu pieejamu bez JavaScript. Filmēšanas statuss nedrīkst aizstāt atsevišķu tehniskās pārbaudes pierakstu.

### Pārējo sadaļu loma

- **Pētījumi:** saglabāt visus 100 rakstus un adreses; izmantot tos kā detalizētus paskaidrojumus un testu protokolus. Sākt ar stundām atlasītiem rakstiem, vēlāk pievienot pretējā virziena saites “Izmantots šajā video stundā”.
- **Rīki:** stundu sarakstos izmantot esošos rīku enkurus, piemēram, [biezuma līstes](tools/index.html#biezuma-listes). Norādīt konkrēto lomu attiecīgajā ainā.
- **Studiju modelis:** katru sākuma prasmju bloku sasaistīt ar stundām; saglabāt personīga, neoficiāla mācību modeļa formulējumu. ECTS imitācijas vietā ieteicams parādīt personīgos darba posmus un praktiskos rezultātus.
- **Akadēmiskie avoti:** atlasīt avotu attiecīgajam apgalvojumam, pierakstīt pārbaudīto nodaļu/lappusi un ierobežojumus. Saraksta esamība pati par sevi nav scenārija faktu pārbaude.

## 4. Vienotas stundas saturs

Paplašināt esošo `video/sagatave.html`. Saglabāt vienu galveno stundas HTML lapu, kuras saturu var izmantot gan gatavojoties, gan filmējot, gan praktizējot.

| Bloks | Nepieciešamais saturs |
| --- | --- |
| Stundas mērķis | Viena prasme un viens redzams rezultāts; kas apzināti paliek nākamajai stundai. |
| Pirms šīs stundas | Konkrēta priekšzināšana, saite uz iepriekšējo prasmi un sagatavojamā māla vai darba stadija. |
| Ilgumi | Plānotais video, aktīvā prakse, filmēšanas sesija, gaidīšana līdz nākamajam posmam. |
| Rīki un materiāli | Vajadzīgie daudzumi, rīku saites, iepriekš sagatavoti paraugi un pieļaujamie aizvietojumi. |
| Filmēšanas sagatavošanās | Tālruņa/kameras vieta, gaisma, darba fons, skaņas pārbaude, roku un darbības redzamība. |
| Drošības robežas | Konkrēti riski un darbības, pie kurām jāpārtrauc vai jāiesaista speciālists. |
| Ainu scenārijs | Secīgas ainu kartītes ar vienādu struktūru. |
| Kļūdas un labojumi | Pazīme, iespējamais iemesls, viena pārbaudāma izmaiņa, kad mēģināt no jauna. |
| Prakses uzdevums | Pamatuzdevums, izvēles atkārtojums, pārbaude un žurnāla ieraksts. |
| Palīgmateriāli | Īsa darba lapa, kontrolsaraksts, attēli/shēmas un 2-4 tieši saistīti pētījumi. |
| Pārskatīšanas pieraksts | Scenārija datums, izmantotie materiāli, pārbaudītie avoti un faktiskā izmēģinājuma rezultāti. |
| Tālāk | Iepriekšējā/nākamā stunda, visa cikla saturs un saistīta prasme. |

Lapas augšā pievienot satura enkursaites “Sagatavošanās”, “Ainas”, “Prakse”, “Palīgmateriāli”. Vienmēr redzama paliek mērķa un drošības informācija. Izvēles skaidrojumiem var lietot `details`, bet obligātie darba soļi jālasa bez papildu atvēršanas.

### Ainas kartītes struktūra

1. **Identifikators un ilgums:** piemēram, `rata-02-a04`, plānotais intervāls un ainas ilgums.
2. **Ainas uzdevums:** ko skatītājam tieši šeit jāsaprot vai jāierauga.
3. **Kadrējums:** kopplāns, sānskats, skats no augšas vai tuvplāns; kas nedrīkst pazust aiz rokām.
4. **Darbība:** konkrēta kustību secība un parauga sākuma/beigu stāvoklis.
5. **Ieteicamais citāts:** 1-3 īsi, izrunājami teikumi, kas atbilst redzamajam.
6. **Ekrāna teksts:** īsa atslēgas frāze, mērījums vai marķējums. Subtitri ir atsevišķs pilnā runas teksta slānis.
7. **Pauze un skaņa:** kur ļaut skatīties kustību bez runas; kur vajadzīga aizkadra balss.
8. **Pārbaudes kadrs:** kā redzams, ka darbība izdevusies; pēc vajadzības salīdzinājuma paraugs.
9. **Montāžas piezīme:** parauga maiņa, atkārtojums, laika pārlēciens vai nākamais kadrs.

Vienā ainā risināt vienu skaidru jautājumu. Demonstrācijai vajadzīgo laiku noteikt pēc izmēģinājuma; esošais aptuveni trīs minūšu formāts nav obligāts ierobežojums. Garāku prasmi var sadalīt ar nodaļu marķieriem, saglabājot pilnu kustību skatāmu.

### Runājamā teksta principi

- Marķēt to kā **“Ieteicamais runājamais teksts”**. Ļaut pasniedzējam saglabāt savu valodu, nezaudējot tehnisko jēgu.
- Teikumā savienot darbību ar novērojumu: “Aplūko sienu profilā. Šeit redzams biezāks posms.”
- Skaidri atšķirt novēroto, pieņēmumu un vēlāk pārbaudāmo: “Šajā paraugā…”, “Iespējamais iemesls…”, “Pēc žūšanas pārbaudīsim…”.
- Nemainīt obligātas drošības norādes par izvēles ieteikumiem un nesolīt garantētu iznākumu.
- Autora tekstu nepasniegt kā kāda meistara vai publikācijas citātu. Tiešam citātam vajadzīgs pārbaudīts avots un precīzs atveidojums.
- Pirms laiku apstiprināšanas tekstu nolasīt skaļi vienlaikus ar kustību. Tabulā paredzēt arī klusos demonstrējuma posmus.

## 5. Konkrēti papildinājumi visām 18 stundām

Tālāk dotie citāti ir redakcionāli piemēri. Norādītie pētījumi ir esoši palīgmateriālu kandidāti; ieviešot jāpārskata attiecīgā metode un tās saskaņa ar demonstrējumu.

### Virpošana uz podnieka virpas

**1. [Rata un darbnīcas sagatavošana](video/rata-01-drosiba-un-sagatavosana.html)**

- Rezultāts: sagatavota darbstacija un aizpildīta pirmsdarba pārbaude.
- Ainu papildinājumi: kopplāns ar darba zonu, sānskats sēdpozīcijai, pedāļa kontroles kadrs, rīku sasniedzamības demonstrējums un uzkopšanas vieta. Filmēšanas aprīkojuma vietu atzīmēt telpas skicē.
- Palīgmateriāls: vienas lapas darbstacijas kontrolsaraksts; [rīku minimums](research/articles/078-instrumentu-minimums-sakuma-darbnicai.html) un [darbnīcas iekārtojums](research/articles/071-mazas-keramikas-darbnicas-iekartojums.html).
- Citāts: „Vispirms pārbaudu darba vietu. Rīkiem jābūt sasniedzamiem, bet kājām un pedālim vajadzīga brīva vieta.”
- Precizējums: māla uzlikšanas un centrēšanas mēģinājumus nodalīt no sagatavošanās pamatuzdevuma.

**2. [Māla centrēšana](video/rata-02-mala-centresana.html)**

- Rezultāts: centrēts māla gabals un salīdzināmi pieraksti par trim mēģinājumiem.
- Ainu papildinājumi: necentrēta un centrēta parauga salīdzinājums vienā rakursā; roku atbalsta sānskats; viens nepārtraukts centrēšanas demonstrējums; pārbaude pirms atvēršanas.
- Palīgmateriāls: mēģinājumu lapa ar māla kodu, masu, darba laiku un novēroto svārstību; [centrēšanas metode](research/articles/032-mala-centresana-uz-podnieka-virpas.html) un [māla sagatavošana](research/articles/031-mala-sagatavosana-virposanai.html).
- Citāts: „Skaties uz māla ārējo malu attiecībā pret roku. Šajā mēģinājumā tā vēl kustas uz sāniem.”
- Precizējums: mīcīšanu parādīt kā priekšnosacījumu vai īsu atkārtojumu; izvērsto mīcīšanas demonstrāciju plānot atsevišķi.

**3. [Atvēršana un pamatne](video/rata-03-cauruma-atversana.html)**

- Rezultāts: atvērta forma ar pārbaudītu pamatni.
- Ainu papildinājumi: skats no augšas uz centru; sānskats roku atbalstam; biezuma pārbaude ar skaidri norādītu virpas stāvokli; atsevišķa mācību parauga šķērsgriezums.
- Palīgmateriāls: pamatnes skice un mērījuma vietas; [pirmais cilindrs](research/articles/033-pirma-cilindriska-forma-trenina-metode.html) un [biezuma kontrole](research/articles/038-ka-kontrolet-sienas-biezumu.html).
- Citāts: „Atvērums jau ir redzams, bet pamatnes biezumu vēl pārbaudīsim. Šim mācību paraugam parādīšu arī šķērsgriezumu.”
- Precizējums: biezuma skaitļus piesaistīt konkrētam paraugam un tā turpmākajai apstrādei.

**4. [Sienu pacelšana](video/rata-04-sienu-pacelsana.html)**

- Rezultāts: mācību cilindrs ar novērtētu sienas profilu.
- Ainu papildinājumi: pilns vilciens nepārtrauktā kadrā; roku novietojuma tuvplāns; profila salīdzinājums pēc katra vilciena; atsevišķa cilindra šķērsgriezums.
- Palīgmateriāls: cilindra profila darba lapa; [cilindra treniņš](research/articles/033-pirma-cilindriska-forma-trenina-metode.html) un [iesācēja kļūdas](research/articles/040-iesaceja-kludas-virposana.html).
- Citāts: „Šo vilcienu parādīšu bez pārtraukuma. Pēc tam apskatīsim, kur sienā palicis vairāk māla.”
- Precizējums: kļūdas ainā parādīt novērojumu un vienu nākamā mēģinājuma izmaiņu, neizmantot universālu vilcienu skaitu.

**5. [Formas veidošana un malas apdare](video/rata-05-formas-veidosana.html)**

- Rezultāts: viena izvēlēta forma, piemēram, maza bļoda, salīdzināta ar sākuma skici.
- Ainu papildinājumi: profila skice pirms darba; iekšējās rokas un ribas sadarbība; malas tuvplāns; gala profils vienā nemainīgā kameras pozīcijā.
- Palīgmateriāls: profila skice ar paredzēto augstumu un platumu; [mazas bļodas veidošana](research/articles/034-ka-virpot-mazu-blodu.html).
- Citāts: „Šodien veidojam šo bļodas profilu. Salīdzināšu ar skici gan sānu līniju, gan malas formu.”
- Precizējums: vienā stundā izvēlēties vienu galarezultātu; krūzes formu atstāt atsevišķam vingrinājumam.

**6. [Nogriešana un žāvēšanas sākums](video/rata-06-nogriesana-zavesana.html)**

- Rezultāts: pārvietots un marķēts darbs ar turpmākās novērošanas pierakstu.
- Ainu papildinājumi: stieples izmēģinājums uz rezerves parauga; nogriešanas sānskats; izvēlētā pārvietošanas paņēmiena demonstrācija; etiķete; vēlāk uzņemts salīdzinājuma kadrs.
- Palīgmateriāls: darba etiķete un žūšanas novērojumu lapa; [nogriešana](research/articles/039-ka-nogriezt-formu-no-virpas.html) un [žūšanas plaisas](research/articles/041-kapec-keramika-plaisa-zusanas-laika.html).
- Citāts: „Pierakstu māla kodu un datumu. Nākamais salīdzinājuma kadrs būs pēc atsevišķa žūšanas posma.”
- Precizējums: gala kadrs rāda žāvēšanai sagatavotu darbu; turpmāko žūšanas laiku uzrādīt atsevišķi.

### Veidošana ar rokām

**1. [Rīki un sagatavošanās](video/veid-01-riki-un-sagatavosana.html)**

- Rezultāts: konkrētajam vingrinājumam gatava darba virsma, rīki un marķētas māla porcijas.
- Ainu papildinājumi: rīki skatā no augšas ar nosaukumiem; darba virsmas lietošanas paraugs; sagatavoto porciju salīdzinājums; mitrā uzkopšana.
- Palīgmateriāls: nepieciešamā minimuma saraksts; [rīku minimums](research/articles/078-instrumentu-minimums-sakuma-darbnicai.html).
- Citāts: „Šai stundai sagatavoju tikai tos rīkus, kurus izmantosim. Katram ir sava vieta uz galda.”
- Precizējums: virsmas izvēli sasaistīt ar tās kopšanu; mīcīšanas aprakstā nesolīt ar virsmas apskati pierādīt gaisa ieslēgumu neesamību.

**2. [Iespiešanas tehnika](video/veid-02-iespiesanas-tehnika.html)**

- Rezultāts: neliels trauciņš un pārbaudīts tā sienas profils.
- Ainu papildinājumi: īkšķa vieta tuvplānā; pakāpeniska trauciņa pagriešana; malas apdare; atsevišķs pārgriezts mācību paraugs.
- Palīgmateriāls: trīs mēģinājumu salīdzinājuma lapa; [neliela bļoda bez virpas](research/articles/022-neliela-bloda-bez-virpas.html).
- Citāts: „Trauciņu pagriežu pa nelielam gabalam. Beigās salīdzināsim sienas biezumu dažādās vietās.”
- Precizējums: biezuma pārbaudes demonstrācijai izvēlēties skaidru metodi un norādīt, kurš paraugs tai paredzēts.

**3. [Rullīšu tehnika](video/veid-03-rullisu-tehnika.html)**

- Rezultāts: neliela siena no vairākām savienotām kārtām ar pārbaudītu savienojuma vietu.
- Ainu papildinājumi: rullīša salīdzinājums ar paraugu; abu galu savienošana; savienojuma iekšpuses tuvplāns; atsevišķs šķērsgriezums.
- Palīgmateriāls: kārtu un savienojumu skice; [māla detaļu savienošana](research/articles/024-mala-detalu-savienosana.html).
- Citāts: „Parādīšu savienojumu arī no iekšpuses. No ārpuses gluda siena vēl neatklāj visu, kas noticis savienojuma vietā.”
- Precizējums: pirms šīs stundas dot īsu saiti uz savienošanas pamatiem, jo pašreizējā ciklā pilnā savienošanas stunda ir vēlāk.

**4. [Plākšņu tehnika](video/veid-04-plaksnu-tehnika.html)**

- Rezultāts: pēc vienas veidnes piegrieztas detaļas turpmākam savienošanas vingrinājumam.
- Ainu papildinājumi: līstīšu un veltņa skats no augšas; biezuma pārbaude; veidne; plāksnes pārvietošana; agrāk sagatavots paraugs citā mitruma stadijā.
- Palīgmateriāls: drukājama veidne ar mēroga pārbaudi un detaļu marķējumiem; [vienmērīga plāksne](research/articles/021-plaksnes-tehnika-vienmerigs-biezums.html) un [ādas cietības stadija](research/articles/044-adas-cietibas-stadija.html).
- Citāts: „Šī plāksne ir tikko izrullēta. Blakus redzamais paraugs sagatavots agrāk, un tam ir cita stingrība.”
- Precizējums: atsevišķi plānot elastīgas un stingrākas plāksnes lietojumu; montāžā marķēt parauga nomaiņu.

**5. [Savienošana](video/veid-05-savienosana.html)**

- Rezultāts: marķēts savienojuma paraugs ar sākotnējo un vēlākas pārbaudes pierakstu.
- Ainu papildinājumi: abu detaļu stāvokļa salīdzinājums; ieskrāpējuma tuvplāns; uzklājuma un saspiešanas demonstrācija; šķērsgriezums uz rezerves parauga; rezultāts pēc žūšanas.
- Palīgmateriāls: savienojuma novērojumu lapa; [savienošana](research/articles/024-mala-detalu-savienosana.html) un [ieskrāpēšana un šlikeris](research/articles/025-skrapesana-un-slikeris-savienojumos.html).
- Citāts: „Tagad fiksējam savienojuma sākuma stāvokli. To, kā tas uzvedīsies žūstot, pierakstīsim vēlāk.”
- Precizējums: pārskatīt absolūtos apgalvojumus par cietības stadiju un biezu šlikera kārtu; scenāriju piesaistīt konkrētajam mālam un demonstrācijas metodei.

**6. [Apdare un žāvēšana](video/veid-06-apdare-zavesana.html)**

- Rezultāts: apdarīts darbs ar marķējumu un žūšanas novērojumu plānu.
- Ainu papildinājumi: virsma pirms/pēc apdares vienādā gaismā; savienojumu apskate; pārsegums; vēlākas dienas foto no tā paša rakursa.
- Palīgmateriāls: žūšanas dienasgrāmata; [žūšanas plaisas](research/articles/041-kapec-keramika-plaisa-zusanas-laika.html) un [mitruma kontrole](research/articles/049-mitruma-kontrole-maza-darbnica.html).
- Citāts: „Fotografēju darbu no tās pašas vietas. Tā nākamajā pārbaudē varēšu salīdzināt malu, pamatni un savienojumus.”
- Precizējums: dekorēšanu atstāt izvēles paplašinājumam; nepadarīt vienu pārseguma atvēršanas grafiku par noteikumu visiem darbiem.

### Darbnīcas labiekārtošana

**1. [Telpas izvēle un plānojums](video/telpa-01-telpas-izvele-un-planojums.html)**

- Rezultāts: telpas skice ar darba zonām un neatbildēto tehnisko jautājumu sarakstu.
- Ainu papildinājumi: telpas izmēri; ieejas un pārvietošanās ceļš; mitrā darba, glabāšanas un iespējamā krāsns zona; filmēšanas vieta skicē.
- Palīgmateriāls: telpas izvērtēšanas lapa; [mazas darbnīcas iekārtojums](research/articles/071-mazas-keramikas-darbnicas-iekartojums.html).
- Citāts: „Skicē atzīmēju to, ko varu izmērīt, un atsevišķi pierakstu jautājumus, kas vēl jāpārbauda.”
- Precizējums: grīdas pieklauvēšanu nepasniegt kā nestspējas pārbaudi; telpas izvērtējums nav uzstādīšanas apstiprinājums.

**2. [Grīda un darba virsmas](video/telpa-02-grida-un-virsmu-aizsardziba.html)**

- Rezultāts: sakārtota darba zona ar dokumentētu virsmu kopšanas kārtību.
- Ainu papildinājumi: seguma malas un savienojumi; darba virsmas nostiprinājums; pieejamība tīrīšanai; pirms/pēc skats.
- Palīgmateriāls: virsmu pārbaudes lapa; [ikdienas tīrīšanas sistēma](research/articles/080-darbnicas-ikdienas-tirisanas-sistema.html).
- Citāts: „Pārbaudu arī malas un savienojumus. Tīrīšanai jābūt iespējai piekļūt visai darba zonai.”
- Precizējums: pārsegu un paklāju risinājumus nodalīt no krāsns zonas prasībām; materiālu izvēli pārbaudīt attiecīgajam lietojumam.

**3. [Ūdens un mitruma pārvaldība](video/telpa-03-udens-un-mitruma-parvaldiba.html)**

- Rezultāts: marķēta savākšanas kārtība, ūdens sistēmas shēma un atsevišķs žūšanas novērojumu uzdevums.
- Ainu papildinājumi: trauku marķējumi; izvēlētās nosēdumu sistēmas shēma; apkopes piekļuve; mitruma pieraksts; paraugu plaukts.
- Palīgmateriāls: apkopes lapa; [māla atlikumu pārstrāde](research/articles/048-ka-parstradat-mala-atlikumus.html) un [mitruma kontrole](research/articles/049-mitruma-kontrole-maza-darbnica.html).
- Citāts: „Vispirms parādīšu savākšanas traukus un to marķējumu. Pieslēgtās sistēmas uzbūvi pārbaudām pēc tās instrukcijas.”
- Precizējums: aizstāt nepietiekami pamatoto “spainis ar sietu zem izlietnes” uzstādīšanas ainu ar pārbaudīta risinājuma skaidrojumu. Mitruma pārvaldību vēlāk var izvērst atsevišķā stundā.

**4. [Ventilācija un putekļi](video/telpa-04-ventilacija-un-putekli.html)**

- Rezultāts: darbību un putekļu avotu karte, kopšanas kārtība un jautājumi ventilācijas izvērtēšanai.
- Ainu papildinājumi: darbību karte uz papīra; mitrās uzkopšanas secība; telpas gaisa apmaiņas un nosūces shēmu skaidrojums; aizsardzības aprīkojuma kopšana pēc instrukcijas.
- Palīgmateriāls: putekļu kontroles pārbaudes lapa; [putekļu kontrole](research/articles/074-puteklu-kontrole-keramikas-darbnica.html), [mitrā uzkopšana](research/articles/075-silicija-putekli-un-mitra-uzkopsana.html), [krāsns telpas ventilācija](research/articles/076-ventilacija-krasns-telpa.html).
- Citāts: „Sāksim ar darbību sarakstu. Katrai atzīmēsim, kā rodas putekļi un kāds risinājums vēl jāpārbauda.”
- Precizējums: izņemt vispārīgu solījumu, ka ventilators logā atrisina putekļu kontroli. Putekļu demonstrācijas veidot ar shēmu; filmēšanai apzināti neizraisīt putekļu mākoni.

**5. [Elektrība un aprīkojuma izvietojums](video/telpa-05-elektriba-un-aprikojums.html)**

- Rezultāts: konkrētās iekārtas datu lapa, plānojuma atzīmes un jautājumi elektriķim.
- Ainu papildinājumi: modeļa marķējums; ražotāja instrukcijas attiecīgā vieta; attālumu pieraksts; ūdens un vadu ceļš skicē; speciālista pārbaudes uzdevums.
- Palīgmateriāls: iekārtas prasību un atbildēto jautājumu lapa; [elektrības drošība](research/articles/077-elektribas-drosiba-keramikas-krasnij.html) un [krāsns izvērtēšana](research/articles/073-elektriskas-krasns-izvertesana-majas-darbnicai.html).
- Citāts: „Pierakstu iekārtas modeli un instrukcijas prasības. Pieslēguma atbilstību pārbauda kvalificēts elektriķis.”
- Precizējums: iesācēja uzdevumā paredzēt dokumentēšanu un plānošanu. Elektroinstalācijas darbus neiekļaut 60 minūšu patstāvīgajā vingrinājumā.

**6. [Uzglabāšana un organizācija](video/telpa-06-uzglabasana-un-organizacija.html)**

- Rezultāts: marķēta glabāšanas sistēma, kurā var izsekot paraugu un darba stadiju.
- Ainu papildinājumi: etiķetes tuvplāns; viena darba ceļš starp stadijām; rīku atgriešana vietā; materiāla oriģinālā marķējuma saglabāšana.
- Palīgmateriāls: drukājamas etiķetes un plauktu karte; [materiālu glabāšana](research/articles/079-glazuru-un-materialu-glabasana.html) un [pierakstu sistēma](research/articles/098-darbu-un-eksperimentu-pierakstu-sistema.html).
- Citāts: „Pēc marķējuma jāvar saprast, kas tas ir, kurā stadijā tas atrodas un kur meklēt pierakstus.”
- Precizējums: cikla noslēgumā parādīt paveikto un atlikušās pārbaudes, nepasludinot visu darbnīcu par gatavu tikai pēc glabāšanas sakārtošanas.

## 6. Divi izvērsti scenārija piemēri

Šie piemēri parāda detalizācijas līmeni. Laiki ir sākotnējas montāžas aplēses, kas jāpārbauda ar demonstrējumu un skaļu teksta nolasīšanu. Katrā intervālā īsajam citātam seko darbības vērošanas laiks; nepārtrauktu runāšanu visā intervālā neparedzēt.

### Piemērs A: māla centrēšanas stunda

**Priekšnosacījums:** apgūta darbstacijas sagatavošana, sagatavots māls. **Rezultāts:** parādīts centrēšanas mēģinājums un tā pārbaude. **Plānotais video:** 4:00.

Sagatavot trīs viena māla porcijas ar pierakstītu masu, ūdens trauku, sūkli, darbam vajadzīgos rīkus un mēģinājumu lapu. Filmēšanai paredzēt sānskatu, kur redzams ķermeņa un roku atbalsts, un atsevišķu tuvplānu. Ja filmē ar vienu kameru, tuvplāna atkārtojumam izmantot marķētu paraugu un skaidri norādīt demonstrācijas atkārtojumu.

| Laiks | Aina un attēls | Ieteicamais runājamais teksts | Ekrāna teksts un pārbaude |
| --- | --- | --- | --- |
| 0:00-0:20 | Divi īsi parauga kadri no vienas pozīcijas: redzama sānu svārstība un vienmērīgāka rotācija. | „Šeit māla ārējā mala vēl kustas uz sāniem. Šīs stundas beigās pratīsim salīdzināt savu mēģinājumu ar vienmērīgāku rotāciju.” | “Ko vērot: sānu svārstība”. Jāredz pati atšķirība. |
| 0:20-0:45 | Māla kods un masa, sagatavotā darbstacija un roku atbalsts sānskatā. | „Pierakstu māla kodu un masu. Parādu arī savu sēdpozīciju, jo tuvplānā roku atbalstu nevarēs redzēt.” | “Māls, masa, sākuma stāvoklis”. Dati sakrīt ar darba lapu. |
| 0:45-1:10 | Māla novietošana un sagatavošana pēc pārskatītās metodes; skaidri redzams virpas stāvoklis. | „Vispirms sagatavoju mālu darbam uz virpas. Tālāk vienu centrēšanas mēģinājumu redzēsi pilnā secībā.” | “Demonstrācijas sākums”. Kadrā redzamas abas rokas. |
| 1:10-2:05 | Nepārtraukts galvenās kustības kadrs; sākumā īss komentārs, tālāk procesa skaņa. | „Tagad vēro roku atbalstu un kustības secību. Šo posmu parādīšu bez montāžas pārrāvuma.” | Īsas atzīmes atbilstoši demonstrējumam. Ja darbība ilgst vairāk, pagarina ainu. |
| 2:05-2:40 | Atsevišķs roku tuvplāns, marķēts kā atkārtojums. | „Atkārtojumā pievērs uzmanību tam, kur rokas pieskaras mālam. Salīdzini šo skatu ar iepriekš redzamo sānskatu.” | “Atkārtojums tuvplānā”. Rokas neaizsedz būtisko kontaktu. |
| 2:40-3:15 | Mēģinājuma pārbaude tajā pašā rakursā kā ievadā. | „Salīdzinām ārējo malu ar sākuma kadru. Vai sānu kustība ir mazinājusies? Ja vēl ir redzama svārstība, pierakstām to.” | “Salīdzini sākumu un rezultātu”. Novērojums redzams arī bez skaņas. |
| 3:15-3:40 | Otrs marķēts mēģinājums un darba lapa; parādīta viena izvēlēta izmaiņa. | „Nākamajā mēģinājumā mainīšu vienu lietu. Pieraksts palīdzēs saprast, ko tieši esmu mainījis.” | “Viena izmaiņa”. Parauga kods sakrīt ar pierakstu. |
| 3:40-4:00 | Trīs mēģinājumu lapa, uzkopta darba vieta un norāde uz atvēršanas stundu. | „Tavs uzdevums ir veikt un salīdzināt trīs mēģinājumus. Pie atvēršanas pārej pēc centrēšanas pārbaudes.” | “Pieraksti un salīdzini”. Nosaukta nākamā prasme. |

Drošības atgādinājumu no pārskatītās stundas saglabāt gan pirms scenārija, gan attiecīgajā darbības vietā. Filmēšanas ierīces un vadus izvietot tā, lai demonstrācija var notikt bez traucējumiem. Neizveidot filmējamu “kļūdu”, kas prasa nedrošu rīcību.

### Piemērs B: darbnīcas telpas plānojuma stunda

**Priekšnosacījums:** pieejama izvērtējamā telpa. **Rezultāts:** anotēta skice ar pārbaudāmo jautājumu sarakstu. **Plānotais video:** 3:30.

Sagatavot mērlenti, papīru, zīmuli, telpas foto un pieejamo iekārtu izmēru informāciju. Filmēt sākotnējo telpu un skici no vienādiem atskaites punktiem. Aprīkojuma vietas sākumā attēlot ar papīra kontūrām vai skici.

| Laiks | Aina un attēls | Ieteicamais runājamais teksts | Ekrāna teksts un pārbaude |
| --- | --- | --- | --- |
| 0:00-0:20 | Tukšā telpa kopplānā, pēc tam plānojuma lapas paraugs. | „Šodien izveidosim telpas darba skici. Tajā atzīmēsim arī jautājumus, kuri vēl jānoskaidro.” | “Rezultāts: skice un pārbaudes jautājumi”. |
| 0:20-0:55 | Izmēru nolasīšana, durvis un logi; pārslēgums uz pierakstu. | „Katru izmēru uzreiz ierakstu skicē. Atzīmēju arī durvju atvēršanās virzienu.” | Redzams mērījums un atbilstošais pieraksts. |
| 0:55-1:30 | Skats no augšas uz plānu, kur atzīmē mitro darbu, glabāšanu un pārvietošanās ceļu. | „Sāku ar darbību vietām un pārvietošanos starp tām. Tālāk pārbaudīšu, kur iederas konkrētais aprīkojums.” | “Darba zonas”. Katrai zonai ir nosaukums. |
| 1:30-2:05 | Iekārtas izmēru lapa un iespējamā novietojuma kontūra. | „Kontūra rāda iekārtas izmēru. Vajadzīgo apkārtējo telpu precizēšu pēc konkrētās iekārtas instrukcijas.” | “Pārbaudīt instrukcijā”. Izmērs nošķirts no uzstādīšanas prasībām. |
| 2:05-2:40 | Atsevišķa jautājumu lapa: elektrība, ventilācija, ūdens sistēma, grīdas nestspēja. | „Šos jautājumus nevar atrisināt tikai ar skici. Pierakstu, kas vēl jāpārbauda un kuram speciālistam jautāt.” | “Vēl jānoskaidro”. Katram jautājumam paredzēta atbildes vieta. |
| 2:40-3:10 | Telpas un skices salīdzinājums; atzīmēta kameras vieta un darba ceļš. | „Vēlreiz salīdzinu plānu ar telpu. Atzīmēju arī vietu, no kuras varēs redzēt demonstrējumu.” | “Telpa un skice”. Kameras vieta nekonfliktē ar darba ceļu. |
| 3:10-3:30 | Datēta skice un nākamās stundas norāde. | „Saglabāju skici ar datumu un atvērtajiem jautājumiem. Nākamajā stundā apskatīsim darba virsmu sagatavošanu.” | “Saglabā skici un jautājumus”. Rezultāts ir pārskatāms dokuments. |

## 7. Reālistisks laika un prakses modelis

Esošo 60 minūšu orientieri saglabāt kā plānošanas iespēju. Katrai stundai atsevišķi nosaukt:

- **Video ilgumu:** skatītāja laiks pēc montāžas.
- **Aktīvo praksi:** sagatavošanās, vingrinājumi, pārbaude, uzkopšana un žurnāls.
- **Filmēšanas sesiju:** paraugu un kadru sagatavošana, dublējumi, skaņas ieraksts un sakārtošana. Ilgumu precizēt izmēģinājumā.
- **Gaidīšanu:** apžūšana, žāvēšana, apdedzināšana, atdzišana vai speciālista apmeklējums, ja attiecas uz tēmu.

Centrēšanas pamatuzdevuma plānošanas piemērs:

| Darbība | Plānotais aktīvais laiks |
| --- | --- |
| Darba vieta un māla sagatavošana | 10 min |
| Trīs mēģinājumi ar īsām pauzēm | 30 min |
| Novērojumu salīdzināšana | 5 min |
| Mitrā uzkopšana | 10 min |
| Žurnāla ieraksts | 5 min |
| Kopā | 60 min |

Pie laika tabulas rakstīt “Plānotais sadalījums”. Pēc izmēģinājuma pievienot datumu, dalībnieka pieredzes līmeni, sagatavoto paraugu skaitu un novērotos laikus. Ar vienu izmēģinājumu pamatot tā konkrētos rezultātus; vidējo ilgumu norādīt tikai kopā ar vairāku izmēģinājumu skaitu un apstākļiem.

Ja uzdevums pabeigts ātrāk, piedāvāt vienu salīdzinājuma mēģinājumu vai dokumentēšanas uzdevumu. Ja nepietiek laika, norādīt jēgpilnu apstāšanās vietu un saglabājamo paraugu stāvokli. Žūšanas pārejas filmēt ar iepriekš sagatavotiem paraugiem un uzrakstu par laika pārlēcienu.

## 8. Filmēšanas palīgmateriāli un tehniskais risinājums

### Materiāli, kas tieši palīdz filmēt

| Palīgmateriāls | Saturs | Kā uzturēt |
| --- | --- | --- |
| Filmēšanas kontrolsaraksts | Paraugi, rīki, kadri, skaņa, marķējumi, attiecīgie drošības punkti. | Stundas lapas sadaļa, kuru var izdrukāt. |
| Ainu un kadru saraksts | Ainas ID, parauga kods, rakurss, vajadzīgais sākuma/beigu stāvoklis. | No tās pašas HTML ainu struktūras; neveidot otru neatkarīgu scenāriju. |
| Runājamais teksts | Ainu secībā izkārtoti ieteicamie teikumi un paužu norādes. | Saglabāt ainu kartītēs; atsevišķu skatu veidot no šī satura tikai tad, ja tas ir vajadzīgs. |
| Darba lapa | Sākuma apstākļi, mēģinājumi, novērojumi, nākamā izmaiņa. | Drukājams stundas bloks; atsevišķa kopīga lapa tikai atkārtoti izmantojamiem materiāliem. |
| Paraugu karte | Kods, māls, darba stadija, vajadzīgā aina, saistītais foto. | Viena tabula katrā stundā. |
| Foto un shēmas | Roku vietas, šķērsgriezums, profila salīdzinājums, telpas plāns. | Lokāli faili ar latvisku alternatīvo tekstu un skaidru parauga identifikāciju. |
| Montāžas pieraksts | Ainas ID, dublējums, lietojamā fragmenta laiks, vajadzīgais pārlēciens vai uzraksts. | Drukājama tabula un vienkārša failu nosaukumu vienošanās. |

Faila nosaukuma piemērs nākotnes materiālam: `rata-02-a04-dublis-02.mp4`. Neapstrādātus lielos filmēšanas failus glabāt atsevišķā lokālā arhīvā. Vietnē pievienot tikai izmantojamos attēlus, dokumentus un vajadzības gadījumā sagatavotos gala video ar atbilstošiem vietējiem failiem. Video pievienošanai paredzēt `<video controls>`, latviskus subtitrus un lasāmu transkriptu; atskaņotāju pievienot tad, kad video pastāv.

### Failu līmeņa izmaiņu karte

| Fails vai daļa | Paredzētā izmaiņa |
| --- | --- |
| `index.html` | Video sagatavošanas ieeja, divi satura virzieni un atbalsta bibliotēkas saites. |
| `video/index.html` | Pilnvērtīgs katalogs, rezultāti, priekšnosacījumi, ilgumi un faktiskais sagatavotības stāvoklis. |
| `video/sagatave.html` | Vienotie stundas un ainas lauki; saprotami aizpildāmi vietturi. |
| `video/video.css` | Paplašinātas ainu kartītes, palīgmateriālu bloki, mobilais izkārtojums un drukas pielāgojumi. |
| `video/rata-*.html`, `video/veid-*.html`, `video/telpa-*.html` | Visu 18 esošo lapu papildināšana, saglabājot adreses un secības navigāciju. |
| `research/research.css` | Tikai tie uzlabojumi, kas vajadzīgi vairākām sadaļām; pārbaudīt ietekmi uz pētījumiem. |
| `research/articles/*.html` | Atlasītajos rakstos saites uz stundām un pamatoti precizējumi; saglabāt visus 100 rakstus. |
| `tools/index.html` | Saites uz atbilstošajām stundām izvēlētajos rīku ierakstos. |
| `uni/index.html` | Personīgā mācību ceļa sasaistīšana ar praktiskajām stundām. |
| `academic-research/index.html` | Atlasīto avotu pārbaudes pieraksti un norādes, kuru scenārija jautājumu tie palīdz izvērtēt. |
| `AGENTS.md`, `README.md` | Pēc ieviešanas atjaunot vietnes aprakstu un jaunās stundas sagatavošanas kārtību. |

Materiālu apakšmapi `video/materiali/` veidot līdz ar pirmajiem faktiskajiem attēliem vai koplietojamām veidnēm. Neveidot jaunu augšējā līmeņa sadaļu tam, kas iederas esošajā video sistēmā.

### Saskarne un druka

- Saglabāt esošo kopīgo vizuālo sistēmu. Lielākā izmaiņa ir informācijas secībā un darbam vajadzīgajā detalizācijā.
- Mobilajā skatā ainas izvietot vienā kolonnā; blakus novietotus attēlus un tekstu izmantot tikai pietiekami platā skatā.
- Garus scenārijus veidot ar ainu kartītēm. Tabulām izmantot esošo ritināšanas ietvaru, piemēram, prakses laiku un paraugu datiem.
- Drukā pārbaudīt teksta krāsas, lapu platumu un ainu pārlēcienus. Lietot `break-inside: avoid` īsām kartītēm; ļoti garas ainas sadalīt saprātīgos blokos.
- Drukā saglabāt stundas nosaukumu, ainu ID, versijas datumu, runājamo tekstu un attiecīgos drošības atgādinājumus.
- Vispirms nodrošināt pārlūka drukāšanu un saglabāšanu PDF formātā. Atsevišķi uzturamus PDF veidot tikai materiāliem ar konkrētu vajadzību, piemēram, mēroga veidnei.
- Bez JavaScript paliek pieejama visa lasāmā informācija, navigācija un drukāšana. Vēlāks lokāls skripts var saglabāt ainu atzīmes vai kopēt tekstu; šīs ērtības ievieš pēc satura pārbaudes.

## 9. Tehniski jutīgo scenāriju pārskatīšana

Šie ir plāna redakcijas uzdevumi, nevis gatavi iekārtu uzstādīšanas norādījumi. Pārbaudītie ārējie materiāli palīdz noteikt pārskatāmos jautājumus; konkrētās darbnīcas risinājums jāvērtē atbilstoši tās apstākļiem.

**Putekļu stunda.** Atšķirt telpas gaisa apmaiņu no nosūces pie konkrētas darbības. Piemēram, HSE norādēs sausai neapdedzinātu izstrādājumu apdarei ir aprakstīta norobežota darba vieta ar vietējo nosūci. No tā izriet redakcionāls secinājums: esošās stundas vispārīgais ventilatora ieteikums ir pārāk plašs, lai attiektos uz visām uzskaitītajām darbībām. [Pārbaudītais HSE materiāls par sauso apdari](https://www.hse.gov.uk/pubns/guidance/cr3.pdf).

**Uzkopšanas aina.** Parādīt konkrētu mitrās uzkopšanas secību. Ja piemin putekļsūcēju, precizēt iekārtas piemērotību, neaprobežojoties ar frāzi “smalks filtrs”. HSE liešanas darbu norādes atsevišķi apraksta mitro tīrīšanu un putekļsūcēja putekļu klasi. Šī materiāla lietojuma robežas jāņem vērā, atlasot norādes citām darbībām. [Pārbaudītais HSE materiāls par liešanas darbu vidi](https://www.hse.gov.uk/pubns/guidance/cr2.pdf).

**Krāsns un elektrība.** Pamatot scenāriju ar faktiski izmantotā modeļa instrukciju. Skutt uzstādīšanas apraksts atsevišķi izdala attālumus, elektroapgādi un ventilācijas prasības. Tas pamato šo jautājumu nošķiršanu stundā, bet ASV piemēra spriegumus un izmērus nevar automātiski pārnest uz Latvijas darbnīcu. [Pārbaudītais ražotāja uzstādīšanas pārskats](https://skutt.com/skutt-resources/resources-just-for-you/architectural-specifications/installation/).

**Ūdens sistēma.** Esošajā stundā nav aprakstīta pietiekami konkrēta pieslēguma un apkopes shēma. Nākamajai redakcijai atlasīt faktiski izmantojamo risinājumu un tā instrukciju. Gleco piemērs rāda, ka nosēdumu savākšanas ierīcei ir konkrētas sastāvdaļas, pieslēguma un pieejamības nosacījumi; tas nav apliecinājums esošās paštaisītās shēmas atbilstībai. [Pārbaudītais nosēdumu savācēja instrukcijas piemērs](https://www.practicon.com/content/pdf/IFU_Library/Instructions-7078713-Gleco-Trap-System.pdf).

Šie avoti pārbaudīti šā plāna sagatavošanai. HSE materiālus izmantot kā tehnisku uzziņu, nepasniedzot tos kā Latvijas tiesisko prasību aprakstu. Pirms konkrētu skaitlisku vai normatīvu prasību publicēšanas pārbaudīt attiecīgo Latvijas situāciju un iekārtas dokumentāciju.

Nākamajās glazēšanas un apdedzināšanas stundās paredzēt materiālu marķējumu, ražotāja drošības informāciju, karstuma un elektrības robežas, kā arī māla, glazūras un apdedzināšanas kombinācijas dokumentēšanu. Pārtikas saskares piemērotības apgalvojumiem vajadzīga atbilstoša pārbaude; vizuāls piemērs vai darbnīcas vingrinājums pats par sevi šādu apgalvojumu nepamato.

## 10. Ieviešanas secība

| Posms | Darbi | Gatavības kritērijs |
| --- | --- | --- |
| 1. Satura precizēšana | Pārskatīt `telpa-03`, `telpa-04`, `telpa-05` tehniskās robežas un visās stundās labot acīmredzamās pretrunas. Vienādot terminus un laika apgalvojumus. | Scenārijos skaidri nošķirti demonstrējumi, novērojumi un vēl pārbaudāmi jautājumi. |
| 2. Sagatave un trīs izmēģinājuma stundas | Paplašināt sagatavi un CSS. Pilnībā izstrādāt `rata-02`, `veid-04`, `telpa-01`, lai pārbaudītu kustību, materiāla stadiju maiņu un telpas plānošanas piemēru. | Trīs pilnas stundas ar visiem obligātajiem blokiem, darba lapām un pārskatītu drukas skatu. |
| 3. Praktisks izmēģinājums | Izmēģināt runājamo tekstu, kadrus un prakses uzdevumus. Pierakstīt ilgumus un neskaidrās vietas. | Ir reāli pieraksti; pēc tiem labota sagatave. Bez izmēģinājuma stundas paliek attiecīgi marķētas. |
| 4. Vietnes ieejas un bibliotēkas saites | Pārveidot sākumlapu un katalogu; pievienot savstarpējās saites atlasītajos pētījumos, rīkos un studiju modelī. | No sākumlapas sasniedzama katra stunda un no tās vajadzīgie palīgmateriāli. |
| 5. Pārējās 15 stundas | Papildināt pa vienam ciklam, pārbaudot priekšnosacījumus, paraugu stadijas un pārejas starp stundām. | Visas 18 lapas atbilst satura kritērijiem; esošās adreses un secība darbojas. |
| 6. Vizuālie materiāli un ērtības | Pievienot faktiskos paraugu foto/shēmas, vajadzīgās drukājamās veidnes un tikai pamatotas lokālās saskarnes funkcijas. | Materiāli palīdz izpildīt ainu; nav tukšu atskaņotāju, vietturu attēlu vai obligātas JavaScript atkarības. |
| 7. Jauni prasmju bloki | Izvēlēties nākamo ciklu pēc pirmajās stundās konstatētajām vajadzībām. | Katram jaunam video ir priekšnosacījums, konkrēts rezultāts un pārskatīti palīgmateriāli. |

Pirmais pārskatāmais izmaiņu kopums: atjaunota sagatave, trīs pilnas izmēģinājuma stundas un tām nepieciešamie stili. Tas ļauj praktiski pārbaudīt detalizācijas līmeni pirms tā pārnešanas uz visām lapām.

### Vēlāki papildinājumi pēc esošo stundu sakārtošanas

| Iespējamā jaunā stunda | Konkrētais rezultāts | Esošais bibliotēkas pamats |
| --- | --- | --- |
| Māla sagatavošana un mīcīšana | Marķētas porcijas un sagatavošanas novērojumi. | Raksti 006, 031, 048. |
| Ādas cietības novērtēšana un apvirpošana | Viens dokumentēts apvirpošanas paraugs. | Raksti 044, 045. |
| Roktura veidošana un pievienošana | Roktura paraugs ar turpmākas pārbaudes pierakstu. | Raksti 027, 082. |
| Žūšanas salīdzinājums | Vienas formas paraugu novērojumu sērija vairākās dienās. | Raksti 041, 049, 050. |
| Testflīzes un virsmas uzklājuma dokumentēšana | Marķēta testa sērija ar uzklājuma pierakstu. | Raksti 051, 053, 055. |
| Darbu sagatavošana biskvīta apdedzināšanai | Pārskatīts sagatavošanas saraksts un žurnāla lapa. | Raksti 061, 062, 064. |
| Darba fotografēšana un arhivēšana | Vienādi fotografēta parauga kartīte. | Raksti 090, 094, 098. |
| Darbnīcas apkopes sesija | Izpildīts un datēts kopšanas saraksts. | Raksti 079, 080. |

Filmēšanas norādes paliek šo keramikas un darbnīcas tēmu palīgmateriālos. Jaunas stundas veidot ap keramikas rezultātu, izvairoties no nesaistīta vispārīga video veidošanas kursa.

## 11. Kā pārbaudīt, ka uzlabojums ir izdevies

### Katras stundas satura kritēriji

- Ir viena pamatprasme, redzams rezultāts un priekšnosacījumi.
- Ir konkrēts rīku un paraugu saraksts ar saitēm; iepriekš sagatavotās stadijas ir nosauktas.
- Katrā ainā ir kadrējums, darbība, ieteicamais teksts, pārbaudes pazīme un vajadzīgā montāžas piezīme.
- Katram apgalvojumam, kuru ilustrē salīdzinājums, ir atbilstošs paraugs vai skaidrojums par tā ierobežojumiem.
- Runājamais teksts ir izmēģināts vai skaidri marķēts kā uzmetums; darbības ilgums atbilst parādāmajam.
- Video, prakses, filmēšanas un gaidīšanas laiki ir nošķirti. Ainu intervāli ir nepārtraukti un summējas līdz norādītajam video ilgumam.
- Ir kļūdas pazīme un pamatots nākamais solis, ne tikai vispārīgs ieteikums būt uzmanīgam.
- Drošības norādes atbilst attiecīgajai darbībai un ir ievietotas pirms tās.
- Ir darba lapa, žurnāla ieraksta uzdevums un konkrēti palīgmateriāli.

### Vietnes pārbaudes pēc ieviešanas

- Pārbaudīt relatīvās saites, enkurus, CSS/HTML aktīvus un visu 18 stundu secības navigāciju. Sagataves vietturus atļaut tikai sagatavē.
- Pārbaudīt 100 rakstu saglabāšanu, numerāciju un iepriekšējā/nākamā raksta navigāciju. Ja izmaiņas skar visu bibliotēku vai kopīgos stilus, pārbaudi attiecināt uz visiem rakstiem.
- Meklēt neiztulkotus redzamos tekstus, neatļautus terminus, atkārtotas tukšas frāzes un neatbilstošas domuzīmes; atradnes pārskatīt kontekstā.
- Pārbaudīt jaunās ārējās saites un nodalīt pārbaudītus uzziņas avotus no ārējiem skriptiem vai ielādētiem aktīviem. Attēlus, fontus, stilus un skriptus glabāt lokāli.
- Pārlūkā pārbaudīt šauru mobilo skatu, platāku ekrānu, tastatūras navigāciju, attēlu alternatīvos tekstus, lasīšanu bez JavaScript un A4 druku.
- Filmēšanas izmēģinājumā pārbaudīt, vai pēc lapas var sagatavot paraugus un uzņemt visas ainas bez papildu mutiskiem paskaidrojumiem. Pierakstīt konkrēti trūkstošo informāciju.
- Prakses izmēģinājumā pārbaudīt, vai lietotājs saprot rezultāta pazīmes un prot aizpildīt darba lapu. Vērtēt šo uzdevumu izpildi, neaprobežojoties ar lapas garumu vai ainu skaitu.

Pirmās pilnās versijas apjoms: 18 papildinātas stundu lapas, viena uzturama sagatave, pārkārtota sākumlapa un video katalogs, atlasītas bibliotēkas saites, praktiskas darba lapas un pārbaudīts drukas skats. Reāli filmētus video un darbnīcas izmēģinājumus pievienot ar to faktiskajiem datiem.
