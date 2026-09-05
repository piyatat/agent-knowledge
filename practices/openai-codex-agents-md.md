---
id: openai-codex-agents-md
title: Codex AGENTS.md discovery — override files and byte cap
tags: [openai, agents-md, config, memory]
status: active
updated: 2026-09-05
when_to_use: Authoring Codex-specific AGENTS.md layers, or debugging which instruction file won
---

## Summary

Codex builds an **instruction chain once per run** (once per TUI session) from `AGENTS.md` / `AGENTS.override.md`. This is Codex’s loader, not the portable format (`agents-md-open-format`) and not `config.toml` runtime (`openai-codex-permissions`). Files closer to cwd win because they are concatenated **last**.

## Notes

- Global (`CODEX_HOME`, default `~/.codex`): first non-empty of `AGENTS.override.md` then `AGENTS.md`. Project: walk git/project root → cwd; in each directory take at most one of `AGENTS.override.md`, `AGENTS.md`, then `project_doc_fallback_filenames`. No project root → cwd only. Empty files skipped.
- Cap: `project_doc_max_bytes` (default **32768**). Raise it or split nested files when truncated. Fallback example: `project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]`. Names not on that list are ignored.
- Code review: add `## Code Review Rules` in the AGENTS.md closest to the code. Keep lint/format in CI. `CODEX_HOME=$(pwd)/.codex` isolates an automation profile.
- Verify: `codex --ask-for-approval never "Summarize the current instructions."` or `--cd subdir`. Audit with `codex -c log_dir=./.codex-log` (`codex-tui.log`) or session JSONL. There is no instruction cache — restart the run.
- Wrong guidance: an `AGENTS.override.md` higher in the tree or under Codex home. Claude Code does **not** read `AGENTS.md` unless imported (`claude-code-memory`).

## Sources

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) — accessed 2026-09-05
- [Advanced Configuration](https://learn.chatgpt.com/docs/config-file/config-advanced) — accessed 2026-09-05
- [AGENTS.md](https://agents.md/) — accessed 2026-09-05
