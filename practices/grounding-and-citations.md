---
id: grounding-and-citations
title: Grounding answers with sources and citation checks
tags: [grounding, citations, hallucination, rag]
status: active
updated: 2026-08-09
when_to_use: Agents answer from retrieved docs/tools and must not invent unsupported claims
---

## Summary

Separate retrieval, generation, and verification: attach sources, then score claims against those sources (and regenerate or refuse when unsupported).

## Notes

- Require the model to cite retrieved ids/paths; reject bare confident prose for high-stakes answers.
- Post-hoc claim checks (similarity/NLI) catch fabricated or mismatched citations better than hope.
- For coding agents, grounding often means file:line / test output—not web papers.
- Eval harnesses should include groundedness tasks, not only 'tests pass'.
- Untrusted retrieved text is also an injection channel—pair with prompt-injection defenses.

## Sources

- [AgentOS — Citation verification](https://docs.agentos.sh/features/citation-verification) — accessed 2026-08-09
- [Citation-Enhanced Generation (ACL 2024)](https://aclanthology.org/2024.acl-long.79/) — accessed 2026-08-09
- [Groundedness API overview](https://groundedness.walkosystems.com/) — accessed 2026-08-09
