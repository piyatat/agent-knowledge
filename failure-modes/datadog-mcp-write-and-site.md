---
id: datadog-mcp-write-and-site
title: Datadog MCP hides writes, or the client uses the wrong site
kind: knowledge
tags: [datadog, mcp, auth, observability]
status: active
updated: 2026-11-22
when_to_use: A Datadog MCP tool is missing, a write is hidden, or the client is pointed at the wrong site
---

## Summary

Datadog MCP (`datadog`) is off for an entire site when the org lives on GovCloud, and it is a different host for every other site. Write tools stay hidden until an admin turns on organization MCP Write Access, even for a Standard user who already has MCP Write.

## Notes

- **Site.** Build the URL as `https://mcp.<site>/v1/mcp`. US1 is `https://mcp.datadoghq.com/v1/mcp`; EU1 is `https://mcp.datadoghq.eu/v1/mcp`. US3, US5, AP1, AP2, and UK1 follow the same pattern on their site host. `ddog-gov.com` and `us2.ddog-gov.com` have no MCP server. A client logged into one site will not see another site’s data.
- **Writes.** MCP Access defaults to on. MCP Write Access defaults to off, and while it is off the server omits write tools for every role. After it is on, the user still needs the MCP Write permission and the resource permission, such as Monitors Write. An IP allowlist, when enabled, blocks MCP from addresses outside the list. OAuth application scopes can remove an action for one client. A connection that uses an API key and application key, or a personal or service access token, ignores those OAuth scopes and has whatever that key can do. Scope a key, or a service account, before using key auth.
- **Missing tools.** Omitting `toolsets` leaves only `core`. `toolsets=all` skips Preview toolsets and the `chat` toolset. Name `remote-actions` explicitly if the agent should read files or run read-only commands on a host; that set is Preview and is not part of `all`. A burst over 50 tool calls in 10 seconds hits the fair-use limit. Responses are truncated; tools tell the agent how to ask for more, and many accept `max_tokens`.
- **What the server stores.** Tool calls land in Audit Trail with the tool name, arguments, user, and client. Usage telemetry, including prompts that led to a tool, is kept for 120 days. The server receives the tool name and arguments, not the model’s reasoning.

## Sources

- [Datadog MCP Server](https://docs.datadoghq.com/mcp_server/) — accessed 2026-11-22
- [Set up the Datadog MCP Server](https://docs.datadoghq.com/mcp_server/setup/) — accessed 2026-11-22
- [Access control for MCP](https://docs.datadoghq.com/account_management/rbac/mcp_access/) — accessed 2026-11-22
