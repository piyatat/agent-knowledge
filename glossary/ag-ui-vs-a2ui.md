---
id: ag-ui-vs-a2ui
title: AG-UI vs A2UI vs MCP Apps
tags: [ag-ui, a2ui, ux, glossary]
status: active
updated: 2026-09-03
when_to_use: Choosing how an agent talks to a frontend vs declaring widgets vs shipping a sandboxed MCP iframe
---

## Summary

**AG-UI** is an event stream between an agent backend and a user-facing app (tokens, tool calls, shared state, HITL). **A2UI** is a declarative widget protocol: the agent sends JSON describing UI from a client-owned catalog; the renderer draws natively. **MCP Apps** is a host iframe for a *tool server’s* HTML. They stack; they are not substitutes.

## Notes

- Three agentic layers commonly cited together: AG-UI (agent ↔ user app), MCP (agent ↔ tools/data), A2A (agent ↔ agent). AG-UI does not replace MCP or A2A.
- AG-UI events cover run lifecycle (`RUN_STARTED` / `RUN_FINISHED` / `RUN_ERROR`), streamed text, tool-call progress, and state snapshot/delta. Transports are SSE, WebSockets, or similar — the contract is the event types. CopilotKit documents AG-UI as the pipe that can carry A2UI without changing agent code.
- A2UI (Google, Apache-2.0) is *generative UI without executing agent code*. **v0.9.1** is current production (`application/a2ui+json`); **v0.9** is the prior stable family; **v0.8** is legacy (structured-output first); **v1.0** is a **candidate** (bidirectional RPC). Agents may only request components in the negotiated catalog — no arbitrary JS.
- v0.9 is **prompt-first**: schema + examples go in the system prompt. Agent→renderer messages: `createSurface`, `updateComponents`, `updateDataModel`, `deleteSurface`. Modular catalogs (`catalogs/basic/catalog.json`) are swappable. A2UI can ride AG-UI, A2A, MCP, WebSockets, or REST.
- v1.0 candidate (do not treat as production): terminology is **agent** / **renderer** (not server/client); MIME `application/a2ui+json`; catalogs mix on one surface (`catalogId` on the component, else surface default — no capabilities fallback); `createSurface` can embed initial components/data; `theme` is gone; bidirectional `callRendererFunction` / `callAgentFunction` with `allowedCallers` and `requiresUserActivation` in the catalog. Catalog `protocolVersion` omitted defaults to `"0.9"`.
- Use MCP Apps when the *MCP server* owns a sandboxed form/chart inside an IDE/host. Use A2UI when the *product frontend* should render native components. Use AG-UI when you need a standard stream for chat, approvals, and state sync across agent frameworks.

## Sources

- [A2UI v0.9.1 → v1.0 evolution guide](https://a2ui.org/specification/v1.0-evolution-guide/) — accessed 2026-09-03
- [A2UI home](https://a2ui.org/) — accessed 2026-09-03
- [A2UI Protocol v0.9](https://a2ui.org/specification/v0.9-a2ui/) — accessed 2026-09-01
- [A2UI v0.8 → v0.9 evolution guide](https://github.com/google/A2UI/blob/main/specification/v0_9/docs/evolution_guide.md) — accessed 2026-09-01
- [A2UI v0.9 (Google Developers Blog)](https://developers.googleblog.com/a2ui-v0-9-generative-ui/) — accessed 2026-09-01
- [AG-UI overview](https://docs.ag-ui.com/introduction) — accessed 2026-08-22
- [AG-UI GitHub](https://github.com/ag-ui-protocol/ag-ui/) — accessed 2026-08-22
