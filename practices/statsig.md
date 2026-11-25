---
id: statsig
title: Statsig — feature gates, experiments, and a console MCP server
kind: service
tags: [statsig, flags, experiments, mcp]
status: active
updated: 2026-11-25
when_to_use: Checking or changing Statsig feature gates and experiments, or letting an agent use the console
---

## Summary

**Statsig** is a hosted product platform for feature gates, dynamic configs, experiments, and product analytics. A remote MCP server at `https://api.statsig.com/v3/mcp` lets an agent read and change one project. Version 3 ships 18 default tools and discovers the rest of the Console API on demand. Use Statsig when gates and experiments are the job. Use PostHog (`posthog`) when flags, product analytics, and errors should live in one project. Use GrowthBook (`growthbook`) when the same flags should be seat-priced or self-hosted.

## Notes

- **Access.** Sign up at `links.get`. New accounts start on the Developer tier with no card. OAuth is the documented client path and only works with Personal Console API Keys, which an org owner has to allow for that role. A client without OAuth can send a Console API key in the `statsig-api-key` header. A read-only key can use the read tools. Writes need a key that can write. Enterprise can connect Claude as the signed-in person, either with a Claude-issued identity or with Okta OIDC Cross App Access. Both modes need the project’s Tenant ID.
- **What an agent can do.** `get_context`, `search`, and `fetch` orient the session. Read tools cover gates, experiments, dynamic configs, metrics, audit logs, and Logs Explorer. Create and update tools cover gates, experiments, and dynamic configs. `discover_tools` plus `api_read`, `api_write`, and `api_destructive` reach layers, segments, Parameter Stores, reviews, and partial updates. Clients that opt into expanded exposure also get typed tools for some of those. Legacy V1 connections still work.
- **Permissions.** Project Settings → Roles sets a project MCP ceiling of no access, read only, or read and write. A role can only narrow that ceiling. Read-and-write MCP access does not override entity permissions or review rules. Update tools and `api_destructive` require a `confirmation`. Approving a review does not commit the change. `api_destructive` includes sensitive updates and review actions, not only deletion.
- **Plans (pricing page, 2026-11-22).** Developer is free: 2 million metered events a calendar month, unlimited flag and config checks, 50,000 session replays, one year of analytics retention, and unlimited seats. Pro is $150 a month: 5 million events, then $0.05 per extra 1,000, 100,000 session replays, unlimited analytics retention, change reviews, and API controls. The $150 is charged at the start of the period; overages land on the next bill. Enterprise is custom and adds warehouse-native deployment, SSO, and a HIPAA BAA. Flag and config checks at 0% or 100% are not metered unless Metric Lifts are on and the gate is a partial rollout.
- **Alternatives.** LaunchDarkly (`launchdarkly`) for flags, experiments, and a hosted MCP on another vendor. PostHog when the same project should also hold analytics and error tracking.
- **Caveats.** Passing the free-event cap stops Metric Lift math, not gate targeting, and a confirmation is a real write. Details: `statsig-mcp-confirm-and-meter`.

## Sources

- [Statsig MCP overview](https://docs.statsig.com/integrations/mcp/overview) — accessed 2026-11-22
- [Statsig MCP manual setup](https://docs.statsig.com/integrations/mcp/manual-setup) — accessed 2026-11-22
- [Statsig MCP V3 tool reference](https://docs.statsig.com/integrations/mcp/tool-reference) — accessed 2026-11-22
- [Self-serve RBAC for MCP](https://www.statsig.com/updates/update/self-serve-rbac-mcp) — accessed 2026-11-22
- [Statsig pricing](https://www.statsig.com/pricing) — accessed 2026-11-22
- [Statsig sign-up](https://console.statsig.com/sign_up) — accessed 2026-11-22
