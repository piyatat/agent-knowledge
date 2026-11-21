---
id: gemini-cli-policy-engine
title: Gemini CLI policy engine — TOML allow/deny/ask
tags: [gemini, permissions, security, governance]
status: active
updated: 2026-11-21
when_to_use: Writing ~/.gemini/policies TOML rules, or replacing tools.exclude / YOLO allowlists
---

## Summary

Gemini CLI’s **policy engine** decides `allow` / `deny` / `ask_user` for each tool call from TOML rules. Highest matching priority wins. This is the replacement for deprecated `tools.exclude`. Approval **modes** (`default`, `autoEdit`, `plan`, `yolo`) can scope a rule. Not `settings.json` layers (`gemini-cli-settings`) and not Plan-mode UX (`gemini-cli-plan-mode`).

## Notes

- Files: user `~/.gemini/policies/*.toml`; admin Linux `/etc/gemini-cli/policies`, macOS `/Library/Application Support/GeminiCli/policies`, Windows `C:\ProgramData\gemini-cli\policies` (root-owned, not group-writable). `--admin-policy` / `adminPolicyPaths` are ignored if any standard admin TOML exists. **Workspace** `.gemini/policies` is currently a no-op (issue #18186). `final_priority = tier_base + (toml_priority / 1000)` with Default=1, Extension=2, User=4, Admin=5 — admin always outranks user.
- Match on `toolName` (wildcards `*`, `mcp_server_*`), `mcpName` (prefer this over FQN; **no underscores** in server names), `argsPattern` (regex on stable JSON args), `commandPrefix` / `commandRegex` (shell sugar; **not both in one rule**), `toolAnnotations`, `subagent`, `interactive`, `modes`. `deny` without `argsPattern` **hides** the tool from the model. `ask_user` becomes `deny` in headless. `allowRedirection` is per-rule; default is to re-ask on `>` / `<`.
- **v0.70.0** (2026-11-19) anchors `commandPrefix` and `commandRegex` to the top-level `command` argument. Serialized tool args put a `\x00` delimiter on each top-level key and omit it inside nested objects and arrays, and the generated pattern now requires that delimiter. `commandRegex` is wrapped in `(?:...)`, so an alternation such as `ls|pwd` stays inside the command value. A `"command"` string nested in another argument no longer matches. The same release evaluates policy regexes with `re2js` (linear time). Read-only shell commands that still contain unexpanded globs, braces, parameters, or substitutions stay `ask_user` instead of being upgraded to `allow`. Explicit allow rules are unchanged. Details: `gemini-cli-shell-policy-scope`.
- The live policy page’s tier **table** is Default 1, Extension 2, Workspace 3, User 4, Admin 5, and `final_priority = tier_base + (toml_priority / 1000)`. Its worked examples and the “Tier 4” admin wording still use the older bases (workspace 2, user 3, admin 4). Workspace `.gemini/policies` remains a no-op (issue #18186).
- Modes: YOLO is CLI-only (`--approval-mode=yolo`; `--yolo` deprecated) and `security.disableYoloMode` blocks it. Persistent “allow for all future sessions” includes the current mode and more permissive ones (`plan` < `default` < `autoEdit` < `yolo`). Defaults: reads allowed; writes `ask_user`; YOLO allows all; Auto-Edit allows some writes. Treat a named subagent as `toolName` to deny spawning it.

## Sources

- [Policy engine](https://geminicli.com/docs/reference/policy-engine/) — accessed 2026-11-21
- [Gemini CLI v0.70.0 changelog](https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md) — accessed 2026-11-21
- [gemini-cli v0.70.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0) — accessed 2026-11-21
- [Anchor commandPrefix to the top-level command](https://github.com/google-gemini/gemini-cli/pull/30355) — accessed 2026-11-21
- [Keep ASK_USER for unresolved shell expansion](https://github.com/google-gemini/gemini-cli/pull/30338) — accessed 2026-11-21
- [Gemini CLI cheatsheet](https://geminicli.com/docs/cli/cli-reference/) — accessed 2026-09-12
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-12
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-12
