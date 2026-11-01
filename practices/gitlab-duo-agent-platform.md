---
id: gitlab-duo-agent-platform
title: GitLab Duo Agent Platform — flows, Duo CLI, Slack
tags: [gitlab, orchestration, cli, mcp]
status: active
updated: 2026-11-01
when_to_use: Choosing a GitLab Duo flow, running duo / glab duo, or starting work from Slack @GitLab
---

## Summary

**GitLab Duo Agent Platform** (GA in GitLab **18.8+**; Credits on 18.8+) is GitLab’s multi-agent surface: **foundational flows**, **custom flows**, **Agentic Chat**, and the **Duo CLI**. UI flows run as CI/CD jobs. Not Cursor `@cursor` on GitLab (`cursor-gitlab-cloud-agents`) and not Codex GitLab review (`openai-codex-gitlab`).

## Notes

- **Flows** (custom GA in **19.2**): one or more agents with a trigger. Foundational examples: Developer (issue → MR), Code Review, Convert/Fix CI/CD, Software Development (IDE plan-then-act), plus Ultimate-only SAST/secret flows. Prerequisites: Agent Platform on; **Allow foundational flows** on the top-level group; push rules allow the service account; hosted or self-hosted runners. Monitor in **AI → Sessions**. Customize with `AGENTS.md` (`agents-md-open-format`).
- **Duo CLI** (`duo`, or `glab duo`): GA as **9.0.0** in GitLab 19.2. Interactive chat (build/plan modes) or **headless** for runners/scripts. **19.4+** uses the same Developer Flow as the UI, running **where you invoke the CLI**. Supports `AGENTS.md`, `SKILL.md`, `chat-rules.md`. Self-Managed/Dedicated admins can disable CLI access (19.2+). npm `@gitlab/duo-cli` no longer updates — use the compiled installer / `glab duo cli --update`.
- **Slack** (`@GitLab`): experiment (flag `slack_duo_agent`; on GitLab.com/Dedicated in **19.4**). Mention in a channel/thread; Duo reads recent history, starts a flow, replies in-thread. Runs under the invoker’s identity on a runner in their default Duo namespace; first use creates a `duo-workspace` project there. Cross-group project questions fail. Credits per session. Without Slack Enterprise Grid, rate limits (15 conversation objects/min vs ~50 history messages) can break the integration. DMs/top-bar agent need 19.5 flag `slack_duo_agent_app`.
- Credits: GA features consume GitLab Credits (Free needs a Credits purchase). Slack and workspace subagents are beta/experimental **and** consume credits. MCP **clients** do not bill by themselves; model calls they trigger might. Composite identity + tool-governance apply to CI flows — do not treat Slack thread text as trusted (`prompt-injection-agent-defense`).

## Sources

- [GitLab Duo Agent Platform](https://docs.gitlab.com/user/duo_agent_platform/) — accessed 2026-11-01
- [Flows](https://docs.gitlab.com/user/duo_agent_platform/flows/) — accessed 2026-11-01
- [GitLab Duo CLI (duo)](https://docs.gitlab.com/user/gitlab_duo_cli/) — accessed 2026-11-01
- [GitLab for Slack app](https://docs.gitlab.com/user/project/integrations/gitlab_slack_application/) — accessed 2026-11-01
- [GitLab's agent orchestration for software development](https://about.gitlab.com/blog/gitlab-agent-orchestration/) — accessed 2026-11-01
