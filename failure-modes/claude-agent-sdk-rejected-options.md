---
id: claude-agent-sdk-rejected-options
title: Claude Agent SDK 0.3.327 rejects unsendable options and non-array hooks
kind: knowledge
tags: [claude, sdk, hooks, mcp]
status: active
updated: 2026-11-19
when_to_use: query(), startup(), or prewarm() refuses an option, or a hook matcher that used to be a Set is now rejected
---

## Summary

TypeScript Claude Agent SDK **0.3.327** (parity with Claude Code **2.1.327**, published 2026-11-17) refuses options that cannot be sent to Claude Code, and it requires hook lists to be arrays. It also undoes two 0.3.326 transport changes. The library is `claude-agent-sdk`.

## Notes

- **Options that cannot cross the process.** `query()`, `startup()`, and `prewarm()` now reject an option that cannot be sent, and the release names a circular reference or a BigInt field on an agent as examples. The error names the option. Remove that field or replace it with a JSON-safe value before retrying. This is a startup failure, not a model error.
- **Hooks must be arrays.** A hook event’s value, and a matcher’s `hooks`, must be arrays. A Set, a generator, a plain object, `true`, or a number is refused. Code that built matchers with a Set still type-checks in loose projects and then fails at startup.
- **In-process MCP on an agent definition.** `createSdkMcpServer()` entries inside an agent’s `mcpServers` are ignored, with a warning. Other options on that agent still apply. Put the in-process server on the top-level `mcpServers` so the main session receives the tools. External stdio and HTTP servers are unchanged.
- **Transport reverted from 0.3.326.** JSON-RPC ids for requests to an SDK MCP server are numbers again, not strings. The 0.3.326 fix for a tool result from an SDK MCP server being lost, or delivered to another call, after a reconnect was reverted. Do not assume that reconnect path is safe on 0.3.327.
- **Retries.** Background retries for most MCP servers reached by hostname over HTTPS now continue for about a day after a drop, up from at most about 27 minutes. A long outage can keep retrying in the background.
- **What this release also changed, without a new rejection.** A `task_started` event no longer puts Claude Code’s own notification text in `prompt` when a background subagent wakes. A background agent is no longer reported as still running only because its permission request waited on `canUseTool` for 30 seconds or more.

## Sources

- [claude-agent-sdk-typescript v0.3.327](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.327) — accessed 2026-11-19
- [claude-agent-sdk-typescript v0.3.326](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.326) — accessed 2026-11-17
