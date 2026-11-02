---
id: cursor-cloud-mcp-http-vs-stdio
title: Cursor Cloud MCP — prefer HTTP over stdio
tags: [cursor, mcp, security, transport]
status: active
updated: 2026-11-02
when_to_use: Attaching MCP servers to Cursor Cloud Agents (team or personal) and choosing HTTP vs stdio
---

## Summary

On Cursor Cloud Agents, **HTTP MCP is proxied**: the VM never sees refresh tokens, headers, or client secrets. **stdio MCP runs inside the VM**, so the agent can read the server’s env and config — same blast radius as IDE stdio. Prefer HTTP. SSE and `mcp-remote` are unsupported.

## Notes

- Configure personal servers from the MCP dropdown on cursor.com/agents; team admins set shared servers under Dashboard → **Plugins & MCPs**. Shared Team MCP can be linked into the default team marketplace for IDE/CLI, but Cloud Agents keep using the dashboard config.
- OAuth is **per-user**, including for team-shared HTTP servers. Encrypted-at-rest fields (`env`, HTTP `headers`, `CLIENT_SECRET`) are redacted after save and cannot be read back.
- HTTP (recommended): tool calls go through Cursor’s backend; server config stays off the VM. Stdio: depends on the environment image/PATH; Cursor cannot prove it works until a run starts — fix `install`/`start` if the binary is missing.
- Built-in **Cursor Cloud MCP** (diagnostics) is a separate server and can be disabled by team admins; do not confuse it with Team MCP you attach.
- Connecting a server still grants **every tool** on that server to the cloud agent/automation unless Plugins & MCPs **tool restrictions** apply — same least-privilege rule as automations. **Team list enforcement** (`cursor-enterprise-mcp-policy`): when on, Cloud Agents connect **only** to plugins/MCP on the Team list and honor per-server tool restrictions; when off, those restrictions no longer block other servers.
- **Insufficient-scope / extra permission:** if an HTTP server refuses a tool because the current sign-in lacks a named permission, the run shows a **sign-in card** (tool + permission) instead of failing. Grants persist across later sign-ins; if re-auth cannot grant it, the agent says an admin must approve. **Do not** expect that card on **stdio** servers (no Cursor sign-in) — Cloud Agents skip those cards instead of waiting for Skip/timeout. They also skip sign-in for a server that is still loading.
- **Rate limits** (week of 2026-10-05): when an MCP server rate-limits a tool, the agent **pauses that tool** for as long as the server asks, **keeps using the server’s other tools**, and is told when it can retry (`rate-limit-backoff-tools`). Repeated **Slack** rate limits cap the wait at about a **minute**. Gmail waits and retries on Google’s cooldown; Calendar missing-permission errors tell you to reconnect; Sheets retries another connected account when the current one cannot open the spreadsheet.

## Sources

- [Cloud Agent capabilities — MCP tools](https://cursor.com/docs/cloud-agent/capabilities) — accessed 2026-11-02
- [Cloud Agents overview — MCP support](https://cursor.com/docs/cloud-agent) — accessed 2026-08-23
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-08-23
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-11-02
