# Universal Editor Rich Text

Universal Editor supports rich text authoring in-place and in the properties panel.

Treat RTE capability as a contract among:
- backend storage/serialization
- editor feature configuration
- rendering/sanitization
- link handling
- extension hooks

## Review

- Do not enable formatting that the backend/project cannot safely persist/render.
- Verify current RTE filter syntax.
- Verify current lifecycle/extension hooks before implementing them.
- Current release notes may add hooks before older examples are updated.

## 2026 freshness note

As of the September 2026 Universal Editor release notes, `beforeSave` and `beforeLoad` RTE extensions are supported. The agent must verify the current API documentation before implementing these hooks.
