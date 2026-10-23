---
id: openai-codex-presets
title: Codex /presets — numbered TUI slots and inline /model
tags: [openai, cli, ux, config]
status: active
updated: 2026-10-23
when_to_use: Saving reusable Codex prompts or slash commands, or setting model/permissions with inline /model /permissions
---

## Summary

Codex CLI **0.164.0** (2026-10-23) adds **`/presets`**: ten numbered slots for reusable prompts or slash commands, plus **inline arguments** on `/model` and `/permissions`. Slots persist in the **user** config under `[tui.presets.<digit>]`. Not `AGENTS.md` (`openai-codex-agents-md`) and not VS Code Codex harness presets (`vscode-agent-harnesses`).

## Notes

- `/presets` opens a keyboard menu for slots **0–9**. Create (`n`), save current model / reasoning / speed / permission settings (`s`), edit (`e`), delete (`d`), or press a digit to **submit** that slot through the normal queued-prompt path (composer draft is kept). Confirm before replace or delete. Writes go to the active user config layer; a failed write leaves in-memory settings unchanged.
- TOML: `[tui.presets.1]` with required `input` and optional `label`. `input` must be nonempty, **≤ 8,000 UTF-8 bytes**, and must **not** start with `!` (shell commands are rejected — presets are prompts and slash commands only). Example: `input = "/model gpt-5.6-sol high fast"` plus `label = "fast coding"`.
- Inline (same release): `/model` accepts model, reasoning effort, and speed in one command; `/permissions` accepts a permission profile. Saving current permission settings into a preset is supported. Use these for session-local switches; put durable team instructions in `AGENTS.md` instead of a personal preset file.
- Image previews of viewed / generated images in the fullscreen transcript need a Kitty- or Sixel-capable terminal. Session resume now restores saved thread settings instead of overwriting them with global defaults; failed compaction no longer leaves a partial summary (`openai-codex-sessions`).

## Sources

- [Codex 0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) — accessed 2026-10-23
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) — accessed 2026-10-23
