---
id: cursor-hooks-json
title: Cursor hooks.json — observe and block the agent loop
tags: [cursor, hooks, permissions, safety]
status: active
updated: 2026-10-11
when_to_use: Defining .cursor/hooks.json (or ~/.cursor/hooks.json) so scripts can deny tools, format after edits, or audit cloud agent turns
---

## Summary

Cursor **hooks** are spawned processes that speak JSON over stdio at named lifecycle events. Put must-never policy here, not in AGENTS.md. Cloud Agents load **command-based** project hooks from `.cursor/hooks.json` (plus Enterprise team/enterprise hooks). They do **not** load `~/.cursor/hooks.json` or prompt-based hooks. Correlate a tool across `preToolUse` / execution hooks with `tool_use_id`; the `.jsonl` transcript path is on the payload and in `CURSOR_TRANSCRIPT_PATH`.

## Notes

- Config: `"version": 1` plus a `hooks` map. Project scripts run from the **repo root** (use `.cursor/hooks/….sh`). User hooks in `~/.cursor/` apply locally only. Cursor reloads the file automatically. Plugins can ship `hooks/hooks.json`.
- Categories: Agent (`preToolUse`, `beforeShellExecution`, `beforeMCPExecution`, `subagentStart`/`Stop`, `beforeSubmitPrompt`, `preCompact`, `stop`, …); Tab (`beforeTabFileRead` / `afterTabFileEdit`); app (`workspaceOpen`).
- Command hooks: stdin JSON in, stdout JSON out. Exit `0` uses the JSON; exit `2` blocks (`permission: "deny"`); other exits **fail-open** unless `failClosed: true`. Invalid JSON / schema on permission hooks still blocks. Set `failClosed` on security-critical `beforeMCPExecution`.
- Every session hook now includes `transcript_path` (null if transcripts are off). `CURSOR_TRANSCRIPT_PATH` matches it. App `workspaceOpen` omits conversation/transcript fields. `preToolUse`, `postToolUse`, and `postToolUseFailure` include `tool_use_id`. IDE 3.22 also sends `parent_tool_call_id` on those events when the call is inside a subagent, and `child_conversation_id` on `subagentStop`.
- `preToolUse` fires for all tools (`Shell`, `Read`, `Write`, `Grep`, `Delete`, `Task`, `MCP:<tool_name>`). Output `permission` allow/deny; `"ask"` is in the schema but **not enforced** for `preToolUse` today. Prefer `beforeShellExecution` to gate the terminal. Optional `updated_input` rewrites args. `subagentStart` `"ask"` is treated as deny.
- Cloud: hooks start only after a **writable** environment (not early read-only turns). Supported: shell/file/tool hooks plus conversation hooks (`beforeSubmitPrompt`, `afterAgentThought`/`Response`, `subagentStart`/`Stop`, `preCompact`, `stop`). **Not** in cloud: `sessionStart`/`End`, Tab, `workspaceOpen`, `beforeMCPExecution`/`afterMCPExecution`. Gate MCP another way for cloud runs.
- Claude Code `.claude/settings.json` hooks can map (`PreToolUse` → `preToolUse`) when third-party skills are enabled; keep a native `.cursor/hooks.json` for cloud. Audit logs do not record prompts — hooks are the compliance path (`cursor-organization-audit-logs`).

## Sources

- [Cursor Hooks](https://cursor.com/docs/hooks) — accessed 2026-10-11
- [Cursor IDE release notes](https://cursor.com/docs/release-notes/ide) — accessed 2026-10-11
- [Cloud Agents — hooks support](https://cursor.com/docs/cloud-agent) — accessed 2026-08-25
- [Compliance and Monitoring](https://cursor.com/docs/enterprise/compliance-and-monitoring) — accessed 2026-10-11
