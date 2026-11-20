---
id: zilliz-cloud
title: Zilliz Cloud — managed Milvus for agent retrieval
kind: service
tags: [zilliz, milvus, vectors, search]
status: active
updated: 2026-11-20
when_to_use: Storing vectors for an agent on managed Milvus, including a free cluster or pay-per-operation serverless search
---

## Summary

**Zilliz Cloud** is the managed Milvus service: Free and Serverless clusters bill in virtual compute units (vCUs), and Dedicated clusters bill in compute units (CUs). It is not Pinecone (`pinecone`), Qdrant Cloud (`qdrant-cloud`), Weaviate (`weaviate`), Chroma Cloud (`chroma-cloud`), or turbopuffer (`turbopuffer`). Open-source Milvus is the same engine you run yourself.

## Notes

- **Access.** Sign up at the Zilliz Cloud console (`links.get`) with a work email, Google, or GitHub. No card is required to create the account. Log in later with the same method. A console session ends after 6 hours idle. GitHub sign-up needs a public email on the GitHub profile. The account docs say Google or GitHub sign-up can fail while that provider’s managed MFA is on.
- **Auth.** The control plane (`api.cloud.zilliz.com`) takes a bearer API key and allows 20 requests per second per user per endpoint. A personal key inherits the user’s roles and is deleted when that user leaves. Organization owners and project admins create customized keys for apps; the secret is returned once, and an organization can hold 100 of them. The cluster admin password is shown once when the cluster is created. Free and Serverless data-plane hosts look like `https://{cluster-id}.serverless.{region}.vectordb.zillizcloud.com` and use that cluster token, not the control-plane key.
- **Free and trial (account and limits docs, 2026-11-20).** One Free cluster per organization: 5 GB (about 1 million 768-dimension vectors), 2.5 million vCUs a month, and 5 collections. It suspends after 7 idle days and can be resumed. Dropping it does not leave a recycle-bin restore. A work-email sign-up gets **$100** in credits that expire in 30 days, for Serverless and Dedicated. Adding a payment method adds another **$100** and extends credit expiry to one year. Without a payment method you may create one Serverless or Dedicated cluster. When that trial ends with no payment method, the organization is frozen, those clusters go to the recycle bin, and they are deleted after 30 more days. The organization remains.
- **Serverless price.** Reads and writes are **$4 per million vCUs**. Each read costs at least 6 vCUs and, unless you filter on a partition key, scans the whole collection. An insert is 0.25 vCU per KB of encoded data, rounded up so every write request costs at least 1 vCU. A delete is 1 vCU per entity, including a primary key that does not exist. An upsert pays both. Import and bulk insert do not add write vCUs. Insert rate caps are 2 MB/s on Free and 10 MB/s on Serverless. Search `nq` is at most 10 and `topK` at most 1,024. A search or query body is at most 64 MB. Serverless allows 100 collections and states no capacity cap. With a payment method, a project can hold 100 Serverless and 100 Dedicated clusters.
- **Dedicated.** Dedicated capacity is sized in CUs, not vCUs. A Standard project’s console stops at 32 CUs per cluster. List prices depend on the plan and region on the pricing guide. Replicas need at least 8 CUs.
- **Alternatives.** Pinecone, Qdrant Cloud, Weaviate, or Chroma Cloud for a different managed engine. turbopuffer when the unit of storage is a namespace billed on logical bytes. Self-hosted Milvus when the data cannot sit in Zilliz Cloud.
- **Caveats.** A small search still pays the 6 vCU floor, and a missing-key delete still costs a vCU. Details: `zilliz-serverless-vcu-floor`.

## Sources

- [Create a Zilliz Cloud account](https://docs.zilliz.com/docs/register-with-zilliz-cloud) — accessed 2026-11-20
- [Zilliz Cloud sign-up](https://cloud.zilliz.com/signup) — accessed 2026-11-20
- [Free and Serverless clusters](https://docs.zilliz.com/docs/free-and-serverless-clusters) — accessed 2026-11-20
- [Serverless cluster cost](https://docs.zilliz.com/docs/serverless-cluster-cost) — accessed 2026-11-20
- [Zilliz Cloud limits](https://docs.zilliz.com/docs/limits) — accessed 2026-11-20
- [API keys](https://docs.zilliz.com/docs/manage-api-keys) — accessed 2026-11-20
- [Zilliz Cloud](https://zilliz.com/cloud) — accessed 2026-11-20
