# Cursor Workflow Guardrails

This project uses `Resume_Ridhwan.tex` as the primary source of truth for profile details.

## Core Rules

1. Before editing any content section, read `Resume_Ridhwan.tex` and align names, dates, projects, and links.
2. Keep the website premium and modern. Do not downgrade interactions, typography, spacing, or visual quality.
3. Preserve responsiveness and dark-mode-first design across all changes.
4. Do not remove existing sections unless explicitly requested by the user.

## Safety Checks Before Next Prompts

Before shipping any new changes, always run:

```bash
npm run check
npm run build
```

Only proceed to the next prompt after both commands pass.

## Content Integrity

- Graduation target: May 2026
- Availability: Open to Work from June 2026
- Focus areas: Software Engineering, AI/ML, Data Science, Finance + Tech trends

If there is any conflict between website content and `Resume_Ridhwan.tex`, update the website to match the `.tex` file unless the user explicitly overrides it.
