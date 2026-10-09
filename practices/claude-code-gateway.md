---
id: claude-code-gateway
title: Claude apps gateway — SSO proxy for Bedrock, GCP, Foundry
tags: [claude, gateway, auth, governance]
status: active
updated: 2026-10-09
when_to_use: Deploying Claude apps gateway, forcing /login to a private gateway URL, or contrasting it with Bedrock/Vertex env vars or self-hosted runners
---

## Summary

**Claude apps gateway** is a self-hosted proxy **inside the `claude` binary** (`claude gateway --config gateway.yaml`). Developers SSO to the gateway; the gateway holds the **provider** credential and forwards Anthropic-format Messages API calls to **Bedrock**, **Claude Platform on AWS**, **Google Cloud Agent Platform**, **Microsoft Foundry**, or the Anthropic API. Not a substitute for self-hosted **runners** (`claude-code-self-hosted`) and not `HTTPS_PROXY` (configure that separately). Other LLM gateways work if they implement the protocol at `GET /protocol`; Anthropic does not support non-Claude models through any gateway.

## Notes

- **v2.1.195+** on both server and clients (`claude update`). Server is the **native Linux** binary (macOS for local dev; Windows is not a server). Needs OIDC (not SAML/LDAP), **Postgres 14+**, HTTPS, and a hostname that resolves only to **private** IPs (RFC 1918, CGNAT `100.64.0.0/10`, IPv6 ULA, loopback). A trusted gateway can push settings that run commands — do not expose it to the internet. Anthropic-operated public hostnames are a compiled-in exception (v2.1.206+).
- Deploy `forceLoginMethod: "gateway"` and `forceLoginGatewayUrl` in **managed** settings / MDM. **v2.1.295+:** the same two keys also work in **user** settings on a machine with **no** managed settings, so `/login` opens that gateway. A saved gateway sign-in is ignored if managed sets `forceLoginMethod: "gateway"` with **no** `forceLoginGatewayUrl` (regression in 2.1.295; fixed in 2.1.296). Optional `gatewayInternalNetworks` (v2.1.268+) lists org-owned public IPv4 blocks when the internal net is numbered from public space. First connect **pins the TLS leaf**; publish the SHA-256 fingerprint. Sessions last `ttl_hours` (default 1). No **service-token** path — CI must talk to the provider directly; `-p` / Agent SDK on a signed-in machine reuse that session.
- Gateway sign-in **bills the org provider account** at API rates and turns off claude.ai subscription login. Setting only `ANTHROPIC_BASE_URL` (no gateway credential) still uses the saved subscription. Features **off** on gateway sessions: WebSearch, Remote Control, `/design-sync`, 1-hour cache TTL, first-party-only cache/tool betas, feature-flag fetches. Auto mode works (v2.1.207+ without `CLAUDE_CODE_ENABLE_AUTO_MODE`).
- Per-IdP-group `availableModels` + managed settings; `enforceAvailableModels: true` so Default stays inside the allowlist. Optional per-upstream `models` list (v2.1.295+) restricts which models that upstream may serve, including failover; `*` is a wildcard. `timeouts.upstream_ttfb_ms` caps time-to-first-byte on Bedrock / Vertex / Foundry / other cloud upstreams before failover or 502. OTLP/HTTP telemetry goes to the gateway (not a local collector) unless policy names an endpoint. Claude Desktop uses `bootstrapUrl` → `/user/bootstrap` plus `parentSettingsBehavior: "merge"` so egress/plugin parent settings apply (`claude-code-settings`).
- **v2.1.296:** `managed.policies[]` accepts a **`code`** key — the same settings shape as `cli`, applied in Claude Desktop’s **Code** tab. Together with `desktop`, it turns on Desktop gateway mode. A session that cannot start (including a machine not set up for the gateway’s `code` settings) now shows the reason as a reply (`claude-code-desktop`). A gateway that serves `allowedProviders` with `"gateway"` no longer locks out laptops that name that gateway in user settings.
- One OIDC issuer per instance. Pair with `allowManaged*Only` locks if Desktop/SDK hosts can inject parent settings. Treat gateway-delivered settings as org policy, not user memory (`memory-files-vs-enforcement-hooks`).

## Sources

- [Run Claude Code through a gateway](https://code.claude.com/docs/en/gateways) — accessed 2026-10-09
- [Claude apps gateway](https://code.claude.com/docs/en/claude-apps-gateway) — accessed 2026-10-09
- [Claude apps gateway configuration](https://code.claude.com/docs/en/claude-apps-gateway-config) — accessed 2026-10-09
- [CHANGELOG.md](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) — accessed 2026-10-09
- [v2.1.295](https://github.com/anthropics/claude-code/releases/tag/v2.1.295) — accessed 2026-10-09
- [Claude apps gateway deployment](https://code.claude.com/docs/en/claude-apps-gateway-deploy) — accessed 2026-09-29
