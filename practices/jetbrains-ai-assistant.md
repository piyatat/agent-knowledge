---
id: jetbrains-ai-assistant
title: JetBrains AI Assistant — IDE chat, agents, and ACP registry
kind: tool
tags: [jetbrains, acp, ux, orchestration]
status: active
updated: 2026-11-14
when_to_use: Choosing an agent inside a JetBrains IDE, or installing one from the ACP registry versus Junie or the Copilot plugin
---

## Summary

**JetBrains AI Assistant** is the IDE plugin that hosts AI Chat, completion, next-edit suggestions, commit messages, MCP, and a picker of coding agents (**Junie, Claude, Codex, GitHub Copilot**). It shares one **JetBrains AI** subscription and credit quota with Junie (`jetbrains-junie`). **ACP agents** from the in-IDE registry or `~/.jetbrains/acp.json` do **not** need that subscription. Not the Copilot plugin (`github-copilot-jetbrains`), not Cursor-in-JetBrains (`cursor-jetbrains-acp`), and not Junie CLI (`jetbrains-junie-cli`).

## Notes

- **Access:** the plugin ships with IntelliJ IDEA and most other JetBrains IDEs. Open AI Chat and pick an agent, or Settings → Tools → AI Assistant → Agents. Built-in agents (including Junie) need a JetBrains AI subscription, or the provider login that agent documents (Junie also accepts an OpenAI or Anthropic API key).
- **ACP registry:** AI Chat → mode selector → **Install From ACP Registry**, or the Agents settings page. The IDE downloads the agent and a Node or Python runtime when the agent needs one. First use can prompt for that agent’s own login. A blue dot means Update. Uninstall is on the same page.
- **Custom agents:** Add Custom Agent writes `~/.jetbrains/acp.json`. Each `agent_servers` entry is a display name plus `command`, `args`, and optional `env`. Prefer a full path. Most agents expect you to log in once in a terminal; a pasted `API_KEY` in that file is the exception, not the default. The IDE can offer **Add to configuration** when it finds an ACP binary already installed.
- **MCP / permissions:** **Pass custom MCP servers** (default on for custom agents via `use_custom_mcp`) forwards your MCP config. **Pass IntelliJ MCP server** (`use_idea_mcp`, default off) exposes the IDE’s MCP tools; `idea_mcp_allowed_tools` can narrow that list. JetBrains IDE Services or JetBrains Central admins can hide registry agents and block custom agents.
- **Limits:** ACP agents are **not supported in WSL**. Registry agents and custom subprocesses are local stdio. Extended logs (`llm.agent.extended.logging` in the IDE Registry, then restart) include prompts and replies — strip them before sharing. **Get ACP Logs** downloads the archive.
- **Alternatives:** Junie when you want JetBrains’ own multi-step agent (Default / Plan / Goal) inside this chat. Copilot’s own plugin or JetBrains Air when the task should bill a Copilot subscription (`github-copilot-jetbrains-air`). Claude Code’s JetBrains plugin when you want Claude’s IDE surface instead of an ACP child (`claude-code-jetbrains`).
- **Caveats:** an agent that fails to appear is usually bad JSON or a relative `command`. Restart the IDE after fixing `acp.json`. Do not treat a registry listing as a trust decision — you still authenticate the agent and review its diffs.

## Sources

- [AI Assistant in JetBrains IDEs](https://www.jetbrains.com/help/idea/ai-assistant-in-jetbrains-ides.html) — accessed 2026-11-14
- [Agent Client Protocol (ACP)](https://www.jetbrains.com/help/ai-assistant/acp.html) — accessed 2026-11-14
- [What's the difference between Junie and AI Assistant?](https://support.jetbrains.com/hc/en-us/articles/40036414168722-What-s-the-difference-between-Junie-and-AI-Assistant) — accessed 2026-11-14
- [Junie by JetBrains](https://www.jetbrains.com/help/ai-assistant/junie-agent.html) — accessed 2026-11-14
