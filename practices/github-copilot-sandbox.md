---
id: github-copilot-sandbox
title: Copilot sandboxes — CLI MXC, --cloud, and app local policy
tags: [github, sandbox, cli, security]
status: active
updated: 2026-10-08
when_to_use: Enabling Copilot CLI /sandbox, copilot --cloud, Copilot-app local sandboxing, or VS Code Agent Host MXC
---

## Summary

**Copilot sandboxes** isolate **tool/command execution**. **Local** sandboxing is **generally available** (2026-10-07) in Copilot CLI, the Copilot app, and VS Code **Agent Host** sessions — MXC maps one policy onto Seatbelt / bubblewrap / Windows BaseContainer. **`--cloud`** still runs the **whole interactive CLI session** in a GitHub-hosted Linux container (**public preview**, billed). None of these is the Actions-hosted coding agent (`github-copilot-coding-agent`). VS Code setting names: `vscode-agent-sandboxing`.

## Notes

- CLI local is **off by default** and **free** with the seat. `/sandbox enable` persists `sandbox.enabled` in `~/.copilot/settings.json` for later interactive **and** `-p` sessions; `--sandbox` / `--no-sandbox` are per-session. CLI **1.0.93** made `/sandbox` and `--sandbox` available to **all users** (no experimental flag). Managed `sandbox.enabled` + `sandbox.failIfUnavailable: true` **fail closed** if the backend cannot enforce; users cannot loosen managed policy (`github-copilot-managed-permissions`). `/sandbox disable` under managed policy is session-only when bypass is allowed.
- Default CLI policy: write cwd + temp; Git metadata writable in a repo; home/system mostly read-only; other paths blocked. **Outbound internet on; local network off** (1.0.93 loopback/localhost may be on the local-network allowlist). Git/`gh` creds are placeholder tokens rewritten by a local proxy for approved HTTPS hosts. Built-in file tools run **in-process** and honor policy best-effort — the OS sandbox never sees them. MCP/LSP started by the CLI can be forced into the sandbox; **remote** MCP is never local-sandboxed. `/add-dir` does **not** grant sandbox path access.
- Backends: macOS Seatbelt (test on 15+), Linux `bwrap` ≥ 0.5.0 + `slirp4netns`, Windows 11 25H2 KB5124010+ or 26H1 KB5124006+. Isolation is **process containment**, not a VM. If the host cannot sandbox, CLI disables it for the session unless managed policy requires it (then commands do not run).
- Cloud: `copilot --cloud --experimental`. Interactive only — **not** with `-p`/`-i`. Org/enterprise Cloud Sandbox policy is **off by default**. Inherits cloud-agent policies. Sessions: active / stopped (snapshot restore, including across devices) / deleted. Billing: compute $0.000024/s, memory $0.000003/GiB-s, snapshot storage $0.005/GiB-month.
- Copilot **app** local sandbox (GA with CLI/Agent Host): project settings default for **new** local repo / working-tree sessions (or toggle the current one). Policy tabs: extra read/write, extra read-only, denied folders; outbound vs local net; Git HTTPS + `gh` creds. Does **not** apply to cloud-sandbox or remote-host sessions. App and CLI settings are **not** shared. If the OS cannot enforce a denied path, the sandboxed shell **errors** rather than running weaker.
- Bypass (CLI): model may ask to run **one** command unsandboxed (`sandbox.allowBypass`; default true). Pair `--allow-all` with a sandbox; never as a substitute for one. Proxy CA (CLI 1.0.91+): `copilot sandbox ca` **check / create / trust / rotate / remove**. CLI 1.0.92-4: sandboxed shells **withhold ambient `GITHUB_TOKEN`** unless you configure injection.

## Sources

- [Local sandboxing for GitHub Copilot now generally available](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available/) — accessed 2026-10-08
- [About cloud and local sandboxes for GitHub Copilot](https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes) — accessed 2026-10-08
- [Using local sandboxing](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing) — accessed 2026-10-07
- [Configuring local sandbox settings](https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings) — accessed 2026-10-05
- [Sandbox Copilot Agent Host sessions](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) — accessed 2026-10-08
- [copilot-cli changelog (1.0.93)](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-07
- [Billing for cloud and local sandboxes](https://docs.github.com/billing/concepts/product-billing/cloud-and-local-sandboxes) — accessed 2026-09-14
