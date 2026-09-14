---
id: claude-code-managed-mcp
title: Claude Code managed MCP — managed-mcp.json vs allowlists
tags: [claude, mcp, governance, security]
status: active
updated: 2026-09-14
when_to_use: Deploying a fixed MCP set for Claude Code, or locking allowedMcpServers so users cannot broaden it
---

## Summary

**Managed MCP** is the org control plane for which MCP servers Claude Code will load. `managed-mcp.json` deploys an exclusive server map; `allowedMcpServers` / `deniedMcpServers` filter whatever users, plugins, or that file already configured. This is not per-user `.mcp.json` (`claude-code-mcp`) and not Cursor’s enterprise MCP policy (`cursor-enterprise-mcp-policy`).

## Notes

- Patterns: empty `managed-mcp.json` `mcpServers: {}` disables MCP entirely; a populated file is a **fixed deployment** (users cannot add, including plugin servers); `allowedMcpServers` + `allowManagedMcpServersOnly: true` is an **approved catalog** (users still add matching servers); denylist-only blocks named bad servers. Claude Code has no user-browseable MCP registry — share `claude mcp add` commands or a managed plugin marketplace.
- Paths (admin-writable; **not** server-managed settings): macOS `/Library/Application Support/ClaudeCode/managed-mcp.json`, Linux/WSL `/etc/claude-code/managed-mcp.json`, Windows `C:\Program Files\ClaudeCode\managed-mcp.json`. Same JSON shape as project `.mcp.json`. Anyone on the machine can read the file — use `${VAR}`, OAuth, or `headersHelper`, never API keys in `env`.
- Exclusive control: `claude mcp list` shows only the managed map; `claude mcp add` fails with `enterprise MCP configuration is active`. Previously configured user servers **disappear silently** from `/mcp` when policy blocks them. `managed-mcp.json` also suppresses claude.ai connectors unless managed `allowAllClaudeAiMcps: true` (v2.1.149+; still filtered by allow/deny).
- Allow/deny entries match one of `serverUrl` (HTTP/SSE; `*` wildcards), `serverCommand` (stdio argv, exact after `${VAR}` expand), or `serverName` (label — **not** a security control; users can rename). Empty `allowedMcpServers: []` admits nothing; unset admits everything that passed the denylist. Deny always wins. With `serverUrl` entries present, remote servers must match URL (name-only is not enough); same for stdio vs `serverCommand`.
- `allowManagedMcpServersOnly` is unrelated to `allowManagedPermissionRulesOnly`. `--mcp-config` is still filtered; `--strict-mcp-config` only limits which config files load. Pair with `mcp-server-trust-failures`.

## Sources

- [Control MCP server access for your organization](https://code.claude.com/docs/en/managed-mcp) — accessed 2026-09-14
- [Deploy managed settings](https://code.claude.com/docs/en/managed-settings) — accessed 2026-09-14
- [Server-managed settings](https://code.claude.com/docs/en/server-managed-settings) — accessed 2026-09-14
