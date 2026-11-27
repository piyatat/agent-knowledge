---
id: mixpanel
title: Mixpanel — product analytics with a hosted MCP server
kind: service
tags: [mixpanel, analytics, mcp, experiments]
status: active
updated: 2026-11-27
when_to_use: Querying product events, funnels, or replays in Mixpanel, or letting an agent change a board or flag
---

## Summary

**Mixpanel** is hosted product analytics: events, funnels, retention, flows, session replay, experiments, and feature flags. A remote MCP server lets an agent query that data and change boards, Lexicon, cohorts, experiments, and flags. Free is $0 with no card, up to 1 million events a month, and the MCP server is on that plan. Past that allowance Mixpanel keeps ingesting and pauses querying until you move to Growth. Use Mixpanel when the job is product events and replays. Use Amplitude (`amplitude`) or PostHog (`posthog`) when those products already hold the events. Use Statsig (`statsig`) when gates are the product.

## Notes

- **Access.** Sign up from `links.get`. The pricing page links free signup there. On 2026-11-27 that URL stayed on itself with HTTP 200. Pick the MCP host for the project’s region: `https://mcp.mixpanel.com/mcp` (US), `https://mcp-eu.mixpanel.com/mcp` (EU), or `https://mcp-in.mixpanel.com/mcp` (IN). A separate docs server at `https://docs.mixpanel.com/mcp` does not read your project. OAuth uses PKCE, and each region has its own dynamic-registration endpoint. A service account is beta: it skips the browser, the secret is shown once, and the header is `Bearer` plus `Basic` and the base64 of `username:secret`. It can only touch projects it was added to, and the same write tools are available.
- **Who may connect.** Free and Growth orgs created after 2026-08-01 have MCP on by default. Every other org needs an admin to turn it on. The MCP page names both Settings → Org → AI Settings and Settings → Org → Overview for that toggle. A change can take 15 minutes. The connection uses that user’s projects and roles. `Get-Audit-Log` still needs an organization admin or owner.
- **Plans.** The pricing page read on 2026-11-27 lists Free as 1 million events a month, unlimited seats, 10,000 session replays, 1,000 monthly experiment users, and 10 active flags. Growth starts at $0 with the first 1 million events included, up to 20 million; the published yearly price at 1.5 million events is $100 a month, and monthly billing at that volume is $140. Above 20 million is a quote. Enterprise is custom, up to 1 trillion events. Query API access is not on Free. Saved cohorts and saved metrics are limited on Free (you can create them and not save them). Custom properties are not on Free. Identify, alias, merge, opt-in, the session-recording checkpoint, and profile updates do not count toward the monthly event total. A startup program (founded under five years, up to $8 million funding, no other offer redeemed) is a separate first year.
- **What a write can do.** The tool list includes `Delete-Dashboard`, `Edit-Event`, `Merge-Group`, `Create-Cohort`, `Create-Experiment`, `Create-Feature-Flag`, and `Update-Business-Context`. Experiments and flags are beta, and those tools cannot set cohort targeting. `Run-Query` cannot filter or break down by cohort, profile-history fields, or a saved metric. Verified Mode flags unverified Lexicon entities and does not drop them. Writes land in the audit log as the connected account with origin MCP. Reads and failed calls are not logged, and a write can take several minutes to appear.
- **Limits.** MCP is 600 requests an hour per user. The Query API, which Free does not include, is 5 concurrent queries and 60 an hour per project. A 429 means that cap was hit.
- **Caveats.** A free org over 1 million events still ingests and stops answering queries. The wrong regional host is a different project. Details: `mixpanel-free-pause-and-region`.

## Sources

- [Mixpanel pricing](https://mixpanel.com/pricing/) — accessed 2026-11-27
- [Pricing](https://docs.mixpanel.com/docs/pricing) — accessed 2026-11-27
- [Mixpanel MCP server](https://docs.mixpanel.com/docs/mcp) — accessed 2026-11-27
- [Rate limits](https://docs.mixpanel.com/reference/rate-limits) — accessed 2026-11-27
- [Sign up](https://mixpanel.com/register/) — accessed 2026-11-27
- [Mixpanel](https://mixpanel.com/) — accessed 2026-11-27
