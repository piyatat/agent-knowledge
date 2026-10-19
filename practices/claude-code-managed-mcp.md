---
id: claude-code-managed-mcp
title: Claude Code managed MCP — managed-mcp.json vs managedMcpServers
tags: [claude, mcp, governance, security]
status: active
updated: 2026-10-19
when_to_use: Deploying a fixed MCP set for Claude Code, providing HTTP servers via managed settings, or locking allowedMcpServers
---

## Summary

**Managed MCP** is the org control plane for which MCP servers Claude Code will load. `managed-mcp.json` is an **exclusive** server map; **`managedMcpServers`** (v2.1.259+) **adds** remote HTTP/SSE servers beside what users configure; `allowedMcpServers` / `deniedMcpServers` filter the rest. Not per-user `.mcp.json` (`claude-code-mcp`) and not Cursor’s enterprise MCP policy (`cursor-enterprise-mcp-policy`).

## Notes

- Patterns: empty `managed-mcp.json` `mcpServers: {}` disables MCP (also unset `managedMcpServers`); a populated file is a **fixed deployment** (`claude mcp add` fails); `managedMcpServers` is a **provided catalog** (users keep their own); `allowedMcpServers` + `allowManagedMcpServersOnly: true` is an **approved catalog** users still add into. Claude Code has no user-browseable MCP registry.
- `managed-mcp.json` paths (admin-writable; **not** server-managed settings): macOS `/Library/Application Support/ClaudeCode/managed-mcp.json`, Linux/WSL `/etc/claude-code/managed-mcp.json`, Windows `C:\Program Files\ClaudeCode\managed-mcp.json`. Same JSON shape as project `.mcp.json`. Anyone on the machine can read it — use `${VAR}`, OAuth, or `headersHelper`, never API keys in `env`.
- **`managedMcpServers`**: object keyed by server name; each entry is HTTP/SSE (https only; no `command`/`env`/`${VAR}`). Deliver via server-managed settings, gateway policy, MDM, or `managed-settings.json`. Users cannot `claude mcp remove` them; `/mcp` lists them under Managed MCPs. Server-managed copies are **withheld until confirmed**; a failed refresh continues **without** provided servers. Do not paste Claude **Desktop**’s array-shaped setting.
- Allow/deny: `serverUrl` / `serverCommand` / `serverName` (`serverName` is **not** a security control). Deny always wins. **v2.1.259+:** `allowedMcpServers` governs **user-added** servers; org `managed-mcp.json` entries **without** `${VAR}` skip the allowlist (they used to be filtered). Use `deniedMcpServers` to keep a managed server off after upgrade. `managedMcpServers` entries also skip the allowlist.
- `allowClaudeInChromeWithManagedMcp` (v2.1.282+, device-local managed settings only) restores Claude in Chrome beside an exclusive map. Pair with `mcp-server-trust-failures`.

## Sources

- [Control MCP server access for your organization](https://code.claude.com/docs/en/managed-mcp) — accessed 2026-10-19
- [Deploy managed settings](https://code.claude.com/docs/en/managed-settings) — accessed 2026-10-19
- [Server-managed settings](https://code.claude.com/docs/en/server-managed-settings) — accessed 2026-10-19
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-19
