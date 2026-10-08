---
id: github-copilot-skills
title: GitHub Copilot Agent Skills — SKILL.md, copilot skill, gh skill
tags: [github, skills, cli, supply-chain]
status: active
updated: 2026-10-08
when_to_use: Adding SKILL.md for Copilot CLI / cloud agent / IDE, or installing with copilot skill / gh skill
---

## Summary

Copilot **Agent Skills** are on-demand `SKILL.md` folders (Agent Skills open standard). Copilot injects the file when the prompt matches `description`, or when you `/skill-name`. Surfaces: Copilot CLI, cloud agent, Copilot app, VS Code / JetBrains agent mode, code review. Not always-on instructions (`github-copilot-instructions`) and not `.agent.md` profiles (`github-copilot-custom-agents`).

## Notes

- Project dirs: `.github/skills/<name>/SKILL.md`, `.claude/skills/`, or `.agents/skills/` (plus parent `.github/skills/` in a monorepo). Personal: `~/.copilot/skills/` or `~/.agents/skills/`. Also `COPILOT_SKILLS_DIRS` and `--add-dir` / `/add-dir` (loads that root’s `.github/skills` as **trusted**). Frontmatter: required `name` (kebab, ≤64 chars, match dir) + `description` (≤1024); optional `license`, `argument-hint`, `allowed-tools` (`"*"` = all tools), `user-invocable` (default true), `disable-model-invocation`. Body = procedure. Sibling scripts/docs load when the skill runs.
- `allowed-tools` (e.g. `shell`) pre-approves those tools. **Do not** pre-approve `shell`/`bash` for untrusted skills — that skips confirmation and is an injection/RCE path (`malicious-skills-supply-chain`). Omit it so Copilot asks.
- CLI: interactive `/skills` (dashboard), `/skills list|info|reload`, `/skills add [--project] <FILE|URL|DIRECTORY>`, `/skills remove`. Out of session: `copilot skill add|list|enable|disable|remove` (changelog replaced `copilot plugins install --skill --scope project`). File/URL copies; a **directory** registers as a custom source (remove unregisters, leaves files). Plugin/builtin skills: disable, don’t delete. Plugin skill commands stay after plugin reload (CLI **1.0.93**). Changelog also: namespaced custom skills + ignored skill directories during discovery. Duplicate plugin names coexist as `/plugin/skill`; the bare name hits the higher-priority plugin.
- `gh skill` (GitHub CLI **≥ 2.90.0**, public preview): `search`, `preview`, `install OWNER/REPO [SKILL][@TAG|@SHA]` (`--pin`, `--agent`, `--scope`), `update` / `update --all`, `publish`. Default install is Copilot + project scope. Skills are **not** GitHub-verified.
- Code review: prefer a review-shaped directory name (`code-review`); other `.github/skills` still auto-apply when relevant. Review reads skills from the **head** branch (`github-copilot-instructions`). Org/enterprise skills can project via the AHP relay (fetched on invoke). JetBrains local/agent also loads org skill bundles (`github-copilot-jetbrains`).
- Use instructions for short always-on standards; Skills for long, task-specific workflows (`agent-skills-open-standard`, `skills-dispatch-hygiene`). Collections: `github/awesome-copilot`, `anthropics/skills`.

## Sources

- [Adding agent skills for GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) — accessed 2026-10-08
- [GitHub Copilot CLI command reference](https://docs.github.com/en/copilot/reference/cli-command-reference) — accessed 2026-10-08
- [About agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — accessed 2026-09-06
- [Adding agent skills for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) — accessed 2026-09-06
- [copilot-cli changelog](https://github.com/github/copilot-cli/blob/main/changelog.md) — accessed 2026-10-08
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-09-06
