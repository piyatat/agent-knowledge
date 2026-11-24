---
id: openai-codex-exec
title: Codex exec — non-interactive CLI and exec resume
tags: [openai, cli, ci, orchestration]
kind: tool
status: active
updated: 2026-11-24
when_to_use: Scripting Codex with codex exec / codex e, running that turn on an existing app server, or resuming a headless session
---

## Summary

**`codex exec`** (alias `codex e`) is the non-interactive Codex CLI: one prompt, no TUI, exits when the turn finishes. GitHub Action `openai/codex-action` **is** this command behind a Responses proxy (`openai-codex-github-action`). Not `claude -p` (`claude-code-headless`) and not Cursor `agent -p` (`cursor-cli-headless`). Interactive resume is `codex resume` (`openai-codex-sessions`).

## Notes

- Prompt: trailing args, or `-` for stdin. `--json` / `--experimental-json` emits newline-delimited events (one per state change); pair with `--output-last-message` / `-o` for a final prose file. `--output-schema` validates the last message against a JSON Schema file. `--ephemeral` skips writing session rollout files. `--ignore-user-config` skips `$CODEX_HOME/config.toml` (auth still uses `CODEX_HOME`). `--ignore-rules` skips user/project execpolicy `.rules`.
- Isolation: inherit `~/.codex/config.toml` sandbox/approvals unless you pass `--sandbox` (`read-only` | `workspace-write` | `danger-full-access`) and `--ask-for-approval`. `--full-auto` is a deprecated compatibility flag — prefer `--sandbox workspace-write`. `--yolo` / `--dangerously-bypass-approvals-and-sandbox` only inside an isolated runner. `--skip-git-repo-check` for non-git dirs. `--dangerously-bypass-hook-trust` is for automation that already vets hooks.
- **Untrusted directories (0.169.0, 2026-11-13):** `codex exec` keeps **project configuration and MCP servers disabled** even when you pass `--sandbox workspace-write`. Pass **`--trust`** on `codex exec` or `codex review` to save project trust for that directory. Without it, a CI checkout that was never trusted silently drops repo MCP and project config (`openai-codex-sessions`).
- Daybreak / cyber (0.161.0+): `codex exec --cyber-access-program <value>` (TypeScript SDK `cyberAccessProgram`) selects the Responses `access_programs.cyber` program for that turn (`standard`, `daybreak_blue`, `daybreak_red`). The flag does **not** require TUI `--enable cli_daybreak` and does **not** persist the Daybreak toggle. Still needs org/project approval and an eligible model (`openai-codex-daybreak`).
- `codex exec resume [SESSION_ID]` continues a **headless** thread; `--last` is cwd-scoped unless `--all`. Optional follow-up prompt. Images: `--image` / `-i` (repeatable, comma lists). `--oss` needs a running Ollama. Do not confuse with `codex execpolicy` (preview rule checker).
- **Resume sandbox (0.172.0, 2026-11-24):** `codex exec resume` restores the saved sandbox mode, working directory, and workspace roots unless that command overrides them. A follow-up that omits `--sandbox` keeps the original thread’s permissions, which can be wider than the flags you would pass on a new exec (`codex-lazy-mcp-and-exec-resume`). The same release surfaces a provider error as soon as it arrives in the stream and names which API spend limit was hit.
- **Remote app server (0.171.0, 2026-11-20):** `codex exec --remote ADDR` runs the noninteractive turn on an existing app server and uses that server’s configuration and credentials. It can start a thread or resume one by UUID, with human-readable or JSON output. `--remote-auth-token-env ENV_VAR` names the variable that holds the WebSocket bearer token. Both flags are global, so they may appear before or after `exec`. Conflicting remote endpoints are rejected, as are unsupported agent-configuration overrides and a thread that is already active. If the server disconnects before the turn finishes, the command errors. The same release puts **GPT-6.2 Sol** and Astra in the model catalog and selects Sol by default (`openai-gpt-62-astra-sol`). TUI `/rc` and `/remote` manage local remote control and show a device pairing code; that is separate from `--remote`.

## Sources

- [Command line options – Codex CLI](https://developers.openai.com/codex/cli/reference) — accessed 2026-10-12
- [Codex GitHub Action](https://developers.openai.com/codex/github-action.md) — accessed 2026-10-12
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-10-12
- [Codex 0.161.0](https://github.com/openai/codex/releases/tag/rust-v0.161.0) — accessed 2026-10-12
- [Use Daybreak in the Responses API](https://developers.openai.com/api/docs/guides/daybreak) — accessed 2026-10-12
- [Codex CLI 0.169.0](https://github.com/openai/codex/releases/tag/rust-v0.169.0) — accessed 2026-11-14
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-11-20
- [Codex CLI 0.171.0](https://github.com/openai/codex/releases/tag/rust-v0.171.0) — accessed 2026-11-20
- [Support remote app servers in codex exec](https://github.com/openai/codex/pull/61707) — accessed 2026-11-20
- [codex exec CLI flags (0.171.0)](https://github.com/openai/codex/blob/rust-v0.171.0/codex-rs/exec/src/cli.rs) — accessed 2026-11-20
- [Codex CLI 0.172.0](https://github.com/openai/codex/releases/tag/rust-v0.172.0) — accessed 2026-11-24
