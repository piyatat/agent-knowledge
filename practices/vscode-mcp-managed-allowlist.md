---
id: vscode-mcp-managed-allowlist
title: VS Code managed MCP allowlist — allowedMcpServers vs registry-only
tags: [vscode, mcp, governance, security]
status: active
updated: 2026-11-04
when_to_use: Approving MCP servers in VS Code enterprise policy without publishing them to a registry, or debugging why a registry server is blocked
---

## Summary

**VS Code 1.145** makes the enterprise-managed **`allowedMcpServers`** list **authoritative** over GitHub Copilot **registry-only** MCP access for servers **VS Code starts**. An allowlisted server can run even if it is not in the org registry; a registry server that is **not** on the list is blocked. This is not Cursor Team list enforcement (`cursor-enterprise-mcp-policy`), not Claude `allowedMcpServers` (`claude-code-managed-mcp`), and not Agent Host–managed MCP (`vscode-mcp`).

## Notes

- Before 1.145, registry-only **and** a managed allowlist still required registry membership — allowlist-only servers never started. Now match **either** by being on the managed list.
- Example managed settings: `{ "allowedMcpServers": [ { "serverUrl": "https://mcp.example.com/mcp" }, { "serverCommand": ["node", "approved-server.js"] } ] }`. Prefer **`serverUrl` / `serverCommand`**. A `serverName` rule matches a label the **server author** chooses.
- Empty list `[]` **blocks all** VS Code–started servers. **Absent** list: the previous registry restriction still applies. User and workspace allowlists **cannot** add servers to the enterprise list.
- **`deniedMcpServers`** and turning MCP off still **win** over the allowlist. A failed Copilot **registry-only policy refresh** (network / rate limit) no longer drops the restriction until the next success — VS Code keeps the last known registry policy and clears it only when GitHub reports that no registry applies.
- **Does not apply** to MCP servers the **Agent Host** manages. Host-native `.mcp.json` / `~/.copilot/mcp-config.json` still follow `vscode-mcp`. Pair with `mcp-server-trust-failures` rather than treating allowlist membership as runtime isolation.

## Sources

- [Visual Studio Code 1.145](https://code.visualstudio.com/updates/v1_145) — accessed 2026-11-04
- [Manage and troubleshoot MCP servers](https://code.visualstudio.com/docs/agents/run/manage-mcp-servers) — accessed 2026-11-04
- [MCP configuration reference](https://code.visualstudio.com/docs/agents/reference/mcp-configuration) — accessed 2026-11-04
