---
id: mcp-output-schema
title: MCP outputSchema and structuredContent
tags: [mcp, tools, schema, structured-output]
status: active
updated: 2026-08-24
when_to_use: Returning typed MCP tool results that a host or downstream code will parse, not only prose in content[]
---

## Summary

On 2026-07-28, a tool may declare `outputSchema` (JSON Schema, default 2020-12). Matching results go in `structuredContent` as any JSON value. That field is **server-produced result data**, not LLM structured-output / constrained decoding.

## Notes

- If `outputSchema` is present, servers **MUST** return conforming `structuredContent`. Clients **SHOULD** validate it. Invalid structured results are a server bug, not a cue to invent fields.
- Keep unstructured `content[]` for the model (text, image, audio, resource links, embedded resources). For compatibility, tools that return structured content **SHOULD** also put the serialized JSON in a `text` content block.
- `inputSchema` remains required and **MUST** be a JSON Schema object (not `null`). No-arg tools: prefer `{ "type": "object", "additionalProperties": false }`. `$schema` may pin 2020-12 or draft-07.
- SEP-2106 loosened both schemas to any JSON Schema 2020-12 keyword (`oneOf`, `$ref`, …). `structuredContent` may be object, array, string, number, boolean, or null — not only objects.
- Do not treat `isError: true` as a substitute for schema: still return a result the client can parse, or a JSON-RPC error for protocol failures.
- Hosts that pipe tool results into code should prefer `structuredContent` over regexing the text block.

## Sources

- [MCP tools — output schema (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) — accessed 2026-08-24
- [2026-07-28 changelog (SEP-2106)](https://modelcontextprotocol.io/specification/2026-07-28/changelog.md) — accessed 2026-08-24
- [schema.ts Tool.outputSchema](https://github.com/modelcontextprotocol/specification/blob/main/schema/2026-07-28/schema.ts) — accessed 2026-08-24
