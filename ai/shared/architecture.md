# Architecture

- `app/src/pages/` contains route-level pages.
- `app/src/lib/` and `app/src/shared/` contain shared helpers and content loading utilities.
- `app/src/data/` stores project metadata.
- `app/public/content/` stores public markdown content.
- The site should remain static and avoid SSR/runtime backend coupling.
