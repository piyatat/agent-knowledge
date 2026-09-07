---
id: openai-codex-skills
title: Codex Agent Skills — SKILL.md discovery and invocation
tags: [openai, skills, cli, tokens]
status: active
updated: 2026-09-07
when_to_use: Authoring or installing SKILL.md for Codex, or contrasting Codex skills with plugins
---

## Summary

Codex **Agent Skills** are on-demand `SKILL.md` folders (Agent Skills open standard). Codex injects name, description, and path at start and loads the body only when it chooses the skill (or you invoke `$skill`). This is not a plugin marketplace (`openai-codex-plugins`) and not always-on `AGENTS.md` (`openai-codex-agents-md`).

## Notes

- Layout: directory + required `SKILL.md` frontmatter `name` + `description`; optional `scripts/`, `references/`, `assets/`. App metadata lives in `agents/openai.yaml` (`allow_implicit_invocation`, default `true` — set `false` so only explicit `$skill` works; declare MCP/tool deps so the app can wire them).
- Repo scan: `.agents/skills` from cwd up to the git root (`REPO`). Also `USER` `$HOME/.agents/skills`, plus admin/system locations (`/etc/codex/skills`). Same `name` is **not** merged — both can appear in selectors. Symlinked skill folders are followed. Restart after config changes.
- Disable without deleting: `[[skills.config]]` in `~/.codex/config.toml` with `path` + `enabled = false`. `features.skill_install` (default on) lets Codex install declared MCP deps. Distribute reusable bundles as plugins, not loose folders.
- Pair with MCP for external systems; keep `AGENTS.md` for standing facts. Treat third-party skill trees as `malicious-skills-supply-chain`. Contrast Claude filesystem skills (`claude-code-skills`) and Copilot `.github/skills` (`github-copilot-skills`).

## Sources

- [Agent Skills – Codex](https://developers.openai.com/codex/skills) — accessed 2026-09-07
- [Build skills](https://developers.openai.com/codex/build-skills) — accessed 2026-09-07
- [Customization – Codex](https://developers.openai.com/codex/concepts/customization) — accessed 2026-09-07
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-09-07
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-09-07
