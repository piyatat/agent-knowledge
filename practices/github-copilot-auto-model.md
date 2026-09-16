---
id: github-copilot-auto-model
title: Copilot Auto — Efficiency, Balance, and Intelligence tiers
tags: [github, routing, cost, models]
status: active
updated: 2026-09-16
when_to_use: Choosing Copilot Auto Efficiency vs Balance vs Intelligence, or contrasting it with Cursor Router
---

## Summary

**Copilot Auto** with task optimization picks a model per prompt from health/availability plus task complexity. **Tiers** (2026-09-14) bias that router toward cost, mixed, or quality — they do **not** change the model pool. Not Cursor Router (`cursor-router`) and not pinning a model in the picker. JetBrains/Eclipse/Xcode/Visual Studio Auto is the older reliability/availability router **without** these tiers.

## Notes

- Tiers: **Efficiency** (cost; straightforward work), **Balance** (cost, quality, latency; everyday), **Intelligence** (quality; hard tasks). All three still evaluate the prompt — a docstring request can land on a small model even on Intelligence. Billing is the **list price of the selected model**, with the usual **10% Auto discount** on paid plans. Admin/plan/FedRAMP/evaluation-model policies still shrink the pool.
- Surfaces with task optimization: GitHub.com Chat, VS Code, Copilot CLI, Copilot app, cloud agent. **Tiers themselves** are VS Code, CLI, and the Copilot app only (rolling out as of 2026-09-14). Cloud agent and github.com Chat get Auto without the three-tier UI. Hover/terminal/end-of-response shows which model ran.
- Cache: Auto switches only at **session start or after `/compact`**, not mid-task. Third-party agents (Codex / Claude in Copilot) can also pick Auto from a short supported-model list. Do not treat Auto as a way to bypass model allowlists.

## Sources

- [About Copilot auto model selection](https://docs.github.com/en/copilot/concepts/auto-model-selection) — accessed 2026-09-16
- [Configure cost and quality in Copilot auto model selection](https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/) — accessed 2026-09-16
- [Cursor Router](https://cursor.com/docs/cursor-router) — accessed 2026-09-16
