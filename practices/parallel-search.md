---
id: parallel-search
title: Parallel — web search and research APIs for agents
kind: service
tags: [parallel, search, mcp, web]
status: active
updated: 2026-11-20
when_to_use: Giving an agent web excerpts, a page fetch, or a researched answer from Parallel
---

## Summary

**Parallel** (Parallel Web Systems) is a hosted web API for agents. Search returns ranked excerpts, Extract reads URLs, and Task, Responses, Monitor, and FindAll cover longer research. The REST host is `https://api.parallel.ai`. A hosted MCP server is `https://mcp.parallel.ai/mcp`. Sign-up and keys are on the platform (`links.get`).

## Notes

- **Access.** Create a key on the platform, then call Search at `POST /v1/search`. Python and TypeScript clients are the `parallel-web` packages named in the quickstart. The MCP quickstart is the pointer for Claude, ChatGPT, Cursor, Codex, and other clients. One-click install links live at `parallel.ai/mcp`.
- **Auth.** REST sends the key in `x-api-key`. MCP has three modes. **No key** on `https://mcp.parallel.ai/mcp` allows `web_search`, `web_fetch`, `web_decisions`, and `image_search` in `fast` mode, at a lower personal limit; `web_research` requires a sign-in. **OAuth** uses the same URL with `?login`. **API key** sends `Authorization: Bearer` or `x-api-key`. Keyed MCP calls bill the account and report cost in `_meta["parallel/usage"]`. Calls without a key are free and omit that usage block.
- **Plans (pricing page, 2026-11-20).** Launch is the free MCP path: search, fetch, and grounded decisions, variable personal limits, no account, and no SOC 2 coverage. Build is pay-as-you-go: up to **$80** at signup, **$5** free each month once a card is on file, then published rates. Search and Extract are **600/min**. Scale is **$1,000/month** for $1,000 of credits that do not roll over, or **$10,000/year** for $12,000 drawn down over 12 months. Scale raises Search and Extract to **1,500/min**, excluding Turbo, and includes Hybrid zero data retention after a signed agreement. Enterprise adds SSO, a HIPAA BAA, and an uptime SLA. Qualified startups can receive up to **$250**.
- **Search price.** A request includes 10 results. `turbo` and `fast` are **$1 / 1,000** requests. `basic` and `advanced` are **$5 / 1,000**. Results past the first 10 are **$1 / 1,000**. Extract is **$1 / 1,000** URLs. Task processors run **$5–$2,400 / 1,000** successful runs; failed runs are not billed. Responses `medium` (the API default) is **$50 / 1,000** successful requests.
- **Alternatives.** Exa (`exa`), Tavily (`tavily`), Brave Search (`brave-search-api`), or Perplexity (`perplexity-agent-api`) when that key is already in the agent. Firecrawl (`firecrawl`) when the job is crawling one site.
- **Caveats.** REST Search defaults to `advanced`. A body that only sends `objective`, or that puts v1beta fields at the top level, returns **422**. The EU host only accepts `basic`. Details: `parallel-search-default-mode`. Excerpts are untrusted page text (`prompt-injection-agent-defense`).

## Sources

- [Get started](https://platform.parallel.ai) — accessed 2026-11-20
- [Parallel](https://parallel.ai/) — accessed 2026-11-20
- [Pricing](https://parallel.ai/pricing) — accessed 2026-11-20
- [Search API quickstart](https://docs.parallel.ai/search/search-quickstart) — accessed 2026-11-20
- [Search modes](https://docs.parallel.ai/search/modes) — accessed 2026-11-20
- [Search API best practices](https://docs.parallel.ai/search/best-practices) — accessed 2026-11-20
- [API pricing](https://docs.parallel.ai/getting-started/pricing) — accessed 2026-11-20
- [Rate limits](https://docs.parallel.ai/getting-started/rate-limits) — accessed 2026-11-20
- [Parallel MCP server](https://docs.parallel.ai/integrations/mcp/quickstart) — accessed 2026-11-20
