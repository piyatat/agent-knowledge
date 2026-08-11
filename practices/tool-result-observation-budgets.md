---
id: tool-result-observation-budgets
title: Tool-result observation budgets and truncation
tags: [tools, context, tokens, truncation]
status: active
updated: 2026-08-10
when_to_use: When tool outputs blow the context window or agents loop on partial reads
---

## Summary

Treat every tool observation as a budgeted artifact: project fields server-side, paginate with cursors, and mark truncation explicitly so the model can ask for more instead of inventing completeness.

## Notes

- Declare a per-tool `max_observation_tokens` (or byte/row cap) in the adapter, not as a hope in the prompt.
- Prefer **structured projection** (allowlisted JSON fields) over mid-string cuts; silent truncation reads as a full answer.
- Return actionable metadata: `truncated: true`, `total_rows` / `returned_rows`, and `next_cursor` (or offset) when more exists.
- Put omission markers in a structural slot (`[... N lines omitted ...]`) — not trailing prose the model may ignore or treat as commentary.
- For parallel fan-out, compress each shard first, then merge summaries; do not concatenate twelve full payloads.
- Push limits into the tool API (`limit`, field selectors) so the adapter is a safety net, not routine cleanup.
- Age out or compact old observations: tool results decay in relevance faster than user instructions.

## Sources

- [Graceful tool-output truncation (Agent Patterns)](https://agentpatterns.ai/tool-engineering/graceful-tool-output-truncation/) — accessed 2026-08-10
- [Tool Results Are Context Too (Multigrid)](https://multigrid.ai/learn/tool-result-context) — accessed 2026-08-10
- [Writing tools for agents (Anthropic)](https://www.anthropic.com/engineering/writing-tools-for-agents) — accessed 2026-08-10
