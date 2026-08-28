---
id: mcp-feature-lifecycle
title: MCP feature lifecycle — Active, Deprecated, Removed
tags: [mcp, deprecation, governance, migration]
status: active
updated: 2026-08-28
when_to_use: Planning SDK support around a deprecated MCP feature, or checking whether something is already on the removal clock
---

## Summary

SEP-2596 gives **each core MCP feature** its own lifecycle, separate from spec-document Draft/Current/Final. States are **Active**, **Deprecated**, and **Removed**. Default floor is **12 months** Deprecated before earliest removal (90 days if expedited for an unmitigated in-the-wild security issue).

## Notes

- Scope: protocol messages, capabilities, transports, schema types, normative behavior. Not SDK APIs, registry policy, or extension repos (`mcp-extensions-framework`).
- Deprecated still ships in the Current spec with a documented migration. New servers/clients should not adopt it. Removed is deleted from `draft` and absent from the next Current revision; it remains in the last Final that included it.
- Window is measured from the **revision that first marks the feature Deprecated**, not from the date the deprecation SEP reached Final. Features may stay Deprecated longer than the floor. Restoration to Active needs a superseding SEP; a later re-deprecation restarts the clock.
- Canonical list: the deprecated registry (`docs/specification/draft/deprecated.mdx`) plus the revision changelog “Deprecated” / “Removed” headings. Do not reconstruct timelines from scattered SEP comments.
- Tier 1 SDKs must mark corresponding APIs deprecated in the next SDK release and SHOULD emit a runtime warning. Dropping the API from the SDK is the SDK’s own support policy — spec removal does not force an immediate SDK delete.
- 2026-07-28 already used this policy for Roots, Sampling, Logging (SEP-2577), HTTP+SSE, and DCR (`mcp-deprecated-roots-sampling`, `mcp-oauth-scopes`).

## Sources

- [Feature Lifecycle and Deprecation Policy](https://modelcontextprotocol.io/community/feature-lifecycle) — accessed 2026-08-28
- [SEP-2596](https://modelcontextprotocol.io/seps/2596-spec-feature-lifecycle-and-deprecation) — accessed 2026-08-28
- [MCP 2026-07-28 changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — accessed 2026-08-28
