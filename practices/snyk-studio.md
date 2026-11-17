---
id: snyk-studio
title: Snyk Studio — local scan hooks and MCP for coding agents
kind: tool
tags: [snyk, security, mcp, hooks]
status: active
updated: 2026-11-17
when_to_use: Scanning code and dependencies from Claude, Cursor, Codex, or Copilot with the local Snyk CLI
---

## Summary

**Snyk Studio** wires a coding assistant to the **local Snyk CLI**: Secure at inception hooks, a stdio MCP server, remediation skills, and package-health checks. There is no hosted scanning MCP. It is not Semgrep Guardian (`semgrep-guardian`) and not GitHub code scanning.

## Notes

- **Access.** Local setup needs Snyk CLI **1.1307.4 or later** (Studio commands start there) and a Snyk account. `snyk auth` in the browser, then `snyk studio install --experimental`. The installer looks for assistant config dirs under your home directory. `--ade=claude,cursor` limits targets. `--dry-run` previews file edits. `--verify` checks copied assets (ok / DIFF / MISS) and that merged config files exist; it does not prove a scan ran. Enterprise rollout uses the Agentic Development Security installer instead of this local path.
- **Assistants.** `--ade` values with hooks, MCP, and remediation: `claude`, `cursor`, `codex`, `gemini`, `copilot-cli`, `copilot-vscode`. `kiro` gets MCP plus remediation and package health, **without** Secure at inception hooks. Other clients are manual MCP only. The legacy `windsurf` target writes old Cascade paths and does **not** configure Devin Local. The `gemini` target configures Gemini CLI, not Antigravity; Google has ended Gemini CLI for some account types (`gemini-code-assist`).
- **MCP.** Manual config is a local stdio server: absolute path to `snyk`, args `mcp -t stdio`. Profiles: `lite` (essential scans), `full` (default; adds container, IaC, SBOM, secrets, AI-BOM, package health), `experimental` (full plus tools under evaluation). Set `--profile` or `SNYK_MCP_PROFILE`. That profile does not install or remove hooks. MCP alone does not install hooks, commands, or skills.
- **Auth and org.** `snyk auth`, then pick the Organization if you belong to more than one. Enable Snyk Code when you want first-party scans. Codex: approve installed hooks or non-interactive sessions skip them. Start a new assistant session after install.
- **Alternatives.** Semgrep Guardian when the scan should use Semgrep rules and a hosted MCP for triage. `snyk test` in CI when the gate must fail the job without an agent.
- **Caveats.** Hooks and MCP entries store the **absolute path** of the CLI that ran the install. Move or reinstall the binary and those entries keep the old path until you run `snyk studio install --experimental` again. `--experimental` on the Studio command is required and is separate from the MCP tool profile. `snyk studio logs --experimental` separates hook scans from a scan you asked for over MCP. Uninstall: `snyk studio install --experimental --uninstall`.

## Sources

- [Getting started with Snyk Studio](https://docs.snyk.io/agent-security/agentic-security-with-snyk-studio/getting-started-with-snyk-studio) — accessed 2026-11-17
