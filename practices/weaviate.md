---
id: weaviate
title: Weaviate Cloud — managed vector database and Query Agent
kind: service
tags: [weaviate, vectors, search, mcp]
status: active
updated: 2026-11-20
when_to_use: Storing vectors for an agent on Weaviate Cloud, or asking the Query Agent over those collections
---

## Summary

**Weaviate Cloud** is the managed Weaviate database: hybrid search over objects you store, plus hosted embeddings and a **Query Agent** that turns a natural-language question into searches. It is not Pinecone (`pinecone`), not Qdrant Cloud (`qdrant-cloud`), and not Chroma Cloud (`chroma-cloud`). Open-source Weaviate is the same engine you run yourself. The cloud adds the embedding service, the Query Agent, and a cluster MCP server.

## Notes

- **Access.** Create an account in the Weaviate Cloud console (`links.get`). Free clusters need no card. Shared Cloud (the paid Flex path) requires billing first. SSO orgs sign in with a work email. They do not create a password account first. Official client and schema pages are linked from `links`. This note does not repeat them.
- **Auth.** New clusters on Weaviate **v1.30+** use RBAC. A new cluster has no API keys. The console shows a key only at creation. Clients send it as a bearer token with the cluster REST endpoint. Official clients infer gRPC from that REST URL. The Go and C# clients want the hostname without `https://`. Do not hard-code the key.
- **Plans (pricing page and create-cluster docs, 2026-11-20).** Free: one cluster per user, 100,000 objects, 1 GB memory, 10 GB disk, one collection, up to 3 tenants, 2,000 embedding requests a day, 1,000 Query Agent requests a month. Free clusters are AWS-only, Cost Optimized (HFresh). They have no backups and no HA. Flex is pay-as-you-go with a **$45/month** minimum, HA at 99.5%, and up to 1,000 collections. The pricing FAQ says Premium minimums start from **$400/month**. The comparison table says to contact sales. Vector-dimension rates vary by index, compression, and region. Hosted embeddings on the pricing page: Snowflake Arctic embed M v1.5 at $0.025/1M tokens, v2.0 at $0.040, ModernVBERT at $0.065.
- **Query Agent.** An organization gets 1,000 requests a month at no cost. **Ask** costs 4 requests, **Search** and **Suggest Queries** cost 1, and each generated image costs 1. The pricing page also lists a $30/organization monthly plan with 4,000 requests included, then usage. Flex’s listed rate limit is 30,000 requests a month. Premium is unlimited. The console agent does not support multi-tenant collections. A client library does. It reads each collection’s description when it picks where to search. Runs often take about 10 seconds. A long non-streaming call can time out. Prefer streaming.
- **MCP.** Every Cloud cluster has an MCP server. **Enable MCP Read-Only** is off by default, so the write tool is available. On a free cluster that switch is not on the create form. Set it after creation. No restart.
- **Alternatives.** Pinecone or Qdrant Cloud for a different managed engine. Chroma Cloud for the Chroma API. Voyage (`voyage-ai`) or Cohere (`cohere`) when you only need embeddings or rerank. Self-hosted Weaviate when the data cannot sit in Weaviate Cloud.
- **Caveats.** A free cluster suspends after 7 idle days and is deleted after 30 days of inactivity. A Shared Cloud update can change the gRPC host. Details: `weaviate-free-idle-and-mcp-write`.

## Sources

- [Create a Weaviate Cloud account](https://docs.weaviate.io/cloud/platform/create-account) — accessed 2026-11-20
- [Create a cluster](https://docs.weaviate.io/cloud/manage-clusters/create) — accessed 2026-11-20
- [Connect to Weaviate Cloud](https://docs.weaviate.io/cloud/manage-clusters/connect) — accessed 2026-11-20
- [Weaviate pricing](https://weaviate.io/pricing) — accessed 2026-11-20
- [Query Agent](https://docs.weaviate.io/cloud/tools/query-agent) — accessed 2026-11-20
- [Weaviate Cloud console](https://console.weaviate.cloud/) — accessed 2026-11-20
