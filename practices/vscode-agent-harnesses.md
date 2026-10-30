---
id: vscode-agent-harnesses
title: VS Code session targets — Local, Copilot, Claude, Codex, Cloud
tags: [github, vscode, orchestration, interoperability]
status: active
updated: 2026-10-30
when_to_use: Choosing a VS Code Session Target, starting a cloud sandbox session, or handing a Local chat to Copilot/Claude/Codex/Cloud
---

## Summary

VS Code’s **Session Target** picks which **harness** runs a session and where its tools execute: **Local** (extension host), **Copilot** / **Claude** / **Codex** (provider SDKs, usually Agent Host), or **Cloud** (remote PR workflow). This is not Cursor’s four modes (`cursor-agent-modes`) and not “which model.” Discovering a session started in another app is `vscode-external-sessions`.

## Notes

- Controls are independent: target, agent role (Ask / Agent / Plan when the harness offers them), model, permissions, isolation. **New Worktree** (Agents window only) starts from committed Git state and uses **Allow all** — isolation is not a sandbox. Chat-view sessions always edit the current folder. Local always edits the active workspace. Dev Container is an execution environment in the Agents window, chosen separately from the harness (`github-copilot-dev-containers`).
- **Local**: VS Code built-in + extension tools, MCP, BYOK models. **1.142:** Windows sandboxing for Local terminal commands is **deprecated** — use Agent Host for sandboxed Windows (`vscode-agent-sandboxing`). **Copilot**: Agent Host (session outlives the window); folder permissions Manual / Allow all / Assisted (experimental); worktree is Allow all; Autopilot is an **agent mode**. **1.143** makes Copilot the **default** for new sessions (built on the Copilot SDK; the picker labels it). **Ask** is a built-in read-only Copilot role (Plan/Autopilot stay modes). Chat titles prefix the harness name. **Claude**: Copilot-routed or Anthropic credentials; permission modes Edit automatically / Request approval / Plan. Switch BYOK vs Copilot-routed models in an existing Claude session from the picker.
- **Codex**: OpenAI extension **or** experimental `chat.agentHost.codexAgent.enabled` (only one implementation per window; `chat.editor.codex.preferAgentHost` uses Host Codex in Chat view). On Agent Host (1.138+): **Copilot Pro+** or a **ChatGPT** sign-in; if both are signed in, the picker groups models and the chosen provider is saved with the session. ChatGPT-only (signed out of GitHub) also needs `chat.agentHost.allowSignedOutWhenUsable`. Host Codex can use VS Code built-in / extension / MCP tools. Continue the same thread between the ChatGPT app and VS Code — only one app can send at a time (`vscode-external-sessions`). Presets: Default / Auto-Review / Full Access.
- **Cloud (1.144)**: two different Cloud paths. With `chat.agentHost.cloudSandbox.enabled`, **New → Cloud** (or Chat Session Target **Cloud**) starts an experimental **cloud sandbox** session on GitHub-managed compute: Copilot harness **only** (no Claude/Codex switch), paid plan, repo cloned in the cloud (local dirty tree is **not** copied). Reopen the same session from VS Code, Copilot app, Mobile, github.com, or CLI. `chat.agentHost.cloudSandbox.earlyPreparation` (off by default) warms compute while you type; `autoConnectOnOpen` (Agents window) wakes the env on open. Closing the chat does **not** stop the environment. Turn off `chat.remoteAgentHostsEnabled` to block remote hosts. Older **Cloud** still meant the Actions-hosted Copilot cloud-agent / `/delegate` workflow — the sandbox setting **replaces that path for new Cloud sessions** in the Agents window. No local editor/MCP/extension tools on either Cloud path. Docs: [Run agent sessions in the cloud](https://code.visualstudio.com/docs/agents/run/cloud-sandbox-sessions).
- **1.141 Agents window:** drag sessions into a **grid** (horizontal/vertical splits); maximize one then return. **Background Shells** pill lists still-running agent shells — select one to watch output. **1.143:** detached background shells **stream output** after the agent responds, and **Stop Shell** works on detached as well as attached shells. `send_message` between sessions can **steer**, **queue** a follow-up, **replace** a queued message, or **cancel** it before it starts; once processing begins it cannot be replaced. Nested sessions track unread and last-modified independently. Inactive worktree reclaim: `vscode-agent-worktree-cleanup`. Canvases (Preview): `vscode-agent-canvases`. Portable `.mcp.json` env expansion: `vscode-mcp`. Compare Models bake-off: `vscode-compare-models`. On-device MAI Code: `vscode-on-device-models`.
- Handoff (history + context) can be **started only from a Local session**. Agent Host sessions hide the target dropdown but remain destinations. Handoff ≠ fork (`/fork`) ≠ switching Chat view ↔ Agents window.
- **1.142 policy move:** a nonempty managed `permissions` object **or** `sandbox.enabled: true` **requires** Copilot Agent Host for full chat. Opening an existing unarchived Local chat **moves** it to Copilot (transcript + unsent draft; nothing auto-sends) and archives Local only after the destination opens. While those policies apply, Claude / Codex / terminal chat are unavailable (inline chat stays for limited read/edit). Empty `permissions` or legacy policy alone does **not** trigger it. Admin opt-out: `vscode.temporaryDefaultToLocalHarness: true` — keeps Local and **overrides** the routing those policies need; Local does not enforce the runtime rules. Independent Assisted vs Allow-all: `vscode-assisted-permissions`.
- Copilot extras: `/remote on` steers a local Copilot session from GitHub/mobile; experimental **Rubber Duck** is a read-only critic. Treat worktree + Allow all as convenience, not containment (`agent-code-sandboxing`).

## Sources

- [Choose and use an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-10-30
- [Run agent sessions in the cloud](https://code.visualstudio.com/docs/agents/run/cloud-sandbox-sessions) — accessed 2026-10-30
- [Visual Studio Code 1.144](https://code.visualstudio.com/updates/v1_144) — accessed 2026-10-30
- [GitHub Copilot in VS Code, Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/) — accessed 2026-10-30
- [Visual Studio Code 1.143](https://code.visualstudio.com/updates/v1_143) — accessed 2026-10-21
- [Visual Studio Code 1.142](https://code.visualstudio.com/updates/v1_142) — accessed 2026-10-16
- [Visual Studio Code 1.141](https://code.visualstudio.com/updates/v1_141) — accessed 2026-10-10
- [Understand agent sessions and handoff](https://code.visualstudio.com/docs/agents/concepts/sessions) — accessed 2026-09-20
- [VS Code Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-09-20
- [Visual Studio Code 1.138](https://code.visualstudio.com/updates/v1_138) — accessed 2026-09-28
