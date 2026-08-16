---
type: Guide
title: "Frontend Architecture"
description: "Architecture, routing, and content ownership overview."
tags: ["reference", "architecture", "frontend"]
status: draft
generated:
  by: claude-code/sonnet-5
  at: "2026-08-16T13:10:10+09:00"
verified: []
stale_after: "2027-08-16"
x-ys:
  created_at: 2025-12-29
---

# Frontend Architecture

## Goal
Provide a React + TypeScript static portfolio site.

## Content Ownership
- Resume/portfolio content is the frontend source of truth.
- Keep content paths and structure stable so other systems can reference them safely.

## Routing
- `/`: landing page
- `/projects`: project list
- `/projects/:project`: project intro (infographic)
- `/projects/:project/:page`: project detail (`star` or `report`)
- `/projects/codeit/:project`, `/projects/codeit/:project/:page`: legacy-compatible redirects
- `/about`: about page
- `/experience`: experience page
- `/education`: education page
- `/awards`: full awards page

## Static Assets
- Static content: `app/public/content/`
- Project images: `app/public/asset/images/projects/`
- Notion source archive: `app/public/content/_notion/`
- Infographics:
  - `/asset/images/projects/<project>/infographic.png`
  - `/asset/images/projects/codeit/<project>/infographic.png`
- Experience infographic: `/asset/images/intalk/infographic.png`

## Maintenance Rules
- Whenever routes or content paths change, update this document immediately.

## Improvement Directions
- Rewrite resume/project/award messaging for portfolio storytelling quality.
- Prepare profile photo, skill badges, and project hero images.
- Keep structural UI stable and improve visual density via better assets and labels.
