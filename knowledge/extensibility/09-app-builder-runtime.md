# App Builder and Adobe I/O Runtime

Status: **SUPPORTED** as an architectural boundary; **VOLATILE** for deployment APIs
Last verified: 2026-09-08
Official sources:
- https://developer.adobe.com/uix/docs/services/aem-universal-editor/
- https://developer.adobe.com/app-builder/docs/guides/runtime_guides/

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

Require authentication and authorization before using a browser-provided identifier, scope a Runtime Action to the minimum operation, and enforce request-size and value limits. Use environment configuration for endpoints and secrets; never return secret-bearing upstream errors. Use a bounded outbound timeout and return a safe, actionable error plus correlation ID. Configure CORS only for expected extension origins and methods.
