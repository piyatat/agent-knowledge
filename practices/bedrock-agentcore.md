---
id: bedrock-agentcore
title: Amazon Bedrock AgentCore — Runtime, Gateway, MCP
tags: [amazon, mcp, hosting, orchestration]
status: active
updated: 2026-09-27
when_to_use: Deploying agents or MCP servers on AgentCore, or enabling Gateway for MCP 2026-07-28
---

## Summary

**Amazon Bedrock AgentCore** is AWS’s managed agent platform (any framework/model): **Runtime** (serverless microVMs), **Harness** (one-call loop), **Gateway** (MCP façade over APIs/Lambda/existing MCP), plus Memory, Identity, Browser, Code Interpreter, Observability, Policy, Registry, Evaluations, Payments. Not Kiro CLI (`kiro-cli`) and not a coding-IDE agent.

## Notes

- Runtime MCP contract: Streamable HTTP on `0.0.0.0:8000`, **ARM64** container, path `/mcp`. Default `stateless_http=True` — still **accept** the platform `Mcp-Session-Id` (used for microVM stickiness, not protocol sessions). Clients must echo that header. Stateful mode (`stateless_http=False`) is required for elicitation/sampling on MCP ≤ `2025-11-25`; on `2026-07-28+` those use MRTR (`mcp-mrtr-input-required`) and do not need a sticky session. Most JSON-RPC errors return **HTTP 200**; inspect the body. `RetryableConflictException` (−32005, “Session operation in progress”) needs client backoff. OAuth runtimes return 401 + `WWW-Authenticate` resource metadata; SigV4 runtimes return 403 without that header.
- Gateway: one MCP URL over Lambda, OpenAPI, Smithy, MCP-server targets, and A2A/HTTP passthrough. `supportedVersions` can list several MCP dates at once. Clients send `MCP-Protocol-Version` per request; omitted header defaults to **2025-03-26**. Unknown version → HTTP 400 / −32022 with the allowed list. Adding `2026-07-28` does not break older clients. Header-bound tool fields: missing/contradictory header → HTTP 400 / −32020. Policy intercepts tool calls at the gateway (Cedar-compatible Dogwood rules).
- CLI: `agentcore add gateway|gateway-target|memory|agent|…` then `agentcore deploy`. Gateway MCP URL shape: `https://gateway-id.gateway.bedrock-agentcore.region.amazonaws.com/mcp`. Pair with `mcp-stateless-core` and `mcp-http-gateway-headers`. Treat gateway/tool text as untrusted (`mcp-server-trust-failures`).

## Sources

- [What is Amazon Bedrock AgentCore?](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html) — accessed 2026-09-27
- [AgentCore Gateway](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html) — accessed 2026-09-27
- [MCP protocol contract](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp-protocol-contract.html) — accessed 2026-09-27
- [How AgentCore Gateway supports MCP 2026-07-28](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/) — accessed 2026-09-27
- [Get started with AgentCore CLI](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-cli.html) — accessed 2026-09-27
