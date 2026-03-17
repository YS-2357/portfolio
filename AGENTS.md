# Frontend Agent Rules

This is a React + TypeScript static portfolio site deployed on Firebase Hosting.

## Priorities
- Keep the site static (no SSR/runtime API requirement).
- Keep resume/portfolio data as the source of truth.
- Encapsulate repetitive workflows in `skills/`.
- Before execution, summarize: problem definition -> cause -> solution.

## Commit Rules
- Use a common convention: `type: short english summary`.
- Unless explicitly instructed otherwise, bundle related changes and proceed through `git add`/`git commit`.

## Reference Docs
- App structure and routing: `reference/architecture/system-overview.md`
- Landing page rules: `reference/architecture/landing-guidelines.md`
- Content schema: `reference/domain/content-schema.md`
- Award data format: `reference/domain/awards-format.md`
- Firebase Hosting: `reference/processes/firebase-hosting.md`
- Landing template integration: `reference/processes/landing-implementation.md`
- Shared AI context: `ai/shared/project-context.md`
- Shared architecture summary: `ai/shared/architecture.md`
- Shared glossary: `ai/shared/glossary.md`
- Common AI workflows: `ai/tasks/common-workflows.md`

## Shared Assets
- Keep shared UI/content assets under `asset/`.
