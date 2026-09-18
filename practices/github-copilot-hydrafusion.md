---
id: github-copilot-hydrafusion
title: Copilot HydraFusion — research-preview multi-model workflows
tags: [github, routing, models, cost]
status: draft
updated: 2026-09-18
when_to_use: Trying Copilot CLI HydraFusion instead of Auto Efficiency/Balance/Intelligence
---

## Summary

**Project HydraFusion** is a Copilot CLI **research preview** (2026-09-04) that picks a **workflow** (single / cascade / critique) across models, not just one Auto pick. Not Copilot Auto tiers (`github-copilot-auto-model`) and not Cursor Router (`cursor-router`). Names, models, and behavior may change.

## Notes

- Enable: `/update` → `/experimental on` → `/model` → **HydraFusion (Research Preview)**. All Copilot plans. Billing is **list price of every model call** in the workflow (draft, critic, revision, escalate, retry, fallback) — no separate HydraFusion fee.
- Patterns: **Single** (one model); **Cascade** (cheap draft, quality gate, optional stronger model); **Critique** (draft + independent read-only critic from another family, one revision — “Rubber Duck” style). Review legs are tool-less and isolated; solver legs use the shared workspace and the usual permission loop. Cancel/validation failure applies **no patch**.
- GitHub’s offline evals (TerminalBench 2.1 / DeepSWE / CheckpointBench vs Opus 5) are **not** a production SLA. Preview guidance: first-turn, well-scoped autopilot prompts; multi-turn is still being tuned. Intermediate drafts are held until one result returns. Contrast Auto: Auto chooses **one** model from a shared pool; HydraFusion may call several.

## Sources

- [Project HydraFusion (GitHub Blog)](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/) — accessed 2026-09-18
- [GitHub Copilot weekly releases — September 7](https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/) — accessed 2026-09-18
- [About Copilot auto model selection](https://docs.github.com/en/copilot/concepts/auto-model-selection) — accessed 2026-09-18
