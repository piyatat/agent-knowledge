---
id: cursor-local-agent-stores
title: Cursor SDK local agent stores — SQLite, JSONL, custom
tags: [cursor, sdk, session, memory]
status: active
updated: 2026-10-28
when_to_use: Persisting local @cursor/sdk agents across process restarts, or swapping SQLite for JSONL/Postgres
---

## Summary

**Local agent stores** persist `@cursor/sdk` **local** agent metadata, conversation checkpoints, runs, and run events so `Agent.resume()` survives process restarts. Default is on-disk **SQLite** via `node:sqlite`. Swap with `local.store`. **Cloud** agents persist server-side — `local.store` is local-only. Not Agent SDK `ctx.host.kv` / `ctx.host.files` (`cursor-agent-sdk`) and not Cursor IDE checkpoints (`cursor-checkpoints`).

## Notes

- Default: `SqliteLocalAgentStore` (`@cursor/sdk/sqlite`) under the workspace state root. When `node:sqlite` is missing, `Agent.create()` throws **`ConfigurationError`** instead of falling back — pass `JsonlLocalAgentStore` or a custom store. Single-file `@cursor/sdk/bundled` on **Node** cannot use SQLite; Bun’s flat build can. `@cursor/sdk/bundled/sqlite` re-exports the SQLite store.
- **JSONL**: `JsonlLocalAgentStore` (`@cursor/sdk`) writes four NDJSON files under a directory you choose — `agents.ndjson`, `runs.ndjson`, `run_events.ndjson`, `checkpoints.ndjson`. Easy to inspect, copy, and diff. Pass the **same** store instance on `Agent.create`, `Agent.resume`, `Agent.list`, `Agent.get`, `Agent.listRuns`, and `Agent.getRun`.
- Process-wide default: `Cursor.configure({ local: { store } })`. Per-call `local.store` still wins. `Cursor.configure({ local: { store: null } })` clears the default and returns to SDK selection.
- **Custom**: implement `LocalAgentStore` (four substores) or `composeLocalAgentStore({ agents, checkpoints, runs, runEvents })`. `agents` = one row per agent with `latestCheckpoint.rootBlobId`; `checkpoints` = content-addressed conversation blobs; `runs` = one row per run; `runEvents` = append-only stream log. Catalog substores paginate with opaque `cursor` / `nextCursor`; the event log resumes with exclusive `afterOffset` / `nextOffset`. Use this for in-memory tests, Redis, or Postgres. `requestId` round-trips through in-memory, SQLite, and JSONL stores (and is set on cloud runs when the backend returns one).
- Each `agent.send()` loads the latest checkpoint for that agent. Follow-ups see the previous run’s context. `AgentNotFoundError` usually means a mismatched `cwd` or store. Treat stored transcripts as secrets-adjacent (`agent-session-transcript-audit`, `jsonl-session-state-gaps`).

## Sources

- [Cursor TypeScript SDK — Local agent stores](https://cursor.com/docs/sdk/typescript) — accessed 2026-10-28
- [SDK Changelog](https://cursor.com/docs/sdk/changelog) — accessed 2026-10-28
