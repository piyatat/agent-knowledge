---
id: mongodb-atlas-mcp-and-free-tier
title: Atlas MCP rejects a custom agent, or a Free cluster pauses or throttles
kind: knowledge
tags: [mongodb, atlas, mcp, billing]
status: active
updated: 2026-11-22
when_to_use: An Atlas agent cannot authorize, tool calls return 429 or 403, or a Free cluster stops accepting connections
---

## Summary

MongoDB Atlas (`mongodb-atlas`) marketplace OAuth works only for clients MongoDB has already registered, and AI client access is off by default outside a brand-new signup organization. A Free cluster pauses after 30 days with no connections, caps at 100 operations per second, and can fail to resume if its MongoDB version is too old to restore.

## Notes

- **Wrong access model.** User-delegated OAuth is for interactive clients on the supported list (Cursor, Claude Code, Claude Desktop and web, Codex, ChatGPT, Devin, Grok Build, fx, and any later list on the access-models page). An agent you build, including a framework loop, needs an MCP configuration. That configuration is read-only until someone changes it, so write tools are absent. Creating one is an Organization Owner or Project Owner action. The client receives ingress credentials for `https://mcp.mongodb.com` only. Copy the client secret when it is shown; the UI does not show it again.
- **Org switch.** Except for organizations Atlas creates at signup, an Organization Owner has to enable AI clients. The switch covers every registered client and every project. It can force read-only even when the user could write. Atlas does not log each tool call. Enabling access is not the same as a per-project allow list.
- **Rate and tokens.** Over 2,000 requests per minute from one IP, or 500 per minute from one user, returns HTTP 429 and drops the request. MongoDB says these limits can change without notice and that you cannot read current usage against them. A programmatic service account allows 100 active access tokens, each good for one hour. Minting a new token per request returns HTTP 403 with OAuth error `access_denied` and “Access Token limit reached” until older tokens expire. Cache the token. These caps are separate from Atlas Administration API limits.
- **Free cluster ceilings.** One Free cluster per project. Storage is 0.5 GB including indexes. Throughput is 100 operations per second; past that, Atlas slows the network and inserts a one-second cooldown, and a deep queue waits longer. Data transfer is 10 GB in and 10 GB out per rolling seven days, with the same throttle. 500 connections. Aggregations cannot spill to disk. Server-side JavaScript is unavailable. After 30 days with zero connections the cluster pauses. Resume can fail when the paused cluster is on a MongoDB version Atlas will not restore; export first if the project will sit idle. Idle Free clusters may also be deactivated under the terms of service. The Clusters API can create a Free cluster and cannot modify one.
- **Other deployments.** The managed server is Atlas-only. The overview page says Atlas Infinite is not supported during public preview. Community Edition and Enterprise Advanced need the local MCP server.

## Sources

- [MCP access models](https://www.mongodb.com/docs/mcp-server/remote-mcp/access-models/) — accessed 2026-11-22
- [MongoDB MCP server overview](https://www.mongodb.com/docs/mcp-server/overview/) — accessed 2026-11-22
- [Managed MCP rate limits](https://www.mongodb.com/docs/mcp-server/remote-mcp/rate-limits/) — accessed 2026-11-22
- [Atlas Free cluster limits](https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/) — accessed 2026-11-22
- [Get started with the MongoDB MCP server](https://www.mongodb.com/docs/mcp-server/get-started/) — accessed 2026-11-22
