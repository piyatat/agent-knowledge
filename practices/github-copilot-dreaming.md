---
id: github-copilot-dreaming
title: Copilot Dreaming — background memory and guidance refresh
tags: [github, memory, automations, privacy]
status: active
updated: 2026-11-01
when_to_use: Enabling Copilot Dreaming, reviewing its PRs, or contrasting it with Copilot Memory / custom instructions
---

## Summary

**Copilot Dreaming** (public preview, 2026-10-28) is a **background** job that keeps Copilot Memory and repository guidance current. It analyzes eligible sessions and merged-PR review feedback, then updates memories or proposes instruction/skill PRs. It does **not** retrain a model. Not Copilot Memory itself (`github-copilot-memory`) and not a scheduled Copilot automation (`github-copilot-automations`).

## Notes

- Three capabilities, enabled together per scope (you cannot toggle them individually): **personal memory curation** (updates your prefs only; never writes personal instruction/skill files); **repository customization** (repo memories + proposed PRs for tracked `.github/copilot-instructions.md`, `.github/instructions/**`, `.github/agents/**`, `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `REVIEW.md`, `.github/skills/**`); **code review customization** (internal review guidance; no PR; needs Copilot code review + preview features; **no self-hosted runners**).
- Memories: add / update / delete **without** per-change approval. Checked-in files stay unchanged until you merge the proposed PR. Review AI-generated diffs; not every run opens a PR or makes a change. Run details live in the Copilot app — they are not a full undo log.
- Preview limits: eligible **paid** plans; initial preview needs **GPT-6.1 Sol** and is **not** on Copilot Pro; **no** GitHub Enterprise Cloud with data residency. Off by default. Org/enterprise policy can allow it; users still enable personal Dreaming themselves. Completing extra prerequisites after enablement does **not** activate more capabilities — toggle Dreaming off/on on the affected user or repo.
- Session syncing is required for personal + repo customization (default on in CLI/app unless `remoteExport: false` in `~/.copilot/settings.json` or org **Store local sessions in the Cloud** is below **View from cloud**). Code-review customization does not need syncing. Turning sync off does not delete already-synced sessions (`github-copilot-remote-control`).
- Every run burns **AI credits**, including no-op runs and inactive repos. Usage is not a separate line item. Set spend budgets before widening org coverage; alerts alone do not stop usage. Turning Dreaming off does not undo memories, close PRs, or restore deleted entries.

## Sources

- [About GitHub Copilot Dreaming](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming) — accessed 2026-11-01
- [Managing Copilot Memory for an enterprise, organization, or repository](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator) — accessed 2026-11-01
- [GitHub intelligence puts your code, context, and history to work](https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work/) — accessed 2026-11-01
