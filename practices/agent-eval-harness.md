---
id: agent-eval-harness
title: Agent evaluation harness (golden tasks + CI gates)
tags: [evals, harness, ci, reliability]
status: active
updated: 2026-08-08
when_to_use: Designing offline evals, replay suites, or CI gates for tool-using agents
---

## Summary

Treat agent quality as a versioned harness: golden tasks, deterministic graders first, calibrated LLM judges, and CI gates on pass rate / steps / cost / safety—not a one-off benchmark.

## Notes

- Evaluate the **harness + model** together; prompt/tool/policy changes need the same suite as model swaps.
- Tier tasks: smoke / core / torture, drawn from real failures (wrong tool, unsafe action, retry loops).
- Prefer deterministic graders (tests pass, path/tool checks) in CI; use LLM-as-judge only for fuzzy goals and **calibrate** against human labels.
- Isolate each trial (clean env, pinned tools) and prefer **replay** of tool outputs for cheap, stable runs.
- Gate on more than accuracy: step budget, tool error rate, latency/cost caps, zero unsafe actions.
- Rotate a slice of goldens over time so the suite does not overfit.

## Sources

- [Demystifying evals for AI agents (Anthropic)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — accessed 2026-08-08
- [Agent Evaluation Harness: Replay + CI Gates](https://www.kunalganglani.com/blog/agent-evaluation-harness-replay) — accessed 2026-08-08
- [How to Build an Evaluation Harness for Your AI Agent](https://www.scien.cx/2026/07/08/how-to-build-an-evaluation-harness-for-your-ai-agent-so-it-doesnt-break-in-production/) — accessed 2026-08-08
