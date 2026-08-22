---
id: permission-modes-allow-ask-deny
title: Permission modes and allow / ask / deny rules
tags: [permissions, hitl, hooks, safety]
status: active
updated: 2026-08-22
when_to_use: Configuring a coding-agent host so tool approvals are enforced in the runtime, not only in AGENTS.md
---

## Summary

Host **permission rules** (allow / ask / deny) plus a **mode** (prompt, plan, auto-accept edits, CI dont-ask, container bypass) are the enforcement layer. Memory files only steer intent. Evaluate **deny → ask → allow**; first match wins — a later, more specific allow never overrides a deny.

## Notes

- Claude Code’s documented modes (2026): `default`/`manual` (prompt on first use), `acceptEdits` (auto file + common fs cmds in the workspace), `plan` (read / read-only shell, no source edits), `auto` (classifier-backed auto-approve), `dontAsk` (deny unless pre-allowed; still denies `AskUserQuestion` and MCP `requiresUserInteraction`), `bypassPermissions` (skip prompts except a small hard-stop set — **containers/VMs only**).
- Rules live in settings (`Tool` or `Tool(specifier)`). Bare `Bash` as deny **hides the tool from the model**; `Bash(rm *)` leaves Bash visible but blocks matches. Deny has no allowlist exceptions (`Bash(aws *)` beats `Bash(aws s3 ls)`).
- Enforcement is the host, not the model. `CLAUDE.md` / prompts cannot widen a deny. Use PreToolUse (or equivalent) hooks when a rule list is not enough. Managed settings can disable `auto` / `bypassPermissions`.
- Permanent “don’t ask again” for Bash/WebFetch typically writes `.claude/settings.local.json` at the repo root (worktree-aware as of v2.1.211). File-edit approvals are often session-scoped only.
- Map the same shape onto other harnesses: OpenAI `needs_approval` / MCP `require_approval`, Cursor tool gates. Pair with sandbox + HITL — a mode is not a security boundary for MCP servers or for code the agent executes.

## Sources

- [Claude Code permissions](https://code.claude.com/docs/en/permissions) — accessed 2026-08-22
- [Claude Code hooks guide](https://code.claude.com/docs/en/hooks-guide) — accessed 2026-08-22
- [Guardrails and human review (OpenAI)](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) — accessed 2026-08-22
