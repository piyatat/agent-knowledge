---
id: qdrant-cloud
title: Qdrant Cloud — managed vector search for agent memory
kind: service
tags: [qdrant, vectors, memory, search]
status: active
updated: 2026-11-19
when_to_use: Storing and querying vectors for an agent on Qdrant Cloud, or moving an open-source Qdrant server there
---

## Summary

**Qdrant Cloud** is Qdrant’s managed vector database. An agent, or a memory layer in front of one (`mem0`, `zep`), stores embeddings and runs similarity search over HTTPS or gRPC. The same engine ships as open source for a host you operate. Free clusters are for prototypes. Standard and Premium are dedicated clusters on AWS, GCP, or Azure. Hybrid Cloud runs the cluster on infrastructure you provide, with Qdrant’s control plane. Private Cloud is an isolated deployment.

## Notes

- **Access.** Sign up at the console URL in `links` with email, Google, or GitHub. A user can own up to five accounts. Owner and Admin can create clusters. Free clusters need no card. Standard clusters need a card or an AWS, GCP, or Azure Marketplace subscription. After provisioning, REST is on ports 443 and 6333 and gRPC is on 6334. The open-source server is the self-hosted path. Cloud documents moving that deployment onto a managed cluster. This note does not repeat install steps.
- **Auth.** Three credentials, and one does not grant the others. A **database API key**, created on the cluster’s API Keys page, calls that cluster’s REST, gRPC, `/metrics`, and `/sys_metrics`. Send it as the `api-key` header or `Authorization: Bearer`. Creating one needs `write:api_keys`. A **Cloud Management Key**, under Access Management, calls the Cloud API, the `qcloud` CLI, and Terraform, as `Authorization: apikey`. Console sign-in is email, Google, GitHub, or Premium SSO, and SSO does not cover the database API. Database keys default to a 90-day expiry. Leave expiry empty for no expiry. The secret is shown once. New keys are cluster-wide manage/write or read-only, or limited to chosen collections. Granular keys start with `eyJhb` and need cluster v1.11.0 or later.
- **Plans (pricing and getting-started pages, 2026-11-19).** Free: one shared node, 0.5 vCPU, 1 GB RAM, 4 GB disk, about a million 768-dimension vectors, no SLA, upgrades with downtime, snapshots only through the API. Standard: dedicated size you pick, 99.5% SLA, scheduled backups, scale up and out, audit logs, GPU indexing on AWS only. Premium: SSO, private networking, customer-managed keys, 99.9% SLA or 99.95% multi-AZ, and a minimum spend. Billing is hourly for vCPU, RAM, disk, backup storage, and paid Cloud Inference tokens. The pricing page does not publish a per-unit rate. Cluster size changes are explicit. Free Cloud Inference covers selected models. Paid model tokens are extra.
- **Alternatives.** Mem0 or Zep when the agent should store user facts through a memory API instead of owning collections. A Postgres extension or a store you already run when the deployment cannot add another database. The open-source Qdrant server when the vectors must stay on a host you operate.
- **Caveats.** A free cluster suspends after a week without use and is deleted after four idle weeks (`qdrant-cloud-idle-keys`). A new or expired database key returns 403. Enabling granular keys restarts the cluster. A key keeps working after the user who created it is removed from the account.

## Sources

- [Qdrant Cloud getting started](https://qdrant.tech/documentation/cloud-getting-started/) — accessed 2026-11-19
- [Database authentication](https://qdrant.tech/documentation/cloud/authentication/) — accessed 2026-11-19
- [Qdrant Cloud pricing](https://qdrant.tech/pricing/) — accessed 2026-11-19
- [Qdrant Cloud console](https://cloud.qdrant.io/) — accessed 2026-11-19
