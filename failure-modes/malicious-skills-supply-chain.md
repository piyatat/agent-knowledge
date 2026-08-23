---
id: malicious-skills-supply-chain
title: Malicious Agent Skills and marketplace supply chain
tags: [skills, security, supply-chain, failure-modes]
status: active
updated: 2026-08-23
when_to_use: Installing, ranking, or allowlisting third-party SKILL.md packages from a public marketplace
---

## Summary

A skill is operational text plus optional scripts that inherit the host agent’s permissions. Public skill registries are a **supply-chain** surface: typosquatting, brand impersonation, and hidden `SKILL.md` instructions can steal credentials or persist after uninstall. Treat marketplace install like `npx` of unreviewed code.

## Notes

- OWASP Agentic Skills Top 10 **AST01** (Critical): attackers ship skills that look useful but hide stealers, reverse shells, or social-engineering prose. Skills are unique because they attack both the **code** layer and the **instruction** layer; Snyk’s ToxicSkills work reported that confirmed-malicious skills combined both.
- Documented campaigns (OWASP AST01): ClawHavoc (Jan 2026) published 1,184 malicious skills across 12 accounts delivering Atomic Stealer; at peak, five of ClawHub’s seven most-downloaded skills were malware. Three lines of markdown were enough to exfiltrate SSH keys (Snyk, Feb 2026).
- Common shapes: typosquats, “Prerequisites” that tell the user to paste attacker-hosted install commands, ClickFix setup dialogs, writes into identity/memory files (`SOUL.md` / `MEMORY.md`) that survive uninstall, and impersonation of high-demand names (Google, wallets, traders).
- Mitigations that actually bind: read `SKILL.md` before install; pin publisher + version; require signatures bound to a revocable publisher identity (signature ≠ safety); scan at publish **and** install; sandbox skill scripts; restrict `allowed-tools` when the client enforces it; treat skill writes to memory/identity files as elevated-risk.
- Complementary to MCP registry admission: a skill marketplace listing is discovery, not a trust root.

## Sources

- [AST01 — Malicious Skills (OWASP)](https://owasp.org/www-project-agentic-skills-top-10/ast01.html) — accessed 2026-08-23
- [Agent Skills Guide 2026 (Termdock)](https://www.termdock.com/en/blog/agent-skills-guide) — accessed 2026-08-23
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-08-23
