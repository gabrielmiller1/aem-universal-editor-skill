# Debugging Universal Editor headless solutions

## Debug in layers

### 1. Rendering
Does the app render correct content outside Universal Editor?

### 2. Instrumentation
Inspect DOM:
- resource
- property
- type
- filter
- model
- labels

### 3. Authoring model
Inspect:
- component definitions
- model definitions
- filter definitions

### 4. Network
Observe authoring calls and backend responses.
Do not infer success from UI alone.

### 5. Extension registration
Check:
- extension loads
- extension ID
- registration errors
- route URLs
- iframe origin requirements

### 6. Host API
Check:
- attach/register success
- editor state availability
- field model/value
- host action errors

### 7. Backend
Check:
- Runtime Action logs
- auth
- external API failures
- response schema
- timeouts

## Common symptom: field renderer appears but cannot save

Investigate:
- `host.field` connection
- model/value mismatch
- normalization
- validation state
- backend model restrictions
- stale selection/context
