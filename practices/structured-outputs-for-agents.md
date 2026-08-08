---
id: structured-outputs-for-agents
title: Structured outputs and strict tool schemas
tags: [schema, structured-output, tools, reliability]
status: active
updated: 2026-08-08
when_to_use: Hardening tool calls, routing payloads, or final agent JSON that downstream code will execute
---

## Summary

Schema adherence is a reliability boundary: enable strict structured outputs for tool args and executable payloads, then still validate business rules before side effects.

## Notes

- JSON mode ≠ schema adherence; prefer provider strict/structured-output modes for tools.
- Keep schemas flat; use enums; mark required fields; describe constraints in field text when schema keywords are limited.
- On validation failure, feed errors back for a bounded retry—don’t execute partial args.
- Schema-valid ≠ safe: still check policy, authorization, and semantic referents (ids that exist).
- Generate schemas from Zod/Pydantic so app types and model contracts stay aligned.

## Sources

- [OpenAI cookbook — Structured Outputs for Multi-Agent Systems](https://developers.openai.com/cookbook/examples/structured_outputs_multi_agent) — accessed 2026-08-08
- [Claude — Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) — accessed 2026-08-08
- [Structured Outputs Are Doing More Work Than Most Teams Realize](https://agentengineering.org/articles/structured-outputs-are-doing-more-work-than-most-teams-realize/) — accessed 2026-08-08
