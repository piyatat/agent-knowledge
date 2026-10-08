---
id: cursor-remote-control
title: Cursor Remote Control — iOS pairing vs /remote-control handoff
tags: [cursor, ux, session, security]
status: active
updated: 2026-10-08
when_to_use: Steering a local Cursor agent from the iOS app, or contrasting pairing with /remote-control cloud-loop handoff
---

## Summary

Cursor has two “remote control” paths for a **desktop** agent. **Pairing** (changelog, 2026-10-06): the iOS app lists agents still running on your computer — no Cloud Agents required. **`/remote-control`** (docs): the **agent loop** moves to Cursor’s cloud while **tools stay on the machine**. Neither is Claude Remote Control (`claude-code-remote-control`) nor Copilot CLI `/remote` (`github-copilot-remote-control`). The iOS inbox itself is `cursor-ios`.

## Notes

- Pairing: sign in on iOS; computers on the account appear. Tap the computer, **approve the pairing** in the desktop app, then tap a local agent to watch or send a message. The session **does not move**. Computer must stay on and online. Optional **Keep this computer awake** under Remote Control in desktop settings (plugged in, lid open).
- Pairing defaults **on** except **Enterprise** (admins: Org settings → Security and identity → Remote control). Does **not** require Cloud Agents. Desktop **3.23.23** notes (2026-10-07) describe this path.
- `/remote-control` (Agents Window only, client **3.9.8+**): run the slash command, then send the next message. Cursor starts a worker on the machine and the session appears in the iOS inbox. Needs Cloud Agents access (Start–Enterprise), Settings → Agents enabled, and **cloud data storage**. Teams/Enterprise: Dashboard → Cloud Agents → Self-Hosted (also enables self-hosted worker access). Local or Remote SSH workspace; Git remote optional. Privacy Mode (Legacy) cannot start Cloud-backed agents (`cursor-privacy-mode`).
- Trust: repo, secrets, and build caches stay on the machine; only tool results and model context leave. Sessions are bound to your account + machine. Do not treat pairing as a sandbox (`cursor-run-modes`).
- Keep the computer awake either way. Pairing is the lighter “phone as a second screen”; `/remote-control` is the Cloud Agents worker loop.

## Sources

- [Remote control for local agents (changelog)](https://cursor.com/changelog) — accessed 2026-10-08
- [Cursor for iOS](https://cursor.com/docs/cloud-agent/mobile) — accessed 2026-10-08
- [Cursor IDE changelog — Oct 7 2026 (3.23.23)](https://techdevnotes.com/releases/cursor-ide/20261007-020505Z-4e1ed0d5d240) — accessed 2026-10-08
