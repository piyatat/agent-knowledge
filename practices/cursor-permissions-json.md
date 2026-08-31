---
id: cursor-permissions-json
title: Cursor permissions.json — MCP/terminal allowlists and Auto-review steering
tags: [cursor, permissions, mcp, security]
status: active
updated: 2026-08-31
when_to_use: Committing or MDM-deploying which MCP tools and shell prefixes skip approval in local Cursor
---

## Summary

`permissions.json` is the file-backed allowlist for **local** Cursor Run Modes. It can override the in-app MCP and terminal allowlists and steer the Auto-review classifier. It is **not** a security boundary, **not** `sandbox.json` (what a sandboxed shell can reach), and **not** Cursor CLI permissions. Cloud Agents skip Run Modes.

## Notes

- Paths (JSONC, hot-reloaded): `~/.cursor/permissions.json` (all workspaces) and `<repo>/.cursor/permissions.json` (commit for the team). Arrays **concatenate**; files do not replace each other. Keys: `mcpAllowlist`, `terminalAllowlist`, `autoRun` — omit a key to leave that type under the IDE.
- Precedence: **team admin dashboard > permissions.json > IDE UI**. If a key is present and concatenates to `[]`, the effective allowlist is empty (no IDE fallback). Defining a key makes that Settings editor read-only and hides “Add to allowlist”.
- MCP entries are `server:tool` (case-insensitive). `server` is the `mcp.json` key. `*` wildcards: `github:*`, `*:list_issues`, `*:*`, `my-server:list_*`. Entries without `:` are ignored.
- Terminal entries are **case-sensitive prefixes**: `git` matches `git status` not `gitk`. `npm:install*` is base-command + args glob.
- `autoRun.allow_instructions` / `block_instructions` are natural-language hints for the Auto-review **classifier** only (no effect in Allowlist / Run Everything). Matching allow still goes through a safety check; matching block can still be approved. Requires Run Mode enabled (Auto-review / Allowlist / Run Everything). Ask Every Time is deprecated (Cursor 3.5+).
- Pair with `cursor-sandbox-json` for network/fs. Hooks (`cursor-hooks-json`) can still deny. CLI uses a separate permissions system.

## Sources

- [permissions.json reference](https://cursor.com/docs/reference/permissions) — accessed 2026-08-31
- [Run Modes](https://cursor.com/docs/agent/security/run-modes) — accessed 2026-08-31
- [Enterprise deployment patterns](https://cursor.com/docs/enterprise/deployment-patterns) — accessed 2026-08-31
