---
id: zilliz-serverless-vcu-floor
title: A Zilliz serverless search bills a 6 vCU floor, or a trial cluster is deleted
kind: knowledge
tags: [zilliz, billing, limits, search]
status: active
updated: 2026-11-20
when_to_use: A Zilliz Cloud search costs more than the rows scanned, a batched query is rejected, or a trial cluster disappears after the credits expire
---

## Summary

Zilliz Cloud (`zilliz-cloud`) bills every Free or Serverless read at least 6 vCUs and scans the whole collection unless the filter uses a partition key. A trial without a payment method later deletes Serverless and Dedicated clusters. An agent that probes with tiny searches, or that keeps memory only on a trial cluster, hits one of these.

## Notes

- **Read floor.** Vector database reads are $4 per million vCUs, and each search, hybrid search, or query costs at least **6 vCUs** even when the measured scan is smaller. A million searches of 1 million 128-dimension vectors are billed as 6 million vCUs in the cost doc’s example, not the 5 million the scan measured. Returning the vector field, not only the id, raises the vCU count further. A partition-key filter is what limits the scan. Any other filter still starts from a full-collection scan.
- **Writes round up, and missing deletes still count.** Every write request is at least 1 vCU. Inserts are 0.25 vCU per KB of the encoded body, so many one-row requests cost more than one batched request of the same rows. Deleting by primary key costs 1 vCU per key in the request even when no entity has that key. A filter delete counts only matches. An upsert pays the insert size plus 1 vCU per entity, including a key that was not there. A partial update still pays that 1 vCU. Import and bulk insert do not add this write charge.
- **Free and Serverless request caps.** Free is one cluster per organization, 5 GB, 2.5 million vCUs a month, and 5 collections. It suspends after 7 idle days and can be resumed. Dropping it does not restore from the recycle bin. Serverless has no stated capacity cap and allows 100 collections, but search `nq` is at most 10 and `topK` at most 1,024, and the body is at most 64 MB. Insert is capped at 2 MB/s on Free and 10 MB/s on Serverless. Deletes are capped at 0.5 MB/s per cluster, so a large agent cleanup trickles.
- **Trial deletion and keys.** Work-email credits ($100) expire in 30 days. Without a payment method, the organization may have only one Serverless or Dedicated cluster. When the trial ends, that organization freezes, those clusters move to the recycle bin, and they are permanently deleted if no payment method arrives within 30 days. The organization itself remains. A personal API key disappears when the user leaves. Use a customized key for an agent, and store the cluster password at creation. It is not shown again.

## Sources

- [Serverless cluster cost](https://docs.zilliz.com/docs/serverless-cluster-cost) — accessed 2026-11-20
- [Zilliz Cloud limits](https://docs.zilliz.com/docs/limits) — accessed 2026-11-20
- [Free and Serverless clusters](https://docs.zilliz.com/docs/free-and-serverless-clusters) — accessed 2026-11-20
- [Create a Zilliz Cloud account](https://docs.zilliz.com/docs/register-with-zilliz-cloud) — accessed 2026-11-20
- [API keys](https://docs.zilliz.com/docs/manage-api-keys) — accessed 2026-11-20
