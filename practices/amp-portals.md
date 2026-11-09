---
id: amp-portals
title: Amp Portals — orb previews vs runner --remote-control-portals
tags: [amp, ux, hosting, security]
status: active
updated: 2026-11-09
when_to_use: Opening an Amp Portal tab for a dev server, declaring .amp/services.yaml, or enabling portals on a local runner
---

## Summary

**Amp Portals** are authenticated URLs that expose web servers from a thread’s execution environment so you can open a dev server or preview from the **Portal tab**. **Orb** portals (default `*.onamp.dev`) can be reviewed in-page and optionally made public for a limited time. **Runner** portals (2026-11-09) need `amp --no-tui --remote-control-portals` (or macOS **Allow Portals**); they cannot be made public and have no review button. Not the thread voice/video Space tab (`amp-spaces`), not Cursor live apps (`cursor-cloud-apps`), and not the runner **Desktop** tab (`--desktop`).

## Notes

- Ask Amp to start the app, then open the Portal tab (web, macOS, iPhone/iPad). Prefer declared services over `nohup` / tmux: commit `.amp/services.yaml` (`command` listening on `$PORT`, optional `cwd` / `health` / `portal` / `portals` / `review` / `platforms`). Run `amp orb services ensure` from the repo root (or let the Portal tab ensure a declared link). Amp sets `PORT`, `PUBLIC_URL`, and `AMP_THREAD_ID` — do not set those in `env`. Use the printed portal URL, not raw localhost. Ignore generated `.amp/portals/`.
- Orb extras: floating **review** widget (select an element; comments go to the thread; `review: false` or `x-amp-review-widget: off` to disable). **Make Public For** 1h / 3h / 1d / 7d — anyone with the link, no Amp sign-in; public access is **that port only** and does not grant the thread. The agent uses `manage_amp` (`portals` / `set-public-access`) and **asks before** going public. Workspace can disable outside sharing; self-hosted orbs can disable Public Portals. `amp orb portal list` shows public-until; the CLI cannot change access.
- **Runners (2026-11-09):** start with `--remote-control-portals` (macOS Settings › Runner › **Allow Portals**, off by default, restarts the runner). Reload the thread if there is no Portal tab. You can open every portal on **your** runner; workspace members who can **write** the thread can too when the runner is **shared** (`--share` / Share With Workspace). Personal-only runners stay private. No public links, no review button. Terminal (`--remote-control-terminal`) and Desktop (`--desktop`) are separate flags.
- Portal auth is not app auth. Amp sets `X-Amp-Authenticated` on proxied requests (`amp-user`, `workspace-member`, `collaborator`). Browser requests **between two portal hosts** are unsupported (CORS preflight drops portal auth) — proxy API calls through the frontend. Vite 6.1+ usually allows the portal host via `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`; do not `allowedHosts: true` outside an orb.

## Sources

- [Portals on Your Runner (news)](https://ampcode.com/news/runner-portals) — accessed 2026-11-09
- [Runners](https://ampcode.com/docs/cli/runners) — accessed 2026-11-09
- [Portals & Desktop](https://ampcode.com/docs/orbs/portals) — accessed 2026-11-09
- [Use Your Mac as a Runner](https://ampcode.com/docs/apps/mac/runner) — accessed 2026-11-09
- [Threads](https://ampcode.com/docs/threads) — accessed 2026-11-09
