---
id: llamaparse-credit-tier-and-cache
title: A LlamaParse job bills Agentic, misses the cache, or the region rejects the token
kind: knowledge
tags: [llamaparse, billing, cache, regions]
status: active
updated: 2026-11-20
when_to_use: A LlamaParse job costs the Agentic rate, a reparse is not free, or a token is rejected in the other region
---

## Summary

LlamaParse (`llamaparse`) prices a Parse job by tier, caches only an identical request for 48 hours, and rejects a token outside the account’s region. Leaving the tier on Agentic, changing any parse option, or calling the other region’s host spends credits again or fails the call.

## Notes

- **Tier.** On the v2 API, Fast is 1 credit per page and runs no model, so it fits plain text only. Cost-effective is 3, Agentic is 10, and Agentic Plus is 25. Layout extraction adds 3 credits per page on any tier. Credits cost $1.50 per 1,000 on Pay as you go and $1.25 per 1,000 on Pro. Extract bills its tier plus the parse tier: Agentic extract (15) on top of Agentic parse (10) is 25 credits per page. A file LlamaParse already parsed pays only the extract tier. Text files (`md`, `txt`, `html`) bill one extract page per 600 tokens. On Agentic and Agentic Plus only, `processing_options.cost_optimizer` sends simple pages to cost-effective and complex pages to the tier you selected. The configuring guide says to leave that off when pages are table-heavy or the output must be reproducible.
- **Cache and version.** The pricing page says re-parsing the same file within 48 hours is free. The configuring guide says the cache matches an identical request: any change to parse options misses it, and `disable_cache: true` forces a fresh billed parse. `version: "latest"` follows that tier’s moving pin. On 2026-11-20 the create reference listed fast `2026-11-12`, cost-effective and agentic `2026-11-09`, and agentic plus `2026-11-11`. Pin a date from `GET /api/v2/parse/versions` when a later run must match an earlier one.
- **Balance, concurrency, and storage.** Included monthly credits do not roll over. Credits you buy expire one year after purchase. At a zero balance, a new job returns HTTP 402 and a message that starts with "You've exceeded the maximum number of credits for your plan," unless the organization is set to keep going and invoice the extra usage. Pay as you go runs 5 Parse jobs and 5 Extract jobs at once. Retained files cost 100 credits per GB per day. Ephemeral files, including files in an ephemeral directory, do not count toward the stored-file cap and are not charged for storage. A retained upload at the cap also returns 402. `expand=usage` can report `credits` as null for a short window after the job completes, until billing records it.
- **Region and project.** The account lives in one region, and the client has to use that region’s API host. A token issued in one region is rejected by the other region’s MCP endpoint (`mcp.llamaindex.ai` versus `mcp.eu.llamaindex.ai`). The API key is also bound to one project.

## Sources

- [Pricing](https://developers.llamaindex.ai/llamaparse/general/pricing/) — accessed 2026-11-20
- [Billing and usage](https://developers.llamaindex.ai/llamaparse/general/billing/) — accessed 2026-11-20
- [Configuring Parse](https://developers.llamaindex.ai/llamaparse/parse/guides/configuring-parse/) — accessed 2026-11-20
- [Parse a file](https://developers.llamaindex.ai/reference/resources/parsing/methods/create/) — accessed 2026-11-20
- [Regions](https://developers.llamaindex.ai/llamaparse/general/regions/) — accessed 2026-11-20
