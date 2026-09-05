---
id: gemini-cli-skills
title: Gemini CLI Agent Skills — activate_skill and discovery tiers
tags: [gemini, skills, cli, tokens]
status: active
updated: 2026-09-05
when_to_use: Installing or authoring SKILL.md for Gemini CLI, or contrasting skills with GEMINI.md
---

## Summary

Gemini CLI **Agent Skills** are on-demand `SKILL.md` packages (Agent Skills open standard). Only name + description load at start; the model calls `activate_skill`, you consent, then the body and skill directory become readable. Not persistent `GEMINI.md` context and not MCP tools (`gemini-cli-mcp`).

## Notes

- Discovery (low → high): built-in → extension → user `~/.gemini/skills/` or `~/.agents/skills/` → workspace `.gemini/skills/` or `.agents/skills/`. Same name: higher tier wins; within a tier `.agents/skills/` beats `.gemini/skills/`. Workspace skills are the ones to commit.
- After consent: `SKILL.md` body + folder structure enter history, and the skill dir is added to allowed paths. The model is told to prefer the skill’s procedure. Progressive disclosure is the point — do not dump workflows into `GEMINI.md`.
- Interactive: `/skills list [all] [nodesc]`, `link`, `disable`/`enable`, `reload`. Shell: `gemini skills list|install|uninstall|link` with `--scope user|workspace`, `--path` (subdir in a git repo), `--consent` (skip the install warning).
- Author: directory + `SKILL.md` frontmatter `name` (match dir) + `description` (trigger text). Optional `scripts/`, `references/`, `assets/`. Built-in `skill-creator` can scaffold. Alias `.agents/skills` is the portable path (`agent-skills-open-standard`).
- Unpaid / Google One: Gemini CLI is slated to be replaced by **Antigravity CLI** for some accounts — verify the current binary before a long-lived skill library (`gemini-cli-acp`). Treat third-party install URLs as `malicious-skills-supply-chain`.

## Sources

- [Agent Skills (Gemini CLI)](https://geminicli.com/docs/cli/skills/) — accessed 2026-09-05
- [Creating Agent Skills](https://geminicli.com/docs/cli/creating-skills/) — accessed 2026-09-05
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-09-05
