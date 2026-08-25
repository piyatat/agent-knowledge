---
id: cursor-slash-commands
title: Cursor slash commands vs Skills
tags: [cursor, skills, prompts, ux]
status: active
updated: 2026-08-25
when_to_use: Adding reusable /commands in .cursor/commands or deciding whether to migrate them to SKILL.md
---

## Summary

**Commands** are markdown (or `.txt`) files the user invokes with `/` in Agent chat — a focused prompt/workflow, not a model-chosen skill. Live in `.cursor/commands/` (and plugin `commands/`). Prefer Skills when the agent should auto-load domain knowledge; keep a Command (or a skill with `disable-model-invocation: true`) for explicit `/deploy`-style actions.

## Notes

- Customize lists Commands next to rules, skills, subagents, and hooks. Plugin commands: `.md` / `.mdc` / `.markdown` / `.txt` with optional YAML `name` (kebab-case) and `description`.
- `/migrate-to-skills` converts workspace and user slash commands into skills with `disable-model-invocation: true` (slash-only). Dynamic “Apply Intelligently” rules can become ordinary skills; `alwaysApply` / glob rules and User Rules are not migrated.
- Command **deeplinks** (`cursor.com/link/command?name=&text=` or `cursor://anysphere.cursor-deeplink/command`) create a command after **user review**. They never auto-run. Cap URL at 8,000 chars. Do not embed secrets.
- CLI also has built-in slash commands (`/plan`, `/debug`, `/mcp`, `/plugin`, `/sandbox`, …) — not the same as project command files. Plugin reload refreshes plugin slash commands.
- Do not duplicate a Command as an always-on rule. If the workflow needs scripts + progressive disclosure, use a Skill; if it must never fire unless the user types `/name`, keep Command or `disable-model-invocation`.

## Sources

- [Customize Cursor](https://cursor.com/docs/customize-cursor) — accessed 2026-08-25
- [Plugin commands format](https://cursor.com/docs/reference/plugins.md) — accessed 2026-08-25
- [Cursor Agent Skills — migrate-to-skills](https://cursor.com/docs/skills) — accessed 2026-08-25
- [Deeplinks](https://cursor.com/docs/reference/deeplinks.md) — accessed 2026-08-25
