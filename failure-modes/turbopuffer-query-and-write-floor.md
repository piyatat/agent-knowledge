---
id: turbopuffer-query-and-write-floor
title: A small turbopuffer query bills 1.28 GB, or a tiny write bills 10 KB
kind: knowledge
tags: [turbopuffer, billing, search, limits]
status: active
updated: 2026-11-20
when_to_use: An agent’s turbopuffer memory lookup costs like a large scan, or many single-row writes cost far more than their bytes
---

## Summary

turbopuffer (`turbopuffer`) bills every query as if it read at least 1.28 GB, and every write as at least 10 KB. A namespace of agent memories that is much smaller than that floor, or a loop that upserts one row at a time, pays the floor rather than the bytes moved.

## Notes

- **Query floor.** A query’s “data queried” is the namespace’s actual size or **1.28 GB**, whichever is greater, plus the bytes returned. The queried-data rate then discounts 80% of the marginal bytes between 32 GB and 128 GB, and 96% above 128 GB. Returned bytes are a flat per-GB rate. A late-interaction ANN query is billed as two queries, and each document also carries about 10 KB of late-interaction index on writes and storage. Putting one user in one small namespace makes every lookup pay the 1.28 GB floor. A larger shared namespace pays closer to its real size, with the marginal discounts above.
- **Write floor and attributes.** Every write is at least **10 KB**, so a 1 KB row costs the same as a 10 KB row. The batch discount is one rate for the whole request, up to 50% near 3.2 MB. Attributes are filterable by default and billed at the full logical size. An attribute you mark not filterable is 50%. With more than one vector column, filterable attributes are billed once per column. Non-filterable attributes are billed once. Logical bytes are the characters you send, not the database’s physical overhead.
- **Pinning and region.** A pinned namespace is billed as at least **128 GB** (the pricing log raised that minimum from 64 GB in August 2026), even when the namespace is smaller. New workloads should avoid `gcp-us-central1`. That region is compute-constrained, and a native embedding model may be missing there. Copying between regions is a separate write.
- **Plan minimum.** Launch still charges **$16** in a month when usage is lower, and unused minimum does not roll over. Scale is $256 and Enterprise is at least $4,096 with a 35% usage premium. The minimum is a floor, not a credit you can save for a later month.

## Sources

- [Pricing](https://turbopuffer.com/pricing) — accessed 2026-11-20
- [Pricing changelog](https://turbopuffer.com/docs/pricing-log) — accessed 2026-11-20
- [Regions](https://turbopuffer.com/docs/regions) — accessed 2026-11-20
