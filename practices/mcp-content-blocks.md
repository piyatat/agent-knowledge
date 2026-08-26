---
id: mcp-content-blocks
title: MCP content[] blocks — text, image, audio, resource_link, resource
tags: [mcp, tools, ux, resources]
status: active
updated: 2026-08-26
when_to_use: Returning mixed media from tools/call or choosing resource_link vs embedding bytes in the result
---

## Summary

Unstructured MCP tool results live in **`content[]`**. Mix **text**, **image**, **audio**, **resource_link**, and embedded **resource** blocks. Typed JSON for programs belongs in `structuredContent` (`mcp-output-schema`). Cursor attaches returned images to chat when the model can see them.

## Notes

- `text`: `{ "type": "text", "text": "…" }`. Image/audio: `{ "type": "image"|"audio", "data": "<base64>", "mimeType": "image/png"|"audio/wav" }` (required mime).
- **resource_link**: pointer (`uri`, `name`, optional description/mime). Client may `resources/read` or subscribe later. Links **need not** appear in `resources/list`. Use for large or optional payloads.
- **resource** (embedded): inline `text` or `blob` plus `uri`/`mimeType`. Servers that embed **SHOULD** advertise `resources`. Prefer a link when the host might skip the bytes.
- All five types share resource annotations: `audience` (`user`/`assistant`), `priority` 0..1, `lastModified`. Hints for the host, not ACLs.
- If `outputSchema` is set, also return conforming `structuredContent` and SHOULD duplicate serialized JSON as a text block. `content[]` is what the model reads.
- Keep screenshots reasonably small; observation-budget notes still apply. Do not put secrets in image OCR or embedded blobs.

## Sources

- [MCP tools — content types (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) — accessed 2026-08-26
- [MCP resources — contents and annotations](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) — accessed 2026-08-26
- [Cursor MCP — images as context](https://cursor.com/docs/mcp) — accessed 2026-08-26
