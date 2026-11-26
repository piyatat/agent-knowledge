---
id: firebase
title: Firebase — Auth, Firestore, and a local MCP server
kind: service
tags: [firebase, firestore, auth, mcp]
status: active
updated: 2026-11-26
when_to_use: Hosting an app’s Auth and Firestore on Google, or letting an agent change that Firebase project
---

## Summary

**Firebase** is Google’s app backend: Authentication, Cloud Firestore, Hosting, Cloud Functions, Cloud Messaging, Remote Config, and Cloud Storage. Spark is the no-cost plan and needs no card. Blaze is pay as you go and keeps the Spark quotas before charging. The MCP server is local. It uses the Firebase CLI user’s credentials, or Application Default Credentials, and can deploy, edit Firestore, and change Auth users. There is no hosted Firebase MCP URL. Use Firebase when the app should sit on Firestore and Firebase Auth. Use Supabase (`supabase`) when the database should be Postgres. Use Appwrite (`appwrite`) for a hosted users, database, and files backend that also has a self-hosted server. Use Clerk (`clerk`) or Auth0 (`auth0`) when sign-in is a separate vendor.

## Notes

- **Access.** The homepage links to `links.get`. On 2026-11-26 that URL redirected to Google’s sign-in page with the console as the continue target and no one-time token in the query. The MCP server runs on the machine that has the CLI login. It is not a remote endpoint. Some Firestore tools proxy to a Google backend, but the credential is still that local login. `--only` limits feature groups such as `auth,firestore,storage`. Core tools stay on, including deploy, project create, and security rules. A missed feature group hides those tools; it does not make the login read-only.
- **Plans.** Spark has no payment method. Exceeding one product’s no-cost quota shuts that product off for the rest of the calendar month for every app in the project. The next month, or a move to Blaze, turns it back on. Firestore’s free quota, which resets around midnight Pacific, is 1 GiB stored, 50,000 document reads a day, 20,000 writes, 20,000 deletes, and 10 GiB of egress a month. A project gets exactly one free Firestore database. A document is at most 1 MiB. Without billing, composite indexes stop at 200. TTL deletes, point-in-time recovery, backups, restore, and clone require billing. Cloud Functions and other paid Google Cloud products are not on Spark. The pricing page says eligible accounts get $300 in free credit. A Cloud budget alerts; it does not stop Firestore. Details: `firebase-spark-shutoff-and-mcp-write`.
- **Auth limits and Storage.** New account creation is 100 an hour per IP. On Spark, email-link sign-in mail is 5 a day, password-reset mail is 150 a day, and address-verification mail is 1,000 a day. Phone verification SMS is Blaze only (3,000 a day on Firebase Authentication). Identity Platform on Spark is a different meter: 3,000 Tier 1 daily active users and 2 Tier 2. The Storage FAQ says that from 2026-02-03 a Spark project cannot use Cloud Storage: calls return HTTP 402 or 403, and existing bytes stay but are unreadable until Blaze. On Blaze, a legacy default bucket still has a no-cost level of 5 GB stored, 1 GB downloaded a day, 20,000 uploads, and 50,000 downloads, then App Engine rates. The older pricing-plans page still lists Storage as a Spark quota. Plan against the Storage FAQ.
- **What the agent can change.** Tools include `firestore_delete_document` and `firestore_delete_database`, `realtimedatabase_set_data`, `auth_update_user` (disable a user or set custom claims), `remoteconfig_update_template`, `messaging_send_message`, and `firebase_deploy`. `developerknowledge_answer_query` has its own quota and returns 429 when that quota is gone; search is the fallback. The docs page was last updated 2026-11-18.

## Sources

- [Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans) — accessed 2026-11-26
- [Firebase pricing](https://firebase.google.com/pricing) — accessed 2026-11-26
- [Firestore usage and limits](https://firebase.google.com/docs/firestore/quotas) — accessed 2026-11-26
- [Firebase Authentication limits](https://firebase.google.com/docs/auth/limits) — accessed 2026-11-26
- [Cloud Storage billing after September 2024](https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024) — accessed 2026-11-26
- [Firebase MCP server](https://firebase.google.com/docs/ai-assistance/mcp-server) — accessed 2026-11-26
- [Firebase console](https://console.firebase.google.com/) — accessed 2026-11-26
- [Firebase](https://firebase.google.com/) — accessed 2026-11-26
