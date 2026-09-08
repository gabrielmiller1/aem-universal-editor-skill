# Contextual menu extensibility

Universal Editor release notes added a contextual-menu extension point in the March 26, 2026 release.

Important: release-note presence is not sufficient to invent a public API.

## Agent rule

When asked to implement a contextual-menu action:

1. Verify the current Adobe Developer Universal Editor extension-point documentation.
2. Confirm the public namespace/method/payload.
3. Confirm what selection/context is passed.
4. Confirm enable/disable/visibility semantics.
5. Only then generate production code.

If the current developer docs do not expose the required stable API, explain the limitation and propose a supported header/rail/custom-field alternative rather than fabricating an API.
