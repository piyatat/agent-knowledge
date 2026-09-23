---
id: openhands-agent
title: OpenHands — Agent Canvas, SDK, Cloud, MCP
tags: [openhands, mcp, agents-md, orchestration]
status: active
updated: 2026-09-23
when_to_use: Running or embedding OpenHands (Canvas, CLI, SDK, Cloud), or adding MCP / AGENTS.md for its agents
---

## Summary

**OpenHands** (All Hands AI) is an open-source software-engineering agent platform: **Agent Canvas** (browser control plane), **Software Agent SDK** + **Agent Server** (Python / REST+WebSocket), **CLI**, **OpenHands Cloud**, and **Enterprise**. Not Cursor Cloud Agents (`cursor-cloud-always-on`) and not Claude Agent SDK (`claude-agent-sdk`). The Docker **Local GUI** is legacy; use Canvas.

## Notes

- Canvas talks to one or more Agent Server backends (local all-in-one, self-hosted, Cloud, or Enterprise). The SDK composes agents, tools, conversations, and workspaces; Agent Server exposes execution. **Sandbox Server** is the community sandbox control plane. Treat Cloud vs self-host as an ops choice, not a different agent loop.
- MCP transports: SSE, Streamable HTTP (SHTTP), stdio. Configure in Canvas **Settings > MCP**, `config.toml` `[mcp]`, CLI (`openhands mcp add`), or SDK `mcp_config`. Docs **prefer HTTP/SSE proxies** (e.g. SuperGateway) over raw stdio in production. SHTTP `timeout` is per tool call (default 60s, max 3600s). OAuth MCP uses FastMCP; tokens live under `~/.fastmcp/oauth-mcp-client-cache/` and need a human for first login — skip OAuth for headless jobs; use API keys.
- Repo guidance: root **`AGENTS.md`** (optional `GEMINI.md` / `CLAUDE.md`). Skills also load from `.agents/skills/*.md` with triggers and optional `mcp_tools` frontmatter that spawns extra MCP servers. Treat MCP output and skill MCP as untrusted (`mcp-server-trust-failures`, `malicious-skills-supply-chain`).

## Sources

- [OpenHands docs](https://docs.openhands.dev/) — accessed 2026-09-23
- [OpenHands MCP](https://docs.openhands.dev/openhands/usage/settings/mcp-settings) — accessed 2026-09-23
- [OpenHands repository skills](https://docs.openhands.dev/overview/skills/repo) — accessed 2026-09-23
- [OpenHands SDK skill architecture](https://docs.openhands.dev/sdk/arch/skill.md) — accessed 2026-09-23
