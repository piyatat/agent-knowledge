---
id: claude-code-computer-use
title: Claude Code computer use — desktop GUI vs Chrome
tags: [claude, computer-use, cli, security]
status: active
updated: 2026-10-01
when_to_use: Enabling Claude Code CLI or Desktop screen control, or contrasting it with Claude in Chrome
---

## Summary

**Computer use** is a Pro/Max **research preview** that lets Claude Code open apps, click, type, and see the screen on the real desktop. **CLI** is **macOS only** (built-in `computer-use` MCP, off until `/mcp` → Enable). **Desktop** is macOS and Windows (Settings → General → Computer use). Not Team/Enterprise, not `-p`, not Bedrock / Agent Platform / Foundry, and not Chrome tabs (`claude-code-chrome`). Cowork uses the same Desktop engine (`claude-cowork`).

## Notes

- Prefer a more precise tool first: MCP/connector, Bash, then Claude in Chrome. Reserve screen control for native apps, simulators, or GUI-only tools. Desktop’s **iOS Simulator pane** does not need computer use.
- CLI: first use prompts macOS **Accessibility** + **Screen Recording** (restart the terminal app after Screen Recording). Per-project enable. Approvals are **per app, this session**; Claude lists extra permissions (e.g. clipboard) and how many other apps will be hidden. Desktop: Windows toggle is immediate; macOS needs the same OS permissions. Desktop can keep a **Denied apps** list and an auto-unhide toggle; CLI always unhides and has no deny list yet. Dispatch-spawned Desktop approvals last ~30 minutes.
- Sentinel warnings before Terminal/iTerm/VS Code/Warp (shell-equivalent), Finder (any file), System Settings. Control tiers: browsers and trading platforms **view-only**; terminals/IDEs **click-only**; other apps full control.
- One session holds a **lock** until that process exits (crash releases it). Other apps hide while Claude works; the **terminal window stays visible and is excluded from screenshots**. Screenshots downscale automatically (no setting). First action each turn: macOS notification “press Esc to stop”; `Esc` anywhere or `Ctrl+C` in the CLI aborts and is consumed so on-screen injection cannot dismiss dialogs.
- Trust boundary is the real desktop, not sandboxed Bash (`claude-code-sandboxing`). Pair with `computer-use-containment`.

## Sources

- [Let Claude use your computer from the CLI](https://code.claude.com/docs/en/computer-use) — accessed 2026-10-01
- [Desktop application](https://code.claude.com/docs/en/desktop) — accessed 2026-10-01
- [Let Claude use your computer in Cowork](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork) — accessed 2026-10-01
