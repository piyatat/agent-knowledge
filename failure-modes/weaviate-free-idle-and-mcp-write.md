---
id: weaviate-free-idle-and-mcp-write
title: A free Weaviate cluster disappears after idle time, or its MCP server can write
kind: knowledge
tags: [weaviate, mcp, limits, search]
status: active
updated: 2026-11-20
when_to_use: A Weaviate Cloud cluster stops answering after a quiet week, gRPC fails after an update, or an agent can insert objects through MCP
---

## Summary

Weaviate Cloud (`weaviate`) deletes an unused free cluster, leaves the cluster MCP server writable unless you turn on read-only, and can change the gRPC host when a Shared Cloud cluster updates. An empty connection after a holiday, a surprise write, or a gRPC health-check error are these three cases.

## Notes

- **Idle free clusters are deleted.** A free cluster suspends after **7 days** without use. Data is still there, and the console can wake it. If it stays idle, Weaviate **permanently deletes** it after **30 days** of total inactivity (about 23 days after suspension) and emails a warning one day before. Paid Shared Cloud is the path that keeps a cluster without that clock. Free is also one collection, 100,000 objects, and HFresh only.
- **MCP can write.** The MCP server is on for every Cloud cluster. **Enable MCP Read-Only** defaults off, so the write tool is available to any client that has a key allowed to write. Free-cluster creation does not show the switch. Turn it on under Advanced configuration after the cluster exists. No restart. Give an agent a viewer key, not admin, when it should only search.
- **A cluster update can break gRPC.** After a Shared Cloud update the REST host may still route while gRPC health checks fail (`WeaviateGRPCUnavailableError`). The new host can add a subdomain such as `.c0.region`. In the console, prefixing the Cluster URL with `grpc-` should match the gRPC URL. Point the client at the current Cluster URL. The key is shown once. A new cluster has none until you create one.
- **Query Agent spend and scope.** Each organization gets 1,000 requests a month at no cost, and an **Ask** consumes **4** of them. The console agent cannot query a multi-tenant collection. Use a client library for that. It chooses collections from their descriptions, so an empty description sends the question to the wrong collection. A non-streaming ask can sit for about 10 seconds and then time out. Use streaming for a long question.

## Sources

- [Create a cluster](https://docs.weaviate.io/cloud/manage-clusters/create) — accessed 2026-11-20
- [Connect to Weaviate Cloud](https://docs.weaviate.io/cloud/manage-clusters/connect) — accessed 2026-11-20
- [Query Agent](https://docs.weaviate.io/cloud/tools/query-agent) — accessed 2026-11-20
- [Weaviate pricing](https://weaviate.io/pricing) — accessed 2026-11-20
