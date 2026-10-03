---
id: mcp-skills-extension
title: MCP Skills extension (SEP-2640 / ext-skills)
tags: [mcp, skills, resources, extensions]
status: draft
updated: 2026-10-03
when_to_use: Serving or consuming Agent Skills over MCP (skills/list, skill://) — SEP-2640 is Final; official SDK PRs are still open
---

## Summary

**SEP-2640** (`io.modelcontextprotocol/skills`) is **Final**. Canonical docs: [skills.extensions.modelcontextprotocol.io](https://skills.extensions.modelcontextprotocol.io/). It binds the Agent Skills folder format onto MCP **resources** against base revision **2026-07-28**. Official Go/TS/Python/C# SDK PRs were still open as of 2026-10-03 — **keep this note draft**. Pin a revision. Not a filesystem `SKILL.md` host (`agent-skills-open-standard`).

## Notes

- Skill format stays on [agentskills.io](https://agentskills.io/specification). MCP only transports files. Conventionally `skill://<skill-path>/<file>`. The first URI segment is **not** DNS. Do **not** infer skill-ness from the scheme; `skills/list` / `skills/get` is authoritative. A client that does not implement the extension sees `skill://` as ordinary resources.
- Servers advertise `extensions["io.modelcontextprotocol/skills"]` on `server/discover` (optional `directoryRead: true`). They MUST implement paginated `skills/list` and `skills/get`, MUST also declare `resources`, and serve bytes via `resources/read`. `resources/directory/read` is gated — clients MUST NOT call it unless `directoryRead` is true. Entries include verbatim frontmatter plus a **SHA-256 digest** (`sha256:{hex}`) and byte size per file (or `"dynamic"`). Hosts MUST verify digest/size and that `SKILL.md` frontmatter matches the catalog. Persisted approval binds to the full URI+digest set — any add/remove/change revokes it.
- `resources/read` of a `SKILL.md` is **not** activation. Hosts MUST NOT treat a generic resource read as a load (no approval window, no standing for supporting files). Activation is the host’s skill-loading path only. Relative links resolve against that skill’s directory, not the scheme root.
- `skills/list` MAY be empty or partial; an unlisted skill is still fetchable with `skills/get` if the host has the URI. Nested skills need **fresh user consent**. Official SDK PRs (TS #2818, Python #3485, Go #1238, C# #1864/#1856) and Inspector support were still landing. Treat MCP-served skills as supply chain (`malicious-skills-supply-chain`, `unicode-instruction-injection`). Tools still have **no** digest/manifest.

## Sources

- [MCP Skills Extension overview](https://skills.extensions.modelcontextprotocol.io/) — accessed 2026-10-03
- [Skills methods (stable)](https://skills.extensions.modelcontextprotocol.io/specification/stable/skills) — accessed 2026-10-03
- [modelcontextprotocol/ext-skills](https://github.com/modelcontextprotocol/ext-skills) — accessed 2026-10-03
- [SEP-2640 Skills Extension (PR)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640) — accessed 2026-10-03
- [SEP-2640 status / SDK tracker](https://unifiedharnessprotocol.dev/skills-over-mcp/) — accessed 2026-10-03
- [MCP 2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28) — accessed 2026-09-23
