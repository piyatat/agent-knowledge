---
id: chroma-cloud
title: Chroma Cloud — managed Chroma search
kind: service
tags: [chroma, vectors, search, retrieval]
status: active
updated: 2026-11-20
when_to_use: Storing and searching embeddings on hosted Chroma instead of a local Chroma database
---

## Summary

**Chroma Cloud** is Chroma’s managed, serverless database. It speaks the same collection API as open-source Chroma and runs a distributed index in one region you choose. It is not a local Chroma process, not Pinecone (`pinecone`), and not Weaviate Cloud (`weaviate`). Package Search is a separate hosted MCP for code packages. This note is the database.

## Notes

- **Access.** Sign up at `links.get`. Create a database in the dashboard and pick a region there or via the API. New accounts get **$5** in credits. That is the stated starting credit, not an ongoing free tier. Official client pages are under `links.docs`. This note does not repeat install steps.
- **Auth.** Create an API key in the dashboard, scoped to one database or to the account. The CLI stores the key and tenant id in `~/.chroma/credentials` after login. Sync and Package Search send that key as the `x-chroma-token` header. Treat the credentials file as a secret.
- **Regions (getting-started page, 2026-11-20).** Multi-tenant databases run in AWS `aws-us-east-1` (`api.trychroma.com`, the default) or GCP `gcp-europe-west1` (`europe-west1.gcp.trychroma.com`). A database stays in the region where you created it. Moving to the EU means a new database and a reindex. Core collections, search, and forking exist in both. **Chroma Sync, the Chroma CLI, and Chroma Search Agent are US-only.** Single-tenant is a sales conversation. The getting-started page says Cloud is SOC 2 Type II.
- **Pricing (pricing page).** Writes are **$2.50 per logical GiB** (the uncompressed bytes you send), once. Compaction is not billed again. Storage is **$0.33 per GiB-month**, prorated hourly, on logical size. Reads are **$0.0075 per TiB queried** plus **$0.09 per GiB returned**. One vector search is one query. Each metadata or full-text predicate is another. A full-text or regex filter is billed as **(N − 2)** queries, where N is the number of characters in the string. A fork is $0.03, then you pay only for bytes written after the fork. Sync is $0.04/GiB processed, plus $0.01 per extracted document page or scraped web page. Billing is per account, across collections and tenants.
- **Alternatives.** Open-source Chroma on a host you run, when the data cannot leave it. Pinecone, Qdrant Cloud, or Weaviate Cloud for a different managed engine. Voyage (`voyage-ai`) or Cohere when the missing piece is the embedding model.
- **Caveats.** A long `$contains` or regex multiplies the read bill. The GitHub sync page says Platform Sync is Team and Enterprise only. Details: `chroma-cloud-query-billing`.

## Sources

- [Chroma Cloud](https://docs.trychroma.com/cloud/getting-started) — accessed 2026-11-20
- [Chroma Cloud pricing](https://docs.trychroma.com/cloud/pricing) — accessed 2026-11-20
- [Chroma CLI login](https://docs.trychroma.com/docs/cli/login) — accessed 2026-11-20
- [Chroma GitHub sync](https://docs.trychroma.com/cloud/sync/github) — accessed 2026-11-20
- [Chroma signup](https://www.trychroma.com/signup) — accessed 2026-11-20
