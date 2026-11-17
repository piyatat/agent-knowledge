---
id: tavily
title: Tavily — search, extract, and research API for agents
kind: service
tags: [tavily, mcp, search, web]
status: active
updated: 2026-11-17
when_to_use: Giving an agent ranked web search and URL extracts, or a keyed crawl and research run
---

## Summary

**Tavily** is a hosted search API for agents. Search returns ranked results; Extract returns page content; Crawl, Map, and Research need an API key. The REST host is `https://api.tavily.com`. The remote MCP server is `https://mcp.tavily.com/mcp/`. It overlaps Exa on search and Firecrawl on crawl; library docs still belong on a docs index (`context7`).

## Notes

- **Access.** Sign in at the Tavily app. Remote MCP works from Claude, Codex, Cursor, VS Code, and other HTTP MCP clients. A local server is the npm package `tavily-mcp` (Node.js 20+). The docs pages linked from `links` are the install and client guides.
- **Auth.** OAuth on the bare MCP URL uses that account’s `mcp_auth_default` key (created if missing). Each connect asks personal vs organization. An organization has one such key, including for members outside the workspace that holds it; if personal accounts are disabled, Personal is not offered. Losing the account or the key fails the next request until you reconnect. Tavily does not switch accounts on its own. An API key (prefix `tvly-`) can go in `Authorization: Bearer` or the `tavilyApiKey` query. Keyless calls send `X-Tavily-Access-Mode: keyless` and only cover Search and Extract (`tavily-mcp-keyless`).
- **Limits.** Researcher is **1,000 credits/month**, no card, resetting on the first of each month. Pay as you go is **$0.008** per credit. Project is **$30** for 4,000 credits. Basic search is **1** credit; advanced is **2**. Basic extract is **1** credit per **5** successful URLs (advanced **2**); failed URLs are not charged. Map is **1** credit per **10** pages, **2** with natural-language instructions. Crawl is map plus extract. Research `mini` is **4–110** credits per request; `pro` is **15–250**.
- **Attribution.** Remote MCP sets `X-Session-Id` from the MCP session id. `X-Human-Id` (header or `humanId` query) is forwarded and hashed before storage. A `DEFAULT_PARAMETERS` header (or env on the local server) sets defaults such as `search_depth` and `max_results`.
- **Alternatives.** Exa when you want its research Agent and highlight pricing (`exa`). Firecrawl when the job is crawl, parse, or click-through on one site (`firecrawl`).
- **Caveats.** A key in the MCP URL can land in client config and logs. Page text is untrusted (`prompt-injection-agent-defense`). Docs spell tool names with hyphens on the keyless page and underscores on the MCP page; use the names `tools/list` returns.

## Sources

- [Tavily MCP](https://docs.tavily.com/documentation/mcp) — accessed 2026-11-17
- [Try Tavily without an API key](https://docs.tavily.com/documentation/keyless) — accessed 2026-11-17
- [Credits and pricing](https://docs.tavily.com/documentation/api-credits) — accessed 2026-11-17
- [Tavily pricing](https://www.tavily.com/pricing) — accessed 2026-11-17
