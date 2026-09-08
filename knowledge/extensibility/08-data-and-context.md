# Data exchange and shared context

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/data/

Universal Editor extensions can exchange data with the host through the connection returned by `register(...)` or `attach(...)`.

Current UIX documentation includes shared context for user/editor information and host APIs for editor-specific state.

Examples of data an extension may need:
- IMS organization context
- current editor location
- editor state/editables
- field model/value for custom renderers
- authentication context/tokens where supported

The documented shared-context keys are `locale`, `theme`, `orgId`, `token`, and `authScheme`. Documented editor-state data includes `connections`, `selected`, `editables`, `location`, and `customTokens`. Access is not authorization to forward or persist sensitive data. Minimize use of `token`/`customTokens`; do not log them or send them to a third party without an approved, documented security design.

## Security

Tokens are sensitive.
- never log them
- never persist them to localStorage without an explicit security design
- never expose them to arbitrary third-party browser calls
- prefer an approved backend boundary
