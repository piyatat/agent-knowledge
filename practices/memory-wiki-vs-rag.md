---
id: memory-wiki-vs-rag
title: Agent memory: wiki/index vs RAG
tags: [memory, rag, wiki, knowledge]
status: active
updated: 2026-08-08
when_to_use: Choosing how agents should remember project conventions, decisions, or large corpora across sessions
---

## Summary

Prefer always-on small files + an indexed markdown wiki for curated agent memory; reach for RAG when the corpus is huge or fuzzy search is required.

## Notes

- Plain text (`AGENTS.md` / rules): best for tiny, high-signal always-on guidance.
- LLM wiki / index+pages: agent reads INDEX then opens 1–3 pages—auditable, git-friendly, low infra (this corpus’s pattern).
- RAG: embeddings + top-k for large unstructured stores; adds noise and staleness risk for small curated sets.
- Code navigation often wants grep/AST tools more than vector memory of the whole repo.
- Don’t auto-write untrusted model text into durable memory without review (poisoning risk).

## Sources

- [RAG vs LLM Wiki vs Plain Text decision framework](https://zhuoqidev.com/en/posts/memory-choice-framework/) — accessed 2026-08-08
- [LLM Wiki vs RAG for Internal Codebase Memory](https://www.mindstudio.ai/blog/llm-wiki-vs-rag-internal-codebase-memory) — accessed 2026-08-08
- [ADRs before memory RAG](https://dev.to/shimo4228/claude-codes-memory-has-no-vectors-try-adrs-before-memory-rag-4kik) — accessed 2026-08-08
