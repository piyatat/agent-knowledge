---
id: durable-agent-workflows
title: Durable agent workflows and checkpointed steps
tags: [workflows, durability, reliability, approvals]
status: active
updated: 2026-08-10
when_to_use: Agent loops must survive crashes, timeouts, or hours-long human approvals
---

## Summary

Run long agent loops inside a durable workflow runtime so each tool call is a checkpointed step with retries, and approvals can suspend for hours without losing message history.

## Notes

- In-memory agent loops die on process restart; durable runtimes persist state across boundaries.
- Mark tool executes as discrete **steps** so failures retry from the last checkpoint, not from turn zero.
- First-class `needsApproval` (or equivalent) should suspend the workflow and resume when the user answers — even days later.
- Keep cross-step context **serializable** (IDs, configs); recreate DB clients and SDK handles inside the step.
- Pair with stream reconnect (`runId`) so chat UIs survive network drops without restarting the agent.
- Observability comes free when each tool call is a visible step with inputs/outputs/retries.

## Sources

- [WorkflowAgent (AI SDK)](https://ai-sdk.dev/docs/agents/workflow-agent) — accessed 2026-08-10
- [What is WorkflowAgent? (Vercel KB)](https://vercel.com/kb/guide/what-is-workflowagent) — accessed 2026-08-10
- [Agent approval workflow stack guide](https://vercel.com/kb/guide/agent-approval-workflow-stack-guide) — accessed 2026-08-10
