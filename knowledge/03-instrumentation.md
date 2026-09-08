# Universal Editor instrumentation

## Core attributes

Use current Adobe documentation to validate exact applicability by item type.

Key attributes include:
- `data-aue-resource`
- `data-aue-prop`
- `data-aue-type`
- `data-aue-filter`
- `data-aue-label`
- `data-aue-model`

`data-aue-behavior` is obsolete and should not be introduced.

## Review algorithm

For every selectable/editable:
1. Resolve its resource.
2. Resolve the property.
3. Verify the item type.
4. Verify parent/child resource inheritance expectations.
5. Verify container semantics.
6. Verify model association.
7. Verify filters.
8. Verify the backend accepts the resulting update.

## React helper

Prefer a small helper that makes instrumentation explicit and typed rather than scattering string assembly everywhere.

See `patterns/editable-component/`.
