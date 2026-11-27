---
id: mixpanel-free-pause-and-region
title: Mixpanel paused queries on Free, or MCP used the wrong region
kind: knowledge
tags: [mixpanel, analytics, mcp, billing]
status: active
updated: 2026-11-27
when_to_use: A Mixpanel report stopped, MCP hit the wrong region, or a service account wrote Lexicon data
---

## Summary

Mixpanel (`mixpanel`) keeps ingesting after a Free org passes 1 million events in a month and pauses querying until the org moves to Growth. That upgrade bills from the first of the current month. The US, EU, and India MCP hosts are different servers. A service-account header can run the same write tools as OAuth.

## Notes

- **Free querying stops; ingest does not.** The pricing docs say a Free org over its monthly event allowance keeps collecting events, and querying stays paused until you upgrade to Growth. Growth requires a card. The plan starts on the first of the current month, so this month’s events count, and events above the allowance bill on the next invoice. The pricing page’s Free allowance is 1 million events. Identify, alias, merge, opt-in, session-recording checkpoints, and profile updates are excluded from that count. Waiting for the next calendar month is not what that FAQ describes.
- **MCP is on Free, and the Query API is not.** The pricing comparison lists the MCP server on Free, Growth, and Enterprise, and lists Query API access as absent on Free. The MCP page says Free plans can be subject to Query API access limits. `Run-Query` also cannot filter by cohort, profile history, or a saved metric, on every plan. MCP itself is 600 requests an hour per user. A 429 is that limit, not the event cap.
- **Region is part of the URL.** US is `https://mcp.mixpanel.com/mcp`, EU is `https://mcp-eu.mixpanel.com/mcp`, and India is `https://mcp-in.mixpanel.com/mcp`. A client pointed at the wrong host is not looking at the project you think it is. Orgs created on or before 2026-08-01, and Enterprise orgs, need an admin to enable MCP. Newer Free and Growth orgs have it on. The toggle can take 15 minutes.
- **A static header is a writer.** Service-account auth is beta. The secret is shown once. Whoever holds `username:secret` can call the write tools on projects that account belongs to, including dashboard deletes, Lexicon edits, experiments, and flags. Cohort targeting is not available on the experiment and flag tools. `Get-Audit-Log` still requires an organization admin or owner, and read-only calls never appear in that log. Verified Mode does not hide unverified events.

## Sources

- [Pricing](https://docs.mixpanel.com/docs/pricing) — accessed 2026-11-27
- [Mixpanel pricing](https://mixpanel.com/pricing/) — accessed 2026-11-27
- [Mixpanel MCP server](https://docs.mixpanel.com/docs/mcp) — accessed 2026-11-27
- [Rate limits](https://docs.mixpanel.com/reference/rate-limits) — accessed 2026-11-27
