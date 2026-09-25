---
id: trae-agent
title: Trae — IDE, traecli, AGENTS.md, skills, MCP
tags: [trae, cli, mcp, skills]
status: active
updated: 2026-09-25
when_to_use: Configuring ByteDance Trae IDE or traecli rules/skills/MCP, or distinguishing them from the OSS trae-agent repo
---

## Summary

**Trae** (TraeCode) is ByteDance’s coding IDE plus official **`traecli`**. Always-on project memory is **`AGENTS.md`** plus `.trae/rules/`. Skills are `SKILL.md` folders. MCP is `.trae/mcp.json` / `trae_cli.yaml`. This is **not** the open-source `bytedance/trae-agent` Python repo. Not Cursor (`cursor-agent-modes`) and not Kiro (`kiro-cli`).

## Notes

- Rules (IDE): root `AGENTS.md` is project-wide; nested `.trae/rules/` (and nested `AGENTS.md`) apply when files in that directory are mentioned or read. Trae can also import root `CLAUDE.md` / `CLAUDE.local.md` if those Import Settings toggles are on. CLI (`docs.trae.cn`): cwd + parent `AGENTS.md` always load; child `AGENTS.md` loads when that tree is read. `@file.md` imports expand (not inside code spans). `/init` drafts `AGENTS.md`. CLI also reads `.trae/rules/` and `~/.trae-cn/rules`.
- Skills (IDE): `.trae/skills/<name>/SKILL.md` (`name`, `description`); on-demand vs always-on rules. `.agents/skills/` is supported when the Import Settings toggle is on; same-name `.trae/skills/` wins. CLI: `${PROJECT}/.traecli/skills/<name>/SKILL.md` and `~/.traecli/skills/`; CLI also reads IDE `.trae/skills/` and `~/.trae-cn/skills`. Inspect with `/skills`.
- MCP: stdio, SSE, Streamable HTTP. Project file `.trae/mcp.json` (IDE + CLI). CLI global: `traecli config edit` → `trae_cli.yaml`. `/mcp` for status and browser OAuth (RFC 8414 / 7591). Prefer HTTP over legacy SSE.
- Custom agents / subagents (IDE): prompt + built-in tools (Read/Edit/Terminal/Preview/Web) + named MCP servers. Subagent markdown: `tools`, `disallowedTools`, `mcpServers`, optional `mcp__<server>__<tool>`. Headless ACP: `traecli acp serve` (hosts may pass `--yolo` to skip approvals). Treat MCP/skill text as untrusted (`mcp-server-trust-failures`, `malicious-skills-supply-chain`).

## Sources

- [Create and manage custom agents](https://docs.trae.ai/ide/agent) — accessed 2026-09-25
- [Rules](https://docs.trae.ai/ide/rules?_lang=en) — accessed 2026-09-25
- [Skills](https://docs.trae.ai/ide/skills) — accessed 2026-09-25
- [Trae CLI memories (AGENTS.md)](https://docs.trae.cn/cli_memories) — accessed 2026-09-25
- [Trae CLI skills](https://docs.trae.cn/cli_skills) — accessed 2026-09-25
- [Trae CLI MCP](https://docs.trae.cn/cli_model-context-protocol) — accessed 2026-09-25
