# Architecture

- `app/src/pages/` — route-level pages (App.tsx = landing, others match routes)
- `app/src/components/` — shared UI: Nav, PageShell, PlanetBar, OrbitalRing
- `app/src/lib/` and `app/src/shared/` — content loading and markdown parsing
- `app/src/data/` — project metadata (projects.ts) and planet system (planets.ts)
- `app/public/content/` — markdown content (source of truth)
- `app/public/asset/images/` — project infographics, cert badge
- `app/src/index.css` — Tailwind directives + component layer (glass-card, btn-solar, etc.)
- `app/tailwind.config.js` — full planet color palette extension

Design: deep space dark background, dark glass cards with white borders, planet-per-page color accents via `--planet-color` CSS variable set in PageShell.
