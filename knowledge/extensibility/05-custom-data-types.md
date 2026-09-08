# Custom data types / field renderers

Universal Editor UI Extensibility supports custom field rendering in the properties rail.

A custom renderer can:
- introduce UI for a custom data type
- replace the default renderer for a supported data type
- read the field model
- read the current value
- read error/validation state
- write values through the host field API
- adjust iframe height

Current registration is exposed through the `canvas` namespace and a renderer definition containing a data type and a same-origin extension route URL.

## Field API

Current documentation includes field operations conceptually equivalent to:
- get model
- get value
- get error
- get validation state
- write/change value
- set renderer height

Verify exact method names/signatures before production coding.

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
