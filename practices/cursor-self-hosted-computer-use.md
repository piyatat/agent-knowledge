---
id: cursor-self-hosted-computer-use
title: Self-Hosted Machines — computer use and Linux desktop sharing
tags: [cursor, computer-use, sandbox, security]
status: active
updated: 2026-09-02
when_to_use: Letting a My Machines or Team Pool worker click/type/screenshot, or watching a Linux agent desktop from Cursor
---

## Summary

`--computer-use` is an **opt-in worker flag** (never enabled by the server). macOS and Linux workers can click, type, screenshot, and drive Chrome/Chromium. **`--share-desktop` is Linux-only**. Update the CLI first (`agent update`). Managed Cloud Agent desktop behavior is `cursor-cloud-pr-artifacts`, not this page.

## Notes

- Start: `agent worker --computer-use start` (add `--pool <name>` for Team Pools). Flags go **before** `start`. `agent worker debug` is the preflight; on macOS it only confirms the helper app is installed, not permissions.
- **macOS:** CLI downloads `Cursor Computer Use.app` to `~/.cursor/cursor-computer-use/` from `downloads.cursor.com` (bundle `co.anysphere.cursor-computer-use`, Team ID `DCNK4UB866`). Needs a signed-in GUI session plus **Accessibility** and **Screen Recording** granted to that app — not Terminal, Cursor, or Cursor Agent Helper. MDM can silently allow Accessibility on most versions (Apple deprecates silent allow from macOS 26.2); Screen Recording always needs a human. Grant once on a template Mac, verify a screenshot task, then snapshot. `CUA_SERVICE_APP` points at a pre-deployed bundle. Sequoia+ may re-prompt Screen Recording monthly.
- **Linux:** install `dbus-x11 ffmpeg tigervnc-standalone-server x11-utils x11-xserver-utils xdotool xfce4` yourself. Display order: `--display :N` (fail if missing) → inherited `DISPLAY` → managed TigerVNC+Xfce. Bake packages into pool images. Chrome/Chromium is optional but needed for browser drive.
- **Desktop sharing:** `--share-desktop` [`view` | `view_and_control` (default)]. Isolated VNC desktop, fail-closed input filter, clipboard blocked. Uses Cursor Agent Helper, not Computer Use. Pixels leave only on the existing outbound connection.
- Treat the desktop as an injection surface (`computer-use-containment`). Artifacts still upload to Cursor-managed S3 unless you block that host.

## Sources

- [Computer use and desktop sharing](https://cursor.com/docs/cloud-agent/bring-your-own-machine/computer-use) — accessed 2026-09-02
- [Self-Hosted Machines](https://cursor.com/docs/cloud-agent/self-hosted) — accessed 2026-09-02
- [Self-hosted machines (changelog)](https://cursor.com/changelog/self-hosted-machines) — accessed 2026-09-02
