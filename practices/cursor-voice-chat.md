---
id: cursor-voice-chat
title: Cursor voice chat — Grok Voice vs dictation
tags: [cursor, ux, privacy, session]
status: active
updated: 2026-11-06
when_to_use: Starting a realtime spoken call with a Cursor agent, or contrasting voice chat with dictation / VS Code Voice Mode
---

## Summary

**Voice chat** (2026-11-06) is a speech-to-speech call with a Cursor agent: you talk, a **voice agent** replies out loud, and it hands coding work to the **coding agent** in that chat. Surfaces: Agents Window, IDE, web, Cursor for iOS. Powered by **Grok Voice**. Not dictation (formerly “Voice Mode”), not VS Code Voice Mode (`vscode-agent-voice`), and not Codex `/voice`.

## Notes

- Start only when the agent is **idle** and the chat input is **empty**: waveform **Start voice chat** (where Send usually is). The adjacent mic button is **dictation**. In the IDE the chat also needs at least one message. Hidden for subagents, Project workers, archived chats, Claude Code chats, chats owned by another teammate; in the IDE also for still-streaming cloud agents and when dictation is off. API-key sessions cannot start a call (“Realtime voice requires sign-in”).
- During a call the voice agent can hand off work, **read-only** look up diffs/runs/agents, search this agent’s earlier messages and calls, switch Project workers, or hang up. The coding agent keeps running and speaks **short** progress notes (or the written reply if it did not write a spoken update). Transcript appears in the chat; **cloud** transcripts sync to other devices while the call is live **unless Privacy Mode is on**.
- Models: Grok Voice listens and speaks; the coding agent keeps the model you picked. Default voice in Voice / Agent Voice settings (Ara, Eve, Leo, Rex, Sal, …). Changing voice mid-call sticks to **that** agent. Privacy Mode: voice chat runs with **zero data retention** (`cursor-privacy-mode`).
- iOS extras (`cursor-ios`): “Hey Siri, call Cursor” starts a call with a **new** agent (phone unlocked). Live Activity on Lock Screen / Dynamic Island for mute and hang up when iOS cannot show the system call screen (compact Dynamic Island has no those controls).
- Limits: hangs up after ~**10 minutes** of your silence while the agent has no work in progress; there is a **daily** call cap (Cursor tells you when you can call again). Dictation still inserts text only (`Cmd+Shift+Space` in the IDE). Grok Bot inference hooks do **not** see voice-call prompts or tool calls.

## Sources

- [Voice chat](https://cursor.com/docs/agent/voice-chat) — accessed 2026-11-06
- [Voice Chat with Agents (changelog)](https://cursor.com/changelog/voice-chat) — accessed 2026-11-06
- [Grok Bot inference hooks](https://cursor.com/docs/grok-bot/inference-hooks) — accessed 2026-11-06
