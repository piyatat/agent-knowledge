---
id: zed-external-agents
title: Zed External Agents — ACP Registry vs Zed Agent
tags: [zed, acp, mcp, orchestration]
status: active
updated: 2026-09-23
when_to_use: Installing Claude/Codex/OpenCode/Cursor/Copilot in Zed via ACP, or deciding Zed Agent settings vs an External Agent
---

## Summary

Zed hosts **External Agents** over **ACP** in the Agent Panel / Threads Sidebar. The agent process owns auth, models, billing, and most config. **Zed Agent** (Zed-hosted models, profiles, Zed Skills) is a different surface. Install from the **ACP Registry** (`zed: acp registry`); **ACP extensions are deprecated** and migrate to registry entries.

## Notes

- Curated registry agents include Claude, Codex, Gemini CLI, OpenCode, Copilot, Cursor, Pi, Poolside — list is not exhaustive. Custom: `agent_servers` in `settings.json` (`type: "custom"`, command/args/env). Zed does **not** bill External Agents; terms are with the agent vendor. A Zed-configured Anthropic/OpenAI key does **not** log in Claude Agent or Codex.
- Config boundary: External threads usually ignore Zed profiles and Zed Skills. MCP **may** be forwarded over ACP **and** the agent may read its own MCP files — if a tool is missing, check both. Tool permissions can be Zed ACP forwarding plus the agent’s native gates. Use `dev: open acp logs` when debugging.
- Import existing agent sessions from Thread History → Import Threads (needs a working directory; re-import skips dupes). Remote/SSH projects: credentials may be local, remote, or agent-native — do not assume the local keychain applies. Pair with `agent-client-protocol-acp`; Cursor’s `agent acp` is the inverse (Cursor as the agent, `cursor-acp-extensions`).

## Sources

- [Zed External Agents](https://zed.dev/docs/ai/external-agents.html) — accessed 2026-09-23
- [Zed Agent Settings](https://zed.dev/docs/ai/agent-settings.html) — accessed 2026-09-23
- [ACP Registry is live](https://zed.dev/blog/acp-registry) — accessed 2026-09-23
