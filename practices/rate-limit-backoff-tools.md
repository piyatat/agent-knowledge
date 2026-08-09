---
id: rate-limit-backoff-tools
title: Rate limits and backoff for agent tools
tags: [rate-limit, backoff, ops, tools]
status: active
updated: 2026-08-09
when_to_use: Agents hammer APIs (GitHub, LLM, SaaS) and trip 429s or burn quotas
---

## Summary

Honor Retry-After, use exponential backoff with jitter, serialize hot keys, and fail the task when budgets expire instead of tight-looping.

## Notes

- Centralize HTTP clients so every tool shares backoff policy.
- Distinguish user-level vs app-level quotas; shed load with coherent errors to the model.
- Cache GETs briefly when safe; coalesce identical in-flight requests.
- Eval suites should mock 429s so agents learn to wait, not thrash.
- Emit span events on rate-limit waits for ops dashboards.

## Sources

- [OpenAI prompt caching — traffic/key guidance](https://developers.openai.com/api/docs/guides/prompt-caching) — accessed 2026-08-09
- [Agent cost/step budgets (related corpus note)](https://github.com/piyatat/agent-knowledge/blob/main/practices/agent-cost-step-budgets.md) — accessed 2026-08-09
- [MCP security — rate limit by agent identity](https://apiscout.dev/guides/anthropic-mcp-server-security-2026) — accessed 2026-08-09
