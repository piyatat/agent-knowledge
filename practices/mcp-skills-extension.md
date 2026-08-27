---
id: mcp-skills-extension
title: MCP Skills extension (SEP-2640, draft)
tags: [mcp, skills, resources, extensions]
status: draft
updated: 2026-08-27
when_to_use: Serving or consuming Agent Skills over MCP (skill://, skills/list) — not a ratified spec yet
---

## Summary

**SEP-2640** (`io.modelcontextprotocol/skills`) is a **draft** binding of the Agent Skills folder format onto MCP **resources**. It is not in the 2026-07-28 core. Pin a draft revision if you implement; listing APIs have already moved (`skill://index.json` vs `skills/list`).

## Notes

- Skill format stays on [agentskills.io](https://agentskills.io/specification): directory + `SKILL.md` frontmatter (`name`, `description`). MCP only transports files. Conventionally `skill://<skill-path>/<file>` (e.g. `skill://git-workflow/SKILL.md`). The first URI segment is **not** DNS — do not resolve it.
- Experimental draft: servers advertise `capabilities.extensions["io.modelcontextprotocol/skills"]`, implement paginated `skills/list` and `skills/get`, and serve bytes via `resources/read`. Entries include verbatim frontmatter plus a **SHA-256 digest** per file. Hosts MUST verify digests (and that `SKILL.md` frontmatter matches the catalog) before install. `skills/list` MAY be empty; unlisted skills are still readable if the host has the URI.
- Do **not** infer “this is a skill” from the `skill://` scheme alone. Other schemes are allowed; the catalog/`skills/get` is authoritative. Nested skills (experimental) need **fresh user consent** — approving the parent is not enough.
- Hosts merge filesystem skills and MCP catalogs into one registry (name, description, origin). Progressive disclosure still applies: name+description at rest, body on activation (`agent-skills-open-standard`).
- Some hosts (e.g. plugin scanners) snapshot at import time and cap counts/sizes — those limits are **host policy**, not the SEP. Re-scan to pick up changes. Treat the extension as supply-chain sensitive (`malicious-skills-supply-chain`).

## Sources

- [SEP-2640 Skills Extension (draft)](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2640-skills-extension.md) — accessed 2026-08-27
- [experimental-ext-skills SEP draft](https://github.com/modelcontextprotocol/experimental-ext-skills/blob/main/docs/sep-draft-skills-extension.md) — accessed 2026-08-27
- [fast-agent — Skills over MCP](https://fast-agent.ai/mcp/skills-over-mcp/) — accessed 2026-08-27
