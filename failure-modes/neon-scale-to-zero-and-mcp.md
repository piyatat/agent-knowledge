---
id: neon-scale-to-zero-and-mcp
title: A Neon query waits on a suspended compute, or MCP can see too much
kind: knowledge
tags: [neon, postgres, mcp, billing]
status: active
updated: 2026-11-21
when_to_use: The first Neon query is slow, compute never suspends, or an agent key can reach every project
---

## Summary

Neon (`neon`) suspends an idle compute, then spends a few hundred milliseconds waking it on the next connection. Computes larger than 16 CU never suspend. A key minted for the MCP server is account-wide unless the install pins a project, and a read-only URL does not shrink that key.

## Notes

- **Wake and reset.** Free and Launch suspend after **5 minutes** idle. Free cannot disable that. Scale can set the timeout from **60 seconds to 7 days**, or `-1` for always on. The first query after idle waits for the wake. Suspend clears session state: temporary tables, prepared statements, and in-memory statistics. A workflow that needs a live session has to disable scale-to-zero on a paid plan.
- **What stays billed.** Computes over **16 CU** stay active; an API suspend timeout on them fails unless it is `-1`. Logical replication **from** Neon keeps the compute up while a subscriber is connected. Replication into Neon does not. Every compute counts, including the default read-write compute on each branch and any read replica. Free includes **100 CU-hours per project per month** (a 0.25 CU compute can run about 400 hours).
- **Always-on images.** Disabling scale-to-zero leaves the compute running, so it does not pick up compute-image updates on its own. Neon’s guide says to restart about once a week. Not every image is a critical fix.
- **MCP scope.** `neon mcp` mints a key that can reach every organization on the account unless `--project-id` limits it. `--read-only` only adds `readonly=true` to the URL; it does not change the key. Console-created roles are members of `neon_superuser`, so naming one with `roleName` does not hide tables. A role that actually limits the agent is one you create with grants, and it must be able to log in on that branch. A role that cannot log in fails the call; SQL does not fall back to the owner.
- **Network and transport.** With IP Allow on, the hosted MCP server connects from `34.192.103.46` and `23.22.233.166`. Clients still aimed at `https://mcp.neon.tech/sse` get **410**. A stale OAuth cache (`~/.mcp-auth`) can surface as `invalid redirect uri` until the client signs in again.
- **Production data.** Neon’s own guidance is to keep MCP on local development and anonymized data, and to combine read-only mode, a limited role, category filters, and `secrets=none`.

## Sources

- [Scale to zero](https://neon.com/docs/introduction/scale-to-zero) — accessed 2026-11-21
- [Configuring scale to zero](https://neon.com/docs/guides/scale-to-zero-guide) — accessed 2026-11-21
- [Neon plans](https://neon.com/docs/introduction/plans) — accessed 2026-11-21
- [Neon MCP server](https://neon.com/docs/ai/neon-mcp-server) — accessed 2026-11-21
- [Neon CLI mcp](https://neon.com/docs/cli/mcp) — accessed 2026-11-21
