---
id: mux-free-cap-and-execute
title: Mux refused another asset, or execute changed the wrong environment
kind: knowledge
tags: [mux, video, billing, mcp]
status: active
updated: 2026-11-26
when_to_use: A Mux upload failed on a free account, a list showed 10 assets, or an agent edited video it was only asked to inspect
---

## Summary

Mux (`mux`) Free, as documented in the free-plan changelog and post, stores 10 on-demand assets. The first page of a list is also 10 records, which is the page size. Hosted MCP `execute` can change whatever the token allows, in the one environment chosen at sign-in. A read-only token is the limit. The tool is not.

## Notes

- **Free versus a page of 10.** List endpoints default to `limit=10` and cap a page at 100. Ten rows are not proof the account is full, and they are not proof it is empty. The May 2025 changelog and the free-plan post updated 2025-11-21 cap Free at 10 stored on-demand assets, any duration, with a Mux badge on Mux Player. Live streaming, unlimited assets, and the $20 monthly credit are described there as starting once a card is added. The pricing page on 2026-11-26 does not repeat the asset count. It does say Free cannot export usage or set spending alerts, and that the 100,000 delivery minutes and 100,000 Robots units apply on every plan, including Free. Billing is per organization, so environments in that organization share the plan. An access token still sees only its own environment. The older account-level test mode watermarked video and deleted test assets after 24 hours. The per-asset test flag is separate, and the same post says those assets stay.
- **What still costs money on a cheap plan.** Basic input is free. Basic storage bills at least one month even when the asset is deleted immediately. Plus storage is prorated and has no one-month minimum. Live cannot use basic quality. Delivery charges for seconds sent to the player, including buffer the viewer never watches. The pricing page makes the first 100,000 delivered minutes free at any quality and resolution. The free-plan post’s older wording said up to 1080p. Robots free units are $1 at 1,000 units per $0.01. They are not the $20 credit. That credit is pay as you go, applies after the free Robots units, and does not exist on Free. Cancelled and errored Robots jobs are not charged. On-demand auto captions are included with Video and are not Robots.
- **execute and 429.** The hosted server runs SDK code in a sandbox that can reach Mux API hosts only. It does not block deletes. OAuth binds the session to one environment. A development token cannot fix production, and a production write token can delete production assets. Mark an agent token low priority. Its Video POST bucket is 4, refilling at 1 request per second. A high-priority token’s POST bucket is 20 at the same rate. Other methods are larger. Robots has its own buckets of the same sizes, so polling jobs does not spend the Video bucket. HTTP 429 means Mux did not process the request. Permissions cannot be added to a token later. A token without `robots:write` cannot start a job, and the secret cannot be displayed again after creation.

## Sources

- [Mux pricing](https://www.mux.com/docs/pricing/overview) — accessed 2026-11-26
- [Estimating what Mux costs](https://www.mux.com/pricing) — accessed 2026-11-26
- [Mux Video free plan changelog](https://www.mux.com/docs/changelog/video-free-plan) — accessed 2026-11-26
- [Mux free plan](https://www.mux.com/blog/free-plan) — accessed 2026-11-26
- [Using the Mux MCP server](https://www.mux.com/docs/integrations/mcp-server) — accessed 2026-11-26
- [Make API requests](https://www.mux.com/docs/core/make-api-requests) — accessed 2026-11-26
- [Mux fundamentals](https://www.mux.com/docs/core/mux-fundamentals) — accessed 2026-11-26
