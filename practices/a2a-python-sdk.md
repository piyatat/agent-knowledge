---
id: a2a-python-sdk
title: A2A Python SDK — in-process Agent2Agent client and server
kind: tool
tags: [a2a, sdk, python, orchestration]
status: active
updated: 2026-11-17
when_to_use: Embedding an Agent2Agent client or server in Python instead of shelling out to the a2a CLI
---

## Summary

**`a2a-sdk`** is the A2A Project’s Python library (Apache-2.0, Google-maintained package metadata) for running an agent as an **A2A 1.0** server or calling one. It speaks JSON-RPC, HTTP+JSON/REST, and gRPC, with a compatibility mode for spec **0.3**. The shell client is `a2a-cli`. The protocol notes live under `agent-to-agent-a2a-protocol`.

## Notes

- **Install.** Python **3.10+**. `pip install a2a-sdk` or `uv add a2a-sdk`. Extras: `http-server` (Starlette), `fastapi`, `grpc`, `telemetry` (OpenTelemetry), `encryption`, `signing`, and SQL drivers `postgresql`, `mysql`, `sqlite` (or `sql` for all three). `a2a-sdk[all]` pulls those extras. Core dependencies include `httpx`, Pydantic v2, and protobuf.
- **Server shape.** Publish an `AgentCard` (name, version, `supported_interfaces` with `protocol_binding` and `protocol_version`, capabilities such as streaming, and `AgentSkill` entries). Clients discover it at `/.well-known/agent-card.json` (`a2a-agent-card-discovery`). The helloworld sample in `a2a-samples` is a local demo (`uv run` on port 9999), not a production host.
- **Auth.** The SDK does not pick an identity for you. Enterprise auth, signed cards, and per-skill `security_requirements` are protocol concerns (`a2a-enterprise-auth`, `a2a-signed-agent-cards`). Do not put tokens in the committed card.
- **Limits.** Compatibility covers spec 1.0 and 0.3 on all three transports for both client and server; see the SDK readme’s note on issue 742 for what 0.3 compatibility includes. Upgrading **0.3 → 1.0** of the SDK has a migration guide. gRPC and databases stay optional so a minimal client does not import them.
- **Alternatives.** `a2a` CLI when a human or CI job only needs card get / send / task poll. Gemini CLI remote subagents (`gemini-cli-remote-subagents`) when the caller is already Gemini CLI.
- **Caveats.** Card text, skill examples, and task payloads are untrusted (`prompt-injection-agent-defense`). A server that only implements the echo sample will accept real delegated work and do nothing useful. Pick the binding the peer’s card lists (`a2a-protocol-bindings`) instead of assuming JSON-RPC.

## Sources

- [A2A Python SDK](https://a2aproject.github.io/a2a-python/) — accessed 2026-11-17
- [a2a-sdk on PyPI](https://pypi.org/project/a2a-sdk/) — accessed 2026-11-17
- [Python SDK reference](https://a2a-protocol.org/latest/sdk/python/api/) — accessed 2026-11-17
- [Agent skills and Agent Card](https://a2a-protocol.org/latest/tutorials/python/3-agent-skills-and-card/) — accessed 2026-11-17
- [a2a-python pyproject.toml](https://github.com/a2aproject/a2a-python/blob/main/pyproject.toml) — accessed 2026-11-17
