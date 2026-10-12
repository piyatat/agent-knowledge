---
id: openai-codex-skills
title: Codex Agent Skills — SKILL.md discovery and invocation
tags: [openai, skills, cli, tokens]
status: active
updated: 2026-10-12
when_to_use: Authoring or installing SKILL.md for Codex, budgeting the skills list, or contrasting Codex skills with plugins
---

## Summary

Codex **Agent Skills** are on-demand `SKILL.md` folders (Agent Skills open standard). Codex injects name, description, and **path** at start and loads the body only when it chooses the skill (or you invoke `$skill` / `/skills`). The initial list is capped at **2% of the context window** (or **8,000 characters** when the window is unknown). This is not a plugin marketplace (`openai-codex-plugins`) and not always-on `AGENTS.md` (`openai-codex-agents-md`).

## Notes

- Layout: directory + required `SKILL.md` frontmatter `name` + `description`; optional `scripts/`, `references/`, `assets/`. App metadata lives in `agents/openai.yaml` (`allow_implicit_invocation`, default `true` — set `false` so only explicit `$skill` works; declare MCP/tool deps so the app can wire them). ChatGPT uses `@skill`; Codex uses `$skill` or `/skills`. Front-load trigger words — Codex **shortens descriptions first**, then may **omit** skills from the initial list and warn.
- Repo scan: `.agents/skills` from cwd up to the git root (`REPO`). Also `USER` `$HOME/.agents/skills`, plus admin/system locations (`/etc/codex/skills`) and bundled **SYSTEM** skills (`skill-creator`, plan). Same `name` is **not** merged — both can appear in selectors. Symlinked skill folders are followed. Codex detects skill changes automatically; restart if an update does not appear.
- Disable without deleting: `[[skills.config]]` in `~/.codex/config.toml` with `path` + `enabled = false`. `features.skill_install` (default on) lets Codex install declared MCP deps. Local extras: `$skill-installer` (e.g. `$skill-installer linear`) or Record & Replay to draft a skill from a demonstration. Distribute reusable bundles as plugins, not loose folders.
- Codex **0.162.0** keeps plugin/skill snapshots **per step**, matches skill identity by **PathUri**, and **enforces required environment skills before model inference** (a missing required env skill blocks the turn). Pair with MCP for external systems; keep `AGENTS.md` for standing facts. Treat third-party skill trees as `malicious-skills-supply-chain`. Contrast Claude filesystem skills (`claude-code-skills`), Copilot `.github/skills` (`github-copilot-skills`), and MCP-served skills (`mcp-skills-extension`).

## Sources

- [Agent Skills – Codex](https://developers.openai.com/codex/skills) — accessed 2026-10-12
- [Build skills](https://developers.openai.com/codex/build-skills) — accessed 2026-10-12
- [Customization – Codex](https://developers.openai.com/codex/concepts/customization) — accessed 2026-10-12
- [Configuration Reference (Codex)](https://developers.openai.com/codex/config-reference) — accessed 2026-10-12
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-10-12
- [Codex 0.162.0](https://github.com/openai/codex/releases/tag/rust-v0.162.0) — accessed 2026-10-12
