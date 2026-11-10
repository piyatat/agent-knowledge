---
id: cursor-agent-sdk-hillclimbing
title: Agent SDK hillclimbing — one lever, same fixtures, lock the win
tags: [cursor, sdk, evals, quality]
status: active
updated: 2026-11-10
when_to_use: Improving a Cursor Agent SDK bot against fixed inputs, or writing evals that lock a kept change
---

## Summary

**Hillclimbing** is Cursor’s measured-improvement loop for an Agent SDK project: hold inputs fixed, change **one** lever, keep the change only when the same run gets better without moving frozen behavior. A coding agent in the checkout can run it via the `bdk-hillclimb` skill. It is not the `improve` extension (`cursor-agent-sdk-cloud-agents`), which opens a PR against the agent’s own source.

## Notes

- Agree first: the agent, one to three **fixed** inputs, the metric to improve, and what must not change (output shape, side effects, existing evals). One round: run the agent the way a user would on saved or local inputs (**no** deploy / live post) → name the main failure in one sentence → change one lever → rerun the **same** fixtures → compare correctness, efficiency, and contract fit → keep, revert, or narrow. Do not swap a fixture mid-round.
- Smallest lever, earliest: prepare evidence on the **host** before the turn, then reshape that evidence, then instructions or skills, then remove or gate tools that invite wandering. Change the framework only when the agent cannot express the fix. Host/evidence fixes often cut both quality misses and latency (the model searches less for ground truth).
- Match the failure: wrong tool (reviewer calls `approve_pr` before `inspect_pr`) → pin one PR and tighten only the instruction that owns that decision. Wandering / long runs → move repeated reads or host-known evidence ahead of the turn; keep the change only if the answer still finds the same issue. Weak answer → freeze the public shape, compare both runs to known-good findings, edit the instruction or skill that owns the missing judgment.
- Lock every kept win with an eval that **would have failed before** the change (`t.calledTool` / `t.notCalledTool`, `t.maxToolCalls`, output-shape `t.check`, or a judge score). `agent-sdk eval --dir . --tag smoke`. **Never** loosen an existing eval so a new change passes — if an older case fails, fix the change. Evals call the **real** agent (`cursor-agent-sdk`); guard writes with `ctx.session.purpose === "eval"`.
- Authoring: `evals/` beside `bot/` (`evals.config.ts` `maxConcurrency` 1–200). `defineEval` + `t.send`; several sends share a session. Seed `workspaceFiles` instead of depending on the checkout; `agent-sdk github replay … --dry-run --fixtures-dir` saves webhook fixtures. CI: `--tag smoke` on PRs, full suite on a schedule; `--json --no-stream --junit`; model turns need a Cursor credential. Self-edit via Cloud Agents is `improve`, not this loop.

## Sources

- [Hillclimbing](https://cursor.com/docs/agent-sdk/hillclimbing) — accessed 2026-11-10
- [Evals](https://cursor.com/docs/agent-sdk/evals) — accessed 2026-11-10
- [Evals reference](https://cursor.com/docs/agent-sdk/reference/evals) — accessed 2026-11-10
- [Build with a coding agent](https://cursor.com/docs/agent-sdk/building-with-agents) — accessed 2026-11-10
- [Self-improvement](https://cursor.com/docs/agent-sdk/guides/improve) — accessed 2026-11-10
