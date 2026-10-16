---
id: cursor-canvases
title: Cursor canvases — interactive artifacts and team share links
tags: [cursor, ux, artifacts, sharing]
status: active
updated: 2026-10-16
when_to_use: Asking Cursor for a dashboard/audit canvas, publishing a share link, or contrasting it with VS Code / Claude canvases
---

## Summary

A **Cursor canvas** is an interactive React artifact that renders **beside chat** (sections, stats, tables, charts) instead of a long markdown dump. Cloud agents can now **build** canvases during a run; **Publish** gives teammates a **read-only** snapshot link. Not a VS Code Copilot canvas extension (`vscode-agent-canvases`), not a Claude Design artboard (`claude-code-design`), and not an MCP App iframe (`cursor-mcp-apps`).

## Notes

- Trigger: the agent decides a visual view fits, or you ask / use the `/canvas` skill. Cursor writes the canvas, inserts a chat card, and lists it in the workspace so you can reopen and rerun with fresh data. Open: click the card, Command Palette **Open Canvas**, or Agents Window **new tab → canvas** (`cursor-agents-window`).
- Iterate by prompting (layout, rerun the query, revert) or by editing the source for small tweaks. Package a repeatable layout as a skill: trigger text, section/table spec, data sources (SQL / API / shell), formatting rules (`skills-dispatch-hygiene`). Personal `~/.cursor/skills/` need Sync Skills for Cloud Agents (`cursor-skills-cloud-sync`).
- **Share** (changelog week of 2026-10-13): Publish from the canvas toolbar, then copy the link. Recipients on your **team** get a live snapshot (same layout/charts) without rerunning the agent. Dashboard **Shared Canvases** lists **your** publishes only — ask a teammate for their link. Paid plans (Premium+, Teams, Enterprise, legacy Pro/Pro+/Ultra); Free cannot create shares. Individual paid users must also belong to a team. **Legacy Privacy Mode** blocks shares because they need stored data (`cursor-privacy-mode`). Team admins can disable Shared Canvases in team settings.
- Cloud agents produce canvases as part of their work — treat the share link as a demo artifact, not a merge gate (`cursor-cloud-pr-artifacts`). Do not paste secrets into a canvas you will publish.

## Sources

- [Canvases](https://cursor.com/docs/agent/tools/canvas) — accessed 2026-10-16
- [Cursor changelog — Canvases from cloud agents](https://cursor.com/changelog) — accessed 2026-10-16
- [Agent Skills](https://cursor.com/docs/skills) — accessed 2026-10-16
