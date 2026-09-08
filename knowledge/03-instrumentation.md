# Universal Editor instrumentation

Status: **SUPPORTED**
Last verified: 2026-09-08
Official source: https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/attributes-types

## Core attributes

Use current Adobe documentation to validate exact applicability by item type.

Key attributes include:
- `data-aue-resource`
- `data-aue-prop`
- `data-aue-type`
- `data-aue-filter`
- `data-aue-label`
- `data-aue-model`

`data-aue-behavior` is **DEPRECATED**: it is ignored. A direct child with `data-aue-resource` of a container is automatically considered a component. Do not add it or use it to reason about move/delete behavior.

## Applicability and persistence

`data-aue-resource` is the persistence key and is always required, although it can be inherited from the nearest parent. `data-aue-prop` is required for in-context editing except on a container; a container property, when present, represents a Content Fragment multi-reference field. Use only documented item types: `text`, `richtext`, `media`, `container`, `component`, and `reference`.

`component` identifies a moveable/deletable component and opens its properties fields. It does not add a data field by itself. A `container` is a paragraph-system-like editable. Apply `data-aue-filter` only where its meaning is valid: allowed components for a container, asset criteria for media, reference criteria for reference, or RTE features.

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
