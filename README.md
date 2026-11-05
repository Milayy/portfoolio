# Mila portfoolio

Mila Nadezda Melderi IT-portfoolio Rakvere Ametikooli IT25 koolitöö jaoks. Lehel saab vahetada eesti ja inglise keelt. Avalehel on tutvustus, praktilised tööd, oskused, lühike CV ülevaade, kontaktid ja IT-lingid. Eraldi teekonna lehel on koolitee Tamsalust Kadrina ja Tallinna kaudu Rakvere Ametikoolini.

## Failid

- `index.html` — lehe struktuur ja eestikeelne algtekst.
- `teekond.html` — eraldi koolitee leht Tamsalu, Kadrina Keskkooli, Tallinna Tööstushariduskeskuse ja Rakvere Ametikooli kohta.
- `styles.css` — kujundus ning paigutus erineva suurusega ekraanidele.
- `app.js` — mõlema keele tekst, keelevahetus ja IT-linkide filter.

## Sisu muutmine

1. Eestikeelne algtekst asub failides `index.html` ja `teekond.html`.
2. Keelevahetuse tekstid asuvad failis `app.js`, osades `copy.et` ja `copy.en`. Muuda sama teksti mõlemas keeles.
3. IT-lingid asuvad `app.js` muutujas `resources`. Kui linke juurde lisad või eemaldad, muuda ka `filterAll` juures olevat arvu.
4. Teekonnale saab lisada täpsed kooliaastad ja Tamsalu kooli ametliku nime, kui need on teada. Blenderi tööde pildid ja täieliku CV saab lisada siis, kui Mila enda materjalid on valmis.

JavaScripti saab kontrollida käsuga `node --check app.js`. Kohalikuks eelvaateks käivita selles kaustas `python3 -m http.server 8000` ning ava `http://localhost:8000`.
