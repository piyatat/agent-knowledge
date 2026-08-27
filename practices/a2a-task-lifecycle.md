---
id: a2a-task-lifecycle
title: A2A Task vs Message, contextId, and artifacts
tags: [a2a, orchestration, durability, ux]
status: active
updated: 2026-08-27
when_to_use: Implementing A2A SendMessage results (Message vs Task) or continuing work after a terminal task
---

## Summary

A2A replies are a stateless **Message** or a stateful **Task**. Tasks move through interrupted (`input-required`, `auth-required`) and terminal (`completed`, `canceled`, `rejected`, `failed`) states. Terminal tasks are **immutable** — refinements are a **new** task in the same `contextId`.

## Notes

- **Message:** one turn (`role` user/agent, `messageId`, `Part`s: text / inline bytes / URL / data). Use for negotiation or trivial Q&A. **Task:** id, `status`, optional `history`, **artifacts** (deliverables with `artifactId` + parts). Hybrid agents use messages to scope work, then only Tasks until terminal.
- First reply mints `contextId` (and `taskId` if a task). Later messages reuse `contextId` to stay in the session. Attach `taskId` only to continue a **non-terminal** task. After terminal, send a new task; hint with `referenceTaskIds`.
- `contextId` groups concurrent tasks (flight + hotel + activity). Clients track artifact versions; servers SHOULD keep a stable artifact **name** on refinements and mint a new `artifactId`. If the target artifact is ambiguous, return `input-required`.
- Do not restart a completed task. That mapping of inputs→artifacts is the audit unit (`a2a-streaming-async` for SSE/push while the task is live).
- Parts are modality-agnostic; artifacts are what the client stores as the result, not chat chatter.

## Sources

- [A2A Life of a Task](https://a2a-protocol.org/latest/topics/life-of-a-task/) — accessed 2026-08-27
- [A2A Core Concepts](https://a2a-protocol.org/latest/topics/key-concepts/) — accessed 2026-08-27
- [A2A Protocol specification](https://a2a-protocol.org/latest/specification/) — accessed 2026-08-27
