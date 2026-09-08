# Editor state and actions

Status: **VOLATILE**
Last verified: 2026-09-08
Official sources:
- https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/actions/
- https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/data/

Extensions can read Universal Editor state and invoke supported editor actions through the host connection.

Current documentation includes actions such as:
- navigate to another editor content URL
- refresh the current page
- select editables
- reload extension visuals/capabilities
- switch editor mode

The current public action names are `navigateTo(href)`, `refreshPage()`, `selectEditables(editables)`, `reloadExtension(extensionId)`, and `setEditorMode("edit" | "preview")`. It also documents content actions (`update`, `details`, `remove`, `add`, `copy`, `move`) and `toast`; verify their current signatures and authorization behavior before offering a destructive workflow.

The extension can obtain editor state and use it to reason about current editables.

## Rules

- State can change while async work is running.
- Never assume a selected editable exists.
- Re-read state before destructive or expensive operations.
- Avoid stale editable references.
- Use refresh only when a more targeted supported update is not available.
- Verify action method names/signatures from current docs.
