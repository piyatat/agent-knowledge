---
id: algolia-public-mcp-and-replicas
title: An Algolia MCP URL exposes the index, or replicas inflate the record count
kind: knowledge
tags: [algolia, mcp, search, billing]
status: active
updated: 2026-11-23
when_to_use: An Algolia MCP URL leaked index data, a search bill jumped, or replicas pushed records over the allowance
---

## Summary

Algolia Public MCP (`algolia`) does not authenticate the client. Anyone who has the server URL searches with the Search API key stored on that instance. The server is read-only, so it cannot fix a bad record. On Grow, standard replicas are extra records, and each MCP tool call typically spends one of the included search requests.

## Notes

- **URL is the credential.** The documented client setup sets authentication to none. Requests without `x-algolia-api-key` use the stored Search API key, which can read every index that key allows. Algolia’s key guide says a search-only key in the open can be used to scrape indices and to send enough searches to run up usage. Treat the MCP URL like that key: do not commit it, and delete or rotate the stored key if it leaks. Sending `x-algolia-api-key` overrides the stored key for that request. Deleting the stored key makes the header required. A secured key cannot be broader than its parent. Deleting the parent invalidates every secured key derived from it, including after the parent is restored.
- **Read-only.** Public MCP can search, list facet values, and fetch recommendations. It cannot create, update, or delete indices, records, or settings. An agent that needs to reindex has to use the dashboard, the CLI, or an API client with an indexing key. Productivity MCP is also read-only; it follows the signed-in user’s permissions and adds analytics. DevEx MCP and DocSearch MCP do not read the application’s indices.
- **Bills.** Public MCP usage is ordinary Algolia usage. The guide says each tool call typically maps to one API request. Free includes 10,000 search requests and 50,000 records a month. Grow includes 10,000 requests and 100,000 records, then $0.50 per 1,000 requests and $0.40 per 1,000 records. Grow Plus search overage is $1.75 per 1,000. One HTTP call can bundle up to 50 queries and still count as one request, but separate tool calls do not bundle themselves. Allowance does not roll over.
- **Replicas and reindex days.** A primary index of 10,000 records plus two standard replicas counts as 30,000 records. Virtual replicas add none. Algolia drops the three highest-record days each month before billing records, which covers a reindex spike and does not cover a replica left in place all month. Indexing itself is not a Grow line item. A protective limit still applies: 10,000 indexing operations per 1,000 search requests and records used that month.

## Sources

- [Algolia Public MCP](https://www.algolia.com/doc/guides/model-context-protocol/public-mcp) — accessed 2026-11-23
- [Algolia MCP servers](https://www.algolia.com/doc/guides/model-context-protocol) — accessed 2026-11-23
- [Algolia API keys](https://www.algolia.com/doc/guides/security/api-keys) — accessed 2026-11-23
- [How am I billed on the Grow plan?](https://support.algolia.com/hc/en-us/articles/15745996583441-How-am-I-billed-on-the-Grow-plan) — accessed 2026-11-23
- [Algolia pricing](https://www.algolia.com/pricing) — accessed 2026-11-23
