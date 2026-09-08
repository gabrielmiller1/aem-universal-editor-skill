# Contextual menu extensibility

Status: **UNDOCUMENTED**
Last verified: 2026-09-08
Official sources:
- https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/
- https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/release-notes/universal-editor/current

Release notes or product announcements may mention contextual-menu capability. The current public Universal Editor UIX API inspected for this audit does not publish a contextual-menu namespace, method, payload, or lifecycle contract.

Important: release-note presence is not sufficient to invent a public API.

## Agent rule

When asked to implement a contextual-menu action:

1. Verify the current Adobe Developer Universal Editor extension-point documentation.
2. Confirm the public namespace/method/payload.
3. Confirm what selection/context is passed.
4. Confirm enable/disable/visibility semantics.
5. Only then generate production code.

If the current developer docs do not expose the required stable API, explain the limitation and propose a supported header/rail/custom-field alternative rather than fabricating an API.
