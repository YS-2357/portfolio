---
type: Guide
title: "Firebase Hosting"
description: "Firebase Hosting deployment guide."
tags: ["reference", "processes", "firebase-hosting"]
status: draft
generated:
  by: claude-code/sonnet-5
  at: "2026-08-16T13:10:10+09:00"
verified: []
stale_after: "2027-08-16"
x-ys:
  created_at: 2025-12-29
---

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
