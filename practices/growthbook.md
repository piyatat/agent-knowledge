---
id: growthbook
title: GrowthBook — feature flags, experiments, and an OAuth MCP server
kind: service
tags: [growthbook, flags, experiments, mcp]
status: active
updated: 2026-11-26
when_to_use: Running feature flags and experiments on GrowthBook, or letting an agent change them
---

## Summary

**GrowthBook** is an open-source feature-flag and experimentation platform, offered as GrowthBook Cloud or as a server you run. Cloud MCP is `https://mcp.growthbook.io/mcp` and signs in with OAuth. Cloud Starter is free for 3 users and 1 project, with a 1 million event allowance on the managed warehouse. Use GrowthBook when flags should be seat-priced or self-hosted and experiments need the managed warehouse. Use Unleash (`unleash`) when the SDK should evaluate a polled configuration, including on the open-source server. Use Statsig (`statsig`) or LaunchDarkly (`launchdarkly`) when the flags already live there. Use PostHog (`posthog`) when flags sit next to product analytics and error tracking.

## Notes

- **Access.** Start at `links.get`. That page stayed on the URL on 2026-11-25 and links to `https://app.growthbook.io/`. `https://app.growthbook.io/signup` returned 404 the same day. Cloud MCP does not take an API key in the client config. The consent screen offers Read only, Human-in-the-loop (the default, where risky changes wait for a person), Full access, or custom permissions. The connection uses the signed-in person’s own permissions. Self-hosted GrowthBook uses the same official server process against your API, with a personal access token or an API key on that process. A key can be set to require confirmation. Cloud users are told to prefer the hosted OAuth URL.
- **What an agent can call.** Four tools: `growthbook_list_skills`, `growthbook_read_skill`, `growthbook_api_read` (GET), and `growthbook_api_write` (POST, PUT, PATCH, or DELETE). The read and write tools do not validate the body. Skills describe draft, review, and publish workflows, and they are not an enforcement layer. `https://mcp.growthbook.io/mcp/api` exposes only the two API tools. MCP 1.x names such as `create_feature_flag` are gone.
- **Plans (pricing page, 2026-11-25).** Cloud Starter is $0, no card: up to 3 users, 1 project, unlimited flags and experiments. The managed warehouse and the event forwarder include 1 million events a month. CDN is 1 million requests and 5 GB. The get-started page states the same 1 million / 2 million split. Pro is $40 per seat per month: up to 30 users, 3 projects, 2 million managed-warehouse events then $30 per extra million, CDN 2 million requests then $10 per million, and 20 GB then $1 per GB. Sticky bucketing, safe rollouts, and scheduled flags are on Pro. Approval workflows are Enterprise. A seat is one login. The FAQ says a “CDN usage exceeded” warning appears and that warehouse overage is $0.03 per 1,000 events after the first 2 million, which matches the Pro rate and does not describe Starter’s 1 million allowance. Size Starter from the comparison table.
- **Self-hosted.** The FAQ says the free self-hosted plan has unlimited users. The open-source card lists 1 project and unlimited flags, experiments, and traffic. The self-hosted comparison does not include the managed warehouse. SSO and SCIM are Enterprise. Cloud Starter and Pro SSO are Google only.
- **Caveats.** Full access plus `growthbook_api_write` can delete, because the tool is a passthrough. Details: `growthbook-mcp-write-passthrough`.

## Sources

- [Official GrowthBook MCP server](https://docs.growthbook.io/integrations/mcp) — accessed 2026-11-25
- [Connect AI agents to GrowthBook](https://docs.growthbook.io/integrations/ai-agents) — accessed 2026-11-25
- [GrowthBook pricing](https://www.growthbook.io/pricing) — accessed 2026-11-25
- [Get started with GrowthBook](https://www.growthbook.io/get-started) — accessed 2026-11-25
- [GrowthBook](https://www.growthbook.io/) — accessed 2026-11-25
