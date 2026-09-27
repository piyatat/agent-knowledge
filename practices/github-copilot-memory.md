---
id: github-copilot-memory
title: Copilot Memory — repo facts vs user preferences
tags: [github, memory, privacy, governance]
status: active
updated: 2026-09-27
when_to_use: Enabling, reviewing, or disabling Copilot Memory for cloud agent, CLI, code review, or agentic autofix
---

## Summary

**Copilot Memory** (public preview) stores **repository-level facts** (shared, citation-checked against the current branch) and **user-level preferences** (per user, may quote the user). Consumers today: cloud agent, code review, Copilot CLI, and agentic autofix. Not committed `AGENTS.md` / `copilot-instructions.md` (`github-copilot-instructions`) and not Spaces (`github-copilot-spaces`).

## Notes

- Facts: created only from write-access users who have Memory on; usable by anyone with Memory access **in that same repo**. Review/delete under repo Settings → Copilot → Memory. Code review uses **facts only** (no user prefs). CLI applies facts plus the initiating user’s prefs. Unused entries expire after **28 days**; a successful validate-and-use can reset the timer. Closed-unmerged PRs can still mint facts — validation against the current tree is the gate.
- Prefs: owned by the **active billing entity**. Multi-license users must pick a default billing entity before prefs are created. Org/enterprise admins can export JSONL or delete (per user or bulk; exports reuse a 2-hour cache, **10/hour**). Audit log records admin export/delete and user opt-out.
- Enablement is **per user**, not per repo. Individual paid plans: on by default. Org/enterprise: policy off by default; once enabled, users are on unless they opt out. If several orgs license the same user, the **most restrictive** policy wins. Repo admins can turn Memory **off for that repo** (stops store/read of facts; preexisting facts are not deleted; prefs unchanged).
- CLI: `/memory on|off|show` persists across sessions; `-p` needs `--enable-memory` (off by default). `store_memory` prompts say whether the entry is a user pref or a repo fact. Permission kind `memory` gates storing. Treat stored text as untrusted later context (`agent-memory-poisoning`).

## Sources

- [About GitHub Copilot Memory](https://docs.github.com/en/copilot/concepts/agents/copilot-memory) — accessed 2026-09-27
- [Managing Copilot Memory for your personal account](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself) — accessed 2026-09-27
- [Managing Copilot Memory for an organization or enterprise](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator) — accessed 2026-09-27
- [Copilot Memory controls for deletion, scope, and CLI](https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/) — accessed 2026-09-27
- [Agentic memory public preview](https://github.blog/changelog/2026-01-15-agentic-memory-for-github-copilot-is-in-public-preview/) — accessed 2026-09-27
