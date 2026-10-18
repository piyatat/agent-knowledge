---
id: vscode-mcp
title: VS Code MCP — mcp.json, Agent Host files, and stdio sandbox
tags: [vscode, mcp, config, security]
status: active
updated: 2026-10-18
when_to_use: Adding MCP in VS Code / Agent Host, or contrasting .vscode/mcp.json with Cursor and Copilot repo MCP
---

## Summary

VS Code stores MCP in **`mcp.json`**: workspace `.vscode/mcp.json` or the user profile. The editor **forwards** those servers to the Agent Host except configs that need interactive `${input:…}`. Agent Host does **not** read `.vscode/mcp.json`; portable Host-native files are workspace **`.mcp.json`** or user **`~/.copilot/mcp-config.json`**. Not Cursor `mcp.json` (`cursor-mcp-json`) and not Copilot **repo Settings** MCP (`github-copilot-mcp`).

## Notes

- Root keys: `servers` (name → config), optional `inputs[]`, optional top-level `sandbox` (macOS/Linux). Variables such as `${workspaceFolder}` work. Commands: MCP: Add Server / List Servers / Browse MCP Servers / Reset Trust / Reset Cached Tools.
- **stdio**: `type`, `command`, optional `args`, `cwd` (defaults to workspace), `env`, `envFile`, `dev` watch/debug, `sandboxEnabled`. Docker stdio must stay in the foreground (no `-d`). **http** / **sse**: `url`, optional `headers`, optional `oauth.clientId` (browser flow on first connect). Preview `oauth.enterpriseManaged` uses the SSO issuer from `mcp.enterpriseManagedAuth.idp` (ID-JAG). Unix/Windows sockets: `unix:///path.sock` or `pipe:///named-pipe` (+ `#/subpath`).
- **stdio sandbox** (macOS/Linux only): per-server `sandboxEnabled: true` plus sibling `sandbox.filesystem` (`allowWrite`, `denyRead`, `denyWrite`) and `sandbox.network` (`allowedDomains`, `deniedDomains`, wildcards). Rules apply to **all** sandboxed servers. Tool confirmations auto-approve inside the box. This is not terminal sandboxing (`vscode-agent-sandboxing`).
- Secrets: `${input:id}` with `promptString` (optional `password`), `pickString`, or `command`. First start prompts; value is stored. **1.143 Insiders** (2026-10-14): workspace-root `.mcp.json` expands **`${VAR}`** and **`${VAR:-default}`** in stdio `command` / `args` / `env` **values** and HTTP URL / header **values** (not names, not `cwd`). Bare `$VAR` is **not** expanded in VS Code (unlike Copilot CLI) — write the braced form. Unset with no default stays literal; set-but-empty uses empty, not the default. Values come from the extension host that runs the server (web host has no env). Trust is computed from the **unexpanded** config, so changing an env var does not re-prompt. Prefer `${env:NAME}` in `.vscode/mcp.json`. Discovery (`chat.mcp.discovery.enabled`; Copilot CLI **on** by default, others off): Claude Desktop, Copilot CLI (`COPILOT_HOME` or `~/.copilot/mcp-config.json`), Cursor global/workspace, Windsurf. Remote windows resolve paths on the remote. Agent Host still reads Copilot CLI MCP independently of discovery.
- Trust: VS Code prompts per MCP server and again after config changes. Org: `chat.mcp.access`, `ChatMCP` policy (`registryOnly` / `off`), private gallery via `McpGalleryServiceUrl`. Experimental: `chat.mcp.autostart`, `chat.mcp.apps.enabled` (MCP Apps UI — `mcp-apps-extension`). `chat.mcp.serverSampling` controls which models servers may call. camelCase unique server names.

## Sources

- [MCP configuration reference](https://code.visualstudio.com/docs/agents/reference/mcp-configuration) — accessed 2026-09-21
- [Understand trust and safety for AI agents](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) — accessed 2026-09-21
- [Secure AI-assisted development in VS Code](https://code.visualstudio.com/docs/agents/run/security) — accessed 2026-09-21
- [Visual Studio Code 1.143 (Insiders)](https://code.visualstudio.com/updates/v1_143) — accessed 2026-10-18
- [Add and manage MCP servers in VS Code](https://code.visualstudio.com/docs/agent-customization/mcp-servers) — accessed 2026-10-18
