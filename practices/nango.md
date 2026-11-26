---
id: nango
title: Nango — hosted OAuth, tools, and scoped agent sessions
kind: service
tags: [nango, mcp, auth, integrations]
status: active
updated: 2026-11-26
when_to_use: Giving an agent a user's SaaS tools through a scoped session, without handing it provider credentials
---

## Summary

**Nango** stores OAuth tokens and API keys for external apps and runs the tool calls, syncs, and webhooks that use them. Your backend creates an agent session and hands the agent a session MCP URL plus a session token. That token can call only the connections and tools the session selected. Provider credentials stay in Nango. A separate Management MCP at `https://mcp.nango.dev/mcp` administers the Nango account. Use Nango when the app should decide whose accounts an agent may use. Use Composio (`composio`) when a hosted session should discover toolkits and open its own connect link. Use one vendor’s MCP when you only need that vendor.

## Notes

- **Access.** Sign up at `links.get`. On 2026-11-26 that page stayed on the URL. Session creation uses an environment API key with the `environment:agent_sessions:write` scope, from your backend. The response includes `mcp_url` and a `session_token`. Treat the token as a secret. The default lifetime is 15 days. The allowed range is 60 seconds to 15 days. A session cannot be extended; create another one. Deleting the session revokes the token. Later MCP calls return 401. A call already in progress can finish. Management MCP uses browser OAuth with Client ID Metadata Documents and does not support Dynamic Client Registration. An environment API key is the alternative for a client that cannot do that OAuth. That key is bound to one environment, so the tools do not take an environment argument. Keep the environment key on the backend.
- **What a session can do.** The session resolves one connection per integration. Tags that match two connections for the same integration fail session creation with `ambiguous_connections` until you narrow the tags or pin one connection. A missing connection still creates the session. Calls to that integration fail until the user connects, and `nango_create_connection` is what offers the connect link. `tools/list` returns meta tools and pinned tools, 50 per page. Unpinned tools are found with `nango_tool_search` and run with `nango_execute`. The quickstart response leaves `nango_proxy` off. Tool names and schemas can change during the session. The older Connection MCP, which sent an environment key to the agent, is deprecated.
- **Plans (pricing page, 2026-11-26).** Free is $0 with hard caps that reset monthly: 10 connections, 10 hours of function compute, and 10 GB of data transfer. Pay-as-you-go is $50 a month and includes $50 of credits. Rates are $0.29 per connection-month (prorated), $0.72 per compute hour, and $0.50 per GB. Enterprise is a contract and is the plan that includes self-hosting. A Growth add-on on pay-as-you-go is $450 a month for RBAC, OpenTelemetry export, and Connect UI customization. There is no EU cloud. Bring-your-own-cloud in a chosen region is Enterprise. A connection is one external API key or access token. Compute rounds each run up to the next second, including tool calls, syncs, and actions. Only egress is metered, and custom log lines count. Ingress is free.
- **Caveats.** A free account stops at the cap, and a short tool call still burns a full second. A timeout does not prove the call stopped. Details: `nango-session-cap-and-timeout`.

## Sources

- [Nango pricing](https://nango.dev/pricing/) — accessed 2026-11-26
- [Nango limits](https://nango.dev/docs/guides/platform/limits) — accessed 2026-11-26
- [Agent sessions](https://nango.dev/docs/guides/agent-sessions) — accessed 2026-11-26
- [Tenant](https://nango.dev/docs/guides/agent-sessions/tenant) — accessed 2026-11-26
- [Toolsets and tools](https://nango.dev/docs/guides/agent-sessions/toolsets) — accessed 2026-11-26
- [Management MCP](https://docs.nango.dev/docs/reference/backend/management-mcp) — accessed 2026-11-26
- [Migrate from Connection MCP](https://nango.dev/docs/guides/platform/migrations/migrate-from-connection-mcp) — accessed 2026-11-26
- [Nango changelog](https://nango.dev/docs/updates/changelog) — accessed 2026-11-26
- [Sign up for Nango](https://app.nango.dev/signup) — accessed 2026-11-26
- [Nango](https://nango.dev/) — accessed 2026-11-26
