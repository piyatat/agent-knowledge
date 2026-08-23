---
id: agent-memory-poisoning
title: Persistent agent memory poisoning
tags: [memory, security, prompt-injection, failure-modes]
status: active
updated: 2026-08-23
when_to_use: Agents write long-term memory (files, vectors, MEMORIES.md) from email, Slack, RAG docs, or untrusted tool output
---

## Summary

Prompt injection dies with the session. **Memory poisoning** writes attacker text into durable memory, then a later benign retrieval executes it as “trusted” context. Always-on Cursor automations that persist `MEMORIES.md` from public Slack/webhooks have the same shape.

## Notes

- Lifecycle: inject via a document/email/webhook the agent is allowed to read → store as memory → later retrieve on an unrelated task. Injection and execution are **temporally decoupled**, so request-time filters miss the trigger turn.
- Write channels (systematic study, αXiv 2606.04329): explicit user/tool writes, system-prompt “save what’s relevant,” compaction/summarization writes, and shared multi-agent stores. Aggressive remember/retrieve policies are more exploitable; existing prompt-injection defenses do not cover this class.
- Cursor-specific: automations persist memories across runs; untrusted trigger text can poison them — disable memory or treat it as untrusted when the trigger is public Slack/webhooks.
- Defenses that change architecture (not just prompts): partition memory by trust (immutable system vs admin vs per-user vs ephemeral); provenance on every write (source, time, trust); no untrusted write-through to shared/org memory; isolate the write validator from the acting agent; decay or review old entries in high-risk domains; monitor tool-mix / refusal drift.
- Multi-agent: do not auto-commit a peer’s output into your store. Carry the custody chain (“derived from Agent A, which read Doc X”).

## Sources

- [Agent Memory Poisoning (Tian Pan)](https://tianpan.co/blog/2026-04-10-agent-memory-poisoning-persistent-compromise) — accessed 2026-08-23
- [From Untrusted Input to Trusted Memory (αXiv 2606.04329)](https://www.alphaxiv.org/abs/2606.04329) — accessed 2026-08-23
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) — accessed 2026-08-23
