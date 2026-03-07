# Firebase Hosting

## Deployment Overview
- Use Firebase Hosting as the static deployment target.
- Record build output path and hosting configuration.

## Current Setup
- Firebase project ID: `youngsun-joung`
- App directory: `app/`
- Build command: `npm run build` (working dir `app/`)
- Output directory: `app/dist`
- Hosting config: `app/firebase.json`
- Project alias config: `app/.firebaserc`

## GitHub Actions
- Workflow: `.github/workflows/firebase-hosting-merge.yml`
- PR preview: `.github/workflows/firebase-hosting-pull-request.yml`
- Build working directory: `app/`
- Secret: `FIREBASE_SERVICE_ACCOUNT_YOUNGSUN_JOUNG`

## Verification Commands
```bash
cd app
firebase login
firebase use
firebase projects:list
firebase hosting:sites:list
firebase hosting:channel:list
```

## Rewrites
- Use SPA rewrite to `/index.html`.

## Cache Headers
- Apply long-term image caching:
  - Target: `/asset/images/**`
  - Header: `Cache-Control: public,max-age=31536000,immutable`
