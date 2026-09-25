---
id: kilo-code
title: Kilo Code — kilo.jsonc, skills, MCP, Roo migration
tags: [kilo, cli, mcp, skills]
status: active
updated: 2026-09-25
when_to_use: Installing Kilo Code (VS Code/CLI/cloud) or migrating archived Roo Code rules, modes, and MCP
---

## Summary

**Kilo Code** is the current Roo-lineage coding agent (VS Code/JetBrains extension, `kilo` CLI, Cloud Agents). Shared config is **`kilo.jsonc`**. Project rules are **`AGENTS.md`**. Skills are Agent Skills `SKILL.md` folders. Roo Code’s VS Code repo was **archived 2026-05-15**; do not start new work there. CLI 1.0 is an OpenCode-shaped fork (`opencode-agent`), not Cline (`cline-agent`).

## Notes

- Install: VS Code `kilocode.kilo-code` / `kilocode.Kilo-Code`; CLI `npm install -g @kilocode/cli` (v1.0+). `/connect` adds providers. `kilo`, `kilo run`, `kilo serve`, `kilo acp`, `kilo cloud`, `kilo mcp add|list|auth`. `/reload` rescan config/skills (blocked while a session is running). `kilo console` is deprecated.
- Config: one `kilo.jsonc` for IDE/CLI/cloud (`$schema` `https://app.kilo.ai/config.json`). Permissions are glob maps (`"*": "ask"`, `bash: { "git *": "allow", "rm *": "deny" }`, `edit: { ".env*": "deny" }`). `kilo config check`. Roo migration: `.roorules` → `AGENTS.md`, `.roomodes` → `.kilocodemodes`, `.roo/mcp.json` → `.kilocode/mcp.json`. First-launch wizard converts leftovers.
- Skills: `.kilo/skills/<name>/SKILL.md` (project) and `~/.kilo/skills/` (user). Also `.agents/skills/` / `~/.agents/skills/` by default; `.claude/skills/` when Claude compatibility is on. `skills.paths` / `skills.urls` (`index.json` + versioned files). Project-config paths stay untrusted (no external `{file:}` / `!`command``). Trusted locations only run embedded `!`cmd`` after one approval prompt; `KILO_DISABLE_SKILL_SHELL` kills them. Same-name project skill wins. `/name` lists skills; collision with a command becomes `/name:skill`.
- MCP: `kilo mcp` (stdio/HTTP + OAuth). Treat marketplace/remote skills and MCP output as untrusted (`malicious-skills-supply-chain`, `mcp-server-trust-failures`).

## Sources

- [Kilo docs](https://kilo.ai/docs) — accessed 2026-09-25
- [Kilo Code CLI](https://kilo.ai/docs/code-with-ai/platforms/cli) — accessed 2026-09-25
- [CLI command reference](https://kilo.ai/docs/code-with-ai/platforms/cli-reference) — accessed 2026-09-25
- [Skills](https://kilo.ai/docs/customize/skills) — accessed 2026-09-25
- [The Great Roo Migration](https://kilo.ai/roo-migration) — accessed 2026-09-25
