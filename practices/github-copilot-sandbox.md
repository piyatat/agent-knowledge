---
id: github-copilot-sandbox
title: Copilot sandboxes — CLI MXC, --cloud, and app local policy
tags: [github, sandbox, cli, security]
status: active
updated: 2026-10-05
when_to_use: Enabling Copilot CLI /sandbox, copilot --cloud, or Copilot-app local sandboxing — not the Actions cloud agent
---

## Summary

**Copilot sandboxes** (public preview) isolate **tool/command execution**. **CLI local** uses Microsoft eXecution Container / OS sandbox on your machine (free with the seat). **`--cloud`** runs the **whole interactive CLI session** in a GitHub-hosted Linux container (billed). **Copilot app** (2026-09-23) has a **separate** per-project local sandbox for repository / working-tree sessions. None of these is the Actions-hosted coding agent (`github-copilot-coding-agent`). CLI still needs `--experimental` or `/experimental on`.

## Notes

- CLI local is **off by default**. `/sandbox enable` persists `sandbox.enabled` in `~/.copilot/settings.json` for later interactive **and** `-p` sessions; `--sandbox` / `--no-sandbox` are per-session. `/sandbox status|policy|config`. Managed `sandbox.enabled` + `sandbox.failIfUnavailable: true` **fail closed** if the backend cannot enforce; users cannot loosen managed policy (`github-copilot-managed-permissions`).
- Default CLI policy: write cwd + temp; home/system read-only; other paths blocked; git repo above cwd readable; outbound + local net allowed; Git/`gh` creds injected (disable in settings). Built-in file tools run **in-process** and honor policy best-effort — the OS sandbox never sees them. MCP/LSP started by the CLI can be forced into the sandbox; **remote** MCP is never local-sandboxed.
- Backends: macOS Seatbelt (15+ tested), Linux `bwrap` ≥ 0.5.0, Windows BaseContainer (Insiders / recent 11; no AppContainer fallback). Linux proxy needs `slirp4netns` + nftables `iptables`; Windows cannot enforce proxy or denied-paths. If the host cannot sandbox, CLI disables it for the session unless managed policy requires it (then commands do not run).
- Cloud: `copilot --cloud --experimental`. Interactive only — **not** with `-p`/`-i`. Org/enterprise Cloud Sandbox policy is **off by default**. Inherits cloud-agent policies. Sessions: active / stopped (snapshot restore, including across devices) / deleted. Billing: compute $0.000024/s, memory $0.000003/GiB-s, snapshot storage $0.005/GiB-month (preview entitlement was time-limited).
- Copilot **app** local sandbox (public preview): Settings → project → **Sandbox new sessions**. Policy tabs: extra read/write, extra read-only, denied folders; outbound vs local net; Git HTTPS + `gh` creds. Applies to **new** local repo / working-tree sessions (or `/sandbox on` for the current one). Does **not** apply to cloud-sandbox or remote-host sessions. App and CLI settings are **not** shared. If the OS cannot enforce the requested policy, the sandboxed shell **errors** rather than running unsandboxed. Managed policy can only tighten.
- Bypass (CLI): model may ask to run **one** command unsandboxed (`sandbox.allowBypass`; default true). Pair `--allow-all` with a sandbox; never as a substitute for one.
- Proxy CA (CLI 1.0.91+): `copilot sandbox ca` **check / create / trust / rotate / remove** (includes unattended Windows setup). The old `/sandbox ca install` is **create** + **trust**. CLI 1.0.92-4: sandboxed shells **withhold ambient `GITHUB_TOKEN`** unless you configure injection; `copilot sandbox ca` honors `--config-dir` / `-C`.
- Settings for sandbox live under `sandbox` in `settings.json` (`github-copilot-cli-settings`). `/sandbox` still opens the General / Auth / Filesystem / Network tabs.

## Sources

- [About cloud and local sandboxes for GitHub Copilot](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes) — accessed 2026-09-26
- [Using local sandboxing](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing) — accessed 2026-09-26
- [Configuring local sandbox settings](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings) — accessed 2026-10-05
- [Local sandboxing in the GitHub Copilot app](https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/) — accessed 2026-09-26
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference) — accessed 2026-10-05
- [copilot-cli changelog (1.0.91)](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-05
- [copilot-cli v1.0.92-4](https://github.com/github/copilot-cli/releases/tag/v1.0.92-4) — accessed 2026-10-05
- [Billing for cloud and local sandboxes](https://docs.github.com/billing/concepts/product-billing/cloud-and-local-sandboxes) — accessed 2026-09-14

