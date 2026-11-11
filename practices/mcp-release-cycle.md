---
id: mcp-release-cycle
title: MCP release cycle — March/September cadence (SEP-3398)
tags: [mcp, roadmap, governance, versioning]
status: active
updated: 2026-11-11
when_to_use: Planning SDK or server work against 2027-03-30, or assuming a December 2026 MCP revision still exists
---

## Summary

**SEP-3398** is **Accepted** (vote **2026-10-14**). The MCP blog (**2026-11-11**, Den Delimarsky and David Soria Parra) restates it as de facto guidance: two dated specs a year, last Tuesday of **March** and **September**, overlapping **eight-month** planning, and a formal **Release Manager** role. Next Current revision is **`2027-03-30`**. Published spec stays **2026-07-28** until then. Wire format and version negotiation do **not** change because of the announcement. Not feature lifecycle (`mcp-feature-lifecycle`) and not the five-area roadmap (`mcp-2026-roadmap`).

## Notes

- Cadence: a proposal that misses freeze **slides to the next cycle** rather than slipping the date. Planning opens **eight months** before publish (the **2027-03-30** cycle already started planning in August 2026). Core review runs from **six months** out to soft freeze. Working Groups or Core Maintainers sponsor SEPs into the review queue.
- Freeze / SDK (relative to publish): **soft freeze −2.5 months** (SEPs Final and merged; polish/clarifications only until hard freeze); **Tier-1 SDK betas −1.5 months**; **hard freeze −1 month** (security or release-blocking interoperability only, full Core Maintainer vote). If a Tier-1 SDK is late on release day, document the gap — **do not** move the spec date.
- Release Managers keep authors, WGs, and SDK maintainers on the same calendar. For **2027-03-30**, **Luca Chang** joins Den Delimarsky and David Soria Parra (Chang co-authored Tasks and co-leads Tasks/Events WG). Core Maintainers still decide which proposals enter the release.
- March vs September: in-person planning is the **September** event; March is lighter. Do not implement “the December 2026 spec.” Hold fleet claims until SDKs advertise newer than **2026-07-28**. Next-cycle planning for **2027-09** still starts late January 2027.

## Sources

- [A More Predictable Release Cycle for MCP](https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/) — accessed 2026-11-11
- [SEP-3398: Release Cycle Updates](https://modelcontextprotocol.io/seps/3398-release-cycle-updates) — accessed 2026-10-27
- [SEP-3398 pull request](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3398) — accessed 2026-10-27
- [SEP-3398 vote](https://voting.modelcontextprotocol.io/p/v98cy36vp5) — accessed 2026-10-20
- [MCP Core Maintainer Meeting — September 30, 2026](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3407) — accessed 2026-10-20
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/releases/2) — accessed 2026-10-27
- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-10-20
