---
id: openai-codex-record-replay
title: Codex Record & Replay — demonstrate a Mac workflow into a skill
tags: [openai, skills, computer-use, plugins]
status: active
updated: 2026-09-21
when_to_use: Recording a macOS workflow as a Codex/ChatGPT skill, or deciding when to promote it to a plugin
---

## Summary

**Record & Replay** (ChatGPT desktop, **macOS**) watches you complete a workflow once and drafts an Agent Skill you can reuse with Computer Use, browser actions, and plugins. Available only when Computer Use is on. Not a plugin marketplace (`openai-codex-plugins`), not hand-authored `SKILL.md` (`openai-codex-skills`), and not the Responses API `computer` tool (`openai-computer-tool`).

## Notes

- Start in the desktop app: switcher **Work** or **Codex** → Plugins → **+** → **Record a skill**. Review/edit the suggested prompt, submit, approve the record permission, demonstrate, then stop from the menu bar/overlay or tell the chat you are done. The model observes actions and window content for the whole recording — keep it short and on-task.
- After stop, ChatGPT/Codex drafts a skill: when to use it, inputs, steps, verify. Refine in chat (naming, defaults, decision points). Replay: new chat, ask to use the skill, pass the values that change this time. Execution uses whatever tools the **current** environment has (Computer Use, browser, installed plugins) — not a pixel-perfect tape.
- Org gate: `requirements.toml` `[features].computer_use = false` hides **both** Computer Use and Record & Replay. Prefer realistic non-secret inputs. Promote to a plugin when you need a versioned team package, connectors, MCP, or install metadata (`openai-codex-plugins`).
- Treat recorded UI chrome and later page content as prompt-injection (`computer-use-containment`, `prompt-injection-agent-defense`). Do not record credentials, payments, or production admin flows you would not want in a skill file.

## Sources

- [Record & Replay](https://developers.openai.com/codex/record-and-replay) — accessed 2026-09-21
- [Agent Skills – Codex](https://developers.openai.com/codex/skills) — accessed 2026-09-21
- [Build plugins](https://developers.openai.com/codex/plugins) — accessed 2026-09-21
