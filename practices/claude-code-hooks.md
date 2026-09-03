---
id: claude-code-hooks
title: Claude Code hooks — settings.json lifecycle gates
tags: [claude, hooks, permissions, safety]
status: active
updated: 2026-09-03
when_to_use: Authoring .claude/settings.json hooks, or choosing command/http/prompt hooks instead of CLAUDE.md advice
---

## Summary

Claude Code **hooks** run at named lifecycle events (CLI, IDE, Desktop, and Claude Code on the web). Put must-never policy here, not in `CLAUDE.md`. This is not Cursor `.cursor/hooks.json` (`cursor-hooks-json`) and not a plugin marketplace entry (`claude-code-plugins`). `memory-files-vs-enforcement-hooks` is the decision; this page is the Claude surface.

## Notes

- Locations (entries **merge**, they do not replace): `~/.claude/settings.json` (user), `.claude/settings.json` (project, committable), `.claude/settings.local.json` (gitignored), managed policy, plugin `hooks/hooks.json`, plus skill/subagent frontmatter (active only while that component runs). Same hooks fire inside subagents; input includes `agent_id` / `agent_type`.
- Handler `type`: `command` (stdin JSON → stdout JSON), `http` (POST same JSON), `mcp_tool` (text treated as command stdout), `prompt`, `agent`. Tool events honor `matcher` (tool name, `Edit|Write`, `mcp__.*`) and optional `if` permission-rule syntax (`Bash(git *)`). `$CLAUDE_PROJECT_DIR` is the launch root.
- Blocking: **exit 2** blocks even if JSON says `permissionDecision: "allow"`. Exit 0 + JSON `permissionDecision: "deny"` is the structured deny. Other exits are fail-open unless valid JSON supplies a decision — do not use exit 1 as a security gate. HTTP: 2xx + JSON body uses the same schema. `disableAllHooks` cannot turn off **managed** hooks unless set at the managed level; `--settings '{"disableAllHooks": true}'` wins over project/local for one run.
- `/hooks` is **read-only**. `defaultMode: "bypassPermissions"` in project/local settings is ignored (set it in user/managed settings or `--permission-mode`). Cursor can map `PreToolUse` → `preToolUse` when third-party skills are on; keep a native `.cursor/hooks.json` for Cloud Agents.

## Sources

- [Hooks reference](https://code.claude.com/docs/en/hooks.md) — accessed 2026-09-03
- [Automate actions with hooks](https://code.claude.com/docs/en/hooks-guide) — accessed 2026-09-03
- [Claude Code memory](https://code.claude.com/docs/en/memory) — accessed 2026-08-22
