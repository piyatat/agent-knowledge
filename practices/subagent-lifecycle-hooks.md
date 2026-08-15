---
id: subagent-lifecycle-hooks
title: Subagent lifecycle hooks and pairing
tags: [subagent, hooks, telemetry, orchestration]
status: active
updated: 2026-08-12
when_to_use: Instrumenting parent/child agent spawns with durable start/stop records
---

## Summary

Use `SubagentStart` / `SubagentStop` (or equivalent) hooks to append structured JSONL audit rows keyed by stable `agent_id` — pair durations without FIFO guessing.

## Notes

- Log metadata only at stop (lengths/ids), not full assistant bodies, unless redaction is guaranteed.
- Roll up per-session counts at `SessionEnd` before early-exit gates skip summary emission.
- Subagent transcripts often live in sibling files — link via `agent_id` / `promptId`, not path heuristics alone.
- Pair with quota audits (ghost-open, stale-running) on exported rollouts.
- Treat hook streams as privacy-sensitive — same retention rules as main transcripts.

## Sources

- [Claude Code self-telemetry guide](https://github.com/ytrofr/claude-code-guide/blob/main/docs/guide/part5-advanced/03-self-telemetry.md) — accessed 2026-08-12
- [JSONL observability gaps (Claude Code #41215)](https://github.com/anthropics/claude-code/issues/41215) — accessed 2026-08-12
