---
id: gemini-cli-rewind
title: Gemini CLI /rewind — conversation vs code revert
tags: [gemini, session, ux, git]
status: active
updated: 2026-09-13
when_to_use: Undoing a Gemini CLI turn with /rewind or Esc Esc, or contrasting it with /restore checkpoints
---

## Summary

**`/rewind`** (or **Esc Esc**) walks prior user turns and can drop chat history, revert **AI edit-tool** file changes, or both. It is destructive to the current session. Not checkpoint `/restore` (pre-tool shadow-git snapshot, `gemini-cli-checkpointing`), not `/resume` (`gemini-cli-sessions`), and not Claude `/rewind` (`claude-code-checkpointing`).

## Notes

- UI: list of interactions (newest at the bottom) with a prompt preview and changed-file count → Enter → choose **rewind conversation and revert code**, **conversation only**, **code only**, or Esc. Code options hide when no AI file edits exist after that point.
- Conversation rewind deletes those turns from the model’s memory. Code-only revert keeps the chat, so tell the model the files changed. Works **across compression** by rebuilding history from stored session data (`gemini-cli-sessions`).
- Revert covers only the agent’s edit tools. It does **not** undo your manual edits or `!` shell side effects (installs, network, generated artifacts outside those writes).
- Prefer `/rewind` to explore an alternate approach after a bad turn. Prefer checkpoints when you want to re-offer the **same** pending tool call after a snapshot. Destructive: there is no redo of the discarded transcript.

## Sources

- [Rewind](https://geminicli.com/docs/cli/rewind/) — accessed 2026-09-13
- [Checkpointing](https://geminicli.com/docs/cli/checkpointing/) — accessed 2026-09-13
- [Session management](https://geminicli.com/docs/cli/session-management.md) — accessed 2026-09-13
