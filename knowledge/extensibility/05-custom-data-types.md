# Custom data types / field renderers

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/custom-data-types/

Universal Editor UI Extensibility supports custom field rendering in the properties rail.

A custom renderer can:
- introduce UI for a custom data type
- replace the default renderer for a supported data type
- read the field model
- read the current value
- read error/validation state
- write values through the host field API
- adjust iframe height

Registration uses `canvas.getRenderers()` and a renderer `{ dataType, url, icon? }`. `dataType` is the model field’s `component` value, not `valueType`; `url` must be same-origin with the declaring extension. Prefer a vendor-specific custom component (for example `com.example.product-reference`) rather than silently overriding a built-in renderer.

## Field API

Current documentation names these field operations:
- `getModel()`
- `getValue()`
- `getError()`
- `getValidationState()`
- `onChange(value)`
- `setHeight(height)`

The current public page describes semantics but not complete TypeScript signatures or lifecycle guarantees. Verify the installed SDK/current page before production coding; normalize values before `onChange`, respect `model.readOnly`, and call `setHeight` only with a measured, bounded UI height.

## Best use cases

- product picker
- taxonomy chooser
- DAM/business asset selector
- composite domain value editor
- structured link picker
- external catalog lookup

## Security

Do not call privileged external APIs directly with secrets from this iframe.
Use a Runtime Action/backend when credentials are required.
