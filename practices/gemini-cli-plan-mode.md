---
id: gemini-cli-plan-mode
title: Gemini CLI plan mode — read-only then approve
tags: [gemini, permissions, orchestration, ux]
status: active
updated: 2026-09-09
when_to_use: Entering Gemini CLI Plan mode, or customizing plan.toml / plan directory policies
---

## Summary

Gemini CLI **Plan mode** is a **read-only approval mode**: research and write a Markdown plan, then get formal approval before edits. Default **on**. Enter with `Shift+Tab` (Default → Auto-Edit → Plan), `/plan [goal]`, `gemini --approval-mode=plan`, or “start a plan…”. Not Claude/Codex/Cursor plan (`claude-code-plan-mode`, `openai-codex-plan-mode`). Unpaid/Google One users: Gemini CLI was replaced by Antigravity CLI (2026-06-18) — verify the binary (`gemini-cli-settings`).

## Notes

- Allowed: read/list/glob, grep, web search, `web_fetch` (confirm), `get_internal_docs`, research subagents (`codebase_investigator`, `cli_help`), `ask_user`, read-only MCP + resource tools, `activate_skill`, and writes **only** to `~/.gemini/tmp/<hash>/plans/*.md` (or a project-bounded custom `general.plan.directory`). `enter_plan_mode` is **unavailable in YOLO**. Persistent allows from Default/Auto-Edit do **not** carry into Plan; Plan-granted allows **do** apply globally.
- Flow: informal strategy + `ask_user` → plan file → Ctrl+X to edit/comment → Yes auto-accept / Yes manual / iterate / Esc. Approving exits Plan. Hooks can match `enter_plan_mode` / `exit_plan_mode` (`gemini-cli-hooks`). Custom rules: `~/.gemini/policies/` (Tier 2) vs built-in `plan.toml`. Custom plan dirs need matching `write_file`/`replace` `argsPattern` and stay **inside the project root**.
- Auto model routing (default): Plan → high-reasoning Pro; after approve → Flash. Disable with `general.plan.modelRouting: false`. Session cleanup (default 30 days) deletes managed plan files; custom directories are **not** auto-deleted. `/plan copy` copies the approved plan.
- Headless (`-p`): `enter_plan_mode` / `exit_plan_mode` auto-approve; exiting Plan switches to **YOLO** so CI does not hang. Disable Plan via `/settings` (`general.plan.enabled`) to remove it from Shift+Tab and unregister the tools.

## Sources

- [Plan Mode](https://geminicli.com/docs/cli/plan-mode/) — accessed 2026-09-09
- [Planning tools](https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/planning.md) — accessed 2026-09-09
- [Gemini CLI commands](https://geminicli.com/docs/reference/commands/) — accessed 2026-09-09
- [Plan mode announcement](https://developers.googleblog.com/plan-mode-now-available-in-gemini-cli/) — accessed 2026-09-09
