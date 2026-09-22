---
id: kiro-steering
title: Kiro steering — .kiro/steering vs AGENTS.md
tags: [kiro, agents-md, memory, rules]
status: active
updated: 2026-09-22
when_to_use: Authoring Kiro steering files or AGENTS.md for Kiro IDE/CLI/Web, or migrating Amazon Q rules
---

## Summary

**Steering** is Kiro’s persistent project memory: markdown under `.kiro/steering/` (workspace) and `~/.kiro/steering/` (global). Workspace wins on conflict. Also reads **`AGENTS.md`** (always-on, no inclusion modes) at workspace root, globally, and nested dirs. Not skills (`kiro-skills`) and not MCP. Q CLI `rules/` copied here on upgrade (`kiro-cli`).

## Notes

- Foundation trio (IDE “Generate Steering Docs”): `product.md`, `tech.md`, `structure.md` — always included by default. Custom files are immediate. `#[[file:relative/path]]` inlines a live workspace file. Web cloud sandboxes **cannot** read `~/.kiro/steering/`; upload via Configuration Sync for cloud-wide personal steering. Web also has cloud-managed steering in settings.
- Inclusion frontmatter (IDE/Web/Mobile; **CLI currently loads every file in `.kiro/steering/` with no modes**): `always` (default); `fileMatch` + `fileMatchPattern` (string or array); `manual` (`#name` or `/` slash); `auto` + `name`/`description` (skill-like match, also a slash command). Frontmatter must be the first bytes — no blank line above.
- Custom agents do **not** get steering automatically — add `resources: ["file://.kiro/steering/**/*.md"]`. AGENTS.md has no inclusion modes and is always loaded when discovered (root, `~/.kiro/steering/AGENTS.md`, nested). Team steering = MDM/GPO or a cloned repo into `~/.kiro/steering`.
- Keep secrets out; steering is repo-visible. On Web, the task author’s PR comments can steer future work; other reviewers’ comments do not. Prefer short always-on files (`agents-md-and-rules-budget`). Conflicts: nearest/workspace steering over global.

## Sources

- [Kiro steering](https://kiro.dev/docs/steering) — accessed 2026-09-22
- [Kiro CLI setup (steering example)](https://kiro.dev/docs/cli/setup/) — accessed 2026-09-22
- [Upgrading from Q CLI](https://kiro.dev/docs/upgrade-guides/migrating-from-q/) — accessed 2026-09-22
