---
id: planetscale
title: PlanetScale — Vitess, Neki, and Postgres with a hosted MCP server
kind: service
tags: [planetscale, postgres, mysql, database, mcp]
status: active
updated: 2026-11-22
when_to_use: Hosting Vitess or Postgres on PlanetScale, or letting an agent inspect branches, schema, and Insights
---

## Summary

**PlanetScale** is a hosted database for Vitess (MySQL-compatible), Neki, and Postgres. Branches are separate clusters, and there is no free plan. A hosted MCP server at `https://mcp.pscale.dev/mcp/planetscale` covers organizations, branches, schema, queries, Insights, live connections, backups, and billing for Vitess and Postgres. OAuth is the interactive path; a service token is the headless path. Use PlanetScale when the database should stay on dedicated clusters with Insights. Use Neon (`neon`) when Postgres should scale to zero, including on a free tier.

## Notes

- **Access.** Sign up at `links.get`. Every organization needs a debit or credit card on file. Prepaid cards are not accepted. PlanetScale never takes the card number itself; updates go through Stripe Checkout. The MCP guide is `links.docs`. OAuth chooses organization and database scope: no access, read-only, or full access, plus separate grants for the payment method, live connections, backups, and the billing email. A headless client sends the service-token secret as a bearer token. The secret starts with `pscale_tkn_`. The token id, and an `id:secret` pair, are rejected. Claude.ai, Claude desktop, Claude Managed Agents, and Notion use OAuth only.
- **Shape and price.** The self-serve plan is Base (the old Scaler Pro name). Network-attached storage includes 10 GB; Metal is local NVMe sized up front. Cluster sizes above `PS-160` and `M-320` stay locked until the organization has paid an invoice of at least $100. The public price sheet is region-specific. For AWS us-east-1 on 2026-11-22, single-node Postgres PS-5 is $5/month and the matching HA (one primary and two replicas) is $15/month. Vitess development branches include about 1,440 hours in a 30-day month. Postgres development branches are $5/month each, prorated to the millisecond, with no replicas and no maintenance windows. Billing is prorated when a cluster is created or resized. SSO is a $199/month organization add-on, including on Enterprise. Automatic backups run every 12 hours and do not count against plan storage; extra user-scheduled backups are $0.023 per GB-month.
- **MCP.** Queries use short-lived credentials that are deleted after the call. An insights-only server at `https://mcp.pscale.dev/mcp/planetscale-insights-only` omits query execution, billing, and feedback tools. Organization administrators can set MCP query access to none, read-only, or read and write. Read and write is the default. The setting applies to new OAuth grants. Clients already authorized keep their grant until it is revoked. Service tokens are unchanged by that setting. Postgres IP restrictions must allow all four hosted-MCP addresses (`104.28.1.231` through `104.28.1.234`, each `/32`) or queries fail. Vitess passwords the server creates already accept only those addresses.
- **What differs by engine.** Data Branching is included for Vitess and unavailable for Neki and Postgres. Horizontal sharding is included for Vitess and Neki; the Postgres column on the plans page points at Neki. The MCP docs cover Vitess and Postgres.
- **Alternatives.** Neon (`neon`) or Supabase (`supabase`) for Postgres with a free tier. Turso (`turso`) for SQLite. MongoDB Atlas (`mongodb-atlas`) for documents.
- **Caveats.** A development branch starts a charge immediately, and the default MCP grant can run writes. Details: `planetscale-branch-billing-and-mcp`.

## Sources

- [PlanetScale plans](https://planetscale.com/docs/planetscale-plans) — accessed 2026-11-22
- [PlanetScale pricing](https://planetscale.com/pricing.md) — accessed 2026-11-22
- [PlanetScale billing](https://planetscale.com/docs/billing) — accessed 2026-11-22
- [PlanetScale MCP](https://planetscale.com/docs/mcp-server) — accessed 2026-11-22
- [MCP service tokens](https://planetscale.com/docs/mcp/service-token) — accessed 2026-11-22
- [PlanetScale sign-up](https://auth.planetscale.com/sign-up) — accessed 2026-11-22
