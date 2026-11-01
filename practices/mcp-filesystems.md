---
id: mcp-filesystems
title: MCP Filesystems WG — resource writes still ideating
tags: [mcp, resources, extensions, filesystem]
status: draft
updated: 2026-11-01
when_to_use: Assuming MCP resources can be created/updated/deleted, or choosing a tool vs a resource mutation
---

## Summary

The **MCP Filesystems Working Group** wants Resources to carry **filesystem semantics** (list, search, read, write, `stat`) as one or more **Extensions Track** SEPs. As of **2026-10-27** the lead item **“SEP: Filesystem Operations for Resources” is still Ideating**. There is **no** accepted `resources/create|update|delete|stat`. Mutations today stay on **tools**. Official charter: `mcp-filesystems` is draft until a SEP is accepted.

## Notes

- In scope (charter widened 2026-09-10; search / bulk reads / typed errors added **2026-10-27**): hierarchy-aware listing (`readdir`-like and subtree vs flat `resources/list`); server-side search/glob; read semantics (bulk read; whether `seek` belongs); create / update / delete / `stat`; optimistic concurrency + create-if-absent; typed errors (not-found, exists, precondition, permission — today a missing resource is generic `-32602`); interaction with `notifications/resources/updated`, `ttlMs`, `cacheScope`, `lastModified` (`mcp-list-caching`).
- Out of scope: a parallel `files/*` family (SEP-1708 closed 2026-01-23); a full POSIX mapping; **host** sandbox / local-disk materialization; authorization policy beyond existing MCP auth.
- Reconcile, do not invent a second primitive: **SEP-2571** (`resources/create`, `resources/delete`) is the first item to take up; **SEP-2532** (`resources/stream`); File Uploads WG for large-content vs small inline writes (`mcp-file-uploads`). Skills (`mcp-skills-extension`) already reads Resources and optional directories — it does **not** depend on these writes.
- `experimental-ext-filesystems` is an incubation repo, not a shipped extension. Do not advertise `resources/create` in a production server until an Extensions Track SEP is accepted and a client actually implements that capability (`mcp-extension-lifecycle`). Until then, document tool mutation semantics yourself.

## Sources

- [Filesystems Charter](https://modelcontextprotocol.io/community/working-groups/filesystems) — accessed 2026-11-01
- [experimental-ext-filesystems](https://github.com/modelcontextprotocol/experimental-ext-filesystems) — accessed 2026-11-01
- [SEP-2571 discussion context (charter)](https://modelcontextprotocol.io/community/working-groups/filesystems) — accessed 2026-11-01
- [Filesystem WG events](https://meet.modelcontextprotocol.io/2026/11/filesystem-wg-0frl2w00v56a) — accessed 2026-11-01
