---
id: github-copilot-hydrafusion
title: Copilot HydraFusion — research-preview multi-model workflows
tags: [github, routing, models, cost]
status: draft
updated: 2026-10-14
when_to_use: Trying HydraFusion or HydraFusion Max instead of Auto Efficiency/Balance/Intelligence
---

## Summary

**HydraFusion** is a Copilot **research preview** that runs a **workflow** (single / cascade / critique) across several models and returns one answer. **HydraFusion Max** (2026-10-14) uses the same architecture with higher reasoning effort for harder tasks. Available in **VS Code**, the **Copilot app**, and **Copilot CLI**. Not Copilot Auto tiers (`github-copilot-auto-model`) and not Cursor Router (`cursor-router`). Names, pool, and behavior may change.

## Notes

- Enable: CLI `/update` → `/experimental on` → `/model` → HydraFusion / HydraFusion Max. App: Settings → search HydraFusion → model picker. VS Code: same picker once preview features are on. **Pro, Pro+, Business, Enterprise** with experimental/preview features; Business/Enterprise also need admin preview + model policy. Billing is **list price of every model call** in the workflow (draft, critic, revision, escalate, retry, fallback) — no separate HydraFusion fee.
- **2026-10-14 pool**: Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna (which models run depends on the workflow). Effort is no longer each model’s default: **medium** on initial drafts, **high** on review. Max spends more high-effort steps; HydraFusion stays the balanced / token-saving pick.
- **Cascade**: cheap draft, then a **judge** that requests repair only when needed, optional escalate. **Critique**: critics now **use tools** on the workspace (not text summaries only) and can run **in parallel**. Single = one model. Review legs stay isolated; solver legs use the shared workspace and the usual permission loop. Cancel/validation failure applies **no patch**.
- Contrast Auto: Auto chooses **one** model from a shared pool; HydraFusion may call several. Intermediate drafts stay hidden until one result returns. Preview guidance still favors first-turn, well-scoped prompts. Not a pin/deprecation table (`github-copilot-model-deprecations`).

## Sources

- [HydraFusion updates and new Max option](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/) — accessed 2026-10-14
- [HydraFusion in VS Code and the GitHub Copilot app](https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app/) — accessed 2026-10-14
- [Project HydraFusion (GitHub Blog)](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) — accessed 2026-09-18
- [About Copilot auto model selection](https://docs.github.com/en/copilot/concepts/auto-model-selection) — accessed 2026-09-18
