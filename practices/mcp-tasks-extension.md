---
id: mcp-tasks-extension
title: MCP Tasks extension for long-running tool calls
tags: [mcp, durability, extensions, orchestration]
status: active
updated: 2026-11-01
when_to_use: MCP tools that run minutes-to-hours (CI, batch, human approval) and must not hold the HTTP request
---

## Summary

The `io.modelcontextprotocol/tasks` extension (SEP-2663, `ext-tasks`) lets a server answer `tools/call` with a durable **task handle** instead of a blocking result. The client polls `tasks/get`, supplies mid-flight input via `tasks/update`, and may request `tasks/cancel`. Task creation is **server-directed**; never return a task to a client that did not advertise the extension. **SEP-3392** classifies Tasks as **Beta** — breaking changes under the same id are still allowed (`mcp-extension-lifecycle`).

## Notes

- Moved out of the experimental `2025-11-25` core into a versioned extension under the 2026-07-28 extensions framework. Old `tasks/list` is gone — clients must track their own `taskId`s because a stateless core cannot scope a global list.
- Advertise in `server/discover` capabilities; clients opt in per request via `_meta.io.modelcontextprotocol/clientCapabilities.extensions["io.modelcontextprotocol/tasks"]`. Host support is sparse — check the client matrix; do not assume every MCP host polls tasks.
- Return `resultType: "task"` (`CreateTaskResult`) with `taskId`, initial status, `ttlMs`, and `pollIntervalMs` **only after** the task is findable in a durable store. A handle that 404s on the next instance is a protocol bug.
- Statuses: `working`, `input_required`, `completed`, `failed`, `cancelled` (last three terminal). `completed` carries the original result shape (including tool-level `isError`); `failed` carries a JSON-RPC error. Tool errors are not promoted to `failed`.
- `input_required` surfaces `inputRequests`; the client answers with `tasks/update` and the task returns to `working`. Deduplicate request keys across polls. Optional `notifications/tasks` via `subscriptions/listen` can replace a poll round-trip; polling remains the default.
- `tasks/cancel` is cooperative — the server may ack and still finish `completed`/`failed`. Pair with durable workflows and HITL, not with held SSE streams.

## Sources

- [MCP Tasks overview](https://modelcontextprotocol.io/extensions/tasks/overview) — accessed 2026-11-01
- [SEP-2663: Tasks Extension](https://modelcontextprotocol.io/seps/2663-tasks-extension) — accessed 2026-11-01
- [The 2026-07-28 Specification (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-22
- [SEP-3392: Extension Lifecycle](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3392) — accessed 2026-10-28

