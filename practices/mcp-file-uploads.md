---
id: mcp-file-uploads
title: MCP file inputs — SEP-2631 (draft) supersedes SEP-2356
tags: [mcp, ux, elicitation, roadmap]
status: draft
updated: 2026-10-03
when_to_use: Designing an MCP tool that needs a user-selected file — do not invent a base64-in-prose contract; SEP-2631 is still draft
---

## Summary

MCP still has **no shipped file-transfer primitive** in 2026-07-28. **SEP-2356** (declarative file inputs) was closed and pointed at **SEP-2631** (File Objects and Transfer, open draft, assignee `@localden`, last push 2026-10-02). Do not treat either SEP as protocol. Server→client blobs stay Resources / `BlobResourceContents`.

## Notes

- Today servers ask in prose for paths or base64. Models re-emit bytes through the token stream and can corrupt even small payloads (reported on a 3 KB PNG). Until a SEP lands, prefer a host-owned upload step, a user-attached resource, or an out-of-band HTTPS URL the user already authorized — do not treat ad-hoc base64 as a standard.
- SEP-2631 (draft) keeps SEP-2356’s `x-mcp-file` declaration on URI-string schema properties, then adds: `transferModes` (`inline` data: URI vs `upload`), `files/authorizeUpload` / `files/authorizeDownload` (HTTPS descriptors, bytes **out** of JSON-RPC), and `FileValue` outputs (URI + name/MIME/size). File URIs are **not** `resources/read` URIs. Designed to compose with stateless MCP and MRTR (`mcp-stateless-core`, `mcp-mrtr-input-required`).
- Security still open in the draft: sanitize client-supplied filenames; do not execute uploaded bytes; require a digest on upload (inline `data:` has nowhere to put one). Host validation should follow OWASP ASVS V5 upload hygiene.
- Status: File Uploads WG charter still names SEP-2356; the live proposal is SEP-2631. Keep `status: draft` in product docs. Prototype libraries exist; they are not the spec.

## Sources

- [SEP-2631: File Objects and Transfer](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2631) — accessed 2026-10-03
- [SEP-2356: File input support (superseded)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356) — accessed 2026-10-03
- [File Uploads Working Group charter](https://modelcontextprotocol.io/community/working-groups/file-uploads) — accessed 2026-10-03
- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-10-03
- [MCP resources (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) — accessed 2026-10-03
