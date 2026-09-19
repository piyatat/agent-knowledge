---
id: cursor-origin-migrations
title: Origin Migration API — GitHub mirror transitions
tags: [cursor, git, api, hosting]
status: active
updated: 2026-09-19
when_to_use: Scripting a GitHub ↔ Origin mirror cutover, detach, or forced inbound adoption
---

## Summary

The **Origin Migration API** is for operators moving a repo between GitHub and Origin **mirror states**. Call it as a **Cursor user** (`origin auth login` or `origin api` with a user key), never as an Origin App. Early beta; review the OpenAPI spec. Not the Origin Apps / installation-token path (`cursor-origin-apps`) and not everyday clone/PR via `origin` CLI (`cursor-origin`).

## Notes

- Base URL `https://api.cursor.com/v1/origin`. User policy scopes: `repository:mirror:write` (Transition, Force Cutover), `repository:mirror:delete` (Detach), `repository:metadata:read` (job getters). Caller must also administer the repo on the **upstream GitHub** source. These scopes are **not** requestable on an Origin App install.
- `POST /v1/origin/repos/{ownerSlug}/{repoName}/mirror:transition` with `transition`: `initial_to_inbound`, `inbound_to_outbound`, `outbound_to_inbound`. Repo enters a transitioning status; poll Get Active Mirror Transition Job or Get Mirror Transition Job. Wrong start state or an already-active job → `FailedPrecondition` (400). No GitHub admin → 403.
- Force cutover (`POST …/mirror:forceCutover`) applies only to `outbound` (or an outbound-to-inbound job in `requires_attention`). It adopts GitHub as source of truth **without** pushing this host’s divergent refs back; host-only refs are snapshotted and abandoned.
- Detach (`DELETE …/mirror`) makes Origin standalone, stops both-way sync, deletes the deploy credential. Not reversible through this API. Never-mirrored → 400; already-detached → 204 no-op.
- Job `status`: `queued`, `running`, `succeeded`, `failed_rolled_back`, `requires_attention`, `superseded`. Terminal: succeeded / failed_rolled_back / superseded. `requires_attention` needs an operator or force cutover. Poll `status`, not `phase` (phases can grow).

## Sources

- [Origin Migration API](https://cursor.com/docs/api/origin/migrations) — accessed 2026-09-19
- [Origin API Changelog](https://cursor.com/docs/api/origin/changelog) — accessed 2026-09-19
