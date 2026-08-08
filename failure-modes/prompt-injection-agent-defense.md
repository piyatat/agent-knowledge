---
id: prompt-injection-agent-defense
title: Prompt injection defenses for tool-using agents
tags: [security, prompt-injection, owasp, tools]
status: active
updated: 2026-08-08
when_to_use: Threat-modeling agents that read untrusted content or call powerful tools (shell, email, MCP)
---

## Summary

OWASP LLM01 is worse for agents: injected text can drive tools. Defend with least privilege, isolation, action screening, and HITL—not prompt filters alone.

## Notes

- Indirect injection via docs, tickets, tool output, or memory is the common path; tokens do not mark instruction vs data.
- Architectural controls beat content filters: dual-LLM / quarantine patterns, sandboxes, egress allow-lists.
- Least privilege tools; require human confirmation for irreversible or high-blast-radius actions.
- Screen proposed tool calls against the original user intent (without feeding untrusted middle context to the gate).
- Pin/verify MCP servers and audit tool descriptions for hidden instructions; watch for tool-set drift.

## Sources

- [OWASP LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — accessed 2026-08-08
- [GenAI LLM Top 10 — LLM01 Prompt Injection (2026)](https://github.com/GenAI-Security-Project/GenAI-LLM-Top10/blob/main/2026/LLM01_PromptInjection.md) — accessed 2026-08-08
- [Prompt Injection Defense for AI Agents](https://www.exploreagentic.ai/insights/prompt-injection-defense-enterprise-agents/) — accessed 2026-08-08
