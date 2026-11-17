---
id: docker-mcp-toolkit
title: Docker MCP Toolkit — containerized MCP gateway
kind: tool
tags: [docker, mcp, gateway, security]
status: active
updated: 2026-11-17
when_to_use: Running catalog MCP servers in containers and sharing one gateway across coding agents
---

## Summary

**Docker MCP Toolkit** (Docker Desktop **4.62+**) installs MCP servers from the Docker MCP Catalog as containers and exposes them through one **MCP Gateway**. Clients such as Claude, Cursor, VS Code, and Zed connect to a profile instead of each installing the server. The local gateway is separate from invite-only **MCP Gateway** under Docker AI Governance.

## Notes

- **Access.** Docker Desktop. The `docker mcp` CLI (Desktop **4.62+**) manages profiles, secrets, OAuth, catalogs, and the gateway. Connect a listed client in the Clients tab, or point any stdio client at `docker mcp gateway run --profile <profile-id>`. Omit `--profile` to use the default profile. `docker mcp client connect vscode --profile <id>` writes a project `.vscode/mcp.json` (user-specific; do not commit it).
- **Catalog and profiles.** Docker documents **300+** catalog servers. Images under `mcp/` are built and signed by Docker (SBOM included); the catalog also lists some third-party servers (GitHub, HashiCorp) after Docker’s own build-and-test. Docker calls that review best-effort, not exhaustive. `docker mcp gateway run --verify-signatures` checks attestations at runtime. A profile is a named set of servers. `docker mcp profile push <profile> <oci>` shares it; credentials are **not** in the artifact. Custom catalogs are OCI refs. `docker mcp gateway run --catalog <oci>` limits Dynamic MCP search to that catalog.
- **Auth.** OAuth for servers such as GitHub, Notion, and Linear is started from the server’s Configuration tab; revoke it from the OAuth tab or `docker mcp oauth revoke`. Since Desktop **4.43**, secrets live in the Desktop VM (`docker mcp secret ls` / `rm`). **OAuth credentials are shared across every profile** — a second account means revoke and authorize again.
- **Limits.** Each tool container is capped at **1 CPU** and **2 GB**. Host filesystem access is off until you grant a mount for that server. The gateway blocks tool traffic that contains secrets. Dynamic MCP is experimental and **on by default** (`docker-mcp-dynamic-tools`).
- **Alternatives.** Pin one server yourself when you do not want Desktop in the path (`playwright-mcp`, `github-mcp-server`). Use the official registry for discovery without Docker images (`mcp-official-registry`).
- **Caveats.** `docker mcp` in these pages needs Docker Desktop **4.62+** (the CLI page also covers headless use of that Desktop CLI). Removing a server does not delete its stored credentials. A client connected to the gateway can gain catalog servers during the chat unless dynamic tools are disabled.

## Sources

- [Docker MCP Catalog and Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/) — accessed 2026-11-17
- [Docker MCP Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/) — accessed 2026-11-17
- [Use MCP Toolkit from the CLI](https://docs.docker.com/ai/mcp-catalog-and-toolkit/cli/) — accessed 2026-11-17
- [MCP Profiles](https://docs.docker.com/ai/mcp-catalog-and-toolkit/profiles/) — accessed 2026-11-17
- [MCP Toolkit FAQs](https://docs.docker.com/ai/mcp-catalog-and-toolkit/faqs/) — accessed 2026-11-17
- [Dynamic MCP](https://docs.docker.com/ai/mcp-catalog-and-toolkit/dynamic-mcp/) — accessed 2026-11-17
