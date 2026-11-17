---
id: mem0
title: Mem0 — hosted and self-hosted memory for agents
kind: service
tags: [mem0, memory, mcp, sdk]
status: active
updated: 2026-11-17
when_to_use: Giving an agent durable facts about a user across sessions without running your own vector store
---

## Summary

**Mem0** extracts facts from conversations and returns the ones that match a later query. The **Platform** is the hosted API and dashboard. **Open source** runs the same add, search, update, and delete loop in your process or on a server you host. A hosted MCP server exposes those operations as tools.

## Notes

- **Access.** People create an account in the Mem0 app. SDKs are the Python and JavaScript package `mem0ai`. REST calls use `Authorization: Token` against `https://api.mem0.ai`. The hosted MCP server is `https://mcp.mem0.ai/mcp`. Open source also runs as a library (`Memory` / `AsyncMemory`) or as a Docker server with its own dashboard and API keys. The install and client pages are the docs linked from `links`.
- **Auth.** Platform calls need a dashboard API key, kept off client-side code. MCP clients either complete a browser consent the first time a tool runs, or send that key as a bearer token. A missing credential returns `401`. Codex `codex mcp add` only registers stdio servers, so this HTTP server goes in `config.toml` or the app's Streamable HTTP UI. A CLI can also mint an unowned account (`mem0-agent-accounts`).
- **Scope.** Platform filter keys are an allow-list: `user_id`, `agent_id`, `app_id`, `run_id`, date fields, `categories`, `metadata`, `keywords`, `memory_ids`, plus `AND` / `OR` / `NOT`. Any other top-level key is a `400`. Open source can filter arbitrary metadata keys and has no `app_id`. `delete_all` takes entity ids as top-level arguments, not a `filters` object. Calling it with no filters is now an error (it used to wipe the project). `user_id="*"` deletes every user's memories in the project. A full wipe sets `user_id`, `agent_id`, `app_id`, and `run_id` all to `"*"`. An empty id matches every memory, so the SDKs refuse it before the request.
- **Platform vs open source.** Platform adds graph ranking, optional memory decay, temporal boosts, and Dream consolidation. Those parameters error on the open-source SDK. Open source still extracts entities for ranking and has no queryable graph. Custom categories, webhooks, export jobs, batch update/delete (up to 1000), feedback, and summaries are Platform-only. Library defaults are OpenAI `gpt-5-mini`, embeddings `text-embedding-3-small`, Qdrant under `/tmp/qdrant`, and SQLite history at `~/.mem0/history.db`, until `Memory.from_config` overrides them. The library expects `OPENAI_API_KEY` with those defaults. The comparison page counts 25 vector stores, 18 LLM providers, and 11 embedders.
- **Limits.** For the first 30 days Mem0 pays the extraction models, capped at **10,000** adds and **1,000** retrievals a month. After that, an organization owner's own OpenAI, Anthropic, Azure OpenAI, or OpenRouter key raises the cap to **50,000** adds and **10,000** retrievals with no Mem0 charge. Accounts created before **26 October 2026** keep the sponsored window until **25 November 2026**. Without a key after the window, searches still work up to 1,000 a month and new adds error. Over-limit calls error until the next month. Spend above the free cap is optional and stops at a monthly cap you set; the rate is shown when you turn it on. Starter, Growth, and Pro are no longer sold to new accounts. Organizations created through the Vercel Marketplace cannot use bring-your-own-key.
- **MCP tools.** `add_memory`, `search_memories`, `get_memories`, `get_memory`, `update_memory`, `delete_memory`, `delete_all_memories`, `delete_entities`, `list_entities`, `list_events`, `get_event_status`. Memories stored this way live in the Mem0 account.
- **Alternatives.** Letta Code (`letta-code`) when memory should travel with a coding agent. A project wiki or retrieval index (`memory-wiki-vs-rag`) when you need the source documents. Ollama (`ollama`) as the local model behind an open-source Mem0 config.
- **Caveats.** Adds send the text to the configured model provider under that provider's terms. A bad fact stays until something deletes it (`agent-memory-poisoning`). The hosted MCP server can bulk-delete. Extraction keeps the fact the model wrote, not the original turn.

## Sources

- [Mem0 introduction](https://docs.mem0.ai/introduction) — accessed 2026-11-17
- [Platform overview](https://docs.mem0.ai/platform/overview) — accessed 2026-11-17
- [Platform vs open source](https://docs.mem0.ai/platform/platform-vs-oss) — accessed 2026-11-17
- [Open source overview](https://docs.mem0.ai/open-source/overview) — accessed 2026-11-17
- [Platform quickstart](https://docs.mem0.ai/platform/quickstart) — accessed 2026-11-17
- [API reference](https://docs.mem0.ai/api-reference) — accessed 2026-11-17
- [Mem0 MCP](https://docs.mem0.ai/platform/mem0-mcp) — accessed 2026-11-17
- [Pricing FAQ](https://docs.mem0.ai/platform/pricing) — accessed 2026-11-17
- [Delete memory](https://docs.mem0.ai/core-concepts/memory-operations/delete) — accessed 2026-11-17
