---
type: Guide
title: "Content Schema (Resume / Portfolio)"
description: "Content schema for resume, project, and award pages."
tags: ["reference", "domain", "content-schema"]
status: draft
generated:
  by: claude-code/sonnet-5
  at: "2026-08-16T13:10:10+09:00"
verified: []
stale_after: "2027-08-16"
x-ys:
  created_at: 2025-12-29
---

# Content Schema (Resume / Portfolio)

Defines the shared content structure used by frontend and backend.

## Required Sections
- Intro summary
- Experience
- Projects/portfolio
- Skills/tech stack
- Education/certifications
- Links (GitHub, blog, etc.)

## File Structure
- Resume: `app/public/content/resume/`
  - `summary.md`, `experience.md`, `education.md`, `projects.md`
  - `skills.md`, `language.md`, `miscelleneous.md`
  - Private resume PDF: `asset/private/resume.pdf`
- Awards: `app/public/content/awards/`
  - `all.md`
  - `<level>/awards.md`
- Projects: `app/public/content/projects/`
  - `codeit/<project>/summary.md`
  - `codeit/<project>/star.md`
  - `codeit/<project>/report.md`
  - `<project>/summary.md` (for non-codeit projects)
  - Infographic: `app/public/asset/images/projects/<project>/infographic.png`
  - Codeit infographic: `app/public/asset/images/projects/codeit/<project>/infographic.png`

## Notion Source Archive
- Keep synced Notion outputs under `app/public/content/_notion/`.
- Portfolio UI must not render `_notion` content paths directly.

## Future Refined Structure
- `app/public/content/projects/<slug>/`
  - `summary.md`
  - `highlights.md`
  - `stack.md`
  - `links.md`
  - `teaser.md`
