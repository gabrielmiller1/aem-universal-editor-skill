# Universal Editor headless architecture

A useful mental model is to treat a Universal Editor headless solution as five cooperating planes.

```text
Authoring UI
    |
    v
Universal Editor
    |
    +--> UI extensions / App Builder
    |
    v
Instrumented application
    |
    v
AEM content API / authoring persistence
    |
    v
Content Fragments / other supported content
```

## Plane 1 — Domain/content model

Defines the durable content contract:
- Content Fragment Models
- references
- localization strategy
- validation
- semantic relationships

## Plane 2 — Delivery

Defines how the app reads content:
- GraphQL
- persisted queries
- delivery APIs
- caching/CDN
- rendering strategy

## Plane 3 — Authoring instrumentation

Maps rendered application DOM to content resources:
- `data-aue-resource`
- `data-aue-prop`
- `data-aue-type`
- `data-aue-filter`
- `data-aue-label`
- optionally `data-aue-model`

## Plane 4 — Authoring model

Defines component behavior in Universal Editor:
- component definition
- model definition
- filters
- field types
- RTE capabilities

## Plane 5 — Editor extensibility

Changes the editor experience itself:
- header menu actions
- properties rail
- custom field/data type UI
- modals
- editor actions/state
- App Builder Runtime integration

Do not solve a plane-5 requirement with plane-3 code unless instrumentation is actually the problem.
