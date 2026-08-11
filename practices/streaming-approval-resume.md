---
id: streaming-approval-resume
title: Streaming runs, interruptions, and approval resume
tags: [approvals, streaming, reliability, ux]
status: active
updated: 2026-08-10
when_to_use: Agent UIs stream tokens and must pause for tool approvals or reconnect mid-run
---

## Summary

Streaming does not invent a separate approval system: wait for the run to settle, resolve interruptions, and resume the **same** serialized state — store it if humans decide later.

## Notes

- Input/output/tool guardrails and human approvals compose: auto-check vs pause-for-person.
- On stream pause, inspect interruptions/pending approvals; approve/reject; continue from stored state.
- If review happens asynchronously, persist serialized run state (or durable workflow `runId`) and resume later.
- Agent-level input guardrails often run only for the first agent; put checks next to side-effecting tools in manager graphs.
- Chat transports should reconnect to the same run stream after network drops instead of starting a duplicate loop.
- Never "approve by default" on reconnect — re-surface pending decisions.

## Sources

- [Guardrails and human review (OpenAI)](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) — accessed 2026-08-10
- [What is WorkflowAgent? (Vercel KB)](https://vercel.com/kb/guide/what-is-workflowagent) — accessed 2026-08-10
- [Agent approval workflow stack guide](https://vercel.com/kb/guide/agent-approval-workflow-stack-guide) — accessed 2026-08-10
