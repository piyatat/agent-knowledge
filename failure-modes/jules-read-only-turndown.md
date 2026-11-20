---
id: jules-read-only-turndown
title: A Jules session will not start after the read-only cutoff
kind: knowledge
tags: [jules, google, shutdown, export]
status: active
updated: 2026-11-20
when_to_use: A Jules session, API call, or MCP task fails to start, or an agent is about to send new work to Jules
---

## Summary

Jules (`google-jules`) stopped taking new work on **2026-11-11** and shuts down on **2026-12-31**. A create-session error after the cutoff is the turndown. GitHub already holds the code. History that only Jules stored has to be exported before shutdown, and that export contains secrets.

## Notes

- **The window is closed.** The 2026-10-29 notice gave until 2026-11-11 to finish sessions, then read-only through 2026-12-31. Do not retry a failed session create, and do not rotate the API key expecting the VM to come back.
- **GitHub is the durable copy of the code.** Branches and pull requests stay in the repository. The export is for settings, environment variables, scheduled tasks, connected repos, memories, setup scripts, and session prompts, plans, activity logs, and patches.
- **The export is sensitive.** The turndown page says the environment-variable file contains the variable values. Keep that folder private and out of any repository. Do not ask an agent to read a keychain item, print an access token, or paste env values into chat. Use the turndown page yourself.
- **Antigravity is not a documented importer.** The notice says Jules informed other Google products, including Antigravity (`antigravity-cli`). It does not say an Antigravity session resumes a Jules task. Start a new task there, or on another coding agent, from the GitHub branch.

## Sources

- [Jules turndown](https://jules.google/docs/changelog/2026-10-29/) — accessed 2026-11-20
- [Jules changelog](https://jules.google/docs/changelog/) — accessed 2026-11-20
