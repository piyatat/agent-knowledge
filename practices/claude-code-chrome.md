---
id: claude-code-chrome
title: Claude Code Chrome — Claude in Chrome browser tools
tags: [claude, browser, computer-use, mcp]
status: active
updated: 2026-09-11
when_to_use: Enabling claude --chrome or /chrome, or contrasting it with Cursor Browser and computer use
---

## Summary

**Chrome integration** connects Claude Code (CLI or VS Code) to the **Claude in Chrome** extension so Claude can open tabs, click, type, read console/DOM, upload files, and record GIFs using your logged-in browser. Not Cursor’s built-in Agent browser (`cursor-browser`), not Playwright MCP, and not CLI computer use (native macOS apps).

## Notes

- Needs Chrome / Edge (also detects Brave, Arc, Vivaldi, Opera), extension ≥ 1.0.36, and a **direct** Anthropic Pro/Max/Team/Enterprise login via `/login`. API key, `setup-token`, Bedrock / Agent Platform / Foundry stay off (even with `--chrome`). Unsupported in WSL.
- Start: `claude --chrome` (one-time site-permission dialog) or `/chrome` → Enabled by default. VS Code needs only the extension. Always-on loads browser tools into context every session — prefer the flag if tokens matter. `/chrome` also reconnects, lists tools (`claude-in-chrome` MCP), and picks among connected browsers.
- Claude opens new tabs in a session tab group and shares the browser’s login state. Login/CAPTCHA pages pause for you. `/clear` closes the group unless surviving work is running; `/resume` / exit keep pages that are not empty new tabs.
- Plan mode: read-only tools (`read_page`, `get_page_text`, find, console/network read, screenshot) skip prompts; clicks, typing, navigation, GIF record, and flags like `save_to_disk` / `clear` / `createIfEmpty` prompt. Uploads (v2.1.211+): session must be allowed to `Read` the file; 10 MB total; no multi-hard-link files (common in `node_modules`).
- Org: `deniedMcpServers` on `claude-in-chrome` hides the install prompt. Connection uses a native messaging host (`com.anthropic.claude_code_browser_extension.json`) and `bridge.claudeusercontent.com` — IP allowlists that block that host fail. Service-worker idle → `/chrome` → Reconnect.
- Contrast: computer use drives native macOS GUIs (`claude-computer-browser-toolsets`). Pair with `computer-use-containment` if the agent can see authenticated pages (GIF recordings include whatever is on screen).

## Sources

- [Use Claude Code with Chrome](https://code.claude.com/docs/en/chrome) — accessed 2026-09-11
- [Computer use](https://code.claude.com/docs/en/computer-use) — accessed 2026-09-11
