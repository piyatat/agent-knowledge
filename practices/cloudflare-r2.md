---
id: cloudflare-r2
title: Cloudflare R2 — object storage with no egress fee
kind: service
tags: [cloudflare, r2, storage, s3]
status: active
updated: 2026-11-22
when_to_use: Storing agent artifacts, uploads, or public files in object storage without an egress fee
---

## Summary

**Cloudflare R2** is S3-compatible object storage. Internet egress is free. Standard storage is $0.015 per GB-month after a free 10 GB-month, with 1 million Class A and 10 million Class B operations included. Infrequent Access is cheaper to store and has no free tier. Sign-up is the same Cloudflare account as Workers. Use R2 for blobs, datasets, and public assets. Use Neon (`neon`) or Supabase (`supabase`) when the data is rows, and Cloudflare Agents (`cloudflare-agents`) when the workload is a durable agent rather than a bucket.

## Notes

- **Access.** Create the account at `links.get`. R2 docs are `links.docs`. You must purchase R2 before the dashboard will mint an API token. The S3 endpoint is `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`. Jurisdictional buckets use a different host (`eu`, `fedramp`, or `us` in the hostname) and a client pointed at the default host cannot see them. The secret access key is shown once. Account tokens follow the user or the account; user tokens die if that user is removed. Admin tokens can create and list buckets. Object Read and Object Read & Write tokens are bucket-scoped and work only on the S3 API.
- **Price.** Standard Class A (writes and lists, including `ListObjects` and `ListBuckets`) is $4.50 per million. Class B (gets and heads) is $0.36 per million. Deletes and abort-multipart are free. Infrequent Access is $0.01 per GB-month, Class A $9 per million, Class B $0.90 per million, plus $0.01 per GB retrieved, and a 30-day minimum even if the object is deleted sooner. Cloudflare rounds usage up to the next GB-month and the next million operations. Storage is the average of daily peaks over 30 days. The first 100,000 buckets are included; extras are $0.10 per bucket-month. Super Slurper and Sippy migrations are free to invoke and still generate Class A writes.
- **Limits.** A single PUT stops at 5 GiB. Multipart objects can reach 5 TiB, with parts from 5 MiB and at most 10,000 parts. One write per second to the same key. Object keys up to 1,024 bytes and custom metadata up to 8,192 bytes. The Cloudflare REST API allows 1,200 R2 requests per five minutes per account; object throughput belongs on the S3 API. Public `r2.dev` URLs are for testing and can return 429 under hundreds of requests per second. A custom domain is the production public path.
- **What is billed on failure.** Authentication and authorization failures (401, and 403 for a bad signature, expired request, skewed clock, or `AccessDenied`) are not charged. A `PutObject` that fails with 412 (`PreconditionFailed`) or 400 (`BadDigest`) still counts as Class A.
- **Alternatives.** Supabase Storage when the files sit next to that project’s Postgres (`supabase`). A Fly volume (`fly-io`) when a Machine needs a disk, not an object API.
- **Caveats.** Listing a bucket is a Class A operation, and Infrequent Access ignores the free tier. Details: `cloudflare-r2-ia-and-class-a`.

## Sources

- [Cloudflare R2 overview](https://developers.cloudflare.com/r2/) — accessed 2026-11-22
- [R2 pricing](https://developers.cloudflare.com/r2/pricing/) — accessed 2026-11-22
- [R2 limits](https://developers.cloudflare.com/r2/platform/limits/) — accessed 2026-11-22
- [R2 authentication](https://developers.cloudflare.com/r2/api/tokens/) — accessed 2026-11-22
- [R2 troubleshooting](https://developers.cloudflare.com/r2/platform/troubleshooting/) — accessed 2026-11-22
- [Cloudflare R2](https://www.cloudflare.com/products/r2/) — accessed 2026-11-22
- [Cloudflare sign-up](https://dash.cloudflare.com/sign-up) — accessed 2026-11-22
