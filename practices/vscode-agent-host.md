---
id: vscode-agent-host
title: VS Code Agent Host — process, remotes, GitHub Environments
tags: [vscode, ahp, orchestration, session]
status: active
updated: 2026-11-04
when_to_use: Why a VS Code agent survives closing a window, connecting SSH/tunnels/GitHub Environments, or contrasting Local vs Agent Host
---

## Summary

**Agent Host** is the dedicated VS Code process that **owns** Copilot/Claude/Codex harness sessions so they outlive a Chat view or Agents window. Clients (editor, Agents window, browser) subscribe over **AHP**. Not the Local/extension-host harness (`vscode-agent-harnesses`), not GitHub-managed cloud sandbox, and not ACP. Protocol details: `agent-host-protocol-ahp`.

## Notes

- Split: **Client** displays and sends prompts; **harness** runs the model loop; **Host** owns sessions. Extension host still owns extensions — their tools/MCP/custom agents exist only while **that window** is connected. File edits and shells run **where the Host is** (laptop, Dev Container, SSH/Tunnel/WSL), not where the model runs.
- Local Host uses message-port IPC. Standalone: `code agent host` (localhost + connection token; `--tunnel` for a dev tunnel). Remote: AHP JSON-RPC over **WebSocket**. Closing a **folder** ≠ quitting the app — keep desktop VS Code (or the remote Host process) running for local Host sessions. Cloud sandbox sessions do **not** need your laptop (`github-copilot-sandbox`).
- **GitHub Environments (Preview):** register the machine (Agents window **Remote Connections**, or `code agent host --github-environment`) with your GitHub account. Other Copilot clients (VS Code, Copilot app, CLI, github.com, Mobile) can then attach. Registration does **not** copy the workspace or start a stopped host. Same GitHub account on both sides. Session actions are mirrored to GitHub; conversation is **not** E2E encrypted. Disable with `chat.remoteAgentHostsEnabled`. Org policy / `chat.agentHost.githubEnvironments.enabled` can hide the option.
- VS Code-only remotes: **SSH** and **dev tunnels** (browser Agents window at `insiders.vscode.dev/agents` is a client, not a host). Anonymous tunnels + auto-approval are a remote-code-execution footgun. Remote **Dev Container** (1.139+, `chat.agentHost.devContainer.enabled`): `github-copilot-dev-containers`. **1.145 (Preview, `workbench.browser.enableRemoteProxy`):** the Agents-window **integrated browser** loads pages **through the remote Host**, so a remote-started dev server can be previewed in that window. Remote canvases need the same setting (`vscode-agent-canvases`).
- Experimental **delegate** tools (`chat.remoteSessions.tools.enabled`): `list_agent_hosts` / `create_remote_session` / `send_remote_message` — they do **not** clone your workspace; keep the coordinating window connected. Claude/Codex harnesses are **off** under Copilot enterprise-managed settings.

## Sources

- [Visual Studio Code 1.145](https://code.visualstudio.com/updates/v1_145) — accessed 2026-11-04
- [Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-11-02
- [Run and manage remote agent sessions](https://code.visualstudio.com/docs/agents/run/remote-agent-sessions) — accessed 2026-11-02
- [GitHub Copilot in VS Code, Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/) — accessed 2026-11-02
- [VS Code Wrapped: GitHub Universe 2026](https://code.visualstudio.com/blogs/2026/10/28/vscode-wrapped/) — accessed 2026-11-02
