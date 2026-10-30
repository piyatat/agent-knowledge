---
id: vscode-agent-automations
title: VS Code automations — local clock vs cloud GitHub runs
tags: [vscode, automations, cron, orchestration]
status: active
updated: 2026-10-30
when_to_use: Scheduling a local Agents-window task, or creating a cloud Copilot automation from VS Code 1.144
---

## Summary

VS Code **Automations** run a saved prompt + session config on demand, on a clock, or (cloud, preview) on GitHub issue/PR events. **Local** runs need the machine and agent up. **Cloud** (`chat.automations.cloud.enabled`, VS Code **1.144**) is a Copilot automation on GitHub (`github-copilot-automations`) and keeps running when VS Code is closed. Not Cursor Automations (`cursor-automations`) and not Codex scheduled tasks (`openai-codex-automations`).

## Notes

- Automations are on by default (`chat.automations.enabled`). If the sidebar has no Automations entry, check the setting. Cloud create needs **Run in the Cloud** plus an eligible **private** github.com repo (write access; public repos unsupported). Turning a setting off **hides** editor controls; it does **not** stop an already-saved cloud schedule — disable or delete on GitHub.
- **Local:** workspace or Chat (no files), agent/model/permissions, optional **New Worktree**. Triggers: Manual / Hourly / Daily / Weekly (local time). Agent Host schedules need a **running Agent Host**; others need a **running VS Code window**. A missed tick **may** catch up once. One session at a time. Export/import `.automation.md` (name, prompt, schedule, format version, portable id — **omits** workspace, provider, model, permissions, enabled, history). Import opens New Automation with Enabled **cleared**.
- **Cloud:** toggle **Run in the Cloud**. Tools start empty — grant only what the task needs. Owner **Only me** vs **Repository** (shared; acts as Copilot) is **immutable**. Triggers: Manual / Daily / Weekly (times at `:00/:15/:30/:45`; stored UTC) or Issue / Pull Request events with GitHub’s filter catalog (query, comment text, labels, assignees, changed paths, review states). Default ignores users without write. No `.automation.md` export. Event-triggered cards have no **Run now**. Follow-up continues that run; it does not edit the saved prompt.
- Chat can create an automation through the normal tool-approval flow — review before allowing. Templates: built-in and Agent Plugin (Plugin badge). Disabling a plugin hides templates; already-created automations stay. Cloud runs do **not** use local MCP, custom agents, or local approval settings.
- Treat the prompt and issue/PR text as untrusted (`prompt-injection-agent-defense`). For unattended local terminals, pair with `vscode-agent-sandboxing` rather than Allow all.

## Sources

- [Create and manage agent automations](https://code.visualstudio.com/docs/agents/run/automations) — accessed 2026-10-30
- [Create and manage Copilot Automations in Visual Studio Code](https://github.blog/changelog/2026-10-28-create-and-manage-copilot-automations-in-visual-studio-code/) — accessed 2026-10-30
- [Visual Studio Code 1.144](https://code.visualstudio.com/updates/v1_144) — accessed 2026-10-30
- [Copilot automations](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations) — accessed 2026-10-30
