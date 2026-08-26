---
id: cursor-mcp-json
title: Cursor mcp.json — project vs global MCP config
tags: [cursor, mcp, config, auth]
status: active
updated: 2026-08-26
when_to_use: Adding or debugging .cursor/mcp.json / ~/.cursor/mcp.json (stdio, HTTP/SSE, interpolation, static OAuth)
---

## Summary

Cursor loads MCP servers from **`mcp.json`**: project `.cursor/mcp.json` (commit for the team) and global `~/.cursor/mcp.json`. Both are merged; **same server name → project wins**. The root key must be `mcpServers`. Cloud Agents do **not** read these files — they use the Cloud Agents dashboard.

## Notes

- Transports: `command` (+ `args`, `env`, optional `envFile`) for **stdio**; `url` (+ `headers`) for **HTTP or SSE**. `envFile` is stdio-only. Cursor still documents SSE alongside Streamable HTTP.
- Interpolation in `command`, `args`, `env`, `url`, `headers` (and `auth` values): `${env:NAME}`, `${userHome}`, `${workspaceFolder}`, `${workspaceFolderBasename}`, `${pathSeparator}` / `${/}`. Put secrets in env vars, not literals.
- Static OAuth on remote `url` entries: `auth.CLIENT_ID` (required), optional `CLIENT_SECRET` and `scopes`. Use when the provider gives a fixed client and does not support DCR. Register both redirects: `https://www.cursor.com/agents/mcp/oauth/callback` (web/agents) and `http://localhost:8787/callback` (desktop).
- Troubleshoot via Output → **MCP Logs**. Toggle servers in Customize without deleting config. Shell-profile env vars need a full Cursor restart.
- Enterprise: dashboard allowlists (command/URL patterns + optional per-server tool allowlists) are policy, not distribution. Team MCP for Cloud Agents is a separate dashboard config.

## Sources

- [Cursor MCP](https://cursor.com/docs/mcp) — accessed 2026-08-26
- [MCP integrations (help)](https://cursor.com/help/customization/mcp) — accessed 2026-08-26
- [Cloud Agent capabilities — MCP tools](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-26
