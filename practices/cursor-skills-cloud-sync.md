---
id: cursor-skills-cloud-sync
title: Cursor Sync Skills — personal ~/.cursor/skills on Cloud Agents
tags: [cursor, skills, cloud, privacy]
status: active
updated: 2026-09-20
when_to_use: Making personal Cursor skills available to Cloud Agents, or debugging why a self-hosted worker lacks a skill
---

## Summary

**Sync Skills for Cloud Agents** copies **`~/.cursor/skills/`** so Cloud Agents (and the iOS/web inbox) can load your personal skills. Synced skills stay **private to you**. This is not project skills, not `~/.agents/skills/`, and not publishing to a team marketplace (`cursor-plugins`). Invocation rules stay `skills-invocation-modes`.

## Notes

- Enable: Settings → Agents → Context and Tools → **Sync Skills for Cloud Agents**, or Customize → Skills. Confirm copies the folder. Disable moves the synced copy back to the machine.
- What syncs: **only** `~/.cursor/skills/`. Left local: `.cursor/skills/` / `.agents/skills/` in the repo, `~/.agents/skills/`, and other user trees. Cursor also **discovers** `.claude/skills/` and `.codex/skills/` locally — those do **not** sync.
- Cloud / Agents Window remote SSH / **self-hosted workers** never receive unsynced personal skills. On a worker, use repo project skills or bake skills into the image (`cursor-self-hosted-pools`). Nested package `.cursor/skills/` still scopes to that subtree when the repo is present.
- Teams/Enterprise: Team Settings → Security & Identity → **Sync Skills for Cloud Agents**. Off disables sync for everyone. On still leaves the choice per member. Sharing with teammates is a **marketplace publish** (Cursor-hosted copy), not sync.
- Treat a synced personal skill as code the cloud VM will follow — same supply-chain posture as a plugin (`malicious-skills-supply-chain`). Do not put secrets in `SKILL.md`.

## Sources

- [Agent Skills (Cursor)](https://cursor.com/docs/skills.md) — accessed 2026-09-20
- [Cursor Plugins](https://cursor.com/docs/plugins) — accessed 2026-09-20
- [Cursor for iOS](https://cursor.com/docs/cloud-agent/mobile) — accessed 2026-09-20
