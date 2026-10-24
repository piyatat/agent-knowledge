---
id: claude-code-on-the-web
title: Claude Code on the web — --cloud, --teleport, cloud sessions
tags: [claude, hosting, session, git]
status: active
updated: 2026-10-24
when_to_use: Starting or teleporting a claude.ai/code cloud session, or contrasting it with Remote Control
---

## Summary

**Claude Code on the web** runs a session on Anthropic-managed (or org self-hosted) cloud at claude.ai/code. Pro / Max / Team and Enterprise premium / Chat+Code seats. **v2.1.310** also gates start/steer on Enterprise **custom roles** (cloud sessions + Remote Control). CLI: `claude --cloud` creates a cloud session; `claude --teleport` pulls it local. Not Remote Control (local process, remote UI) and not Slack `@Claude` (which **starts** a web session).

## Notes

- Same cloud environments as routines, Claude Tag, mobile, and Desktop: network, env vars, setup script. GitHub via the Claude GitHub App (needed for Auto-fix) or `/web-setup` (sends local `gh` token; Team/Enterprise Owners enable Quick web setup). ZDR / HIPAA / CMEK block `/web-setup` and cloud sessions. `--cloud` needs Anthropic login + `allow_remote_sessions`.
- **v2.1.310** (2026-10-23): Owners can attach **cloud sessions** and **Remote Control** permissions to Enterprise **custom roles**. If custom roles govern access, you also need a role with the cloud-sessions permission to start sessions on Anthropic infrastructure from the browser, apps, or terminal (Organization settings → Roles). Turning either feature on in admin settings now asks for confirmation and lists the custom roles that have that permission. Setup-script file picker and a scrolling setup-output box landed in the same release.
- `claude --cloud "task"` clones the current repo’s GitHub remote at the **current branch** (push first). No remote / App not installed → upload a local git bundle (history + tracked dirty files; macOS/Linux/WSL omit credential-like names; untracked skipped; 100 MB with fallbacks). `CCR_FORCE_BUNDLE=1` forces upload. Follow-up: `claude -p "msg" --cloud <session-id-or-url>` queues and exits. `--remote` is a deprecated alias. `--cloud` ≠ `--remote-control`.
- Teleport: `claude --teleport` / `/teleport` / `/tp` / `/tasks` then `t`. Requires clean working tree, same repo (not a fork), pushed cloud branch, same account. Creates a **local copy** of the session — further local work does not sync back; use Remote Control to keep steering from the phone. `--resume` is local history only.
- Cloud UI: `/compact` and `/context` work; `/clear` and `/resume` do not. Permission mode is a dropdown (persists across environment expiry). Team/Enterprise share Private vs Team (Slack-started sessions are Team). Pro/Max Private vs Public — review secrets before Public. Auto-fix needs the GitHub App on the repo.
- Contrast: Remote Control (`claude-code-remote-control`) never leaves your disk. Channels (`claude-code-channels`) inject into a local session. Routines (`claude-code-routines`) are standing cloud configs.

## Sources

- [Use Claude Code on the web](https://code.claude.com/docs/en/claude-code-on-the-web) — accessed 2026-10-24
- [Get started with Claude Code on the web](https://code.claude.com/docs/en/web-quickstart) — accessed 2026-09-11
- [Remote Control](https://code.claude.com/docs/en/remote-control) — accessed 2026-09-11
- [v2.1.310 release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) — accessed 2026-10-24
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-10-24
