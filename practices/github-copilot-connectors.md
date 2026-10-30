---
id: github-copilot-connectors
title: Copilot connectors — GitHub-verified MCP, connect once
tags: [github, mcp, auth, interoperability]
status: active
updated: 2026-10-30
when_to_use: Connecting Slack/Figma/Sentry (or another verified service) to Copilot once, or contrasting connectors with repo MCP JSON
---

## Summary

**Copilot connectors** (public preview, 2026-10-28) are **GitHub-verified MCP servers**. Sign in to a service once; GitHub hosts the MCP URL and keeps the session signed in. The same connection works in the Copilot app, Copilot CLI (`/mcp` → Connectors), VS Code Agents window Customizations, Copilot in the cloud, and GitHub Mobile. Not a repo `mcpServers` JSON blob (`github-copilot-mcp`) and not a local `~/.copilot/mcp-config.json` install.

## Notes

- Launch catalog (26): Airtable, Amplitude, Apify, Atlassian Rovo, Azure Data Explorer, Bitly, Canva, Cloudflare, Composio, Figma, Grafana Cloud, LaunchDarkly, Linear, Lucid, Microsoft Learn Docs, Miro, Neon, Netlify, Notion, Port, Postman, Sentry, Slack, Statsig, Vercel, Work IQ. URLs live under `https://api.github.com/copilot-connectors/…`. Copilot can call a connector’s tools when they are relevant — you do not have to name the service.
- Surfaces: Copilot app Customize → MCP → **GitHub verified** (Mona badge); CLI `/mcp` Connectors tab; VS Code Agents window Customizations; github.com Copilot customization page. After connect, Mobile / mobile browser cloud sessions reuse it. Copilot app automations can schedule work that uses a connected service (`github-copilot-automations`).
- **Works** in local sessions and **cloud-sandbox** sessions (including github.com). **Does not** work in GitHub Actions sessions (assign-issue-to-Copilot / Actions-hosted cloud agent). Prefer connectors over personal key-based MCP when the service is in the catalog — personal MCP is cloud-sandbox only and key-auth only (`github-copilot-mcp`).
- Org / enterprise gates: **Editor preview features** (preview), **MCP servers in Copilot** (must be on), **Restrict MCP access to registry servers** must be **Allow all** on clients that enforce it (Registry only blocks connectors), and any `allowedMcpServers` allowlist must include each connector URL or a matching wildcard (`deniedMcpServers` still wins). The third-party admin may also need to enable MCP (example: Slack).
- Plans: rolling out to **all** Copilot plans. Treat connector tool output as untrusted (`prompt-injection-agent-defense`, `mcp-server-trust-failures`). Do not put secrets in prompts; GitHub holds the OAuth session.

## Sources

- [Copilot connectors](https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors) — accessed 2026-10-30
- [Supported Copilot connectors](https://docs.github.com/en/copilot/reference/supported-connectors) — accessed 2026-10-30
- [Connect your tools to Copilot without all the setup](https://github.blog/changelog/2026-10-28-connect-your-tools-to-copilot-without-all-the-setup/) — accessed 2026-10-30
- [Customizing the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app) — accessed 2026-10-30
