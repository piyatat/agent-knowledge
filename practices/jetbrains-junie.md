---
id: jetbrains-junie
title: JetBrains Junie — IDE coding agent in AI Chat
tags: [jetbrains, orchestration, mcp, agents-md]
status: active
updated: 2026-09-22
when_to_use: Using Junie inside a JetBrains IDE (AI Chat or Junie tool window), or contrasting it with Cursor / Copilot / Claude in the same repo
---

## Summary

**Junie** is JetBrains’ coding agent (GA, 2026-06). In the IDE it plans and executes multi-step edits, runs tests/commands, and can drive the **real debugger**. Pick it in **AI Chat** (AI Assistant plugin downloads it) or open the dedicated Junie tool window. Same engine as Junie CLI (`jetbrains-junie-cli`). Not Cursor ACP embedding (`cursor-jetbrains-acp`) and not Claude’s JetBrains plugin (`claude-code-jetbrains`).

## Notes

- Needs a JetBrains AI subscription (or BYOK / local runtime — LiteLLM, LM Studio, Ollama; local prompts stay on-machine). Automatic IDE context attaches the **active file + selection** only; `@` for more files. Reasoning level is a model knob.
- **Brave mode** skips per-action confirmations (or Auto lets Junie decide). Default is ask for bash, file writes, and MCP. Review diffs / “Open in editor” before Yes / Always allow. Rollback is per-file or all files from the changed-files pane.
- **Debug mode** (IntelliJ IDEA Ultimate): Junie launches or attaches a debugger, sets breakpoints (including library/JAR sources), inspects frames/threads, and evaluates expressions. Relies on bundled **Debugger MCP Toolset** + MCP Server plugins (IDEA 2026.1.1+). Connect the IDE MCP server (`streamable-http` localhost) and expose DebuggerToolset tools. Junie does not edit source in this mode unless you ask.
- Instructions: root **`AGENTS.md`** is loaded every task (`agents-md-open-format`). **`.aiignore`** is respected unless you override. MCP: configure servers under Settings → AI Assistant → MCP, then enable **Pass custom MCP servers** under Agents. Slash `/commands` exist; MCP tools are **not** listed in `/` — the agent calls them or you name them in prose.
- GA also: Plan mode writes a structured doc under `.junie/plans` you can edit/commit; remote-control of a long session from another device; `/review` with project context. Treat MCP and review text as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Junie by JetBrains](https://www.jetbrains.com/help/ai-assistant/junie-agent.html) — accessed 2026-09-22
- [Junie IDE plugin](https://junie.jetbrains.com/docs/junie-ide-plugin.html) — accessed 2026-09-22
- [Junie leaves Beta](https://blog.jetbrains.com/junie/2026/06/junie-coding-agent-out-of-beta/) — accessed 2026-09-22
