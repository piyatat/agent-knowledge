---
id: ag-ui-vs-a2ui
title: AG-UI vs A2UI vs MCP Apps
tags: [ag-ui, a2ui, ux, glossary]
status: active
updated: 2026-08-22
when_to_use: Choosing how an agent talks to a frontend vs declaring widgets vs shipping a sandboxed MCP iframe
---

## Summary

**AG-UI** is an event stream between an agent backend and a user-facing app (tokens, tool calls, shared state, HITL). **A2UI** is a declarative widget protocol: the agent sends JSON describing UI from a client-owned catalog; the client renders natively. **MCP Apps** is a host iframe for a *tool server’s* HTML. They stack; they are not substitutes.

## Notes

- Three agentic layers commonly cited together: AG-UI (agent ↔ user app), MCP (agent ↔ tools/data), A2A (agent ↔ agent). AG-UI does not replace MCP or A2A.
- AG-UI events cover run lifecycle (`RUN_STARTED` / `RUN_FINISHED` / `RUN_ERROR`), streamed text, tool-call progress, and state snapshot/delta. Transports are SSE, WebSockets, or similar — the contract is the event types.
- A2UI (Google, Apache-2.0) is *generative UI without executing agent code*. Production spec is v0.9.1 (`application/a2ui+json`); v1.0 is a candidate. Agents may only request components in the client catalog — no arbitrary JS.
- Do not conflate names: A2UI = widgets; AG-UI = the live agent↔frontend pipe. A2UI messages can ride AG-UI, A2A, SSE, or WebSockets.
- Use MCP Apps when the *MCP server* owns a sandboxed form/chart inside an IDE/host. Use A2UI when the *product frontend* should render native components. Use AG-UI when you need a standard stream for chat, approvals, and state sync across agent frameworks.

## Sources

- [AG-UI overview](https://docs.ag-ui.com/introduction) — accessed 2026-08-22
- [AG-UI GitHub](https://github.com/ag-ui-protocol/ag-ui/) — accessed 2026-08-22
- [A2UI home](https://a2ui.org/) — accessed 2026-08-22
- [What is A2UI](https://github.com/a2ui-project/a2ui/blob/main/docs/introduction/what-is-a2ui.md) — accessed 2026-08-22
