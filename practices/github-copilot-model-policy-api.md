---
id: github-copilot-model-policy-api
title: Copilot model policy API — enterprise, teams, apps, orgs
tags: [github, models, api, governance]
status: active
updated: 2026-10-19
when_to_use: Scripting Copilot model enablement after a deprecation, or PATCHing enterprise/org model policies instead of the UI
---

## Summary

**GET/PATCH Copilot model-policies** (GA 2026-10-19) let admins retrieve and set which models are enabled, disabled, or delegated. This is not Auto tiers (`github-copilot-auto-model`), not HydraFusion (`github-copilot-hydrafusion`), and not the pin/retirement table (`github-copilot-model-deprecations`). Returned `policy_state` is **not** a per-user access decision.

## Notes

- Four surfaces announced: enterprise `GET/PATCH /enterprises/{enterprise}/copilot/model-policies`; enterprise teams `…/teams/{team_id}/copilot/model-policies` (REST uses numeric `team_id`; the changelog also wrote `{team_slug}`); enterprise apps `…/copilot/apps/model-policies`; organization `GET/PATCH /orgs/{org}/copilot/model-policies`. Enterprise REST is documented under **enterprise AI controls**. Auth: `Authorization: Bearer`, `Accept: application/vnd.github+json`, `X-GitHub-Api-Version: 2026-03-10`.
- Enterprise GET: `default_availability.policy_state` is `enabled` | `disabled` | `delegate_to_organizations`. Per-model `policy_state` can also be `delegate_to_teams_and_apps` | `delegate_to_default` | `unconfigured`. PATCH the same fields. `delegate_to_organizations` is rejected on enterprises that do not manage Copilot through organizations.
- Team/apps GET: each model has `policy_state` (`enabled` | `disabled` | `optional`), `enterprise_policy_state`, and `editable`. PATCH `enabled`/`disabled` to store a policy, or `optional` to **clear** it. Locked models cannot be updated. Fine-grained permission: `read_enterprise_ai_controls` / `write_enterprise_ai_controls`; classic tokens `read:enterprise` (GET) or `admin:enterprise` (PATCH).
- Use after the 2026-10-19 Copilot retirements: if default model enablement is off, PATCH the replacement (`gpt-6.1-sol`, `gpt-6-luna`, `gemini-3.8-flash`, `grok-4.7`) to `enabled` before agents and `-p` pins fail. Confirm the picker, not only the API row.

## Sources

- [Copilot model policy API for enterprise, orgs, and teams](https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams/) — accessed 2026-10-19
- [REST API endpoints for enterprise AI controls](https://docs.github.com/en/enterprise-cloud@latest/rest/enterprise-admin/ai-controls) — accessed 2026-10-19
- [About default availability of Copilot features and models](https://docs.github.com/en/copilot/concepts/enterprise/default-availability) — accessed 2026-10-19
- [GitHub Copilot models deprecated on October 19, 2026](https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026/) — accessed 2026-10-19
