# Youngsun Joung Portfolio (React + TypeScript + Vite)

## Overview
- Static portfolio frontend in `app/`
- Content-driven pages based on markdown in `app/public/content/`
- Firebase Hosting deployment with GitHub Actions

## Project Structure
- `app/src/pages/`: route-level pages
- `app/src/lib/`: parsing/format helpers
- `app/src/shared/`: shared content loading utilities
- `app/src/data/`: project metadata
- `app/public/content/`: public markdown content
- `asset/private/resume.pdf`: private resume PDF (not publicly served)

## Routes
- `/`
- `/projects`
- `/projects/:project`
- `/projects/:project/:page` (`star` or `report`)
- Legacy redirects:
  - `/projects/codeit/:project`
  - `/projects/codeit/:project/:page`

## Local Development
```bash
cd app
npm install
npm run dev
```

## Build
```bash
cd app
npm run build
```

## Deployment
- Platform: Firebase Hosting
- Project ID: `youngsun-joung`
- Key files:
  - `app/firebase.json`
  - `app/.firebaserc`
  - `.github/workflows/firebase-hosting-merge.yml`
  - `.github/workflows/firebase-hosting-pull-request.yml`

## Notes
- The resume PDF is intentionally removed from public web access.
- If Linux build fails with Rollup optional dependency issues:
  - `cd app && npm i -D @rollup/rollup-linux-x64-gnu`
