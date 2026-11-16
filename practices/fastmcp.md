---
id: fastmcp
title: FastMCP — Python framework for MCP servers
kind: tool
tags: [fastmcp, mcp, sdk, python]
status: active
updated: 2026-11-16
when_to_use: Building a Python MCP server or client that must speak the 2026-07-28 revision and older clients
---

## Summary

**FastMCP** is a Python framework for MCP servers, clients, and interactive apps (tools, resources, prompts, auth, transports). **FastMCP 4** is the release line for the stateless MCP revision and the rewritten Python SDK v2; one server negotiates **2026-07-28** and legacy clients per connection. It is not the old `from mcp.server.fastmcp import FastMCP` import inside the official MCP SDK, and not the MCP Inspector (`mcp-inspector`).

## Notes

- **Install.** `uv add fastmcp` or `pip install fastmcp`. Background tasks are an extra: `pip install "fastmcp[tasks]"`. Check with `fastmcp version`. The install doc’s sample output still prints FastMCP 4.0.0; that is an illustration. **4.2.0** (2026-11-13) is the skills release on the updates page. Pin an **exact** version (`fastmcp==4.2.0`). The project warns that **minor** versions can break when the protocol moves, so `fastmcp>=4.0.0` is not a safe production pin. A same-team TypeScript counterpart exists; this note is the Python package.
- **What you run.** `mcp.run()` defaults to **stdio** (local clients spawn the process). **HTTP** is Streamable HTTP. **SSE** is the legacy web transport and is deprecated. Decorators such as `@mcp.tool()` are unchanged from the FastMCP 3 surface for most servers. FastMCP 4 adds interactive follow-up tools, `add_extension()`, `Depends` / `CallArgument` (kept out of the tool schema), and `ClientGroup`.
- **Skills (4.2, experimental).** A `Skill` is a name, description, instructions, and files. `SkillCatalogProvider` or `SkillsDirectoryProvider` serves them as ordinary resources. Clients that speak the experimental Skills extension also get `skills/list` with a hashed manifest. `Client.read_skill()` checks size and digest; `to_directory()` installs into an agent skills folder. Client support is uneven. Older `experimental_skills=True` imports warn and are on a removal path toward 4.3 — use `fastmcp.skills.provider`.
- **Auth.** Applies to **HTTP and SSE only**. Stdio inherits the local user. Default is `auth=None`: an HTTP endpoint accepts unauthenticated calls, and components without their own checks are open to anyone who can reach the port. A gateway in front does not count unless you also block direct access. Patterns: `JWTVerifier` (resource server), `RemoteAuthProvider` when the IdP supports dynamic client registration, `OAuthProxy` (GitHub, Google, Azure, and other non-DCR providers), `MultiAuth` (3.1.0+) for more than one issuer, and a full `OAuthProvider` only if you must be the authorization server. Load client secrets from the environment.
- **Upgrading.** Most FastMCP 3 servers run on 4 without changes. From MCP SDK v1’s high-level server, the usual change is the import (`from fastmcp import FastMCP`) rather than rewriting onto SDK v2’s `MCPServer`. A `pip` upgrade from FastMCP 3.2 or earlier to 3.3+ can leave a half-removed install (`ModuleNotFoundError`); `uv` is unaffected. Reinstall with `pip install --force-reinstall fastmcp` if that happens. Cyclopts can pull docutils via old rich-rst; a fresh install resolves rich-rst 2. If a license scan flags docutils, upgrade `cyclopts` and `rich-rst`.
- **Alternatives.** The official MCP Python SDK (`mcp-official-sdks`) when you want the reference `MCPServer` and not this framework. Pydantic AI (`pydantic-ai`) when the agent loop is the product and MCP is one tool source. Publish install metadata in the official registry (`mcp-official-registry`) either way.
- **Caveats.** Do not deploy HTTP with `auth=None` on a reachable network. Do not treat 4.2 skills as stable wire for every client. Do not float the minor version in production.

## Sources

- [FastMCP welcome](https://gofastmcp.com/docs/getting-started/welcome) — accessed 2026-11-15
- [Installation](https://gofastmcp.com/docs/getting-started/installation) — accessed 2026-11-15
- [What's New in FastMCP 4](https://gofastmcp.com/docs/getting-started/whats-new) — accessed 2026-11-15
- [The FastMCP server](https://gofastmcp.com/docs/servers/server) — accessed 2026-11-15
- [Authentication](https://gofastmcp.com/docs/servers/auth/authentication) — accessed 2026-11-15
- [FastMCP updates](https://gofastmcp.com/docs/updates) — accessed 2026-11-15
