---
id: mcp-resource-templates
title: MCP resource templates (RFC 6570) and resources/read
tags: [mcp, resources, ux, design]
status: active
updated: 2026-08-26
when_to_use: Exposing a large or parameterized MCP dataset that cannot be fully enumerated in resources/list
---

## Summary

Fixed resources are `resources/list` + `resources/read`. Families too big to enumerate use **`resources/templates/list`** with RFC 6570 `uriTemplate`s; the client expands variables (optionally via `completion/complete`) and reads the **concrete** URI. Subscribe with `subscriptions/listen` (`resourceSubscriptions`), not the removed `resources/subscribe`.

## Notes

- Advertise `resources` (optional `listChanged`, `subscribe`). `resources/list` MAY be empty and MAY vary by **request credentials**, not by connection. Templates carry `uriTemplate`, `name`, optional `title`/`description`/`mimeType`/`icons`.
- Expand the template, then `resources/read`. Custom schemes (`ticket://…`) are identifiers the MCP server resolves — clients do not HTTP-fetch them. `https://` SHOULD mean the host can fetch the URL itself.
- Contents: `text` (UTF-8) or `blob` (base64). One read MAY return multiple contents (e.g. a directory). Unknown URI → JSON-RPC **−32602** (clients SHOULD still accept legacy −32002). Never empty `contents` for a miss.
- Updates: `notifications/resources/list_changed` if advertised; per-URI `notifications/resources/updated` on the listen stream (`_meta` `subscriptionId`). Reads support `ttlMs` / `cacheScope` like other list/read RPCs.
- Security: validate URIs, check authz, sanitize `file://` paths (no traversal). Annotations (`audience`, `priority`, `lastModified`) are host hints, not ACLs.
- Completions are host UX for template variables, not a model tool. See `mcp-completions`.

## Sources

- [MCP resources (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) — accessed 2026-08-26
- [RFC 6570 URI Template](https://datatracker.ietf.org/doc/html/rfc6570) — accessed 2026-08-26
- [MCP completion (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion) — accessed 2026-08-26
