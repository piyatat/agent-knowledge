---
id: prompt-caching-for-agents
title: Prompt caching discipline for agent loops
tags: [caching, tokens, cost, context]
status: active
updated: 2026-08-09
when_to_use: Cutting input cost/latency on multi-turn agents with large system prompts or tool schemas
---

## Summary

Cache hits require a stable exact prefix. Keep tools/system frozen; put dynamic bits later; monitor cache-read metrics; avoid mid-session tool-set churn.

## Notes

- Any change early in the prefix (date stamp, reordered tools, model switch) busts the rest of the cache.
- Anthropic: place explicit `cache_control` breakpoints on the last static block; optional pre-warm with max_tokens:0.
- OpenAI: automatic caching for eligible prefixes; use stable `prompt_cache_key` where supported.
- Deferred/progressive tool loading can add tools without rewriting the cached always-on set.
- Track cache_read vs cache_write tokens—writes are expensive; only cache prefixes you reuse.

## Sources

- [OpenAI — Prompt caching](https://developers.openai.com/api/docs/guides/prompt-caching) — accessed 2026-08-09
- [Anthropic skills — prompt caching guidance](https://github.com/anthropics/skills/blob/main/skills/claude-api/shared/prompt-caching.md) — accessed 2026-08-09
- [Tool use with prompt caching (Claude)](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching) — accessed 2026-08-09
