# Data exchange and shared context

Universal Editor extensions can exchange data with the host through the connection returned by `register(...)` or `attach(...)`.

Current UIX documentation includes shared context for user/editor information and host APIs for editor-specific state.

Examples of data an extension may need:
- IMS organization context
- current editor location
- editor state/editables
- field model/value for custom renderers
- authentication context/tokens where supported

## Security

Tokens are sensitive.
- never log them
- never persist them to localStorage without an explicit security design
- never expose them to arbitrary third-party browser calls
- prefer an approved backend boundary
