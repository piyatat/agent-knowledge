---
id: cloudinary-credit-window-and-admin-limit
title: Cloudinary delivery stopped, or the Admin API returned 420
kind: knowledge
tags: [cloudinary, billing, images, mcp]
status: active
updated: 2026-11-26
when_to_use: A Cloudinary transform URL failed after heavy use, an Admin API call returned 420, or a generated image never appeared
---

## Summary

Cloudinary (`cloudinary`) does not hard-stop the base plan at the credit number. Free, Plus, Advanced, and Advanced Extra count transformations and bandwidth on a rolling 30 days, then warn and can disable the account if the overage continues. Add-ons stop when their own quota is gone. The Admin API’s hourly cap is separate and returns HTTP 420. Image generation through MCP does nothing useful until that add-on is turned on.

## Notes

- **Credits are not a calendar month on the cheaper plans.** Storage is the current total, including derived files and backups, so deleting assets drops it immediately. Transformations and bandwidth on Free, Plus, Advanced, and Advanced Extra stay in a rolling 30-day window and do not reset on the first of the month. Pro PAYG and Enterprise use the billing month. Pro PAYG then charges; the pricing snapshot says $0.45 per extra credit. The billing guide says the other plans email as you approach the allocation, keep asking you to upgrade, and can disable the account if nothing changes. Disable is not the first response. A disabled or cancelled account that stays that way for more than 30 days can lose its product environments and assets. Add-on quotas are a hard stop and do not spend base credits. A paid add-on tier requires a paid base plan, so a Free cloud cannot buy its way out of a free add-on cap.
- **420 is the Admin API, not the CDN.** Free is 500 Admin API requests an hour. Plus and Advanced are 2,000. Advanced Extra and Pro PAYG are 5,000. HTTP 420 means rate limited. Asking for backed-up versions (`versions=true`) costs one request plus one per version. The Upload API is not on this hourly cap. A list or search from the asset MCP can still burn the Admin cap. Response headers report the remaining hourly count.
- **The wrong server or a missing add-on looks like a broken tool.** OAuth is bound to one product environment. A development cloud cannot fix production. Analysis rejects API-key auth. The MediaFlows server in the Claude and Cursor plugin expects header credentials, not that OAuth login. `/sse` is deprecated except on analysis; a client still pointed at an old asset `/sse` URL can fail after removal. Generating an image or running moderation requires the matching add-on to be registered first. Free upload limits in the pricing snapshot are 10 MB for an image and 100 MB for a video.

## Sources

- [Cloudinary billing and plans](https://cloudinary.com/documentation/billing_and_plans) — accessed 2026-11-26
- [Why a Cloudinary account was disabled](https://cloudinary.com/documentation/ts_why_is_my_account_disabled_and_how_can_i_recover_my_disabled_account) — accessed 2026-11-26
- [Cloudinary pricing snapshot](https://cloudinary.com/pricing.md) — accessed 2026-11-26
- [Cloudinary Admin API](https://cloudinary.com/documentation/admin_api) — accessed 2026-11-26
- [Cloudinary AI agent tools and MCP servers](https://cloudinary.com/documentation/cloudinary_llm_mcp) — accessed 2026-11-26
