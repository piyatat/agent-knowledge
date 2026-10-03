---
id: unicode-instruction-injection
title: Hidden Unicode instruction injection in skills and tools
tags: [security, prompt-injection, skills, failure-modes]
status: active
updated: 2026-10-03
when_to_use: Reviewing SKILL.md, MCP tool descriptions, or plugin manifests that look clean in the UI but may hide instructions
---

## Summary

Agents that load **tool descriptions**, **SKILL.md**, or **MCP metadata** will obey instructions encoded in **invisible Unicode** — especially Unicode Tags (`U+E0000`–`U+E007F`) and zero-width characters. The bytes are invisible in every ordinary editor/diff UI and still reach the model. Distinct from a skill that is obviously malware (`malicious-skills-supply-chain`) and from ordinary retrieved-doc injection (`prompt-injection-agent-defense`).

## Notes

- Demonstrated (wunderwuzzi / CSA, Feb–Mar 2026) against Claude Code (auto-approval), Copilot, Codex Skills, Gemini CLI, and ClawHub: a visually clean skill can embed shell/`curl` instructions that survive human review. The Tags-block technique was earlier shown by Riley Goodside on model prompts; skills and MCP descriptions are the same channel with higher standing (loaded as trusted operational text).
- Why review fails: GitHub, IDE diffs, and most Markdown renderers drop or ignore Tags/ZW* glyphs. `cat` and “looks fine” are not a check. The payload is usually at the start of `description` / a “Prerequisites” paragraph so it wins lost-in-the-middle (`lost-in-the-middle`).
- Supply-chain overlap: Snyk’s ToxicSkills scan of ClawHub/skills.sh (Feb 2026) found prompt-injection patterns (base64, Unicode smuggling, “ignore previous instructions”) in a large share of listed skills, often **combined** with a helper script. Hidden Unicode is one delivery; the script is the other (`malicious-skills-supply-chain`).
- Mitigations that bind: reject Tags-block and anomalous zero-width density in CI for `SKILL.md`, MCP manifests, plugin `plugin.json`, and hook scripts; show a hex/Unicode dump in the install UI; pin digest (MCP Skills extension does this for files — tools still have no digest); do not auto-approve shell from a newly installed skill; sandbox skill scripts. Visual “LGTM” is not a control.

## Sources

- [CSA — Hidden Unicode Instruction Injection in AI Agent Skills](https://labs.cloudsecurityalliance.org/wp-content/uploads/2026/03/CSA_research_note_unicode_instruction_injection_ai_skills_20260310-csa-styled.pdf) — accessed 2026-10-03
- [Snyk — ToxicSkills (ClawHub / skills.sh)](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/) — accessed 2026-10-03
- [SkillJect (arXiv:2602.14211)](https://arxiv.org/abs/2602.14211) — accessed 2026-10-03
- [Skill-Inject benchmark](https://www.skill-inject.com/) — accessed 2026-10-03
- [OWASP AST01 — Malicious Skills](https://owasp.org/www-project-agentic-skills-top-10/ast01.html) — accessed 2026-10-03
