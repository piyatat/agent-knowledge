---
id: gemini-code-assist
title: Gemini Code Assist — IDE agent after the consumer cutoff
kind: tool
tags: [gemini, google, ux, deprecation]
status: active
updated: 2026-11-14
when_to_use: Using Gemini inside VS Code or IntelliJ, or migrating a consumer Code Assist account after the June 2026 cutoff
---

## Summary

**Gemini Code Assist** is Google’s IDE extension (VS Code and IntelliJ-family) for completions, chat, and **agent mode** (preview). Since **2026-06-18** it no longer serves **individuals, Google AI Pro, or Google AI Ultra**, and **Login with Google** no longer opens the IDE extensions or Gemini CLI. Those accounts move to Antigravity (`antigravity-cli`). **Standard and Enterprise** licenses still use Code Assist, on a separate deprecation schedule with no date on the consumer page. Not Jules (`google-jules`) and not the ADK (`google-adk`).

## Notes

- **Access:** install the Gemini Code Assist IDE extension, then sign in with a **Standard or Enterprise** license on a Google Cloud project. A former individuals / AI Pro / AI Ultra login now fails with **no valid license**. You cannot self-assign a license without project permission; ask a project admin.
- **Agent mode:** VS Code uses the Agent toggle in the Code Assist chat; IntelliJ uses the Agent tab in the Gemini tool window. The agent can plan, then read or edit files, run tools, and call MCP. Mutating tools ask unless you turned on always-allow. Read-only tools may run without a prompt. You can edit the plan before approving it. **There is no undo for changes outside the IDE.**
- **Limits:** agent mode is **pre-GA**. Google’s Cloud docs (updated 2026-11-10) say VS Code agent mode rides **Gemini CLI**, which is **not optimized for the latest Gemini models**, and point best-quality Gemini coding at **Antigravity CLI**. Recitation (cited-source blocking) is **off** in agent mode. Context differs by IDE: workspace files and built-in tools on both; IntelliJ also uses indexed symbols, VCS, and configured MCP servers.
- **GitHub app:** the **consumer** Gemini Code Assist GitHub app stopped new installs on **2026-06-18** and **shut down code review on 2026-07-17**. The **enterprise** GitHub app is not on that schedule.
- **Alternatives:** Antigravity (2.0 / `agy` / IDE) for consumer and CLI-quality agent work. Gemini CLI remains the engine under VS Code agent mode for licensed Code Assist users (`gemini-cli-extensions`). Jules for repo tasks on GitHub.
- **Caveats:** do not turn on always-allow on a machine you do not trust. Standard/Enterprise sunset timing is unpublished — check the deprecation page before recommending a long-lived Code Assist rollout.

## Sources

- [Gemini Code Assist consumer accounts](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals) — accessed 2026-11-14
- [Agent mode overview](https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode) — accessed 2026-11-14
- [Troubleshoot access to Gemini Code Assist features](https://docs.cloud.google.com/gemini/docs/codeassist/troubleshoot) — accessed 2026-11-14
- [Sunset of the consumer Gemini Code Assist GitHub app](https://developers.google.com/gemini-code-assist/docs/deprecations/consumer-code-review) — accessed 2026-11-14
- [Code with Gemini Code Assist Standard and Enterprise](https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini) — accessed 2026-11-14
