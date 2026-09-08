# Component models

Status: **SUPPORTED**
Last verified: 2026-09-08
Official source: https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/field-types

Universal Editor model definitions describe fields rendered in the properties panel.

A model has an ID and fields. Field capabilities vary by component type and current product support.

Important model concerns include:
- `name`
- `label`
- `component`
- `valueType`
- `required`
- `readOnly`
- `hidden`
- `condition`
- `multi`
- `validation`
- `raw`

`value` is a default placeholder that is persisted when the field has no value; do not use it as a display-only fallback. `valueType` supports `string`, `string[]`, `number`, `date`, and `boolean`. `name` can be a direct property or (for components in `cq:Pages`) a nested path such as `teaser/image/fileReference`.

`multi` is supported, including with a `container` field, but container nesting is not permitted for multifields in the properties panel. Conditions only control field visibility; backend/model validation remains authoritative. `raw` is renderer-oriented data, not a secret channel. With `aem` or `xwalk` plugins, field names cannot contain `_`.

## Model linkage

Prefer central model association through the component definition where suitable for the project.

If instrumentation supplies `data-aue-model`, account for its precedence.

## Agent rule

Never invent a field `component` value. Check the current supported field/component types before generating a model.

Common currently documented types include text, textarea, richtext, select, multiselect, checkbox/radio groups, boolean, number, date-time, references, AEM content/content fragment/experience fragment, tabs and containers. Verify before coding.

These models are **not** Granite UI dialogs or `cq:dialog` definitions. They are JSON contracts for Universal Editor’s properties panel and must align with the persistence plugin and content architecture. A Content Fragment Model remains the durable content schema; a Universal Editor model describes authoring fields for the selected editable and is not a replacement Content Fragment Model.
