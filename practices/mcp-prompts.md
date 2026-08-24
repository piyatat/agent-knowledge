---
id: mcp-prompts
title: MCP prompts — user-controlled templates
tags: [mcp, prompts, ux, design]
status: active
updated: 2026-08-24
when_to_use: Exposing slash-command-shaped MCP workflows the user picks, instead of a model-invoked tool
---

## Summary

MCP **prompts** are server-authored message templates the **user** (via the host UI) selects. That is who decides *when* they run, not who writes the text. Contrast tools (model-controlled) and resources (application-controlled URIs). Typical host shape: `/code_review`.

## Notes

- Advertise `prompts` in `DiscoverResult`. `listChanged: true` means the server will notify listeners. Honor `prompts/list` and `prompts/get`. The list **MUST NOT** vary per connection; it **MAY** vary by the request’s authorization.
- `prompts/list` is paginated and cacheable (`ttlMs` / `cacheScope`). Each prompt has `name`, optional `title` / `description` / `icons` / `arguments`.
- `prompts/get` takes `name` plus argument values. Servers **SHOULD** validate args. Missing name or required args → JSON-RPC `-32602`. Autocomplete of args is `completion/complete` (`ref/prompt`), not a tool.
- `prompts/get` **MAY** return `InputRequiredResult` (MRTR) when more input is needed; retry with `inputResponses` / `requestState`.
- Prompt messages are `user` or `assistant` with text, image, audio, `resource_link`, or embedded `resource`. Validate I/O — prompt text is still an injection surface.
- List-changed notifications go to clients that opened `subscriptions/listen` with `promptsListChanged: true` (`notifications/prompts/list_changed`).
- Do not re-register a user workflow as a tool “so the model can find it” unless the model should invoke it without an explicit user pick.

## Sources

- [MCP prompts (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/prompts) — accessed 2026-08-24
- [MCP server concepts](https://modelcontextprotocol.io/docs/learn/server-concepts) — accessed 2026-08-24
- [MCP completion (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion) — accessed 2026-08-24
