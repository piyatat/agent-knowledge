---
id: upstash-vector-dimension-and-batch
title: An Upstash Vector write exceeds the dimension cap, or a batch bills per vector
kind: knowledge
tags: [upstash, vectors, billing, limits]
status: active
updated: 2026-11-20
when_to_use: An Upstash Vector upsert fails on dimension, a follow-up query misses the row, or a batch write bills one request per vector
---

## Summary

Upstash Vector (`upstash-vector`) fixes the dimension when the index is created, counts every vector in an upsert or delete as its own billable request, and does not make a write visible to the next query immediately. A free index also stops at 1536 dimensions and at daily query and update caps.

## Notes

- **Dimension is chosen once.** Free indexes accept at most 1536 dimensions. Pay as you go and Fixed accept 3072. A query vector that does not match the index dimension does not run. The pricing page caps Pro at 5000 dimensions. The Vector FAQ says Pro can go up to 5376. Use the console’s create-index form as the cap that will actually apply. The Vector FAQ says an account can create 10 indexes and should email support for more. The pricing-page FAQ says indexes past 10 cost $0.50 each, up to 100. Confirm in the console before assuming either cap.
- **What a request costs.** On Pay as you go, ranges, queries, fetches, upserts, and deletes are the same $0.40 per 100,000 operations. A query or fetch is one operation no matter how many vectors it returns. An upsert or delete of N vectors is N operations: a batch of 1,000 vectors is 1,000 requests. The FAQ recommends batches of up to 1,000 for throughput, which is separate from that bill. The pricing page lists 1000 as the default topK limit. Storage is still $0.25 per GB of daily-average size in a month with no reads or writes. There is no hourly charge for an idle index, and there is no replication.
- **Free and Fixed daily caps.** The pricing page caps Free at 10,000 queries a day. The getting-started page caps Free at 10,000 queries and 10,000 updates a day. Fixed includes requests in the $60 monthly price and caps daily queries at 1 million; getting started also caps Fixed updates at 1 million a day. Pay as you go has no daily query cap on the pricing page. Entering a card moves a Free index to Pay as you go and raises these limits. Free and Pay as you go scale to zero. Fixed and Pro do not.
- **Read-after-write.** The getting-started page says the index is eventually consistent, so a query right after an insert or update can miss that vector. The id is required and cannot be an empty string; Upstash does not mint one.

## Sources

- [Vector pricing](https://upstash.com/pricing/vector) — accessed 2026-11-20
- [Vector FAQ](https://upstash.com/docs/vector/help/faq) — accessed 2026-11-20
- [Getting started](https://upstash.com/docs/vector/overall/getstarted) — accessed 2026-11-20
