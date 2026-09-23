---
id: agents-md-open-format
title: AGENTS.md open format (AAIF)
tags: [agents-md, standards, interoperability, aaif]
status: active
updated: 2026-09-23
when_to_use: Authoring a portable AGENTS.md for multiple coding agents, or deciding filename vs CLAUDE.md / Cursor rules
---

## Summary

**AGENTS.md** is a plain-Markdown convention: a README for coding agents (build, test, conventions) kept out of the human README. No required schema. Stewarded by the Linux Foundation **Agentic AI Foundation** (same foundation as MCP, goose, agentgateway, A2A). Cursor `.mdc` rules and Claude `CLAUDE.md` are product-specific overlays, not the format.

## Notes

- Put `AGENTS.md` at the repo root. Nested copies are expected in monorepos; **the closest file to the edited path wins**. Explicit user chat overrides the files. Official FAQ: if you list test commands, agents should try them and fix failures before finishing.
- No required headings. Common sections: overview, build/test, style, security, PR/commit conventions. Rename `AGENT.md` → `AGENTS.md` and symlink the old name if a tool still looks for the singular file.
- Compatibility is by convention, not a parser: Codex, **Amp** (cwd/parents always; subtree on read; also `AGENT.md`/`CLAUDE.md` — `amp-agent`), Jules, Cursor, **Factory Droid** (nested + `.factory`/`.agents` — `factory-droid`), Gemini CLI, GitHub Copilot, VS Code, **OpenHands** (repo skill / `AGENTS.md` — `openhands-agent`), **OpenCode** (`/init` writes the file — `opencode-agent`), **Kiro** (always-on; no inclusion modes — `kiro-steering`), **Junie** (root `AGENTS.md` — `jetbrains-junie`), **Cline** (`AGENTS.md` + `~/.agents/AGENTS.md` — `cline-agent`), **Windsurf/Devin Desktop** (root always-on, nested = dir glob — `windsurf-cascade`), and others advertise support. Gemini CLI example: `.gemini/settings.json` `"context": { "fileName": "AGENTS.md" }`. **Aider** does not auto-load it: `read: AGENTS.md` in `.aider.conf.yml` (`aider-agent`). Official Claude Code memory docs still say **CLAUDE.md only** unless you `@AGENTS.md` / symlink (`claude-code-memory`).
- AAIF lists AGENTS.md as a hosted project alongside MCP (tools), goose (runtime), agentgateway (routing), and A2A (peers). Hosting did not add YAML requirements. A v1.1 frontmatter proposal (`description` / `tags` for progressive disclosure) exists as a community issue — do not require it; existing files stay valid.
- Keep the always-on body short (`agents-md-and-rules-budget`). Product rules (Cursor Team Rules, Claude managed settings) can still override or add scope. Conflicts: nearest AGENTS.md, then the user’s message.

## Sources

- [AGENTS.md](https://agents.md/) — accessed 2026-08-31
- [agentsmd/agents.md](https://github.com/agentsmd/agents.md) — accessed 2026-08-31
- [AAIF projects](https://aaif.io/projects) — accessed 2026-08-31
- [Linux Foundation announces AAIF](https://aaif.io/news/linux-foundation-announces-formation-of-aaif) — accessed 2026-08-31
- [Kiro steering — Agents.md](https://kiro.dev/docs/steering) — accessed 2026-09-22
- [Junie instructions (AGENTS.md)](https://www.jetbrains.com/help/ai-assistant/junie-agent.html) — accessed 2026-09-22
- [Cline rules — AGENTS.md](https://docs.cline.bot/customization/cline-rules) — accessed 2026-09-22
- [Cascade AGENTS.md](https://docs.windsurf.com/windsurf/cascade/agents-md) — accessed 2026-09-22
- [How Claude remembers your project](https://code.claude.com/docs/en/memory) — accessed 2026-09-22
- [Amp AGENTS.md](https://ampcode.com/docs/markdown/customize/agents-md) — accessed 2026-09-23
- [Factory AGENTS.md](https://docs.factory.ai/harness/agents-md) — accessed 2026-09-23
- [OpenCode intro (/init)](https://opencode.ai/docs/) — accessed 2026-09-23
