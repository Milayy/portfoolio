# Mila portfoolio

Mila Nadezda Melderi IT-portfoolio Rakvere Ametikooli IT25 koolitöö jaoks. Lehel saab vahetada eesti ja inglise keelt. Lisaks tutvustusele on seal oskused, lühike CV ülevaade, kontaktid ja IT-linkide kogu.

## Failid

- `index.html` — lehe struktuur ja eestikeelne algtekst.
- `styles.css` — kujundus ning paigutus erineva suurusega ekraanidele.
- `app.js` — mõlema keele tekst, keelevahetus ja IT-linkide filter.

## Sisu muutmine

1. Eestikeelne algtekst asub failis `index.html`.
2. Keelevahetuse tekstid asuvad failis `app.js`, osades `copy.et` ja `copy.en`. Muuda sama teksti mõlemas keeles.
3. IT-lingid asuvad `app.js` muutujas `resources`. Kui linke juurde lisad või eemaldad, muuda ka `filterAll` juures olevat arvu.
4. Projektide kirjeldused ja täielik CV saab lisada siis kui mul on see tehtud mis momendil ei ole.

JavaScripti saab kontrollida käsuga `node --check app.js`. Kohalikuks eelvaateks käivita selles kaustas `python3 -m http.server 8000` ning ava `http://localhost:8000`.
