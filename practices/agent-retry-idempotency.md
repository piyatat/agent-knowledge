---
id: agent-retry-idempotency
title: Retries and idempotency for agent tool calls
tags: [reliability, retries, idempotency, tools]
status: active
updated: 2026-08-09
when_to_use: Designing tool APIs or harnesses where agents retry after timeouts, 429s, or flaky side effects
---

## Summary

Assume agents will retry. Make mutating tools idempotent (keys/dedupe), classify errors as retryable vs fatal, and bound backoff so loops cannot spend forever.

## Notes

- Timeouts after success cause duplicate creates unless clients send idempotency keys.
- Return stable error codes: validation (do not retry) vs rate-limit/unavailable (retry with jitter).
- Cap retries at the harness; surface exhausted retries to the user instead of silent loops.
- Read-only tools can be retried freely; writes need server-side dedupe windows.
- Log attempt counts on spans for observability and cost forensics.

## Sources

- [Demystifying evals for AI agents — isolation and flaky runs](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — accessed 2026-08-09
- [Tool-call failure modes (related corpus note)](https://github.com/piyatat/agent-knowledge/blob/main/failure-modes/tool-call-failures.md) — accessed 2026-08-09
- [OWASP LLM prompt injection cheat sheet — action screening](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html) — accessed 2026-08-09
