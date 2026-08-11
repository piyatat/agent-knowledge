---
id: llm-judge-bias
title: LLM-as-judge bias and judge QA
tags: [evals, judge, bias, quality]
status: active
updated: 2026-08-10
when_to_use: Scoring agents with an LLM judge or shipping eval numbers from preference tests
---

## Summary

Treat the judge as a system under test: probe position, length/verbosity, and self-preference bias; calibrate against humans; detect drift before celebrating score gains.

## Notes

- Swap candidate order (A/B then B/A). Verdict flips → position bias.
- Control for length explicitly in the rubric; observational "longer wins" may be confound, not quality.
- Self-preference: judges often favor same-family models — measure with human anchors when claiming wins.
- Calibrate κ / agreement vs human labels; a high internal score with poor human agreement is marketing, not quality.
- Detect **judge drift** separately from system improvement — freeze judge prompts/models across releases when possible.
- Prefer trajectory/effect checks for agents (tools done correctly) over final-prose-only judging when side effects matter.

## Sources

- [Demystifying evals for AI agents (Anthropic)](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) — accessed 2026-08-10
- [judge-audit-mcp](https://github.com/asif786ka/judge-audit-mcp) — accessed 2026-08-10
- [When AIs Judge AIs (arXiv)](https://arxiv.org/html/2508.02994v1) — accessed 2026-08-10
