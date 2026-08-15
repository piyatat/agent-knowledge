---
id: jsonl-session-state-gaps
title: JSONL session state inference gaps
tags: [observability, session, failure-modes, cursor]
status: active
updated: 2026-08-12
when_to_use: External tools tail agent JSONL and guess running/waiting/done from heuristics
---

## Summary

Many agent JSONL exports lack explicit lifecycle/status records — external monitors infer state with dozens of timeouts and fragile heuristics (permission waits, stale running, sleep/quota).

## Notes

- Missing signals: session start/end, permission pending, subagent terminal states, explicit idle vs blocked.
- Heuristic stacks drift with vendor updates — prefer explicit records when available.
- If inferring: document confidence degradation and PID/liveness fallbacks; never claim exact vendor state.
- Request/propose standard record types for monitors, dashboards, and multi-agent orchestrators.
- Combine transcript audit with cost tools — quota burn often correlates with bad lifecycle state.

## Sources

- [JSONL observability gaps (#41215)](https://github.com/anthropics/claude-code/issues/41215) — accessed 2026-08-12
- [Claude Code self-telemetry hooks](https://github.com/ytrofr/claude-code-guide/blob/main/docs/guide/part5-advanced/03-self-telemetry.md) — accessed 2026-08-12
