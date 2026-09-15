---
id: claude-code-plugin-eval
title: Claude Code plugin eval — scored cases and CI gates
tags: [claude, plugins, evals, ci]
status: active
updated: 2026-09-15
when_to_use: Scoring a Claude Code plugin with claude plugin eval, or gating plugin PRs on WITH vs W/OUT delta
---

## Summary

**`claude plugin eval`** (v2.1.269+) runs a plugin against prompt+grader cases in isolated `claude -p` sessions, scores them, and (by default) repeats **without** the plugin so you see `Δ`. This is **not** `claude plugin validate` (schema) and **not** skill-creator’s `evals/evals.json` loop (`claude-code-skills`). Every agent and judge call bills against your plan/API.

## Notes

- Author: `claude plugin eval init` (interview writes `evals/<case>/`) or `--bare` for a blank `prompt.md` + grader. Layout: `prompt.md` and/or `case.yaml`, `graders/*.md` (regex, tool-used, llm rubric, baseline, …). Manifest `experimental.evals` relocates the suite; `--eval-dir` overrides.
- Run: `claude plugin eval .` (directory, `name@marketplace`, or `name@skills-dir`). Defaults: 3 runs/arm, `--ablation with-without`, `--threshold 1.0`, `--mocks record`, concurrency 1–8. `--json` for CI; `--trust-plugin` when stdin isn’t a TTY. Exit 0 all cases pass threshold, 1 fail/untrusted, 2 partial (`--max-cost-usd`), 130/143 interrupt.
- Isolation: throwaway home/cwd/config; **only** the target plugin loads — no user CLAUDE.md, MCP, other plugins, or memory. Eval files are hidden from the agent. `--allow-tools` / `--allow-real-servers` / `--scaffold` are extra trust. Plugin **hooks and real MCP run outside** the agent sandbox. A passing suite is **not** a safety audit (`malicious-skills-supply-chain`).
- Read `WITH` / `W/OUT` / `Δ`. A 1.0/1.0/`Δ` 0 case means Claude didn’t need the plugin. Common miss: `tool_used: Skill` fails → fix the skill `description`. HTML report under `evals/results/<timestamp>/`; may publish to claude.ai unless `--no-publish`. Judge models add bias (`llm-judge-bias`).

## Sources

- [Test plugins with evals](https://code.claude.com/docs/en/plugin-evals) — accessed 2026-09-15
- [Plugins reference — plugin eval](https://code.claude.com/docs/en/plugins-reference) — accessed 2026-09-15
- [Create plugins](https://code.claude.com/docs/en/plugins) — accessed 2026-09-15
