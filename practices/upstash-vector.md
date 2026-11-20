---
id: upstash-vector
title: Upstash Vector — serverless vector indexes
kind: service
tags: [upstash, vectors, search, serverless]
status: active
updated: 2026-11-20
when_to_use: Storing agent embeddings in a serverless index that can scale to zero
---

## Summary

**Upstash Vector** is a hosted vector index with a REST API. An index is dense, sparse, or hybrid. You send the vectors (and, for hybrid or sparse, the keyword side). It is not Pinecone (`pinecone`), turbopuffer (`turbopuffer`), Qdrant Cloud (`qdrant-cloud`), or an embedding API such as Voyage (`voyage-ai`).

## Notes

- **Access.** Sign up at `links.get`, open the Vector tab, and create an index. Choose the region, the type, and, for dense or hybrid, the dimension and distance metric at creation time. Regions are AWS `us-east-1` (N. Virginia), AWS `eu-west-1` (Ireland), and GCP `us-central1` (Iowa). Fixed and Pro plans are the AWS regions only. The index is eventually consistent: a query immediately after an upsert can miss the new row. Each vector id is required and cannot be an empty string. Replication is not offered.
- **Auth.** Each index has its own REST URL and bearer token, shown in the console Connect panel. Send `Authorization: Bearer` with that token. A token does not grant another index.
- **Plans (pricing page, 2026-11-20).** Free is $0, with a max dimension of 1536, 200 million vectors×dimensions, 10,000 daily queries, 1 GB of data, 100 namespaces, no SLA, and scale-to-zero. The getting-started page also caps Free at 10,000 updates per day. Pay as you go is $0.40 per 100,000 requests plus $0.25 per GB, max dimension 3072, 2 billion vectors×dimensions, 50 GB, 10,000 namespaces, unlimited daily queries, a 99.9% SLA, and scale-to-zero. Bandwidth is free up to 200 GB a month, then $0.03 per GB. Fixed is $60/month with requests included, the same storage and dimension caps, a daily query cap of 1 million (the getting-started page also caps updates at 1 million a day), no scale-to-zero, and a 99.9% SLA. Pro is contract pricing, max dimension 5000 on the pricing page, 100 billion vectors×dimensions, 1 TB, a 99.99% SLA, and no scale-to-zero. Storage is the daily average at $0.25 per GB even when the month has no requests. Queries, fetches, ranges, upserts, and deletes all count toward the request price. Metadata per vector is at most 48 KB and the data field at most 1 MB. The pricing page lists 1000 as the default topK limit.
- **Search.** A dense index is similarity search. A sparse index is keyword search. A hybrid index queries both and fuses the results. Metadata filters narrow a query. A query vector’s dimension must match the index.
- **Alternatives.** Pinecone, Qdrant Cloud, turbopuffer, Zilliz Cloud (`zilliz-cloud`), or Weaviate (`weaviate`) when you want that engine. LanceDB (`lancedb`) when the vectors should live in the agent process. Voyage or Cohere (`cohere`) when you still need to embed or rerank the text.
- **Caveats.** A free index rejects a vector wider than 1536, and a batched upsert bills one request per vector. The published Pro dimension and the per-account index cap disagree across Upstash pages. Details: `upstash-vector-dimension-and-batch`.

## Sources

- [Upstash](https://upstash.com/) — accessed 2026-11-20
- [Upstash console](https://console.upstash.com/) — accessed 2026-11-20
- [Getting started](https://upstash.com/docs/vector/overall/getstarted) — accessed 2026-11-20
- [What is Upstash Vector?](https://upstash.com/docs/vector/overall/whatisvector) — accessed 2026-11-20
- [Vector pricing](https://upstash.com/pricing/vector) — accessed 2026-11-20
- [Vector FAQ](https://upstash.com/docs/vector/help/faq) — accessed 2026-11-20
