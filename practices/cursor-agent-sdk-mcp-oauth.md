---
id: cursor-agent-sdk-mcp-oauth
title: Agent SDK host MCP OAuth — mcp oauth vs cursorAccount
tags: [cursor, sdk, mcp, auth]
status: active
updated: 2026-11-12
when_to_use: Authorizing a private MCP server for an Agent SDK bot with agent-sdk mcp oauth, or choosing host OAuth vs dashboard cursorAccount
---

## Summary

**Host MCP OAuth** lets the machine running an Agent SDK agent authorize a remote MCP server in the browser so tokens never sit in git. Declare `defineConnection({ url, oauth: true })` under `bot/mcp-connections/` (model-visible) or `bot/host-connections/` (model never sees it). Not Cursor dashboard MCP (`cursorAccount: true`), not per-session `auth`, and not `mcp.json` in the IDE (`cursor-mcp-json`).

## Notes

- Filename is the connection name. `agent-sdk mcp oauth inventory` opens the browser. Change the server URL → run `mcp oauth` again. `advertiseTools: true` exposes the server’s tools to the model; `tools: ["lookup_stock"]` on a host-connection limits what `ctx.host.mcp.callTool("inventory", …)` may call. Wrap privileged servers as one narrow `defineTool` so the model never sees the raw MCP surface.
- First use without a prior `mcp oauth` pauses the turn and shows **Connect** in the playground. The call retries in the **running** process after the browser flow. A turn waits only when a person can click Connect: playground / HTTP chat, or Slack when `slackChannel({ toolApprovals: true })` (or `buildToolApprovalEvents` in `events`). Wait ends after **10 minutes** or if the turn is interrupted.
- Schedules, reminders, webhooks, evals, and Slack without Connect **do not wait**. A required connection fails with `Reconnect <name>`; an `optional` one is skipped (even in the playground). Authorize those ahead of time with `mcp oauth`.
- Hosted agents: tokens from `mcp oauth` stay on the machine that authorized them. For Cursor hosting, add the server under dashboard MCP, reach it with `defineConnection({ cursorAccount: true, servers: […] })`, and connect it from Deployed Agents. Anyone who can use the agent can use that connection — **narrow `servers`**. Host OAuth cannot share a connection with per-session `auth` (each caller’s own downstream identity).
- Credential homes: `cursorAccount: true` → Cursor backend (you connected the server in the dashboard); `url` + `oauth: true` → the serve host; `url` + `headers` → your secrets (API key / bearer). Follow the `bdk-mcp-auth` skill. Pair with `mcp-oauth-scopes` for CIMD/PKCE on the server side.

## Sources

- [Connect a private MCP server with OAuth](https://cursor.com/docs/agent-sdk/guides/mcp-oauth) — accessed 2026-11-12
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-12
- [Slack Agents](https://cursor.com/docs/agent-sdk/guides/slack) — accessed 2026-11-12
