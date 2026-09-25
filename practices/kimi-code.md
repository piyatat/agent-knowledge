---
id: kimi-code
title: Kimi Code CLI — AGENTS.md, skills, MCP, ACP
tags: [kimi, cli, mcp, skills]
status: active
updated: 2026-09-25
when_to_use: Running Moonshot Kimi Code CLI, or authoring .kimi-code AGENTS.md / skills / mcp.json
---

## Summary

**Kimi Code CLI** (`kimi`) is Moonshot’s terminal coding agent. Instructions are **`AGENTS.md`**. Skills are `SKILL.md` (or flat `.md`). MCP is `mcp.json`. IDE embedding is **`kimi acp`**. Not Qwen Code (`qwen-code`) and not Trae (`trae-agent`).

## Notes

- Install: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash` (checksummed binary) or `npm i -g @moonshot-ai/kimi-code` (Node ≥ 22.19). `kimi`, `kimi -p "…"`, `kimi -c` resume. `/login`: Kimi Code OAuth or platform API key; other providers via `~/.kimi-code/config.toml`. Data root `~/.kimi-code/` (`KIMI_CODE_HOME`). Read-only tools auto-run; edits/shell ask first. `/compact`, `/fork`, Shift-Tab plan mode.
- Instructions: project `AGENTS.md` / `.kimi-code/AGENTS.md`; user `$KIMI_CODE_HOME/AGENTS.md`; portable `~/.agents/AGENTS.md`. Injected as reference (`${agents_md}`). **Agent files** under `.kimi-code/agents/` or `.agents/agents/` are prompt config — `override: true` on `agent.md` / `coder.md` **replaces** the system prompt and keeps all tools if `tools` is omitted. Review those in untrusted clones before `kimi`.
- Skills: project `.kimi-code/skills/`, `.agents/skills/`; user `$KIMI_CODE_HOME/skills/`, `~/.agents/skills/`; plus `extra_skill_dirs`. Directory form needs `name` + `description`; flat `.md` falls back to filename / first line. `whenToUse`, `disableModelInvocation`, `type: flow` (manual only), `$ARGUMENTS` / `${KIMI_SKILL_DIR}`. Invoke `/skill:name`. Auto-invoke unless disabled. Nesting cap 3. Built-ins off via `builtin_product_skills`.
- MCP: `mcp.json` (user + project) — stdio, HTTP, legacy SSE. `/mcp-config` conversational add; `/mcp` status. Tools named `mcp__<server>__<tool>`; permission globs in `config.toml`. Plugins can ship MCP (disable in `/plugins`). ACP: `kimi acp` for Zed/JetBrains. Treat MCP/plugin/override-agent text as untrusted (`mcp-server-trust-failures`, `malicious-skills-supply-chain`).

## Sources

- [Getting started](https://www.kimi.com/code/docs/en/kimi-code-cli/guides/getting-started) — accessed 2026-09-25
- [MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code) — accessed 2026-09-25
- [Agents and sub-agents](https://moonshotai.github.io/kimi-code/en/customization/agents.html) — accessed 2026-09-25
- [Agent Skills](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html) — accessed 2026-09-25
- [MCP](https://github.com/MoonshotAI/kimi-code/blob/main/docs/en/customization/mcp.md) — accessed 2026-09-25
