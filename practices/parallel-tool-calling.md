---
id: parallel-tool-calling
title: Parallel tool calling without shared-state races
tags: [tools, latency, orchestration, reliability]
status: active
updated: 2026-08-10
when_to_use: When independent tool calls can run in one model turn to cut latency
---

## Summary

Run independent, I/O-bound tools concurrently in one model round-trip; serialize writes to shared mutable state; return a per-call status envelope so one failure does not blank the whole batch.

## Notes

- Parallelize when outputs do not depend on each other and order does not matter (reads, lookups, fan-out status checks).
- Stay sequential when call B needs A's output, or when both mutate the same resource without idempotency keys.
- Build a dependency DAG when mixed: parallelize independent leaves, then join.
- On batch failure, return `{ok, error_code, latency_ms, result?}` per call — let the model retry or fall back instead of raising one unhandled exception.
- Cap total parallel width and composed observation tokens so N×cap still fits the context budget.
- Deduplicate identical consecutive tool+args pairs; loops often come from parallel races plus truncated observations.

## Sources

- [Tool Calling Best Practices for LLMs (2026)](https://ai-tldr.dev/learn/llm-apis/function-calling/tool-calling-best-practices/) — accessed 2026-08-10
- [LLM Agent Tool Result Summarization and Truncation](https://solana.garden/guides/llm-agent-tool-result-summarization-truncation-explained/) — accessed 2026-08-10
- [Writing tools for agents (Anthropic)](https://www.anthropic.com/engineering/writing-tools-for-agents) — accessed 2026-08-10
