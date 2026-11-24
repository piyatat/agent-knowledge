---
id: meilisearch-mcp-key-and-samples
title: Meilisearch MCP misses the index, or it returns live documents
kind: knowledge
tags: [meilisearch, search, mcp, billing]
status: active
updated: 2026-11-24
when_to_use: Meilisearch MCP returns feature_not_enabled or a permission error, a long query misses words, or sample documents include private fields
---

## Summary

Meilisearch (`meilisearch-cloud`) MCP is off until the experimental route is enabled, and the default Search API key cannot list or sample indexes. `describeIndex` returns up to five stored documents. Full-text search silently ignores every word after the tenth. A resource-based project bills its machine while idle. Usage-based overage is invoiced at the end of the month rather than refused.

## Notes

- **Connection.** `/mcp` with the route disabled returns `feature_not_enabled`. A missing bearer `Authorization` header returns `missing_authorization_header`. A key that can `search` but not `indexes.get` and `documents.get` fails `listIndexes` and `describeIndex` with a JSON-RPC error. There is no OAuth screen that narrows the key later. Mint a key whose actions and indexes are already the limit. The route is read-only, so creating an index or adding documents goes through the HTTP API, not MCP. Codex clients on the revision Meilisearch requires need the experimental `2026-07-28` flag described in Meilisearch’s MCP guide. The deprecated local `meilisearch-mcp` process is a different server.
- **What the agent sees.** `describeIndex` returns sample documents. It does not return embedder or ranking settings, and it does not accept extra fetch parameters. Those samples are the index contents, so the key should not cover an index that holds secrets or personal data. Words after the tenth in a full-text query are ignored, not rejected, so a sentence-length question looks successful and matches on the first ten words only. The default result cap is 1,000 hits. Facet search returns at most 100 facet values. At 1,000 concurrent searches the engine drops one at random and returns `503` `too_many_search_requests` with `Retry-After` of 10 seconds.
- **Bill shape.** Resource-based charges accrue by the hour for the chosen CPU, RAM, and disk, including hours with no searches. Usage-based Build keeps serving past 50,000 searches and 100,000 documents and adds $0.40 per 1,000 searches and $0.30 per 1,000 documents at the end of the cycle. Removing the card while that extra charge is unpaid does not erase it. The region cannot be changed after the project exists. Deleting the project stops new charges. The Cloud dashboard upload limit is 20 MB. Larger sets go through the documents API.

## Sources

- [Meilisearch MCP](https://www.meilisearch.com/docs/getting_started/integrations/mcp) — accessed 2026-11-24
- [Experimental features](https://www.meilisearch.com/docs/capabilities/platform/management/experimental_features) — accessed 2026-11-24
- [Known limitations](https://www.meilisearch.com/docs/resources/help/known_limitations) — accessed 2026-11-24
- [Pricing model](https://www.meilisearch.com/docs/capabilities/platform/billing/pricing_model) — accessed 2026-11-24
- [Create a project](https://www.meilisearch.com/docs/capabilities/platform/infrastructure/create_a_project) — accessed 2026-11-24
- [Billing overview](https://www.meilisearch.com/docs/capabilities/platform/billing/overview) — accessed 2026-11-24
