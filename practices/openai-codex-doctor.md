---
id: openai-codex-doctor
title: Codex doctor — local and --network-only diagnostics
tags: [openai, cli, reliability, networking]
status: active
updated: 2026-10-31
when_to_use: Debugging a broken Codex install, auth, or WebSocket path with codex doctor
---

## Summary

**`codex doctor`** prints a local diagnostic report (install, config, auth, runtime, Git, terminal, app-server, thread inventory) before you file a support issue. **0.166.0** (2026-10-29) adds **`--network-only`** for configuration, connectivity, and WebSocket checks without the full report. Not `claude doctor` (`claude-code-doctor`) and not `codex exec` (`openai-codex-exec`).

## Notes

- Default report is human-readable. Flags: `--summary` (grouped rows + final counts), `--all` (expand long lists), `--json` (redacted machine-readable support blob), `--ascii`, `--no-color`. `--json` is for sharing with support — treat it as secret-bearing even when redacted (`agent-session-transcript-audit`).
- **`--network-only`** (0.166.0): focused pass over config, outbound connectivity, and WebSocket paths used by the TUI / app-server. Use it when resume, `/daemon`, or `--remote` fail to connect and the full doctor report is noise. Published CLI reference as of 2026-10-31 still lists `--summary` / `--json` / `--all` and not this flag — attribute it to the 0.166.0 notes until the reference page catches up.
- `codex queue` / resume / fork stay on `openai-codex-sessions`. Doctor does **not** start a model turn and does **not** change `config.toml` (use `codex features enable|disable` for flags).
- Run it from the same `$CODEX_HOME` / cwd as the broken session. `--ignore-user-config` is an **exec** flag, not a doctor flag.

## Sources

- [Codex 0.166.0](https://github.com/openai/codex/releases/tag/rust-v0.166.0) — accessed 2026-10-31
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-31
- [Command line options – Codex CLI](https://developers.openai.com/codex/cli/reference) — accessed 2026-10-31
- [Slash commands in Codex CLI](https://developers.openai.com/codex/cli/slash-commands) — accessed 2026-10-31
