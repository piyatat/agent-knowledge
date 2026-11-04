---
id: github-copilot-xcode-coding-assistant
title: Copilot in Xcode’s coding assistant — native Intelligence vs extension
tags: [github, ux, interoperability, preview]
status: active
updated: 2026-11-04
when_to_use: Enabling GitHub Copilot in Xcode Settings → Intelligence, or choosing native coding assistant vs the Copilot for Xcode extension
---

## Summary

**Xcode 27.3 beta** (2026-11-04, public preview) adds **GitHub Copilot** to Xcode’s built-in **coding assistant**. Setup is **Xcode → Settings → Intelligence**, not a Source Editor extension. All Copilot plans are supported. macOS **Tahoe 26.6+**. This is **not** the GitHub Copilot for Xcode extension (`github-copilot-xcode-eclipse`), not Cursor’s `xcrun mcpbridge` (`cursor-xcode`), and not JetBrains Air ACP (`github-copilot-jetbrains-air`).

## Notes

- The GitHub Copilot for Xcode **extension remains a separate option**. Pick one workflow; do not assume agent mode, MCP, checkpoints, or custom agents from the extension matrix apply to the native assistant.
- Enable Copilot under Intelligence **Agents** (Get / Install, then sign in). Apple’s Intelligence settings also host ChatGPT, Claude, and add-an-ACP-agent; Copilot here is a **provider in that picker**, not a second Copilot Chat window from `github/CopilotForXcode`.
- Download Xcode 27.3 beta from Apple Developer Downloads. Official Xcode 27.3 notes: “GitHub Copilot is now available in the coding assistant” (185837709). Feedback: Copilot for Xcode repo **or** Apple Feedback Assistant.
- Treat prompts and project files the assistant sends to Copilot as leaving the Mac (`prompt-injection-agent-defense`). Preview — expect gaps vs the extension’s feature matrix until GitHub documents this surface.

## Sources

- [GitHub Copilot is now available in Xcode’s coding assistant](https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/) — accessed 2026-11-04
- [Setting up coding intelligence](https://developer.apple.com/documentation/xcode/setting-up-coding-intelligence) — accessed 2026-11-04
- [Xcode 27.3 Beta Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-27_3-release-notes) — accessed 2026-11-04
- [Copilot feature matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix) — accessed 2026-11-04
