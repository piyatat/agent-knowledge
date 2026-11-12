---
id: amp-agent
title: Amp — threads, orbs, MCP, AGENTS.md
tags: [amp, mcp, agents-md, orchestration]
status: active
updated: 2026-11-12
when_to_use: Using Sourcegraph Amp (web, macOS/iOS, CLI), configuring MCP / AGENTS.md / orbs / GitLab, or picking a model after the Dial retired
---

## Summary

**Amp** (ampcode.com / Sourcegraph) is a coding agent + environment: **threads** that move across web, macOS/iOS, and the `amp` CLI. Cloud work runs in **orbs** (per-thread machines). Multi-model by default. Not Sourcegraph’s MCP *server* (that is a search backend you can attach), not Cursor Cloud Agents, not OpenCode. Coordinating many threads is **Spaces** (`amp-spaces`), not Puck alone.

## Notes

- Surfaces share one thread store. Web starts an orb with no install. CLI runs on your machine or in a script. **Puck** launches/coordinates agents. Local `amp.mcpServers` on your laptop are **not** in an orb — commit skill `mcp.json`, commit `.amp/settings.json`, or use **remote MCP definitions** stored by ampcode.com (`amp mcp remote --personal|--workspace|--project`).
- Local MCP: `amp mcp add` or `amp.mcpServers` (`command`/`args` or `url`/`headers`, `${VAR}`). Precedence: CLI `--mcp-config` > workspace `.amp/settings.json` > `~/.config/amp/settings.json` > skills. **Workspace MCP needs `amp mcp approve`**. Prefer bundling MCP inside skills so tools stay hidden until load (`mcp-progressive-disclosure`). Remote definitions can use OAuth, bearer files (never argv secrets), or staff-gated **Workload Identity** (5-minute RS256 JWT; verify iss/aud/exp; identity is the **thread owner**).
- Remote tools with `outputSchema` are called via `code_exec`; mismatched `structuredContent` throws (`mcp-output-schema`). `AGENTS.md` in cwd/parents (to `$HOME`) always loads; subtree files load when that tree is read. Fallback `AGENT.md` / `CLAUDE.md`. Personal `~/.config/amp/AGENTS.md`; workspace Global AGENTS.md is prepended and does **not** apply to subagents/Puck. `@file` mentions and `globs` frontmatter scope extra docs.
- **GitLab** (2026-11-05): connect in Settings → Integrations & MCP (`api` + `write_repository`; fewer scopes are not saved). Orbs clone/push as you; `glab` is signed in via Amp’s credential helper (do **not** set `GITLAB_TOKEN` in orb secrets — that overrides the connection on every host). MR/issue/pipeline reads stay on Amp’s servers, not the orb token. **Push Updates** are GitLab webhooks to `https://ampcode.com` (group Owner/Premium for group hooks; Free/CE falls back to project hooks, up to 50). Threads in a **workspace** can subscribe to comments/CI; personal threads cannot. **Orb spawners** start a new orb per new MR or issue (label filter is at open time only). Workspace admins can run a spawner as a service account (regular GitLab user OAuth — GitLab service accounts / PATs cannot sign in). Self-managed: public HTTPS (no subpath), workspace OAuth app, Amp server IPs; orbs may need Tailscale/self-hosted orbs if the instance allowlists IPs. Manual webhooks on GitLab < 19.0.
- **Model selector** (2026-11-12) replaces the Dial (`low` / `medium` / `high` / `ultra`). Pick model **and** effort per thread; both can change mid-thread (transcript: `Switched to GPT-6.1 Sol · High`). Prompt cache is per-model — the first message after a switch is uncached. Plugin agents keep that agent. New threads default to **Staff Pick** (Claude Opus 5.5 as of the announcement) unless you had a Dial default; Settings → Model Selector → New Threads Start On can use last-picked or a fixed model. The selector shows which subscription, API key, or Amp credits will be billed. Each listed model has its own system prompt and tools. Dial settings do **not** carry over: Tune Modes / Build Dial entries move to the selector / Other Models. Former Dial map: `low` GLM-5.3-Flash, `medium` Claude Opus 5.5, `high` GPT-6 Astra, `ultra` Claude Fable 5.2. Always-on deploy: `amp-boxes`.

## Sources

- [Amp manual](https://ampcode.com/manual) — accessed 2026-09-23
- [Amp MCP](https://ampcode.com/docs/customize/mcp) — accessed 2026-09-23
- [Amp AGENTS.md](https://ampcode.com/docs/markdown/customize/agents-md) — accessed 2026-09-23
- [Sourcegraph MCP client integrations](https://sourcegraph.com/docs/api/mcp/client-integrations) — accessed 2026-09-23
- [GitLab](https://ampcode.com/docs/gitlab) — accessed 2026-11-08
- [GitLab Integration](https://ampcode.com/news/gitlab) — accessed 2026-11-08
- [GitHub & Git](https://ampcode.com/docs/github) — accessed 2026-11-08
- [Customizing Orbs](https://ampcode.com/docs/orbs/customizing) — accessed 2026-11-08
- [Projects](https://ampcode.com/docs/projects) — accessed 2026-11-08
- [Bye Bye, Dial](https://ampcode.com/news/bye-bye-dial) — accessed 2026-11-12
- [Boxes](https://ampcode.com/docs/boxes) — accessed 2026-11-12

