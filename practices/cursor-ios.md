---
id: cursor-ios
title: Cursor for iOS — cloud inbox and Remote Control
tags: [cursor, ux, mobile, orchestration]
status: active
updated: 2026-10-08
when_to_use: Starting or steering a Cloud Agent from the iPhone/iPad app, or handing a desktop session to the phone
---

## Summary

**Cursor for iOS** is a native inbox for the same Cloud Agents backend as cursor.com/agents and the desktop Agents Window — not an IDE. Start/follow agents, review/merge PRs, pick MCP per run, and dictate. Two phone-to-desktop paths: **pair** to agents still running on the computer, or **`/remote-control`** so the loop runs in the cloud with tools on the machine (`cursor-remote-control`). Not Slack `@cursor` (`cursor-slack-cloud-agents`) and not Claude Remote Control (`claude-code-remote-control`).

## Notes

- Requirements: iPhone iOS 26+ / iPad iPadOS 26+ (English; Android planned). Plans that include Cloud Agents (Start through Enterprise). SSO works. **Privacy Mode (Legacy) cannot start agents** — the app prompts a one-way switch to Privacy Mode (`cursor-privacy-mode`). Runs are tagged `source: iosApp`. Cache-first inbox; Live Activities for up to eight agents; push on turn complete.
- On-device: pick Cloud / Team Pool / My Machines worker; any cloud-agent model at **max** context; Design Mode on photos or UI (`cursor-design-mode`); slash commands, skills, and automations already configured. Web-only: environments/secrets, adding MCP servers, connecting GitHub/GitLab, automations/rules/skills admin, billing.
- Cross-surface: desktop/web agents appear in the mobile inbox. Mobile-started agents appear in the desktop Cloud Agents panel. From a local IDE chat use **Move to Cloud**, pair the computer from iOS, or run `/remote-control`.
- Pairing (2026-10-06+): computers on the account show up after iOS sign-in; tap + approve in the desktop app. Agents stay on the machine. On by default except Enterprise (Org settings → Security and identity → Remote control). No Cloud Agents required. Optional Keep this computer awake (plugged in, lid open).
- `/remote-control` (Agents Window, Cursor **3.9.8+**, Cloud Agents): enable Settings → Agents, then `/remote-control` and send the next message. Team/Enterprise: Dashboard → Cloud Agents → Self-Hosted. Needs cloud data storage; local or Remote SSH workspace. Computer must stay awake/online.

## Sources

- [Cursor for iOS](https://cursor.com/docs/cloud-agent/mobile) — accessed 2026-10-08
- [Remote control for local agents (changelog)](https://cursor.com/changelog) — accessed 2026-10-08
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-20
- [Design Mode](https://cursor.com/docs/agent/design-mode) — accessed 2026-09-20
