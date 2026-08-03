# Dansk Negroni Forening

En simpel hjemmeside lavet til Dansk Negroni Forening.

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
