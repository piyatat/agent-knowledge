---
id: openai-codex-sites
title: ChatGPT Sites — hosted web apps from Codex/ChatGPT
tags: [openai, hosting, ux, security]
status: active
updated: 2026-09-17
when_to_use: Publishing a ChatGPT Site (public beta) from a prompt or local project, or contrasting Sites with Codex apps/plugins
---

## Summary

**Sites** (public beta) lets ChatGPT **create, host, and share** websites/apps/games. Plus / Pro / Business / Enterprise / Edu, with plan usage caps. Manage in ChatGPT web (`chatgpt.com/sites`) or the desktop app — **no** CLI or IDE Sites console (Codex CLI can still edit the local project). Not a Codex plugin (`openai-codex-plugins`), not `/apps` connectors (`openai-codex-apps`), and not Cursor Origin (`cursor-origin`).

## Notes

- Start with “website” in the prompt or `@Sites`. Two stages: **save a version** (reviewable; local projects bind the Git commit) then **deploy** (that URL is production). Linkage lives in `.openai/hosting.json` (`project_id`, optional D1/R2 binding names). A Site outlives the chat that created it and is not a ChatGPT Project.
- Shapes: static content; **D1** (10 GB) for durable records; **R2** for uploads; workspace identity or **Sign in with ChatGPT** (`/signin-with-chatgpt`, headers `oai-authenticated-user-email` / optional full-name — authorize server-side). HTTP/HTTPS/WebSockets only; no raw TCP. No data/inference residency at launch. Default access is owner + workspace admins; Enterprise public publishing is **off** until an admin enables it.
- Env/secrets: Site settings in ChatGPT, not `hosting.json`. Don’t commit secrets. Editors (workspace co-edit) can read live DB data but cannot change audience, first-publish, analytics, or restore versions. Analytics (unique visitors / page views) is **not** for Enterprise-owned Sites.
- Don’t use Sites for PHI, card data, under-13 audiences, payments, malware, or phishing. Every deploy URL is live — save-without-deploy to review. Generated/site content is untrusted if an agent later consumes it (`prompt-injection-agent-defense`).

## Sources

- [Sites (Codex/ChatGPT docs)](https://developers.openai.com/codex/sites) — accessed 2026-09-17
- [Plugins (Codex)](https://developers.openai.com/codex/plugins) — accessed 2026-09-17
