---
id: cursor-side-chats
title: Cursor side chats — /side and /btw tangents
tags: [cursor, session, ux, context]
status: active
updated: 2026-10-10
when_to_use: Opening a /side or /btw tangent without interrupting the main Cursor agent thread
---

## Summary

A **side chat** (`/side` or `/btw`) is a durable Cursor conversation for a question or tangent. It keeps its own transcript and uses the parent thread as **hidden reference**. **3.23:** side chats work on **cloud agents** too (they spawn their own cloud agent). It is not a queued follow-up (`cursor-message-queue`) and not a Project thread (`cursor-projects`).

## Notes

- Start from the chat input: `/side` or `/btw`, optionally followed by the question, the **+** menu, or select text and **Add to Side Chat**. The parent keeps running; the side chat is a separate agent conversation.
- **Cloud (3.23):** the same starters work on a Cloud Agent. The side chat runs as **its own cloud agent** so you can ask without interrupting the main run. Side chats are **not** offered inside Projects, which use threads instead.
- The parent is reference context only. `@`-mention the side chat from the main thread to pull that work back. Do not assume the parent automatically sees side-chat answers. With text selected in a conversation, **Cmd+L** adds it to that conversation, including side chats.
- CLI: `/btw` is the documented side-question path. Changelog (2026-07-13) fixed blob errors in long or compacted sessions and stopped the slash palette from covering the question while you type.
- Use a side chat for “what does this helper do?” or a research fork. Use **queue** / **steer** when the same agent should keep the current task (`cursor-message-queue`). Use a Custom Mode when the whole session should follow a playbook (`skills-invocation-modes`).

## Sources

- [Cursor Agent](https://cursor.com/docs/agent/overview) — accessed 2026-10-05
- [Agents Window release notes](https://cursor.com/docs/release-notes/agents-window) — accessed 2026-10-10
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-10-05

