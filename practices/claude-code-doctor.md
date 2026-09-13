---
id: claude-code-doctor
title: Claude Code /doctor — what loaded vs safe-mode
tags: [claude, config, reliability, cli]
status: active
updated: 2026-09-13
when_to_use: Debugging ignored CLAUDE.md/settings/hooks/MCP/skills, or isolating a session with --safe-mode
---

## Summary

**`/doctor`** (and `claude doctor`) is the setup checkup for Claude Code: installation health, invalid settings, unused extensions, duplicate subagent names, and (v2.1.206+) checked-in `CLAUDE.md` that the codebase already implies. It proposes fixes and applies them **only after confirm**. Not `/context` (token map) and not install/login troubleshooting. Pair with `--safe-mode` when you need a clean comparison.

## Notes

- Start with `/context`: system prompt, tools, MCP, subagent sources, memory, skills (includes **bundled** skills that `/skills` hides), conversation. Missing `CLAUDE.md` → wrong path or subdirectory file (loads only when Read hits that directory). File present but ignored → vague/conflicting/long instructions, or a permission/hook should have been the enforcement (`memory-files-vs-enforcement-hooks`).
- Then: `/memory`, `/skills`, `/hooks`, `/mcp`, `/permissions`, `/status` (which sources, including managed). `claude doctor` is **read-only** and does not start a session; `/doctor` inside a session can apply confirmed fixes. Before v2.1.205, `/doctor` was a built-in screen (`f` sent the report to Claude). Hide it with `DISABLE_DOCTOR_COMMAND` or `skillOverrides.doctor: "off"`.
- MCP: `/mcp` for approval/failed/zero-tools. Project `.mcp.json` needs one-time approve; relative `command`/`args` resolve from **launch cwd**. `settings.json` has **no** `mcpServers` key — use repo-root `.mcp.json` or `claude mcp add --scope user`.
- Hooks live under `"hooks"` in a settings file (plugins may use `hooks/hooks.json`). Matcher is a **string** (`"Edit|Write"`; `,` as a list sep needs ≥ v2.1.191). An array matcher rejects the whole user/project/local file. `~/.claude.json` is **not** where permissions/hooks/env go (`claude-code-settings`).
- `claude --safe-mode` drops CLAUDE.md, skills, plugins, hooks, MCP, custom commands/agents; auth, model, built-ins, and permissions stay. **Managed** hooks/settings still apply; managed plugins/skills/CLAUDE.md/MCP do not. Cleaner still: `cd /tmp && CLAUDE_CONFIG_DIR=/tmp/claude-clean claude` (expect first-run screens; managed/MDM still load).

## Sources

- [Debug your configuration](https://code.claude.com/docs/en/debug-your-config) — accessed 2026-09-13
- [Claude Code settings](https://code.claude.com/docs/en/settings) — accessed 2026-09-13
- [Skills](https://code.claude.com/docs/en/skills) — accessed 2026-09-13
