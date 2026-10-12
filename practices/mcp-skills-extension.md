---
id: mcp-skills-extension
title: MCP Skills extension (SEP-2640 / ext-skills)
tags: [mcp, skills, resources, extensions]
status: active
updated: 2026-10-12
when_to_use: Serving or consuming Agent Skills over MCP (skills/list, skill://) — SEP-2640 is Final; Python SDK ships Skills
---

## Summary

**SEP-2640** (`io.modelcontextprotocol/skills`) is **Final**. It binds the Agent Skills folder format onto MCP **resources** against base revision **2026-07-28**. Canonical docs: [skills.extensions.modelcontextprotocol.io](https://skills.extensions.modelcontextprotocol.io/) and the MCP Skills overview. The **Python SDK** ships a built-in `Skills` extension; other official SDKs and hosts are still landing. Not a filesystem `SKILL.md` host (`agent-skills-open-standard`).

## Notes

- Skill format stays on [agentskills.io](https://agentskills.io/specification). MCP only transports files. Conventionally `skill://<skill-path>/<file>`. The first URI segment is **not** DNS. Do **not** infer skill-ness from the scheme; `skills/list` / `skills/get` is authoritative. A client that does not implement the extension sees `skill://` as ordinary resources. Skill identity is **server identity + URI**; names are labels.
- Servers advertise `extensions["io.modelcontextprotocol/skills"]` on `server/discover` (optional `directoryRead: true`). They MUST implement paginated `skills/list` and `skills/get`, MUST also declare `resources`, and serve bytes via `resources/read`. `resources/directory/read` is gated — clients MUST NOT call it unless `directoryRead` is true. Entries include verbatim frontmatter plus a **SHA-256 digest** (`sha256:{hex}`) and byte size per file (or `"dynamic"`). List/get results also carry `resultType`, `ttlMs`, and `cacheScope` (2026-07-28+). Hosts MUST verify digest/size and that `SKILL.md` frontmatter matches the catalog. Persisted approval binds to the full URI+digest set — any add/remove/change revokes it.
- `resources/read` of a `SKILL.md` is **not** activation. Hosts MUST NOT treat a generic resource read as a load (no approval window, no standing for supporting files). Activation is the host’s skill-loading path only. Relative links resolve against that skill’s directory, not the scheme root. Nested skills need **fresh user consent**. Cross-server reads need per-call approval naming both servers.
- `skills/list` MAY be empty or partial; an unlisted skill is still fetchable with `skills/get`. Servers SHOULD stay under **512 files / 16 MiB** per skill. Python `Skills` is a protocol adapter — you supply list/get handlers and register file bytes as ordinary resources; it does not walk a filesystem or hash for you. Client helpers validate SEP-2640 shape before return. Treat MCP-served skills as supply chain (`malicious-skills-supply-chain`, `unicode-instruction-injection`). Tools still have **no** digest/manifest.

## Sources

- [Skills overview (MCP)](https://modelcontextprotocol.io/extensions/skills/overview) — accessed 2026-10-12
- [Skills methods (stable)](https://skills.extensions.modelcontextprotocol.io/specification/stable/skills) — accessed 2026-10-12
- [Skills — MCP Python SDK](https://py.sdk.modelcontextprotocol.io/advanced/skills/) — accessed 2026-10-12
- [modelcontextprotocol/ext-skills](https://github.com/modelcontextprotocol/ext-skills) — accessed 2026-10-12
- [SEP-2640 Skills Extension](https://modelcontextprotocol.io/seps/2640-skills-extension) — accessed 2026-10-12
- [MCP 2026-07-28 specification](https://modelcontextprotocol.io/specification/2026-07-28) — accessed 2026-09-23
