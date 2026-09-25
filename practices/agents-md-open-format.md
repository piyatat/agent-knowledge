---
id: agents-md-open-format
title: AGENTS.md open format (AAIF)
tags: [agents-md, standards, interoperability, aaif]
status: active
updated: 2026-09-25
when_to_use: Authoring a portable AGENTS.md for multiple coding agents, or deciding filename vs CLAUDE.md / Cursor rules
---

## Summary

**AGENTS.md** is a plain-Markdown convention: a README for coding agents (build, test, conventions) kept out of the human README. No required schema. Stewarded by the Linux Foundation **Agentic AI Foundation** (same foundation as MCP, goose, agentgateway, A2A). Cursor `.mdc` rules and Claude `CLAUDE.md` are product-specific overlays, not the format.

## Notes

- Put `AGENTS.md` at the repo root. Nested copies are expected in monorepos; **the closest file to the edited path wins**. Explicit user chat overrides the files. Official FAQ: if you list test commands, agents should try them and fix failures before finishing.
- No required headings. Common sections: overview, build/test, style, security, PR/commit conventions. Rename `AGENT.md` → `AGENTS.md` and symlink the old name if a tool still looks for the singular file.
- Compatibility is by convention, not a parser: Codex, **Amp** (cwd/parents always; subtree on read; also `AGENT.md`/`CLAUDE.md` — `amp-agent`), **Jules** (root file — `google-jules`), Cursor, **Factory Droid** (nested + `.factory`/`.agents` — `factory-droid`), Gemini CLI, **Antigravity** (`AGENTS.md`/`GEMINI.md` + `.agents/rules` — `antigravity-cli`), GitHub Copilot, VS Code, **OpenHands**, **OpenCode**, **Kiro**, **Junie**, **Cline**, **Windsurf/Devin Desktop**, **Warp Agent** (same-dir `WARP.md` still wins — `warp-agent`), **Devin CLI**, **Qwen Code** (`QWEN.md` + `AGENTS.md`), **Trae** (root + walk-up; CLI also `.trae/rules` — `trae-agent`), **Kilo** (Roo `.roorules` migrate here — `kilo-code`), **Kimi Code** (project + `~/.kimi-code` / `~/.agents` — `kimi-code`), and **Crush** (combined with CLAUDE/GEMINI/CRUSH files — `crush-agent`). Gemini CLI example: `.gemini/settings.json` `"context": { "fileName": "AGENTS.md" }`. **Aider** does not auto-load it: `read: AGENTS.md` in `.aider.conf.yml` (`aider-agent`). **Replit Agent** uses root `replit.md` instead (`replit-agent`). **Claude Code v2.1.277+** reads `AGENTS.md` when no project `CLAUDE.md` / `CLAUDE.local.md` is on the walk-up; if both exist, CLAUDE.md wins unless `/config` is `claude-md-and-agents-md` (`claude-code-memory`).
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
- [Warp rules (AGENTS.md)](https://docs.warp.dev/agents/capabilities/rules/) — accessed 2026-09-24
- [AGENTS.md (Devin)](https://docs.devin.ai/onboard-devin/agents-md) — accessed 2026-09-24
- [Qwen Code memory (QWEN.md + AGENTS.md)](https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/) — accessed 2026-09-24
- [replit.md](https://docs.replit.com/features/project-setup/replit-dot-md) — accessed 2026-09-24
- [How Claude remembers your project (AGENTS.md)](https://code.claude.com/docs/en/memory) — accessed 2026-09-25
- [Trae CLI memories](https://docs.trae.cn/cli_memories) — accessed 2026-09-25
- [Antigravity rules](https://antigravity.google/docs/rules/) — accessed 2026-09-25
- [Crush context files](https://charmbracelet-crush.mintlify.app/guides/context-files) — accessed 2026-09-25
- [Jules getting started](https://jules.google/docs/) — accessed 2026-09-25
- [Kilo Roo migration (AGENTS.md)](https://kilo.ai/roo-migration) — accessed 2026-09-25
