---
id: github-copilot-ide-agent
title: GitHub Copilot IDE agent mode vs cloud agent
tags: [github, orchestration, ux, permissions]
status: active
updated: 2026-09-09
when_to_use: Using Copilot Chat Agent/Plan/Ask in an IDE, or choosing local agent mode vs Actions cloud agent
---

## Summary

**IDE agent mode** (VS Code, JetBrains, Visual Studio, …) lets Copilot pick files, stream edits, run terminal commands, and iterate **in your local workspace**. **Cloud agent** is a separate Actions-hosted job that plans/edits on a remote branch (`github-copilot-coding-agent`). Org policy can hide the Agent option. Each agent-mode prompt consumes GitHub AI credits.

## Notes

- VS Code Chat agents dropdown: **Agent** (autonomous local edits + tools/MCP), **Plan** (implementation plan; Start Implementation / Open in Editor hand off to Agent), **Ask** (answers, no autonomous multi-file loop). JetBrains/VS also document **Edit** (you pick the file set, accept per turn) vs Agent. Not Cursor’s four modes (`cursor-agent-modes`).
- Subagents: enable `runSubagent` in the tools picker (and in custom-agent `tools` frontmatter). Same model/tools as the parent; **cannot nest**; no mid-run user pauses; result returns to the main chat. Invoke automatically (description match), by name, or `#runSubagent`. Custom agents: `github-copilot-custom-agents`.
- Spaces MCP tools work **only in Agent mode** (`github-copilot-spaces`). Cloud-agent “Delegate this task” from the same Chat box starts the **remote** agent (may offer to push local changes first) — do not confuse the two buttons.
- CLI `copilot` is another local surface (`github-copilot-cli`). Treat issue text and MCP results as untrusted (`prompt-injection-agent-defense`). Do not use IDE agent mode as a merge gate.

## Sources

- [Asking GitHub Copilot questions in your IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide) — accessed 2026-09-09
- [About GitHub Copilot cloud agent — vs agent mode](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) — accessed 2026-09-09
- [GitHub Copilot features — agentic](https://docs.github.com/en/copilot/get-started/features) — accessed 2026-09-09
- [Using Copilot cloud agent in your IDE](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-in-your-ide) — accessed 2026-09-09
