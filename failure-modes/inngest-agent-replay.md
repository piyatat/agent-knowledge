---
id: inngest-agent-replay
title: Inngest replays agent code outside steps and can repeat a tool
tags: [inngest, durability, replay, idempotency]
status: active
updated: 2026-11-17
when_to_use: A resumed Inngest agent takes a new path, double-sends a write, or dies on run state size
---

## Summary

Inngest resumes an agent by re-entering the function and returning saved step results. Code that sits outside a step runs again. A tool that already changed the world can run twice if the process dies before that step’s result is stored.

## Notes

- **Divergent resume.** Clocks, random values, and API calls outside `step.run` / `ctx.step.run` execute on every replay. The model then sees a different prompt than the one that chose the saved tool call. Put that work inside a step so the saved result is what the loop uses (`inngest`).
- **Repeated step ids are ordered.** The same id inside a loop (`think`, `tool-search`) is matched to the next saved occurrence. Reordering or skipping a step between deploys pairs a new call with an old result.
- **At-least-once tools.** A tool can commit a payment, email, or write and then fail before Inngest stores the return value. The retry runs the tool again. Use an idempotency key on those effects (`agent-retry-idempotency`). Throw `NonRetriableError` when a retry cannot succeed.
- **Frozen memory.** Loading history inside a step means a later resume keeps the first load, even if the store changed. Saving inside a step does not save twice; make the save an upsert in case the step itself retries.
- **Size.** Each step return is capped at **4 MiB** and the run’s state at **32 MiB**. Large tool output should be a reference, not the document. A stuck loop still consumes executions until the iteration cap or a cancel.

## Sources

- [Durable agents](https://www.inngest.com/docs/durable-execution/durable-agents) — accessed 2026-11-17
- [Durable execution limits](https://www.inngest.com/docs/durable-execution/limits) — accessed 2026-11-17
