---
id: gemini-cli-conductor
title: Gemini CLI Conductor — spec/plan tracks in-repo
tags: [gemini, extensions, orchestration, planning]
status: active
updated: 2026-09-10
when_to_use: Installing the Conductor extension for spec-driven tracks, or contrasting it with built-in Plan mode
---

## Summary

**Conductor** is a Gemini CLI **extension** (preview) for context-driven development: product / stack / workflow context plus per-feature **tracks** whose specs and plans live as Markdown in the repo (`conductor/`). The agent implements from an approved `plan.md` you can pause and resume. Built-in **Plan mode** (`gemini-cli-plan-mode`) is a read-only approval mode with `enter_plan_mode` / `exit_plan_mode`; Conductor is an extension that uses those planning tools and persistent artifacts. Not Claude `/plan` or Codex `/plan`.

## Notes

- Install: `gemini extensions install https://github.com/gemini-cli-extensions/conductor` (git URL — treat as `malicious-skills-supply-chain`; enterprises use `security.allowedExtensions` / `blockGitExtensions`, `gemini-cli-extensions`). Then `/conductor:setup` to write shared product, tech-stack, and workflow prefs (e.g. TDD) that every later track inherits.
- New work: `/conductor:newTrack` creates a track — spec (what/why) and plan (phases, tasks, sub-tasks) before code. Review those files; `/conductor:implement` walks `plan.md` and checks off tasks. State in-repo means you can stop, switch machines, and resume. The extension documents checkpoints and mid-flight plan edits.
- Plan-mode docs position Conductor as the reference custom planning workflow: it calls `enter_plan_mode` / `ask_user` / `exit_plan_mode` and stores artifacts under project `conductor/`. You can build a slimmer custom planner with the same tools plus `general.plan.directory` / policy files.
- Use Conductor when the unit of work is larger than one chat and the team wants checked-in specs. Use stock Plan mode for a single research-then-approve turn without the extension. Brownfield: setup interviews you for architecture/guidelines, then updates that context as tracks land — still a human-reviewed Markdown layer, not implicit memory (`gemini-cli-auto-memory`).

## Sources

- [Plan Mode — Conductor](https://geminicli.com/docs/cli/plan-mode/) — accessed 2026-09-10
- [Conductor announcement](https://developers.googleblog.com/conductor-introducing-context-driven-development-for-gemini-cli/) — accessed 2026-09-10
- [Gemini CLI extensions catalog](https://geminicli.com/extensions/) — accessed 2026-09-10
- [Extension reference](https://geminicli.com/docs/extensions/reference/) — accessed 2026-09-10
