---
id: mcp-extensions-framework
title: MCP extensions framework — IDs, negotiation, official vs experimental
tags: [mcp, extensions, governance, design]
status: active
updated: 2026-08-28
when_to_use: Adding an opt-in MCP capability (Tasks, Apps, auth) or choosing an extension ID instead of forking core
---

## Summary

MCP **extensions** (SEP-2133) are optional capabilities outside core. IDs are `{vendor-prefix}/{name}` (official: `io.modelcontextprotocol/…`). Advertise on `server/discover` `capabilities.extensions` and per-request `_meta["io.modelcontextprotocol/clientCapabilities"].extensions`. Disabled until both sides opt in. Not required for protocol conformance.

## Notes

- Official repos: `ext-*` under the MCP GitHub org (auth, apps, tasks). Experimental incubation: `experimental-ext-*` (must be tied to a WG/IG; Core Maintainers can archive). Third parties use a reversed domain they own (`com.example/…`).
- Official path: Extensions Track SEP → reference implementation in an official SDK → Core Maintainer review → publish to the extension repo. After that, extension maintainers iterate without core review. Prefer capability flags / settings-object versioning; breaking changes get a new ID (`…/my-extension-v2`).
- Negotiation: empty settings object `{}` means no settings. If only one side supports the extension, fall back to core or reject if the extension is mandatory — document which. UI tools still return useful text; an auth-required server may refuse.
- Shipped official examples: Apps (`io.modelcontextprotocol/ui`, `mcp-apps-extension`), Tasks (`io.modelcontextprotocol/tasks`), OAuth Client Credentials, Enterprise-Managed Authorization. Skills-over-MCP is still draft (`mcp-skills-extension`).
- SDKs pick which extensions to implement. Do not treat “listed on the overview page” as “every client has it.”

## Sources

- [MCP Extensions overview](https://modelcontextprotocol.io/extensions/overview) — accessed 2026-08-28
- [SEP-2133 — Extensions](https://modelcontextprotocol.io/seps/2133-extensions) — accessed 2026-08-28
- [Authorization extensions overview](https://modelcontextprotocol.io/extensions/auth/overview) — accessed 2026-08-28
