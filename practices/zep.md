---
id: zep
title: Zep — temporal context graph for agent memory
kind: service
tags: [zep, memory, mcp, graph]
status: active
updated: 2026-11-17
when_to_use: Storing and retrieving a user’s facts across agent sessions, including a voice agent
---

## Summary

**Zep** is a hosted context store for agents: a temporal knowledge graph plus thread memory. You send episodes (a message, JSON, or text) and later retrieve a context block or graph facts. SDKs exist for Python, TypeScript, and Go. A separate **Context MCP** server lets an end user attach their own memory to Claude, Codex, Cursor, and similar clients. It is not Mem0 (`mem0`).

## Notes

- **Access.** Create an account at the app linked from `links` and use the API key the app issues. The install page covers the Python, TypeScript, and Go clients. Zep Cloud is the managed default. Enterprise can add your own encryption keys or run Zep in your VPC.
- **Auth.** API calls use that project API key. Context MCP is a different door: one Streamable HTTP URL, `https://api.getzep.com/mcp` (BYOC uses the same `/mcp` path on its own host). The end user signs in with Google Workspace or your IdP. Zep does not store their password. The client searches that user’s graph only and does not pass a user id. **Writes are on by default** (`add_memory`, and `add_memory_to_graph` when shared graphs are enabled). Turning writes off hides those tools immediately, including for clients already signed in. Turning them back on applies to new sign-ins; a client that consented while read-only must reconnect. An account-level writes switch blocks every connection.
- **Identity.** Zep v4 addresses users, threads, and graphs by server-generated UUIDs. Create each resource once, store the UUID in your database, and pass that UUID later. A new user or thread on every session splits the history. Map the user UUID to your auth identity.
- **Plans (pricing page, 2026-11-17).** **Free:** **10,000** credits a month, no rollover and no auto top-up, **2** projects, **1** Context MCP seat, **5** custom entity and edge types, variable rate limits. **Flex** is **$125/month**: **50,000** credits, then **$25** per extra **10,000**, auto top-up at 20% remaining, 30-day rollover, **600** requests per minute, **5** projects, **5** MCP seats, API logs kept **1 day**. **Flex Plus** is **$375/month**: **200,000** credits, then **$75** per **40,000**, **1,000** rpm, webhooks, analytics, **7-day** logs. Enterprise is custom (SOC 2 Type II, HIPAA BAA, guaranteed limits, **1-year** logs). An episode up to **350** bytes is **1** credit, plus **1** credit per further 350 bytes. Retrieval, storage, and users are not metered. Agent Skills is free on every plan until **2027-01-04**. Free and Flex rate limits can be lowered under load.
- **Alternatives.** Mem0 when you want a memory API with a large self-hosted option. Letta (`letta-code`) when memory should live inside that agent runtime. LiveKit Agents (`livekit-agents`) is the voice pipeline; Zep is an optional memory beside it.
- **Caveats.** Retrieved text is evidence, not an instruction (`zep-memory-as-instructions`). The default thread context call does not take metadata filters. Shared Context Graphs are default-deny under UserGroup ABAC and wide open in project-wide mode.

## Sources

- [Zep pricing](https://www.getzep.com/pricing/) — accessed 2026-11-17
- [Install SDKs](https://help.getzep.com/install-sdks) — accessed 2026-11-17
- [Memory security best practices](https://help.getzep.com/memory-security) — accessed 2026-11-17
- [Context MCP server](https://help.getzep.com/context-mcp-server) — accessed 2026-11-17
- [Configuring Context MCP authentication](https://help.getzep.com/context-mcp-server/authentication) — accessed 2026-11-17
- [LiveKit integration](https://help.getzep.com/livekit-memory) — accessed 2026-11-17
