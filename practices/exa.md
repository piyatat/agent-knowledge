---
id: exa
title: Exa — web search and research API for agents
kind: service
tags: [exa, mcp, search, web]
status: active
updated: 2026-11-17
when_to_use: Giving an agent token-efficient web search, page contents, or an async research run
---

## Summary

**Exa** is a hosted search API aimed at agents: natural-language search with highlights, contents for URLs you already have, deep search, and an async **Agent** for lists and research. The API is `https://api.exa.ai`. SDKs are `exa-py` and `exa-js`. Hosted MCP is `https://mcp.exa.ai/mcp`. It is not a site crawler (`firecrawl`) and not a library-docs index (`context7`).

## Notes

- **Access.** `pip install exa-py` or `npm install exa-js`. Both read `EXA_API_KEY`. Create keys in the dashboard. Skill install: `npx skills add exa-labs/agent-skills`. Codex and ChatGPT can install the official Exa plugin; Claude Code: `claude plugin install exa@claude-plugins-official`. Cursor can use the marketplace or `~/.cursor/mcp.json` with that MCP URL. OpenAPI specs are `exa-spec.yaml` and `team-management-spec.yaml`.
- **Auth.** REST: `Authorization: Bearer` or `x-api-key`. MCP has three modes. **Keyless** (plain URL) is search and fetch at a free rate limit; `agent_run` is absent. **OAuth** is `https://mcp.exa.ai/mcp?login` (usage bills the Exa team). **API key** is the same URL plus header `x-api-key`. Search and Contents can also be paid per request with x402, without a key (`x402-payments`).
- **Limits.** Pay as you go, no subscription. Free tier is **$10** of credits on signup, resetting to $10 on the first of each month (about 2,500 Lite searches). Search `lite` is **$4 / 1k** requests for up to 10 results; `auto` / `fast` is **$7 / 1k**; each result past 10 is **$1 / 1k**. Contents is **$1 / 1k pages per content type** (`text`, `highlights`, and `summary` bill separately). Deep search is **$12–15 / 1k**. Agent fixed effort is **$0.012** (`minimal`) through **$1** (`xhigh`) per run; `auto` is metered with a default **$5** cap, `ultra` **$20**. A 429 on MCP means the connection is still on the free limit.
- **Alternatives.** Firecrawl when you need crawl, parse, or click-through on one site. A vendor docs MCP (`openai-docs-mcp`, `context7`) when the pages are that vendor’s docs, not the open web.
- **Caveats.** An explicit MCP `tools=` list **replaces** the defaults, so name every tool you still want, then restart the client. `agent_run` that outlasts one call returns `status: "running"` and an `id`; call again with `runId`. `previousRunId` starts a new follow-up. Keyless 403s on IPv6 or a proxied path (`exa-mcp-keyless`). Page text is untrusted (`prompt-injection-agent-defense`). Zero data retention is an Enterprise add-on, not the free tier.

## Sources

- [Start building with Exa](https://exa.ai/docs/index.md) — accessed 2026-11-17
- [Exa MCP](https://exa.ai/docs/get-started/exa-mcp.md) — accessed 2026-11-17
- [Pricing](https://exa.ai/docs/admin/pricing.md) — accessed 2026-11-17
- [Exa docs index](https://exa.ai/docs/llms.txt) — accessed 2026-11-17
