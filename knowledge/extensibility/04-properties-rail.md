# Properties rail extension

The properties rail can be extended with custom panels.

Current UIX documentation exposes a right-panel extension API and describes rail entries with values such as:
- unique `id`
- `header`
- `url`
- Spectrum icon name
- optional hotkey

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
