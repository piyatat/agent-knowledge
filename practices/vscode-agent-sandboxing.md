---
id: vscode-agent-sandboxing
title: VS Code Agent Host sandbox — unified enabled, /sandbox policy
tags: [vscode, sandbox, security, permissions]
status: active
updated: 2026-10-08
when_to_use: Enabling chat.agent.sandbox for Copilot Agent Host terminals, inspecting /sandbox policy, or contrasting with Copilot CLI MXC
---

## Summary

**Agent Host sandboxing** confines terminal commands (and optional MCP/LSP the host launches) to a file and network policy on the **execution host**. GitHub’s 2026-10-07 changelog calls this the same **local sandboxing GA** as Copilot CLI / the Copilot app (MXC). Approvals decide *whether* a command runs; the sandbox decides *what it can touch*. It does **not** wrap built-in read/edit tools. Applies to the Agent Host’s **Copilot SDK** shell — not the legacy Local chat harness or a custom terminal override. CLI/app policy lives in `github-copilot-sandbox`. MCP stdio sandboxing outside Agent Host is `vscode-mcp`.

## Notes

- Platform: macOS (no extra packages). Linux/WSL2: `bubblewrap` + `socat` (WSL1 unsupported). Windows: 2026-09-08 security update (KB5124008 on 24H2/25H2, KB5124012 on 26H1) — VS Code still labels Windows **Experimental**; MCP sandbox outside Agent Host is **not** on Windows. Defaults **off**. Missing deps: Agent Host **does not** silently unsandbox.
- Enable: `chat.agent.sandbox.enabled` is `"on"` / `"off"` on **all** platforms (`enabledWindows` is removed). Session toggle: Permissions → Sandboxing for terminal (persists on restore; does not change User/Workspace defaults). Remote Agent Host: install deps and resolve paths **on the remote**. Independent of Manual / Assisted / Allow all (`vscode-assisted-permissions`).
- Inspect: `/sandbox policy` (Agent Host only) writes `sandbox-policy.md` — host, backend, effective FS/network — without starting a model turn.
- FS: cwd is read/write. Override `chat.agent.sandbox.fileSystem.userConfiguredPaths` (`readwritePaths` / `readonlyPaths` / `deniedPaths`; deny wins). `allowDevToolAccess` (default true) grants PATH tools, toolchain dirs, and shared caches. Legacy `fileSystem.mac|linux|windows` is **ignored** by Agent Host.
- Network: `chat.agent.sandbox.network.allowNetwork` defaults **true**; `allowLocalNetwork` defaults false; `allowedDomains` / `deniedDomains`. Windows proxy, hostname rules, or credential masking need local-network **on** (loopback listener). Org policy can lock these (`github-copilot-managed-permissions`). Managed sandbox **enforcement** is still Preview in VS Code docs.
- Also: `mcpServers` / `lspServers` (default true — host-launched only); `credentials.authenticateGit` / `authenticateGh` (default true); `allowUnsandboxedCommands` (default true — one-shot or session bypass). Session-wide bypass drops FS **and** network until you turn sandboxing back on. Pair with a Dev Container for whole-environment isolation (`github-copilot-dev-containers`).

## Sources

- [Sandbox Copilot Agent Host sessions](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) — accessed 2026-10-08
- [Local sandboxing for GitHub Copilot now generally available](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available/) — accessed 2026-10-08
- [Understand trust and safety for AI agents](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) — accessed 2026-09-21
- [Manage approvals and permissions](https://code.visualstudio.com/docs/agents/run/approvals) — accessed 2026-09-30
