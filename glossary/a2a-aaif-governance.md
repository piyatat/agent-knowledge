---
id: a2a-aaif-governance
title: A2A under AAIF — same foundation as MCP, not a merge
tags: [a2a, glossary, governance, interoperability]
status: active
updated: 2026-09-01
when_to_use: Explaining who governs A2A vs MCP, or whether AAIF hosting changed the wire
---

## Summary

In **August 2026** Agent2Agent joined the Linux Foundation **Agentic AI Foundation (AAIF)** as a hosted project. That is **governance**, not a protocol merge. A2A remains agent↔agent; MCP remains agent↔tools. Each project keeps its own technical steering.

## Notes

- AAIF already hosted MCP, goose, AGENTS.md, and agentgateway. A2A adds the **agent-to-agent** layer: Agent Cards, task delegation, streaming/push. Google launched A2A (April 2025), donated it to the Linux Foundation (with AWS, Cisco, Microsoft, Salesforce, SAP, ServiceNow), and IBM’s ACP merged into A2A (August 2025). v1.0 shipped March 2026.
- Stack (AAIF’s own split): AGENTS.md = project instructions; goose = agent runtime (`goose-aaif-agent`); MCP = tools/data; agentgateway = routing/policy/observability (`agentgateway-aaif`); A2A = peer discovery and task exchange. agentgateway joined as the fourth hosted project (Growth-stage, 2026) before A2A; it is a proxy, not a protocol merge.
- Do not rewrite integrations because of the move. Cards, bindings, and signed cards are still the v1.0 spec at a2a-protocol.org. Neutral hosting mainly reduces single-vendor roadmap risk for a protocol with 150+ orgs, including competitors.
- Complementary, not competing: an agent can speak A2A to peers and MCP to its tools (`a2a-vs-mcp`). ACP (IDE↔coding agent) is a different wire and is not an AAIF project.

## Sources

- [A2A joins AAIF’s open agentic stack](https://aaif.io/blog/a2a-joins-aaif) — accessed 2026-08-30
- [AAIF projects](https://aaif.io/projects) — accessed 2026-08-30
- [Agent2Agent (AAIF)](https://aaif.io/projects/agent2agent) — accessed 2026-08-30
- [A2A Protocol](https://a2a-protocol.org/latest/) — accessed 2026-08-30
- [agentgateway joins AAIF](https://aaif.io/blog/agentgateway-joins-aaif-as-an-open-gateway-for-agentic-ai-infrastructure) — accessed 2026-09-01
