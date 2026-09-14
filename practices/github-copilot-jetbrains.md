---
id: github-copilot-jetbrains
title: Copilot in JetBrains — plugin vs AI Assistant ACP vs CLI
tags: [github, acp, interoperability, ux]
status: active
updated: 2026-09-14
when_to_use: Choosing Copilot’s JetBrains plugin, AI Assistant ACP agent, or Copilot CLI in the IDE terminal
---

## Summary

JetBrains IDEs expose **three Copilot surfaces**: the **GitHub Copilot plugin** (full IDE agent), **Copilot inside JetBrains AI Assistant** over **ACP**, and **Copilot CLI** in the integrated terminal. Same Copilot subscription; different capabilities. Not Cursor-in-JetBrains (`cursor-jetbrains-acp`) and not Claude Code’s JetBrains plugin (`claude-code-jetbrains`).

## Notes

- **Plugin** (recommended for a full workflow): chat, inline chat, completions, next-edit, commit messages, code review, model picker / BYOK, multiple agent harnesses. Docs: the plugin is moving its local harness to **Copilot agent** as the default for feature parity. Public-preview **sandbox**, OpenTelemetry session analysis, and enterprise managed settings (plugins, MCP, permissions) apply here.
- **AI Assistant ACP**: Copilot is a **bundled** Registry agent (no extra plugin to update). Chat/agent only — **no** completions, NES, inline chat, review, or commit-message generation. Alt+A / Cmd+Shift+A → agent picker → GitHub Copilot. Requires a valid Copilot subscription and credentials; the ACP Registry discovers it automatically. Wire protocol: Copilot CLI as an ACP server (`github-copilot-cli`).
- **CLI in the IDE terminal**: same `copilot` binary as a standalone terminal (`github-copilot-cli`). Completions/review are not included; pair with `/sandbox` / `--cloud` (`github-copilot-sandbox`). Changelog 2026-09-08 also added a public-preview **CLI-to-IDE** handoff that can pull JetBrains selections, diagnostics, and file refs into a terminal session.
- Pick plugin when you need editor-native completions and review. Pick ACP when the team already lives in AI Assistant and does not want a second plugin. Pick CLI for headless `-p` or sandbox policy. Do not treat any of these as a merge gate.

## Sources

- [Using GitHub Copilot in JetBrains IDEs](https://docs.github.com/en/copilot/concepts/agents/copilot-in-jetbrains) — accessed 2026-09-14
- [Enterprise-managed sandbox in Copilot for JetBrains](https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains/) — accessed 2026-09-14
- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-09-14
