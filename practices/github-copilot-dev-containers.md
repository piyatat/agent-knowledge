---
id: github-copilot-dev-containers
title: VS Code Agents window — Dev Container sessions (local and remote)
tags: [github, sandbox, isolation, ux]
status: active
updated: 2026-09-26
when_to_use: Running a VS Code Agents window session inside a project Dev Container on the laptop or an SSH/Tunnel/WSL host
---

## Summary

VS Code **1.138** (2026-09-16) can run an **Agents window** Agent Host session **inside a local Dev Container**. **1.139** (2026-09-23) extends that to **SSH, Tunnel, and WSL** remote folders so tools/deps match the remote `devcontainer.json`. Agents-window only. Not Copilot CLI `--cloud` (`github-copilot-sandbox`), not Actions cloud agent, and not “Reopen in Container” for the editor window.

## Notes

- Setting: `chat.agentHost.devContainer.enabled` (Agents window). Rollout is gradual — enable it manually if missing. Folders with a **supported** Dev Container config then show **Use Dev Container**. **Docker** must be installed (**on the remote host** for SSH/Tunnel/WSL). The agent uses the container toolchain, not the laptop’s or the bare remote’s.
- Isolation: a Dev Container is a fuller boundary than the agent sandbox (sandbox covers `runInTerminal` subprocesses, not VS Code file tools). Pair them when you need both OS-level and permission-level limits (`github-copilot-sandbox`, trust-and-safety docs). Workspace Trust still applies before a session starts.
- Do not treat this as “Reopen Folder in Container” for the editor UI. Cloud harness + GitHub repo remains a different execution target (`github-copilot-ide-agent`).

## Sources

- [Visual Studio Code 1.139](https://code.visualstudio.com/updates/v1_139) — accessed 2026-09-26
- [GitHub Copilot weekly releases — September 21](https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21/) — accessed 2026-09-26
- [Visual Studio Code 1.138](https://code.visualstudio.com/updates/v1_138) — accessed 2026-09-18
- [Trust and safety for AI agents](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) — accessed 2026-09-18
- [Use the Agents window](https://code.visualstudio.com/docs/agents/agents-window) — accessed 2026-09-18

