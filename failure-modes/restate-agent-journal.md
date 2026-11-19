---
id: restate-agent-journal
title: A Restate agent journal breaks on parallel tools, streams, and swallowed errors
kind: knowledge
tags: [restate, replay, durability, billing]
status: active
updated: 2026-11-19
when_to_use: A Restate agent double-called a tool, sent a suspension error to the model, or exhausted the monthly action allotment
---

## Summary

Restate replays a handler from its journal. Completed `ctx.run` steps return the recorded result. Tool calls that finish in a different order, a streamed model response inside a step, or an agent SDK that catches Restate's suspension error and feeds it to the model make that replay diverge. Each step also spends a Cloud action (`restate`).

## Notes

- **What is recorded.** The durable-agents guide journals the handler. On restart, finished steps are not executed again; execution continues at the first incomplete step. LLM calls and tool side effects belong inside `ctx.run`. Wrapping the entire agent loop in one step is valid and coarse: a crash in the last tool reruns the whole loop, including model calls that already succeeded.
- **Parallel tools.** Agent SDKs fan out tools with `asyncio.gather` or `Promise.all`. Restate's integration guide says completion order can change on the next attempt, so the journal no longer matches. Run tools one after another, or use Restate's concurrent-task primitives, which record a stable order.
- **Streaming and randomness.** A `ctx.run` block does not stream. Turn streaming off or wait for the full model response before the step returns. IDs, timestamps, and other values the SDK mints have to be written into the journal or the replay takes a different branch. Built-in tools (web search, database reads) need the same wrap.
- **Errors the model must not see.** A terminal error is Restate's signal to stop retrying. A suspension error is how an idle handler is parked. Several agent SDKs catch every tool exception and pass the text to the next model turn. Both of those errors have to propagate out of the tool. Cap `ctx.run` retries on model calls so a stuck provider does not retry without a limit.
- **Actions.** On Cloud, a step, a state read or write, a sleep, an RPC, and the handler start and completion are each an action. Payload-bearing actions add one action per started 64KiB. The free tier is 100,000 actions a month. A loop that checkpoints every token of state, or that wraps nothing and then retries the whole agent, spends that allotment on replay work. Past the included amount, overage is billed and throughput is rate-limited per plan.

## Sources

- [Integrating Restate with agent SDKs](https://docs.restate.dev/ai/sdk-integrations/integration-guide) — accessed 2026-11-19
- [Durable agents](https://docs.restate.dev/ai/patterns/durable-agents) — accessed 2026-11-19
- [Restate pricing](https://restate.dev/pricing) — accessed 2026-11-19
