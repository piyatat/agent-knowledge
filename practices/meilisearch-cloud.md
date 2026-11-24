---
id: meilisearch-cloud
title: Meilisearch Cloud — hosted search and an experimental MCP route
kind: service
tags: [meilisearch, search, catalog, mcp]
status: active
updated: 2026-11-24
when_to_use: Hosting typo-tolerant catalog search, or letting an agent search a Meilisearch project over MCP
---

## Summary

**Meilisearch Cloud** hosts the Meilisearch engine, which is also available to run yourself under the MIT license. Each project is billed either for the machine you reserve or for searches and documents. From v1.54 the engine exposes an experimental, read-only MCP route. There is no OAuth; the API key is the credential. The getting-started guide starts a 14-day trial, and the FAQ says that trial does not require a card. Use Meilisearch when the catalog should tolerate typos and you may later run the same engine yourself. Use Algolia (`algolia`) for a multi-tenant search API, or Typesense Cloud (`typesense-cloud`) when the agent should provision the cluster and write documents.

## Notes

- **Access.** Register at `links.get`. A project’s region is fixed at creation. Deleting a project stops its charges immediately. Seats and API keys are not billed. Payment methods live in the Stripe portal opened from the Cloud billing tab. The MCP guide is `links.docs`.
- **Bills (pricing page and pricing-model doc, 2026-11-24).** Resource-based projects pay for provisioned compute, disk, and bandwidth whether or not anyone searches. The public pricing page’s US East example for the smallest shape is $20 a month before bandwidth: an XS instance (0.5 vCPU, 1 GB RAM) plus the 32 GiB disk minimum. Disk on that page is $0.165 per GiB and outbound bandwidth is $0.15 per GB. The Cloud UI is the rate for the region you pick. Usage-based Build includes 50,000 searches a month, then $0.40 per 1,000, and 100,000 documents, then $0.30 per 1,000, on shared resources. The pricing-model doc charges a base plan fee at the start of the cycle and the extra usage at the end. It does not publish that base fee, so this note does not state one. Extra usage is not a hard stop.
- **MCP.** Turn on the MCP server experimental feature for that project. While it is off, `/mcp` returns `feature_not_enabled`. Experimental features can change without a deprecation period. The client must speak MCP `2026-07-28`. Meilisearch’s guide says Codex needs the experimental client flag for that revision. Send a bearer API key that has `search`, `indexes.get`, and `documents.get`, limited to the indexes the agent should see. The default Search API key lacks `indexes.get` and `documents.get`, so `listIndexes` and `describeIndex` fail. Tools are `listIndexes`, `describeIndex` (up to five sample documents, not settings), `searchInIndexes`, and `facetSearch`. The route cannot create indexes, write documents, change settings, or manage keys. The older Python `meilisearch-mcp` package is deprecated.
- **Caveats.** A long natural-language query keeps only the first ten words, and `describeIndex` puts real documents into the agent’s context. Details: `meilisearch-mcp-key-and-samples`.

## Sources

- [Meilisearch MCP](https://www.meilisearch.com/docs/getting_started/integrations/mcp) — accessed 2026-11-24
- [Experimental features](https://www.meilisearch.com/docs/capabilities/platform/management/experimental_features) — accessed 2026-11-24
- [Pricing model](https://www.meilisearch.com/docs/capabilities/platform/billing/pricing_model) — accessed 2026-11-24
- [Create a project](https://www.meilisearch.com/docs/capabilities/platform/infrastructure/create_a_project) — accessed 2026-11-24
- [Billing overview](https://www.meilisearch.com/docs/capabilities/platform/billing/overview) — accessed 2026-11-24
- [First project](https://www.meilisearch.com/docs/getting_started/first_project) — accessed 2026-11-24
- [Meilisearch FAQ](https://www.meilisearch.com/docs/resources/help/faq) — accessed 2026-11-24
- [Known limitations](https://www.meilisearch.com/docs/resources/help/known_limitations) — accessed 2026-11-24
- [Meilisearch pricing](https://www.meilisearch.com/pricing) — accessed 2026-11-24
- [Meilisearch](https://www.meilisearch.com/) — accessed 2026-11-24
