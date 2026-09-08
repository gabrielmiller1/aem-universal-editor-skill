# AEM Universal Editor Skill

A shared engineering skill for AI coding agents working with **Adobe Experience Manager as a Cloud Service (AEMaaCS)**, **Universal Editor**, and **headless applications**.

Designed to be used with **Claude Code** and **OpenAI Codex** from the same knowledge base.

## What it covers

The skill provides specialized guidance and implementation patterns for:

- AEM as a Cloud Service
- Universal Editor
- Headless applications
- Content Fragments
- GraphQL and persisted queries
- Universal Editor instrumentation (`data-aue-*`)
- Component definitions, models and filters
- Rich Text Editor configuration
- Universal Editor UI Extensibility
- Adobe App Builder
- `@adobe/uix-guest`
- Header actions
- Properties rail extensions
- Custom field renderers
- Modals and advanced authoring workflows
- Editor state and actions
- Adobe I/O Runtime integrations
- Extension Manager
- Debugging and production readiness

The goal is not only to help with basic Universal Editor configuration, but also with **advanced development of the Universal Editor authoring experience itself**.

## Repository structure

```text
.
├── SKILL.md               # Main engineering instructions
├── AGENTS.md              # Codex entry point
├── CLAUDE.md              # Claude Code entry point
│
├── knowledge/             # Universal Editor engineering knowledge
├── patterns/              # Reusable implementation patterns
├── examples/              # Advanced architecture examples
├── checklists/            # Review and production checklists
├── prompts/               # Ready-to-use agent prompts
└── scripts/               # Validation and inspection utilities
```

`SKILL.md` is the source of truth.

`AGENTS.md` and `CLAUDE.md` are intentionally small adapters so both coding agents use the same engineering knowledge.

## Using it

Clone the repository somewhere accessible from your development workspace:

```bash
git clone https://github.com/gabrielmiller1/aem-universal-editor-skill.git
```

For example:

```text
workspace/
├── aem-universal-editor-skill/
└── my-aem-project/
```

### Claude Code

Tell Claude Code to use the skill when working on Universal Editor tasks:

```text
Read ../aem-universal-editor-skill/CLAUDE.md and
../aem-universal-editor-skill/SKILL.md.

Use that skill for this task.

Review the Universal Editor implementation in this project.
```

### Codex

For Codex:

```text
Read ../aem-universal-editor-skill/AGENTS.md and
../aem-universal-editor-skill/SKILL.md.

Use that skill for this task.

Review the Universal Editor implementation in this project.
```

You can also copy or reference the appropriate adapter from your project if you want the skill to be discovered automatically.

## Example: advanced Universal Editor development

```text
Use the AEM Universal Editor skill.

I want to create a custom Product Picker inside Universal Editor.

Before coding:

1. Inspect the current project.
2. Determine the appropriate Universal Editor extension point.
3. Verify the current Adobe documentation.
4. Explain the proposed architecture.

Then implement it using supported Universal Editor APIs,
Adobe App Builder and @adobe/uix-guest.

Protected product API calls must go through a backend or
Adobe I/O Runtime Action.

Do not expose secrets in browser code.
```

## Example: extending the Universal Editor UI

```text
Use the AEM Universal Editor skill.

Create a Content Advisor panel in the Universal Editor properties rail.

The panel should:

- inspect the current editor state
- understand the currently selected content
- call a protected backend
- display validation and content suggestions
- allow selecting affected editables
- launch remediation workflows
- refresh the editor when necessary

Verify the current Universal Editor UI Extensibility APIs before coding.
```

## Example: project review

Ready-to-use prompts are available under `prompts/`.

For example:

```text
Read the AEM Universal Editor skill and follow
prompts/review-project.md.

Review this project.
```

The review covers instrumentation, Content Fragments, GraphQL, component models, filters, UI extensions, App Builder integrations, security and production readiness.

## Keeping the skill current

Universal Editor evolves quickly.

For volatile APIs such as:

- extension points
- `@adobe/uix-guest`
- editor actions
- custom field APIs
- RTE extensions
- App Builder integration
- Extension Manager

the skill instructs coding agents to **verify the current Adobe documentation before generating production code**.

The local knowledge base should guide reasoning and architecture, not replace current Adobe documentation.

## Contributing

Improvements, fixes and new Universal Editor patterns are welcome.

When adding examples:

- keep them generic
- do not include customer-specific code or credentials
- prefer supported Adobe APIs
- document assumptions
- avoid undocumented Universal Editor APIs
- update the relevant checklist or knowledge file when appropriate