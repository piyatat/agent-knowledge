---
id: semgrep-guardian
title: Semgrep Guardian — scan agent-written code
kind: tool
tags: [semgrep, security, mcp, plugins]
status: active
updated: 2026-11-16
when_to_use: Scanning code a coding agent just wrote, or triaging Semgrep findings from the editor over MCP
---

## Summary

**Semgrep Guardian** hooks a coding agent so Semgrep Code, Supply Chain, and Secrets scan files as the agent writes them. Findings go back to the agent, which **decides whether to regenerate**. The **hosted MCP server (beta)** is the separate path for searching and triaging findings already on Semgrep AppSec Platform. Guardian does not replace CI, and it is not Copilot code review or GitHub code scanning.

## Notes

- **Recommended plugins** use Semgrep’s hosted server and a one-time browser OAuth sign-in. No local CLI. Claude Code: `claude plugin install semgrep@claude-plugins-official`. Codex: add `https://github.com/semgrep/guardian` as a marketplace (sparse `.claude-plugin` and `plugin`), then `codex plugin add semgrep@semgrep-marketplace`, and ask the session to log in. Copilot CLI: `copilot plugin marketplace add https://github.com/semgrep/guardian`, then `copilot plugin install guardian-copilot@semgrep-marketplace`. Those plugins scan with the **`guardian-default`** ruleset (Guardian Policies can change it) and store OAuth in `~/.semgrep/guardian.yml`. Claude Code and Codex plugins run in native Windows shells; the **Copilot plugin does not support Windows**.
- **Cursor and other agents** need the Semgrep CLI (Python **3.10+**): `pipx install semgrep` or `uv tool install semgrep`, then `semgrep login && semgrep install-semgrep-pro`. Homebrew is documented as best-effort and often behind. In Cursor, add **Semgrep** from the plugin marketplace, restart, and run **`/setup-semgrep-plugin`**. Hooks are `afterFileEdit` and `stop`, plus MCP tools. This path has **no** Guardian-specific policy: it pulls every rule enabled on Policies, and credentials live in `~/.semgrep/settings.yml`. If `guardian.yml` has OAuth, that account wins over a token in `settings.yml`.
- **Hosted MCP (beta).** Requires an AppSec Platform org on **Teams or Enterprise** (trials count) and an HTTP MCP client. Multi-tenant URL `https://semgrep.dev/api/mcp`; read-only `https://semgrep.dev/api/mcp/read-only` (single-tenant uses `YOUR_TENANT.semgrep.dev`). OAuth is recommended. A token is `Authorization: Bearer` from `SEMGREP_APP_TOKEN`, not pasted into a committed file. **Web API** tokens can read and write; **Read-only** cannot mutate; **Agent (CI)** is scan read/write; **Member** tokens are not supported. The read-only URL hides mutating tools. It does **not** shrink the credential — pair it with a Read-only token if the token itself must be limited.
- **Fleet.** Claude managed settings can set `enabledPlugins` for `semgrep@claude-plugins-official`. Codex configuration defaults can enable the plugin; Semgrep says those defaults are **not enforced**. A Cursor **team marketplace** (Teams or Enterprise, admin-only) can import `semgrep/cursor-plugin` and set the plugin Required. A developer’s own public-marketplace install is outside that mode.
- **Alternatives.** `semgrep ci` or GitHub code scanning when the gate must fail the pull request. Copilot security review when the reviewer should comment on GitHub. Guardian when the fix should happen in the agent session before commit.
- **Caveats.** The agent can ignore a finding and keep the code. Hosted MCP is beta and only does what that user’s role can do in the platform. Do not commit tokens.

## Sources

- [Semgrep Guardian](https://docs.semgrep.dev/semgrep-guardian/overview) — accessed 2026-11-16
- [Guardian quickstart](https://docs.semgrep.dev/semgrep-guardian/quickstart) — accessed 2026-11-16
- [Choose your Guardian setup](https://docs.semgrep.dev/semgrep-guardian/choose-your-setup) — accessed 2026-11-16
- [Guardian on Cursor](https://docs.semgrep.dev/semgrep-guardian/ide-setup/cursor) — accessed 2026-11-16
- [Install the Semgrep CLI for Guardian](https://docs.semgrep.dev/semgrep-guardian/install-cli) — accessed 2026-11-16
- [Guardian enterprise deployment](https://docs.semgrep.dev/semgrep-guardian/enterprise-deployment) — accessed 2026-11-16
- [Semgrep MCP (beta)](https://docs.semgrep.dev/mcp/overview) — accessed 2026-11-16
- [Semgrep MCP authentication](https://docs.semgrep.dev/mcp/authentication) — accessed 2026-11-16
