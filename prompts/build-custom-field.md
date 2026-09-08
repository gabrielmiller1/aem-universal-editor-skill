Use the AEM Universal Editor Engineering skill.

Create a production-quality custom Universal Editor field renderer for the
requested domain data type.

Requirements:
- verify the current custom data type renderer API
- use `@adobe/uix-guest`
- attach to the host
- read current field model/value/error/validation state
- write values only through currently supported field APIs
- use React Spectrum
- support loading/error/empty/disabled/read-only states
- normalize the domain value
- move protected external calls to a Runtime Action/backend
- add tests for normalization and errors
- document Extension Manager setup
