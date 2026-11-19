---
id: qdrant-cloud-idle-keys
title: A Qdrant Cloud free cluster is deleted after idle weeks, or a database key returns 403
kind: knowledge
tags: [qdrant, billing, auth, retention]
status: active
updated: 2026-11-19
when_to_use: A Qdrant Cloud cluster vanished after a quiet week, or the first request with a new database key is 403
---

## Summary

Qdrant Cloud (`qdrant-cloud`) deletes an unused free cluster, and its database API keys expire and survive the user who created them. A 403 on a fresh key is often the key not being active yet, not a wrong cluster URL.

## Notes

- **Idle free clusters go away.** A free cluster suspends after one week without use and is deleted after four weeks of inactivity. Upgrade it to Standard before that if the collection has to stay. Standard and Premium are dedicated and are not on that idle timer. Exceeding the free 1 GB RAM or 4 GB disk is an upgrade to Standard, not a metered overage. The pricing page bills the resources you provision, hourly.
- **The default key lasts 90 days.** The create dialog’s expiry is in days and defaults to 90. An empty expiry does not expire. The secret is shown once. After expiry, requests return 403. A brand-new key can also return 403 for a few seconds. Retry before rotating it. Create the replacement, deploy it, then revoke the old one. One key per app so a revoke does not stop every caller.
- **Removing a teammate does not revoke keys.** A database API key and a Cloud Management Key keep the permissions they were given after that user is removed or deleted. Revoke both kinds of key, and replace them in the apps, before or when you remove the user.
- **The wrong credential looks like a bad password.** A database key uses `api-key` or `Authorization: Bearer` and only talks to that cluster. A Cloud Management Key uses `Authorization: apikey` and only talks to the Cloud API, CLI, and Terraform. Console SSO, on Premium, does not authenticate either API. Granular database keys need v1.11.0 or later. Turning them on restarts the cluster. Clusters created before 2025-01-27 can still use older admin keys. After granular keys are enabled, those admin keys keep working and new admin keys cannot be created.

## Sources

- [Qdrant Cloud getting started](https://qdrant.tech/documentation/cloud-getting-started/) — accessed 2026-11-19
- [Database authentication](https://qdrant.tech/documentation/cloud/authentication/) — accessed 2026-11-19
- [Qdrant Cloud pricing](https://qdrant.tech/pricing/) — accessed 2026-11-19
