# App Builder and Adobe I/O Runtime

Use Runtime Actions when a UI extension needs server-side behavior.

Typical reasons:
- secret-bearing external API calls
- API aggregation
- transformations
- business validation
- calling systems that should not receive browser tokens
- durable integration logic

## Architecture

```text
Universal Editor
  -> UI Extension
      -> Runtime Action
          -> External API / approved backend
```

## Runtime action checklist

- validate input
- enforce allowlists
- use environment secrets
- set timeouts
- handle non-2xx responses
- return structured errors
- avoid leaking upstream payloads
- add correlation IDs
- log safely
- apply authz rules appropriate to the use case
