# Properties rail extension

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/properties-rails/

The properties rail can be extended with custom panels.

The dedicated UIX reference exposes `rightPanel.addRails()` and describes rail entries with:
- unique `id`
- `header`
- `url`
- Spectrum icon name
- optional hotkey

Do not use `rightPanel.getPanels()` for a rail merely because it appears in the generic common-concepts sample; that page conflicts with the dedicated API reference. Register a route hosted by the extension, then call `attach({ id })` inside the route before accessing host data.

The panel is loaded as extension UI and may use `attach(...)` to access supported host APIs.

## Important behavior

Current documentation notes that opening the panel can cause re-rendering; do not assume panel state is cached forever.

## Good use cases

- content diagnostics
- custom content advisor
- workflow/status UI
- product/content context
- validation summary
- external system data
- batch authoring helpers
