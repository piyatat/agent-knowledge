---
id: github-copilot-custom-environments
title: Copilot custom environments — copilotd on your Linux host
tags: [github, sandbox, ops, isolation]
status: active
updated: 2026-11-02
when_to_use: Registering your own Linux machine or codespace as a Copilot session environment instead of Actions or a cloud sandbox
---

## Summary

A **custom environment** is a **Linux machine or GitHub Codespace** running the Copilot host **`copilotd`**, registered to your account so clients can pick it as the session environment. You own the workspace, tools, and uptime. Not GitHub-managed cloud sandbox (`github-copilot-sandbox`), not Actions coding agent, not VS Code **SSH/dev-tunnel** Agent Host (`vscode-agent-host`), and not Cursor Self-Hosted Machines.

## Notes

- Need a Copilot license **and** access to custom environments. Closing a client does **not** stop the host. Keep the process and machine (or codespace) running while you want sessions to land there.
- **Linux VM/host:** install **prerelease** Copilot CLI (`npm install -g @github/copilot@prerelease` or `brew install copilot-cli@prerelease`), `copilot login`, run `copilot` once so flags load, then `copilot --environment-host "HOST-NAME"`. Clients signed in as the **same account** choose that name under Environments.
- **Codespaces:** add the Dev Container feature `ghcr.io/github/copilot-host/copilotd:0` (or `:prerelease`). Optional `repositories` list extra clones. On start, the feature launches `copilotd` and registers the codespace. The connecting token needs the **`codespace`** scope. A stopped codespace wakes on connect. Logs: `tail -F /workspaces/.copilotd/logs/copilotd.log`.
- VS Code **GitHub Environments** can register a desktop Agent Host for cross-client steering (`vscode-agent-host`) — that path does not install `copilotd`. Copilot CLI `--environment-host` is the `copilotd` path. Do not treat either as a sandbox (`github-copilot-sandbox`).
- You are responsible for patching the host, secrets on disk, and network reachability. Pair with org remote-control / environment policy (`github-copilot-remote-control`, `github-copilot-managed-permissions`).

## Sources

- [Creating a custom environment for agents](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-a-custom-environment) — accessed 2026-11-02
- [Work from anywhere with a new, connected Copilot cloud experience](https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/) — accessed 2026-11-02
- [Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-11-02
