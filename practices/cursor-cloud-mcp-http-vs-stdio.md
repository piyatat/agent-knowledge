---
id: cursor-cloud-mcp-http-vs-stdio
title: Cursor Cloud MCP — prefer HTTP over stdio
tags: [cursor, mcp, security, transport]
status: active
updated: 2026-08-23
when_to_use: Attaching MCP servers to Cursor Cloud Agents (team or personal) and choosing HTTP vs stdio
---

## Summary

On Cursor Cloud Agents, **HTTP MCP is proxied**: the VM never sees refresh tokens, headers, or client secrets. **stdio MCP runs inside the VM**, so the agent can read the server’s env and config — same blast radius as IDE stdio. Prefer HTTP. SSE and `mcp-remote` are unsupported.

## Notes

- Configure personal servers from the MCP dropdown on cursor.com/agents; team admins set shared servers under Dashboard → Integrations & MCP. Shared Team MCP can be linked into the default team marketplace for IDE/CLI, but Cloud Agents keep using the dashboard config.
- OAuth is **per-user**, including for team-shared HTTP servers. Encrypted-at-rest fields (`env`, HTTP `headers`, `CLIENT_SECRET`) are redacted after save and cannot be read back.
- HTTP (recommended): tool calls go through Cursor’s backend; server config stays off the VM. Stdio: depends on the environment image/PATH; Cursor cannot prove it works until a run starts — fix `install`/`start` if the binary is missing.
- Built-in **Cursor Cloud MCP** (diagnostics) is a separate server and can be disabled by team admins; do not confuse it with Team MCP you attach.
- Connecting a server still grants **every tool** on that server to the cloud agent/automation — same least-privilege rule as automations.

## Sources

- [Cloud Agent capabilities — MCP tools](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-08-23
- [Cloud Agents overview — MCP support](https://cursor.com/docs/cloud-agent) — accessed 2026-08-23
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-08-23
