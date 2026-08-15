---
id: lost-in-the-middle
title: Lost-in-the-middle context failures
tags: [context, failure-modes, tokens]
status: active
updated: 2026-08-15
when_to_use: When long prompts bury critical instructions or evidence in the middle of the window
---

## Summary

Models disproportionately attend to the start and end of long contexts; middle content is under-used ("lost in the middle"). Put critical instructions, constraints, and cited evidence near the edges or retrieve them late.

## Notes

- Prefer short always-on rules; park reference material in lookup corpora/tools.
- Re-surface key constraints just before the decision/tool-call turn.
- When stuffing RAG chunks, rank/rerank so the top evidence is not buried mid-prompt.
- Compaction should preserve head+tail constraints and drop middle chatter first.
- Eval with needle-in-haystack style probes for your harness, not only happy-path tasks.

## Sources

- [Lost in the Middle (Liu et al.)](https://arxiv.org/abs/2307.03172) — accessed 2026-08-15
- [Context Compaction: Delete Noise, Keep Signal](https://www.morphllm.com/context-compaction) — accessed 2026-08-15
