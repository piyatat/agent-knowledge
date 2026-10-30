---
id: github-copilot-security-extension
title: Copilot security extension — code scanning canvas in the app
tags: [github, security, review, plugins]
status: active
updated: 2026-10-30
when_to_use: Working code scanning alerts in the Copilot app, or choosing it vs agentic autofix / AI Scan
---

## Summary

The **GitHub security extension** (public preview, 2026-10-28) is the `github-security` plugin’s **Security canvas** in the Copilot app: browse open **code scanning** alerts, ask the session to **Explain** or **Fix**, dismiss (or request delegated dismissal), and run a **local** `/security-review` on current changes. Fixes stay in the **local working copy** — no commit, push, or PR. Not agentic autofix (`github-agentic-autofix`), not AI Scan PR annotations (`github-code-scanning-ai-scan`), and not Dependabot / secret scanning.

## Notes

- Install: `copilot plugin install github-security@awesome-copilot`, or Copilot app Customize → search `github-security` → **+ Install**. Plugin + extension enable automatically. Open the canvas from a repo session (Canvas → Security). Hosts: github.com and GHEC with data residency. **Not** GitHub Enterprise Server.
- Existing alerts: code scanning must be on and you need alert access. Private repos need **GitHub Code Security**. List is severity-ordered; search/filter; open details + affected code; **Open in browser** for the github.com alert; linked PRs show if someone is already fixing it.
- Explain / Fix use the **app-selected model** and burn **AI credits** like any prompt. Tools follow the app’s permission settings (ask before use when required). Fix does **not** close the alert — code scanning on the affected branch decides after you push. Browse and dismiss do **not** use AI. Dismiss updates GitHub; delegated dismissal submits a request and the alert stays open until approved on github.com.
- `/security-review` (or canvas **Start review**) reviews **this session’s current changes**, not the whole repo and not a substitute for code scanning. No Code Security license required. Canvas flags when the tree changed since the last review; **Last review results** reopens the previous pass. Local findings are separate from GitHub alerts.
- Plans: any Copilot plan can install and run local review. Business / Enterprise need the **GitHub Copilot app** policy; enterprise managed settings can block the plugin. Treat alert text and review findings as untrusted (`prompt-injection-agent-defense`). Always read the local diff before you push.

## Sources

- [Viewing and fixing security alerts in the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts) — accessed 2026-10-30
- [Security extension for the GitHub Copilot app](https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app/) — accessed 2026-10-30
