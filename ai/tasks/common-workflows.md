---
type: Guide
title: "Common Workflows"
description: "Repeatable repository workflows for AI tools."
tags: ["ai", "tasks", "workflows"]
status: draft
generated:
  by: claude-code/sonnet-5
  at: "2026-08-16T13:10:10+09:00"
verified: []
stale_after: "2027-08-16"
x-ys:
  created_at: 2026-03-17
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
