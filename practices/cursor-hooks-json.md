---
id: cursor-hooks-json
title: Cursor hooks.json — observe and block the agent loop
tags: [cursor, hooks, permissions, safety]
status: active
updated: 2026-08-25
when_to_use: Defining .cursor/hooks.json (or ~/.cursor/hooks.json) so scripts can deny tools, format after edits, or audit cloud agent turns
---

## Summary

Cursor **hooks** are spawned processes that speak JSON over stdio at named lifecycle events. Put must-never policy here, not in AGENTS.md. Cloud Agents load **command-based** project hooks from `.cursor/hooks.json` (plus Enterprise team/enterprise hooks). They do **not** load `~/.cursor/hooks.json` or prompt-based hooks.

## Notes

- Config: `"version": 1` plus a `hooks` map. Project scripts run from the **repo root** (use `.cursor/hooks/….sh`). User hooks in `~/.cursor/` apply locally only. Cursor reloads the file automatically. Plugins can ship `hooks/hooks.json`.
- Categories: Agent (`preToolUse`, `beforeShellExecution`, `beforeMCPExecution`, `subagentStart`/`Stop`, `beforeSubmitPrompt`, `preCompact`, `stop`, …); Tab (`beforeTabFileRead` / `afterTabFileEdit`); app (`workspaceOpen`).
- Command hooks: stdin JSON in, stdout JSON out. Exit `0` uses the JSON; exit `2` blocks (`permission: "deny"`); other exits **fail-open** unless `failClosed: true`. Set `failClosed` on security-critical `beforeMCPExecution`.
- `preToolUse` fires for all tools (`Shell`, `Read`, `Write`, `Grep`, `Delete`, `Task`, `MCP:<tool_name>`). Output `permission` allow/deny; `"ask"` is in the schema but **not enforced** for `preToolUse` today. Prefer `beforeShellExecution` to gate the terminal. Optional `updated_input` rewrites args.
- Cloud: hooks start only after a **writable** environment (not early read-only turns). Supported: shell/file/tool hooks plus conversation hooks (`beforeSubmitPrompt`, `afterAgentThought`/`Response`, `subagentStart`/`Stop`, `preCompact`, `stop`). **Not** in cloud: `sessionStart`/`End`, Tab, `workspaceOpen`, `beforeMCPExecution`/`afterMCPExecution`. Gate MCP another way for cloud runs.
- Claude Code `.claude/settings.json` hooks can map (`PreToolUse` → `preToolUse`) when third-party skills are enabled; keep a native `.cursor/hooks.json` for cloud.

## Sources

- [Cursor Hooks](https://cursor.com/docs/hooks.md) — accessed 2026-08-25
- [Cloud Agents — hooks support](https://cursor.com/docs/cloud-agent) — accessed 2026-08-25
- [Cloud Agents help — Do Cloud Agents run hooks?](https://cursor.com/help/ai-features/cloud-agents) — accessed 2026-08-25
