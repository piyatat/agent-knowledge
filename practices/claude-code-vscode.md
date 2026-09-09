---
id: claude-code-vscode
title: Claude Code VS Code extension vs bundled CLI
tags: [claude, ux, cli, interoperability]
status: active
updated: 2026-09-09
when_to_use: Installing Claude Code in VS Code/Cursor/Open VSX, or deciding extension panel vs terminal CLI
---

## Summary

The **Claude Code VS Code extension** is a graphical host (inline diffs, @-mentions, plan review, session tabs). It **bundles its own CLI** for the chat panel and does **not** put `claude` on PATH. Features that exist only in the standalone CLI (custom status line, some hooks/MCP debug) need a separate CLI install in the integrated terminal. Requires VS Code **1.94+** and a paid Claude / Console login (or Bedrock / Google Agent Platform).

## Notes

- Install: marketplace “Claude Code”, Cursor install link, or Open VSX (Devin Desktop, Kiro). Spark icon in editor toolbar / Activity Bar / status bar; Command Palette “Open in New Tab”. First open signs in via browser. `ANTHROPIC_API_KEY` in a GUI-launched VS Code may be missing — start with `code .` or use account login.
- Permission indicator: Auto / Manual / Plan / Edit automatically (`claude-code-permissions`, `claude-code-plan-mode`). Plan opens a Markdown doc for inline comments before edits. Auto/Edit automatically apply most workspace edits without a prompt. `/` menu: files, model, thinking, `/usage`, `/remote-control`, MCP/hooks/memory/plugins. Focus view (`Ctrl+Option+F` / `Ctrl+Alt+F`, v2.1.221+) hides tool/thinking chrome.
- Sessions: local history with search; **Web** tab resumes claude.ai sessions that started on a GitHub repo (Claude.ai subscription, not Console) — history downloads locally and does **not** sync back. `/btw` side questions (v2.1.227+) stay off the main transcript. Extension `/bug` submits only on first-party Anthropic sign-in (no local archive, unlike CLI).
- Output styles: VS Code menu writes the same `.claude/settings.local.json` as `/config` (`claude-code-output-styles`). Contrast Cursor’s native agent (`cursor-agent-modes`) — this is Anthropic’s loop inside a VS Code-compatible editor.

## Sources

- [Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code) — accessed 2026-09-09
- [Claude Code overview — VS Code](https://code.claude.com/docs/en/overview) — accessed 2026-09-09
- [Output styles](https://code.claude.com/docs/en/output-styles) — accessed 2026-09-09
