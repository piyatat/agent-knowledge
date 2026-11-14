---
id: claude-code-vscode
title: Claude Code VS Code extension vs bundled CLI
kind: tool
tags: [claude, ux, cli, interoperability]
status: active
updated: 2026-11-14
when_to_use: Installing Claude Code in VS Code/Cursor/Open VSX, or deciding extension panel vs terminal CLI
---

## Summary

The **Claude Code VS Code extension** is a graphical host (inline diffs, @-mentions, plan review, session tabs). It **bundles its own CLI** for the chat panel and does **not** put `claude` on PATH. Features that exist only in the standalone CLI (custom status line, some hooks/MCP debug) need a separate CLI install in the integrated terminal. Requires VS Code **1.94+**. Paid Claude (Pro/Max/Ultra/Team/Enterprise) or Console login works **without an API key**; Bedrock / Google Agent Platform still need the third-party setup.

## Notes

- Install: marketplace “Claude Code”, Cursor install link, or Open VSX (Devin Desktop, Kiro). The extension version **is** the bundled Claude Code version. Spark icon in editor toolbar / Activity Bar / status bar; Command Palette “Open in New Tab”. First open signs in via browser. **2.1.325:** VS Code **Console sign-in creates no API key**. In SSH/WSL/container windows, MCP login can paste the **redirect URL** into a panel field. `ANTHROPIC_API_KEY` in a GUI-launched VS Code may still be missing — start with `code .` or use account login.
- Trust: the extension does not run in VS Code **Restricted Mode**. **2.1.325** also shows a Claude Code trust prompt before the first session in a folder you have not trusted; declining leaves that folder’s settings and MCP servers unused.
- Permission indicator: Auto / Manual / Plan / Edit automatically (`claude-code-permissions`, `claude-code-plan-mode`). Plan opens a Markdown doc for inline comments before edits. Auto/Edit automatically apply most workspace edits without a prompt. `/` menu: files, model, thinking, `/usage`, `/remote-control`, MCP/hooks/memory/plugins. Focus view (`Ctrl+Option+F` / `Ctrl+Alt+F`, v2.1.221+) hides tool/thinking chrome. **2.1.325:** live stdout of a running Bash or PowerShell command appears under the command card.
- Prompt suggestions (**2.1.325**, also in the VS Code docs): after a reply, gray italic text in the empty prompt; **Tab** accepts (Enter does not send it). Each suggestion is a short background request that **counts toward plan/API usage**. Off: `promptSuggestionEnabled: false` in `~/.claude/settings.json` (reload window), or unset `CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION`.
- Sessions: local history with search; **Web** tab resumes claude.ai sessions that started on a GitHub repo (Claude.ai subscription, not Console) — history downloads locally and does **not** sync back. `/btw` side questions (v2.1.227+) stay off the main transcript. Extension `/bug` submits only on first-party Anthropic sign-in (no local archive, unlike CLI).
- Output styles: VS Code menu writes the same `.claude/settings.local.json` as `/config` (`claude-code-output-styles`). Contrast Cursor’s native agent (`cursor-agent-modes`) — this is Anthropic’s loop inside a VS Code-compatible editor.

## Sources

- [Use Claude Code in VS Code](https://code.claude.com/docs/en/vs-code) — accessed 2026-11-14
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-14
- [v2.1.325](https://github.com/anthropics/claude-code/releases/tag/v2.1.325) — accessed 2026-11-14
- [Output styles](https://code.claude.com/docs/en/output-styles) — accessed 2026-11-14
