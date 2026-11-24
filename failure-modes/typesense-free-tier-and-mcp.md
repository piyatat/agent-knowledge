---
id: typesense-free-tier-and-mcp
title: A Typesense free cluster starts billing, or MCP changes data
kind: knowledge
tags: [typesense, search, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: A Typesense Cloud cluster was deleted, the free hours ran out, or an agent resized, imported, or terminated a cluster
---

## Summary

Typesense Cloud (`typesense-cloud`) bills a running cluster by the hour after a one-time free allowance, including idle hours. The default MCP preset can create collections and change documents. An unclaimed cluster is deleted 72 hours after it is created, and a management API key cannot run the data tools.

## Notes

- **Free hours.** The first 720 hours and 10 GB of bandwidth are once per account, not a monthly refill. When they are gone, a cluster that is still running starts charging. Add a payment method before that if the cluster should stay up. Creating, resizing, or cloning past the free shape needs a card or prepaid credit. If the destination account has already used its free tier, claiming a cluster shows the cost and requires a payment method.
- **Unclaimed clusters.** “Try it without an account” exposes every tool, but only four work until an account is connected: create a free cluster, check it, search the docs, and `whoami`. The agent receives the hostname and a key that can create collections, import, search, and set synonyms, curation, presets, stopwords, and analytics rules. That key cannot delete or manage API keys. The cluster is deleted 72 hours after creation. A connection with no account expires after 7 days. After a claim, the agent’s key keeps working for 24 hours unless it is revoked during the claim. The claim page can also attach the agent to the account, with permissions chosen there.
- **What Build can change.** The default preset manages clusters and the data inside them. It does not terminate, clone, or touch billing. `clusters:create` and `clusters:configure` are billable. The Everything preset can terminate clusters, still capped by the person’s role on a team. Every tool is listed; a refused call names the missing permission. Only the person who connected the agent can change those permissions. `manage_cluster`, `documents`, and `change_cluster_data` are marked destructive. A client that ignores that annotation will not ask.
- **Headless, imports, and rate.** A Cluster Management API key sent as a bearer token reaches cluster tools only. Data tools need the browser connection. An inline import is at most 1,000 documents or 10 MB. Larger imports, and every export, are handed back as a command that uses a 24-hour key scoped to that collection and action. Browser agents stay inside the inline limit. Each connection gets 300 data calls per minute and 30 cluster-management actions per minute. Cursor can keep a stale tool list until it is restarted. One connection is one account.

## Sources

- [Typesense Cloud MCP server](https://typesense.org/docs/guide/typesense-cloud/mcp-server.html) — accessed 2026-11-24
- [Free tier](https://cloud-help.typesense.org/article/how-does-the-free-tier-work) — accessed 2026-11-24
- [Billing process](https://cloud-help.typesense.org/article/billing-process) — accessed 2026-11-24
- [Rate limits](https://typesense.org/docs/cloud-management-api/v1/rate-limits.html) — accessed 2026-11-24
