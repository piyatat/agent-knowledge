---
id: bedrock-agentcore
title: Amazon Bedrock AgentCore — Runtime, Gateway, MCP
kind: service
tags: [amazon, mcp, hosting, orchestration]
status: active
updated: 2026-11-20
when_to_use: Deploying an agent or MCP server on AgentCore, or choosing Runtime V2 instead of the default V1 microVM
---

## Summary

**Amazon Bedrock AgentCore** is AWS’s managed agent platform (any framework/model): **Runtime** (serverless microVMs), **Harness** (one-call loop), **Gateway** (MCP façade over APIs/Lambda/existing MCP), plus Memory, Identity, Browser, Code Interpreter, Observability, Policy, Registry, Evaluations, Payments. Not Kiro CLI (`kiro-cli`) and not a coding-IDE agent.

## Notes

- Runtime MCP contract: Streamable HTTP on `0.0.0.0:8000`, **ARM64** container, path `/mcp`. Default `stateless_http=True` — still **accept** the platform `Mcp-Session-Id` (used for microVM stickiness, not protocol sessions). Clients must echo that header. Stateful mode (`stateless_http=False`) is required for elicitation/sampling on MCP ≤ `2025-11-25`; on `2026-07-28+` those use MRTR (`mcp-mrtr-input-required`) and do not need a sticky session. Most JSON-RPC errors return **HTTP 200**; inspect the body. `RetryableConflictException` (−32005, “Session operation in progress”) needs client backoff. OAuth runtimes return 401 + `WWW-Authenticate` resource metadata; SigV4 runtimes return 403 without that header.
- Gateway: one MCP URL over Lambda, OpenAPI, Smithy, MCP-server targets, and A2A/HTTP passthrough. `supportedVersions` can list several MCP dates at once. Clients send `MCP-Protocol-Version` per request; omitted header defaults to **2025-03-26**. Unknown version → HTTP 400 / −32022 with the allowed list. Adding `2026-07-28` does not break older clients. Header-bound tool fields: missing/contradictory header → HTTP 400 / −32020. Policy intercepts tool calls at the gateway (Cedar-compatible Dogwood rules).
- CLI: `agentcore add gateway|gateway-target|memory|agent|…` then `agentcore deploy`. Gateway MCP URL shape: `https://gateway-id.gateway.bedrock-agentcore.region.amazonaws.com/mcp`. Pair with `mcp-stateless-core` and `mcp-http-gateway-headers`. Treat gateway/tool text as untrusted (`mcp-server-trust-failures`). Open the console from `links.get`.
- **Platform version (runtime guide, 2026-11-20).** New runtimes stay on **V1** unless `platformVersion` is `V2`. V2 restores a prepared snapshot, allows a compressed image up to 10 GB (2 GB on V1), and is limited to the regions that guide lists. Create and update return while the runtime is still `CREATING` or `UPDATING` and can take minutes. A microVM session ends after 15 idle minutes or 8 hours. The same `runtimeSessionId` after that starts a new environment. Keep durable context in AgentCore Memory.
- **V2 money.** With no resource configuration, a session is capped at 2 vCPU and 8 GB and billed for what it uses. CPU drops to zero during I/O wait. Idle memory is reclaimed after 120 seconds. A committed baseline bills its memory and vCPU until the session ends, then bills bursts up to 4× at the lower rate. Consumption rates on the pricing table are $0.1276 per vCPU-hour and $0.0169 per GB-hour. That table still marks the committed rates as launching by October 2026. Browser and Code Interpreter stay on the older microVM rates and bill peak memory. Short-term memory bills each event between 12 KB and 64 KB for ingest and retrieval. Web Search is $7 per 1,000 queries. Web Answer is $10 per 1,000 tool calls. Details: `agentcore-runtime-v2-billing`.

## Sources

- [What is Amazon Bedrock AgentCore?](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html) — accessed 2026-09-27
- [AgentCore Gateway](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html) — accessed 2026-09-27
- [MCP protocol contract](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp-protocol-contract.html) — accessed 2026-09-27
- [How AgentCore Gateway supports MCP 2026-07-28](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/) — accessed 2026-09-27
- [Get started with AgentCore CLI](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-cli.html) — accessed 2026-09-27
- [microVMs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-how-it-works.html) — accessed 2026-11-20
- [AgentCore pricing](https://aws.amazon.com/bedrock/agentcore/pricing/) — accessed 2026-11-20
- [AgentCore](https://aws.amazon.com/bedrock/agentcore/) — accessed 2026-11-20
