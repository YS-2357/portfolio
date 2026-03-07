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
