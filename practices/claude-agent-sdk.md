---
id: claude-agent-sdk
title: Claude Agent SDK — Claude Code loop as a library
tags: [sdk, orchestration, permissions, mcp]
status: active
updated: 2026-09-01
when_to_use: Embedding Claude Code’s agent loop in Python/TypeScript instead of driving the CLI or calling the Messages API yourself
---

## Summary

The **Claude Agent SDK** (`query()` / `ClaudeSDKClient`) is Claude Code’s tool loop, harness, and context management as a Python or TypeScript library. It is not the Anthropic Client SDK (you own the tool loop) and not Managed Agents (hosted REST + sandbox). Other languages should subprocess the CLI with `-p` and `--output-format json`.

## Notes

- Built-ins: Read/Write/Edit, Bash, Glob, Grep, WebSearch, WebFetch, AskUserQuestion. Also hooks, subagents, MCP, sessions (resume/fork), and filesystem skills/commands/memory from `.claude/` and `~/.claude/` (same as Claude Code). Disable project settings with `settingSources` / `setting_sources` when you must not load the checkout.
- Custom tools: `@tool` / `tool()` + `create_sdk_mcp_server` / `createSdkMcpServer` (in-process). Names become `mcp__{server}__{tool}` and must be listed in `allowedTools` to skip prompts. External MCP (stdio/HTTP/SSE) still works; prefer in-process when the handler is your app.
- Permissions: hooks → deny → ask → mode → allow → `canUseTool`. Bare `disallowed_tools=["Bash"]` **hides** Bash; `Bash(rm *)` leaves it visible but blocks matches. `bypassPermissions` still honors deny/ask/hooks and does **not** get constrained by `allowed_tools` — unlisted tools are approved. Pair `allowedTools` with `dontAsk` for a hard surface. `plan` never auto-approves file/shell writes.
- Subagents inherit the parent mode. Parent `bypassPermissions` / `acceptEdits` / `auto` cannot be loosened per child. Do not ship third-party products on claude.ai login; use API keys. Brand as “Claude Agent,” not “Claude Code.”
- `PreToolUse` is the only gate that runs on every call (including bypass). A `canUseTool` callback is skipped for auto-approved tools — the SDK warns `CLAUDE_SDK_CAN_USE_TOOL_SHADOWED` when that is likely.
- **SDK plugins** (not the CLI marketplace installer): `options.plugins` / `ClaudeAgentOptions(plugins=…)` takes `{ type: "local", path }` only — relative to cwd or absolute; no `~` expansion. Path is the plugin **root** (parent of `skills/`, `agents/`, `hooks/`, `commands/`, or `.claude-plugin/`). Manifest `.claude-plugin/plugin.json` is optional (auto-discover). Skills/commands are namespaced `/plugin-name:skill-name`. Check `message.plugins` / `skills` / `slash_commands` on the init `system` message; missing paths are skipped silently. Marketplace installs still work if you pass `~/.claude/plugins/…` as a local path. Authoring stays in `claude-code-plugins`.

## Sources

- [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview) — accessed 2026-08-29
- [Give Claude custom tools](https://code.claude.com/docs/en/agent-sdk/custom-tools) — accessed 2026-08-29
- [Configure permissions (Agent SDK)](https://code.claude.com/docs/en/agent-sdk/permissions) — accessed 2026-08-29
- [Plugins in the SDK](https://code.claude.com/docs/en/agent-sdk/plugins.md) — accessed 2026-09-01
