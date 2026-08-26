# Cursor Workflow Guardrails

This project uses `public/Ridhwanur_Rahman_Khan_bm.pdf` (Business & Leadership CV from `E:\MAIN CV\Business`) as the primary source of truth for profile details.

## Core Rules

1. Before editing any content section, read `Ridhwanur_Rahman_Khan_bm.pdf` and align names, dates, projects, and links.
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

- Education: B.Sc. Computer Science, BRAC University (CGPA 3.47)
- Thesis: Multimodal ML for Crop Decision Support — defended with 98% marks
- Do not display availability start dates publicly on the portfolio
- Focus areas: Business, Operations, MTO / Leadership, Product Management, Business Intelligence, Data Analytics

If there is any conflict between website content and `Ridhwanur_Rahman_Khan_bm.pdf`, update the website to match the resume unless the user explicitly overrides it.
