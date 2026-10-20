---
id: mcp-release-cycle
title: MCP release cycle — March/September cadence (SEP-3398)
tags: [mcp, roadmap, governance, versioning]
status: active
updated: 2026-10-20
when_to_use: Planning SDK or server work against the next MCP spec date, or assuming a December 2026 revision still exists
---

## Summary

**SEP-3398** (accepted by Core Maintainers 2026-10-14; PR still open) replaces ad-hoc ship dates with a **fixed six-month cadence**: last Tuesday of **March** and **September**, overlapping **eight-month** planning cycles, and rotating release managers. The revision previously aimed at December 2026 moves to **2027-03-30**. Current published spec stays **2026-07-28** until that date. Not feature lifecycle (`mcp-feature-lifecycle`) and not the five-area roadmap (`mcp-2026-roadmap`).

## Notes

- Cadence: two Current revisions per year. Planning opens **eight months** before a release; core review runs from **six months** out to soft freeze. Working-group leads put SEPs into the shared review queue. A **primary and secondary release manager** own each cycle’s schedule.
- Freeze / SDK milestones (relative to publish): **soft freeze at −2.5 months** (SEP merged, conformance tests in — SDK work starts in earnest); **Tier-1 SDK betas at −1.5 months**; **hard freeze at −1 month**. Last Core Maintainer vote on a SEP for that release is **at least one week before soft freeze**. No votes on freeze day. Emergency security exceptions stay in the SEP’s emergency-approval path.
- March vs September: in-person planning is the **September** event; March is lighter / asynchronous so the April conference does not drive the spec. 2027-03-30 is the last Tuesday of that March.
- Status as of 2026-10-20: vote **Accept 7 of 7** (poll closed 2026-10-14); PR labeled `accepted` but **not merged**. Official roadmap page still dated 2026-08-22 and does not yet list the new dates. Do not implement “the December 2026 spec.” Hold fleet claims until the SEP lands in `modelcontextprotocol.io` and SDKs advertise the version.

## Sources

- [SEP-3398: Release Cycle Updates](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3398) — accessed 2026-10-20
- [SEP-3398 vote](https://voting.modelcontextprotocol.io/p/v98cy36vp5) — accessed 2026-10-20
- [MCP Core Maintainer Meeting — September 30, 2026](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3407) — accessed 2026-10-20
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-20
- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-10-20
