# Component models

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

## Model linkage

Prefer central model association through the component definition where suitable for the project.

If instrumentation supplies `data-aue-model`, account for its precedence.

## Agent rule

Never invent a field `component` value. Check the current supported field/component types before generating a model.

Common currently documented types include text, textarea, richtext, select, multiselect, checkbox/radio groups, boolean, number, date-time, references, AEM content/content fragment/experience fragment, tabs and containers. Verify before coding.
