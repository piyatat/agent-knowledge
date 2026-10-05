---
id: cursor-cli-headless
title: Cursor CLI headless agent in scripts and CI
tags: [cursor, cli, ci, permissions]
status: active
updated: 2026-10-05
when_to_use: Running the Cursor agent from a terminal, GitHub Action, or script without the editor UI
---

## Summary

The Cursor CLI binary is `agent`. Headless **print mode** (`-p` / `--print`) is for scripts and CI. Auth is `agent login` or `CURSOR_API_KEY`. `--force` / `--yolo` applies file changes without confirmation. Pair with CLI permission tokens — do not give a CI agent full git/GitHub autonomy unless that is the explicit design.

## Notes

- Install: `curl https://cursor.com/install -fsS | bash` (Windows: PowerShell install script). Put `$HOME/.cursor/bin` on `PATH` in Actions.
- Output: default `text` (final answer only); `--output-format json` for scripts; `stream-json` plus `--stream-partial-output` for per-message progress. Same agent as the editor minus Tab/diff UI. Headless `--model` variants that require Max Mode now keep Max Mode (no silent clamp).
- Modes: `--mode=plan` / `--plan`, `--mode=ask`. Interactive: Shift+Tab rotates Agent / Plan / Ask. Custom Mode: Option/Alt+Enter on a skill from `/` (`skills-invocation-modes`). `/goal` is durable across idle/headless and pauses on Ctrl+C (`cursor-cloud-always-on`). Cloud handoff: prepend `&` (`cursor-cli-cloud-handoff`). Stay-local detach: `agent persist` (`cursor-cli-persist`). ACP: `agent acp` over stdio.
- Rules: `.cursor/rules`, plus project-root `AGENTS.md` and `CLAUDE.md`. MCP from `mcp.json`. `--trust` now works in **interactive** sessions as well as headless (skips the trust dialog and records the same saved decision). Untrusted workspaces in headless still fail unless `--trust` or `--force`.
- Permissions live in `~/.cursor/cli-config.json` or `<project>/.cursor/cli.json`: `allow` / `deny` tokens `Shell(cmd)`, `Read(glob)`, `Write(glob)`, `WebFetch(domain)`, `Mcp(server:tool)`. Deny wins. Optional `autoAcceptWebSearch` (off by default) skips per-search approval — `/config` or `cli-config.json`; honored in interactive, headless, subagent, and ACP.
- Headless and single-turn runs **drain delegated subagents** (and background shells they started) before exiting. Steer vs queue vs interrupt while a turn is running: `cursor-message-queue`.
- GitHub Actions cookbook: prefer **restricted** autonomy — agent edits files; a later deterministic step commits, pushes, and comments. Full-autonomy prompts that “handle git and `gh`” are simpler and harder to audit.
- Without `--force`, print mode proposes and does not apply. Image/media: put file paths in the prompt; the agent reads them via tools.

## Sources

- [Using Headless CLI](https://cursor.com/docs/cli/headless) — accessed 2026-10-05
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-10-05
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-10-05
- [GitHub Actions (Cursor CLI)](https://cursor.com/docs/cli/github-actions.md) — accessed 2026-08-24
- [CLI permissions](https://cursor.com/docs/cli/reference/permissions.md) — accessed 2026-08-24
- [CLI authentication](https://cursor.com/docs/cli/reference/authentication.md) — accessed 2026-08-24
