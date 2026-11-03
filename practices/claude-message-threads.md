---
id: claude-message-threads
title: Claude Messages API message threads — send only the new turn
tags: [claude, api, caching, latency]
status: active
updated: 2026-11-03
when_to_use: Cutting TTFT on a long Messages API agent loop without changing token billing, or contrasting threads with prompt caching / Managed Agents sessions
---

## Summary

**Message threads** (public beta, header `message-threads-2026-08-12`) keep a short-lived conversation on Anthropic’s servers so later Messages API turns upload **only new messages**. Token usage and pricing stay the same — Claude still reads the full conversation. Not prompt caching (`prompt-caching-for-agents`), not Managed Agents sessions (`claude-managed-agents`), and not Claude Code `--resume` (`claude-code-sessions`). Claude Code turns this on by default for most users.

## Notes

- Create: send the full conversation plus `system` / `tools` with `"thread": {"type": "create"}`. Continue: send only messages since the previous response plus `"thread": {"type": "continue", "previous_message_id": "<id>"}` and **omit** `system`/`tools` (sending either, even `null`, is 400). Each stored response restarts a **5-minute** idle expiry; the API deletes the thread no more than **1 hour** after last use. You stay the source of truth — keep a local copy and replay on 404 `thread_not_found`.
- **Fixed** each turn (mismatch → 400 `thread_fingerprint_mismatch`): `model`, `tool_choice`, `thinking`, `mcp_servers` (except auth tokens), `context_management`, `output_config`, container `skills`, top-level `cache_control`, and the `anthropic-beta` set. **Free** to change: `max_tokens`, `stop_sequences`, `stream`, `metadata`, `service_tier`. MCP URLs/tokens and container `id` are not stored — resend `mcp_servers`/`container` when used. Append-only: each response `id` continues **once**. Edit or branch with a new create.
- Prompt caching is **orthogonal**. A thread does not cache for you. Top-level `cache_control` on every request caches each turn; a thread request may carry at most **4** breakpoints (top-level counts as one). Compaction-on-demand, Message Batches, token counting, HIPAA-ready orgs, and Inference hooks are **unsupported** (`thread_unsupported_request`). Not ZDR-eligible; held in memory, encrypted, never written to disk.
- Recover: 404 `thread_not_found` (expired, previous turn not stored, fallback model, still generating, wrong org/user/key). Replay the full conversation in a new create. Stream: wait for `message_stop` before continuing; a dropped continue may need replay (`thread_already_continued` / `thread_continue_in_flight`). After `stop_reason: "refusal"`, start a new thread without that turn. SDK helper (`client.beta.messages.thread`) adds the beta header, replays those 404/in-flight errors once, and is on by default for the beta tool runner.
- Anthropic reports ~**35%** median TTFT drop on 500k–1M-token Claude Code requests. Best on active coding / computer-use / image-heavy loops. Available on the Claude API, Claude Platform on AWS, Claude Models on Google Cloud (Anthropic managed), and Microsoft Foundry.

## Sources

- [Message threads](https://platform.claude.com/docs/en/build-with-claude/message-threads) — accessed 2026-11-03
- [Make long-running agents faster with message threads](https://claude.com/resources/articles/message-threads) — accessed 2026-11-03
- [Prompt caching (Claude)](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) — accessed 2026-11-03
