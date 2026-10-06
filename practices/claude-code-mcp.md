---
id: claude-code-mcp
title: Claude Code MCP — scopes, .mcp.json, and OAuth
tags: [claude, mcp, config, auth]
status: active
updated: 2026-10-06
when_to_use: Adding HTTP/stdio MCP to Claude Code, or debugging .mcp.json approvals vs Cursor mcp.json
---

## Summary

Claude Code MCP lives in **scopes**, not Cursor’s `.cursor/mcp.json`. `claude mcp add` writes **local** (`~/.claude.json` keyed by project path, default), **project** (repo-root `.mcp.json`, committable), or **user** (`~/.claude.json` global). Same name → local wins, then project, then user (whole entry, no field merge). Cloud/Agent SDK / `claude -p` cannot show the project-server approval prompt.

## Notes

- Transports: `--transport http` (recommended; JSON `type` may be `http` or alias `streamable-http`), deprecated `sse`, local `stdio` (put Claude flags before `--`, server argv after), and `ws` via `.mcp.json` / `add-json` only (no OAuth; header auth). A `url` without `type` is treated as broken stdio and skipped.
- Stdio servers get `CLAUDE_PROJECT_DIR` as the launch root. `${VAR}` expansion in `.mcp.json` needs `${CLAUDE_PROJECT_DIR:-.}` except in plugin configs. Prefer `${VAR}` for secrets, not literals.
- Trust: a cloned repo cannot self-approve. `enableAllProjectMcpServers` / `enabledMcpjsonServers` in committed `.claude/settings.json` are ignored until workspace trust. `disabledMcpjsonServers` always blocks. Interactive `/mcp` or `claude mcp reset-project-choices` for approvals. Headless loads project servers without asking unless disabled or `--setting-sources` drops project settings.
- Remote OAuth: `/mcp` or `claude mcp login <name>`. On 401, Claude Code refreshes once. `claude -p` cannot complete OAuth — it reports tools unavailable until an interactive login. A rejected `headers.Authorization` does **not** fall back to OAuth.
- Discovery cache (v2.1.221+): previously used HTTP/SSE servers may show `cached … connects on first use`. Force connect-at-start with `MCP_DISCOVERY_CACHE=0`. Plugin servers register as `plugin:<plugin>:<name>`. Treat untrusted MCP content as injection (`mcp-server-trust-failures`).
- Protocol (v2.1.292+): local **stdio** connections negotiate MCP **2026-07-28** by default on every install, including Bedrock, Vertex, and Foundry. `MCP_PROTOCOL_NEGOTIATION=legacy` opts out. Servers that ignore the newer check are remembered for 7 days after one slow connect and then connected the older way. A tool name longer than 128 characters is dropped with an MCP error instead of failing every request. `claude -p` / Agent SDK first turns no longer wait for HTTP/SSE `resources/list`.

## Sources

- [Connect Claude Code to tools via MCP](https://code.claude.com/docs/en/mcp) — accessed 2026-10-06
- [Cursor mcp.json](https://cursor.com/docs/mcp) — accessed 2026-09-04
- [CHANGELOG.md (v2.1.292)](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-06
