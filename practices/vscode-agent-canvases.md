---
id: vscode-agent-canvases
title: VS Code canvases — Copilot-harness extensions beside chat
tags: [vscode, ux, plugins, preview]
status: active
updated: 2026-10-16
when_to_use: Enabling chat.canvases.enabled, running /create-canvas, or contrasting VS Code canvases with Cursor canvases
---

## Summary

**VS Code 1.142** adds **Canvases** (Preview): an interactive surface **beside chat** that you and the agent update together (for example a Kanban the agent fills). Every canvas is a **canvas extension**. Requires a **local Copilot Agent Host** session with `chat.canvases.enabled`. Not Cursor’s built-in `/canvas` React artifact (`cursor-canvases`) and not Claude Design (`claude-code-design`).

## Notes

- Enable `chat.canvases.enabled`, then start a **new** Copilot-harness session (`vscode-agent-harnesses`). Create with `/create-canvas` (skill writes an extension in the workspace) **or** install a Copilot-app chat plugin that ships a canvas, then ask the agent to list/open it (`github-copilot-plugins`). Agents window: **Add Tab → Canvas**.
- The canvas stays tied to its owning chat. UI actions can update the session; the agent can call canvas actions. Close/reopen when the extension supports it. Works in the editor window and the Agents window; the GitHub Copilot app also hosts canvas extensions.
- **Not supported:** Claude / Codex harnesses, extension-host **Local** sessions, remote Agent Host, browser/web clients, auxiliary-window hosting. Desktop local Copilot only.
- Treat a canvas extension like other privileged plugin code (`malicious-skills-supply-chain`). Preview — APIs may change before GA.

## Sources

- [Visual Studio Code 1.142](https://code.visualstudio.com/updates/v1_142) — accessed 2026-10-16
- [Choose an agent harness — Use canvases](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-10-16
