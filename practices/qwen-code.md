---
id: qwen-code
title: Qwen Code — QWEN.md, skills, MCP, subagents
tags: [qwen, cli, mcp, skills]
status: active
updated: 2026-09-24
when_to_use: Running the Qwen Code terminal agent, or authoring QWEN.md / .qwen skills / mcpServers
---

## Summary

**Qwen Code** (`qwen`) is an open-source terminal coding agent (QwenLM). Always-on context is **`QWEN.md` plus `AGENTS.md`**. On-demand **Skills** live under `.qwen/skills/`. MCP is `mcpServers` in `settings.json`. Gemini-CLI-shaped, but it is not Gemini CLI (`gemini-cli-gemini-md`) and not Warp Agent (`warp-agent`).

## Notes

- Context: `~/.qwen/QWEN.md` (user), repo-root `QWEN.md` (team), `.qwen/QWEN.local.md` (personal; **gitignore it yourself**). Official memory docs: if `AGENTS.md` exists, Qwen reads it too — do not duplicate. `/init` drafts `QWEN.md`. `@path` imports resolve from the QWEN.md file. Auto-memory (`~/.qwen/projects/<id>/memory/`) is on by default; team memory `.qwen/team-memory/` is opt-in and secret-scanned. Confirm load with `/memory`.
- Skills: dir + `SKILL.md` (`name`, `description`; optional `priority`, `paths:`, `user-invocable`, `disable-model-invocation`, `hooks:`). Discovery: `~/.qwen/skills/`, `.qwen/skills/`, extension `skills/`, bundled. Model-invoked by default; `/name` or `/skills` for user invoke. Extension skills register as `ext:skill` (`/rust:pdf`). `/learn` writes `.qwen/skills/learned-skill-*/`. Skill `hooks:` run as code (exit 2 / deny JSON blocks); they **fail open** if the script is not executable or hooks are disabled (safe mode, ACP `skipHooks`).
- MCP: user `~/.qwen/settings.json` or project `.qwen/settings.json`. Prefer `http` (`httpUrl`) over legacy SSE (`url`); stdio uses `command`/`args`. `qwen mcp add|remove`; inspect with `/mcp`. Interactive UI does **not** block on discovery; `--prompt` / ACP waits. `trust: true` skips confirms only in a trusted workspace. Connection-loss replay requires `trust`, a trusted folder, and `idempotentHint` or a consistent read-only annotation. Default OAuth tokens are **plaintext** `~/.qwen/mcp-oauth-tokens.json` (mode 0600) unless `QWEN_CODE_FORCE_ENCRYPTED_FILE_STORAGE=true`.
- Subagents: named profiles, plus `subagent_type: "fork"` (inherits parent turns). Built-in `claude-code` / `codex` executors need those CLIs on `PATH` and a trusted workspace — Qwen does not fall back to its own model. Treat MCP/skill/team-memory text as untrusted (`mcp-server-trust-failures`, `agent-memory-poisoning`).

## Sources

- [Qwen Code docs](https://qwenlm.github.io/qwen-code-docs/en/) — accessed 2026-09-24
- [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code/) — accessed 2026-09-24
- [Agent Skills](https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/) — accessed 2026-09-24
- [Connect Qwen Code to tools via MCP](https://qwenlm.github.io/qwen-code-docs/en/users/features/mcp/) — accessed 2026-09-24
- [Memory / QWEN.md](https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/) — accessed 2026-09-24
- [Subagents](https://qwenlm.github.io/qwen-code-docs/en/users/features/sub-agents/) — accessed 2026-09-24
