---
id: hookdeck-developer-lock-and-mcp-write
title: Hookdeck locked the free dashboard, or an MCP key changed production
kind: knowledge
tags: [hookdeck, webhooks, billing, mcp]
status: active
updated: 2026-11-25
when_to_use: Hookdeck stopped showing the dashboard, a paused connection dropped events, or an agent retried or edited a live connection
---

## Summary

Hookdeck (`hookdeck`) Developer keeps accepting events after 10,000 in the month and locks the dashboard until you upgrade or the next period starts. Excessive overage can stop processing entirely. A bearer key on the remote MCP server includes write tools; OAuth defaults to read-only but can still pause a connection, which holds events until resume. Queued events older than the plan’s retention are removed and not delivered.

## Notes

- **The free ceiling is not a hard reject.** The pricing FAQ says that past 10,000 events on Developer you continue receiving events and the dashboard locks. The same answer reserves the right to stop all requests and events if the overage is excessive. Additional events are a dash on Developer and metered on Team ($39) and Growth ($499). Each of those plans includes the same 10,000 events. A request that a filter drops is a discarded request (100,000 included), not an event. One inbound request can fan out to several billed events. Retries of an event are already in its price.
- **Retention and pause.** Developer keeps request, event, and attempt data for 3 days, Team for 7, Growth for 30. After that, the dashboard and API cannot read it. Hookdeck still holds a copy for the longest plan retention so an upgrade can see it. Queued events past the retention window are removed and not delivered. Read-only MCP pause holds events until the connection resumes, so a pause that outlasts retention can lose the queue. Throughput above the included 5 events per second per destination only adds delay inside the window; raising that rate is a paid-plan change.
- **MCP writes.** OAuth to `https://mcp.hookdeck.com` is read-only unless Read and write was chosen at sign-in. Pause and unpause are on the read-only set. A bearer key gets every tool that user can use, including changes, and cannot switch projects. `hookdeck_projects_use` saves the project on the sign-in, so other chats on that sign-in move too. Write tools refuse a value that is still the literal `[redacted]`. They do not redact a tenant token, a portal link, a new Outpost signing secret, `raw_body`, or an unrecognized URL such as a Slack webhook. There is no OAuth tool to publish an Outpost event. The CLI MCP is still available and is marked for deprecation.
- **What the destination sees.** Delivery is at-least-once. The provider that called the source does not receive the destination’s response. A deduplicate rule delivers the first payload in the window and does not slide the window forward.

## Sources

- [Event Gateway pricing](https://hookdeck.com/pricing) — accessed 2026-11-25
- [Billing](https://hookdeck.com/docs/platform/billing) — accessed 2026-11-25
- [Hookdeck basics](https://hookdeck.com/docs/hookdeck-basics) — accessed 2026-11-25
- [MCP and skills](https://hookdeck.com/docs/mcp) — accessed 2026-11-25
- [Remote MCP server](https://hookdeck.com/changelog/remote-mcp) — accessed 2026-11-25
