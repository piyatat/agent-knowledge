---
id: mcp-file-uploads
title: MCP files extension — io.modelcontextprotocol/files (experimental)
tags: [mcp, ux, elicitation, roadmap]
status: draft
updated: 2026-11-12
when_to_use: Designing an MCP tool that needs a user file or returns a large blob — do not invent a base64-in-prose contract; the files extension is still experimental
---

## Summary

MCP core **2026-07-28** still has no file-transfer primitive. The File Uploads WG’s experimental extension `io.modelcontextprotocol/files` (blog 2026-11-10; repo `experimental-ext-file-uploads`) moves bytes **out of band** so they never enter model context or JSON-RPC. **Not a SEP**, no reference implementation yet, breaking changes expected. Keep `status: draft`. Server→client blobs that are already resources stay `BlobResourceContents`. Closed prior art: SEP-2356, SEP-2631.

## Notes

- Advertise on `server/discover`: `upload` (out-of-band) and optional `maxInlineBytes`. Client declares the extension in `io.modelcontextprotocol/clientCapabilities` on every request that may need it (including `tools/list`), with `upload` and/or `download`. A client that does not implement the extension ignores `x-mcp-file` and sees an ordinary object. If the client did not declare support on `tools/list`, omit the tool or offer a URL-based alternative.
- Upload: mark the argument with `x-mcp-file` (`accept`, `maxSize`) — same pattern as `x-mcp-header`. `FileInput` has `id`, `name`, `mimeType`, `size`, optional base64 `data`, optional SHA-256 `digest`. Small files may inline while the request’s inline total stays ≤ `maxInlineBytes`. Otherwise the client sends **metadata only**. The host gets user approval (or agent policy when no user is present) **before** knowing the upload URL.
- If quota/permissions fail, the server returns a normal tool error (no 40 MB wasted). Else `resultType: "upload_required"` with `uploads[]` (`fileId`, `url` or `path`, `headers`, `credentials`, `expiresAt`) and opaque `requestState` (MRTR — `mcp-mrtr-input-required`). Client `PUT`s (or `POST` multipart) to the target, then retries `tools/call` with the **same arguments** plus `requestState`. The model is not invoked again. Tools that must not double-run mark `requestState` used before executing.
- Download: completed result lists targets under `_meta["io.modelcontextprotocol/files"].downloads` (open design question — `_meta` vs `content`). Client `GET`s if policy allows, then checks `size` and optional `digest`. A matching digest is **integrity, not safety** — treat the file as untrusted. `content` still tells the model what was produced without exposing the URL.
- `credentials`: `omit` (pre-signed URL; do not attach the MCP token) vs `include` (MCP credential only on a `path` under the MCP address or the server’s origin). Refuse redirects and reject targets that supply an `Authorization` header. `omit` still lets a malicious server point at an origin it controls — draft recommends an allowlist of permitted origins (whether mandatory is open). Finalize-as-stable is hoped for before end of 2026; until then do not treat this as wire.

## Sources

- [Exploring File Uploads and Downloads in MCP](https://blog.modelcontextprotocol.io/posts/exploring-file-uploads-and-downloads-in-mcp/) — accessed 2026-11-12
- [experimental-ext-file-uploads](https://github.com/modelcontextprotocol/experimental-ext-file-uploads) — accessed 2026-11-12
- [Files Working Group Meeting — October 2, 2026](https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3412) — accessed 2026-10-07
- [SEP-2631: File Objects and Transfer](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2631) — accessed 2026-10-07
- [SEP-2356: File input support (superseded)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356) — accessed 2026-10-03
- [File Uploads Working Group charter](https://modelcontextprotocol.io/community/working-groups/file-uploads) — accessed 2026-10-03
