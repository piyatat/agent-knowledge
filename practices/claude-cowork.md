---
id: claude-cowork
title: Claude Cowork — knowledge-work agent vs Code tab
tags: [claude, orchestration, browser, automations]
status: active
updated: 2026-09-23
when_to_use: Distinguishing Claude Cowork from Claude Code, or configuring Cowork cloud tasks, browser, or permissions
---

## Summary

**Claude Cowork** is Anthropic’s agentic **knowledge-work** surface (research, files, docs, spreadsheets, browser). It shares architecture with Claude Code but is **not** the Code tab (`claude-code-desktop`) and not `claude.ai/code` (`claude-code-on-the-web`). Paid plans only. Pro/Max are rolling “one Claude” (no Chat vs Cowork toggle — the model picks a quick answer vs a task).

## Notes

- Availability: Desktop (macOS/Windows), claude.ai, mobile, and Chrome side panel (plan-gated). **Sessions run in the cloud (beta)** so work continues if the laptop sleeps. Local files, the built-in desktop browser, computer use, and some plugins still need **Desktop open and connected**. Dispatch (Cowork tab) can spawn a **Code** session for bugs/PRs; docs/research stay in Cowork.
- Permissions: Manual (ask), Auto (model safety-checks writes; uses more quota), Skip (no check — only if you trust every connector). Team/Enterprise admins can hide Auto and force per-task write approval. Deletes need an explicit Allow. Isolation is on Anthropic servers; it does **not** limit what you granted via folders, MCP, Chrome, or web fetch. Network egress settings do **not** apply to web fetch/search or MCP.
- Standing context: Settings → Cowork **Global instructions** (or Settings → General Instructions in the new UI). Desktop folder instructions attach when you pick a local folder. Plugins bundle skills, connectors, and sub-agents. `/schedule` cloud recurrences do not need the device awake. Treat page content and connectors as injection sources (`prompt-injection-agent-defense`, `computer-use-containment`).

## Sources

- [Claude Cowork product](https://claude.com/product/cowork) — accessed 2026-09-23
- [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) — accessed 2026-09-23
- [Claude Code Desktop](https://code.claude.com/docs/en/desktop) — accessed 2026-09-23
