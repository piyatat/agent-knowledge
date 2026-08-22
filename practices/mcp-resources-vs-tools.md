---
id: mcp-resources-vs-tools
title: MCP resources vs tools vs prompts
tags: [mcp, tools, resources, design]
status: active
updated: 2026-08-22
when_to_use: Designing an MCP server and choosing which primitive exposes a capability
---

## Summary

Pick the MCP primitive by **who controls** it: tools are model-controlled actions, resources are application-controlled read-only context (URI), prompts are user-selected templates. Host autocomplete for prompt/resource args is `completion/complete`, not a fourth “tool.”

## Notes

- **Tools** — side effects or judgment calls the model should decide (`tools/call`); require schemas and often human deny rights.
- **Resources** — read-only data the **host** pulls by URI (`resources/list|read`); do not register every read as a tool "just because."
- **Prompts** — user-triggered workflows (`prompts/get`), often slash-command shaped.
- **Completions** — optional server capability for typing suggestions on prompt arguments and resource URI templates only (see `mcp-completions`).
- Mis-registering reads as tools burns tokens, adds needless approval friction, and blurs the trust model.
- Tool results **may** embed resources for later subscribe/refetch; still keep the control split clear.
- Hosts should show which tools are exposed and confirm risky invocations.

## Sources

- [MCP server concepts](https://modelcontextprotocol.io/docs/learn/server-concepts) — accessed 2026-08-22
- [MCP tools (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) — accessed 2026-08-22
- [MCP completion (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion) — accessed 2026-08-22
- [Tools vs Resources vs Prompts](https://prashamhtrivedi.in/mcp-primitive-youre-misusing/) — accessed 2026-08-10
