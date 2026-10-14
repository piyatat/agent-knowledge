---
id: acp-session-compaction
title: ACP session compaction — ID-addressed timeline entities
tags: [acp, session, compaction, interoperability]
status: active
updated: 2026-10-14
when_to_use: Reporting or rendering ACP compaction_update / compaction_summary_chunk, or contrasting them with agent-text “I compacted”
---

## Summary

ACP **session compaction** (RFD **Completed** 2026-10-06) adds `compaction_update` and `compaction_summary_chunk` so an Agent can mark a context-compact as one **persistent, ID-addressed** timeline entity — optionally with a user-displayable summary. This is the protocol event, not Claude’s `/compact` (`claude-code-context-window`) or idle compaction (`claude-code-idle-compaction`). In **v1**, send these only when the Client advertised `clientCapabilities.session.compaction: {}`. **v2** needs no capability. Completing the RFD did **not** stabilize protocol v2.

## Notes

- First notification for a `compactionId` creates the entity at that receive-order position. Later updates/chunks with the same ID **patch in place** — they do not move it. `compactionId` is opaque, Agent-owned, unique in the session, never reused. A single `compaction_update` with `status: "completed"` is enough; progress and summary are optional.
- `status` is required on every update: `in_progress`, `completed`, `failed`, `cancelled` (open enum; `_` prefix = implementation; other unknowns reserved). The Agent **must** send a terminal status when a reported compaction ends. Clients initialize a first-seen ID as `in_progress` with unset optionals, then apply the notification.
- `summary` is `ContentBlock[]` — the **unencrypted, user-visible** projection, not internal replacement history or “Compaction completed.” Omit it when nothing safe to show. Patch: omit = keep, `null` or `[]` = clear, value = replace. Chunks append one block; a later concrete `summary` replaces accumulated chunks; later chunks append to that replacement.
- Replay uses the same patch/chunk rules. v1 capability gate applies to **replay too**. Without the capability, describe compaction as an ordinary agent message (conversation content, not an ID-addressed entity). Completing the RFD removed the `unstable_session_compaction` Cargo feature — consumers must drop that flag. Claude Agent adapter shipped experimental updates in 0.78.0 and terminal-cleanup in 0.80.0.
- Orthogonal to `usage_update` (window/cost). Clients may visually group earlier turns; they must still retain whatever history session/replay contracts require (`context-compaction`).

## Sources

- [Session Compaction RFD](https://agentclientprotocol.com/rfds/session-compaction) — accessed 2026-10-14
- [RFD Updates](https://agentclientprotocol.com/rfds/updates) — accessed 2026-10-14
- [ACP v1 prompt turn](https://agentclientprotocol.com/protocol/v1/prompt-turn) — accessed 2026-10-14
- [ACP v2 prompt lifecycle](https://agentclientprotocol.com/protocol/v2/prompt-lifecycle) — accessed 2026-10-14
