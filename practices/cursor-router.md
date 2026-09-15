---
id: cursor-router
title: Cursor Router — Auto Cost, Balance, and Intelligence
tags: [cursor, routing, cost, models]
status: active
updated: 2026-09-15
when_to_use: Choosing Auto Cost vs Balance vs Intelligence, or passing auto-smart from the Cursor SDK
---

## Summary

**Cursor Router** is the classifier behind **Auto** on Teams and Enterprise. Each agent request is routed to a model that fits the task: cheap/fast for simple turns, more capable models for harder work. You pick an optimization mode, not a model. Not a chat-completions router, and not the generic fallback pattern in `agent-model-routing-fallback`.

## Notes

- Open the model picker, select **Auto**, then **Optimize For**: **Cost** (previous Auto spend logic), **Balance** (intelligence, speed, and cost), **Intelligence** (harder tasks, still cheaper than pinning one frontier model). Balance and Intelligence consume usage limits faster than Cost. You can switch modes any time.
- Cursor manages the model pool. You cannot pick which model handles a request. On Enterprise, blocked models are skipped; blocking too many (and especially omitting a cost-efficient workhorse such as Cursor Grok 4.5) can disable the router. All Auto modes bill at the **list price of the routed model**; third-party models also incur the Cursor Token Rate.
- Team dashboard: enable/disable the router (Enterprise is **off by default**; can be per organization group). Restrict which optimization modes members may pick (disable up to two). Optionally show the routed model at the start of each response — **hidden is the default** so people judge the result, not the name (Balance/Intelligence). **Impose Auto**: soft (new chats default to Auto, members can switch) or hard (picker locked). Both off by default.
- SDK: model id `auto-smart` with required `optimize_for` of `cost`, `balanced`, or `intelligence`. Product copy says “Balance”; the wire value is `balanced`. Call `Cursor.models.list()` before hard-coding — admins can hide Router. Python and TypeScript SDKs both expose this (`cursor-sdk`).

## Sources

- [Cursor Router](https://cursor.com/docs/cursor-router) — accessed 2026-09-15
- [Cursor Python SDK](https://cursor.com/docs/sdk/python) — accessed 2026-09-15
- [Cursor TypeScript SDK](https://cursor.com/docs/sdk/typescript) — accessed 2026-09-15
