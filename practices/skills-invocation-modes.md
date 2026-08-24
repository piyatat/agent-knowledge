---
id: skills-invocation-modes
title: Skill invocation — model vs slash vs custom mode
tags: [skills, cursor, dispatch, permissions]
status: active
updated: 2026-08-24
when_to_use: Choosing whether a SKILL.md auto-fires, only runs via /name, or stays pinned as a Custom Mode
---

## Summary

Agent Skills are one primitive. **Who may invoke** is a three-state choice: both (default), user-only (`disable-model-invocation: true`), or model-only (`user-invocable: false` on Claude Code). Side-effect skills (`/deploy`, `/commit`) must not be model-chosen. Cursor Custom Modes pin a skill for the whole session.

## Notes

- Default: description stays in context; the agent loads the body when relevant. Cursor also lets you type `/skill-name` (one message) or Option/Alt+Enter from `/` to start a **Custom Mode** (badge until you exit). Style modes with optional `icon` / `color`.
- `disable-model-invocation: true`: slash/command only. Cursor `/migrate-to-skills` converts legacy slash commands this way. Claude Code also drops the skill from auto-preload, subagent preload, and scheduled-task skill prompts (v2.1.196+). Use for anything that mutates prod, git, or messaging.
- `user-invocable: false` (Claude Code; default `true`): hidden from `/`, still model-invocable. Background knowledge, not an action. Cursor docs emphasize `disable-model-invocation` and `paths` globs rather than this field — do not assume every host implements both.
- Cursor discovery: `.cursor/skills/`, `.agents/skills/`, user `~/.cursor` / `~/.agents`, plus Claude/Codex dirs. Nested `SKILL.md` folders work; a skills dir under a package scopes to that subtree (like `paths`).
- `paths` (Cursor) / legacy `globs`: only surface when matching files are in play. `allowed-tools` (experimental in the open spec) can pre-approve tools for the invoking turn on hosts that honor it — still bounded by host permission mode.
- MCP prompts stay user-controlled templates; Skills that auto-invoke trade that boundary for planner composability. Do not erase it on destructive workflows.

## Sources

- [Cursor Agent Skills](https://cursor.com/docs/skills) — accessed 2026-08-24
- [Claude Code skills](https://code.claude.com/docs/en/skills) — accessed 2026-08-24
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-08-24
