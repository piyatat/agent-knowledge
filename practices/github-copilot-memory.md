---
id: github-copilot-memory
title: Copilot Memory — repo facts vs user preferences
tags: [github, memory, privacy, governance]
status: active
updated: 2026-11-01
when_to_use: Enabling, reviewing, or disabling Copilot Memory, or contrasting it with Dreaming / custom instructions
---

## Summary

**Copilot Memory** is **generally available** on paid plans (2026-10-28). It stores **repository-level facts** (shared, citation-checked against the current branch) and **user-level preferences** (follow you across repos; citations may quote you). Not committed instructions (`github-copilot-instructions`), not app **project** memory (separate toggle), and not Dreaming (`github-copilot-dreaming`).

## Notes

- Surfaces (facts + prefs unless noted): Copilot app, CLI, VS Code, cloud agent (including Slack/Teams starts), GitHub Mobile. **Facts only:** code review and agentic autofix — a personal pref never changes how PRs are reviewed or alerts autofixed. App availability is account-gated; there is no in-app switch for that gate.
- Facts: write-access users create them; anyone with Memory access in **that** repo can use them. Not pooled across an org; **forks do not copy** memories. Copilot judges citation freshness — not a guaranteed rule. Default expiry **90 days** (was 28 in older preview notes); org/enterprise can set fact expiry **7–180** days (lower of org vs enterprise wins). Expiry resets on **upvote**, not on mere retrieve. Closed-unmerged PRs can still mint facts.
- Prefs: owned by the **active billing entity**. Multi-license users must pick a default billing entity before new facts **or** prefs are stored. Org/enterprise admins can export or delete (per user or bulk).
- Defaults: individual paid plans — prefs **on**; Business/Enterprise — prefs **off** until policy allows, then user opt-out. Repo facts allowed unless enterprise/org/repo restrict; org repo-access default is **All repositories**. Most-restrictive org policy wins for multi-license users. Disabling prefs does **not** disable facts and vice versa.
- CLI: interactive `/memory on|off|show` is local and can disable **both** types; `-p` needs `--enable-memory`. Only the **root** agent may `store_memory` / `vote_memory`; subagents can `read_memories`. VS Code Memory is **off** until the local setting is enabled. Cloud agent / code review do not prompt before store. Secrets and model-control tokens are rejected. Treat stored text as untrusted later context (`agent-memory-poisoning`).

## Sources

- [About GitHub Copilot Memory](https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory) — accessed 2026-11-01
- [Managing Copilot Memory for your personal account](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself) — accessed 2026-11-01
- [Managing Copilot Memory for an enterprise, organization, or repository](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator) — accessed 2026-11-01
- [GitHub intelligence puts your code, context, and history to work](https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work/) — accessed 2026-11-01

