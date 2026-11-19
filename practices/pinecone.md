---
id: pinecone
title: Pinecone — managed search for agent retrieval
kind: service
tags: [pinecone, vectors, search, memory]
status: active
updated: 2026-11-19
when_to_use: Storing text or vectors for an agent and searching them by meaning or by exact terms
---

## Summary

**Pinecone** is a managed database for semantic search, keyword search, and hybrid search. An agent upserts text (Pinecone embeds it) or brings its own vectors, then queries an index. The same account also hosts embedding and reranking models (Inference) and a separate Assistant product. Mem0 and Zep are memory APIs in front of a store. Qdrant Cloud runs a different engine.

## Notes

- **Access.** Create an account in the Pinecone console (`links.get`). The quickstart and the console’s create-index form use one document field for both full-text search and integrated embedding. The default embedding model in that empty `embed` config is `llama-text-embed-v2` at 1,024 dimensions. Integrated embedding in current docs needs Python SDK 10.1.0+ (Python 3.10+), Node.js SDK 9.1.0+ (Node.js 22+), or Go SDK 7.1.0+ (Go 1.25+). Pinecone does not extract or chunk files. Bring your own vectors in a dense field when you already embed elsewhere. Official install and schema pages are linked from `links`; this note does not repeat them.
- **Auth.** Every call needs an API key for that project. HTTP calls in the current docs send `Api-Key` plus `X-Pinecone-Api-Version: 2026-07` and `Content-Type: application/json`. SDKs take the key at init, or read `PINECONE_API_KEY`. The secret is shown once. Control-plane calls go to `api.pinecone.io`. Data calls (upsert, query, search) go to the index host. Admin API calls use a bearer access token, which is a different credential. Current clients do not take the old project-wide `environment` argument. Cloud and region belong to the index.
- **Plans (pricing and cost pages, 2026-11-19).** Starter is free: AWS `us-east-1` only, 1 project, up to 2 users, 5 indexes, 100 namespaces per index, 2 GB storage, 2 million write units, 1 million read units, and 1 GB egress a month. Builder is a flat $20/month: AWS, Azure, or GCP, any listed region, 5 projects, 5 users, 10 indexes per project, 10 GB storage, higher unit caps, and 10 GB egress. Usage past Builder limits is blocked. Standard is a $50/month minimum, then pay-as-you-go, with a 3-week trial that includes $300 credits. Enterprise is a $500/month minimum. Standard and Enterprise add object-storage import, backup and restore, and RBAC. Enterprise adds a 99.95% uptime SLA, private endpoints, customer-managed keys, audit logs, service accounts, and HIPAA. Starter and Builder rerank with `bge-reranker-v2-m3` only. Dedicated read nodes, backups, and import start on Standard. Storage on Standard and Enterprise is listed at $0.33/GB-month. Read and write unit rates vary by cloud and region. A query or document search costs 1 read unit per 1 GB of namespace size, with a 0.25 unit minimum. Upserts have a 5 write-unit minimum.
- **Alternatives.** Qdrant Cloud when you want the open-source Qdrant engine on a managed cluster. Mem0 or Zep when the agent should store user facts through a memory API. Pinecone Inference rerank, or Cohere, when the missing piece is reranking rather than the index.
- **Caveats.** Starter and Builder stop in-scope reads with `RESOURCE_EXHAUSTED` (429) once monthly egress is used up. A search right after upsert can miss documents that are still indexing. Integrated embedding keeps the first 2,048 tokens of a value. Details: `pinecone-read-cap-and-index-lag`.

## Sources

- [Pinecone quickstart](https://docs.pinecone.io/guides/get-started/quickstart) — accessed 2026-11-19
- [Understand Pinecone cost](https://docs.pinecone.io/guides/cost/understand-cost) — accessed 2026-11-19
- [Pinecone API authentication](https://docs.pinecone.io/reference/api/authentication) — accessed 2026-11-19
- [Manage API keys](https://docs.pinecone.io/admin/projects/manage-api-keys) — accessed 2026-11-19
- [Pinecone pricing](https://www.pinecone.io/pricing/) — accessed 2026-11-19
- [Pinecone console](https://app.pinecone.io/) — accessed 2026-11-19
