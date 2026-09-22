---
id: kiro-skills
title: Kiro Agent Skills — SKILL.md under .kiro/skills
tags: [kiro, skills, tokens, mcp]
status: active
updated: 2026-09-22
when_to_use: Adding or importing a portable Agent Skill for Kiro, or choosing skills vs steering vs powers
---

## Summary

Kiro implements the **Agent Skills** open standard (`agent-skills-open-standard`): a folder with `SKILL.md` (YAML `name` + `description`). Workspace `.kiro/skills/`, global `~/.kiro/skills/` (not Web/Mobile). Workspace name wins. Progressive disclosure: metadata always, body on match or `/skill-name`. Not steering (`kiro-steering`) and not **Powers** (MCP + guidance bundle).

## Notes

- Frontmatter: `name` = folder, `[a-z0-9-]` ≤64; `description` ≤1024 (activation keywords); optional `license`, `compatibility`, `metadata`. Optional `scripts/`, `references/`, `assets/` — load on demand. `/skill extra` appends text; `$ARGUMENTS` / `${N}` substitution is **CLI-only**.
- Import (IDE): GitHub URL must point at a **subdirectory** or `SKILL.md`, not repo root; or a local folder. Copies into the skills dir. Treat imports as `malicious-skills-supply-chain`.
- Default agent auto-loads workspace + global skills. **Custom agents load none** until `resources` lists `skill://.kiro/skills/*/SKILL.md` (globs and `~` ok).
- Use **steering** for always-on conventions; **skills** for portable on-demand workflows; **powers** when you need MCP tools plus the playbook. Commit workspace skills. Vague descriptions fail to fire (`skills-dispatch-hygiene`).

## Sources

- [Kiro Agent Skills](https://kiro.dev/docs/skills) — accessed 2026-09-22
- [Kiro steering (skills vs steering vs powers)](https://kiro.dev/docs/steering) — accessed 2026-09-22
