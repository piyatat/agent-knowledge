---
id: github-copilot-autopilot
title: Copilot CLI Autopilot — local multi-step vs /delegate
tags: [github, cli, permissions, orchestration]
status: active
updated: 2026-10-24
when_to_use: Switching Copilot CLI into Autopilot, setting --max-autopilot-continues, or choosing Autopilot vs /delegate vs --allow-all
---

## Summary

**Autopilot** is Copilot CLI’s local unattended loop: after one prompt it keeps taking model turns until the task is done, you press Ctrl+C, something blocks progress, or the continuation cap hits (default **5**; `--max-autopilot-continues`). It is not `--allow-all` / `/yolo` (permissions only) and not `/delegate` / `&` (those start **cloud agent** on GitHub). Pair Autopilot with a sandbox unless you truly want `--yolo` on the host (`github-copilot-sandbox`).

## Notes

- Enter Autopilot with **Shift+Tab** until the status bar says autopilot, or `copilot --autopilot --yolo --max-autopilot-continues 10 -p "…"`. Interactive path after **plan** mode: “Accept plan and continue in Autopilot execution mode.” Sticky by default — the next prompt stays in Autopilot. Set `stayInAutopilot: false` via `/settings stayInAutopilot false` or `~/.copilot/settings.json` to drop back to interactive after each task (`github-copilot-cli-settings`). That setting does **not** keep working after the agent decides it is done.
- First entry without full permissions offers: enable all (recommended), Manual Approval for this session, or cancel. Manual Approval **auto-denies** any tool that would have asked. Grant later with `/allow-all` (`/yolo`) — those slashes do **not** toggle off. CLI **1.0.97**: Autopilot also denies a `preToolUse` hook `"ask"` instead of parking on a dialog nobody is watching (`github-copilot-hooks`).
- `--allow-all` alone stays in the normal interactive flow: tools/paths/URLs skip approval, but Copilot still waits at decision points. `--no-ask-user` suppresses clarifying questions only — it does **not** spend extra AI credits on continuation turns. Autopilot is the one that initiates those later model calls (and bills them) without you.
- `/delegate` / `& prompt` commits a checkpoint branch and opens a **draft PR** on cloud agent. Use it when the laptop can go away. Autopilot stays on this machine. Sandbox + Autopilot: in-sandbox work proceeds; sandbox **escapes** (e.g. write outside cwd) are denied.
- Best for a written plan, tests, refactors, or CI fixes. Vague goals burn credits and produce hard-to-reuse diffs. Cap continuations in `-p` / CI so a loop cannot run unbounded (`github-copilot-cli`).
- CLI **1.0.104-2** (pre-release, 2026-10-24): **interactive and SDK** Autopilot keep waiting for attached background tasks instead of stopping when `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` elapses. **`-p --autopilot` still honors** that timeout — do not assume headless Autopilot waits forever.

## Sources

- [Allowing GitHub Copilot CLI to work autonomously](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/autopilot) — accessed 2026-10-13
- [Delegating tasks to Copilot](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/delegate-tasks-to-cca) — accessed 2026-10-13
- [copilot-cli 1.0.97](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-13
- [copilot-cli 1.0.104-2](https://github.com/github/copilot-cli/releases/tag/v1.0.104-2) — accessed 2026-10-24
