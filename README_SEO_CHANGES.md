# SEO pakeitimų suvestinė

Pakeitimai atlikti taip, kad esama vieno puslapio svetainės logika, kalbų perjungimas, galerijos lightbox, Google Calendar iframe ir kontaktų mygtukai liktų nepakeisti.

## Pakeisti failai

- `index.html`
- `translations.js`
- `script.js`
- `styles.css`
- `sitemap.xml`

## Pagrindiniai pakeitimai

1. Atnaujintas `<title>` į stipresnę SEO frazę: `Apartamentai Palangoje su baseinu Kunigiškėse | Vaivorykštės`.
2. Atnaujintas `meta description`, kad aiškiau komunikuotų Kunigiškes, šildomą baseiną, terasą, parkingą, Wi‑Fi, iki 4 svečių ir tiesioginę rezervaciją.
3. Atnaujinti Open Graph ir Twitter meta duomenys, kad dalinantis puslapiu būtų rodomas aiškesnis pavadinimas ir aprašymas.
4. `meta robots` papildytas `max-image-preview:large`.
5. Pridėtas `theme-color`.
6. Hero paveikslėlis paliktas su pradiniu matomu failu `assets/hero_2560.png`, kad nesikeistų hero vaizdas.
7. Pakeistas H1 į: `Apartamentai Palangoje su šildomu baseinu Kunigiškėse`.
8. Pakeistas hero tekstas, kad aiškiau aprašytų iki 4 svečių, terasą, parkingą ir lokaciją prie jūros.
9. Pridėtas naujas matomas SEO turinio blokas `#apie` su natūraliu tekstu apie apartamentus Palangoje, Kunigiškes, baseiną, jūrą, trumpalaikę nuomą ir tiesioginę rezervaciją.
10. Atnaujinti pirmų 7 galerijos paveikslėlių `alt` tekstai, kad jie nebūtų generiniai.
11. `translations.js` papildytas naujo SEO bloko LT/EN vertimais ir pilnu 17 galerijos nuotraukų alt tekstų sąrašu.
12. `script.js` papildytas taip, kad lightbox rodomos nuotraukos `alt` būtų parenkamas pagal aktyvią kalbą ir konkrečią nuotrauką.
13. Struktūriniai duomenys (`LodgingBusiness` JSON-LD) išplėsti: pridėtas `@id`, `alternateName`, keli vaizdai, `priceRange`, `areaServed`, `checkinTime`, `checkoutTime`, daugiau patogumų, sutvarkytas email formatas.
14. Sąmoningai nepridėtas `aggregateRating`, kad nebūtų rizikos su Google self-serving reviews taisyklėmis.
15. Atnaujintas `sitemap.xml`: pridėtas `lastmod`, `changefreq` ir aiškesnė XML struktūra.
16. Sutvarkyta HTML struktūra: `</main>` uždaromas prieš footer.
17. Pridėti CSS stiliai naujam SEO blokui ir pakoreguota hero H1 tipografija, kad ilgesnis SEO pavadinimas neperlaužtų puslapio mobiliajame ir desktop vaizde.

## Nepakeista

- Kontaktų numeris, WhatsApp ir el. pašto nuorodos.
- Google Calendar integracija.
- Galerijos lightbox logika.
- Kainų kortelių sezoniškumo logika.
- CNAME.
- `robots.txt`, nes jis jau buvo korektiškas: leidžia crawlinti svetainę ir nurodo sitemap.

## Papildomi pataisymai po vizualinės peržiūros

- Grąžintas hero vaizdas į pradinį matomą failą `assets/hero_2560.png`.
  - Pašalintas `<picture>` / WebP preferavimas hero bloke, nes naršyklė pradėjo rodyti kitą hero vaizdo versiją.
  - `preload`, Open Graph ir Twitter image dabar taip pat rodo į PNG hero failą, kad vaizdas būtų nuoseklus.
- SEO turinio blokas išplėstas iki tokio paties pločio kaip kitos pagrindinės puslapio sekcijos.
  - `.seo-intro-card` dabar naudoja pilną `.container` plotį, nebe 980 px ribą.
- Sutvarkyta EN versija:
  - sukurtas atskiras `/en/index.html` puslapis su anglišku title, meta description, Open Graph, canonical ir `hreflang`;
  - pagrindiniame puslapyje pridėti `hreflang` LT / EN / x-default;
  - `sitemap.xml` papildytas `https://apartamentaipalanga.lt/en/`;
  - sutrumpintas EN hero H1, kad nelaužytų hero dizaino;
  - kainų reikšmės dabar verčiamos: `Nuo €69` -> `From €69` ir t. t.;
  - `script.js` papildytas asset base logika, kad galerija ir lightbox veiktų ir iš `/en/` katalogo;
  - kalbos perjungimas iš web aplinkos nukreipia tarp `/` ir `/en/`, o lokalioje `file://` peržiūroje išlieka dinaminis perjungimas.
