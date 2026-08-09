---
id: subagent-context-isolation
title: Subagent context isolation
tags: [subagent, context, orchestration, tokens]
status: active
updated: 2026-08-09
when_to_use: Spawning child agents or Task seats without leaking the parent’s full transcript
---

## Summary

Give subagents a packed brief (goal, constraints, files)—not the parent chat. Return a structured summary upward; keep secrets and huge tool dumps out of both sides.

## Notes

- Parent relays; children should not peer-chat or inherit unrelated history.
- Pass task + ranked file excerpts + bans; omit credentials and PII.
- Demand a fixed return shape (summary, files touched, risks) for cheap parent synthesis.
- Cap child budgets (steps/tokens) separately from the parent.
- Isolation also limits prompt-injection blast radius across seats.

## Sources

- [OpenAI — Orchestration and handoffs](https://developers.openai.com/api/docs/guides/agents/orchestration) — accessed 2026-08-09
- [Microsoft Agent Framework — handoff vs agents-as-tools](https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff) — accessed 2026-08-09
- [Context compaction patterns](https://www.morphllm.com/context-compaction) — accessed 2026-08-09
