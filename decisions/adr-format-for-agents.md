---
id: adr-format-for-agents
title: ADR format tuned for coding agents
tags: [adr, decisions, knowledge]
status: active
updated: 2026-08-15
when_to_use: Recording architecture decisions so agents can look up why without loading full history
---

## Summary

Use short Architecture Decision Records (context → decision → consequences) that agents can open via id/tags. Prefer ADRs over stuffing history into always-on rules.

## Notes

- One decision per file; stable kebab ids; link related ADRs.
- Include "when_to_use" so retrieval/skills can dispatch.
- Capture rejected alternatives briefly — agents otherwise re-propose them.
- Keep under ~150 lines; point to deeper design docs.
- Status: proposed/accepted/superseded with dates.

## Sources

- [ADRs before memory RAG](https://dev.to/shimo4228/claude-codes-memory-has-no-vectors-try-adrs-before-memory-rag-4kik) — accessed 2026-08-15
- [Knowledge corpus pattern](https://github.com/piyatat/agent-knowledge/blob/main/practices/knowledge-corpus-pattern.md) — accessed 2026-08-15
