# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `app/`:

```bash
npm run dev          # Start Vite dev server
npm run build        # tsc -b && vite build → outputs to app/dist
npm run lint         # ESLint (flat config)
npm run preview      # Preview built dist/ locally

# Notion content sync
npm run notion:pull           # Sync all content from Notion
npm run notion:pull:force     # Force full sync
npm run notion:pull:projects  # Projects DB only
npm run notion:status         # Check sync status
```

Deploy is via GitHub Actions on push to `main`. To deploy manually:
```bash
cd app && firebase deploy
```

Push via token (stored in root `.env`):
```bash
source .env && git push https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/${GITHUB_USER}/${GITHUB_REPO}.git
```

If Rollup fails on Linux: `npm i -D @rollup/rollup-linux-x64-gnu`

## Architecture

**Static React + TypeScript SPA** deployed to Firebase Hosting (project: `youngsun-joung`). No backend, no runtime APIs. Uses **Tailwind CSS v3** + `@tailwindcss/typography`.

### Key principle: content is the source of truth

Portfolio data lives as markdown in `app/public/content/` and is fetched at runtime via `fetchText()` in `app/src/shared/content.ts`. Pages parse and render markdown — they don't own the data. Updating content means editing markdown, not React components.

### Content parsing

Two parsers in `app/src/lib/markdownBlocks.ts` and `app/src/shared/content.ts`:
- `getSummaryLine(text)` — extracts the first meaningful line (skips headings/blank lines)
- `parseMarkdownBlocks(text)` — splits on `##` headings, parsing pipe-delimited metadata: `## Title | Subtitle | Period`

Awards use a separate pipe-delimited inline field syntax: `- 일자: X | 수상명: Y | 등급: Z | ...`

### Routing

Defined in `app/src/main.tsx`. Routes map to content paths:
- `/projects/:project/:page` → loads `content/projects/.../{page}.md`
- Legacy `/projects/codeit/:project/:page` redirects to new format

Project metadata (slug, title, content paths, image paths, planet, primaryMetric) is in `app/src/data/projects.ts`. Planet data (colors, glow, sizes) is in `app/src/data/planets.ts`. **Content paths are stable contracts.**

### Design system — Astronomical Museum Theme

Deep space dark background (`#070c18`), dark glass cards with clean white borders, planet-per-page color accents.

**CSS variables (two layers):**
```
Page level:  --page-bg  --page-text  --page-muted  --page-border
Card level:  --card-bg  --card-bright  --card-text  --card-dim  --card-border
Planet:      --planet-color  --planet-glow  (set per-page via PageShell planet prop)
```

**Planet-per-page mapping:**
- `/` Home → `sun` (#f2c14e)
- `/projects` → `jupiter` (#fb923c)
- `/experience` → `mars` (#f87171)
- `/education` → `saturn` (#fbbf24)
- `/awards` → `venus` (#e8c87a)
- `/about` → `earth` (#60a5fa)
- `/projects/:slug` → `mercury` (#94a3b8)

**Shared components in `app/src/components/`:**
- `Nav.tsx` — fixed frosted dark nav, planet-colored active links
- `PageShell.tsx` — page wrapper, sets `--planet-color`/`--planet-glow`, constellation overlay, ambient glows, `<PlanetBar>`
- `PlanetBar.tsx` — 8 planet dots footer, active planet glows
- `OrbitalRing.tsx` — decorative SVG dashed-arc ring

**Tailwind config:** `app/tailwind.config.js` — extends with `space`, `solar`, `mercury`, `venus`, `earth`, `mars`, `jupiter`, `saturn`, `uranus`, `neptune` color tokens.

**Component classes** (in `app/src/index.css` `@layer components`):
`.glass-card` `.eyebrow` `.stat-chip` `.btn-solar` `.btn-ghost` `.nav-link` `.section-heading` `.skill-tag` `.project-label` `.timeline-entry` `.tab-nav` `.tab-link`

### Static assets

- Images: `app/public/asset/images/` — 1-year immutable cache
- Cert badge: `app/public/asset/images/certs/aws-genai-professional.png`
- Favicon: `app/public/favicon.svg` — YS monogram with orbital ring
- Private resume PDF: `asset/private/` — gitignored, excluded from Firebase

## Commit convention

`type: short english summary` — bundle related changes into a single commit unless told otherwise.
