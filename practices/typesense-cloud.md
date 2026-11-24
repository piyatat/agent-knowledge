---
id: typesense-cloud
title: Typesense Cloud — dedicated search clusters and an OAuth MCP server
kind: service
tags: [typesense, search, mcp, catalog]
status: active
updated: 2026-11-24
when_to_use: Hosting a product or content catalog on a dedicated search cluster, or letting an agent create that cluster and index it
---

## Summary

**Typesense Cloud** runs Typesense on a dedicated cluster you pay for by the hour, with no cap on records or operations. The remote MCP server at `https://cloud.typesense.org/mcp/v1` can create clusters, index documents, and tune search under the permissions chosen at consent. The open-source server is the self-hosted alternative; this entry is the managed cloud. Use it when an agent should both provision search and write the index. Use Algolia (`algolia`) when you want a multi-tenant search API whose public MCP is read-only.

## Notes

- **Access.** Sign up at `links.get` with a work email or GitHub. Each cluster is dedicated hardware, so the hourly fee accrues while it is running, including hours with no traffic. Bandwidth is extra (the billing article’s usual range is about 9–12¢ per GB, depending on region). Backups, extra disk, and prioritized support are optional. Charges accrue and bill weekly by default; after two months of successful payments the account can switch to a 28-day cycle. An invoice is issued early if charges in the cycle reach $500. There is no long-term contract.
- **MCP.** The server is Streamable HTTP with OAuth. Consent picks the account and a preset: Search only, Search and curate, Manage clusters (no document access), Build (the default: clusters and data, no terminate, clone, or billing, and the only key it can mint is a search-only key), or Everything (includes terminate, capped by the person’s team role). A connection is one account. The owner is emailed and can disconnect it under Account → Connected apps. Data calls use a key Typesense keeps server-side; the agent does not receive the cluster admin key. Tools that change things are marked destructive, so a client that honors that annotation asks first.
- **Free tier (help center, updated 2026-07-17).** Selected configurations include the first 720 hours and 10 GB of bandwidth once per account, not every month. The unattended shape the MCP docs describe is 0.5 GB memory, 2 vCPU burst, and one node. Anything past that, or a configuration change or clone, needs a payment method or a positive prepaid balance. A Typesense version upgrade is exempt.
- **Caveats.** The free hours do not renew, an unclaimed cluster is deleted, and a headless API key cannot run the data tools. Details: `typesense-free-tier-and-mcp`.

## Sources

- [Typesense Cloud MCP server](https://typesense.org/docs/guide/typesense-cloud/mcp-server.html) — accessed 2026-11-24
- [Free tier](https://cloud-help.typesense.org/article/how-does-the-free-tier-work) — accessed 2026-11-24
- [Billing process](https://cloud-help.typesense.org/article/billing-process) — accessed 2026-11-24
- [Typesense Cloud sign-up](https://cloud.typesense.org/signup) — accessed 2026-11-24
- [Typesense Cloud](https://cloud.typesense.org/) — accessed 2026-11-24
- [Typesense](https://typesense.org/) — accessed 2026-11-24
