---
id: appwrite
title: Appwrite — hosted auth, data, and files, with a remote MCP server
kind: service
tags: [appwrite, backend, auth, mcp]
status: active
updated: 2026-11-26
when_to_use: Hosting an app’s users, database, and files on Appwrite, or letting an agent change that project
---

## Summary

**Appwrite Cloud** is a hosted backend for users, databases, storage, functions, and sites. The Free plan is $0, allows two projects, and pauses a project after a week without development activity in the Console. The hosted MCP server is `https://mcp.appwrite.io/` and signs in with OAuth. Reads and writes are different tools. A write runs when the model sends `confirm_write: true`, so the client’s own approval is what stops it. Use Supabase (`supabase`) when the database should be Postgres. Use Firebase (`firebase`) when the app should sit on Firestore and Firebase Auth. A self-hosted Appwrite server uses a separate local MCP process, not this URL.

## Notes

- **Access.** Sign up at `links.get`. The homepage links to `/sign-up`, and `https://cloud.appwrite.io/register` redirects there. A new account gets one Free organization. The free billing page says each account can have only that one Free organization and two projects. Resources on Free are shared across those projects. Paid plans give dedicated resources per project.
- **Plans.** Prices below are from `https://appwrite.io/pricing.md` on 2026-11-26. Free is 1 database, 1 bucket, and 2 functions per project, 1 member, 5 GB bandwidth, 2 GB storage, 750,000 executions, 75,000 monthly active users, 2 webhooks, and 1 hour of logs. It has no backups, no phone OTP, and no way to buy more. Start is from $10 a month and is listed only for a set of countries on that page. It does not pause projects, includes 3 members, 10 databases, buckets, and functions, 50 webhooks, daily backups, and then usage charges. Pro is from $25 a month, includes $10 of database compute credit, unlimited members and webhooks, and does not pause projects. An extra project is $5 on Start and $15 on Pro. Extra bandwidth is $15 per 100 GB. Extra reads are $0.060 per 100,000 and extra writes are $0.10 per 100,000, on the paid plans. Free database quotas are 500,000 reads and 250,000 writes a month.
- **Free pause and caps.** The pricing page says a Free project pauses after one week of inactivity. The 2026-02-20 changelog says that is seven consecutive days without development activity, that data is kept, that the project is not accessible, and that backups, cron, and scheduled functions stop. Reactivating it in the Console makes it active immediately. The activity that changelog names is development activity in the Console. The free billing page says a Free org that hits its bandwidth cap is denied API access, new user accounts stop, function executions stop, realtime stops, and file uploads stop until storage is back under the cap. That storage block continues into the next period. The same page’s downgrade table still lists 3 buckets and 5 functions. Plan against the pricing page’s 1 bucket and 2 functions.
- **MCP.** Cloud MCP is OAuth. You do not create an API key for it. The redirect is a localhost callback, so a client with no local browser cannot finish until someone completes that redirect. The model sees a short catalog: context, tool search, a read call, a write call, and docs search. `appwrite_call_write_tool` requires `confirm_write: true` and a `reason` of up to 256 characters, which is stored on the project’s Activity tab. The tool is annotated destructive. The flag is an argument the model sends, not a second prompt on Appwrite’s side. An event subscription creates a webhook in the project. Free allows 2 webhooks, Start 50, and Pro unlimited. Event payloads carry ids and metadata, not row contents or email addresses. Events during a reconnect are not replayed.
- **Caveats.** A paused Free project rejects users even while the data is still there. A client that ignores tool annotations can still perform the write. Details: `appwrite-free-pause-and-write`.

## Sources

- [Appwrite Cloud pricing](https://appwrite.io/pricing.md) — accessed 2026-11-26
- [Appwrite pricing](https://appwrite.io/pricing) — accessed 2026-11-26
- [Free plan](https://appwrite.io/docs/advanced/billing/free) — accessed 2026-11-26
- [Automatic pausing of inactive projects](https://appwrite.io/changelog/entry/2026-02-20-1) — accessed 2026-11-26
- [Appwrite MCP server](https://appwrite.io/docs/tooling/ai/mcp-servers) — accessed 2026-11-26
- [Appwrite](https://appwrite.io/) — accessed 2026-11-26
- [Sign up for Appwrite](https://appwrite.io/sign-up) — accessed 2026-11-26
