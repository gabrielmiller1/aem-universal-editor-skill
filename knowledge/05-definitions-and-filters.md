# Component definitions and filters

## Component definition

Use `component-definition.json` as the project-level catalog of authorable components when applicable.

Typical responsibilities:
- groups
- component IDs
- titles
- model association

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

## Review questions

- Can the author insert only valid component types?
- Does the component ID match the expected model?
- Are RTE options compatible with the backend?
- Is asset selection constrained appropriately?
- Are filters shared/reused consistently?
