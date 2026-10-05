---
id: cursor-message-queue
title: Cursor message queue vs steer vs interrupt
tags: [cursor, orchestration, ux, session]
status: active
updated: 2026-10-05
when_to_use: Sending a follow-up while a Cursor agent is mid-turn — queue, steer at the next tool, or interrupt
---

## Summary

While a Cursor agent is working you can **queue** the next job, **steer** the active turn at the next tool boundary, or **interrupt**. These are not side chats (`cursor-side-chats`) and not `/goal` (`cursor-cloud-always-on`). Steering waits for a tool call so in-flight edits are not cut mid-action.

## Notes

- **Queue (Agents Window / editor):** type the next instruction and press Enter. Messages stack under the active task, run in order after it finishes, and can be dragged to reorder. Tab (cloud agents / Agents Window) also queues for after the turn.
- **Send now / steer:** Cmd+Enter (Mac) or the **Send now** control appends to the latest user message and is delivered at the **next tool call**. Changelog: type a follow-up and hit Send now, or press Enter twice. Available on cursor.com/agents; rolling out in the Agents Window.
- **CLI:** Enter while the agent works steers the active run at a safe boundary. Enter **again** interrupts the turn. This is the opposite of “Enter always queues.”
- Cloud `/goal` and subscriptions still use the same steer-at-tool-boundary rule so a long edit is not aborted (`cursor-cloud-always-on`). Immediate send is for redirecting the current job; queue is for the next job; `/side` is for a tangent that must not share the parent transcript.

## Sources

- [Cursor Agent](https://cursor.com/docs/agent/overview) — accessed 2026-10-05
- [Cloud Agents and Cursor Harness Improvements (2026-08-19)](https://cursor.com/changelog/08-19-26) — accessed 2026-10-05
- [CLI Changelog](https://cursor.com/docs/cli/changelog) — accessed 2026-10-05
- [Using Agent in CLI](https://cursor.com/docs/cli/using) — accessed 2026-10-05
