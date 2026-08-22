---
id: agent-guardrails-vs-approvals
title: Guardrails vs human-approval interruptions
tags: [guardrails, hitl, safety, reliability]
status: active
updated: 2026-08-22
when_to_use: Deciding whether to auto-block a run or pause it for a person before a side-effecting tool
---

## Summary

**Guardrails** are automatic input / output / tool checks that continue, rewrite, or tripwire-stop a run. **Approvals** pause the same run (`interruptions` + resumable `state`) until a human or policy decides. Use both: rails for cheap policy, approvals for irreversible tools.

## Notes

- OpenAI Agents SDK split: input rails (before the expensive/side-effecting path), output rails (before the result leaves), tool rails (args/results around a function tool), HITL (`needs_approval` / MCP `require_approval`) for shell, patches, refunds, sensitive MCP.
- Execution mode: **blocking** input rails skip the main model (cost/safety); **parallel** starts the main agent speculatively (latency). Tool input rails normally run *after* approval unless you opt into pre-approval checks — still re-check after the human says yes.
- Agent-level rails do not wrap a whole manager graph: input rails run on the **first** agent; output rails on the **final** agent; tool rails only on tools you attach them to. Put checks next to the side-effecting tool.
- Tripwires halt with typed exceptions. Approvals serialize `state` and resume the *same* run (including after stream settle or hours later). Streaming does not invent a second approval protocol.
- NeMo Guardrails (and similar middleware) hook **every** model step in an agent loop (`before_model` / `after_model`), not just the first user turn — needed when tool results can jailbreak a later iteration. Rails are not a sandbox; still isolate credentials and contain tools.

## Sources

- [Guardrails and human review (OpenAI)](https://developers.openai.com/api/docs/guides/agents/guardrails-approvals) — accessed 2026-08-22
- [OpenAI Agents SDK — Guardrails](https://openai.github.io/openai-agents-python/guardrails/) — accessed 2026-08-22
- [NVIDIA NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) — accessed 2026-08-22
