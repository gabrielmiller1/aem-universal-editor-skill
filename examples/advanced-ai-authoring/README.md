# Advanced example design: AI-assisted authoring

## Goal

Generate a draft title/description/CTA from current content and external product context.

## Flow

1. User invokes header/rail/other currently supported action.
2. Extension reads current editor context.
3. Extension opens modal.
4. Modal collects:
   - locale
   - tone
   - constraints
5. Modal calls protected Runtime Action.
6. Runtime Action loads approved external context.
7. AI service returns structured draft.
8. Modal previews differences.
9. User explicitly accepts.
10. Extension writes only supported fields through documented authoring APIs/workflows.
11. Refresh/reload state as required.

## Rules

- human confirmation before applying generated content
- no secrets in browser code
- log correlation IDs, not sensitive prompts/tokens
- validate generated output
- do not assume arbitrary backend persistence APIs
