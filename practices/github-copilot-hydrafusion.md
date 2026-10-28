---
id: github-copilot-hydrafusion
title: Copilot Fusion — Standard, High, and Max (was HydraFusion)
tags: [github, routing, models, cost]
status: active
updated: 2026-10-28
when_to_use: Choosing Copilot Fusion Standard/High/Max, or migrating from Auto or HydraFusion
---

## Summary

**GitHub Copilot Fusion** (GA **2026-10-28**) is a runtime **router and orchestrator**: you pick an **effort level**, Fusion picks models and a pattern (single / cascade / critique) per prompt, then returns one answer. It combines Project **HydraFusion** multi-model workflows with Copilot **Auto** selection. Not pinning a model, not Cursor Router (`cursor-router`), and not a substitute for Auto tiers on surfaces that still expose them (`github-copilot-auto-model`). Preview names HydraFusion / HydraFusion Max migrate automatically to the matching Fusion effort.

## Notes

- Pick **Copilot Fusion** in the model picker, then an effort: **Standard** (everyday; usually one versatile model), **High** (substantial well-scoped work — complex bugs, multi-file changes), **Max** (deepest reasoning). **Fusion Fast** is not user-selectable (VS Code **inline chat** only). Hover the effort name under a reply to see which models ran. Fusion has **no** context window of its own — the UI shows a conservative value from the smallest model in the pool. Routing stays on cache boundaries / large complexity jumps.
- Patterns (chosen per prompt, not per session): **Single** = one model. **Cascade** = cheap draft, then a judge that accepts or escalates. **Critique** = draft plus parallel critics; original model revises. Extra model calls happen only when the task warrants them. Intermediate drafts stay hidden. Fusion **does not start subagents**. If it discards a draft, workspace edits that draft already made are **not** undone — review before commit.
- Surfaces (GA): **VS Code**, **Copilot CLI**, **Copilot app**, **JetBrains**. CLI **1.0.105** lets `/model` pick Fusion **High or Max** from a **long-context** session (1.0.104 started managed `fusion` sessions on Auto + `fusionTier`). JetBrains: Fusion **replaces Auto** on a gradual rollout (`github-copilot-jetbrains`). Research-preview HydraFusion / HydraFusion Max / Auto selections map to the corresponding Fusion effort.
- Billing: **list price of every model call** in the workflow. No separate Fusion fee. Paid plans get **30% off** Fusion model costs **through 2026-11-30**. High/Max can cost more than Standard because they may call several models. Conversation stays on one model when possible (prompt cache); reviewers get only the context they need.
- Policy: Fusion uses models allowed by plan + enterprise/org **model policy**. Admins can **disable a model for Fusion** without disabling it for everyone, and can set Fusion (any effort) as the managed default (`github-copilot-model-policy-api`). Missing pool → Fusion disappears from the picker. Local-model routing (Standard only, experimental): `github-copilot-cli-local-models`.

## Sources

- [About GitHub Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion) — accessed 2026-10-28
- [Route and orchestrate models with GitHub Copilot Fusion](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/) — accessed 2026-10-28
- [GitHub Copilot Fusion now supports selection of local models](https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models/) — accessed 2026-10-28
- [copilot-cli changelog](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-28
- [HydraFusion updates and new Max option](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/) — accessed 2026-10-14
- [Project HydraFusion (GitHub Blog)](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) — accessed 2026-09-18
