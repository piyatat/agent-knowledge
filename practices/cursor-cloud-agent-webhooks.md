---
id: cursor-cloud-agent-webhooks
title: Cursor Cloud Agent webhooks — v0 statusChange
tags: [cursor, webhooks, api, ops]
status: active
updated: 2026-09-04
when_to_use: Getting an HTTP callback when a Cloud Agent finishes or errors (legacy v0)
---

## Summary

Cursor can POST a signed **`statusChange`** when a Cloud Agent hits `FINISHED` or `ERROR`. As of 2026-09-03 the current **v1** Cloud Agents API documents webhooks as **coming soon**. Delivery still exists on the **legacy v0** create path (`webhook.url` + optional `webhook.secret`, min 32 chars). Prefer polling v1 runs unless you already depend on v0.

## Notes

- Headers: `X-Webhook-Signature` (`sha256=<hex>` HMAC-SHA256 of the **raw** body), `X-Webhook-ID` (delivery id), `X-Webhook-Event` (`statusChange`), `User-Agent: Cursor-Agent-Webhook/1.0`. Verify before parse; compare the full `sha256=…` string.
- JSON fields (some omitted when unknown): `event`, `timestamp`, `id` (`bc_…`), `status`, `source.repository` / `source.ref`, `target.url` / `branchName` / `prUrl`, `summary`. Do not assume `summary` is always present.
- Receiver: HTTPS in prod, return 2xx quickly, tolerate retries, dedupe on `X-Webhook-ID`. Store the raw body if you may re-verify later. Pair with `webhook-receiver-freshness` if silence is a failure mode.
- v1 `POST /v1/agents` has no webhook field — follow with `GET` on the agent/run or a later official webhook once shipped (`cursor-cloud-agents-api`). Issue/PR text that triggered the agent is still untrusted (`prompt-injection-agent-defense`).

## Sources

- [Webhooks](https://cursor.com/docs/cloud-agent/api/webhooks) — accessed 2026-09-04
- [Cloud Agents API](https://cursor.com/docs/cloud-agent/api/endpoints) — accessed 2026-09-04
- [Cloud Agents API v0 (legacy)](https://cursor.com/docs/cloud-agent/api/v0) — accessed 2026-09-04
