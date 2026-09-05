---
id: claude-code-headless
title: Claude Code headless — claude -p and --bare
tags: [claude, cli, ci, orchestration]
status: active
updated: 2026-09-05
when_to_use: Scripting Claude Code in CI, or choosing --bare vs loading project hooks/MCP
---

## Summary

`claude -p` / `--print` runs Claude Code **non-interactively** and exits. `--bare` skips auto-discovery of hooks, skills, plugins, MCP, auto memory, and `CLAUDE.md` — recommended for CI and becoming the default for `-p`. This is the CLI surface of `claude-agent-sdk`, not Cursor `agent -p` (`cursor-cli-headless`).

## Notes

- Conflicts: `-p` rejects `--bg`, and rejects `--cloud` with a task description. `--cloud` + session id + `-p` queues a message into that cloud session. Combine with `--continue`, `--allowedTools`, `--output-format` (`text` / `json` / `stream-json`), `--json-schema`.
- Without `--bare`, `-p` loads the same context as interactive — including project hooks and `.mcp.json` — and **cannot show** workspace-trust or per-server approval dialogs. Treat untrusted checkouts as already approved unless you pass `--bare` and re-add only what you need (`--settings`, `--mcp-config`, `--agents`, `--plugin-dir`).
- Bare mode does not read OAuth / keychain. Set `ANTHROPIC_API_KEY` (or `apiKeyHelper` in `--settings`). Bedrock / Google Agent Platform / Foundry keep their provider creds. Tools left: Bash, Read, Edit.
- Background Bash started during `-p` is killed ~5s after the final result; background **subagents** wait (default 10 min, `CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS`). SIGTERM → abort, kill Bash tree, `SessionEnd`, exit 143. Stdin cap 10MB.
- `--safe-mode` is different: keeps auth, model, built-in tools, and permissions, but drops customizations; managed policy still applies. `--bare` is the CI default you should plan for.

## Sources

- [Run Claude Code programmatically](https://code.claude.com/docs/en/headless) — accessed 2026-09-05
- [CLI reference](https://code.claude.com/docs/en/cli-reference) — accessed 2026-09-05
