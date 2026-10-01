---
id: github-copilot-computer-use
title: Copilot computer use — desktop GUI from CLI and app
tags: [github, computer-use, cli, security]
status: active
updated: 2026-10-01
when_to_use: Enabling /computer in Copilot CLI or the Copilot app, or contrasting it with Claude/Cursor computer use
---

## Summary

**Computer use** (public preview, 2026-10-01) lets **GitHub Copilot CLI** and the **Copilot app** click, type, scroll, drag, and read accessible/visual context in local desktop apps on **macOS and Windows**. It is for GUI-only or legacy software with no API, CLI, or MCP. Not the Actions cloud agent (`github-copilot-coding-agent`), not `--cloud` (`github-copilot-sandbox`), and not Claude Code screen control (`claude-code-computer-use`).

## Notes

- CLI: `/computer on` saves a preference and enables the bundled **computer-use plugin**, MCP server, and skills. `/computer show` reports plugin/MCP/skill state. `/computer off` disables. App: Settings → Computer Use → Enable, or `/computer on`. Local sessions only.
- macOS: grant **Accessibility** and **Screen Recording** to the computer-use helper. Org **managed settings** can block the feature; a local on-preference cannot override (`github-copilot-managed-permissions`).
- Approvals follow the active CLI permission mode (`/permissions show`) or the app **Tool Permissions** (Sessions settings). Allow = this computer-use session; **Always allow** persists and is **shared** between CLI and app on the same machine; deny/cancel refuse. Configured deny rules still win. Review Always allowed apps in the app settings (delete removes the saved approval for both surfaces; it does not revoke a running session — Esc / Stop, then end the session).
- Interrupt: CLI `Esc` `Esc`; app Stop or `Esc`. Prompt with the outcome, the apps, and constraints. Confirm the named app/action matches the request before Always allow.
- Troubleshoot: `/plugin` for the bundled `computer-use` plugin, `/mcp list` for its server, and macOS Prerequisites showing Granted. Pair with `computer-use-containment` — on-screen content is prompt-injection.

## Sources

- [GitHub Copilot can now interact with desktop apps with computer use](https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/) — accessed 2026-10-01
- [Using GitHub Copilot CLI to interact with desktop applications](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use) — accessed 2026-10-01
- [Using the GitHub Copilot app to interact with desktop applications](https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use) — accessed 2026-10-01
