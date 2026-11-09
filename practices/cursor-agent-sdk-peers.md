---
id: cursor-agent-sdk-peers
title: Agent SDK peer agents — independent specialists by slug
tags: [cursor, sdk, orchestration, multi-agent]
status: active
updated: 2026-11-09
when_to_use: Connecting one Agent SDK agent to another via defineConnection({ agent }), or choosing a peer instead of a subagent
---

## Summary

An Agent SDK **peer connection** lets one agent ask an **independent specialist** for help. The specialist keeps its own instructions, tools, and sessions. On Cursor hosting, team-owned agents reach each other by **deployment slug**; the SDK handles routing and authentication. Not a subagent inside one project (`cursor-agent-sdk`), not A2A (`agent-to-agent-a2a-protocol`), and not Cloud Agent delegation (`cursor-agent-sdk-cloud-agents`).

## Notes

- Declare the connection only on the **caller**: `bot/mcp-connections/<name>.ts` default-exports `defineConnection({ agent: "<slug>", description })`. The filename becomes the MCP server name; `agent` is the specialist’s **lowercase deployment slug** (locally, the mount slug / directory name). Give the caller a **one-way** routing rule so the two agents never bounce a request back and forth.
- The model gets the peer’s `ask` and `check` tools, plus `call_tool` when the peer has **server** tools. `ask` returns `{ status, sessionId, reply }` as text; pass `sessionId` on the next `ask` to continue that specialist session. If the specialist is still working, `ask` returns `status: "running"` and `check` waits (`waitSeconds`). `call_tool` runs a named tool on the peer **without** a model turn there; it follows the same direct-call rules as other host MCP calls.
- Local try: one process, `agent-sdk dev ./agents`, then `agent-sdk chat --url http://127.0.0.1:3000/<caller-slug>`. Deploy both from **pushed** Git refs (`agent-sdk deploy --dir … --slug …`). On a local multi-agent serve, unknown slugs and self-references **fail at startup**. A single-agent serve **omits** peers with a warning unless the host sets `--peers-url`.
- **Peer vs subagent:** a subagent is a child role inside one agent (inherits the parent project). A peer is a complete agent you also run on its own (owns its project surface). Reachability: local co-hosted agents, or declared deployments on the **same team**. Self-host: run peers under one `agent-sdk` process; if turns run on remote workers, protect with `--bearer-token` and set `--public-url` as deploy docs describe.

## Sources

- [Peer agents](https://cursor.com/docs/agent-sdk/guides/agent-to-agent) — accessed 2026-11-09
- [MCP connections](https://cursor.com/docs/agent-sdk/reference/connections) — accessed 2026-11-09
- [Agent SDK](https://cursor.com/docs/agent-sdk) — accessed 2026-11-09
- [Cloud agents](https://cursor.com/docs/agent-sdk/guides/cloud-agents) — accessed 2026-11-09
