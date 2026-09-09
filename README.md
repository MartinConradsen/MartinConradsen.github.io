# Dansk Negroni Forening

En simpel hjemmeside lavet til Dansk Negroni Forening.

## Kontaktformular

Kontaktformularen vælger som standard **Spørgsmål**. Brug URL-parameteren `topic`
til at forudvælge et emne, f.eks.
`https://dansknegroniforening.dk/contact/?topic=Negronikortet`.
Parameteren accepterer alle formularens emner uden at skelne mellem store og små
bogstaver. Ukendte eller tomme værdier vælger **Spørgsmål**.

Ved ændringer af emner skal `workers/contact-form.js` også deployes til
Cloudflare, så backend accepterer de nye emner.

## Google Maps

GitHub Pages bygges automatisk med GitHub Actions. Opret repository secret'en
`VITE_GOOGLE_MAPS_API_KEY` med en nøgle, der har adgang til **Maps JavaScript API**
og **Places API (New)**.

Lokalt kan nøglen gives direkte til processen uden en `.env`-fil:

```sh
VITE_GOOGLE_MAPS_API_KEY=din_api_noegle npm run dev
```

Begræns nøglen til websitets domæner med HTTP-referrer restrictions i Google Cloud.
Lokationsforslag vægtes mod København, men er ikke geografisk begrænset.
