---
id: pinecone-read-cap-and-index-lag
title: A Pinecone Starter or Builder read returns 429, or a search misses documents still indexing
kind: knowledge
tags: [pinecone, billing, search, limits]
status: active
updated: 2026-11-19
when_to_use: A Pinecone query starts returning 429, or a search right after upsert comes back empty
---

## Summary

Pinecone (`pinecone`) blocks reads on Starter and Builder once the monthly egress allowance is gone, and it indexes document writes asynchronously. An empty search a few seconds after upsert is lag. A 429 on read with writes still succeeding is the flat-plan egress cap.

## Notes

- **Egress cap stops reads on flat plans.** Starter includes 1 GB of egress a month and Builder includes 10 GB. Past that, in-scope reads (query, fetch, list, and document search) return `RESOURCE_EXHAUSTED` (429) and an upgrade prompt. Index stats, index management, and writes still run. The allowance resets at the next billing period. On Standard and Enterprise the same reads keep serving and egress past the included 100 GB is billed (listed at $0.10/GB).
- **Builder blocks extra usage.** Past Builder’s included storage, read units, or write units, further use is blocked. It is not billed as overage. Standard ($50/month minimum) and Enterprise ($500/month minimum) charge usage above the minimum. A quiet Standard month still costs the minimum.
- **Search can miss a write that just succeeded.** Document upserts index asynchronously. The quickstart waits about 10 seconds and says to run the search again if it returns nothing. Wait and retry before treating the record as absent. An index with an `embed` field accepts up to 96 documents per upsert, and bulk import from object storage does not apply to that index. Import is a Standard and Enterprise feature anyway.
- **Long text is cut before it is embedded.** The embedding model reads the first 2,048 tokens of a value and drops the rest. Chunk below that. Fields that are not in the schema are metadata, capped at 40 KB per document. Semantic scores and keyword scores use different scales, so do not rank them against each other. Merge the two lists in the client if you need one order.
- **The key and the host have to match the project.** The secret is shown once. Deleting a key disables callers immediately. Starter and Builder keys can only be created with All permissions, and those permissions cannot be changed later. On Standard and Enterprise, a key with custom permissions must call data operations on the index host. A key from another project fails on both the control plane and the host. Older SDK samples that call `init` with `api_key` and `environment` do not match current clients. Upgrade the SDK and set cloud and region on the index.
- **Starter is a single region and a short rerank list.** Starter indexes exist only on AWS in `us-east-1`, with at most 5 indexes and 2 GB. Rerank on Starter and Builder is `bge-reranker-v2-m3` only. Other rerank models, dedicated read nodes, backups, and import start on Standard.

## Sources

- [Understand Pinecone cost](https://docs.pinecone.io/guides/cost/understand-cost) — accessed 2026-11-19
- [Pinecone pricing](https://www.pinecone.io/pricing/) — accessed 2026-11-19
- [Pinecone quickstart](https://docs.pinecone.io/guides/get-started/quickstart) — accessed 2026-11-19
- [Manage API keys](https://docs.pinecone.io/admin/projects/manage-api-keys) — accessed 2026-11-19
- [Pinecone API authentication](https://docs.pinecone.io/reference/api/authentication) — accessed 2026-11-19
