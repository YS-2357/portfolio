---
type: Guide
title: "Awards Data Format"
description: "Markdown data contract for award content."
tags: ["reference", "domain", "awards"]
status: draft
generated:
  by: claude-code/sonnet-5
  at: "2026-08-16T13:10:10+09:00"
verified: []
stale_after: "2027-08-16"
x-ys:
  created_at: 2025-12-31
---

# Awards Data Format

## Goal
Define one consistent format so both UI and RAG can use award data reliably.

## File Locations
- Source files: `app/public/content/awards/<level>/awards.md`
- Combined list: `app/public/content/awards/all.md`

## Entry Format
Store one award per line.

```
- Type: <value> | Name: <value> | Grade: <value> | Date: YYYY.MM.DD | Host: <value> | Note: <value> | Link: <value>
```

## Field Rules
- Fill `Type`, `Name`, `Date`, `Host` whenever possible.
- Use `-` for unavailable values.
- Write links as URLs.

## UI Parsing Rules
- Hide fields with `-`.
- Use `Name` as title.
- Show metadata in `Date · Grade · Host` order.
- Render `Note` as supplementary text.
- Render `Link` as "Details".
