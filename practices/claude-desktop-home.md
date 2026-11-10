---
id: claude-desktop-home
title: Claude Desktop desktopHome — Unified Claude default (2026-11-10)
tags: [claude, governance, ux, mdm]
status: active
updated: 2026-11-10
when_to_use: MDM/Admin Console for Claude Desktop Chat vs Cowork, or keeping Cowork off after 2026-11-10
---

## Summary

Claude Desktop **`desktopHome`** (`standard` | `off`) is the MDM/bootstrap key for **Unified Claude** (Chat and Cowork in one home). From **12:00 PM PT on 2026-11-10**, launches of **4.4212.0–4.23118.1** treat an **unset** key as `standard` — Cowork turns **on** even where `coworkTabEnabled` is `false`. **v5.1231.0** (2026-11-10) delays that flip **where only Code is on** until **12:00 PM PT 2026-12-17**. Code stays a separate tab (`claude-code-desktop`). Not a CLI setting (`claude-code-settings`).

## Notes

- Values: `standard` = Unified Claude (one message box; on a Cowork-capable device a home-screen send starts a **Cowork** session). `off` = Chat and Cowork off, leaving **Code** only — or nothing if `isClaudeCodeForDesktopEnabled` is also false. An unrecognized non-empty value (e.g. `Standard`) reads as `off`. **Set `desktopHome: off` explicitly** to keep only Code — do not rely on an unset key plus `coworkTabEnabled: false`. From 12:00 PM PT Nov 10 the Setup window’s Chat/Cowork/Advanced-file-analysis switches are gone; the Unified Claude switch (which sets `desktopHome`) replaces them.
- Deprecated (ignored from **12:00 PM PT 2026-12-17** on releases after 4.4212): `coworkTabEnabled`, `chatTabEnabled`, `chatAdvancedFileAnalysisEnabled`. Users see an in-app warning from **2026-11-17** while any remain set. Once `desktopHome` is set (or Unified is on by default), those three are ignored. Limit Cowork with `disabledBuiltinTools` / `builtinToolPolicy` / `allowedWorkspaceFolders` / `scheduledTasksEnabled` instead — e.g. `"Bash"` in `disabledBuiltinTools` also applies in Code.
- Retention: new Unified conversations that are Cowork tasks use **`coworkSessionRetentionDays`**, not `chatSessionRetentionDays`. Set **both** if you use Chat retention. Admins see a warning when the two differ. A deployment that has Cowork on, sets Chat retention, and does **not** set matching Cowork retention **keeps its current view** (does not flip to Unified) — do not rely on that as a long-term off switch.
- Rollout: Enterprise Admin Console → Capabilities → “Opt into the new Chat and Cowork unified view,” or set `desktopHome: standard` in MDM/bootstrap. New Admin Console orgs start with Unified on. First Cowork-capable conversation may download the VM workspace bundle (>1 GB) from `downloads.claude.ai`. Devices that cannot launch the VM stay on non-VM Unified (Chat-like). Claude apps gateway warns when a policy with no `desktopHome` still relies on `coworkTabEnabled: false` or `chatSessionRetentionDays` (`claude-code-gateway`).
- Other 3P config in the same window: `sessionRetentionHold` is also deprecated (ignored 2026-12-17; raise all three retention periods to 3650 days first if you were holding idle sessions). Unset `coworkEgressAllowedHosts` no longer keeps **Code** shell off-network on a device whose only config is a local file unless `blockReadsOutsideWorkingDirectories` is on; an empty list still allows no host where the Code sandbox runs.

## Sources

- [Cowork changelog](https://claude.com/docs/cowork/changelog) — accessed 2026-11-10
- [Unified Claude in Claude Desktop on 3P](https://claude.com/docs/third-party/claude-desktop/unified-claude) — accessed 2026-11-10
- [Configuration reference — desktopHome](https://claude.com/docs/third-party/claude-desktop/configuration) — accessed 2026-11-10
- [Configuration changelog](https://claude.com/docs/third-party/claude-desktop/configuration-changelog) — accessed 2026-11-10
- [v2.1.319](https://github.com/anthropics/claude-code/releases/tag/v2.1.319) — accessed 2026-11-08
