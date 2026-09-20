---
id: github-copilot-ide-agent
title: GitHub Copilot IDE agent mode vs cloud agent
tags: [github, orchestration, ux, permissions]
status: active
updated: 2026-09-20
when_to_use: Using Copilot Chat Agent/Plan/Ask in an IDE, or choosing Agent Host vs extension-host vs Actions cloud agent
---

## Summary

**IDE agent mode** (VS Code, JetBrains, Visual Studio, …) lets Copilot pick files, stream edits, run terminal commands, and iterate **in your local workspace**. In current VS Code Stable, many of those sessions run in a dedicated **Agent Host** process over AHP (`agent-host-protocol-ahp`), so the session can outlive the window. **Cloud agent** is a separate Actions-hosted job (`github-copilot-coding-agent`). Org policy can hide the Agent option. Each agent-mode prompt consumes GitHub AI credits. VS Code can also run Claude/Codex harnesses or pick **Cloud** as a session target (`vscode-agent-harnesses`).

## Notes

- VS Code Chat agents dropdown: **Agent** (autonomous local edits + tools/MCP), **Plan** (implementation plan; Start Implementation / Open in Editor hand off to Agent), **Ask** (answers, no autonomous multi-file loop). JetBrains/VS also document **Edit** (you pick the file set, accept per turn) vs Agent. Not Cursor’s four modes (`cursor-agent-modes`).
- Agent Host vs extension host: host sessions apply edits to the session folder/worktree (review, then commit/merge/discard). Extension-host sessions still use keep/undo pending edits. Shared multi-window sessions, multiple chats, quick chats, remote/Dev Container hosts, and Assisted permissions are Agent Host–only. Autopilot is an **agent mode** on the host and a **permission level** on the extension host. Existing extension-host sessions stay there.
- Subagents: enable `runSubagent` in the tools picker (and in custom-agent `tools` frontmatter). Same model/tools as the parent; **cannot nest**; no mid-run user pauses; result returns to the main chat. Invoke automatically (description match), by name, or `#runSubagent`. Custom agents: `github-copilot-custom-agents`.
- Spaces MCP tools work **only in Agent mode** (`github-copilot-spaces`). Cloud-agent “Delegate this task” / `/delegate` from the same Chat box starts the **remote** agent (may offer to push local changes first) — do not confuse the two buttons. Local Dev Container sessions put the host **inside** the container (`github-copilot-dev-containers`).
- CLI `copilot` is another local surface (`github-copilot-cli`). VS Code can **discover** recent Copilot CLI / Copilot app sessions and continue them after Agent Host adopts the first message (`vscode-external-sessions`). Treat issue text and MCP results as untrusted (`prompt-injection-agent-defense`). Do not use IDE agent mode as a merge gate.

## Sources

- [Asking GitHub Copilot questions in your IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide) — accessed 2026-09-09
- [About GitHub Copilot cloud agent — vs agent mode](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent) — accessed 2026-09-09
- [GitHub Copilot features — agentic](https://docs.github.com/en/copilot/get-started/features) — accessed 2026-09-09
- [Using Copilot cloud agent in your IDE](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-in-your-ide) — accessed 2026-09-09
- [VS Code Agent Host architecture](https://code.visualstudio.com/docs/agents/concepts/agent-host) — accessed 2026-09-19
- [Visual Studio Code 1.136](https://code.visualstudio.com/updates/v1_136) — accessed 2026-09-19
- [Choose and use an agent harness](https://code.visualstudio.com/docs/agents/run/agent-harnesses) — accessed 2026-09-20
- [Manage agent sessions in VS Code](https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions) — accessed 2026-09-20
