# Extension registration

Status: **VOLATILE**
Last verified: 2026-09-08
Official source: https://developer.adobe.com/uix/docs/services/aem-universal-editor/api/commons/

Current Universal Editor UIX documentation describes registration with `@adobe/uix-guest`.

Conceptual shape:

```js
import { register } from "@adobe/uix-guest";

const connection = await register({
  id: "com.example.my-extension",
  methods: {
    // supported namespaces only
  }
});
```

Currently documented namespaces include:
- `headerMenu`
- `rightPanel`
- `canvas`

The exact method names and accepted payloads must be verified against current documentation. The common-concepts example names `rightPanel.getPanels()`, but the dedicated Properties Rail reference specifies `rightPanel.addRails()`. Use the dedicated reference for rails and record this documentation inconsistency in a production change.

For extension UI loaded in another route or iframe:

```js
import { attach } from "@adobe/uix-guest";

const connection = await attach({
  id: "com.example.my-extension"
});
```

Use one stable, vendor-prefixed extension ID across registration and attachment.
