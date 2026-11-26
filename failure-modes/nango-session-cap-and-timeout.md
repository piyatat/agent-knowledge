---
id: nango-session-cap-and-timeout
title: A Nango session hit the connection cap, or a timed-out tool may have run
kind: knowledge
tags: [nango, mcp, billing, timeouts]
status: active
updated: 2026-11-26
when_to_use: A Nango session failed to create, a connection was refused, or a tool timeout may have run the call twice
---

## Summary

Nango (`nango`) hard-caps the free plan, and a tool that looks failed can still have run. The session token is not an environment API key. Sending the environment key to the agent is the deprecated Connection MCP path.

## Notes

- **Caps.** Free is 10 connections, 10 compute hours, and 10 GB of egress each month, then the account stops until the reset or an upgrade. Pay-as-you-go does not use those caps. It meters $0.29 per connection-month, $0.72 per compute hour, and $0.50 per GB after the $50 of credits included in the $50 subscription. Each function run rounds up to one second, so a 300 ms tool call spends one second. Ten free hours are 36,000 of those seconds. Custom log lines count as egress. Ingress does not. The October 2026 changelog says agent sessions return a clear error when creating a connection fails because the account is at its connection limit. API rate limits are separate: 200 requests per minute on Free, 1,000 on pay-as-you-go, and 2,000 with the Growth add-on. The response headers say when to retry.
- **Timeouts that are not cancellations.** A synchronous HTTP-triggered function tool is limited to 2 minutes. An upstream MCP tool inside a session has 60 seconds, and the error tells the agent the call may still have run. Management MCP requests can time out at 90 seconds without stopping the operation. Retrying either path can duplicate the side effect. Function tool output is capped at 2 MB. An MCP-server tool result inside a session is capped at 5 MB. A 403 on one tool fails that tool. A 401, or a 403 before any tool runs, means the connection needs reconnecting. Webhooks Nango sends to your app wait 20 seconds and retry twice.
- **Session shape.** Creation fails with `ambiguous_connections` when tags match two connections on one integration and you did not pin one. A pin that is outside that match fails with `pinned_connection_not_matched`. The session token lasts at most 15 days and cannot be extended. `tools/list` pages at 50 tools, and schemas can change before the next call. Logs are kept 15 days. A sync record’s payload is pruned after 30 days without an update. The id and hash remain. If that sync has not run for 60 days, the records are deleted. The Management MCP can change integrations and deployments for the signed-in user. That is a different server from the session URL.

## Sources

- [Nango pricing](https://nango.dev/pricing/) — accessed 2026-11-26
- [Nango limits](https://nango.dev/docs/guides/platform/limits) — accessed 2026-11-26
- [Agent sessions](https://nango.dev/docs/guides/agent-sessions) — accessed 2026-11-26
- [Tenant](https://nango.dev/docs/guides/agent-sessions/tenant) — accessed 2026-11-26
- [Toolsets and tools](https://nango.dev/docs/guides/agent-sessions/toolsets) — accessed 2026-11-26
- [Nango changelog](https://nango.dev/docs/updates/changelog) — accessed 2026-11-26
- [Migrate from Connection MCP](https://nango.dev/docs/guides/platform/migrations/migrate-from-connection-mcp) — accessed 2026-11-26
