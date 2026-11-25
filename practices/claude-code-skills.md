---
id: claude-code-skills
title: Claude Code skills — SKILL.md vs .claude/commands
tags: [claude, skills, cli, tokens]
status: active
updated: 2026-11-25
when_to_use: Authoring .claude/skills SKILL.md, migrating .claude/commands into skills, or using a skill an MCP server publishes
---

## Summary

Claude Code **skills** are on-demand `SKILL.md` folders (Agent Skills open standard plus Claude-only frontmatter). Claude auto-loads when `description` matches, or you type `/name`. Legacy `.claude/commands/*.md` still work and share the same `/name`; a skill **wins** on name clash. This is not the Messages Skills API (`claude-skills-api`) and not a plugin marketplace entry (`claude-code-plugins`).

## Notes

- Locations: enterprise managed → personal `~/.claude/skills/<name>/SKILL.md` → project `.claude/skills/` → plugin `/plugin:skill`. Personal **overrides** project on the same name; any of those override a bundled skill (not its aliases — a project `code-review` does not steal `/review`). Nested package skills appear as `apps/web:deploy`. `synced` is reserved for claude.ai downloads.
- Custom commands merged into skills. Keep `.claude/commands/` if you must; prefer a skill directory (supporting files, invocation control, auto-load). Bundled prompt skills (`/doctor`, `/code-review`, `/debug`, `/loop`, …) turn off with `disableBundledSkills` except `/doctor` (hide with `DISABLE_DOCTOR_COMMAND` or `skillOverrides`).
- Frontmatter extras: `disable-model-invocation: true` (slash-only; also skips scheduled-task auto-run and subagent preload). `allowed-tools` pre-approves for **that turn only** and applies even in an untrusted `-p` folder — review repo skills. `context: fork` runs a subagent (`background` default true). `$ARGUMENTS` / `$N`; `${CLAUDE_SKILL_DIR}` in body and Bash allow rules.
- Cowork/cloud do **not** read `~/.claude/skills/` on your laptop. Enable the skill on claude.ai, or commit it / ship a repo plugin. Local sync: `CLAUDE_CODE_SYNC_SKILLS=1 claude -p "…"`. Live-reload watches `SKILL.md` text; plugin hooks/MCP/agents need `/reload-plugins`.
- **v2.1.332 (2026-11-25):** Skills from an MCP server are beta and show as `server:skill` in the `/` menu. Skills you author keep their names. On Macs with computer use on, `computer-use` is reserved: a skill or command of that name does not load (`claude-code-332-model-alias`). The location and frontmatter notes above were last checked 2026-09-07.

## Sources

- [Extend Claude with skills](https://code.claude.com/docs/en/custom-skills) — accessed 2026-09-07
- [Skills (Claude Code)](https://code.claude.com/docs/en/skills) — accessed 2026-09-07
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-09-07
- [Claude Code plugins](https://code.claude.com/docs/en/plugins) — accessed 2026-09-07
- [Claude Code changelog](https://code.claude.com/docs/en/changelog) — accessed 2026-11-25
