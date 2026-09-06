---
id: cursor-jetbrains-acp
title: Cursor in JetBrains — ACP Registry agent
tags: [cursor, acp, interoperability, ux]
status: active
updated: 2026-09-06
when_to_use: Running Cursor’s agent inside IntelliJ/PyCharm/WebStorm instead of the Cursor editor
---

## Summary

Cursor’s agent runs **inside JetBrains IDEs** over **ACP**: JetBrains AI Chat is the client, Cursor is the server. You stay in IntelliJ / PyCharm / WebStorm / etc. This is a host integration, not the `agent acp` wire-protocol note (`cursor-acp-extensions`) and not JetBrains’ own AI subscription.

## Notes

- Prerequisites (Cursor docs): a **paid Cursor plan**, and a JetBrains IDE with the **AI Assistant** plugin enabled (**2025.1+**). Open **AI Chat** → Add Agent from **ACP Registry** → install **Cursor** → authenticate → prompt. Edits land in the JetBrains editor; shell runs in the IDE terminal. Model picker is the usual Cursor set. Pricing is the same usage-based Cursor subscription.
- Same ACP session as `agent acp`: project/user `mcp.json` only — **team-dashboard MCP is not loaded**. Modes/permissions follow the CLI/ACP client (`cursor-acp-extensions`, `agent-client-protocol-acp`). Debug mode from the Cursor desktop app is **not** documented on the JetBrains page.
- Third-party JetBrains/ACP write-ups cite **2025.3.2+** for the Registry UI, no JetBrains AI premium required, and **WSL unsupported** for ACP agents. Prefer the JetBrains ACP docs when those details matter; Cursor’s own page does not list them.
- Do not confuse this with Copilot-in-JetBrains or Codex-in-JetBrains (separate Registry agents). For embedding Cursor in a *custom* IDE, implement the stdio `cursor/*` methods instead of this install path.

## Sources

- [JetBrains (Cursor)](https://cursor.com/docs/integrations/jetbrains) — accessed 2026-09-06
- [ACP (Cursor CLI)](https://cursor.com/docs/cli/acp.md) — accessed 2026-09-06
- [ACP protocol overview](https://agentclientprotocol.com/protocol/overview) — accessed 2026-09-06
