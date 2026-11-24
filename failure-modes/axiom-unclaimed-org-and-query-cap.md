---
id: axiom-unclaimed-org-and-query-cap
title: An Axiom agent org disappears, or a query hits a cap
kind: knowledge
tags: [axiom, observability, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: An Axiom organization an agent created was deleted, a monitor never notified, or an APL query returned 429 or a short result
---

## Summary

Axiom (`axiom`) lets an agent create a real organization with one unauthenticated request. That organization is deleted, with its data, if nobody claims it within 24 hours. Query-cost limits exist only on Axiom Cloud and Enterprise, and an OAuth MCP session spends the member’s role budget. Personal stops at its included usage instead of billing more.

## Notes

- **Unclaimed organizations.** `POST https://api.axiom.co/v2/orgs/provision` needs no authentication. The response includes an API token with full access and a claim URL, each exactly once. Anyone who opens the claim URL can take the organization. The token and the URL are secrets. Until claim, the cap is 10 GB ingested and 1 GB-hour of query compute over that 24-hour life, notifiers do not deliver, and an agent can create at most three organizations in a day. A provision `429` means the rate limit; do not create another org for the same task. At `expiresAt` the org, datasets, token, and synthetic user are deleted and cannot be restored. Claiming keeps the data, moves the org to Personal, enables notifiers, and leaves the original token working until the new owner revokes it. The claim link is single-use.
- **Query budgets.** Hourly and daily query-cost limits are dollars of query compute. They are not available on Personal, including a claimed agent org, or on legacy Team plans. Ingest is never blocked by them. When a limit trips, queries from that identity return `429` with `Retry-After` until the hour (top of the hour UTC) or the day (midnight UTC) resets. OAuth MCP acts as the member, so the cap belongs on the role, and the strictest role wins. A token cap covers everything that uses that token. The legacy Run APL endpoint on `api.axiom.co` rejects every query from an identity that has limits; send those queries to the edge query endpoints. A separate organization spending limit pauses usage past the limit instead of billing it.
- **Result and field caps.** A query without `limit` or `take` returns at most 1,000 rows. With either operator the base maximum is 50,000. Personal allows 3 datasets and 256 fields. A new field past the dataset’s field cap is dropped, the ingest still returns success, and the response warns with `column_limit_drop`. Dropped fields are not stored. Events timestamped more than 24 hours in the future, or before the Unix epoch, are rejected. The limits reference lists Personal and Axiom Cloud edge deployments as US. If a dataset is already in EU Central 1, only the EU MCP server keeps query results in the EU, and its non-query calls still go to the US API.

## Sources

- [Agent-created organizations](https://axiom.co/docs/console/intelligence/agent-created-orgs) — accessed 2026-11-24
- [Set query cost limits for AI agents](https://axiom.co/docs/console/intelligence/query-cost-limits) — accessed 2026-11-24
- [Limits](https://axiom.co/docs/reference/limits) — accessed 2026-11-24
- [Axiom pricing](https://axiom.co/pricing) — accessed 2026-11-24
- [Axiom MCP server](https://axiom.co/docs/console/intelligence/mcp-server) — accessed 2026-11-24
