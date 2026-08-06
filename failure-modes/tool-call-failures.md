---
id: tool-call-failures
title: Tool-call failure modes and mitigations
tags: [tools, schema, hallucination, reliability]
status: active
updated: 2026-08-06
when_to_use: Debugging flaky agents, designing harness validation, or evaluating local models
---

## Summary

Many “dumb agent” bugs are **tool-calling** bugs: wrong args, drifted schemas across turns, invented tool names, or args that pass JSON Schema but point at nonexistent entities.

## Common modes

| Mode | What happens | Mitigation |
| --- | --- | --- |
| Wrong arguments | Valid-looking JSON, wrong field names/types | Strict schemas; `additionalProperties: false`; return schema errors to the model |
| Schema drift | Later turns drop required fields | Re-inject tool schemas periodically on long runs |
| Hallucinated tool name | Invented or fuzzy-matched name | Allowlist dispatch; typed “unknown tool” error; no silent fuzzy match |
| Referent hallucination | IDs/paths pass schema but don’t exist | App-layer existence checks before side effects |
| Tool bypass | Answers from weights instead of tools | Prompt + evals that require tool use for factual ops |
| Local/small-model fragility | Higher rates of the above under long context | Grammar-constrained JSON; smaller tool sets; retry budgets |

## Notes

- Schema validation is necessary but not sufficient — add **referent** checks (does this order/file/id exist?).
- Prefer returning structured errors the agent can read over crashing the host or auto-correcting silently.
- Keep tool surfaces small and descriptions crisp (see `tool-description-hygiene`, `mcp-progressive-disclosure`).

## Sources

- [Hallucinated tool argument that passed schema validation (Tian Pan)](https://tianpan.co/blog/2026-06-02-the-hallucinated-tool-argument-that-passed-schema-validation) — accessed 2026-08-06
- [Local coding agent failure modes (SpecPicks)](https://specpicks.com/reviews/local-coding-agent-small-model-failure-modes-2026) — accessed 2026-08-06
- [AI agent hallucinations / tool errors (Manveer)](https://manveerc.substack.com/p/ai-agent-hallucinations-prevention) — accessed 2026-08-06
- [Hallucinated tools pattern (Agent Patterns Catalog)](https://www.agentpatternscatalog.org/patterns/hallucinated-tools/) — accessed 2026-08-06
