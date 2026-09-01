---
id: goose-aaif-agent
title: goose — AAIF local agent (desktop, CLI, API)
tags: [aaif, goose, mcp, acp]
status: active
updated: 2026-09-01
when_to_use: Choosing or embedding the AAIF-hosted local agent (goose) versus Cursor/Claude Code/Codex
---

## Summary

**goose** is the AAIF-hosted, vendor-neutral local agent (desktop + CLI + embed API, Rust). It is a **runtime**, not a protocol: it consumes MCP extensions, Agent Skills, and can speak **ACP** (as a server to IDEs, or as a client wrapping Claude Code / Codex / Amp / Pi). Do not confuse it with IBM’s old Agent Communication Protocol (merged into A2A).

## Notes

- Surfaces: native app (macOS/Linux/Windows), `goose` CLI, and an API. Multi-provider (Anthropic, OpenAI, Google, Ollama, Bedrock, …) via API keys **or** existing Claude/ChatGPT/Gemini subscriptions through ACP adapters. Repo: `aaif-goose/goose` (moved from `block/goose`).
- **Extensions** = MCP servers. Built-ins include Developer (default; can exec/edit without asking), Computer Controller, Memory, Skills (default), Todo, Extension Manager, Summon (subagents), Code Mode, Apps (MCP Apps-style HTML in Desktop). goose malware-scans external extensions before activation. Any MCP server can be added (`goose mcp`, `goose configure`, or Desktop → Extensions).
- **Recipes** are portable YAML workflows (extensions, prompts, params, subrecipes) for share/CI — closer to a pinned runbook than a SKILL.md. Skills still live on disk (`~/.config/goose/skills/`, `.goose/skills/`, plus Claude-compatible `~/.claude/skills/` / `.claude/skills/`).
- **ACP providers** (`GOOSE_PROVIDER=claude-acp|codex-acp|amp-acp|pi-acp`) replace deprecated CLI-wrapper providers. goose passes its extensions through as MCP to the ACP agent. Limits: no `session resume` / `fork` yet; ACP session ids ≠ goose session ids. `GOOSE_MODE` maps to each agent’s permission mode (`auto` on Claude ACP is `bypassPermissions` — treat as full trust).
- goose can also **be** an ACP server (Zed / JetBrains / VS Code). Pair with `agent-skills-open-standard` and `agent-client-protocol-acp`; do not assume Cursor cloud/subscriptions semantics.

## Sources

- [goose home](https://goose-docs.ai/) — accessed 2026-09-01
- [Using Extensions](https://goose-docs.ai/docs/getting-started/using-extensions) — accessed 2026-09-01
- [ACP Providers](https://goose-docs.ai/docs/guides/acp-providers) — accessed 2026-09-01
- [Recipes](https://goose-docs.ai/docs/guides/recipes/) — accessed 2026-09-01
- [aaif-goose/goose](https://github.com/aaif-goose/goose) — accessed 2026-09-01
