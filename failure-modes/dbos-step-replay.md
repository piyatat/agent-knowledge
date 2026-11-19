---
id: dbos-step-replay
title: DBOS reruns agent work that is not a step, and a second worker waits on Conductor
kind: knowledge
tags: [dbos, replay, durability, billing]
status: active
updated: 2026-11-19
when_to_use: A DBOS agent repeated a tool after a restart, or another worker never picked up the crashed run
---

## Summary

DBOS recovers a workflow by calling it again with the checkpointed input. Finished steps return their saved output. Model calls, tool side effects, and clocks that sit in the workflow body run again. A process that crashes on a machine with no Conductor connection stays pending until that process, or a coordinator, restarts it (`dbos`).

## Notes

- **What replay skips.** The architecture doc stores every workflow input and every step output. On recovery the workflow function is invoked again. Before each step, DBOS returns the checkpoint when one exists. The first step with no checkpoint is where the failed attempt stopped. Code between steps, including a model call you forgot to mark, executes on every recovery.
- **Wrappers are narrower than they look.** `DBOSAgent` (Pydantic AI) checkpoints the run loop, model requests, and MCP traffic. Custom tool functions are steps only when you decorate them. The OpenAI Agents and Google ADK samples decorate tools with `@DBOS.step`. The ADK sample's session service is in-memory, so conversation state outside the workflow checkpoint disappears when the process dies even though the workflow can resume. The Vercel AI integration checkpoints model calls only after `durableCalls`, and tool side effects only after `durableTools`. `durableCalls` retries model calls by default (3 attempts). `durableTools` retries are off unless you turn them on. Awaiting I/O in a callback that runs before a tool, such as `onToolExecutionStart`, can reorder parallel tool calls on recovery.
- **One database, one process, or Conductor.** Python with no `DBOS_SYSTEM_DATABASE_URL` uses SQLite, which the quickstart presents as the zero-config default and Postgres as the production store. TypeScript expects Postgres. A single process scans for pending workflows at startup and resumes them. Across machines, that handoff is Conductor (or a coordinator you run). Conductor is not on the call path: if it is unreachable, in-flight work on a live process continues, and a dead executor's run waits.
- **Conductor bills checkpoints and trusts the network you give it.** Each workflow start and each step is a checkpoint on the paid plans. Pro includes 1 million a month, then $50 per million. An agent that marks every tool and every model call spends one checkpoint per call, plus one for the turn. Self-hosted Conductor performs no authentication until OAuth is enabled. Without it, every request is a local organization admin, and websocket connections are not checked for an API key. Anyone who can reach that port can cancel, resume, fork, or delete workflows. API key secrets on hosted Conductor are shown once.
- **Streams restart.** If a model call is interrupted, recovery starts that call again and streams it again. Live readers get a `data-dbos-superseded` chunk. A re-executed tool that writes different stream chunks emits `data-dbos-tool-superseded` for the `toolCallId` to drop.

## Sources

- [DBOS architecture](https://docs.dbos.dev/architecture) — accessed 2026-11-19
- [DBOS AI quickstart](https://docs.dbos.dev/ai/ai-quickstart) — accessed 2026-11-19
- [Vercel AI SDK integration](https://docs.dbos.dev/integrations/vercel-ai) — accessed 2026-11-19
- [DBOS Conductor overview](https://docs.dbos.dev/conductor/overview) — accessed 2026-11-19
- [Self-hosting Conductor](https://docs.dbos.dev/conductor/self-hosting/hosting-conductor) — accessed 2026-11-19
- [DBOS pricing](https://www.dbos.dev/dbos-pricing) — accessed 2026-11-19
