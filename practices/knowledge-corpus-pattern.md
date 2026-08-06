---
id: knowledge-corpus-pattern
title: Knowledge corpus pattern (this repo’s job)
tags: [knowledge, memory, adr, lookup]
status: active
updated: 2026-08-06
when_to_use: Deciding what to store for agents to look up vs always-on rules
---

## Summary

A dedicated **lookup corpus** holds decisions, runbooks, glossary, and distilled practices. Always-on rules stay thin and **point here**. Agents read the index, then open only matching pages.

## Store

- ADRs / decisions
- Runbooks
- Glossary
- Interface contracts (pointers)
- Hard constraints (short)
- Worked examples

## Do not store

- Secrets / PII
- Full scraped articles
- Raw chat logs / ticket dumps
- Duplicate live code that will drift

## Retrieval shape

1. Lean `manifest.json` / `INDEX.md`
2. Tagged short markdown pages
3. Optional MCP `list` / `get` later
4. Optional packer (e.g. agentbrief) that injects only relevant hits

## Sources

- [Optimizing AI Agents with Progressive Disclosure (Ardalis)](https://ardalis.com/optimizing-ai-agents-with-progressive-disclosure/) — accessed 2026-08-06
- Maintainer synthesis for `agent-knowledge` — 2026-08-06
