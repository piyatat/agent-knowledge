---
id: github-copilot-remote-control
title: Copilot CLI remote control — steer a local session from web or mobile
tags: [github, cli, session, security]
status: active
updated: 2026-10-01
when_to_use: Enabling /remote or --remote on Copilot CLI, or contrasting it with Claude Code Remote Control
---

## Summary

**Remote control** lets the same GitHub account monitor and steer a **running local Copilot CLI** session from github.com or GitHub Mobile. Tools, shell, and files stay on the host machine. It is **not** default session sync (view-only), not the Actions cloud agent (`github-copilot-coding-agent`), and not Claude Code Remote Control (`claude-code-remote-control`).

## Notes

- Enable: `/remote on` (status / redisplay with `/remote`; off with `/remote off`), start with `copilot --remote`, or set `"remoteSessions": true` in `~/.copilot/settings.json`. `--remote` / `--no-remote` beat the file. JetBrains: Tools → GitHub Copilot → Chat → Enable Copilot CLI Remote. Resume of a remote-enabled session (`--continue` / `--resume`) re-enables remote control.
- Interactive only — not `-p` / `--prompt`. The host must stay awake and online. `/keep-alive on|off|busy|30m|8h|1d` (bare number = minutes). Both the local TTY and the remote UI are live; the **first** answer to a prompt wins.
- Remote can approve/deny tool, path, and URL permissions; answer questions; accept/reject plans; send new prompts; switch modes; cancel current work. **Slash commands** (e.g. `/allow-all`) are not available remotely.
- Listing: GitHub-hosted repo → that repo’s Agents tab **and** github.com/copilot/agents. Non-GitHub or no-repo sessions appear only on the agents page as “no repository.” Unresolvable remotes disable remote control (“Remote session disabled”). Sessions are **user-specific**. QR: `/remote` then `Ctrl+O` (empty input).
- Org/enterprise **“Store local sessions in the Cloud”** must be **View and control** (unconfigured = neither sync nor remote). Enterprise `remoteControl` managed setting can require SSO on the controlling client or disable remote of sessions **hosted on that device**. Pair with `github-copilot-managed-permissions`. Events stream to GitHub; remote commands are polled back into the local CLI.

## Sources

- [About remote control of GitHub Copilot CLI sessions](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-control) — accessed 2026-10-01
- [Steering a GitHub Copilot CLI session from another device](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/steer-remotely) — accessed 2026-10-01
- [Remote control for Copilot CLI sessions now generally available](https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code/) — accessed 2026-10-01
