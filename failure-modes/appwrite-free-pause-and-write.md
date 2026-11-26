---
id: appwrite-free-pause-and-write
title: An Appwrite Free project paused, or a write tool changed it
kind: knowledge
tags: [appwrite, billing, mcp, backend]
status: active
updated: 2026-11-26
when_to_use: An Appwrite project stopped answering after a quiet week, or an agent created or deleted data while reading
---

## Summary

Appwrite Cloud (`appwrite`) pauses a Free project after seven days without development activity in the Console. The data stays, and the API does not. Hitting a Free quota denies that product until the next period, except storage, which stays blocked until usage drops. The MCP write tool runs when the model sets `confirm_write: true`. That flag is not a human approval inside Appwrite.

## Notes

- **Pause is not a delete.** The 2026-02-20 changelog says a Free project with no development activity for seven consecutive days is paused. Users cannot access it, and backups, cron, and scheduled functions do not run. Reactivate it from the Console. The pricing page’s shorter line is “paused after 1 week of inactivity.” The changelog’s keep-alive is development activity in the Console, and it says a project that must stay up belongs on a paid plan. Start and Pro both say they do not pause projects. Start is listed only for the countries on the pricing page. A live app whose developers never open the Console can still hit the Free pause.
- **Free quotas hard-stop.** You cannot buy extra on Free. The free billing page says bandwidth over the cap denies API access, new accounts and team invites stop, function executions stop, and realtime subscriptions stop, until the billing period ends or you upgrade. File uploads stay disabled across periods until storage is under the plan limit. Free logs are kept for one hour on the pricing table, so an agent looking later may see an empty log. The pricing page allows 1 database, 1 bucket, and 2 functions. The free billing page’s downgrade table still says 3 buckets and 5 functions. Use the pricing page.
- **Writes are a tool argument.** `appwrite_call_tool` is the read. `appwrite_call_write_tool` creates, updates, and deletes. The model must pass `confirm_write: true` and a reason of at most 256 characters. The reason shows on the Activity tab. The tool is marked destructive so a client that reads annotations can ask first. A client that does not honor annotations will send the call once the model sets the flag. OAuth uses a localhost callback. A remote agent that never completes that redirect is not signed in. A self-hosted Appwrite instance is a different local MCP server and uses an API key.
- **Events spend a webhook.** Each subscription is a webhook named for MCP events. Free allows 2 per project, Start 50, and Pro unlimited. At the cap, subscribe fails. Payloads are ids, not emails or row bodies. Events that happen while the stream is down are not replayed. Webhook delivery lasts one hour unless you ask for a longer window between five minutes and 24 hours. Supabase (`supabase`) and Firebase (`firebase`) pause or shut off on their own free-plan rules. An Appwrite pause does not move the project to either of them.

## Sources

- [Automatic pausing of inactive projects](https://appwrite.io/changelog/entry/2026-02-20-1) — accessed 2026-11-26
- [Appwrite Cloud pricing](https://appwrite.io/pricing.md) — accessed 2026-11-26
- [Free plan](https://appwrite.io/docs/advanced/billing/free) — accessed 2026-11-26
- [Appwrite MCP server](https://appwrite.io/docs/tooling/ai/mcp-servers) — accessed 2026-11-26
