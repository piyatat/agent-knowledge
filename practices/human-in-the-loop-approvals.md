---
id: human-in-the-loop-approvals
title: Human-in-the-loop approvals for risky agent actions
tags: [hitl, safety, approvals, tools]
status: active
updated: 2026-08-08
when_to_use: Agents can mutate prod, spend money, delete data, or push code without review
---

## Summary

Classify actions by blast radius; auto-allow low risk, require explicit human approval for irreversible or high-privilege tools, and keep an audit trail.

## Notes

- Map tools into allow / ask / deny tiers (read-only vs write vs destroy).
- Approvals should show intent + exact tool args, not a vague summary alone.
- Don’t let untrusted content rewrite the approval policy mid-run.
- After deny, continue safely (ask user / choose alternative) instead of retrying the same call blindly.
- Pair HITL with least privilege and evals that assert unsafe actions never slip past gates.

## Sources

- [OWASP LLM Prompt Injection Prevention — agent defenses / action screening](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — accessed 2026-08-08
- [Microsoft Agent Framework handoff — HITL / tool approval mentions](https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff) — accessed 2026-08-08
- [OpenAI orchestration — approval surfaces when splitting agents](https://developers.openai.com/api/docs/guides/agents/orchestration) — accessed 2026-08-08
