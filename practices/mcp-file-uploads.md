---
id: mcp-file-uploads
title: MCP file inputs — Files WG replacing SEP-2631 (draft)
tags: [mcp, ux, elicitation, roadmap]
status: draft
updated: 2026-10-07
when_to_use: Designing an MCP tool that needs a user-selected file — do not invent a base64-in-prose contract; SEP-2631 is being superseded
---

## Summary

MCP still has **no shipped file-transfer primitive** in 2026-07-28. **SEP-2356** was closed for **SEP-2631**. The Files Working Group meeting on **2026-10-02** agreed to **close SEP-2631** as prior art and write a **replacement SEP** (metadata-first, MRTR, HTTP PUT v0). Do not treat 2356, 2631, or the unwritten replacement as protocol. Server→client blobs stay Resources / `BlobResourceContents`.

## Notes

- Today servers ask in prose for paths or base64. Models re-emit bytes through the token stream and can corrupt even small payloads (reported on a 3 KB PNG). Until a SEP lands, prefer a host-owned upload step, a user-attached resource, or an out-of-band HTTPS URL the user already authorized — do not treat ad-hoc base64 as a standard.
- Why 2631 is being replaced: it moved **bytes before metadata**, wasting bandwidth on permission/quota rejects and forcing a regional upload URL before the server knew the file. Replacement order: metadata → upload target → bytes → finalize. v0 is a **single HTTP PUT** (~250 MB); resumability later. Prefer Streamable HTTP first; stdio stays in view. Ship as an **extension**, not core, until validated.
- Intended v0 shape (WG, not spec): one model-visible tool call; harness does the transfer; small files inline; large files out-of-band; bytes and credentials never enter the model context; file pointers marked so a gateway can scan them. Auth must cover both same-bearer-as-MCP and pre-signed URL / harness-attached tokens. Build on **MRTR** (`mcp-mrtr-input-required`) rather than `files/authorizeUpload` from 2631.
- Keep `status: draft`. Prototype libraries and SEP-2631 text are prior art, not the wire.

## Sources

- [Files Working Group Meeting — October 2, 2026](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3412) — accessed 2026-10-07
- [SEP-2631: File Objects and Transfer](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2631) — accessed 2026-10-07
- [SEP-2356: File input support (superseded)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356) — accessed 2026-10-03
- [File Uploads Working Group charter](https://modelcontextprotocol.io/community/working-groups/file-uploads) — accessed 2026-10-03
- [MCP development roadmap](https://modelcontextprotocol.io/development/roadmap) — accessed 2026-10-03
- [MCP resources (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) — accessed 2026-10-03
