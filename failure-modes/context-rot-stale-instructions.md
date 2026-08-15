---
id: context-rot-stale-instructions
title: Context rot from stale instructions
tags: [context, failure-modes, rules]
status: active
updated: 2026-08-15
when_to_use: When AGENTS.md/rules/skills contradict newer decisions or outdated steps keep winning
---

## Summary

Long-lived agent context accumulates stale rules and outdated playbooks ("context rot"). Agents keep following superseded instructions until you prune, version, or revalidate them.

## Notes

- Date-stamp and revisit always-on rules; delete rules that no longer match the repo.
- Prefer linked ADRs/corpus notes over pasting permanent essays into rules.
- When behavior drifts, search for conflicting instructions before blaming the model.
- Automate freshness checks for skills/rules that cite external APIs or MCP shapes.
- Compaction should drop superseded user/assistant turns that no longer affect goals.

## Sources

- [AGENTS.md vs Cursor rules — context budget](https://github.com/piyatat/agent-knowledge/blob/main/practices/agents-md-and-rules-budget.md) — accessed 2026-08-15
- [Context Compaction](https://www.morphllm.com/context-compaction) — accessed 2026-08-15
