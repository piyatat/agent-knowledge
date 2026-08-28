---
id: a2a-protocol-bindings
title: A2A protocol bindings — JSON-RPC, gRPC, HTTP+JSON, A2A-Version
tags: [a2a, transport, versioning, interoperability]
status: active
updated: 2026-08-28
when_to_use: Choosing JSON-RPC vs gRPC vs REST for an A2A agent, or implementing A2A-Version / supportedInterfaces
---

## Summary

A2A v1.0 treats **JSON-RPC**, **gRPC**, and **HTTP+JSON/REST** as equivalent bindings of one proto model (`a2a.proto` is normative). The Agent Card lists `supportedInterfaces[]` with `url`, `protocolBinding` (`JSONRPC` / `GRPC` / `HTTP+JSON`), `protocolVersion`, optional `tenant`. Clients send **`A2A-Version`** on every request (except 0.3, which is assumed if the header is empty).

## Notes

- Pick the first `supportedInterfaces` entry the client implements; list the agent’s preference first. HTTP URLs MUST be absolute HTTPS in production; gRPC is `hostname:port`. When `tenant` is set, every request MUST echo it.
- Same operations, three shapes: e.g. SendMessage → JSON-RPC `message/send`, gRPC `SendMessage`, REST `POST /message:send`. Custom bindings (WebSocket, MQTT) use a URI `protocolBinding` under `https://a2a-protocol.org/bindings/…` (`cpb-` / `experimental-cpb-` repos) and MUST cover every core operation.
- Versioning: `Major.Minor` only (patch is not negotiated). Server MUST honor the requested minor; unknown → `VersionNotSupportedError` (−32009 / gRPC `FAILED_PRECONDITION` / HTTP 400). Empty header = 0.3. Clients MAY pass `A2A-Version` as a query param instead of a header. One agent MAY expose several versions on different URLs.
- Errors: HTTP+JSON uses ProtoJSON `google.rpc.Status` (not RFC 9457). Include `google.rpc.ErrorInfo` with `domain: "a2a-protocol.org"` and an UPPER_SNAKE `reason`. Map tables live in the spec — do not invent codes.
- Bindings are not extensions (`a2a-extensions`). Extensions add methods/data on an existing transport; bindings change the transport.

## Sources

- [A2A Protocol specification](https://a2a-protocol.org/latest/specification/) — accessed 2026-08-28
- [What's New in A2A v1.0](https://a2a-protocol.org/latest/whats-new-v1/) — accessed 2026-08-28
- [Custom Protocol Bindings](https://a2a-protocol.org/latest/topics/custom-protocol-bindings/) — accessed 2026-08-28
