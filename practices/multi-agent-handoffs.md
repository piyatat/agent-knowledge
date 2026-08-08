---
id: multi-agent-handoffs
title: Multi-agent handoffs vs agents-as-tools
tags: [multi-agent, orchestration, handoff]
status: active
updated: 2026-08-08
when_to_use: Splitting work across specialist agents or designing parent/subagent routing
---

## Summary

Use handoffs when a specialist should own the next reply; use agents-as-tools when a manager keeps ownership and calls bounded helpers.

## Notes

- Start with one agent; split only when instructions, tools, or policy truly diverge.
- Handoff = ownership transfer; agents-as-tools = nested help with manager synthesizing the answer.
- Pass structured handoff context (intent, entities, state)—not raw bloated transcripts.
- Declare topology/edges in code; keep max-step guards against ping-pong loops.
- Keep handoff descriptions short and concrete so routing stays legible in traces.

## Sources

- [OpenAI — Orchestration and handoffs](https://developers.openai.com/api/docs/guides/agents/orchestration) — accessed 2026-08-08
- [Microsoft Agent Framework — handoff orchestration](https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff) — accessed 2026-08-08
- [AI Agent Orchestration: Handoff Patterns for 2026](https://coommit.com/blog/ai-agent-orchestration-2026) — accessed 2026-08-08
