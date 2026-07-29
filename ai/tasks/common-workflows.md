---
type: Guide
title: "Common Workflows"
description: "Repeatable repository workflows for AI tools."
created: 2026-03-17
generated: false
status: draft
---

# Common Workflows

## Local Development
```bash
cd app
npm install
npm run dev
```

## Build
```bash
cd app
npm run build
```

## Change Rules
- Keep the site static unless the task explicitly changes that constraint.
- Preserve content-driven routing and markdown-based content flow.
- Do not expose private resume assets on the public site.
