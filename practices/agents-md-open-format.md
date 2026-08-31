---
id: agents-md-open-format
title: AGENTS.md open format (AAIF)
tags: [agents-md, standards, interoperability, aaif]
status: active
updated: 2026-08-31
when_to_use: Authoring a portable AGENTS.md for multiple coding agents, or deciding filename vs CLAUDE.md / Cursor rules
---

## Summary

**AGENTS.md** is a plain-Markdown convention: a README for coding agents (build, test, conventions) kept out of the human README. No required schema. Stewarded by the Linux Foundation **Agentic AI Foundation** (same foundation as MCP, goose, agentgateway, A2A). Cursor `.mdc` rules and Claude `CLAUDE.md` are product-specific overlays, not the format.

## Notes

- Put `AGENTS.md` at the repo root. Nested copies are expected in monorepos; **the closest file to the edited path wins**. Explicit user chat overrides the files. Official FAQ: if you list test commands, agents should try them and fix failures before finishing.
- No required headings. Common sections: overview, build/test, style, security, PR/commit conventions. Rename `AGENT.md` → `AGENTS.md` and symlink the old name if a tool still looks for the singular file.
- Compatibility is by convention, not a parser: Codex, Amp, Jules, Cursor, Factory, Gemini CLI, GitHub Copilot, VS Code, and others advertise support. Gemini CLI example: `.gemini/settings.json` `"context": { "fileName": "AGENTS.md" }`. Aider: `read: AGENTS.md` in `.aider.conf.yml`.
- AAIF lists AGENTS.md as a hosted project alongside MCP (tools), goose (runtime), agentgateway (routing), and A2A (peers). Hosting did not add YAML requirements. A v1.1 frontmatter proposal (`description` / `tags` for progressive disclosure) exists as a community issue — do not require it; existing files stay valid.
- Keep the always-on body short (`agents-md-and-rules-budget`). Product rules (Cursor Team Rules, Claude managed settings) can still override or add scope. Conflicts: nearest AGENTS.md, then the user’s message.

## Sources

- [AGENTS.md](https://agents.md/) — accessed 2026-08-31
- [agentsmd/agents.md](https://github.com/agentsmd/agents.md) — accessed 2026-08-31
- [AAIF projects](https://aaif.io/projects) — accessed 2026-08-31
- [Linux Foundation announces AAIF](https://aaif.io/news/linux-foundation-announces-formation-of-aaif) — accessed 2026-08-31
