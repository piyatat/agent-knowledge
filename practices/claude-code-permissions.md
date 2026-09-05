---
id: claude-code-permissions
title: Claude Code permissions — allow / ask / deny vs modes
tags: [claude, permissions, safety, hooks]
status: active
updated: 2026-09-05
when_to_use: Writing Claude Code permission rules or choosing defaultMode vs a PreToolUse hook
---

## Summary

Claude Code **permissions** are host-enforced allow / ask / deny rules plus a **mode**. `CLAUDE.md` cannot widen a deny. This is the Claude-specific surface of `permission-modes-allow-ask-deny`. Pair with OS sandboxing (`claude-code-sandboxing`) — a mode is not a kernel boundary.

## Notes

- Evaluate **deny → ask → allow**; first match wins. Specificity does not invert that. Bare `Bash` as deny **hides** the tool; `Bash(rm *)` leaves Bash visible. `Bash(aws *)` beats `Bash(aws s3 ls)` — a deny has no allowlist exceptions.
- Modes: `default`/`manual` (prompt first use), `acceptEdits`, `plan` (read / read-only shell), `auto` (classifier), `dontAsk` (deny unless pre-allowed; still denies `AskUserQuestion` and MCP `requiresUserInteraction`), `bypassPermissions` (containers/VMs only; still skips `.git` / `.claude` write prompts). Disable `auto` / `bypassPermissions` from managed settings.
- Syntax: `Tool` or `Tool(specifier)`. Bash `*` is a wildcard including spaces; put it after the subcommand (`Bash(git log *)`). Deny/ask can match a top-level param (`Agent(isolation:worktree)`). MCP: `mcp__server`, `mcp__server__*`, `mcp__server__tool`. Allow globs need a literal `mcp__<server>__` prefix.
- Permanent Bash/WebFetch “don’t ask again” writes `.claude/settings.local.json` at the **repo root** (worktree-aware since v2.1.211). File-edit approvals are session-scoped. `/permissions` applies on the next tool call in the same turn.
- Enforcement is the host + optional PreToolUse (`claude-code-hooks`). Connector tools set to `ask` in claude.ai still prompt in `auto` / `bypassPermissions`.

## Sources

- [Configure permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-09-05
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-05
