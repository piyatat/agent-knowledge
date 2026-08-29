---
id: mcp-file-uploads
title: MCP file inputs — native pickers (SEP-2356 draft)
tags: [mcp, ux, elicitation, roadmap]
status: draft
updated: 2026-08-29
when_to_use: Designing an MCP tool that needs a user-selected file — do not invent a base64-in-prose contract if you can wait for SEP-2356
---

## Summary

The File Uploads WG (SEP-2356, draft) wants **declarative file input descriptors** on tool and elicitation schemas so hosts can show a native picker and pass bytes on the wire. This is **not** in 2026-07-28. Server-to-client files stay Resources / `BlobResourceContents`.

## Notes

- Today servers ask in prose for paths or base64. That dumps encoding on the user and breaks host UX. Until the SEP lands, prefer a host-owned upload step or a resource the user attached — do not treat ad-hoc base64 as a standard.
- Planned pieces: `FileInputDescriptor`, data-URI (or later stream/chunk/presigned URL) encoding, host substitution after the picker. TypeScript SDK helpers are a success criterion, not a shipping guarantee.
- Out of scope for the WG: transport/session changes; server→client blobs (already resources). MCP Apps may reuse the same descriptor for in-iframe pickers.
- Security: host-side validation is in scope (SEP points at OWASP ASVS V5 upload hygiene). Never execute uploaded content as code in the server process without an explicit sandbox.
- Status: draft target dates on the charter are planning aids. Use `status: draft` in product docs until Core Maintainers accept the SEP.

## Sources

- [File Uploads Working Group charter](https://modelcontextprotocol.io/community/working-groups/file-uploads) — accessed 2026-08-29
- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-08-29
- [MCP resources (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) — accessed 2026-08-29
