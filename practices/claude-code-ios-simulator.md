---
id: claude-code-ios-simulator
title: Claude Code iOS Simulator pane — Desktop vs CLI computer use
tags: [claude, computer-use, ux, preview]
status: active
updated: 2026-10-17
when_to_use: Running or testing an iOS app from Claude Code Desktop, or contrasting the pane with CLI screen control
---

## Summary

Claude Code **Desktop** (macOS, public beta) opens an **iOS Simulator pane** beside chat when Claude builds, installs, launches, or checks an iOS app. The pane drives Apple’s simulator **directly** — no computer use, no Accessibility / Screen Recording, no takeover of other windows. The **CLI** still reaches the simulator only through computer use (`claude-code-computer-use`). Not a physical device, not Chrome (`claude-code-chrome`), and not Cowork.

## Notes

- Plans: Pro / Max / Team / Enterprise. **Not** HIPAA-configured Enterprise orgs. Requires Claude Desktop **v1.24012.0+**, a Mac, and Xcode with the iOS platform (26.x or 27 recommended). `xcode-select -p` picks which Xcode; change it, then quit/reopen Desktop. **Local sessions only** — cloud and SSH cannot see simulators on your Mac.
- No slash command. Ask to run or verify the app (“Build the app and run it in the simulator to check onboarding”). Name a device to target it. Title-bar **iOS Simulator** → Attach / pick a device (a shut-down device boots). First use of a device asks consent (control + screenshots, once per device, not per session). Screenshots go to Anthropic under normal retention — do not sign into real accounts on a device Claude uses. Decline still lets **you** tap; **Let Claude use it** later re-enables Claude.
- You and Claude share the device. Hardware shortcuts match Simulator (Home `Cmd+Shift+H`, lock `Cmd+L`, volume, rotate). `Cmd+S` / `Cmd+R` save screenshot/recording to Desktop. **Claude is using this device** badge: wait before tapping. Parallel sessions do **not** share a device (up to **4** panes per session). Desktop shuts down simulators **it** booted on quit, archive, or 10 minutes after Detach; devices you booted in Simulator / Device Hub stay up.
- Permission mode still gates **building** (`xcodebuild` runs project scripts on the Mac) and **opening a URL** on the device (deep link / Safari). Org kill-switches: `disableMobileSimulatorTools` (pane stays for your taps) and `requireCoworkFullVmSandbox` (pane and tools off). Physical hardware: run from Xcode yourself and attach a screenshot.

## Sources

- [Test iOS apps in the simulator](https://code.claude.com/docs/en/desktop-ios-simulator) — accessed 2026-10-17
- [Desktop application](https://code.claude.com/docs/en/desktop) — accessed 2026-10-17
- [Let Claude use your computer from the CLI](https://code.claude.com/docs/en/computer-use) — accessed 2026-10-17
