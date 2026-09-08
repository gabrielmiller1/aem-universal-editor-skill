# Universal Editor UI Extensibility architecture

Universal Editor UI extensions are App Builder applications.

The core public extension point currently documented for Universal Editor UI extensibility is:

```yaml
extensions:
  universal-editor/ui/1:
    $include: src/universal-editor-ui-1/ext.config.yaml
```

A UI extension typically consists of:
- App Builder configuration
- a registration route/page
- `@adobe/uix-guest`
- `register(...)`
- optional additional routes for panels/renderers/modals
- `attach(...)` from extension UI routes
- Adobe React Spectrum UI
- optional Adobe I/O Runtime actions

## Boundary

`register(...)` declares capabilities to the Universal Editor.
`attach(...)` connects an extension UI surface to the host so it can read state or trigger supported host actions.

Never make up capabilities under `methods`. Verify namespaces from current docs.
