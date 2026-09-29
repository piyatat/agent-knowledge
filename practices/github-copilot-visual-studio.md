---
id: github-copilot-visual-studio
title: Copilot in Visual Studio — Agent, Plan, and SDK chat
tags: [github, ux, mcp, orchestration]
status: active
updated: 2026-09-29
when_to_use: Using Copilot Agent/Plan/Ask in Visual Studio (2022 17.14+ or 2026), or contrasting it with VS Code Agent Host
---

## Summary

**Visual Studio** Copilot Chat has **Ask**, **Plan**, and **Agent** modes in the editor. Agent mode (17.14+) edits the solution, runs terminals, and loops on build/test failures. Visual Studio **2026** adds **Agent (Preview)** and an optional **Copilot SDK** chat stack (same harness as Copilot CLI / the Copilot app). Not VS Code Agent Host (`github-copilot-ide-agent`) and not Actions cloud agent (`github-copilot-coding-agent`).

## Notes

- Prerequisites: Visual Studio **2022 17.14+** (unified Copilot is built-in from 17.10). Enable **Agent mode in the chat pane** under Tools → Options → GitHub → Copilot → Copilot Chat. Enterprise admins can hide it with the Copilot dashboard **Editor preview features** flag.
- Agent: high-level task → tools (built-in, MCP, skills) → keep/undo. MCP tools you add are **off until checked**. Confirmation before non-built-in tools / terminals; Allow can persist per session, solution, or always. Workspace file edits stay inside the solution tree / open directory (exclusions apply); **terminal commands have the VS process’s permissions**. Checkpoints: **Restore** next to a prior prompt (no stepwise undo). VS **2026 18.6+**: multi-file summary diff.
- **Plan agent** (separate mode): read-only explore, clarifying questions, writes markdown under `.copilot/plans/`, then **Implement plan** hands off to Agent. In-session **Planning** (Enable Planning checkbox) is a different scratchpad under `%LOCALAPPDATA%\Temp\VisualStudio\copilot-vs` and is deleted with the session.
- VS-only tools: `find_symbol` (C++, C#, Razor, TypeScript, plus other LSP languages); C++ `get_symbol_call_hierarchy` / `get_symbol_class_hierarchy` with the Desktop C++ workload. Built-in `@debug`, `@profiler`, `@test`, `@vs`. Custom agents: picker → `%USERPROFILE%\.github\agents` (`github-copilot-custom-agents`). Feature matrix: skills ✓, custom agents ✓, code review ✓, MCP ✓, BYOK ✓; no Edit mode.
- 2026 Insiders: **Use new Copilot chat experience** switches Ask/Agent onto the Copilot SDK (longer sessions, prompt cache). BYOK (Foundry, OpenAI, Anthropic, Ollama) now targets **Agent (Preview)** — older BYOK on legacy Ask/Agent is dropped. Cloud-agent handoff from Chat can open a remote session (`github-copilot-coding-agent`). Review terminal commands; not a merge gate.

## Sources

- [Use Agent Mode (Visual Studio)](https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-mode) — accessed 2026-09-29
- [Get started with GitHub Copilot (Visual Studio)](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-get-started) — accessed 2026-09-29
- [Visual Studio 2026 release notes](https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes) — accessed 2026-09-29
- [Copilot feature matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix) — accessed 2026-09-29
