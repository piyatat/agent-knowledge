---
id: durable-agent-workflows
title: Durable agent workflows and checkpointed steps
tags: [workflows, durability, reliability, approvals]
status: active
updated: 2026-11-19
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
- Inngest is one hosted runtime for this pattern (`inngest`): each model call and tool call is a step, and clocks, randomness, and external calls stay inside the step so a resume replays the same path (`inngest-agent-replay`).
- Temporal (`temporal`) is another: the Workflow holds the loop, and model calls and other I/O run as Activities so a replay does not call them again (`temporal-workflow-io`).
- Restate (`restate`) journals each model call and tool step on a server you run or on Restate Cloud. Parallel tool calls and a streamed response inside a step break that journal (`restate-agent-journal`).
- DBOS (`dbos`) checkpoints the same loop in Postgres you operate (SQLite for a single Python process). A model or tool call that is not a step runs again on recovery, and a second worker picks up a crashed run only when Conductor is connected (`dbos-step-replay`).

## Sources

- [WorkflowAgent (AI SDK)](https://ai-sdk.dev/docs/agents/workflow-agent) — accessed 2026-08-10
- [What is WorkflowAgent? (Vercel KB)](https://vercel.com/kb/guide/what-is-workflowagent) — accessed 2026-08-10
- [Agent approval workflow stack guide](https://vercel.com/kb/guide/agent-approval-workflow-stack-guide) — accessed 2026-08-10
- [Durable agents (Inngest)](https://www.inngest.com/docs/durable-execution/durable-agents) — accessed 2026-11-17
- [Durable AI (Temporal)](https://docs.temporal.io/ai) — accessed 2026-11-18
- [Durable agents (Restate)](https://docs.restate.dev/ai/patterns/durable-agents) — accessed 2026-11-19
- [DBOS AI quickstart](https://docs.dbos.dev/ai/ai-quickstart) — accessed 2026-11-19
