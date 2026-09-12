---
id: claude-code-desktop
title: Claude Code Desktop — Code tab vs CLI vs cloud
tags: [claude, ux, orchestration, hosting]
status: active
updated: 2026-09-12
when_to_use: Using the Claude Desktop Code tab, choosing Desktop vs CLI, or sending a CLI session with /desktop
---

## Summary

The Claude **Desktop** app’s **Code** tab is a GUI on the same engine as the CLI: parallel sessions, panes (chat, diff, browser, terminal, file, plan, tasks, subagent, iOS Simulator), visual review, and Local / Cloud / SSH / WSL environments. Same `CLAUDE.md`, hooks, skills, and `settings.json` as the CLI; **separate session history**. Not Claude Code on the web (`claude-code-on-the-web`), not Remote Control (`claude-code-remote-control`), and not VS Code (`claude-code-vscode`).

## Notes

- Prompt setup: Environment (Local, Cloud, SSH, or Windows WSL), project folder (cloud can add multiple repos), model, permission mode. Modes: Manual (`default`), Accept edits (`acceptEdits`), Plan, Auto (Opus 4.6+ / Sonnet 4.6+ / Fable 5 when the account qualifies), Bypass (`bypassPermissions` — enable in Settings on Pro/Max; org policy on Team/Enterprise). Cloud has Accept edits / Plan / Auto only — no Bypass, no Manual (edits are pre-approved). `dontAsk` is CLI-only.
- Desktop-only: drag-and-drop panes, file attachments (images/PDFs), Browser pane (dev-server preview + external sites; clean profile, not Chrome extension logins), computer use (off by default; macOS/Windows; Linux beta has no computer use), Dispatch-spawned Code sessions (Pro/Max Cowork; Team/Enterprise unsupported), automatic worktrees, `/desktop` from a subscribed CLI (macOS and x64 Windows; not API-key / Bedrock / Agent Platform / Foundry).
- Shared config: `CLAUDE.md`, `.mcp.json`, `~/.claude.json`, hooks, skills. Local Code also loads `claude_desktop_config.json` MCP (wins on name clash); standalone CLI does not — `claude mcp add-from-claude-desktop` copies them. No `-p` / `--output-format`. Agent teams stay CLI-only; Desktop uses workflows and cross-session messaging instead.

## Sources

- [Desktop application](https://code.claude.com/docs/en/desktop) — accessed 2026-09-12
- [Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-09-12
- [Remote Control](https://code.claude.com/docs/en/remote-control) — accessed 2026-09-12
