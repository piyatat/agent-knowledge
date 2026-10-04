---
id: openai-docs-mcp
title: OpenAI Docs MCP — hosted developer-docs server
tags: [openai, mcp, discovery, tools]
status: active
updated: 2026-10-04
when_to_use: Wiring the official OpenAI documentation MCP into Codex, Cursor, VS Code, or Claude Code
---

## Summary

OpenAI hosts a **read-only Docs MCP** at `https://developers.openai.com/mcp` (Streamable HTTP). It searches and reads docs on `developers.openai.com`, `platform.openai.com`, and `learn.chatgpt.com`. It does **not** call the OpenAI API. Not Codex-as-MCP (`openai-codex-mcp`, removed) and not a generic registry server (`mcp-registry-admission`).

## Notes

- Codex (shared CLI + IDE config): `codex mcp add openaiDeveloperDocs --url https://developers.openai.com/mcp`, or `[mcp_servers.openaiDeveloperDocs] url = "…"` in `~/.codex/config.toml`. `codex mcp list` to verify.
- Cursor: `~/.cursor/mcp.json` `mcpServers.openaiDeveloperDocs.url`. VS Code Copilot Agent: `.vscode/mcp.json` `servers` entry with `"type": "http"`. Claude Code: `claude mcp add --transport http openaiDeveloperDocs https://developers.openai.com/mcp` (`--scope user` for all projects); confirm with `/mcp`.
- Without an `AGENTS.md` nudge, the agent often will not consult the server. Official snippet: tell the agent to use this MCP for OpenAI API / plugins / ChatGPT / Codex questions without being asked.
- Pair with the **OpenAI Docs Skill** (from OpenAI’s skills repo): prefer Docs MCP tools first, then official OpenAI domains, and ask for citations. Keep the server name short if several MCP servers are loaded (`mcp-progressive-disclosure`).

## Sources

- [Docs MCP](https://developers.openai.com/learn/docs-mcp) — accessed 2026-10-04
- [Codex MCP server removal](https://learn.chatgpt.com/docs/mcp-server) — accessed 2026-10-04
