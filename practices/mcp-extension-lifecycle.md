---
id: mcp-extension-lifecycle
title: MCP extension lifecycle — Experimental, Beta, Stable (SEP-3392)
tags: [mcp, extensions, governance, deprecation]
status: draft
updated: 2026-10-18
when_to_use: Choosing whether an MCP extension is experimental, beta, or stable, or whether a breaking change needs a new ID
---

## Summary

**SEP-3392** (open draft, Extensions Track, sponsored by @pja-ant) adds a **maturity lifecycle** for MCP extensions: **Experimental → Beta → Stable (as an extension) or promotion into core**. Stage is meant to live on **capabilities / spec subfolders**, not only the repo name. It updates SEP-2133 (`mcp-extensions-framework`) and answers SEP-2596’s “feature maturity tiers” question (`mcp-feature-lifecycle`). Not accepted — do not treat repo prefixes as a frozen contract.

## Notes

- Today SEP-2133 is binary: `experimental-ext-*` incubation vs official `ext-*`, and “every breaking change needs a new identifier.” SEP-3392 replaces that last rule with **versioned capabilities** so Beta can still break without minting `…-v2` IDs for every tweak.
- Proposed stages (Core Maintainer discussion 2026-09-30 + PR): start **Experimental**; **Beta** after a Core Maintainer vote (adoption feedback; breaking changes allowed but expected to be rare; capability carries a version tag so clients can opt in); **Stable** after a second vote — then the extension follows the **core release schedule** and compatibility guarantees. Promotion to core is a **Standards Track** SEP with a defined migration: clients keep advertising the old extension id while they support earlier revisions; requests that declare the core revision or later need no extension negotiation.
- Experimental and Beta iterate with **Extension Maintainer** approval only. Entering Beta and entering Stable each need an **Extensions Track** SEP. Conformance (SEP-2484) would also apply to the SEPs that move an extension to Stable.
- Reviewer proposal for existing repos (Core Maintainers decide): `ext-apps` and `ext-auth` **Stable**; `ext-skills` and `ext-tasks` **Beta**; `ext-server-card` **Beta** once SEP-2127 is accepted (`mcp-apps-extension`, `mcp-oauth-scopes`, `mcp-skills-extension`, `mcp-tasks-extension`, `mcp-server-cards`).
- Open design: mixed-stability inside one repo (Tasks wants several capabilities). Maintainers asked for **per-capability** opt-in so a client can take the stable subset. Vote was queued after the 2026-09-30 meeting; as of 2026-10-12 the PR is still `draft` (maintainer-activity bot ping). Hold fleet claims until it is accepted.

## Sources

- [SEP-3392: Extension Lifecycle](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3392) — accessed 2026-10-18
- [MCP Core Maintainer Meeting — September 30, 2026](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3407) — accessed 2026-10-18
- [SEP-2133 — Extensions](https://modelcontextprotocol.io/seps/2133-extensions) — accessed 2026-10-18
- [MCP Extensions overview](https://modelcontextprotocol.io/extensions/overview) — accessed 2026-10-18
- [MCP Spec TPM](https://plan.modelcontextprotocol.io/seps) — accessed 2026-10-18
