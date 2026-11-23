---
id: launchdarkly
title: LaunchDarkly — feature flags and a hosted MCP server
kind: service
tags: [launchdarkly, flags, experiments, mcp]
status: active
updated: 2026-11-23
when_to_use: Changing LaunchDarkly flags or experiments from an agent, or checking a flag before a release
---

## Summary

**LaunchDarkly** hosts feature flags, experiments, agent configs, and app observability. The hosted MCP server is `https://mcp.launchdarkly.com/mcp`. It is absent on the federal and EU instances. Developer is $0. The sign-up page says that account is free forever and includes 14 days of unlimited access. The pricing page says Developer is never billed and that you upgrade when you hit a limit. Use LaunchDarkly when flags and guarded releases are the job. Use Statsig (`statsig`) or PostHog (`posthog`) when gates already live in one of those projects.

## Notes

- **Access.** Sign up at `links.get`. That page stayed on the URL on 2026-11-23. Its description says a Developer account is free forever and includes 14 days of unlimited access to every capability. The getting-started page says the trial then becomes a developer tier that is free up to 1,000 users or contexts a month and 10,000 experiment keys. Those units do not appear on the pricing page. Federal instances have no free trial. An EU trial is requested through sales. Login email is case sensitive. Hosted MCP is documented as unavailable in federal and EU environments; those accounts use the local server.
- **MCP.** OAuth access tokens last two hours and the client refreshes them. Authorize again every 90 days. Role changes apply immediately. Removing the member ends the connection. The same page also tells a headless agent to send a personal or service API token as `Authorization: Bearer`, and a later paragraph says the hosted server rejects those tokens. Treat OAuth as the path that the page describes consistently. Details: `launchdarkly-mcp-writes-and-token`.
- **What an agent sees.** The default URL exposes every toolset, and `writes=destructive` is the default, including updates and deletes. `writes=none` is read-only tools. `writes=additive` creates without overwrite or delete. `toolsets` can limit the list to `flags`, `approvals`, `agent-control`, `experiments`, `account`, `observability`, `releases`, or `guides`. Those query parameters only change the list the client loaded. The client can connect again with different values. The member’s role, or the token’s role, is the access limit. Tool results can include flag text written by other people, logs, context attributes, member emails, and server-side SDK keys.
- **URL and tool names.** The current server URL is `https://mcp.launchdarkly.com/mcp`. The earlier path `https://mcp.launchdarkly.com/mcp/launchdarkly` still connects for a limited time, on the same host, without a new sign-in. After that window LaunchDarkly retires it. Reconnecting loads new tool names. `list-flags` is now `get-flags`, and `get-agentcontrol-config` is now `get-agent-configs`. The server does not accept the earlier names.
- **Plans (pricing page, 2026-11-23).** Developer is $0 with no card: 5 service connections, 1,000 client-side MAU, 5,000 AgentControl AI runs, 5,000 session replays, 5,000 errors, 10 million trace spans, and 10 million log lines. The card says you are never billed and you upgrade at the limit. The comparison grid says Developer AI-run ingestion stops at 5,000. Developer is 1 project and 3 environments, with 14-day data retention. Foundation keeps those included amounts, then bills the rest. After the free 5 connections, each extra connection is $10 billed yearly or $12 billed monthly. Client-side MAU after the free 1,000 is $8.33 per 1,000 billed yearly or $10 per 1,000 billed monthly. The comparison grid lists that MAU rate as $10 per month per 1,000 and does not repeat the yearly figure. AI runs after 5,000 are $5 per 1,000. The Foundation card says Release Autopilot is free until 1 February 2027. The Foundation card includes flag and experiment approval requests with 1 to 5 reviewers, and says mandatory approvals need Enterprise. The feature grid marks “Workflows & approval (flag-level)” as Enterprise only. The MCP server row is included on Developer, Foundation, and Enterprise.
- **Alternatives.** Statsig (`statsig`) for gates and experiments with a console MCP. PostHog (`posthog`) when flags sit next to product analytics.

## Sources

- [LaunchDarkly hosted MCP server](https://launchdarkly.com/docs/home/getting-started/mcp-hosted) — accessed 2026-11-23
- [Get started with LaunchDarkly](https://launchdarkly.com/docs/home/getting-started) — accessed 2026-11-23
- [Joining an account](https://launchdarkly.com/docs/home/getting-started/join-account) — accessed 2026-11-23
- [LaunchDarkly pricing](https://launchdarkly.com/pricing/) — accessed 2026-11-23
- [LaunchDarkly sign-up](https://app.launchdarkly.com/signup) — accessed 2026-11-23
- [LaunchDarkly](https://launchdarkly.com/) — accessed 2026-11-23
