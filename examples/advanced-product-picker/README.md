# Advanced example design: Product Picker

This example is intentionally architectural. Use current Adobe APIs when implementing.

## Goal

Replace a product reference field in Universal Editor with a business-aware product picker.

## Flow

1. Content model exposes a product field.
2. Universal Editor model uses a data type suitable for the extension contract.
3. UI extension registers a custom renderer.
4. Renderer attaches to Universal Editor.
5. Renderer reads:
   - field model
   - current value
   - validation state
6. Renderer opens/searches product catalog.
7. Protected catalog calls go through a Runtime Action/backend.
8. Selected product ID is normalized.
9. Renderer writes the value through the supported field API.
10. Application renders product data using its delivery-side integration.

## Non-goals

Do not persist the entire third-party product payload into AEM unless that is an explicit content architecture decision.
