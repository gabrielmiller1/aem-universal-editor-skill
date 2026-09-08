# Source and freshness policy

Last verified: 2026-09-08

Universal Editor changes frequently. This knowledge base is a reasoning scaffold, not a replacement for current Adobe documentation.

## Official sources to verify

AEM as a Cloud Service Universal Editor:
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor

Universal Editor UI Extensibility:
- https://developer.adobe.com/uix/docs/services/aem-universal-editor/

UI Extensibility:
- https://developer.adobe.com/uix/docs/

AEM UI extensibility tutorials:
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/cloud-service/developing/extensibility/ui/overview

AEM Extension Manager:
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/configuring-and-extending/extension-manager

Adobe AEM UIX examples:
- https://github.com/adobe/aem-uix-examples

## Verification trigger

Before generating production code, verify current docs if the task uses:
- an extension point
- a host API method
- a UIX namespace
- field APIs
- editor state/actions
- events
- contextual-menu functionality
- RTE lifecycle hooks
- Extension Manager deployment/configuration
- any API introduced or changed in recent release notes

## Evidence hierarchy

Prefer:
1. Current Adobe Developer documentation
2. Current Experience League AEMaaCS documentation
3. Adobe-maintained GitHub examples
4. Adobe release notes
5. Community articles for additional practice context only

Do not let a community article override current official API documentation.

## Status vocabulary

- **SUPPORTED** — currently documented public API suitable for normal production use.
- **VOLATILE** — currently documented, but re-check before implementation because Universal Editor/UIX evolves quickly.
- **PREVIEW** — explicitly preview, experimental, or pre-release; do not treat as production-ready without approval.
- **UNDOCUMENTED** — observed in a release note, example, or product UI without a current public developer contract; do not invent code for it.
- **DEPRECATED** — obsolete; do not introduce it in new work.
