---
id: mcp-skills-extension
title: MCP Skills extension (SEP-2640, Accepted not Final)
tags: [mcp, skills, resources, extensions]
status: draft
updated: 2026-09-14
when_to_use: Serving or consuming Agent Skills over MCP (skill://, skills/list) — Accepted SEP, not a released extension
---

## Summary

**SEP-2640** (`io.modelcontextprotocol/skills`) binds the Agent Skills folder format onto MCP **resources**. Core maintainers marked the SEP **Accepted** (2026-09-03) but the PR is still open and the extension is **not Final** and **not** in 2026-07-28. Pin a revision if you implement; do not treat Accepted as shipped SDK/host support.

## Notes

- Skill format stays on [agentskills.io](https://agentskills.io/specification): directory + `SKILL.md` frontmatter (`name`, `description`). MCP only transports files. Conventionally `skill://<skill-path>/<file>` (e.g. `skill://git-workflow/SKILL.md`). The first URI segment is **not** DNS — do not resolve it.
- Experimental draft: servers advertise `capabilities.extensions["io.modelcontextprotocol/skills"]`, implement paginated `skills/list` and `skills/get`, and serve bytes via `resources/read`. Entries include verbatim frontmatter plus a **SHA-256 digest** per file. Hosts MUST verify digests (and that `SKILL.md` frontmatter matches the catalog) before install. `skills/list` MAY be empty; unlisted skills are still readable if the host has the URI.
- Do **not** infer “this is a skill” from the `skill://` scheme alone. Other schemes are allowed; the catalog/`skills/get` is authoritative. Nested skills (experimental) need **fresh user consent** — approving the parent is not enough.
- Hosts merge filesystem skills and MCP catalogs into one registry (name, description, origin). Progressive disclosure still applies: name+description at rest, body on activation (`agent-skills-open-standard`).
- Some hosts (e.g. plugin scanners) snapshot at import time and cap counts/sizes — those limits are **host policy**, not the SEP. Re-scan to pick up changes. Treat the extension as supply-chain sensitive (`malicious-skills-supply-chain`).
- Path to Final still includes a reference implementation, conformance tests, and extension-repo docs. The incubation repo remains experimental. Next evidence that would change this note: merge + Final status, or a later MCP spec release that carries the extension.

## Sources

- [SEP-2640 Skills Extension (PR)](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640) — accessed 2026-09-14
- [experimental-ext-skills](https://github.com/modelcontextprotocol/experimental-ext-skills) — accessed 2026-09-14
- [fast-agent — Skills over MCP](https://fast-agent.ai/mcp/skills-over-mcp/) — accessed 2026-08-27
- [Skills Over MCP: SEP-2640 status](https://unifiedharnessprotocol.dev/skills-over-mcp/) — accessed 2026-09-14
