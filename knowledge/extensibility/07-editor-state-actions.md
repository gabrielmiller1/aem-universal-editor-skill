# Editor state and actions

Extensions can read Universal Editor state and invoke supported editor actions through the host connection.

Current documentation includes actions such as:
- navigate to another editor content URL
- refresh the current page
- select editables
- reload extension visuals/capabilities
- switch editor mode

The extension can obtain editor state and use it to reason about current editables.

## Rules

- State can change while async work is running.
- Never assume a selected editable exists.
- Re-read state before destructive or expensive operations.
- Avoid stale editable references.
- Use refresh only when a more targeted supported update is not available.
- Verify action method names/signatures from current docs.
