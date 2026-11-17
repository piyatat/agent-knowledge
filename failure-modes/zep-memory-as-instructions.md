---
id: zep-memory-as-instructions
title: Zep memory placed in the system prompt becomes an instruction
kind: knowledge
tags: [zep, memory, prompt-injection, security]
status: active
updated: 2026-11-17
when_to_use: An agent inserts a Zep context block into the system or developer message, or a voice wrapper does that for you
---

## Summary

Zep stores what users, documents, and tools said, then returns it later. Putting that block in a system or developer message gives it the same priority as your instructions. Zep’s own LiveKit wrapper does this on the trusted-only path.

## Notes

- **Rule from Zep.** Memory is evidence for a decision. It is not an instruction, a policy, a credential, or permission to act. Context blocks and graph hits can contain end-user text, tool output, and model-written summaries. Delimiters, roles, XML tags, and JSON do not sanitize that text. Keep tool rules in the provider’s privileged channel and send retrieved context through the lowest-privilege data channel that provider documents (`prompt-injection-agent-defense`, `agent-memory-poisoning`).
- **Convenience wrappers.** `ZepUserAgent` in `zep-livekit` inserts the context block into a **system message**. Zep says to use that wrapper only when every stored byte is application-authored. For user or third-party content, retrieve with the SDK and place the text yourself.
- **Writes you did not mean to open.** Context MCP allows `add_memory` until you turn writes off. A poisoned chat can become the next session’s “fact.” The account writes switch overrides every connection. Derive user, thread, and graph UUIDs from your auth state; do not let the model pick them (`zep`).
- **Filters.** `thread.get_context` does not take caller metadata filters. Filtering a broad result in the client can hide the rows you wanted, because excluded sources still consume the limit. Prefer a filtered graph search, or an API key whose access policy already restricts reads.

## Sources

- [Memory security best practices](https://help.getzep.com/memory-security) — accessed 2026-11-17
- [LiveKit integration](https://help.getzep.com/livekit-memory) — accessed 2026-11-17
- [Configuring Context MCP authentication](https://help.getzep.com/context-mcp-server/authentication) — accessed 2026-11-17
