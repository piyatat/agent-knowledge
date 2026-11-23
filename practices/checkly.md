---
id: checkly
title: Checkly — synthetic and uptime monitoring, with an HTTP MCP server
kind: service
tags: [checkly, monitoring, synthetics, mcp]
status: active
updated: 2026-11-23
when_to_use: Scheduling browser, API, or uptime checks against a deployed app, or letting an agent inspect Checkly results
---

## Summary

**Checkly** runs scheduled uptime monitors and synthetic checks (HTTP, multistep, Playwright browser, and Playwright suites) from Checkly’s locations, then alerts and can write a status page. Hobby is free and hard-capped: 10 uptime monitors, 1,000 browser runs, and 10,000 API runs a month. Past that cap, checks stop. The MCP server is `https://api.checklyhq.com/mcp`. OAuth works only for Checkly-approved clients. Use Checkly to learn that a flow broke before a user reports it. Use Sentry (`sentry`) for exceptions the app already threw, and Datadog (`datadog`) when the agent needs the wider log and trace platform.

## Notes

- **Access.** Sign up at `links.get`. No card for Hobby. The MCP guide is `links.docs`. OAuth is the recommended connection and rejects dynamic client registration. Approved clients include Cursor, Claude Code, VS Code, and Claude Desktop. Codex has no approved OAuth client; connect it with an API key bearer token. User keys start with `cu_` and follow the user’s memberships. Service keys start with `sv_`, are scoped to one account and role, and the MCP setup page says they need a paid plan. Old account keys and `sk_` service keys are rejected. API-key sessions cannot invite members.
- **Which account.** OAuth and a user key can see every account that user belongs to. Say which account to use, or send `X-Checkly-Account` with the account id. A service key does not need that header.
- **What the agent can do.** List and change checks, uptime monitors, and groups; trigger checks that are already deployed; read results and bounded text assets; start a Rocky AI root-cause analysis; manage status-page incidents; read and write account environment variables and secrets. Standalone browser and multistep checks can be created with an inline script. The remote server cannot read the local project. Checks that live in the repo go through the Checkly CLI.
- **Price shape (pricing.md and the pricing page, 2026-11-23).** Detect, Communicate (status pages), and Resolve (AI root-cause analysis) are separate modules. Hobby is $0 for all three, one user, and no card. Detect on a monthly bill is $29 for Starter (50 uptime monitors, 3,000 browser runs, 25,000 API runs) and $80 for Team (75, 12,000, and 100,000). The pricing cards quote the annual Detect price, $24 and $64. Communicate and Resolve are extra: Starter $12 and $19 monthly, or $9 and $12 on an annual bill. Hobby uptime monitors run no faster than every 2 minutes, from at most 3 of 6 locations. Ten-second synthetic frequency is Team and above. Hobby and Starter synthetic checks can also use at most 3 of 6 locations. The plan cards say Team has 21 locations; pricing.md says 22. Details: `checkly-hobby-cap-and-account`.
- **What counts as a run.** Uptime monitors (URL, TCP, DNS, ICMP, SSL, gRPC, traceroute, heartbeat) are billed by how many exist, not by how often they run. An API check execution is one API run. Each HTTP request inside a multistep check is one API run. A browser execution is one browser run. A Playwright suite uses one browser run per started 30 seconds. Parallel locations and retries each add runs. Round-robin uses one location per run. CLI test sessions and “schedule now” count too. Creating a browser check returns HTTP 402 when the account is over its plan limit.
- **Alternatives.** Sentry (`sentry`) after an exception exists. Datadog (`datadog`) for logs, traces, and monitors in one account. A Render or Railway health check is not a multi-location browser flow.
- **Caveats.** Hobby stops the checks at the cap. Starter and Team keep running and bill overage. An agent on the wrong Checkly account, or one that prints account secrets from MCP, is the other surprise.

## Sources

- [Checkly MCP server](https://www.checklyhq.com/docs/ai/mcp-server/) — accessed 2026-11-23
- [Set up the Checkly MCP server](https://www.checklyhq.com/docs/ai/mcp-server/setup/) — accessed 2026-11-23
- [Checkly pricing](https://www.checklyhq.com/pricing/) — accessed 2026-11-23
- [Checkly pricing (markdown)](https://www.checklyhq.com/pricing.md) — accessed 2026-11-23
- [Usage and check runs](https://www.checklyhq.com/docs/admin/usage/) — accessed 2026-11-23
- [Plan changes and billing](https://www.checklyhq.com/docs/admin/billing/) — accessed 2026-11-23
- [Create a browser check](https://www.checklyhq.com/docs/api-reference/checks/create-a-browser-check/) — accessed 2026-11-23
- [Checkly sign-up](https://app.checklyhq.com/signup/) — accessed 2026-11-23
- [Checkly](https://www.checklyhq.com/) — accessed 2026-11-23
