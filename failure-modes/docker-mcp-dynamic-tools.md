---
id: docker-mcp-dynamic-tools
title: Docker MCP gateway lets the agent add catalog servers
kind: knowledge
tags: [docker, mcp, supply-chain, security]
status: active
updated: 2026-11-17
when_to_use: A coding agent connected to Docker MCP Toolkit can install extra catalog servers mid-chat
---

## Summary

Connecting a client to the Docker MCP Gateway turns on **Dynamic MCP** unless you disable it. The gateway then exposes management tools (`mcp-find`, `mcp-add`, `mcp-config-set`, `mcp-remove`, `mcp-exec`, and experimental `code-mode`). The agent can search the catalog and start a server in the current session without you adding it to the profile (`docker-mcp-toolkit`).

## Notes

- **Default on.** Docker calls the feature experimental and enables it automatically with MCP Toolkit (Desktop **4.50+** for this feature; current Toolkit UI is **4.62+**). Turn it off with `docker mcp feature disable dynamic-tools`, and back on with `docker mcp feature enable dynamic-tools`. Restart connected clients after the change.
- **Session scope is not a pin.** Servers added with `mcp-add` are not written to the profile and disappear in the next session. They still run in **this** session, including OAuth the agent starts. A prompt such as “add the postgres MCP server” is enough for the documented flow.
- **Containment is the container, not an allowlist.** Catalog images under `mcp/` are built and signed by Docker, capped at 1 CPU and 2 GB, and have no host filesystem mount unless you granted one. That still leaves every catalog server the agent can find. To keep discovery inside a set you chose, run the gateway with `--catalog <oci-ref>` so search only sees that catalog.
- **`code-mode`.** The agent can register a JavaScript tool that calls other MCP tools inside a sandbox limited to those tools. Docker says this path is early and not reliable for general use; prefer the find/add/config/remove tools if you leave Dynamic MCP on. Treat agent-written composition like other code-mode orchestration (`code-mode-tool-orchestration`).

## Sources

- [Dynamic MCP](https://docs.docker.com/ai/mcp-catalog-and-toolkit/dynamic-mcp/) — accessed 2026-11-17
- [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) — accessed 2026-11-17
- [Use MCP Toolkit from the CLI](https://docs.docker.com/ai/mcp-catalog-and-toolkit/cli/) — accessed 2026-11-17
