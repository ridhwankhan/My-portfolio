# Cursor Workflow Guardrails

This project uses `resume_Ridhwanur_Rahman_Khan.pdf` as the primary source of truth for profile details.

## Core Rules

1. Before editing any content section, read `resume_Ridhwanur_Rahman_Khan.pdf` and align names, dates, projects, and links.
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

- Graduation target: October 2026
- CGPA: 3.47
- Availability: From October 1, 2026
- Focus areas: Full-stack software engineering, secure systems, embedded software, AI-assisted development

If there is any conflict between website content and `resume_Ridhwanur_Rahman_Khan.pdf`, update the website to match the resume unless the user explicitly overrides it.
