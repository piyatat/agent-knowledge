---
id: kiro-cli
title: Kiro CLI — V3 default harness vs Amazon Q successor
tags: [kiro, cli, mcp, amazon]
status: active
updated: 2026-11-11
when_to_use: Installing kiro-cli, choosing V3 vs --v2, or signing in to a CIMD-only remote MCP server without an oauth block
---

## Summary

**Kiro CLI** (`kiro-cli`) is AWS’s terminal coding agent (next release of Amazon Q Developer CLI). From **3.0.0** (2026-11-03), interactive chat that names no harness starts **V3** on a machine that can run it — the same unified harness as Kiro IDE/Web. **Classic** no longer runs for interactive chat; the desktop app and inline autocomplete are retired. `q` / `q chat` still work. Not the Agents API (`openai-agents-api`).

## Notes

- Harness pick (explicit flag wins): `--v3` / `--v2` → `kiro-cli chat --agent-engine` → V3 implied by `--cloud` / `--repo` → saved `chat.agentEngine` → launch default. Interactive default is V3 (older-glibc Linux falls back to V2). Local headless defaults to **V2** except `--trust-all-tools` (interactive default), `--cloud`/`--repo`, or a V3 `--resume-id`. ACP (`kiro-cli acp`) uses `acp.agentEngine`, not `chat.agentEngine`; V2-only flags (`--agent`, `--model`, `--effort`, `--trust-all-tools`, `--trust-tools`) keep ACP on V2. `--cloud` / `--repo` **reject** V1/V2. Confirm: V3 welcome vs “V3 is here… no longer receive feature updates”.
- First launch after 2.x with saved sessions asks before V3 applies (Continue with V3 / Stay on V2 remind in 14 days / don’t ask). Fresh install starts V3. V3 auto-upgrades V2 agent configs unless `chat.enableAutoAgentUpgrade` is `false`. Separate session stores: V3 can resume a V2 session as a **copy**; V2 cannot open V3. `kiro-cli --v2` or `kiro-cli settings chat.agentEngine v2` to stay on V2.
- V3-only: cloud sessions (`--cloud`, `--repo`) that keep running after disconnect; `/sandbox` for agent shell; `/autonomous on` (Default agent + sandbox first); Workflows (`chat.enableWorkflows`); Spec (`/spec new`). **3.1** (2026-11-05): V3 `PreCompact` / `PostCompact` hooks (PreCompact can refuse); session credits in `/usage` / status line.
- **3.2.0** (2026-11-10) MCP OAuth: most servers still use **DCR** (no `oauth` block). If DCR is missing but the authorization server advertises `client_id_metadata_document_supported`, Kiro signs in with its hosted CIMD `https://kiro.dev/oauth/client-metadata.json` (redirect URIs `http://localhost/oauth/callback` and `http://127.0.0.1/oauth/callback`, **no port** — Tableau-class hosts). A configured `oauth.clientId` or `oauth.clientMetadataUrl` still wins; do not set both. Custom CIMD needs a **pinned** `oauth.redirectUri` matching the document’s `redirect_uris` (random loopback ports fail). Issuer matching is exact RFC 8414 (`mcp-oauth-scopes`, `mcp-oauth-discovery-ssrf`). CLI-only confidential clients still need `clientId`+`clientSecret` (Figma). `/mcp auth` / `cancel-auth` / `logout` for stored grants. Wide Mermaid: `Ctrl+]` or `/diagram`.
- Breaking vs 2.x: `use_aws` gone (use MCP); Hooks move to PascalCase / `.kiro/hooks/*.json`; trust → `permissions.yaml`; sub-agent calls also need the **parent** policy; `kiro-cli doctor` → `kiro-cli diagnostic` / `kiro-cli issue`; `autocomplete` / `inline` / `translate` / `theme` / `dashboard` unavailable. `/upgrade-agent` inside a V3 session. `/checkpoint` is V2-only; V3 has `/rewind`.
- Still: Plan `Shift+Tab`; `/guide`; custom YAML under `.kiro/agents/`; MCP in `~/.kiro/settings/mcp.json` + workspace `.kiro/settings/mcp.json`. Q → Kiro one-time copy of `~/.aws/amazonq` → `~/.kiro`; if both `.kiro` and `.amazonq` exist, **`.kiro` wins**. Steering/skills: `kiro-steering`, `kiro-skills`. Treat MCP output as untrusted (`mcp-server-trust-failures`).

## Sources

- [Choose an agent harness](https://kiro.dev/docs/cli/agent-harness/) — accessed 2026-11-10
- [Upgrade from CLI 2.x](https://kiro.dev/docs/cli/v3/) — accessed 2026-11-10
- [V3 by Default, Classic and Desktop App Retired](https://kiro.dev/changelog/cli/3-0/) — accessed 2026-11-10
- [Full-Screen Diagram Viewer and Sign-In to More MCP Servers](https://kiro.dev/changelog/cli/3-2/) — accessed 2026-11-11
- [MCP configuration](https://kiro.dev/docs/mcp/configuration/) — accessed 2026-11-11
- [Compaction Hooks and Session Credits](https://kiro.dev/changelog/cli/3-1/) — accessed 2026-11-10
- [CLI commands](https://kiro.dev/docs/reference/cli-commands/) — accessed 2026-11-10
- [Kiro CLI setup](https://kiro.dev/docs/cli/setup/) — accessed 2026-11-10
- [Kiro MCP](https://kiro.dev/docs/mcp/) — accessed 2026-09-22
- [Upgrading from Q CLI](https://kiro.dev/docs/upgrade-guides/migrating-from-q/) — accessed 2026-09-22
