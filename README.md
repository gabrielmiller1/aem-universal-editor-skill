# AEM Universal Editor Engineering Skill

One shared engineering skill for Claude Code and OpenAI Codex developing production AEM as a Cloud Service Universal Editor solutions.

## What it covers

It covers:

- AEM as a Cloud Service
- Universal Editor
- Headless applications, Content Fragments, GraphQL, and persisted queries
- Universal Editor instrumentation (`data-aue-*`)
- Component definitions, models and filters
- Rich Text Editor configuration
- Universal Editor UI Extensibility
- Adobe App Builder
- `@adobe/uix-guest`
- Header menus, Properties Rail extensions, custom field/data-type renderers, and modals
- Modals and advanced authoring workflows
- Editor state and actions
- Adobe I/O Runtime integrations
- Extension Manager
- Debugging and production readiness

The goal is not only to help with basic Universal Editor configuration, but also with **advanced development of the Universal Editor authoring experience itself**.

## Use it

```text
.
├── SKILL.md               # Source of truth
├── AGENTS.md / CLAUDE.md  # Thin agent adapters
│
├── knowledge/             # Universal Editor engineering knowledge
├── patterns/              # Reusable implementation patterns
├── examples/              # Small advanced architecture patterns
├── checklists/            # Review and production checklists
├── prompts/               # Ready-to-use agent prompts
└── scripts/               # Validation and inspection utilities
```

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

## Skill discovery

`SKILL.md` begins with shared Agent Skills YAML frontmatter. `name` and `description` let Claude Code and Codex index the skill and select it when a task matches. The repository keeps one canonical `SKILL.md`; its `.claude/skills/aem-universal-editor` and `.agents/skills/aem-universal-editor` entries are symlinks to this repository root for project discovery.

### Claude Code

Claude Code discovers personal skills at `~/.claude/skills/<skill-name>/SKILL.md` and project skills at `.claude/skills/<skill-name>/SKILL.md`. It supports symlinked skill folders. To install this clone globally:

```bash
ln -s /absolute/path/to/aem-universal-editor-skill \
  ~/.claude/skills/aem-universal-editor
```

### OpenAI Codex

Codex discovers user skills at `~/.agents/skills/<skill-name>/SKILL.md` and repository skills at `.agents/skills/<skill-name>/SKILL.md`. It supports symlinked skill folders. To install this clone globally:

```bash
ln -s /absolute/path/to/aem-universal-editor-skill \
  ~/.agents/skills/aem-universal-editor
```

Create the parent directory first if it does not exist. Restart the agent if a newly added skill does not appear. See the [Claude Code skills documentation](https://code.claude.com/docs/en/skills) and [OpenAI Codex skills documentation](https://developers.openai.com/codex/skills).

Tell either agent to read its adapter and `SKILL.md`, inspect the target project, classify the change using the six-level decision model, verify volatile Adobe APIs, implement the smallest correct solution, and run the relevant checklists and scripts.

For Claude Code:

```text
Read ../aem-universal-editor-skill/CLAUDE.md and
../aem-universal-editor-skill/SKILL.md.

Use that skill for this task.

Review the Universal Editor implementation in this project.
```

For Codex:

```text
Read ../aem-universal-editor-skill/AGENTS.md and
../aem-universal-editor-skill/SKILL.md.

Use that skill for this task.

Review the Universal Editor implementation in this project.
```

## Freshness and contribution

Adobe documentation is authoritative. Local guidance labels significant claims as **SUPPORTED**, **VOLATILE**, **PREVIEW**, **UNDOCUMENTED**, or **DEPRECATED**; volatile API work must be re-checked against current first-party Adobe documentation. See `knowledge/00-source-policy.md`.

Keep contributions distilled and practical: correct an existing pattern before adding one, include an official source link and actual verification date, avoid credentials and generated files, and run the relevant scripts/checklists.

## Prompt example

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
