---
id: cloudflare-r2-ia-and-class-a
title: An R2 list or Infrequent Access tier blows the free allowance
kind: knowledge
tags: [cloudflare, r2, storage, billing]
status: active
updated: 2026-11-22
when_to_use: An R2 bill spiked after listings or Infrequent Access, or an object token failed on the REST API
---

## Summary

Cloudflare R2 (`cloudflare-r2`) bills `ListObjects` as a Class A operation, and the free tier applies only to Standard storage. Infrequent Access has a 30-day minimum charge and a retrieval fee. An object-scoped token that works with S3 fails against `api.cloudflare.com`.

## Notes

- **Lists are writes, for billing.** Class A includes `ListBuckets`, `ListObjects`, `PutObject`, multipart part uploads, and bucket configuration writes, at $4.50 per million on Standard and $9 per million on Infrequent Access. An agent that pages through a large bucket can spend the 1 million Standard Class A allowance without storing anything new. Class B is heads and gets. `DeleteObject` is free, which does not make an Infrequent Access object free to have stored.
- **Infrequent Access.** No free tier. Retrieval is $0.01 per GB on top of the Class B charge, whenever the object is read or copied. Deleting or moving an object before 30 days still bills 30 days of storage. A pricing-page example of 1,000 one-gigabyte objects kept five days and then deleted is billed as 1,000 GB-months, not five days. Cloudflare rounds 1.1 GB-month up to 2, and 1,000,001 operations up to 2 million.
- **Auth that looks like a bug.** Object Read and Object Read & Write tokens are S3-only. Against the REST API, a token for all buckets returns HTTP 401 code 10002, and a bucket-scoped token returns HTTP 403 code 10000. Admin Read tokens are the REST path, and they are account-wide. The dashboard will not mint any R2 token until R2 is purchased. The secret access key is shown once. A jurisdictional bucket is invisible on the default `r2.cloudflarestorage.com` host.
- **Other ceilings.** One concurrent write to a key per second. A single PUT larger than 5 GiB fails; multipart is required up to 5 TiB, with parts of at least 5 MiB except the last. The REST API allows 1,200 R2 requests per five minutes. A public `r2.dev` hostname is rate limited and is not the production URL. Conditional `PutObject` failures (412 and `BadDigest`) are still Class A. Requests rejected for a bad signature or `AccessDenied` are not.

## Sources

- [R2 pricing](https://developers.cloudflare.com/r2/pricing/) — accessed 2026-11-22
- [R2 limits](https://developers.cloudflare.com/r2/platform/limits/) — accessed 2026-11-22
- [R2 authentication](https://developers.cloudflare.com/r2/api/tokens/) — accessed 2026-11-22
- [R2 troubleshooting](https://developers.cloudflare.com/r2/platform/troubleshooting/) — accessed 2026-11-22
