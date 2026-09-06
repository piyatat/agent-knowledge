---
id: gemini-cli-sandboxing
title: Gemini CLI sandbox — Seatbelt, Docker, gVisor, LXC
tags: [gemini, sandbox, isolation, security]
status: active
updated: 2026-09-06
when_to_use: Enabling Gemini CLI --sandbox, or choosing Docker vs Seatbelt vs gVisor isolation
---

## Summary

Gemini CLI **sandboxing** isolates shell and file-mutating tools from the host. Enable with `-s` / `--sandbox`, `GEMINI_SANDBOX`, or `tools.sandbox` in `settings.json` (flag > env > settings). Default is **off**. Not the same as MCP `trust` (`gemini-cli-mcp`) or Claude `/sandbox` (`claude-code-sandboxing`).

## Notes

- Providers: macOS **Seatbelt** (`sandbox-exec`; default profile `permissive-open` — writes confined to the project, network allowed). Containers: **Docker/Podman** (`ghcr.io/google/gemini-cli:latest`; cwd mounted at the **same host path**). Linux **gVisor/runsc** (`GEMINI_SANDBOX=runsc` — not auto-detected). Experimental **LXC/LXD** (full systemd; container must already be running). Windows native sandbox uses `icacls` Low integrity (persists on written files).
- Custom image: `tools.sandbox: { command, image }` or `GEMINI_SANDBOX_IMAGE`. Project Dockerfile at `.gemini/sandbox.Dockerfile` plus `BUILD_SANDBOX=1` (from-source builds; npm installs need a prebuilt image). Extra host paths: `SANDBOX_MOUNTS=from:to:opts` (default `ro`). Extra docker flags: `SANDBOX_FLAGS`.
- **Tool sandboxing** (`security.toolSandboxing`) isolates individual tools instead of the whole process. Set `false` to force full-process isolation. **Sandbox expansion** prompts when a command needs extra dirs or network (`npm install`); approval is per-run. Settings: `tools.sandboxAllowedPaths`, `tools.sandboxNetworkAccess` (default false).
- Nested Docker: mount `/var/run/docker.sock` and keep the workspace path identical on host and outer container. Debug: `DEBUG=1 gemini -s`. Sandboxing reduces risk; it does not eliminate it. Pair with `security.disableYoloMode` in enterprise (`gemini-cli-settings`).

## Sources

- [Sandboxing in Gemini CLI](https://geminicli.com/docs/cli/sandbox/) — accessed 2026-09-06
- [Gemini CLI settings](https://geminicli.com/docs/cli/settings/) — accessed 2026-09-06
- [Gemini CLI for the enterprise](https://geminicli.com/docs/cli/enterprise/) — accessed 2026-09-06
