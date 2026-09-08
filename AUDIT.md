# Audit

## Audit date

2026-09-08

## Sources checked

- [Universal Editor attributes and item types](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/attributes-types)
- [Model definitions, fields, and component types](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/field-types)
- [Component definitions](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/component-definition)
- [Filters](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/filtering)
- [RTE configuration](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/configure-rte)
- [Universal Editor UI Extensibility API](https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/)
- [Current Universal Editor release notes](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/universal-editor/current)

## Important corrections

- Corrected the component-definition example: `components` belong inside each group; a component can centrally declare its `model` and `filter`.
- Confirmed that `data-aue-behavior` is obsolete and ignored. The scanner now detects real attribute use, not documentation mentions.
- Replaced speculative properties-rail guidance with the documented `rightPanel.addRails()` contract.
- Confirmed the documented custom-renderer registration and field methods. The pattern now registers a deliberately custom `component` data type rather than overriding a built-in type by accident.
- Removed the assertion that RTE `beforeSave`/`beforeLoad` hooks are ready to implement: current release notes announce them, but the current public RTE developer reference inspected for this audit does not document their contract.

## New capabilities documented

- Model field defaults, conditions, raw data, read-only/hidden fields, nested paths, multifield limitations, and Content Fragment considerations.
- Header menus, properties rails, custom data-type renderers, same-origin modals, editor state/actions, shared context, and protected Runtime Action design.

## Deprecated/removed guidance

- `data-aue-behavior` is marked **DEPRECATED** and must not be authored.
- No public contextual-menu namespace or method is recommended: release-note wording alone is insufficient.

## APIs intentionally marked volatile

- `@adobe/uix-guest` host methods and extension namespaces.
- Editor actions and shared-context data, including user tokens.
- Extension Manager deployment/configuration and RTE configuration.

## Preview/undocumented capabilities

- RTE `beforeSave` and `beforeLoad`: announced in the 2026-09-03 release notes, but treated as **UNDOCUMENTED** until a public developer contract is available.
- Contextual-menu extensibility: treated as **UNDOCUMENTED** because the inspected current public Universal Editor UIX API documents only `headerMenu`, `rightPanel`, and `canvas` namespaces.

## Remaining uncertainties

- Adobe documentation contains an internal naming inconsistency: the common-concepts page illustrates `rightPanel.getPanels()`, while the dedicated Properties Rail API specifies `rightPanel.addRails()`. This skill uses the dedicated API and requires a fresh check before production work.

## Validation performed

- JSON parsing and model/definition cross-reference validation.
- YAML syntax validation.
- Universal Editor file discovery and instrumentation scanning.
- Search for obsolete attributes, speculative API names, and credentials.
