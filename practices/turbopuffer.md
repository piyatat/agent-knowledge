---
id: turbopuffer
title: turbopuffer — namespace search for vectors and filters
kind: service
tags: [turbopuffer, vectors, search, retrieval]
status: active
updated: 2026-11-20
when_to_use: Storing agent documents in namespaces and querying them by vector or attribute without operating a database
---

## Summary

**turbopuffer** is a hosted search database. Data lives in namespaces. A query can use vectors, filters, and full text, and writes can carry your own vectors or use turbopuffer’s native embeddings. It is a commercial service, not an open-source server you run on the Launch plan. It is not Zilliz Cloud (`zilliz-cloud`), Pinecone (`pinecone`), or Qdrant Cloud (`qdrant-cloud`).

## Notes

- **Access.** Sign up at `links.get`. Create an API key in the dashboard, then call the regional HTTPS host. The quickstart’s default region `gcp-us-central1` is compute-constrained. The regions page says to pick another public region for a new workload, or ask turbopuffer if that region is required. Not every native embedding model runs in every region. BYOC and single-tenant clusters are the Enterprise path.
- **Auth.** Every HTTP call sends the API key as a bearer token. Keys are created and expired in the dashboard. Listing namespaces requires a key with list or admin permission. On BYOC, keys are admin unless you set roles (`admin`, `write`, `read`, `list`), and one key applies to every namespace in its organization. Isolate tenants with separate organizations when a key must not see another tenant’s namespaces.
- **Plans (pricing page, 2026-11-20).** Launch is multi-tenant with a **$16/month** minimum (SOC 2, GDPR-ready DPA). Scale is **$256/month** and adds a HIPAA-ready BAA, SSO, audit logs, and IP allowlisting. Audit log streams are an extra **$128/month**. Enterprise starts at **$4,096/month** with a **35%** usage premium and adds single-tenancy, BYOC, private networking, CMEK, and a 99.95% uptime SLA. Unused minimum does not roll over. Usage above the minimum is billed. Database features match across plans except where the pricing page says otherwise (CMEK is a higher tier).
- **Meters.** Billing uses logical bytes, the size you ingest, not physical storage amplification. The pricing calculator lists storage up to **$0.33/GB**, writes up to **$2/GB**, and queries up to **$1/PB**. Every write is at least **10 KB**. A batch discount grows with batch size and reaches 50% near 3.2 MB, applied once to the whole batch. A query bills data queried plus data returned. Data queried is the namespace size or **1.28 GB**, whichever is greater, with an 80% marginal discount between 32 GB and 128 GB and 96% beyond 128 GB. Attributes are filterable by default. Marking one not filterable bills it at 50%. Filterable attributes are billed once per vector column. A pinned namespace is billed as at least **128 GB** (pricing log, August 2026).
- **Alternatives.** Zilliz Cloud, Pinecone, Qdrant Cloud, Weaviate (`weaviate`), or Chroma Cloud (`chroma-cloud`) when you want that engine or a free cluster. Voyage (`voyage-ai`) when you only need embeddings or a rerank.
- **Caveats.** A tiny namespace still pays the 1.28 GB query floor, and a one-row write still pays 10 KB. Details: `turbopuffer-query-and-write-floor`.

## Sources

- [Sign up for turbopuffer](https://turbopuffer.com/join) — accessed 2026-11-20
- [turbopuffer](https://turbopuffer.com/) — accessed 2026-11-20
- [Quickstart](https://turbopuffer.com/docs/quickstart) — accessed 2026-11-20
- [Regions](https://turbopuffer.com/docs/regions) — accessed 2026-11-20
- [List namespaces](https://turbopuffer.com/docs/namespaces) — accessed 2026-11-20
- [BYOC operations](https://turbopuffer.com/docs/byoc/operations) — accessed 2026-11-20
- [Pricing](https://turbopuffer.com/pricing) — accessed 2026-11-20
- [Pricing changelog](https://turbopuffer.com/docs/pricing-log) — accessed 2026-11-20
