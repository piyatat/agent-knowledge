---
id: algolia
title: Algolia — hosted catalog search and read-only MCP
kind: service
tags: [algolia, search, catalog, mcp]
status: active
updated: 2026-11-23
when_to_use: Searching a product or content catalog, or letting an agent query an Algolia index through MCP
---

## Summary

**Algolia** is hosted keyword search for a catalog you index: products, docs, or other records. Higher plans add recommendations, rules, and AI ranking. Four hosted MCP servers exist. Public MCP searches selected indices and is read-only. Productivity MCP is a signed-in, read-only view of whatever that user may already see. DevEx MCP returns client snippets and does not read your indices. DocSearch MCP searches public documentation. Use Algolia when the task is search over your own catalog. Use Exa (`exa`), Tavily (`tavily`), or Parallel (`parallel-search`) for the public web, and a vector store such as Pinecone (`pinecone`) when the query is an embedding.

## Notes

- **Access.** Sign up at `links.get`. Calls need an application ID and an API key. The Admin API key is the sensitive one. The Search-only API key can search every index in the application and is what frontend code usually ships. Algolia’s own key guide says a leaked search-only key can scrape the indices and flood the account with search requests. Secured API keys are derived from a main key, inherit its restrictions, and cannot loosen them. They are not listed in the dashboard. Deleting the parent key deletes every secured key derived from it, and restoring the parent does not restore those secured keys. Keys issued for a team member are removed with that member. Keys that member created by hand stay until someone deletes them.
- **MCP.** Public MCP is created in the dashboard: up to five server instances per application, and up to five indices plus any Recommend models on each instance. The server URL is `https://{APP_ID}.algolia.net/mcp/1/{UNIQ_ID}/mcp`. The client has no authentication of its own. The server uses the Search API key stored for that instance. A request may send `x-algolia-api-key`; that key is used instead. Delete the stored key to make the header required. Tools are `algolia_search_{index_name}`, `algolia_search_for_facet_values`, and `algolia_recommendations`. ChatGPT also expects `search` and `fetch`. Public and Productivity MCP cannot create, update, or delete indices, records, or settings. Each Public MCP tool call typically counts as one API request on the existing plan. There is no separate MCP fee.
- **Plans (pricing page and Grow billing article, 2026-11-23).** Free, no card: 10,000 search requests, 50,000 records, 5,000 recommendation requests, and 5,000 crawls a month; 1 application; 20 indices; 1 GB application and index; 10 KB maximum record; 7-day analytics. Grow: 10,000 search requests then $0.50 per 1,000; 100,000 records then $0.40 per 1,000; 10,000 recommendation requests then $0.60 per 1,000; 10,000 crawls then $0.80 per 1,000; 1 application; 50 indices; 100 GB; records average 10 KB and max 100 KB; 10 rules per index; 30-day analytics; US, UK, and EU. Grow Plus uses the same record price and charges $1.75 per 1,000 search requests past 10,000, with AI ranking features, 10,000 rules per index, and 90-day analytics. Elevate is an annual contract. One search request is one network call and can bundle up to 50 queries. A standard replica copies records (10,000 records and two standard replicas count as 30,000). A virtual replica does not. Each month the three days with the most records are ignored. On Grow, indexing operations are not charged, with a protective limit of 10,000 indexing operations per 1,000 search requests and records used. Unused monthly allowance does not roll over.
- **Caveats.** The Public MCP URL is a credential, and replica copies move the record bill. Details: `algolia-public-mcp-and-replicas`.

## Sources

- [Algolia MCP servers](https://www.algolia.com/doc/guides/model-context-protocol) — accessed 2026-11-23
- [Algolia Public MCP](https://www.algolia.com/doc/guides/model-context-protocol/public-mcp) — accessed 2026-11-23
- [Algolia API keys](https://www.algolia.com/doc/guides/security/api-keys) — accessed 2026-11-23
- [Algolia pricing](https://www.algolia.com/pricing) — accessed 2026-11-23
- [How am I billed on the Grow plan?](https://support.algolia.com/hc/en-us/articles/15745996583441-How-am-I-billed-on-the-Grow-plan) — accessed 2026-11-23
- [Algolia sign-up](https://dashboard.algolia.com/users/sign_up) — accessed 2026-11-23
