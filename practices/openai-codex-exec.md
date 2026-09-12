---
id: openai-codex-exec
title: Codex exec — non-interactive CLI and exec resume
tags: [openai, cli, ci, orchestration]
status: active
updated: 2026-09-12
when_to_use: Scripting Codex with codex exec / codex e, or resuming a headless exec session
---

## Summary

**`codex exec`** (alias `codex e`) is the non-interactive Codex CLI: one prompt, no TUI, exits when the turn finishes. GitHub Action `openai/codex-action` **is** this command behind a Responses proxy (`openai-codex-github-action`). Not `claude -p` (`claude-code-headless`) and not Cursor `agent -p` (`cursor-cli-headless`). Interactive resume is `codex resume` (`openai-codex-sessions`).

## Notes

- Prompt: trailing args, or `-` for stdin. `--json` / `--experimental-json` emits newline-delimited events (one per state change); pair with `--output-last-message` / `-o` for a final prose file. `--output-schema` validates the last message against a JSON Schema file. `--ephemeral` skips writing session rollout files. `--ignore-user-config` skips `$CODEX_HOME/config.toml` (auth still uses `CODEX_HOME`). `--ignore-rules` skips user/project execpolicy `.rules`.
- Isolation: inherit `~/.codex/config.toml` sandbox/approvals unless you pass `--sandbox` (`read-only` | `workspace-write` | `danger-full-access`) and `--ask-for-approval`. `--full-auto` is a deprecated compatibility flag — prefer `--sandbox workspace-write`. `--yolo` / `--dangerously-bypass-approvals-and-sandbox` only inside an isolated runner. `--skip-git-repo-check` for non-git dirs. `--dangerously-bypass-hook-trust` is for automation that already vets hooks.
- `codex exec resume [SESSION_ID]` continues a **headless** thread; `--last` is cwd-scoped unless `--all`. Optional follow-up prompt. Images: `--image` / `-i` (repeatable, comma lists). `--oss` needs a running Ollama. Do not confuse with `codex execpolicy` (preview rule checker).

## Sources

- [Command line options – Codex CLI](https://developers.openai.com/codex/cli/reference) — accessed 2026-09-12
- [Codex GitHub Action](https://developers.openai.com/codex/github-action.md) — accessed 2026-09-12
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-09-12
