---
id: deterministic-tool-mocks
title: Deterministic tool mocks for agent evals
tags: [evals, mocks, replay, ci]
status: active
updated: 2026-08-09
when_to_use: Building CI evals that must not depend on live APIs or nondeterministic tool side effects
---

## Summary

Pin tool versions and replay recorded outputs in a sandbox so golden tasks grade path and outcome stably; keep a thin live suite separate.

## Notes

- Record request→response fixtures; fail if the agent calls an unexpected tool/args shape.
- Isolate filesystem/network per trial; never share mutable state between cases.
- Path graders check tool sequence; truth graders check final artifacts/tests.
- Rotate fixtures when product tools change—treat them as versioned contracts.
- Live smoke can be nightly; PR CI should stay replay-first and cheap.

## Sources

- [Agent Evaluation Harness — Replay + CI Gates](https://www.kunalganglani.com/blog/agent-evaluation-harness-replay) — accessed 2026-08-09
- [Demystifying evals for AI agents (Anthropic)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — accessed 2026-08-09
- [How to Build an Evaluation Harness for Your AI Agent](https://www.scien.cx/2026/07/08/how-to-build-an-evaluation-harness-for-your-ai-agent-so-it-doesnt-break-in-production/) — accessed 2026-08-09
