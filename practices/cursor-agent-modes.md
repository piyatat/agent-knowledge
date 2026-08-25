---
id: cursor-agent-modes
title: Cursor Agent, Ask, Plan, and Debug modes
tags: [cursor, ux, orchestration, reliability]
status: active
updated: 2026-08-25
when_to_use: Choosing Agent vs Ask vs Plan vs Debug, or debugging why a mode switch lost chat context
---

## Summary

Cursor’s Agent panel has four modes. **Agent** edits freely. **Ask** is read-only exploration. **Plan** researches and writes a reviewable plan before code. **Debug** hypothesizes, instruments, and uses runtime logs. `Shift+Tab` cycles; the mode picker jumps. **Switching modes starts a fresh context window.**

## Notes

- **Agent** — default for features, refactors, tests, and shell. Edits apply as the run proceeds; review diffs; **Restore Checkpoint** on a prior message rolls back files (not transcript). Stop interrupts; queued follow-ups wait until the current task finishes.
- **Ask** — no file edits. Use for “how does auth work?” then switch to Agent when you are ready to change code.
- **Plan** — clarifying questions → codebase research → editable plan (chat or markdown). Home-dir default; **Save to workspace** stores under `.cursor/plans/` for the team. Best for multi-file / unclear-scope work. If the build diverges, revert, tighten the plan, re-run rather than patching a drifting agent.
- **Debug** — explore + hypotheses → log statements to a **local debug server** in a Cursor extension → you reproduce → agent reads logs → small targeted fix → strip instrumentation. For reproducible-but-opaque bugs, races, perf, regressions. Follow the reproduction steps exactly; re-run for timing bugs.
- Project, user, and **team rules apply in all four modes**. Subagents, image generation, and conversation-search tools are Agent-panel features (Ask still explores; it does not edit).
- Cloud Agents at cursor.com/agents are a different surface (remote VM), not a fifth local mode.

## Sources

- [Agent mode help](https://cursor.com/help/ai-features/agent) — accessed 2026-08-25
- [Ask mode help](https://cursor.com/help/ai-features/ask-mode.md) — accessed 2026-08-25
- [Plan Mode](https://cursor.com/docs/agent/plan-mode) — accessed 2026-08-25
- [Debug Mode](https://cursor.com/docs/agent/debug-mode) — accessed 2026-08-25
- [Best practices for coding with agents](https://cursor.com/blog/agent-best-practices) — accessed 2026-08-25
