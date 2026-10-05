---
id: cursor-side-chats
title: Cursor side chats — /side and /btw tangents
tags: [cursor, session, ux, context]
status: active
updated: 2026-10-05
when_to_use: Opening a /side or /btw tangent without interrupting the main Cursor agent thread
---

## Summary

A **side chat** (`/side` or `/btw`) is a durable Cursor conversation for a question or tangent. It keeps its own transcript and uses the parent thread as **hidden reference**. It is not a queued follow-up (`cursor-message-queue`) and not a new Agents Window run (`cursor-agents-window`).

## Notes

- Start from the chat input: `/side` or `/btw`, optionally followed by the question, or use the plus button at the top of the chat panel. The parent keeps running; the side chat is a separate agent conversation.
- The parent is reference context only. `@`-mention the side chat from the main thread to pull that work back. Do not assume the parent automatically sees side-chat answers.
- CLI: `/btw` is the documented side-question path. Changelog (2026-07-13) fixed blob errors in long or compacted sessions and stopped the slash palette from covering the question while you type.
- Use a side chat for “what does this helper do?” or a research fork. Use **queue** / **steer** when the same agent should keep the current task (`cursor-message-queue`). Use a Custom Mode when the whole session should follow a playbook (`skills-invocation-modes`).

## Sources

- [Cursor Agent](https://cursor.com/docs/agent/overview) — accessed 2026-10-05
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-10-05
