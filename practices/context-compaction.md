---
id: context-compaction
title: Context compaction for long-running agents
tags: [context, tokens, compaction, memory]
status: active
updated: 2026-08-08
when_to_use: Long agent sessions hit token limits, cost spikes, or lose the plot after tool-heavy loops
---

## Summary

Shrink history by deleting or collapsing low-signal tokens (especially old tool outputs) before aggressive summarization; trigger early enough to leave headroom.

## Notes

- Observation masking (replace old tool payloads with placeholders, keep actions) often matches summarization quality at far lower cost.
- Prefer a pipeline: gentle tool-result collapse → structured summary (goal / files / decisions / errors) → truncation last.
- Trigger around ~75–80% of the window—not at the ceiling—so the summary itself fits.
- Preserve verbatim high-value bits: recent turns, error text, exact paths, constraints.
- After compaction, avoid immediately re-ingesting huge artifacts (re-read loops cause thrash).

## Sources

- [Context Compaction: Delete Noise, Keep Signal](https://www.morphllm.com/context-compaction) — accessed 2026-08-08
- [Microsoft Agent Framework — compaction](https://learn.microsoft.com/en-us/agent-framework/agents/conversations/compaction) — accessed 2026-08-08
- [Collet research notes on context management](https://github.com/epicsagas/collet/blob/main/docs/research/context-management.md) — accessed 2026-08-08
