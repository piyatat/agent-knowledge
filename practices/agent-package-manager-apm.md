---
id: agent-package-manager-apm
title: Agent Package Manager (APM) — apm.yml, lockfile, and Dependabot
tags: [skills, supply-chain, github, plugins]
status: active
updated: 2026-11-05
when_to_use: Declaring shared skills/prompts/MCP in apm.yml, installing across Copilot/Cursor/Claude/Codex, or enabling Dependabot for APM
---

## Summary

**Agent Package Manager (APM)** is Microsoft’s dependency manager for agent context: one `apm.yml` lists skills, prompts, instructions, plugins, and MCP servers; `apm install` deploys each primitive to the harnesses that support it. `apm.lock.yaml` pins versions and content hashes. **2026-11-03:** GitHub Dependabot **version-updates** (not security updates) the `apm` ecosystem. Not a skill marketplace (`agent-skills-directories`) and not a host plugin format (`cursor-plugins`, `github-copilot-plugins`).

## Notes

- Install: `brew install apm`, Unix `curl -sSL https://aka.ms/apm-unix | sh`, Windows `irm https://aka.ms/apm-windows | iex`. Manifest `dependencies.apm` is a **mapping/list of git refs** (`owner/repo`, optional path, `#tag` / `#sha` / `#branch`). `dependencies.mcp` is separate. Object form (`git:` / `path:` / `ref:`) supports GitLab, Azure DevOps, Bitbucket, Gitea. Do not hand-edit the lockfile; `apm install --frozen` is the CI-safe install (fails if lock missing or out of sync, including MCP state).
- Targets (auto-detect unless noted): Copilot `.github/`; Claude `.claude/`; Cursor `.cursor/`; Codex `.codex/` + `.agents/` for skills; Gemini `.gemini/`; also Grok Build, OpenCode, Windsurf, Kiro. Explicit-only (not in `--target all`): `antigravity`, `agent-skills`, `hermes`, `grok-bot`. Skills for Copilot/Cursor/Codex/Gemini/OpenCode default to portable `.agents/skills/<name>/SKILL.md`. Runtime still belongs to the harness (`github-copilot-skills`, `cursor-plugins`, `claude-code-skills`, `openai-codex-skills`, `gemini-cli-skills`).
- Default install scans hidden Unicode, pins content hashes, and **blocks transitive MCP** unless declared or trusted. `apm-policy.yml` is install-time governance (tighten-only inheritance enterprise → org → repo). APM does not sandbox runtime tools — pair with `malicious-skills-supply-chain` and host allowlists.
- Dependabot (`package-ecosystem: "apm"` in `.github/dependabot.yml`, `directory` = folder with `apm.yml`): GA on github.com, all plans; GHES **3.24**. Updates `dependencies.apm` and `devDependencies.apm`. SemVer tags → latest matching tag (incl. package-scoped tags); 40-char SHA → commit of latest annotated non-prerelease tag plus `# vX.Y.Z` comment; branch pins update **lock only** (need an existing lockfile). Regenerates lock via `apm lock` if present; **does not create** a lockfile. Skips: object-form / `mcp:` entries, unpinned refs, local paths, Azure DevOps, `http://` / `git://` URLs, YAML block scalars / escaped quoted strings, abbreviated SHAs, shorthand entries when `registries.default` is set. Private git via Dependabot git registries. Review skill/prompt diffs — a bumped instruction changes agent behavior without app-code changes. No Dependabot **security** advisories for APM yet.

## Sources

- [Agent Package Manager](https://microsoft.github.io/apm/) — accessed 2026-11-05
- [Targets matrix](https://microsoft.github.io/apm/reference/targets-matrix/) — accessed 2026-11-05
- [Primitives and targets](https://microsoft.github.io/apm/concepts/primitives-and-targets/) — accessed 2026-11-05
- [Manage dependencies](https://microsoft.github.io/apm/consumer/manage-dependencies/) — accessed 2026-11-05
- [Dependabot version updates support APM](https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager/) — accessed 2026-11-05
- [Dependabot supported ecosystems](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories) — accessed 2026-11-05
- [Dependabot options reference](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference) — accessed 2026-11-05
