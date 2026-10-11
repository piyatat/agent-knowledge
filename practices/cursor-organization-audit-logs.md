---
id: cursor-organization-audit-logs
title: Cursor audit logs — team vs organization Admin API
tags: [cursor, audit, api, governance]
status: active
updated: 2026-10-11
when_to_use: Pulling Cursor Enterprise audit events, choosing team vs organization keys, or deciding what hooks/OTel must cover instead
---

## Summary

Cursor **audit logs** (Enterprise) record who changed team/org settings, membership, API keys, MCP, Origin, and Cloud Agent environments. They do **not** contain prompts, generated code, or credentials. Pull one team with `GET /teams/audit-logs` (Team API key) or every linked team plus org-level events with `GET /organizations/audit-logs` (Organization API key, `auditlogs:read` or `admin:*`). Usage metrics stay on OpenTelemetry Export (`cursor-otel-export`).

## Notes

- Dashboard: team Settings → audit logs (admin). Filter by date, event type, actor, or application; export CSV. Payloads carry identifiers, names, and changed settings. `user_email` may be a member email, `Api Key: …`, `Bot: …`, `SCIM`, Origin `App:` / `Service Account:`, `System`/`unknown`, or Cursor Support.
- Not logged: agent prompts/output; Grok Bot shell/browser actions (Action Recording + OTel); Cloud Agent automation runs (`grok_bot_routine` is Grok Bot only); failed sign-ins; secret values (`cloud_agent_secret` names the secret; `cloud_agent_secret_read` is a count). Use hooks for development-activity metadata (`cursor-hooks-json`).
- Both HTTP endpoints default to the last **7 days**, max **30-day** window, **500** events/page, `eventTypes` + `users` filters, oldest first. Org route adds `team_id` (empty on org-level rows) and optional `teamId` to narrow one linked team. Auth is Basic `-u KEY:` like other Admin APIs (`cursor-cloud-agents-api`).
- Organization keys are org-scoped (`members:*`, `usage:*`, `models:read`, `auditlogs:read`, `admin:*`). Team keys cannot call `/organizations/*`. Event `application_type` is `grok_bot`, `cursor`, or empty on older rows.
- Privacy Mode does not suppress audit events. The one free-text payload is `team_hook` (script/prompt). Cursor can stream the raw message shape to Splunk HEC, Sumo, HTTPS webhooks, or S3 — contact Cursor to enable. Do not treat audit logs as a session transcript store.

## Sources

- [Compliance and Monitoring](https://cursor.com/docs/enterprise/compliance-and-monitoring) — accessed 2026-10-11
- [Organization API](https://cursor.com/docs/account/organizations/organization-admin-api) — accessed 2026-10-11
- [Admin API](https://cursor.com/docs/account/teams/admin-api) — accessed 2026-10-11
