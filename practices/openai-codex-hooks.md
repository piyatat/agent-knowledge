---
id: openai-codex-hooks
title: Codex hooks — hooks.json lifecycle gates
tags: [openai, hooks, permissions, safety]
status: active
updated: 2026-09-07
when_to_use: Authoring Codex hooks.json or inline [hooks], or choosing managed vs project hooks
---

## Summary

Codex **hooks** run command scripts at named lifecycle events (CLI, desktop, IDE). Matching hooks from every active layer **all run**; they do not replace each other. This is not Claude `.claude/settings.json` hooks (`claude-code-hooks`) and not Cursor `hooks.json` (`cursor-hooks-json`). Must-never policy belongs here, not in `AGENTS.md`.

## Notes

- Discover next to config layers: `~/.codex/hooks.json` / `config.toml`, project `.codex/hooks.json` / `config.toml`, plugin `hooks/hooks.json` (or a `hooks` entry in `.codex-plugin/plugin.json`). Prefer one representation per layer — both merge and warn. Project hooks load only when the project `.codex/` layer is trusted. Enable with `features.hooks` (`codex_hooks` is a deprecated alias).
- During a turn: `PreToolUse`, `PermissionRequest`, `PostToolUse`, `PreCompact`, `PostCompact`, `UserPromptSubmit`, `SubagentStop`, `Stop`. Session: `SessionStart` / `SubagentStart`. `SessionEnd` is main-thread only. Matcher is a regex (omit / `*` / `""` = all). `UserPromptSubmit` and `Stop` ignore matcher. Only `type: "command"` runs; `prompt` / `agent` are parsed and skipped. Timeout default **600s** (`SessionEnd` 1s, max 3s).
- Non-managed hooks must be **trusted** (`/hooks` hashes the definition). Changed hooks skip until re-trusted. Managed hooks from `requirements.toml` cannot be disabled in the user browser. CI: `--dangerously-bypass-hook-trust`. `allow_managed_hooks_only = true` drops user/project/plugin hooks.
- Block a tool: stdout JSON `permissionDecision: "deny"` (or legacy `decision: "block"`) or **exit 2** + stderr. Multiple denies: any deny wins. `PostToolUse` block cannot undo the side effect. Concurrent matching commands cannot stop each other from starting.

## Sources

- [Hooks (Codex)](https://developers.openai.com/codex/hooks) — accessed 2026-09-07
- [Managed configuration (Codex)](https://developers.openai.com/codex/enterprise/managed-configuration) — accessed 2026-09-07
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-07
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-09-07
