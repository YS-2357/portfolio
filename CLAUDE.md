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

If Rollup fails on Linux: `npm i -D @rollup/rollup-linux-x64-gnu`

## Architecture

**Static React + TypeScript SPA** deployed to Firebase Hosting (project: `youngsun-joung`). No backend, no runtime APIs.

### Key principle: content is the source of truth

Portfolio data lives as markdown in `app/public/content/` and is fetched at runtime via `fetchText()` in `app/src/shared/content.ts`. Pages parse and render markdown—they don't own the data. Updating content means editing markdown, not React components.

### Content parsing

Two parsers in `app/src/lib/markdownBlocks.ts` and `app/src/shared/content.ts`:
- `getSummaryLine(text)` — extracts the first meaningful line (skips headings/blank lines)
- `parseMarkdownBlocks(text)` — splits on `##` headings, parsing pipe-delimited metadata: `## Title | Subtitle | Period`

Awards use a separate pipe-delimited inline field syntax: `- 일자: X | 수상명: Y | 등급: Z | ...`

### Routing

Defined in `app/src/main.tsx`. Routes map to content paths:
- `/projects/:project/:page` → loads `content/projects/.../{page}.md`
- Legacy `/projects/codeit/:project/:page` redirects to new format

Project metadata (slug, title, content paths, image paths) is defined in `app/src/data/projects.ts`. **Content paths are stable contracts**—changing them breaks routes and any external references.

### Static assets

- Images: `app/public/asset/images/` — served with 1-year immutable cache (configured in `firebase.json`)
- Private resume PDF: `asset/private/resume.pdf` — intentionally excluded from public Firebase serving

### CSS variables

Global theme is defined as CSS custom properties in `app/src/index.css` (`--night-sky`, `--card`, `--text`, `--border`, etc.). Design uses a single accent color (`--primary-solar`); no gradients, no heavy shadows.

## Reference docs

- App routing and content paths: `reference/architecture/system-overview.md`
- Landing page visual rules: `reference/architecture/landing-guidelines.md`
- Content file schema: `reference/domain/content-schema.md`
- Award field format: `reference/domain/awards-format.md`
- Firebase Hosting setup: `reference/processes/firebase-hosting.md`

## Commit convention

`type: short english summary` — bundle related changes into a single commit unless told otherwise.
