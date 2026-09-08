# Header menu extension

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/header-menu/

The Universal Editor currently supports extension-provided header menu buttons.

A header action is appropriate for:
- project-wide authoring commands
- export/sync actions
- opening a custom workflow
- launching a modal
- commands not tied to one field renderer

Typical registration shape:

```js
headerMenu: {
  getButtons() {
    return [{
      id: "com.example.some-action",
      label: "Some action",
      icon: "SomeSpectrumIcon",
      onClick: async () => {
        // supported action
      }
    }];
  }
}
```

Buttons can support sub-items according to current UIX documentation. The documented button contract uses a globally unique `id`, `label`, optional Spectrum workflow `icon`, optional `variant`, and `onClick`; submenu item IDs need only be unique within their submenu. Treat icon availability and callback details as version-sensitive.

## Design guidance

Keep `onClick` thin. Delegate:
- data loading
- modal UI
- backend calls
- validation
to dedicated services/routes.
