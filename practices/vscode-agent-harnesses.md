---
id: vscode-agent-harnesses
title: VS Code session targets — Local, Copilot, Claude, Codex, Cloud
tags: [github, vscode, orchestration, interoperability]
status: active
updated: 2026-09-28
when_to_use: Choosing a VS Code Session Target, or handing a Local chat to Copilot/Claude/Codex/Cloud
---

## Summary

VS Code’s **Session Target** picks which **harness** runs a session and where its tools execute: **Local** (extension host), **Copilot** / **Claude** / **Codex** (provider SDKs, usually Agent Host), or **Cloud** (remote PR workflow). This is not Cursor’s four modes (`cursor-agent-modes`) and not “which model.” Discovering a session started in another app is `vscode-external-sessions`.

## Notes

- Controls are independent: target, agent role (Ask / Agent / Plan when the harness offers them), model, permissions, isolation. **New Worktree** (Agents window only) starts from committed Git state and uses **Allow all** — isolation is not a sandbox. Chat-view sessions always edit the current folder. Local always edits the active workspace. Dev Container is an execution environment in the Agents window, chosen separately from the harness (`github-copilot-dev-containers`).
- **Local**: VS Code built-in + extension tools, MCP, BYOK models. **Copilot**: Agent Host (session outlives the window); folder permissions Manual / Allow all / Assisted (experimental); worktree is Allow all; Autopilot is an **agent mode**. **Claude**: Copilot-routed or Anthropic credentials; permission modes Edit automatically / Request approval / Plan. Switch BYOK vs Copilot-routed models in an existing Claude session from the picker.
- **Codex**: OpenAI extension **or** experimental `chat.agentHost.codexAgent.enabled` (only one implementation per window; `chat.editor.codex.preferAgentHost` uses Host Codex in Chat view). On Agent Host (1.138+): **Copilot Pro+** or a **ChatGPT** sign-in; if both are signed in, the picker groups models and the chosen provider is saved with the session. ChatGPT-only (signed out of GitHub) also needs `chat.agentHost.allowSignedOutWhenUsable`. Host Codex can use VS Code built-in / extension / MCP tools; ChatGPT-backed models can use image generation. Continue the same thread between the ChatGPT app and VS Code. Presets: Default / Auto-Review / Full Access.
- **Cloud**: Copilot cloud agent plus preview Claude/Codex cloud agents (account policy). No local editor/MCP/extension tools. Copilot `/delegate` sends the task to cloud.
- Handoff (history + context) can be **started only from a Local session**. Agent Host sessions hide the target dropdown but remain destinations. Handoff ≠ fork (`/fork`) ≠ switching Chat view ↔ Agents window.
- Copilot extras: `/remote on` steers a local Copilot session from GitHub/mobile; experimental **Rubber Duck** is a read-only critic (Claude/GPT main model + complementary model). Treat worktree + Allow all as convenience, not containment (`agent-code-sandboxing`).

## Sources

- [Choose and use an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-09-20
- [Understand agent sessions and handoff](https://code.visualstudio.com/docs/agents/concepts/sessions) — accessed 2026-09-20
- [VS Code Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-09-20
- [Visual Studio Code 1.138](https://code.visualstudio.com/updates/v1_138) — accessed 2026-09-28
