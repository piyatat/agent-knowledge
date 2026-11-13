---
id: cursor-agent-sdk-evals
title: Agent SDK evals — defineEval against the real agent
tags: [cursor, sdk, evals, ci]
status: active
updated: 2026-11-13
when_to_use: Authoring evals/*.eval.ts, asserting tools/replies/judges, or running agent-sdk eval in CI
---

## Summary

An Agent SDK **eval** sends a **fixed** input to the **real** agent and gates on tools, events, and reply shape. Files live in project-root `evals/` (`*.eval.ts`), never inside `bot/`. Hillclimbing (`cursor-agent-sdk-hillclimbing`) is the loop that **locks a win** with one of these cases. Model turns need a Cursor credential.

## Notes

- Discovery: `evals/readiness.eval.ts` → id `readiness`; `evals/builds/api.eval.ts` → `builds/api`. Export one `defineEval` with `test` **or** `cases` (case `id` is one path segment). An array of `defineEval` calls becomes `sql/0000`, `sql/0001`, …. `iterations: 3` runs `weather/nyc` as `weather/nyc/1`–`/3`. Required `evals/evals.config.ts` sets `maxConcurrency` 1–200; optional `timeoutMs`, default `judge`, `reporters`, `maxPlaygroundRuns` (default 20).
- `t.send(message, options?)` waits for the turn. Several sends share a session. Assertions on a returned turn cover **that** turn; assertions on `t` cover the whole case. First send only: `workspaceFiles` seeds a map of relative paths; `workspaceDir` is an absolute cwd for a new local session. GitHub fixtures: `agent-sdk github replay <pr> --events '*' --dry-run --fixtures-dir fixtures/github`.
- Trajectory (record failures, don’t throw): `t.succeeded()`, `t.calledTool` / `t.notCalledTool`, `t.loadedSkill`, `t.toolOrder` / `t.eventOrder`, `t.usedNoTools` / `t.maxToolCalls`, `t.noFailedActions`, `t.calledSubagent`, `t.taggedArtifact`, `t.event` / `t.notEvent`, `t.check` + `includes` / `equals` / `matches` (Zod) / `satisfies`, `t.score`. `t.require*` stops the rest of the test on a miss. Severity: `.gate()` fails; `.soft()` never fails; `.atLeast()` yields verdict `scored` (fails the run only under `--strict`).
- Judges (`t.judge.factuality` / `summarizes` / `closedQA` / `sql` / `model`) need a judge model **and** a credential; missing credential **skips** the case; missing model **fails** it. Fence untrusted agent output in custom judge prompts (`llm-judge-bias`).
- Side effects: `ctx.session.purpose === "eval"` — return the decision without posting. The tool call stays in the trajectory. CLI: `agent-sdk eval --dir . --list` / `--tag smoke` / a case id. CI: `--json --no-stream --junit reports/evals.xml --artifacts reports/evals`. Smoke on PRs, full suite on a schedule. Artifacts land under the project state `evals/` (or `--artifacts`); `--state-root` does **not** move them.

## Sources

- [Evals](https://cursor.com/docs/agent-sdk/evals) — accessed 2026-11-13
- [Evals reference](https://cursor.com/docs/agent-sdk/reference/evals) — accessed 2026-11-13
- [Hillclimbing](https://cursor.com/docs/agent-sdk/hillclimbing) — accessed 2026-11-13
- [Agent SDK CLI](https://cursor.com/docs/agent-sdk/reference/cli) — accessed 2026-11-13
