---
id: opencode-agent
title: OpenCode — terminal/desktop agent, MCP, skills
tags: [opencode, mcp, skills, agents-md]
status: active
updated: 2026-10-04
when_to_use: Installing or configuring SST OpenCode (TUI, desktop, IDE), or adding MCP / SKILL.md / AGENTS.md for it
---

## Summary

**OpenCode** (SST / anomalyco) is an open-source coding agent: **TUI**, desktop app, and IDE extension. `/init` writes a root **`AGENTS.md`**. Not Cursor CLI (`cursor-cli-headless`), not Codex (`openai-codex-sdk`). Zed can host it as an ACP External Agent (`zed-external-agents`).

## Notes

- Modes: **Build** (default, all tools) vs **Plan** (Tab; writes ask). Custom primary/subagents live in `opencode.json` `agent` or `.opencode/agents/` markdown. Permission keys (`read`, `edit`, `bash`, `skill`, `task`, MCP wildcards like `mymcp_*`) are `allow` / `ask` / `deny` (`permission-modes-allow-ask-deny`).
- Skills: `SKILL.md` under `.opencode/skills/<name>/`, `~/.config/opencode/skills/`, plus Claude/agent-compatible `.claude/skills` and `.agents/skills` (walks up to the git root). Required frontmatter: `name`, `description`. The native `skill` tool lists name+description and loads the body on call. `permission.skill` can hide or prompt.
- MCP in `opencode.json` `mcp.servers`: local `command` or remote `url` (+ OAuth/PKCE unless `oauth: false`). `protocol`: `legacy` (default, initialize through 2025-11-25), `auto` (`server/discover` then fallback), or `2026-07-28`. **Code Mode is on by default** (`codemode: false` to put tools on the native list — `code-mode-tool-orchestration`). `/mcps` to connect/auth. Prefer few servers; MCP tools eat context (`mcp-progressive-disclosure`).
- V2 instructions: **`AGENTS.md` only** — no `CLAUDE.md` fallback. `opencode acp` is ACP v1 over stdio (private in-process server, no ACP port). Client `cwd` must match the session directory on load/resume. `additionalDirectories` (absolute paths, no globs) grant extra roots; read/edit/shell rules still apply. If the client advertises `elicitation.form`, questions use `elicitation/create` (no secret fields). MCP on `session/new` is stdio or HTTP (headers, no OAuth; no SSE). Auth is `opencode auth login` / `auth_required`, not ACP terminal-auth.

## Sources

- [OpenCode intro](https://opencode.ai/docs/) — accessed 2026-09-23
- [OpenCode MCP servers](https://opencode.ai/v2/docs/mcp-servers/) — accessed 2026-09-23
- [OpenCode Agent Skills](https://opencode.ai/docs/skills/) — accessed 2026-09-23
- [OpenCode agents / permissions](https://opencode.ai/docs/agents/) — accessed 2026-09-23
- [OpenCode config](https://opencode.ai/docs/config/) — accessed 2026-09-23
- [OpenCode ACP](https://opencode.ai/v2/docs/cli/acp/) — accessed 2026-10-04
- [OpenCode instructions (V2)](https://opencode.ai/v2/docs/instructions/) — accessed 2026-10-04
