---
type: Guide
title: "Landing Template Integration Guide"
description: "Implementation process for integrating landing templates."
tags: ["reference", "processes", "landing"]
status: draft
generated:
  by: claude-code/sonnet-5
  at: "2026-08-16T13:10:10+09:00"
verified: []
stale_after: "2027-08-16"
x-ys:
  created_at: 2025-12-29
---

# Landing Template Integration Guide

## Scope
- Vite + React + TypeScript app: `app/`
- Template files: `asset/templates/landing-example.tsx`, `asset/templates/landing-example.css`

## Steps
1. Create `app/src/components/landing/`
2. Copy template files
   - `asset/templates/landing-example.tsx` -> `app/src/components/landing/LandingExample.tsx`
   - `asset/templates/landing-example.css` -> `app/src/components/landing/landing-example.css`
3. Use `LandingExample` in `app/src/App.tsx`
4. Add global font setup to `app/src/index.css` if needed
5. Configure routes
   - Project infographic: `/projects/:project`
   - Project detail: `/projects/:project/:page`
   - Awards page: `/awards`

## Cautions
- Keep solid night-sky background (no gradients)
- Separate sections with white card blocks
- Use only one accent color
- Highlight current page CTA with `btn--primary-solar`

## Data Wiring
- Read static content from `app/public/content/` via fetch
- Example path: `/content/resume/summary.md`
- Project content paths:
  - `/content/projects/codeit/<project>/star.md`
  - `/content/projects/<project>/summary.md`
- Keep Notion source in `/content/_notion/` without direct UI rendering

## Static Assets
- Project images: `app/public/asset/images/projects/`
- Example paths:
  - `/asset/images/projects/<project>/<file>`
  - `/asset/images/projects/codeit/<project>/<file>`
- Infographic examples:
  - `/asset/images/projects/<project>/infographic.png`
  - `/asset/images/projects/codeit/<project>/infographic.png`
