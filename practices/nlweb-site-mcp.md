---
id: nlweb-site-mcp
title: NLWeb — site /ask and /mcp for agents
tags: [nlweb, mcp, web, discovery]
status: active
updated: 2026-08-31
when_to_use: Exposing a website’s catalog to agents via natural language instead of scraping HTML
---

## Summary

**NLWeb** (Microsoft, MIT) is an open toolkit so a site can answer natural-language questions from markup it already publishes (Schema.org, RSS). Every instance is also an **MCP server**. It is **not** WebMCP (in-page browser tools) and **not** a ratified W3C/IETF spec — the GitHub tree is the implementation.

## Notes

- Two HTTP surfaces share arguments: **`/ask`** (JSON for humans/UIs) and **`/mcp`** (MCP-shaped answers plus `list_tools`, `list_prompts`, `call_tool`, `get_prompt`). Required arg: `query`. Optional: `site` (subset token), `prev` (prior queries), `decontextualized_query`, `streaming` (default on), `query_id`, `mode`.
- `mode`: `list` (default — ranked matches), `summarize` (list + summary), `generate` (RAG-style LLM answer). Results carry `url`, `name`, `site`, `score`, `description`, `schema_object`. The sample server is **stateless** — pass conversation context on each request.
- Microsoft’s framing: NLWeb is to MCP/A2A what HTML is to HTTP. Core MCP method advertised: `ask`. A2A support is described as forthcoming in the README, not a shipped guarantee.
- Repo modules: AskAgent (query + ingestion + sample UI), AgentFinder (discovery/routing), DataFinder (NL→SQL over enterprise sources), ModelRouter, NLWebScorer. Vector stores and LLM connectors are pluggable (Qdrant, Azure AI Search, Postgres, OpenAI, Anthropic, Gemini, …).
- Treat `/mcp` like any other remote MCP: auth, rate limits, logging, and `generate` mode cost. Content quality is capped by Schema.org/RSS quality. Do not confuse this with `llms.txt` (a static file) or WebMCP (client-side tools).

## Sources

- [NLWeb README](https://github.com/microsoft/NLWeb) — accessed 2026-08-31
- [NLWeb REST API](https://github.com/microsoft/NLWeb/blob/main/docs/nlweb-rest-api.md) — accessed 2026-08-31
