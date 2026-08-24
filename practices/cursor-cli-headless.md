---
id: cursor-cli-headless
title: Cursor CLI headless agent in scripts and CI
tags: [cursor, cli, ci, permissions]
status: active
updated: 2026-08-24
when_to_use: Running the Cursor agent from a terminal, GitHub Action, or script without the editor UI
---

## Summary

The Cursor CLI binary is `agent`. Headless **print mode** (`-p` / `--print`) is for scripts and CI. Auth is `agent login` or `CURSOR_API_KEY`. `--force` / `--yolo` applies file changes without confirmation. Pair with CLI permission tokens — do not give a CI agent full git/GitHub autonomy unless that is the explicit design.

## Notes

- Install: `curl https://cursor.com/install -fsS | bash` (Windows: PowerShell install script). Put `$HOME/.cursor/bin` on `PATH` in Actions.
- Output: default `text` (final answer only); `--output-format json` for scripts; `stream-json` plus `--stream-partial-output` for per-message progress. Same agent as the editor minus Tab/diff UI.
- Modes: `--mode=plan` / `--plan`, `--mode=ask`. Interactive: Shift+Tab rotates Agent / Plan / Ask. Cloud handoff: prepend `&` to a message. ACP: `agent acp` over stdio.
- Rules: `.cursor/rules`, plus project-root `AGENTS.md` and `CLAUDE.md`. MCP from `mcp.json`. Untrusted workspaces in headless fail unless `--trust` or `--force`.
- Permissions live in `~/.cursor/cli-config.json` or `<project>/.cursor/cli.json`: `allow` / `deny` tokens `Shell(cmd)`, `Read(glob)`, `Write(glob)`, `WebFetch(domain)`, `Mcp(server:tool)`. Deny wins.
- GitHub Actions cookbook: prefer **restricted** autonomy — agent edits files; a later deterministic step commits, pushes, and comments. Full-autonomy prompts that “handle git and `gh`” are simpler and harder to audit.
- Without `--force`, print mode proposes and does not apply. Image/media: put file paths in the prompt; the agent reads them via tools.

## Sources

- [Using Headless CLI](https://cursor.com/docs/cli/headless) — accessed 2026-08-24
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-08-24
- [GitHub Actions (Cursor CLI)](https://cursor.com/docs/cli/github-actions.md) — accessed 2026-08-24
- [CLI permissions](https://cursor.com/docs/cli/reference/permissions.md) — accessed 2026-08-24
- [CLI authentication](https://cursor.com/docs/cli/reference/authentication.md) — accessed 2026-08-24
