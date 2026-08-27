---
id: cursor-cloud-secrets-network
title: Cloud Agent secrets, signed commits, and egress allowlists
tags: [cursor, security, secrets, ops]
status: active
updated: 2026-08-27
when_to_use: Configuring Cloud Agent env/runtime/build secrets, network modes, git IP allowlists, or signed-commit branch rules
---

## Summary

Cloud Agent secrets are KMS-encrypted. Pick **Environment Variable** (agent-visible config), **Runtime Secret** (injected but redacted from transcript/commits as `[REDACTED]`), or **Build Secret** (Docker build only). Restrict egress; do not use `*.s3…` wildcards. Commits are HSM-signed automatically.

## Notes

- Runtime Secrets (formerly Redacted Secrets) are still env vars internally. The model should not see them in tool output, but a human on the agent's **Terminal** can. Prefer OIDC (`cursor-cloud-oidc-identity`) over long-lived keys.
- Build Secrets: `RUN --mount=type=secret,id=MY_TOKEN,env=MY_TOKEN,required=true`. They never land in the running agent env.
- **Signed commits:** every Cloud Agent commit is Ed25519 via HSM. GitHub/GitLab show Verified. Satisfies “require signed commits” branch protection with no extra setup.
- Network modes: Allow all; **Default + allowlist** (desktop sandbox defaults plus extras); **Allowlist only** (plus a small Cursor/SCM always-on set). Precedence: environment-specific mode > user > team default. Enterprise can **lock** the team policy.
- Artifact uploads go to `cloud-agent-artifacts.s3.us-east-1.amazonaws.com`. Allowlist that **exact** host. `*.s3.us-east-1.amazonaws.com` is an exfiltration path for a prompt-injected agent. Blocking the host only disables artifact uploads.
- Team allowlist is shared with local sandbox network defaults. Private nets: Tailscale userspace, Cloudflare Tunnel (HTTPS hostname + Access tokens as secrets), or Enterprise PrivateLink for GHES/GitLab/package registries.
- Agents **auto-run** every terminal command (unlike local Agent). Internet + auto-run ⇒ prompt-injection exfil risk. Cloud Agents auto-run with Privacy Mode on; Legacy Privacy Mode is incompatible.
- Egress IPs: `https://cursor.com/docs/ips.json` (`cloudAgents` by cluster, `gitEgressProxy`). Prefer the git egress proxy for SCM allowlists; do not treat IP lists as the primary control. Cursor Review has a separate stable IP list.

## Sources

- [Secrets & Network](https://cursor.com/docs/cloud-agent/security-network) — accessed 2026-08-27
- [Cloud Agent security](https://cursor.com/docs/cloud-agent/security) — accessed 2026-08-27
- [Cloud Agent OIDC tokens](https://cursor.com/docs/cloud-agent/identity) — accessed 2026-08-27
