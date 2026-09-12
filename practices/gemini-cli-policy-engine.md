---
id: gemini-cli-policy-engine
title: Gemini CLI policy engine — TOML allow/deny/ask
tags: [gemini, permissions, security, governance]
status: active
updated: 2026-09-12
when_to_use: Writing ~/.gemini/policies TOML rules, or replacing tools.exclude / YOLO allowlists
---

## Summary

Gemini CLI’s **policy engine** decides `allow` / `deny` / `ask_user` for each tool call from TOML rules. Highest matching priority wins. This is the replacement for deprecated `tools.exclude`. Approval **modes** (`default`, `autoEdit`, `plan`, `yolo`) can scope a rule. Not `settings.json` layers (`gemini-cli-settings`) and not Plan-mode UX (`gemini-cli-plan-mode`).

## Notes

- Files: user `~/.gemini/policies/*.toml`; admin Linux `/etc/gemini-cli/policies`, macOS `/Library/Application Support/GeminiCli/policies`, Windows `C:\ProgramData\gemini-cli\policies` (root-owned, not group-writable). `--admin-policy` / `adminPolicyPaths` are ignored if any standard admin TOML exists. **Workspace** `.gemini/policies` is currently a no-op (issue #18186). `final_priority = tier_base + (toml_priority / 1000)` with Default=1, Extension=2, User=4, Admin=5 — admin always outranks user.
- Match on `toolName` (wildcards `*`, `mcp_server_*`), `mcpName` (prefer this over FQN; **no underscores** in server names), `argsPattern` (regex on stable JSON args), `commandPrefix` / `commandRegex` (shell sugar), `toolAnnotations`, `subagent`, `interactive`, `modes`. `deny` without `argsPattern` **hides** the tool from the model. `ask_user` becomes `deny` in headless. `allowRedirection` is per-rule; default is to re-ask on `>` / `<`.
- Modes: YOLO is CLI-only (`--approval-mode=yolo`; `--yolo` deprecated) and `security.disableYoloMode` blocks it. Persistent “allow for all future sessions” includes the current mode and more permissive ones (`plan` < `default` < `autoEdit` < `yolo`). Defaults: reads allowed; writes `ask_user`; YOLO allows all; Auto-Edit allows some writes. Treat a named subagent as `toolName` to deny spawning it.

## Sources

- [Policy engine](https://geminicli.com/docs/reference/policy-engine/) — accessed 2026-09-12
- [Gemini CLI cheatsheet](https://geminicli.com/docs/cli/cli-reference/) — accessed 2026-09-12
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-12
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-12
