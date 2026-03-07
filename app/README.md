# Portfolio Frontend App

## Stack
- React 19
- TypeScript
- Vite
- React Router
- React Markdown

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Directory Map
- `src/pages/`: page components used by router
- `src/lib/`: markdown parsing helpers
- `src/shared/`: shared utilities (`fetchText`, summary parsing)
- `src/data/`: typed metadata (`projects.ts`)
- `public/content/`: markdown content files
- `public/asset/images/`: project images

## Routing
- `/`
- `/projects`
- `/projects/:project`
- `/projects/:project/:page`
- Backward compatibility redirects from `/projects/codeit/...`

## Content Rules
- Project markdown source:
  - `/content/projects/codeit/<project>/summary.md`
  - `/content/projects/codeit/<project>/star.md`
  - `/content/projects/codeit/<project>/report.md`
- Resume markdown source:
  - `/content/resume/*.md`
- Private resume PDF:
  - `../asset/private/resume.pdf` (not exposed via web route)
