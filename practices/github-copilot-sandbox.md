---
id: github-copilot-sandbox
title: Copilot CLI sandboxes — local MXC vs --cloud
tags: [github, sandbox, cli, security]
status: active
updated: 2026-09-14
when_to_use: Enabling Copilot CLI /sandbox or copilot --cloud, or contrasting them with the Actions cloud agent
---

## Summary

**Copilot CLI sandboxes** (public preview) isolate **tool/command execution**, not the CLI process. **Local** sandboxing uses Microsoft eXecution Container (MXC) on your machine (free with the seat). **`--cloud`** runs the **whole interactive session** in a GitHub-hosted Linux container (billed). Neither is the Actions-hosted coding agent (`github-copilot-coding-agent`). Experimental: start with `--experimental` or `/experimental on`.

## Notes

- Local is **off by default**. `/sandbox enable` persists `sandbox.enabled` in `~/.copilot/settings.json` for later interactive **and** `-p` sessions; `--sandbox` / `--no-sandbox` are per-session. `/sandbox status|policy|config`. Managed `sandbox.enabled` + `sandbox.failIfUnavailable: true` **fail closed** if the backend cannot enforce; users cannot loosen managed policy (`github-copilot-managed-permissions`).
- Default local policy: write cwd + temp; home/system read-only; other paths blocked; git repo above cwd readable; outbound + local net allowed; Git/`gh` creds injected (disable in settings). Built-in file tools run **in-process** and honor policy best-effort — the OS sandbox never sees them. MCP/LSP started by the CLI can be forced into the sandbox; **remote** MCP is never local-sandboxed.
- Backends: macOS Seatbelt (15+ tested), Linux `bwrap` ≥ 0.5.0, Windows BaseContainer (Insiders / recent 11; no AppContainer fallback). Linux proxy needs `slirp4netns` + nftables `iptables`; Windows cannot enforce proxy or denied-paths. If the host cannot sandbox, CLI disables it for the session unless managed policy requires it (then commands do not run).
- Cloud: `copilot --cloud --experimental`. Interactive only — **not** with `-p`/`-i`. Org/enterprise Cloud Sandbox policy is **off by default**. Inherits cloud-agent policies. Sessions: active / stopped (snapshot restore, including across devices) / deleted. Billing: compute $0.000024/s, memory $0.000003/GiB-s, snapshot storage $0.005/GiB-month (preview entitlement was time-limited).
- Bypass: model may ask to run **one** command unsandboxed (`sandbox.allowBypass`; default true). Pair `--allow-all` with a sandbox; never as a substitute for one.

## Sources

- [About cloud and local sandboxes for GitHub Copilot](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes) — accessed 2026-09-14
- [Using local sandboxing](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing) — accessed 2026-09-14
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference) — accessed 2026-09-14
- [Billing for cloud and local sandboxes](https://docs.github.com/billing/concepts/product-billing/cloud-and-local-sandboxes) — accessed 2026-09-14
