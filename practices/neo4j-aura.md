---
id: neo4j-aura
title: Neo4j Aura — hosted graph database with a per-instance MCP server
kind: service
tags: [neo4j, graph, database, mcp]
status: active
updated: 2026-11-26
when_to_use: Storing an app’s graph on Neo4j Aura, or letting an agent query that instance over MCP
---

## Summary

**Neo4j Aura** hosts a Neo4j graph. AuraDB Free is $0 with no card: 200,000 nodes, 400,000 relationships, and 1 GB of storage, one zone, and no uptime SLA. It pauses itself after 72 hours without activity and is deleted if it stays paused for more than 30 days. Each Free, Professional, or Business Critical instance has a hosted MCP URL. The announced tools are schema, read-only Cypher, and a separate read-write Cypher tool. Virtual Dedicated Cloud instances are not on that MCP yet. Use Aura when the app should query a graph you model. Use Zep (`zep`) when the graph is agent memory that Zep builds from episodes, not a database you design.

## Notes

- **Access.** The homepage Get started links go to `links.get`. On 2026-11-26 `https://console.neo4j.io/` stayed put and returned 200; the page is a short shell with no title. MCP requires Tool authentication turned on under the organization’s Security settings. The server URL is `https://<instance-id>.mcp-instances.neo4j.io`. That host is not the Bolt URL and not the Query API URL. Sign-in is the Aura user in the browser. The July 2026 announcement lists three tools: get schema, read-only Cypher, and read-write Cypher. It also says choosing which tools a client sees is still to come, so a client that lists every tool can call the write tool. Professional, Business Critical, and Free are in scope. VDC is not.
- **Plans.** Free has no SLA, is not highly available, and offers on-demand backup with one backup kept. You cannot pause Free yourself. Professional starts at $0.09 per GB-hour with a 1 GB minimum, up to 128 GB of memory and 2 TB of storage, on AWS, Azure, or Google Cloud, with daily backups kept 7 days. The pricing page says pausing a database saves 80% of running cost. Instance actions say a paused paid instance is billed at a discounted rate and automatically resumes after 30 days. Storage, IO, backup, and data transfer are included in that GB-hour price. Business Critical adds a 99.95% SLA and hourly backups kept 30 days.
- **What an agent can change.** Read-only Cypher cannot alter the graph. The read-write tool can. A paused instance accepts no connections, so MCP cannot resume it; resume is the console Play control, and a Free instance paused longer than 30 days is deleted. Hitting 200,000 nodes or 400,000 relationships is the Free cap, separate from the 1 GB storage cap. Details: `neo4j-aura-pause-and-write-tool`.

## Sources

- [Neo4j AuraDB quotas and limits](https://neo4j.com/docs/aura/quotas-and-limits/) — accessed 2026-11-26
- [Aura instance actions](https://neo4j.com/docs/aura/managing-instances/instance-actions/) — accessed 2026-11-26
- [Neo4j pricing](https://neo4j.com/pricing/) — accessed 2026-11-26
- [MCP for Aura](https://neo4j.com/docs/mcp/current/mcp-for-aura/) — accessed 2026-11-26
- [Neo4j MCP quickstart](https://neo4j.com/docs/mcp/current/quickstart/) — accessed 2026-11-26
- [Introducing MCP for Aura](https://neo4j.com/blog/genai/introducing-mcp-for-aura/) — accessed 2026-11-26
- [Neo4j Aura console](https://console.neo4j.io/) — accessed 2026-11-26
- [Neo4j](https://neo4j.com/) — accessed 2026-11-26
