"""Statiskās vietnes satura un atsauču pārbaude bez ārējām atkarībām."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import re
import sys

ROOT = Path(__file__).resolve().parent
ERRORS = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.links, self.assets, self.ids, self.visible = [], [], [], []
        self.h1 = self.scenes = 0
        self.hidden = 0
        self.lang = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('script', 'style', 'head'):
            self.hidden += 1
        if tag == 'html': self.lang = attrs.get('lang')
        if tag == 'h1': self.h1 += 1
        if attrs.get('class', '').split().count('scene-card'): self.scenes += 1
        if 'id' in attrs: self.ids.append(attrs['id'])
        if 'href' in attrs: self.links.append(attrs['href'])
        if 'src' in attrs: self.assets.append(attrs['src'])
        if tag == 'link' and attrs.get('rel') == 'stylesheet' and 'href' in attrs:
            self.assets.append(attrs['href'])
        if tag == 'img' and not attrs.get('alt'):
            error(self.path, 'Attēlam trūkst alternatīvā teksta')

    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'head'): self.hidden = max(0, self.hidden - 1)

    def handle_data(self, value):
        if not self.hidden: self.visible.append(value)

def error(path, message):
    ERRORS.append(f'{path.relative_to(ROOT)}: {message}')

pages = {p: Page(p) for p in ROOT.rglob('*.html') if '.git' not in p.parts}
for path, page in pages.items():
    if page.lang != 'lv': error(path, 'Trūkst lang="lv"')
    if page.h1 != 1: error(path, f'H1 skaits: {page.h1}')
    if len(page.ids) != len(set(page.ids)): error(path, 'Atkārtoti ID')
    if 'saturs' not in page.ids: error(path, 'Trūkst galvenā satura enkura')
    for ref in page.links + page.assets:
        parsed = urlsplit(ref)
        if parsed.scheme or parsed.netloc:
            if ref in page.assets: error(path, f'Ārējs ielādējams aktīvs: {ref}')
            continue
        if '{' in ref:
            error(path, f'Neaizpildīta saite: {ref}')
            continue
        dest = (path.parent / unquote(parsed.path)).resolve() if parsed.path else path
        if dest.is_dir(): dest /= 'index.html'
        if not dest.is_file(): error(path, f'Trūkst mērķa: {ref}')
        elif parsed.fragment and dest in pages and unquote(parsed.fragment) not in pages[dest].ids:
            error(path, f'Trūkst enkura: {ref}')
    visible = ' '.join(page.visible)
    forbidden = re.findall(r'\b(?:grozs|groza|pirkt|cena|apmaksa|kase|pasūtīt|piegāde|atlaide|checkout|payment|customer|cart|order)\b', visible, re.I)
    if forbidden: error(path, f'Neatļauti redzamie vārdi: {set(forbidden)}')
    if path.name != 'sagatave.html' and re.search(r'\{[^}]+\}', visible): error(path, 'Neaizpildīts redzamais vietturis')

articles = sorted((ROOT / 'research/articles').glob('*.html'))
if [p.name[:3] for p in articles] != [f'{i:03d}' for i in range(1, 101)]:
    error(ROOT / 'research/index.html', 'Bibliotēkas secība neatbilst 001-100')
for i, path in enumerate(articles):
    text = path.read_text()
    visible = ' '.join(pages[path].visible)
    for marker in ['../research.css', 'Termini latviski un angliski', 'Praktisk', 'bridinajums', 'Ko pierakstīt darbnīcas žurnālā', 'article-nav']:
        if marker not in text: error(path, f'Trūkst obligātās sadaļas: {marker}')
    expected = [articles[(i-1) % 100].name, articles[(i+1) % 100].name]
    nav = re.search(r'<nav[^>]*class="article-nav"[\s\S]*?</nav>', text)
    if not nav or any(name not in nav[0] for name in expected): error(path, 'Nepareiza iepriekšējā/nākamā raksta secība')
    if re.search('[\u2013\u2014]', visible): error(path, 'Em/en domuzīme raksta tekstā')
    for phrase in ['nevis akadēmisks raksts vai gatava recepte', 'secinājumi nepaliktu tikai sajūtās', 'viens labs vai slikts rezultāts vēl nepasaka visu', 'piesardzīgu galējību', 'Trūkstošu rīku aizstāj vienkārši']:
        if phrase in visible: error(path, f'Neatbilstoša atkārtota frāze: {phrase}')

lessons = sorted(p for p in pages if p.parent == ROOT / 'video' and re.match(r'(rata|veid|telpa)-\d\d-', p.name))
if len(lessons) != 18: error(ROOT / 'video/index.html', 'Jābūt 18 esošajām stundām')
scene_count = 0
for path in lessons:
    text = path.read_text()
    scene_count += pages[path].scenes
    for marker in ['sagatavosanas','ainas','prakse','darba-lapa','materiali','drosiba']:
        if marker not in pages[path].ids: error(path, f'Trūkst sadaļas: {marker}')
    for cls in ['scene-quote','scene-direction','scene-notes','data-scene-check']:
        if text.count(cls) != pages[path].scenes: error(path, f'Ainu lauku skaits neatbilst: {cls}')
    expected = 0
    ranges = re.findall(r'class="scene-time">\s*(\d+):(\d\d)-(\d+):(\d\d) · (\d+) s', text)
    for a,b,c,d,seconds in ranges:
        start, end = int(a)*60+int(b), int(c)*60+int(d)
        if start != expected or end-start != int(seconds): error(path, 'Ainu laiki nav secīgi vai ilgums nesakrīt')
        expected = end
    if len(ranges) != pages[path].scenes: error(path, 'Ne visas ainas ietver pārbaudāmu laiku')
    durations = re.findall(r'data-duration="(\d+)"', text)
    if durations != [r[4] for r in ranges]: error(path, 'Ainu data-duration vērtības nesakrīt ar redzamo ilgumu')
    total = re.search(r'Video iecere: (\d+):(\d\d)', text)
    if not total or int(total[1])*60+int(total[2]) != expected: error(path, 'Video kopējais ilgums nesakrīt')
    match = re.search(r'<section id="prakse">([\s\S]*?)</section>', text)
    nums = [int(x) for x in re.findall(r'<td>\s*(\d+) min\s*</td>',match[1])] if match else []
    if not nums or sum(nums[:-1]) != nums[-1]: error(path, 'Prakses summa nesakrīt')
    if not any('/articles/' in ref for ref in pages[path].links): error(path, 'Nav pētījumu saišu')
    if not any('/tools/index.html#' in ref for ref in pages[path].links): error(path, 'Nav rīku enkuru')
    group, num = re.match(r'(rata|veid|telpa)-(\d\d)-',path.name).groups()
    num = int(num)
    for step in (-1,1):
        other = num + step
        if 1 <= other <= 6:
            target = next(p.name for p in lessons if p.name.startswith(f'{group}-{other:02d}-'))
            if target not in pages[path].links: error(path,'Nepareiza stundu secība')

for path in ROOT.rglob('*.css'):
    for ref in re.findall(r'url\([\"\']?([^\)\"\']+)',path.read_text()):
        if ref.startswith('#'): continue
        if urlsplit(ref).scheme or not (path.parent / ref).exists(): error(path, f'Nepieejams vai ārējs CSS aktīvs: {ref}')

if ERRORS:
    print('\n'.join(ERRORS))
    print(f'Kļūdas: {len(ERRORS)}')
    sys.exit(1)
print(f'Pārbaudītas {len(pages)} HTML lapas, 100 pētījumi, {len(lessons)} stundas un {scene_count} ainas. Kļūdu nav.')
