---
id: github-mcp-server
title: GitHub MCP server — hosted GitHub tools for agents
kind: service
tags: [github, mcp, git, auth]
status: active
updated: 2026-11-16
when_to_use: Giving a coding agent GitHub issues, pull requests, and repository tools through GitHub's hosted MCP server
---

## Summary

The **GitHub MCP server** is GitHub’s own MCP endpoint for repos, issues, pull requests, Actions, and related APIs. The hosted server at `https://api.githubcopilot.com/mcp/` is the path GitHub recommends. A local Docker server exists when you must customize the process or when the host is GitHub Enterprise Server. It is not the Copilot coding agent itself (`github-copilot-coding-agent`); the remote server can *call* that agent.

## Notes

- **Access.** Any GitHub account can connect. A tool that wraps a paid feature still needs that feature — Copilot cloud-agent tools need a paid Copilot license. Copilot Business and Enterprise also need the **MCP servers in Copilot** policy. Point an HTTP MCP client at `https://api.githubcopilot.com/mcp/`. VS Code can install it from the MCP registry (`@mcp github`).
- **Auth.** OAuth is the default: the host obtains a GitHub token; the remote server does not log you in by itself. Approve only the scopes the task needs. A PAT works as `Authorization: Bearer <token>` and is also what org policy allows. Enterprise Managed Users have PATs off unless an admin enables them. For OAuth app restrictions, each MCP host’s OAuth app must be allowed, except Visual Studio Code and Visual Studio. Do not commit the token (`mcp-server-trust-failures`).
- **Tool surface.** The bare URL is the **default** toolset. `/x/all` is every toolset and is a large list. Narrow with a single toolset path (`/x/issues`, `/x/pull_requests`, `/x/repos`, …) or the header `X-MCP-Toolsets` (comma-separated; unknown names are ignored). `X-MCP-Tools` names individual tools and **fails startup** if a name is unknown. Append `/readonly` or set `X-MCP-Readonly: true`. `/insiders` or `X-MCP-Insiders` is the early-access build. Remote-only toolsets include `copilot_spaces` and `github_support_docs_search`, plus `create_pull_request_with_copilot`.
- **Local server.** Image `ghcr.io/github/github-mcp-server`, stdio via `docker run -i --rm`. `GITHUB_PERSONAL_ACCESS_TOKEN` takes precedence over the container’s OAuth login. GitHub Enterprise Server does not host the remote server; the local server docs also cover Enterprise Cloud with data residency (`ghe.com`).
- **Alternatives.** `gh` in the sandbox when the agent already has a GitHub CLI credential and you do not want another tool list. Copilot Spaces (`github-copilot-spaces`) when the task is a curated context bundle, not the GitHub API.
- **Caveats.** `X-MCP-Lockdown` hides public issue bodies from users without push access. GitHub describes lockdown as a best-effort content filter, not a security boundary, and a client header cannot turn off lockdown the operator already enabled. Default and `all` toolsets are broader than most tasks. The remote server is updated from this repo on GitHub’s schedule, not at the moment you pull the image.

## Sources

- [Setting up the GitHub MCP Server](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/set-up-the-github-mcp-server) — accessed 2026-11-16
- [Remote GitHub MCP Server](https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md) — accessed 2026-11-16
- [GitHub MCP server README](https://github.com/github/github-mcp-server) — accessed 2026-11-16
- [Host integration](https://github.com/github/github-mcp-server/blob/main/docs/host-integration.md) — accessed 2026-11-16
