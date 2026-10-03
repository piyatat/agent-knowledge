---
id: agent-skills-directories
title: Agent Skills directories vs the agentskills.io spec
tags: [skills, supply-chain, discovery, marketplace]
status: active
updated: 2026-10-03
when_to_use: Choosing where to find SKILL.md packages, or treating a directory listing as a trust signal
---

## Summary

**agentskills.io** is the **format spec**, not a catalog. Public **directories** (skills.sh, SkillsMP, Skills Directory, ClawHub, vendor marketplaces) index `SKILL.md` folders. A listing is discovery — the same class of trust as an MCP registry (`mcp-registry-admission`), not a reviewed allowlist. Not how to author a skill (`agent-skills-open-standard`) and not a host-specific installer (`cursor-plugins`, `claude-code-plugins`).

## Notes

- Spec vs index: the standard defines directory + YAML `name`/`description` (+ optional `license`, `compatibility`, `metadata`, experimental `allowed-tools`). Directories crawl GitHub or accept submissions. Install counts and “trending” measure crawl reach / circular popularity, not safety.
- Aggregators (counts as published 2026-09-04; they move): **skills.sh** (Vercel) ranks by installs / 8-week activity; **SkillsMP** is a larger GitHub crawl with no published ranking or review. **Skills Directory** runs an automated scan (it cites ~36% of wild skills with a security flaw — same ballpark as Snyk ToxicSkills). **AgenticSkills** is a small curated set; editorial rank ≠ audit. **ClawHub** is OpenClaw’s community hub (`openclaw-agent`) and has been a documented malware channel (`malicious-skills-supply-chain`).
- Host marketplaces (Cursor, Claude, Codex, Copilot, Gemini extensions) are a different path: they package skills inside plugins and may add a human review of the listing. Review still does not replace runtime allowlists or reading `SKILL.md`.
- Agent action: prefer a named repo + pinned commit; read frontmatter and scripts; scan for hidden Unicode (`unicode-instruction-injection`); do not install from a leaderboard “one-liner” into a privileged agent. Empty or huge catalogs are not quality signals.

## Sources

- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-10-03
- [agentskills/agentskills](https://github.com/agentskills/agentskills) — accessed 2026-10-03
- [skills.sh](https://www.skills.sh/) — accessed 2026-10-03
- [AI Agent Skill Directories compared](https://agenticskills.io/ai-skills-directories) — accessed 2026-10-03
- [Snyk — ToxicSkills](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/) — accessed 2026-10-03
