---
id: agent-cost-step-budgets
title: Cost and step budgets for agent runs
tags: [cost, tokens, budgets, ops]
status: active
updated: 2026-08-08
when_to_use: Capping runaway tool loops, cloud agent spend, or CI eval cost
---

## Summary

Hard-limit steps, tokens, and dollars per run; measure medians in evals; fail closed when budgets trip rather than hoping the model stops.

## Notes

- Separate budgets: max tool calls / wall time / input+output tokens / $ per task.
- Eval gates should track cost and step regressions, not only pass rate.
- Prefer cheap deterministic suites per-commit; reserve LLM-judge suites for nightly.
- Progressive disclosure and smaller tool surfaces cut baseline tokens before any budget fires.
- Log budget trips with conversation/trace ids so ops can tune without disabling safety.

## Sources

- [Demystifying evals for AI agents (Anthropic) — harness + measurement](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — accessed 2026-08-08
- [Agent Evaluation Harness — CI gates including cost](https://www.kunalganglani.com/blog/agent-evaluation-harness-replay) — accessed 2026-08-08
- [Context Compaction — cost of long histories](https://www.morphllm.com/context-compaction) — accessed 2026-08-08
