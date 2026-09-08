# Header menu extension

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

Buttons can support sub-items according to current UIX documentation.

## Design guidance

Keep `onClick` thin. Delegate:
- data loading
- modal UI
- backend calls
- validation
to dedicated services/routes.
