---
id: cursor-mcp-json
title: Cursor mcp.json — project vs global MCP config
tags: [cursor, mcp, config, auth]
status: active
updated: 2026-10-11
when_to_use: Adding or debugging .cursor/mcp.json / ~/.cursor/mcp.json (stdio, HTTP/SSE, interpolation, static OAuth)
---

## Summary

Cursor loads MCP servers from **`mcp.json`**: project `.cursor/mcp.json` (commit for the team) and global `~/.cursor/mcp.json`. Both are merged; **same server name → project wins**. The root key must be `mcpServers`. Cloud Agents do **not** read these files — they use the Cloud Agents dashboard. Team MCP can be linked into the Default team marketplace without breaking Cloud Agent access.

## Notes

- Transports: `command` (+ `args`, `env`, optional `envFile`) for **stdio**; `url` (+ `headers`) for **HTTP or SSE**. Docs now mark `type: "stdio"` as required on stdio entries. `envFile` is stdio-only. Cursor still documents SSE alongside Streamable HTTP. Protocol extras Cursor lists: Tools, Prompts, Resources, Roots, Elicitation, MCP Apps (`cursor-mcp-apps`).
- Interpolation in `command`, `args`, `env`, `url`, `headers` (and `auth` values): `${env:NAME}`, `${userHome}`, `${workspaceFolder}`, `${workspaceFolderBasename}`, `${pathSeparator}` / `${/}`. Put secrets in env vars, not literals.
- Static OAuth on remote `url` entries: `auth.CLIENT_ID` (required), optional `CLIENT_SECRET` and `scopes`. Use when the provider gives a fixed client and does not support DCR. Register both redirects: `https://www.cursor.com/agents/mcp/oauth/callback` (web/agents) and `http://localhost:8787/callback` (desktop). IDE 3.24: servers that reject localhost redirects can finish sign-in through a **Cursor-hosted callback**; sign-in also completes when another window holds port 8787.
- Team distribution: Dashboard → Plugins & MCPs. **Add to Team Marketplace** links an existing Team MCP into the Default marketplace so IDE/CLI/Agents Window users can install it from Customize; it does not auto-enable for everyone. Enterprise allowlists (command/URL patterns + optional per-server tool allowlists) are policy, not distribution (`cursor-enterprise-mcp-policy`).
- Troubleshoot via Output → **MCP Logs**. Toggle servers in Customize without deleting config. Shell-profile env vars need a full Cursor restart. MCP follows Run Modes: Auto-review allowlisted tools run immediately (`cursor-run-modes`).

## Sources

- [Cursor MCP](https://cursor.com/docs/mcp) — accessed 2026-10-11
- [Cursor IDE release notes](https://cursor.com/docs/release-notes/ide) — accessed 2026-10-11
- [MCP integrations (help)](https://cursor.com/help/customization/mcp) — accessed 2026-08-26
- [Cloud Agent capabilities — MCP tools](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-26
