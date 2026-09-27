---
id: vscode-agent-voice
title: VS Code Voice Mode vs on-device dictation
tags: [vscode, ux, privacy, github]
status: active
updated: 2026-09-27
when_to_use: Enabling spoken agent sessions in VS Code, or contrasting Voice Mode with dictation / Copilot CLI
---

## Summary

VS Code **Voice Mode** is a spoken conversation loop with the active chat or Agents-window session (listens, speaks replies, can interrupt). **Dictation** only inserts text and does not submit. Voice Mode is rolling out and needs an **eligible individual Copilot plan** — not Copilot Business/Enterprise. Not Cursor’s input mic (`cursor-at-mentions`) and not Codex `/voice`.

## Notes

- Start: `agents.voice.enabled`, then the Voice Mode button or `Ctrl+Shift+Space` (`⇧⌘Space` on macOS) in chat/Agents window. First use: mic permission + introduction (pick mic, preview voices). It uses the **active session’s model and attachments**, can answer about running sessions, and announces whether it routed to an existing session or started a new one. `agents.voice.handsFree` re-enters listen after the agent finishes speaking; talk or the shortcut interrupts TTS.
- Settings: `agents.voice.showTranscript`, `agents.voice.voice`, `agents.voice.speakResponses`, `agents.voice.language` (`auto` = system). Mute without ending: `Ctrl+Shift+M` / Voice Mode: Toggle Mute Microphone. Right-click the Voice Mode button for intro, mic, transcript. Orgs can disable Copilot preview features by policy.
- Dictation (separate): mic in the input or `Ctrl+I` — inserts, does **not** send. Desktop default model `nemotron-3.5-asr-streaming-0.6b` is **on-device** after first download (Windows x64/Arm64, Apple silicon, Linux x64/Arm64 glibc ≥ 2.34; runs on the **local client** even for remotes). Web streams audio to Microsoft AI voice and needs GitHub sign-in. 20-minute auto-stop. Editor: `Ctrl+Alt+V`; terminal: Voice: Start Dictation in Terminal (CLI-oriented cleanup). Intel Mac / musl / 32-bit: use the VS Code Speech extension instead.
- `dictation.experimental.llmCleanup` (default on) sends **transcript text** (not desktop audio) to a Copilot model. Workspace instructions: trusted `.github/dictation.md`; user `~/.copilot/dictation.md`. Enterprise: `DictationModel` / `DictationLLMCleanup`. Requiring on-device + disabling cleanup keeps audio and text local and **disables web dictation**.

## Sources

- [Voice support](https://code.visualstudio.com/docs/configure/accessibility/voice) — accessed 2026-09-27
- [AI settings reference](https://code.visualstudio.com/docs/agents/reference/ai-settings) — accessed 2026-09-27
- [Use the Agents window](https://code.visualstudio.com/docs/agents/run/agents-window) — accessed 2026-09-27
- [Visual Studio Code 1.137 — Voice Mode](https://code.visualstudio.com/updates/v1_137) — accessed 2026-09-27
