---
id: cursor-notion
title: Cursor in Notion — agents from specs and task boards
tags: [cursor, automations, orchestration, ux]
status: active
updated: 2026-09-17
when_to_use: Delegating a Notion spec or task to a Cursor Cloud Agent, or debugging page-access / GitHub push from Notion
---

## Summary

**Cursor in Notion** (beta) runs the same Cloud Agent harness from Notion Agents. Available to all Cursor users on **Notion Business or Enterprise**. Setup, @mentions, and task assignment stay in Notion; code/PRs run on a sandboxed Cloud Agent VM. Billed as normal Cloud Agent usage — not a Notion add-on. This is not Grok Bot’s Notion plugin (`cursor-grok-bot`) and not Linear/Jira `@Cursor`.

## Notes

- Install: Notion sidebar **Agents → New Agent → Cursor** → template (Code Q&A, Bug Triage, …) or scratch instructions/triggers → paste a **Cursor User API Key** → share the pages/databases/spaces the agent needs. Repos, environment, and SCM come from the user’s Cursor dashboard. **GitHub** is required for repo access and PRs.
- The connection is the **personal API key** (individual Cursor account, not the whole Notion workspace). Each agent only sees Notion content listed in **Tools & access**; permissions are not inherited from whoever starts a run. First @mention on a page prompts page access.
- Use: comment `@` the agent on a spec (“make a plan… wait for approval”) and **View chat**; or **assign** a database task — status updates, comments, PR links. Mentions in **comments** are more reliable than page body. Agent-mentioned trigger must be on.
- GitHub push failures: token needs Contents + Pull requests read/write; check SSO/org approval and the default repo. ZDR/privacy settings on the Cursor account apply to these runs. Spec/task text is untrusted (`prompt-injection-agent-defense`).

## Sources

- [Notion (Cursor docs)](https://cursor.com/docs/integrations/notion) — accessed 2026-09-17
- [Cloud Agents](https://cursor.com/docs/cloud-agent) — accessed 2026-09-17
