# Release watch

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/universal-editor/current

Universal Editor is a fast-moving product.

At the start of an advanced task, review current release notes for changes affecting:
- extension points
- RTE
- field validation
- asset picker/filter behavior
- accessibility
- native features replacing extensions
- Extension Manager

Known 2026 examples that demonstrate why this matters:
- Release notes announce `beforeSave` / `beforeLoad` RTE extensions, but the public RTE API contract was not documented in the reference inspected for this audit.
- Page Lock is a native Universal Editor feature as of the September 2026 release; do not build a replacement extension by default.
- Do not infer contextual-menu APIs from release notes. The current UIX API pages inspected for this audit document `headerMenu`, `rightPanel`, and `canvas`, not a public contextual-menu contract.

Never preserve a custom extension just because an older architecture needed it; check whether the feature has become native.
