---
id: gemini-cli-evals
title: Gemini CLI behavioral evals — EDK tool-call assertions
tags: [gemini, evals, testing, reliability]
status: active
updated: 2026-09-19
when_to_use: Authoring or CI-gating Gemini CLI evals/*.eval.ts that assert tool behavior, not prose
---

## Summary

Gemini CLI’s **Eval Development Kit (EDK)** is the in-repo harness for **behavioral evals**: assert which tools ran (and in what order) instead of matching model prose. Files live under `evals/`. Not a product telemetry sink (`gemini-cli-telemetry`) and not a generic golden-task design note (`agent-eval-harness`).

## Notes

- Why: wording is non-deterministic; the suite exists to catch inefficient tool use (many `read_file` vs `read_many_files`) and unsafe shortcuts (raw shell when a safer tool exists). Run with `RUN_EVALS=true npx vitest run evals/my-test.eval.ts`. Deflake locally (≥3 runs) before promoting.
- Commands: `npm run eval:inventory` (optional `--json`, `--root`); `npm run eval:validate` (CI linter); `npm run eval:report` (aggregate `evals/logs/**/report.json` by model/policy). Validator errors (`file-naming`, `valid-policy`, `suite-metadata`, `prompt-presence`, `positive-assertion`, …) fail CI; `new-evals-policy` is a warning.
- Authoring: `*.eval.ts` / `*.eval.tsx`; static `suiteName` + `suiteType` (e.g. `'behavioral'`); non-empty static case `prompt`; assert via `rig.waitForToolCall` or explicit tool args. Workspace reads/edits need a `files` object and must stay inside `rig.testDir`. New evals start as `USUALLY_PASSES` (not `ALWAYS_PASSES`); policies are `ALWAYS_PASSES` / `USUALLY_PASSES` / `USUALLY_FAILS`.
- Anti-patterns: do not shrink `settings.tools.core`; do not `expect(result).toContain('…')`; file-only tests without a realistic prompt belong in `integration-tests/`. Nightly: pin `GEMINI_MODEL`, write vitest JSON under `evals/logs/`, then `eval:report --json`. v0.53.0 added an eval **coverage report** command for decision-logic coverage.

## Sources

- [Behavioral Evaluations & EDK Guide](https://geminicli.com/docs/behavioral-evals/) — accessed 2026-09-19
- [Latest stable release v0.53.0](https://geminicli.com/docs/changelogs/latest/) — accessed 2026-09-19
