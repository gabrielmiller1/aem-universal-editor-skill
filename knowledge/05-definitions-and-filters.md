# Component definitions and filters

Status: **SUPPORTED**
Last verified: 2026-09-08
Official sources:
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/component-definition
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/filtering

## Component definition

Use `component-definition.json` as the project-level catalog of authorable components when applicable.

Typical responsibilities:
- groups
- component IDs
- titles
- model and filter association

In the documented shape, `groups` contain their `components`. A component’s `id` is unique and is used by filters; `model` centrally links the component to its properties model; `filter` links its authoring restrictions. `plugins` select persistence (for example `aem`, `xwalk`, or `da`) and distinguish page (`page`) from Content Fragment (`cf`) components. Do not copy an AEM 6.5 plugin into an AEMaaCS design without a documented reason.

The component ID is important because it participates in the relationship among:
- insertion
- model selection
- filters
- authoring semantics

## Filters

Filters constrain authoring capabilities such as:
- components allowed in a container
- RTE features
- assets available to a media selector

Load model and filter JSON via their required `application/vnd.adobe.aue.*+json` script tags. A filter ID must be unique; `components: null` means all components. Instrumentation `data-aue-model` wins over a component-definition `model`, so use it only for an intentional local override.

## Review questions

- Can the author insert only valid component types?
- Does the component ID match the expected model?
- Are RTE options compatible with the backend?
- Is asset selection constrained appropriately?
- Are filters shared/reused consistently?
