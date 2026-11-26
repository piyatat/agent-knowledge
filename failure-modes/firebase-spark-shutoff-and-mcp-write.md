---
id: firebase-spark-shutoff-and-mcp-write
title: Firebase Spark shut a product off, or the agent deployed and deleted data
kind: knowledge
tags: [firebase, firestore, billing, mcp]
status: active
updated: 2026-11-26
when_to_use: A Firebase product stopped on Spark, Storage returned 402, or an agent deleted a Firestore database
---

## Summary

Firebase (`firebase`) Spark turns a product off for the rest of the calendar month once that product’s no-cost quota is gone. Cloud Storage is stricter: on Spark it is unavailable, and calls return HTTP 402 or 403. The local MCP server uses the CLI user’s power. Core tools, including deploy and Firestore delete, stay available even when other feature groups are hidden.

## Notes

- **A daily quota is not a bug in the client.** Firestore allows 50,000 reads, 20,000 writes, and 20,000 deletes a day, plus 1 GiB stored and 10 GiB of egress a month, and exactly one free database per project. Those daily counters reset around midnight Pacific. A collection list or a query reads documents and spends the read quota. A document over 1 MiB is rejected. Creating indexes past 200, or using TTL, backups, or a second database, needs billing. When the monthly no-cost quota for a product is exceeded, that product stays off until the next cycle or a Blaze upgrade. Other products in the project keep working. Cloud Functions are not on Spark at all. On Blaze, a budget email does not stop Firestore.
- **Storage 402 is the plan, not a full bucket.** From 2026-02-03, Spark projects cannot read or write Cloud Storage, including the default bucket. The bytes remain and become reachable again on Blaze. The pricing-plans page still mentions Storage quotas on Spark. The Storage FAQ is the one that matches the 402 and 403 errors. After the upgrade, the legacy default bucket’s no-cost level is 5 GB stored, 1 GB downloaded a day, 20,000 uploads, and 50,000 downloads.
- **The MCP login is the user.** There is no separate read-only agent credential in the setup guide. `firebase_deploy` publishes `firebase.json`. `firestore_delete_database` and `firestore_delete_document` remove data. `auth_update_user` can disable an account. `messaging_send_message` sends a push. `--only auth,firestore` hides other groups and leaves those core tools in place. Email-link sign-in on Spark stops at 5 emails a day. Password-reset mail stops at 150. New accounts stop at 100 an hour per IP. Phone SMS codes require Blaze. `developerknowledge_answer_query` returns 429 when its own quota is spent; that 429 is not the Firestore quota.

## Sources

- [Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans) — accessed 2026-11-26
- [Firestore usage and limits](https://firebase.google.com/docs/firestore/quotas) — accessed 2026-11-26
- [Firebase Authentication limits](https://firebase.google.com/docs/auth/limits) — accessed 2026-11-26
- [Cloud Storage billing after September 2024](https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024) — accessed 2026-11-26
- [Firebase MCP server](https://firebase.google.com/docs/ai-assistance/mcp-server) — accessed 2026-11-26
