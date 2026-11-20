---
id: google-jules
title: Google Jules — read-only until the 2026-12-31 shutdown
tags: [jules, google, mcp, agents-md]
status: active
updated: 2026-11-20
when_to_use: Deciding not to start a Jules task after the 2026-11-11 read-only cutoff, or exporting history before the 2026-12-31 shutdown
---

## Summary

**Jules** was Google’s asynchronous cloud coding agent for GitHub repos. The 2026-10-29 turndown notice says new work had until **2026-11-11**, the product is **read-only** after that, and it **shuts down on 2026-12-31**. Code, branches, and pull requests stay on GitHub. Settings and session history live only inside Jules until you export them. Google says that work is informing other products, including Antigravity (`antigravity-cli`). It does not document importing a Jules session into Antigravity. Not Gemini CLI (`gemini-cli-gemini-md`) and not Cursor Cloud Agents.

## Notes

- Do not plan a new Jules session, API call, or MCP task after 2026-11-11. While it accepted work, the sessions API was `POST https://jules.googleapis.com/v1alpha/sessions` with `x-goog-api-key`, and `@google/jules-mcp` exposed `create_session`, `get_session_state`, and `send_reply`. Treat a failure to start as the turndown (`jules-read-only-turndown`).
- The export documented on the turndown page covers account settings, environment variables, scheduled tasks, connected repositories, memories, setup scripts, and every session (prompt, plan, activity log, and code patches). That export includes environment-variable values. Keep the folder private and out of git. Do not print tokens or env values into a repo or a chat.
- While it accepted work: a repository-root `AGENTS.md` was the always-on guide. Nested copies were not documented as auto-loaded. MCP was a vetted allowlist (Linear, Stitch, Neon, Tinybird, Context7, Supabase) with an API key per server. Plans were approved before edits. CI Fixer retried Jules pull requests when GitHub Actions failed.
- For a new async coding task, use Antigravity, a Cursor Cloud Agent, or another agent that still accepts work. Jules-created GitHub branches and pull requests remain on GitHub after the shutdown.

## Sources

- [Jules turndown](https://jules.google/docs/changelog/2026-10-29/) — accessed 2026-11-20
- [Jules changelog](https://jules.google/docs/changelog/) — accessed 2026-11-20
- [Getting started](https://jules.google/docs/) — accessed 2026-11-20
- [Jules API types](https://jules.google/docs/api/reference/types/) — accessed 2026-09-25
- [@google/jules-mcp](https://www.npmjs.com/package/@google/jules-mcp) — accessed 2026-09-25
- [Jules](https://jules.google/) — accessed 2026-11-20
