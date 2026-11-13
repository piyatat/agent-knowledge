---
id: github-copilot-app
title: GitHub Copilot app — desktop agent director
tags: [github, ux, orchestration, cli]
status: active
updated: 2026-11-13
when_to_use: Directing Copilot from the desktop app instead of VS Code, CLI, or github.com, or contrasting it with those surfaces
---

## Summary

The **GitHub Copilot app** is a desktop director for **parallel agent sessions** (local worktrees, local sandbox, or cloud sandbox), GitHub issues/PRs/CI, automations, canvases, and **Projects**. It is built on **Copilot CLI + SDK**, not a second harness. Not VS Code Agent Host (`vscode-agent-host`), not the Actions cloud agent (`github-copilot-coding-agent`), and not Cursor Agents Window.

## Notes

- Plans: docs list it for **all Copilot plans**. Business/Enterprise need the **Copilot app** policy (default **on**, **separate** from the Copilot CLI policy). GHEC with data residency uses the `*.ghe.com` hostname at sign-in. macOS, Linux, Windows (Windows can run sessions in **WSL2**).
- **GHES GA** (app **1.2.0+**, 2026-11-13; was opt-in preview): sign in to **GitHub.com or GHE.com first**, then Settings → Accounts → Add account → **GitHub Enterprise Server** to work with that instance’s repos, issues, and PRs. You still need a cloud account with a Copilot license (or a configured model provider) to send requests. **Cloud sessions are not available** for GHES.
- Sidebar: Sessions (grouped by repo/folder), Chats (no branch/workspace), Issues, Pull requests, Automations, Customize (plugins/skills/MCP/canvases), Search, **Projects** (`github-copilot-projects`). Connect a local folder, clone from GitHub, or clone a Git URL (Azure DevOps and other remotes).
- Session modes: **Interactive**, **Plan**, **Autopilot**. Pick a model (including BYOK) and effort per session. Cloud sandbox sessions can be steered from Mobile / github.com / CLI / VS Code (`github-copilot-sandbox`). Local computer use: `github-copilot-computer-use`. Content exclusions apply (`github-copilot-content-exclusions`).
- Typical loop: start from a repo or issue → agent branch + edits + tests → review diff → Create PR → CI + review **inside the app**. Use **Chats** to scope before opening a full session; start a **new** session when the task changes. `/chronicle` (including `cost tips`) inspects prior session usage.
- **2026-11-06 weekly (week of Nov 2):** set up **Agent Merge** from a pull request (`github-copilot-agent-merge`) — it now **stays enabled** while required checks or rules are pending. Check reviewer status, request extra reviews, and select comment text to quote or discuss. At the context limit, **compact** the conversation or inspect what is using space from the error. Drop files onto **New** in the sidebar to start a session; CSV/TSV open as tables (sticky headers, view source). Archive pinned sessions whose PRs merged or closed; pin/unpin several at once; un-nest chats without losing the thread. My Work supports **more than ten** saved custom views. Opt-in **personal instructions for assisted approval** apply to **local** sessions (`github-copilot-assisted-permissions`).
- Treat MCP, skills, canvases, and automations as tools you chose to run. Public-code matching can still appear even when “Suggestions matching public code” is Block.

## Sources

- [GitHub Copilot app](https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app) — accessed 2026-11-02
- [Getting started with the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started) — accessed 2026-11-02
- [GitHub Copilot app, Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases/) — accessed 2026-11-02
- [Application card: GitHub Copilot Agents](https://docs.github.com/en/copilot/responsible-use/agents) — accessed 2026-11-02
- [GitHub Copilot weekly releases — November 2](https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2/) — accessed 2026-11-07
- [GitHub Enterprise Server support in the GitHub Copilot app](https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app/) — accessed 2026-11-13
- [Signing in to GitHub Enterprise Server in the GitHub Copilot app](https://docs.github.com/en/enterprise-server@3.22/copilot/copilot-on-ghes/sign-in-on-copilot-app) — accessed 2026-11-13
