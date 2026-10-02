---
id: github-spec-kit
title: GitHub Spec Kit — spec-driven skills for any coding agent
tags: [github, skills, orchestration, planning]
status: active
updated: 2026-10-02
when_to_use: Installing specify-cli /speckit-* skills, or contrasting Spec Kit with Conductor or Claude workflows
---

## Summary

**GitHub Spec Kit** is an open-source toolkit that installs **agent skills** so a coding agent follows a checked-in process (spec before code) instead of ad-hoc prompts. Core Spec-Driven Development (SDD): **Specify → Plan → Tasks → Implement → Converge**. Optional bundled extensions: bug-fix and idea-assessment. Not Gemini Conductor (`gemini-cli-conductor`), not Claude dynamic workflows (`claude-code-workflows`), and not GitHub Agentic Workflows (`github-agentic-workflows`).

## Notes

- Install: `uv tool install specify-cli` then `specify init <dir> --integration copilot` (or another agent; `generic` if unlisted). `--non-interactive` for CI. Existing repos: follow the adopt-in-place guide before `init`. Scripts: Bash / PowerShell / Python (`--script sh|ps|py`). Docs last updated 2026-09-28 list **38** agent integrations (Copilot, Claude, Codex, Gemini, Kiro, Zed, Kilo, …).
- Skills run **in the agent chat**, not the shell. Current Copilot skills mode uses `/speckit-*` (hyphens). Older pages used `/speckit.specify` (dots) — match what `specify init` wrote into the repo. Active feature is `.specify/feature.json` (`SPECIFY_FEATURE_DIRECTORY`), **not** the checked-out git branch. Git numbered branches (`001-feature-name`) are an opt-in extension.
- Once per project: `/speckit-constitution` (principles later steps are judged against). Short path: specify → plan → tasks → implement → converge. Full path adds clarify, checklist, analyze. `/speckit-analyze` is read-only across `spec.md` / `plan.md` / `tasks.md`. `/speckit-implement` treats unchecked reviewer checklists as a gate and does not flip those boxes. `/speckit-converge` appends gap tasks until it reports Converged.
- Customize with community **extensions**, **presets**, **workflows**, and **bundles** (docs: 157 / 33 as of 2026-09-28). Host your own catalogs behind a firewall. Treat third-party extensions like skills you chose to run (`malicious-skills-supply-chain`). Assessment can stop without starting implementation.

## Sources

- [GitHub Spec Kit](https://github.github.com/spec-kit/) — accessed 2026-10-02
- [Spec-Driven Development Quickstart](https://github.github.com/spec-kit/quickstart.html) — accessed 2026-10-02
- [github/spec-kit](https://github.com/github/spec-kit/) — accessed 2026-10-02
