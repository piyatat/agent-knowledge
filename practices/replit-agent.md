---
id: replit-agent
title: Replit Agent — replit.md, skills, MCP
tags: [replit, skills, mcp, memory]
status: active
updated: 2026-09-24
when_to_use: Configuring Replit Agent project context, workspace skills, or MCP servers (not AGENTS.md hosts)
---

## Summary

**Replit Agent** is Replit’s in-workspace coding agent. Always-on context is root **`replit.md`** (not `AGENTS.md`). Skills are Agent Skills `SKILL.md` folders. MCP is HTTPS/OAuth from Integrations. Not Warp (`warp-agent`), not Qwen Code (`qwen-code`), and not a portable AGENTS.md default (`agents-md-open-format`).

## Notes

- **`replit.md`**: Agent creates it at the project root and rereads it each conversation (architecture, stack, style). It can rewrite the file as it learns. Only the **root** file is auto-detected — nested copies are ignored. There is no strict character cap, but huge files may be truncated. Scope is Agent chats only; other Replit AI tools do not inherit it.
- Skills: `/.agents/skills/<name>/SKILL.md` (+ supporting files). Name + description load every chat; the body loads when relevant or when picked (`/` or Use a skill). Scopes: project (versioned), workspace (Settings → Customization → Skills), plus Replit-shipped skills that need no install. Workspace member policies: Required / Available / No access. GitHub import (public URL only) caps: 50 skills, 3,500 files, or 200 MiB per import. Preview checks **structure only**.
- MCP: catalog sign-in (Stripe, Linear, Notion, Sentry, …) at replit.com/integrations, or **+ Add MCP server** with an HTTPS URL + optional headers. Connected tools apply **across all projects**. Mention the server in chat; confirm when prompted. Only add servers you trust.
- Skills from the Replit pane are audited; GitHub/copied skills are not — read `SKILL.md` first (`malicious-skills-supply-chain`). Do not put secrets in `replit.md` (`agent-output-secret-scanning`). For a portable team file, keep a short `AGENTS.md` for other hosts and treat `replit.md` as Replit-specific.

## Sources

- [replit.md](https://docs.replit.com/features/project-setup/replit-dot-md) — accessed 2026-09-24
- [Agent Skills](https://docs.replit.com/features/agent/skills) — accessed 2026-09-24
- [Customize Replit Agent with Skills](https://replit.com/blog/custom-skills) — accessed 2026-09-24
- [Connect via MCP](https://docs.replit.com/build/connect-via-mcp.md) — accessed 2026-09-24
- [Agent skills (learn)](https://docs.replit.com/learn/agent-skills) — accessed 2026-09-24
