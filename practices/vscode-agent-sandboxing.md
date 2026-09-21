---
id: vscode-agent-sandboxing
title: VS Code agent terminal sandbox — Seatbelt, bubblewrap, MXC
tags: [vscode, sandbox, security, permissions]
status: active
updated: 2026-09-21
when_to_use: Enabling chat.agent.sandbox for VS Code / Copilot Agent Host terminals, or contrasting it with MCP and Dev Container isolation
---

## Summary

**Agent terminal sandboxing** adds an OS-level file and network boundary around `runInTerminal` (and child processes) in VS Code agent sessions, including Copilot Agent Host. Approvals decide *whether* a command runs; the sandbox decides *what it can touch* after it is approved. It does **not** wrap built-in read/edit/write tools. MCP stdio sandboxing is a separate macOS/Linux feature (`vscode-mcp`). Not Cursor `sandbox.json` (`cursor-sandbox-json`) and not Copilot CLI MXC (`github-copilot-sandbox`).

## Notes

- Lifecycle: macOS **Preview** (`chat.agent.sandbox.enabled`, Seatbelt, no extra packages). Linux / WSL2 **Preview** (same setting; install `bubblewrap` + `socat`; WSL1 unsupported). Windows **Experimental** (`chat.agent.sandbox.enabledWindows`; needs the 2026-09-08 security update — KB5124008 on 24H2/25H2, KB5124012 on 26H1). MCP sandbox is **not** on Windows. Defaults **off**.
- Turn on in Settings or **Sandboxing for terminal** in the permissions picker (shield = effective state). Independent of Allow all / Autopilot — an enabled sandbox still restricts terminals. Missing deps: VS Code **does not** silently unsandbox; install the package or disable sandboxing. Agent Host: the toggle is **per session** (persists on restore; peers/subagents inherit). Precedence: managed-required → session selection → Workspace → User → `off`.
- Default FS: read workspace + sandbox temp + common tool paths; write cwd and below; deny sensitive home dirs (e.g. SSH). Same rules on children (npm, build). Override: `chat.agent.sandbox.fileSystem.mac|linux|windows` with `allowRead` / `allowWrite` / `denyRead` (`denyWrite` on mac/linux; Windows has no `denyWrite`). macOS also accepts Git-style globs.
- Network: `chat.agent.sandbox.allowNetwork` defaults **true** (FS isolation only). Set `false` + `chat.agent.allowedNetworkDomains` / `deniedNetworkDomains` (deny wins). Empty allow-list + isolation = no egress. Same domain lists apply to fetch/browser when `chat.agent.networkFilter` is on — restart after changing those three. An allowed domain can still accept **writes** (e.g. `api.github.com`).
- Auto-approve sandboxed terminals by default; set `chat.agent.sandbox.allowAutoApprove` false to keep the normal prompt. Failed-in-sandbox elevation: `allowUnsandboxedCommands` (default true). Network-blocked retry with unrestricted net: `retryWithAllowNetworkRequests` (default true; FS stays). Pair with a Dev Container for whole-environment isolation (`github-copilot-dev-containers`). Auto-approval parsers miss aliases/quotes — do not treat them as a boundary (`prompt-injection-agent-defense`).

## Sources

- [Sandbox agent terminal commands](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) — accessed 2026-09-21
- [Understand trust and safety for AI agents](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) — accessed 2026-09-21
- [Secure AI-assisted development in VS Code](https://code.visualstudio.com/docs/agents/run/security) — accessed 2026-09-21
