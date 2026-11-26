---
id: neo4j-aura-pause-and-write-tool
title: Aura Free would not connect, or a Cypher tool changed the graph
kind: knowledge
tags: [neo4j, graph, billing, mcp]
status: active
updated: 2026-11-26
when_to_use: An Aura Free instance rejected queries after a few idle days, or an agent’s Cypher wrote when the task was to read
---

## Summary

AuraDB Free (`neo4j-aura`) pauses after 72 hours without activity, and a paused database accepts no sessions. If that pause lasts more than 30 days, Aura deletes the instance. The hosted MCP server’s read-write tool runs Cypher that can change data. Read-only Cypher is a different tool, and hiding the write tool per client is not available yet.

## Notes

- **Idle is not a crash.** Free instances cannot be paused from the button. Aura pauses them after 72 hours of inactivity. While paused, nothing can connect, including the MCP host for that instance, so an agent cannot resume the graph itself. Resume is the Play control in the console. Paid instances left paused resume on their own after 30 days and are billed at a discount while paused; the pricing page describes that discount as 80%. Free does not get that resume. Past 30 days paused, the Free instance and its data are deleted. One on-demand backup is kept on Free. Deleting the instance also deletes snapshots.
- **The write tool is listed, not implied by read.** The July 2026 announcement separates schema, read-only Cypher, and read-write Cypher, and says a control to expose only some tools is still coming. Connecting MCP after Tool authentication is enabled does not by itself make the session read-only. A prompt that says “clean up” or “fix the graph” can call the write tool. The MCP hostname is `https://<instance-id>.mcp-instances.neo4j.io`. Pointing a client at the Bolt URI or the Query API will not speak MCP. Tool authentication has to be on for the organization or the server refuses the client. VDC instances do not have this server yet.
- **Free size is three caps.** The quotas page caps Free at 200,000 nodes, 400,000 relationships, and 1 GB of storage. Filling any one of them stops that kind of growth. Free is a single zone with no SLA.

## Sources

- [Aura instance actions](https://neo4j.com/docs/aura/managing-instances/instance-actions/) — accessed 2026-11-26
- [Neo4j AuraDB quotas and limits](https://neo4j.com/docs/aura/quotas-and-limits/) — accessed 2026-11-26
- [Neo4j pricing](https://neo4j.com/pricing/) — accessed 2026-11-26
- [MCP for Aura](https://neo4j.com/docs/mcp/current/mcp-for-aura/) — accessed 2026-11-26
- [Introducing MCP for Aura](https://neo4j.com/blog/genai/introducing-mcp-for-aura/) — accessed 2026-11-26
