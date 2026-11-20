---
id: lancedb
title: LanceDB — embedded tables, or an Enterprise deployment
kind: tool
tags: [lancedb, vectors, embedded, retrieval]
status: active
updated: 2026-11-20
when_to_use: Storing vectors and source rows inside an agent process, or connecting that SDK to LanceDB Enterprise
---

## Summary

**LanceDB Embedded** is an open-source library that runs in the application process. A local database needs no LanceDB account or API key. Tables can also sit on object storage (`s3://`, `gs://`, `az://`). **LanceDB Enterprise** is a separate private deployment: Managed (LanceDB-operated accounts), bring-your-own-cloud, or custom, on AWS, GCP, or Azure. The current docs describe those two editions. The embedded quickstart is version **0.41.0**. The unversioned `/quickstart` path redirects to the Enterprise quickstart.

## Notes

- **Access.** Install from the embedded quickstart (`links.get`). Python, TypeScript, and Rust are documented. The TypeScript example needs Node.js **22.18** or later to run directly. The Rust `remote` feature is what lets that example connect to Enterprise. Pre-release wheels come from LanceDB’s Fury index and are not guaranteed for more than six months after release.
- **Auth.** Embedded local and object-storage URIs use the process’s own cloud credentials. Enterprise connect uses a database URI (`db://…`), an API key, a region (default `us-east-1` when the deployment does not name one), and the host overrides an administrator or LanceDB provides. Current docs tell you to contact LanceDB for a deployment. There is no self-serve hosted signup on that page.
- **What Enterprise adds.** Query, indexing, and compaction run outside the application, with a tiered cache and OpenTelemetry metrics. The enterprise page cites encryption at rest, private networking, SOC 2 Type II, and HIPAA for that deployment. SQL and the Functions steps in the quickstart are Enterprise features. Embedded skips them.
- **Alternatives.** Pinecone (`pinecone`), turbopuffer (`turbopuffer`), Qdrant Cloud (`qdrant-cloud`), Zilliz Cloud (`zilliz-cloud`), or Chroma Cloud (`chroma-cloud`) when you want a hosted index and a sign-up form. Voyage (`voyage-ai`) or Cohere (`cohere`) when you only need embeddings.
- **Caveats.** The default Python wheel targets `x86-64-haswell`. Older CPUs crash on import. `lancedb` and `lancedb-compat` share a namespace and cannot be installed together. Details: `lancedb-avx2-import`.

## Sources

- [LanceDB Embedded quickstart (0.41.0)](https://docs.lancedb.com/oss/v0-41-0/quickstart) — accessed 2026-11-20
- [LanceDB Enterprise](https://docs.lancedb.com/enterprise/v1-12-0/enterprise) — accessed 2026-11-20
- [LanceDB](https://www.lancedb.com/) — accessed 2026-11-20
