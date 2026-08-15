---
id: agent-model-routing-fallback
title: Model routing and fallback for agents
tags: [routing, reliability, cost]
status: active
updated: 2026-08-15
when_to_use: Selecting primary vs fallback models when quality, latency, or provider errors demand it
---

## Summary

Route easy steps to cheaper/faster models and reserve frontier models for hard turns. Define explicit fallbacks on timeouts, 429s, and quality gates — not silent provider defaults.

## Notes

- Classify turns (plan/code/review) and map to model tiers.
- Fallback must preserve tool schemas and conversation ids.
- Cap fallback retries; cascading to the most expensive model on every blip burns budget.
- Log which model served each turn for cost autopsy.
- Eval routing decisions; wrong demotions cause subtle quality regressions.

## Sources

- [Agent cost/step budgets (corpus)](https://github.com/piyatat/agent-knowledge/blob/main/practices/agent-cost-step-budgets.md) — accessed 2026-08-15
- [Rate limits and backoff (corpus)](https://github.com/piyatat/agent-knowledge/blob/main/practices/rate-limit-backoff-tools.md) — accessed 2026-08-15
