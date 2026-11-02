---
id: github-copilot-projects
title: Copilot Projects — multi-repo goal in the Copilot app
tags: [github, orchestration, automations, context]
status: active
updated: 2026-11-02
when_to_use: Coordinating Copilot work across repos or non-repo context from the Copilot app, or contrasting it with a single session / Copilot Spaces / Cursor Projects
---

## Summary

**Copilot Projects** (public preview, 2026-10-28) live in the **Copilot app**. You give Copilot a **standing goal**; it starts sessions, recurring automations, and artifacts toward that goal. Projects may span **several repositories** or **no repository**. Not a Copilot Space (`github-copilot-spaces`), not a repo **shared automation** (`github-copilot-automations`), not Cursor Projects (`cursor-projects`), and not a one-shot cloud-agent assign (`github-copilot-coding-agent`).

## Notes

- Create: app sidebar **Projects** → New. Optionally add repos (suggested or search owner/name). You can start with **zero** repos. Describe the goal, initial tasks, results, and constraints in the prompt. **Library** holds User files you add and Agent artifacts the sessions produce — tell Copilot which sources to use per task.
- Overview groups work: **Needs input** (decisions, reviews, permission requests), **Open** (open PRs with session status + line counts), **Working**, **Done**. Open a session to read the conversation/plan/PR or **Steer this session**. Follow-ups stay on the **project** conversation so later batches can compare against earlier findings.
- Recurring work: ask in the project prompt (schedule + expected result + sources). **Automations** tab shows next run; pause / edit schedule / delete from that tab. Standalone app automations remain a different list (`github-copilot-automations`). Changelog example: a promo video whenever a feature lands.
- Connected tools (Slack, Figma, …) and image gen/edit are app-level context, not a substitute for pinning files in Library. For a **single-repo** task, start a session on that repo instead of a Project (`github-copilot-app`).
- Preview: subject to change. Do not treat Copilot as a merge gate. Library files and Slack/Figma text are untrusted (`prompt-injection-agent-defense`).

## Sources

- [Working with projects in the GitHub Copilot app](https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects) — accessed 2026-11-02
- [GitHub Copilot app](https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app) — accessed 2026-11-02
- [GitHub Copilot app, Universe releases](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases/) — accessed 2026-11-02
