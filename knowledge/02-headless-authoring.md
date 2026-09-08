# Headless authoring with Universal Editor

## Core principle

The application remains responsible for rendering the experience. Universal Editor augments that rendered experience with authoring semantics.

The agent should always identify:

1. What resource is being edited?
2. What field/property is being edited?
3. Which backend owns persistence?
4. Which frontend element maps to that persisted value?
5. Is the edit inline, properties-panel based, or a custom UIX experience?
6. How is the authored value re-fetched or reflected in the app?

## Common failure modes

- Delivery GraphQL model differs from authoring model.
- A field is present in the app but not addressable as an editable property.
- An editable points at the wrong resource URN.
- Authoring works but production rendering reads a different field.
- A custom extension updates backend state but the editor/app is not refreshed.
- Localization context is lost in custom workflows.
- Extension code assumes a selected editable always exists.

## Design rule

The extension should never become the source of truth for content. It is an authoring client. Persist durable content in the intended AEM/content backend.
