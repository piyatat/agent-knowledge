---
id: inngest
title: Inngest — durable steps for agent loops
kind: service
tags: [inngest, durability, orchestration, workflows]
status: active
updated: 2026-11-18
when_to_use: Running an agent loop that must retry one tool call, wait days for approval, and resume after a crash
---

## Summary

**Inngest** is a hosted durable-execution service. An agent is a function whose model calls and tool calls are steps. Completed steps are checkpointed; a crash, deploy, or wait resumes from the last one. The guide shows TypeScript, Python, and Go. This is the hosted runtime behind the checkpoint pattern in `durable-agent-workflows`, with its own replay rules (`inngest-agent-replay`).

## Notes

- **Access.** Sign up at the Inngest app (free, no card). SDKs and the durable-agents guide are on the docs linked from `links`. A local Dev Server does not need cloud keys.
- **Auth.** Cloud uses `INNGEST_SIGNING_KEY` (requests to and from your server; SDKs reject unsigned calls) and `INNGEST_EVENT_KEY` (publishing events). Both are secrets; the dashboard holds them per environment. Rotation with no downtime needs `INNGEST_SIGNING_KEY_FALLBACK` (TypeScript **3.18.0+**, Python **0.3.9+**, Go **0.7.2+**). TypeScript defaults to cloud mode: set `INNGEST_DEV=1` or `isDev: true` for the Dev Server. Python’s Dev Server also skips the keys; `INNGEST_DEV` may be `1` or a Dev Server URL.
- **Limits (Cloud).** An execution is one function run or one step. Five steps cost six executions. Free: **50,000** executions, **500,000** events, **5** concurrent steps, **256 KiB** events, **30-day** max run (sleeps count), **24-hour** traces. Pro starts at **$99/mo** (**1M** executions, **90-day** runs, **7-day** traces). Business starts at **$499/mo** (**10M** executions, **366-day** runs). A step result may be **4 MiB**; a run’s state is **32 MiB**.
- **Agent loop.** Put each model call and each tool call in its own step. `step.waitForEvent` can pause for approval without holding a worker. `step.invoke` waits for a sub-agent; `step.sendEvent` starts one and continues. Leave delegation tools off the child so agents cannot spawn without a cap. Sandboxes (`step.sandbox`) are beta, billed while running, and you destroy them on success and on failure. A nonzero command exit is a result, not an exception.
- **Alternatives.** LangGraph when the loop should be an explicit graph you host (`langgraph`). Vercel WorkflowAgent when the app is already on the AI SDK (`vercel-ai-sdk`). Cloudflare Agents when the durable store should be that platform’s SQLite (`cloudflare-agents`). Hatchet (`hatchet`) when the workers should run on hosts you operate, including Go and Ruby.
- **Caveats.** Python `group.experiment` needs an `inngest` release after **0.5.19**. Durable Endpoints suit a reply inside **60 seconds** and do not support `defer()` or `group.experiment()`. Checkpointing is on by default in the TypeScript SDK. Step results must be JSON-serializable. Free-plan trace history is a day, so debug production runs before it expires.

## Sources

- [Durable agents](https://www.inngest.com/docs/durable-execution/durable-agents) — accessed 2026-11-17
- [Durable execution limits](https://www.inngest.com/docs/durable-execution/limits) — accessed 2026-11-17
- [Pricing](https://www.inngest.com/pricing) — accessed 2026-11-17
- [Signing keys](https://www.inngest.com/docs/platform/signing-keys) — accessed 2026-11-17
- [TypeScript environment variables](https://www.inngest.com/docs/sdk/environment-variables) — accessed 2026-11-17
- [Python environment variables](https://www.inngest.com/docs/reference/python/overview/env-vars) — accessed 2026-11-17
