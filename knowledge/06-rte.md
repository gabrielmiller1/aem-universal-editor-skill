# Universal Editor Rich Text

Status: **SUPPORTED** for filter-based configuration; **VOLATILE** for newly introduced hooks
Last verified: 2026-09-08
Official sources:
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/configure-rte
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/universal-editor/current

Universal Editor supports rich text authoring in-place and in the properties panel.

Treat RTE capability as a contract among:
- backend storage/serialization
- editor feature configuration
- rendering/sanitization
- link handling
- extension hooks

## Review

- Do not enable formatting that the backend/project cannot safely persist/render.
- Verify current RTE filter syntax.
- Verify current lifecycle/extension hooks before implementing them.
- Current release notes may add hooks before older examples are updated.

## 2026 freshness note

The September 3, 2026 release notes announce `beforeSave` and `beforeLoad` RTE extensions. The public RTE configuration reference inspected on 2026-09-08 does not document hook names, registration, signatures, ordering, error behavior, or support status. Treat them as **UNDOCUMENTED**, not production-ready. Do not generate an implementation until a current public developer/API reference defines that contract.
