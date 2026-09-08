# Modal dialogs

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/modal/

Universal Editor exposes a modal host API for extension UI.

Current documentation describes:
- opening a same-origin extension route in an iframe modal
- title
- width/height behavior
- loading state
- closing the modal
- updating modal properties

`host.modal.showUrl(request)` returns a modal instance and requires a same-origin `url` and a `title`. `host.modal.close()` closes only the caller’s modal. A modal route uses `host.modal.set(request)` to update its own modal. Use `loading: true` while an attached modal fetches required data, then clear it with `modal.set({ loading: false })`; never disable dismissal without providing an accessible close control.

Use a modal when a workflow needs more space than a field renderer or properties rail.

Good examples:
- confirmation flow
- multi-step configuration
- product search
- AI-assisted copy generation
- results/review screen
- external system chooser

## Pattern

1. Header/rail/field action decides to open.
2. Host opens modal route.
3. Modal route uses `attach(...)`.
4. Modal performs work.
5. Persist through supported backend/editor flow.
6. Refresh/reselect/update through documented host APIs if required.
7. Close modal.
