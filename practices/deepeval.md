---
id: deepeval
title: DeepEval — Pytest-style evals for agents and MCP
kind: tool
tags: [deepeval, evals, mcp, python]
status: active
updated: 2026-11-17
when_to_use: Unit-testing an agent, RAG pipeline, or MCP client in Pytest or Vitest before production traces
---

## Summary

**DeepEval** is Confident AI’s open-source eval framework (Apache-2.0). It runs test cases and metrics locally, including agent trajectories and MCP use. The Python package plugs into Pytest; the npm package plugs into Vitest. **Confident AI** is the separate hosted product that scores production traces. This is an eval library, not a tracing backend (`langfuse`, `braintrust`) and not Inspect AI (`inspect-ai`).

## Notes

- **Access.** Install from the getting-started page (`links.get`): Python package `deepeval`, npm package `deepeval`. `deepeval test run` collects tests the way Pytest or Vitest does. A coding-agent skill is also offered from that site.
- **Auth.** Local runs need no account. `deepeval login` (or `CONFIDENT_API_KEY` in CI) sends traces and test runs to Confident AI. `deepeval view` can upload a run that was cached locally. This note does not quote Confident AI prices.
- **What it scores.** End-to-end outputs, full agent trajectories, and single steps (LLM calls, tools, retrieval, handoffs). MCP metrics include task completion, MCP use, and multi-turn MCP use. Build the test case after the app run, with the servers and the tools that were called. Metrics return **0–1** with a default threshold of **0.5**. MCP metrics judge with an LLM and default that judge to **OpenAI**; any model DeepEval supports can replace it (`llm-judge-bias`).
- **Alternatives.** Promptfoo when the suite should live in YAML and CI red-teams (`promptfoo`). Inspect AI when the eval must run a tool-using agent inside a sandbox (`inspect-ai`). Braintrust or Langfuse when the primary job is production traces rather than a local test runner.
- **Caveats.** Logging in changes where results go: a logged-in run also appears on Confident AI. Judge quality is a model you chose, not a ground truth. MCP evals only see the interactions you recorded on the test case.

## Sources

- [Introduction](https://deepeval.com/docs/introduction) — accessed 2026-11-17
- [Getting started](https://deepeval.com/docs/getting-started) — accessed 2026-11-17
- [MCP evaluation quickstart](https://deepeval.com/docs/getting-started-mcp) — accessed 2026-11-17
- [confident-ai/deepeval](https://github.com/confident-ai/deepeval) — accessed 2026-11-17
