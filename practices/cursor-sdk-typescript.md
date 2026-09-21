---
id: cursor-sdk-typescript
title: Cursor TypeScript SDK — @cursor/sdk local and cloud
tags: [cursor, sdk, orchestration, sandbox]
status: active
updated: 2026-09-21
when_to_use: Scripting Cursor from Node/Bun with @cursor/sdk, or replacing the local agent system prompt
---

## Summary

**`@cursor/sdk`** (npm; Node ≥ 22.13) is the TypeScript embedding of the same Cursor agent as the IDE, CLI, and web. One `Agent.create({ local | cloud })` surface. **Local** = agent loop + disk on your machine (model still hosted). **Cloud** = Cursor VM. Not the Python package (`cursor-sdk`), not the HTTP Cloud Agents API (`cursor-cloud-agents-api`), and not the SDK Bridge (protobuf for other languages). Same `CURSOR_API_KEY` (user or service account; Team Admin keys unsupported). Spend is tagged **SDK**.

## Notes

- Install `npm install @cursor/sdk` (the unscoped name is not on npm). First local `acquire` loads the executor and per-platform `@cursor/sdk-<plat>` helpers (sandbox + ripgrep). Cloud-only imports stay light. Single-file bundles: `@cursor/sdk/bundled` (Bun auto-picks the flat build; Node + SQLite store is unavailable there — use `JsonlLocalAgentStore`). Put `node_modules/@cursor/sdk-<plat>/` next to a compiled binary or `sandboxOptions` throws.
- `agent.agentId` is immediate: `agent-…` local, `bc-…` cloud. SDK cloud runs are hidden until Filter → Source → SDK. `cloud: { repos: [] }` is a no-repo VM. `Agent.prompt()` is one-shot create/send/dispose. `Agent.resume(id)` reattaches (`bc-` ⇒ cloud). Inline `mcpServers` are **not** persisted — pass again on resume.
- **`systemPrompt`** (local only; empty/whitespace or combined with `cloud` → `ConfigurationError`): replaces the built-in main-loop prompt. Tool schemas, rules, and skills still load; subagents keep theirs. **Not persisted** — pass again on `resume`. Account must allow `--system-prompt` or the first `send()` fails. Default local tools run **without** HITL; gate with hooks (`beforeShellExecution`, `preToolUse`) or `local.sandboxOptions.enabled: true` (unsupported hosts throw). Cloud is already a VM — `sandboxOptions` does not apply.
- `run.steer(text)` injects into the **current** local turn (`complete_delivered` vs `revert_to_followup` → then `agent.send()`). Cloud and detached local handles always revert. `tools` / `disallowedTools` are local-only and not persisted. Config precedence (MCP, subagents, hooks): per-send inline > create inline > project > user > team/dashboard. Hooks stay file-based (`.cursor/hooks.json`). `agent.reload()` re-reads files; prefer `close()` / `await using` for dispose.
- Cookbook: CI auto-fix, triage, review, in-product agents. Other languages: spawn `cursor-sdk-bridge`. Treat repo text and MCP output as untrusted (`prompt-injection-agent-defense`).

## Sources

- [Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript) — accessed 2026-09-21
- [SDK Changelog](https://cursor.com/docs/sdk/changelog) — accessed 2026-09-21
- [Cursor SDK Bridge](https://cursor.com/docs/sdk/bridge) — accessed 2026-09-21
