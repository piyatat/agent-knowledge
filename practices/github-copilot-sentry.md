---
id: github-copilot-sentry
title: Copilot × Sentry — Seer send-to-agent and Copilot-app canvas
tags: [github, automations, orchestration, ops]
status: active
updated: 2026-09-18
when_to_use: Sending a Sentry Seer RCA to Copilot cloud agent, or fixing crashes from the Copilot app Sentry canvas
---

## Summary

Sentry can hand a **Seer** root-cause packet to **Copilot cloud agent** (Actions-hosted, can open a PR). The **Copilot app** also has a **Sentry canvas** (2026-09-14 weekly) for crash → investigate → PR. Not Cursor Seer handoff (`cursor-sentry`) and not “add `@sentry/mcp-server` to Copilot MCP.”

## Notes

- **Seer → Copilot**: needs Copilot Cloud Agent enabled. Sentry Owner/Manager/Admin installs **GitHub Copilot** under Settings → Integrations. First use: Start Root Cause Analysis → **Set Up GitHub Copilot** in the Seer panel (OAuth). Later: dropdown → **Send to GitHub Copilot**. Sentry shows the agent run + PR links. Consumes **Actions minutes** and **GitHub AI credits**.
- **Copilot app Sentry canvas**: review errors, stack traces, and related context in the desktop Copilot app, then have Copilot validate a fix and prepare a PR. This is an in-app investigation surface, not the Seer install flow.
- MCP (`@sentry/mcp-server` / `https://mcp.sentry.dev/mcp`) lets Copilot **read** issues; it does not replace Seer handoff. Issue text is untrusted (`prompt-injection-agent-defense`). Cloud-agent repo/secrets rules still apply (`github-copilot-coding-agent`).

## Sources

- [GitHub Copilot Agent (Sentry)](https://docs.sentry.io/integrations/coding-agents/copilot/) — accessed 2026-09-18
- [GitHub Copilot weekly releases — September 14](https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/) — accessed 2026-09-18
- [Configure MCP servers for Copilot (Sentry example)](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers) — accessed 2026-09-18
