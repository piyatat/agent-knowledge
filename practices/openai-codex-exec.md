---
id: openai-codex-exec
title: Codex exec — non-interactive CLI and exec resume
tags: [openai, cli, ci, orchestration]
status: active
updated: 2026-10-12
when_to_use: Scripting Codex with codex exec / codex e, picking a cyber access program, or resuming a headless exec session
---

## Summary

**`codex exec`** (alias `codex e`) is the non-interactive Codex CLI: one prompt, no TUI, exits when the turn finishes. GitHub Action `openai/codex-action` **is** this command behind a Responses proxy (`openai-codex-github-action`). Not `claude -p` (`claude-code-headless`) and not Cursor `agent -p` (`cursor-cli-headless`). Interactive resume is `codex resume` (`openai-codex-sessions`).

## Notes

- Prompt: trailing args, or `-` for stdin. `--json` / `--experimental-json` emits newline-delimited events (one per state change); pair with `--output-last-message` / `-o` for a final prose file. `--output-schema` validates the last message against a JSON Schema file. `--ephemeral` skips writing session rollout files. `--ignore-user-config` skips `$CODEX_HOME/config.toml` (auth still uses `CODEX_HOME`). `--ignore-rules` skips user/project execpolicy `.rules`.
- Isolation: inherit `~/.codex/config.toml` sandbox/approvals unless you pass `--sandbox` (`read-only` | `workspace-write` | `danger-full-access`) and `--ask-for-approval`. `--full-auto` is a deprecated compatibility flag — prefer `--sandbox workspace-write`. `--yolo` / `--dangerously-bypass-approvals-and-sandbox` only inside an isolated runner. `--skip-git-repo-check` for non-git dirs. `--dangerously-bypass-hook-trust` is for automation that already vets hooks.
- Daybreak / cyber (0.161.0+): `codex exec --cyber-access-program <value>` (TypeScript SDK `cyberAccessProgram`) selects the Responses `access_programs.cyber` program for that turn (`standard`, `daybreak_blue`, `daybreak_red`). The flag does **not** require TUI `--enable cli_daybreak` and does **not** persist the Daybreak toggle. Still needs org/project approval and an eligible model (`openai-codex-daybreak`).
- `codex exec resume [SESSION_ID]` continues a **headless** thread; `--last` is cwd-scoped unless `--all`. Optional follow-up prompt. Images: `--image` / `-i` (repeatable, comma lists). `--oss` needs a running Ollama. Do not confuse with `codex execpolicy` (preview rule checker).

## Sources

- [Command line options – Codex CLI](https://developers.openai.com/codex/cli/reference) — accessed 2026-10-12
- [Codex GitHub Action](https://developers.openai.com/codex/github-action.md) — accessed 2026-10-12
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-10-12
- [Codex 0.161.0](https://github.com/openai/codex/releases/tag/rust-v0.161.0) — accessed 2026-10-12
- [Use Daybreak in the Responses API](https://developers.openai.com/api/docs/guides/daybreak) — accessed 2026-10-12
