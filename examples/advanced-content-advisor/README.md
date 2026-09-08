# Advanced example design: Content Advisor rail

## Goal

Add a Universal Editor properties rail that analyzes the current authoring context.

## Possible capabilities

- inspect selected/current editables
- retrieve domain validation results
- show SEO/accessibility/business-rule hints
- select an affected editable through editor actions
- launch a modal remediation workflow
- invoke a backend advisor
- refresh after applying a fix

## Architecture

```text
Properties rail
  -> attach()
  -> editorState
  -> protected backend/Runtime Action
  -> advice
  -> editorActions.selectEditables(...)
  -> optional modal
```

Do not send IMS tokens to arbitrary external services.
