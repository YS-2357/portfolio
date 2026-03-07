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
