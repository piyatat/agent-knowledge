---
id: cursor-browser
title: Cursor Agent browser — native MCP webview
tags: [cursor, browser, computer-use, security]
status: active
updated: 2026-09-07
when_to_use: Letting Cursor Agent drive a browser, or configuring enterprise origin allowlists
---

## Summary

Cursor **Browser** is a built-in Agent tool surface: a workspace-isolated webview plus MCP tools (navigate, click, type, scroll, screenshot, console, network). No extra install. This is not Playwright MCP (`playwright-mcp-containment`) and not Cloud Agent remote desktop (`cursor-cloud-pr-artifacts`). The noisy Browser **subagent** (`cursor-custom-subagents`) wraps the same tools.

## Notes

- Tools: navigate / history / refresh; click / dblclick / right-click / hover; type into fields; scroll; screenshot (fed to the file reader as images); console logs and network (network still Agent-panel-first). Logs go to files the agent greps — do not expect a full dump after every action. `@browser` attaches the pane. Agent is prompted to reuse a running dev server port.
- Persistence is **per workspace**: cookies, `localStorage` / `sessionStorage`, IndexedDB survive across Agent sessions in that project. Different repos do not share the profile. Session tokens regenerate per browser session; tabs get random IDs.
- Approvals (Agent Settings): manual (default), allow-listed actions, or auto-run. Allow/block lists are under Cursor Settings → Agents → Auto-Run and are **best-effort** against prompt injection. Never auto-run on untrusted sites or untrusted code. Enterprise: MCP toggle “browser features”; optional origin allowlist (v2.1+) restricts `browser_navigate` and MCP-on-origin. Empty allowlist = all origins. Manual user navigation can leave the list; then agent tools block. Link clicks, redirects, and `window.location` can still escape — review the list.
- Pair with `computer-use-containment`. Self-hosted Linux desktop sharing is a different product (`cursor-self-hosted-computer-use`).

## Sources

- [Browser](https://cursor.com/docs/agent/tools/browser) — accessed 2026-09-07
- [Cursor Agent overview](https://cursor.com/docs/agent/overview) — accessed 2026-09-07
- [Subagents](https://cursor.com/docs/subagents) — accessed 2026-09-07
