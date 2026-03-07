---
name: "code-refactoring"
description: "Refactoring skill for removing duplication and improving structure."
---

# Goal
- Remove duplicated code
- Extract shared components/utilities
- Improve maintainability

# Priority Tasks

| Priority | Task | Estimated Time |
|----------|------|----------------|
| 1 | Extract `fetchText` utility | 5 min |
| 2 | Introduce `PageLayout` component | 15 min |
| 3 | Fix filename typo | 1 min |

# Procedure

## Extract `fetchText`
1. Create `src/utils/fetchText.ts`
2. Remove duplicate functions across files
3. Add import statements

## Split out `PageLayout`
1. Create `src/components/PageLayout.tsx`
2. Remove duplicated layout code in each page
3. Wrap pages with `PageLayout`

# Reference
- `reference/processes/refactoring-guide.md`

# Script
- `scripts/run.sh`: lint/build verification helper
