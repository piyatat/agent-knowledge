---
id: mcp-http-gateway-headers
title: MCP HTTP headers for gateways (Mcp-Method, Mcp-Name)
tags: [mcp, transport, gateway, ops]
status: active
updated: 2026-08-23
when_to_use: Putting a load balancer, WAF, or API gateway in front of Streamable HTTP MCP without parsing JSON-RPC bodies
---

## Summary

On 2026-07-28 Streamable HTTP, every request must advertise intent in headers (`MCP-Protocol-Version`, `Mcp-Method`, and `Mcp-Name` per SEP-2243) so intermediaries can route, rate-limit, and authorize without terminating into the JSON body. Reject header/body mismatches.

## Notes

- `Mcp-Method` mirrors JSON-RPC `method`. `Mcp-Name` mirrors `params.name` / resource URI for named primitives (`tools/call`, `resources/read`, `prompts/get`). Servers that see a contradiction **reject** the request.
- Gateways can meter `tools/call` vs `tools/list` and apply per-tool policies on `Mcp-Name` before the app process. This is why stateless MCP can sit behind ordinary round-robin HTTP infrastructure.
- Optional `Mcp-Param-*` mirrors selected tool arguments when the schema annotates them as header-bound. AgentCore Gateway rejects missing/contradicting bound headers (`HTTP 400`, code `-32020`).
- `_meta` reserves W3C Trace Context keys (`traceparent`, `tracestate`, `baggage`; SEP-414) so a parent agent span can continue through client → gateway → downstream without a custom MCP trace header.
- Header routing is **not** authz by itself: still bind OAuth audience to the MCP server and re-check scopes on the handler. Do not treat `Mcp-Name` as a secret.

## Sources

- [The 2026-07-28 Specification (MCP Blog)](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — accessed 2026-08-23
- [How AgentCore Gateway supports the MCP 2026-07-28 spec](https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/) — accessed 2026-08-23
- [Stateless MCP still needs an MCP-native dataplane (agentgateway)](https://agentgateway.dev/blog/2026-07-21-stateless-mcp-still-needs-mcp-native-dataplane/) — accessed 2026-08-23
