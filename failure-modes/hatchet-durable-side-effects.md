---
id: hatchet-durable-side-effects
title: A Hatchet durable task replays its body, and the free cap drops new runs
kind: knowledge
tags: [hatchet, replay, durability, billing]
status: active
updated: 2026-11-18
when_to_use: A Hatchet durable task sent a duplicate write, or a new run was rejected after the daily or queue cap
---

## Summary

Hatchet records child runs and waits, then replays the durable-task body up to the last checkpoint. A database write, an email, or a random branch in that body runs again after eviction or a worker restart. On the no-card limits, passing the daily cap drops new tasks (`hatchet`).

## Notes

- **What is checkpointed.** A durable task waits (sleep or event) and spawns children. Each of those writes a checkpoint. On resume, completed child operations are not executed again. The code path that led to each checkpoint does run again. The durable-tasks page says that body has to be deterministic given the event history: do not call a database or an external API directly, and do not branch on random numbers or wall-clock time. Put those calls in child tasks and branch on their results. The page describes this as exactly-once for the recorded operations, which is a different claim from "the function body ran once."
- **Eviction makes the replay ordinary.** A waiting durable task can leave the worker so the slot can take other work, then come back and replay. The eviction page says non-idempotent writes, emails, and expensive work in the durable task run again on every resume. Turning eviction off (no TTL, and capacity eviction disabled) keeps the slot for the whole wait, including a multi-day approval.
- **Ordinary tasks do not get that replay.** A non-durable task holds its slot until it finishes, including while it is idle. It is not restored from a durable event log. A retry of a failed run is still one billed task run, however many attempts it takes. A child the agent spawns is a second run.
- **Caps that look like bugs.** With no card, **2,000** task runs or **2,000** events in a day is the limit. The pricing FAQ says you are alerted as you approach it, and that past the limit new tasks are dropped. An agent that spawns a child per tool call spends the cap once per tool, not once per user turn. A full backlog rejects new tasks: **10,000** with no card, **1,000,000** with a card. Durable streams are billed per GB published and again per subscriber, and they require a card.
- **Tokens.** A read-only token cannot register a worker (`PermissionDenied` on gRPC). An unrestricted token can read task payloads even when members cannot. The secret is shown once. Revoke it to change access; you cannot flip the read-only bit in place.

## Sources

- [Durable tasks](https://docs.hatchet.run/v1/durable-tasks) — accessed 2026-11-18
- [Task eviction](https://docs.hatchet.run/v1/task-eviction) — accessed 2026-11-18
- [Pricing](https://hatchet.run/pricing) — accessed 2026-11-18
- [API tokens](https://docs.hatchet.run/v1/api-tokens) — accessed 2026-11-18
