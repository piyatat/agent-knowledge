---
id: claude-code-mods
title: Claude Code Mods — in-process UI, events, and tool rules
tags: [claude, plugins, hooks, ux]
status: active
updated: 2026-10-02
when_to_use: Writing or installing a Claude Code mod, enabling You should know, or contrasting mods with settings hooks
---

## Summary

A **Claude Code mod** (v2.1.287+) is a **plugin** whose JavaScript/TypeScript handlers run **inside** Claude Code. On events (tool call, prompt, UI draw) a handler can observe, rewrite, or take over the event, draw panes/bands, or run a `/command` without a model turn. Not a settings-file hook (`claude-code-hooks`), not a skill, and not MCP (`claude-code-mcp`). Mods are **not sandboxed**.

## Notes

- Ship as a plugin: `.claude-plugin/plugin.json` plus `hooks/hooks.json` pointing at `register.js` / `.ts`. `export function register(on)` attaches `on('tool.call'| 'ui.render'| …)`. Side effects go through the **mods API** (`$.ui`, `$.fs`, `$.process`, `$.http`, commands, model calls) so `claude plugin validate` can list `hooks:` and `calls:` **before** install.
- Surfaces: hooks run in terminal, Desktop Code tab (not WSL), VS Code chat, `claude -p` / Agent SDK, Remote Control (on the machine), and cloud sessions that load the plugin. **Drawing** is terminal + Desktop only (VS Code / `-p` / cloud draw nothing).
- Trust: a loaded mod has the user’s file, process, env, and network access; can rewrite prompts/tool calls, approve a call an `ask` rule would prompt, and spend plan/API usage. OS sandboxing isolates **Claude’s Bash**, not processes the mod starts. Review `hooks:`/`calls:` first (`malicious-skills-supply-chain`). Samples live in `anthropics/claude-code-playground` (`token-weather`, `blast-radius`, `replay-theater`) — load with `--plugin-dir` for one session.
- Built-ins (Installed → Built-in; `--safe-mode` / `disableAllHooks` do **not** stop them): `cc-plugin-diff` (`/diff` pane), `cc-plugin-agents-md`, `cc-plugin-sec-default` (org guard), `cc-plugin-telemetry`, `cc-plugin-plugin-authoring` (skill only). **You should know** (`cc-plugin-you-should-know@builtin`) is a side agent that posts notes above the prompt on longer tasks — **off by default**; `/plugin enable cc-plugin-you-should-know@builtin` (first-party sessions with telemetry). Source for some built-ins is in the public `mods/` tree of anthropics/claude-code.
- Off: one plugin via `/plugin`; session `--safe-mode`; user `"disableAllHooks": true` (also kills settings hooks/status line; managed still runs). Early-access `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS` is **ignored** at any value. Org: managed `pluginConfigs["cc-plugin-sec-default@builtin"].options.allowManagedModsOnly` blocks user/`--plugin-dir`/session-written mods and leaves org-managed + built-ins. The guard (Team/Enterprise login or any managed settings) stops a user mod from rewriting managed hooks, system prompt, managed CLAUDE.md, or managed MCP tool lists. `deny` + managed `PreToolUse` still win on **Claude** tool calls; they do **not** cover the mod’s own `$.fs` / `$.process`.

## Sources

- [Mods overview](https://code.claude.com/docs/en/plugins/mods/overview) — accessed 2026-10-02
- [Manage mods for your organization](https://code.claude.com/docs/en/plugins/mods/admin) — accessed 2026-10-02
- [Claude Code changelog v2.1.287](https://github.com/anthropics/claude-code/releases/tag/v2.1.287) — accessed 2026-10-02
