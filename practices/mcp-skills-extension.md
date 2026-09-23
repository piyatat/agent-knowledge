---
id: mcp-skills-extension
title: MCP Skills extension (SEP-2640 / ext-skills)
tags: [mcp, skills, resources, extensions]
status: draft
updated: 2026-09-23
when_to_use: Serving or consuming Agent Skills over MCP (skills/list, skill://) — official extension repo exists; host/SDK adoption is incomplete
---

## Summary

**SEP-2640** (`io.modelcontextprotocol/skills`) binds the Agent Skills folder format onto MCP **resources**. The 2026-07-28 spec overview now lists **Skills over MCP** as a notable official extension, and `modelcontextprotocol/ext-skills` is the working-group repo. Secondary reports say the SEP PR merged **Final** on 2026-09-13; the in-tree SEP blob still says Draft and SDK/host support is incomplete — **keep this note draft**. Pin a revision. Not a filesystem `SKILL.md` host (`agent-skills-open-standard`).

## Notes

- Skill format stays on [agentskills.io](https://agentskills.io/specification): directory + `SKILL.md` frontmatter (`name`, `description`). MCP only transports files. Conventionally `skill://<skill-path>/<file>`. The first URI segment is **not** DNS — do not resolve it. Do **not** infer skill-ness from the scheme; `skills/list` / `skills/get` is authoritative.
- Servers advertise `extensions["io.modelcontextprotocol/skills"]`, implement paginated `skills/list` and `skills/get`, and serve bytes via `resources/read` (optional `resources/directory/read`). Entries include verbatim frontmatter plus a **SHA-256 digest and byte size** per file. Hosts MUST verify digest/size and that `SKILL.md` frontmatter matches the catalog before use. Persisted approval binds to the full URI+digest set — any add/remove/change revokes it.
- `skills/list` MAY omit skills; an unlisted skill is still fetchable with `skills/get` if the host has the URI. Nested skills need **fresh user consent**. Progressive disclosure still applies (`agent-skills-open-standard`).
- Host/scanner limits (page count, file size, snapshot-at-import) are **host policy**. Official Go/TS/Python/C# SDK PRs and Inspector support were still landing as of 2026-09-22. Treat MCP-served skills as supply chain (`malicious-skills-supply-chain`).

## Sources

- [MCP 2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28) — accessed 2026-09-23
- [modelcontextprotocol/ext-skills](https://github.com/modelcontextprotocol/ext-skills) — accessed 2026-09-23
- [SEP-2640 Skills Extension (PR)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640) — accessed 2026-09-23
- [Skills Over MCP is Final (API Evangelist)](https://apievangelist.com/2026/09/22/skills-over-mcp-is-final-and-now-it-needs-servers/) — accessed 2026-09-23
- [fast-agent — Skills over MCP](https://fast-agent.ai/mcp/skills-over-mcp/) — accessed 2026-09-23

