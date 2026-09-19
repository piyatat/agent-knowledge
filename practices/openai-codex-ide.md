---
id: openai-codex-ide
title: Codex IDE extension — VS Code, Cursor, JetBrains, Xcode
tags: [openai, ux, cli, orchestration]
status: active
updated: 2026-09-19
when_to_use: Installing Codex beside the editor, or choosing local IDE chat vs Codex cloud handoff
---

## Summary

The **Codex IDE extension** runs the same coding agent as the CLI, with open files and selections already in context. VS Code / Cursor / Windsurf share one extension; JetBrains and Xcode have their own integrations. Agent behavior comes from `~/.codex/config.toml` (shared with CLI). Not Copilot IDE agent mode (`github-copilot-ide-agent`) and not Cursor’s built-in Agent.

## Notes

- Install from the VS Code Marketplace (or the Cursor/Windsurf builds). Sidebar: Codex icon, or Command Palette **Codex: Open Codex Sidebar**. Sign in with ChatGPT (Plus/Pro/Business/Edu/Enterprise usage) or an API key. JetBrains: AI Chat → Codex (ChatGPT, API key, or JetBrains AI). Xcode: coding assistant → choose Codex. Create Git checkpoints before/after a task so you can revert.
- Two settings layers: `config.toml` for model, approvals, sandbox, MCP (`openai-codex-mcp`, `openai-codex-sandbox`); editor `chatgpt.*` keys for UI (`openOnStartup`, `followUpQueueMode` queue vs steer, `reviewDelivery` inline vs detached, Windows `runCodexInWindowsSubsystemForLinux`). Do not put `chatgpt.*` in `config.toml`. `chatgpt.cliExecutable` is for CLI developers only.
- Local vs cloud: keep short edits in the IDE; connect **Codex web** when the task needs a longer cloud environment (`openai-codex-cloud-environments`). ChatGPT desktop can share the same project chats when IDE context is on. Review diffs in place; `/review` follows `chatgpt.reviewDelivery`.
- Windows: native sandbox by default; flip WSL2 when the repo/toolchain is Linux-native (reloads the editor). JetBrains/VS Code-compatible editors run on macOS, Windows, and Linux. Subagent visibility in the IDE extension is still catching up to app/CLI (`openai-codex-subagents`).

## Sources

- [IDE extension (Codex)](https://developers.openai.com/codex/ide) — accessed 2026-09-19
- [Settings (Codex IDE)](https://developers.openai.com/codex/ide/settings) — accessed 2026-09-19
- [Commands (Codex IDE)](https://developers.openai.com/codex/ide/commands) — accessed 2026-09-19
