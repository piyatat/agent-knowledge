---
id: cursor-agents-window
title: Cursor Agents Window — parallel agents vs the editor
tags: [cursor, ux, orchestration, session]
status: active
updated: 2026-09-13
when_to_use: Opening the Agents Window, managing many local/cloud agents, or choosing it versus the classic IDE
---

## Summary

The **Agents Window** is Cursor’s agent-first workspace: one place to run and review agents across local, cloud, remote SSH, and other environments. It is a **UI**, not a fifth chat mode (`cursor-agent-modes`) and not a Project coordinator (`cursor-projects`). You can keep the classic editor open at the same time.

## Notes

- Open: `Cmd+Shift+P` → **Open Agents Window**. Back to the IDE: **Open IDE**. File peek without leaving: `Cmd+P` / `Cmd+Shift+F`. Design Mode lives on this window’s browser (`cursor-design-mode`).
- Window-only features: **multi-workspace** (agents across repos from one place); **diffs view** (review, commit, PRs); **parallel cloud agents** (also from phone, web, Slack, GitHub, Linear); **local ↔ cloud handoff**; **cloud subagents** (`/in-cloud`, `/autopilot` on a PR — VM+branch while you stay local); **worktrees** (`cursor-worktrees`). CLI `&` transfer is a different handoff (`cursor-cli-cloud-handoff`).
- Choose the window when agents write most of the code and you need many runs in parallel. Stay in the editor for VS Code extensions and multi-file split layouts. Cursor says both surfaces stay supported.
- GA with **Cursor 3** (2026-04-02). After a two-week Enterprise admin rollout window, access is on by default.
- Cloud work here still uses Cloud Agent identity, MCP, and billing (`cursor-cloud-always-on`). Untrusted Slack/GitHub/Linear text remains prompt-injection surface.

## Sources

- [Agents Window](https://cursor.com/docs/agent/agents-window) — accessed 2026-09-13
- [Subagents](https://cursor.com/docs/subagents) — accessed 2026-09-13
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-13
- [Design Mode](https://cursor.com/docs/agent/design-mode) — accessed 2026-09-13
