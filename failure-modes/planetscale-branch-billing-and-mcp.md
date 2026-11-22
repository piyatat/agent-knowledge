---
id: planetscale-branch-billing-and-mcp
title: A PlanetScale branch starts a bill, or MCP can still write after a lock-down
kind: knowledge
tags: [planetscale, postgres, mcp, billing]
status: active
updated: 2026-11-22
when_to_use: A PlanetScale branch or resize charged more than expected, MCP queries fail an IP check, or writes still run after query access was tightened
---

## Summary

PlanetScale (`planetscale`) has no free database. A Postgres development branch is its own paid cluster, and creating one from an agent starts prorated billing. Tightening organization MCP query access does not revoke OAuth clients that already connected. Postgres queries from the hosted MCP server fail unless all four egress addresses are allowed.

## Notes

- **No free tier.** The Developer and Hobby plans are gone. Base is the self-serve plan, and every organization needs a debit or credit card. Prepaid cards are declined. Adding a card or creating a database can place a temporary card hold that the bank may show for a few days. Deleting a database ends that database’s plan and prorates the fee. Spend alerts email administrators at 75% and 100% of a number you set; the billing page describes email, not an automatic stop.
- **Branches are clusters.** Vitess includes about two times the hours in the current month of development-branch time (1,440 hours in a 30-day month), then about $10 spread across the rest of the month. Postgres development branches do not use that allowance. Each one is $5/month, prorated to the millisecond, with no replicas and no maintenance windows, so it is the wrong place for production traffic. Extra production branches bill at the cluster size you pick. A resize bills the old size until the resize finishes, then the new size. Prices on the public sheet are for one region (the 2026-11-22 sheet defaults to AWS us-east-1). Sizes above `PS-160` and `M-320` stay unavailable until a paid invoice of at least $100.
- **MCP writes.** The organization default is read and write queries. An admin can later set no query access or read-only, and that limit applies to authorizations made after the change. An MCP client that already has a grant keeps it until someone revokes it. Schema, Insights, billing, and other non-query tools stay available. Service-token permissions are set on the token, not in the OAuth screen, and this organization switch does not change them. The insights-only URL omits query execution. PlanetScale’s own warning is to review writes before they run against production. Full payment-method access can start Checkout.
- **Token and network.** Send only the token secret (`pscale_tkn_…`) as the bearer value. A header of `id:secret` is rejected. Postgres with an IP allow list must include `104.28.1.231`, `104.28.1.232`, `104.28.1.233`, and `104.28.1.234`. Missing any one of the four makes hosted-MCP queries fail. Those addresses are only for `mcp.pscale.dev`.

## Sources

- [PlanetScale plans](https://planetscale.com/docs/planetscale-plans) — accessed 2026-11-22
- [PlanetScale pricing](https://planetscale.com/pricing.md) — accessed 2026-11-22
- [PlanetScale billing](https://planetscale.com/docs/billing) — accessed 2026-11-22
- [PlanetScale MCP](https://planetscale.com/docs/mcp-server) — accessed 2026-11-22
- [MCP service tokens](https://planetscale.com/docs/mcp/service-token) — accessed 2026-11-22
