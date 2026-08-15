---
id: instruction-conflict-resolution
title: Resolving conflicting agent instructions
tags: [rules, failure-modes, orchestration]
status: active
updated: 2026-08-15
when_to_use: When system, project, skill, and user instructions disagree and the agent picks the wrong one
---

## Summary

Conflicting instructions are a common silent failure. Define precedence (user > project > skill defaults > global) and make conflicts visible instead of hoping the model merges them.

## Notes

- Document precedence in AGENTS.md; avoid duplicate always-on rules that restate opposites.
- Prefer "unless the user overrides" phrasing for soft defaults.
- When tools/skills inject competing policies, log which source won.
- For safety vs helpfulness conflicts, fail closed and ask the user.
- Unit-test harnesses with deliberately conflicting rule fixtures.

## Sources

- [OWASP LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — accessed 2026-08-15
- [Human-in-the-loop approvals (corpus)](https://github.com/piyatat/agent-knowledge/blob/main/practices/human-in-the-loop-approvals.md) — accessed 2026-08-15
