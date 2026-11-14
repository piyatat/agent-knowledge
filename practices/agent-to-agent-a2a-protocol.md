---
id: agent-to-agent-a2a-protocol
title: Using A2A for agent-to-agent delegation
tags: [a2a, orchestration, mcp]
kind: protocol
status: active
updated: 2026-11-14
when_to_use: Delegating work to peer agents via Agent2Agent instead of stuffing everything into one tool loop
---

## Summary

Use **A2A (Agent2Agent) v1.0.0** when one opaque agent should collaborate with another: discover via **Agent Cards**, send a message, follow a **task** lifecycle. Keep **MCP** for tools/data *inside* each agent (`mcp-protocol`). Linux Foundation / AAIF Growth Stage. **v1.1** is still a release-candidate on the public roadmap (task timeline, event filtering) — do not treat it as shipping wire.

## Notes

- Canonical types live in `spec/a2a.proto` (Task, Message, AgentCard, Part, Artifact, Extension). Bindings: JSON-RPC, gRPC, HTTP+JSON (`a2a-protocol-bindings`). Version in cards/requests is **Major.Minor** (`1.0`); patch numbers are not negotiated.
- Publish an Agent Card without secrets or a full tool dump (`a2a-agent-card-discovery`). Prefer task-oriented APIs with stream or webhook for long jobs (`a2a-streaming-async`). Isolate context per peer; return summaries, not transcripts.
- Auth is declared on the card (`securitySchemes`) and sent per binding (`a2a-enterprise-auth`). Signed cards detect tampering (`a2a-signed-agent-cards`). Do not reinvent A2A as ad-hoc HTTP without task states.
- From a shell/CI/coding harness, drive peers with the official **`a2a` CLI** (`a2a-cli`) instead of a language-specific community CLI. Gemini CLI can attach a remote A2A specialist (`gemini-cli-remote-subagents`).
- SDKs: Python, Go, JS, Java, .NET, Rust. Validation: A2A Inspector and the Protocol TCK (community). Elicitation / bidirectional streaming are **roadmap**, not v1.0.

## Sources

- [A2A Protocol Specification](https://a2a-protocol.org/latest/specification/) — accessed 2026-11-14
- [A2A protocol roadmap](https://a2a-protocol.org/latest/roadmap/) — accessed 2026-11-14
- [A New Chapter for A2A: Joining the Agentic AI Foundation](https://a2a-protocol.org/latest/blog/2026/08/27/a-new-chapter-for-a2a-joining-the-agentic-ai-foundation/) — accessed 2026-11-14
- [Meet the A2A CLI](https://a2a-protocol.org/latest/blog/2026/10/01/introducing-a2a-cli/) — accessed 2026-11-14
- [A2A project](https://github.com/a2aproject/A2A) — accessed 2026-08-15
