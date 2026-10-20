---
id: github-package-firewall
title: GitHub package firewall — npm proxy for agents and CI
tags: [github, security, supply-chain, sandbox]
status: active
updated: 2026-10-20
when_to_use: Pointing a coding agent, Actions runner, or laptop npm at GitHub’s enterprise package firewall instead of registry.npmjs.org
---

## Summary

**GitHub package firewall** (public preview, 2026-10-20, Enterprise Cloud including data residency) is an **enterprise npm registry proxy**. Endpoints (Actions, coding agents, developer machines) must be **configured** to use it; enabling the policy does not rewrite traffic by itself. It is not Copilot cloud-agent egress allowlisting (`github-copilot-coding-agent`) and not Dependabot’s job proxy. **npm only.** Free in preview; metered like Actions at GA.

## Notes

- Policy (enterprise **Policies → Package firewall**): **Block known malware** (Advisory Database; default on); **Block vulnerability advisories** (default Critical only; High / Medium / Any); **Block attestation downgrades** (prior SLSA attestations missing on the requested version; default on); **Block newly-introduced install scripts** (`preinstall` / `postinstall`; default on); **Minimum package age** 0–365 days (default **1**; `0` disables). Applies to metadata **and** tarball downloads.
- Endpoint: user `.npmrc` `registry=https://package-firewall.githubapp.com/npm/enterprises/{slug}` plus `:_authToken=${GITHUB_TOKEN}`. Token: enterprise member (user or bot) with **read public repos** only — store as a CI secret, never commit. Experimental **Artifactory** remote of that URL, then a virtual repo that **excludes** a direct npmjs remote (otherwise the firewall is bypassed).
- False positives: npm/CI log includes a bypass URL (`…/security/bypass-requests/package-firewall/new?…`). Reviewers (enterprise admin / security manager, or a custom role with **Edit enterprise-level package firewall policy**) can allow a version or `*` for all versions (typical for first-party packages vs cooldown). Overrides live on the policy page and can be removed.
- Agents: point Copilot cloud-agent / CLI / other coding-agent npm at the firewall **and** keep the Copilot internet allowlist (`github-copilot-coding-agent`). Direct `registry.npmjs.org` still bypasses every control. Do not treat this as a sandbox for shell or MCP.

## Sources

- [GitHub package firewall in public preview](https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/) — accessed 2026-10-20
- [Protecting endpoints with GitHub package firewall](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall) — accessed 2026-10-20
