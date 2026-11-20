---
id: chroma-cloud-query-billing
title: A Chroma Cloud text filter multiplies the read bill, or an EU database lacks Sync
kind: knowledge
tags: [chroma, billing, search, regions]
status: active
updated: 2026-11-20
when_to_use: A Chroma Cloud query costs more than the vector search suggested, or Sync and the CLI are missing on an EU database
---

## Summary

Chroma Cloud (`chroma-cloud`) bills a full-text or regex filter by the length of the string, and several product features exist only in the US region. A surprising invoice, or a Sync button that is not there, is one of those two limits. The $5 new-account credit is not a standing free tier.

## Notes

- **Character count is the query multiplier.** A vector similarity search counts as one query. Each metadata or full-text predicate adds another. A full-text or regex filter counts as **(N − 2)** queries, where N is the number of characters in the search string. The pricing page’s example is the 10-character string `hello world`: that filter is 9 query units, plus 1 for the vector, so 10. Ten thousand such searches over 10 GiB are 100,000 query-units times 0.01 TiB times $0.0075, which the page totals at **$7.50**, before the $0.09/GiB returned. A long regex or a long `$contains` string dominates the bill. Shorten the filter or use a metadata predicate.
- **Writes are billed on the bytes you send.** An add, update, or upsert is $2.50 per logical GiB, once. Reindexing the same bytes to change region or embedding model is another write. Storage of those logical bytes is $0.33/GiB-month. Background compaction is not an extra write.
- **The EU region is a smaller product.** `gcp-europe-west1` has the core API. It does not have Chroma Sync, the Chroma CLI, or Chroma Search Agent. Those are listed for `aws-us-east-1` only. You cannot move an existing database. Create a new one in the other region and reindex. Point the client at `europe-west1.gcp.trychroma.com` for EU. The default host `api.trychroma.com` is US East.
- **Credits and sync plans.** New users get $5 in credits. After that, usage is billed. The GitHub sync page says Platform Sync is **Team and Enterprise** only, even though the pricing page describes the meters as having no tiered feature gating. A credit-only account should not assume it can index a GitHub repo. The CLI key lives in `~/.chroma/credentials`. Do not commit that file.

## Sources

- [Chroma Cloud pricing](https://docs.trychroma.com/cloud/pricing) — accessed 2026-11-20
- [Chroma Cloud](https://docs.trychroma.com/cloud/getting-started) — accessed 2026-11-20
- [Chroma GitHub sync](https://docs.trychroma.com/cloud/sync/github) — accessed 2026-11-20
- [Chroma CLI login](https://docs.trychroma.com/docs/cli/login) — accessed 2026-11-20
