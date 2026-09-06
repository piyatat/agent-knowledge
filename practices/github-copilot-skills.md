---
id: github-copilot-skills
title: GitHub Copilot Agent Skills — SKILL.md and gh skill
tags: [github, skills, cli, supply-chain]
status: active
updated: 2026-09-06
when_to_use: Adding SKILL.md for Copilot cloud agent / CLI / IDE, or installing skills with gh skill
---

## Summary

Copilot **Agent Skills** are on-demand `SKILL.md` folders (Agent Skills open standard). Copilot injects the file when the prompt matches `description`. Surfaces: cloud agent, code review, Copilot CLI, Copilot app, VS Code / JetBrains agent mode. Not always-on instructions (`github-copilot-instructions`) and not `.agent.md` profiles (`github-copilot-custom-agents`).

## Notes

- Project dirs: `.github/skills/<name>/SKILL.md`, `.claude/skills/`, or `.agents/skills/`. Personal: `~/.copilot/skills/` or `~/.agents/skills/`. Frontmatter: required `name` (kebab, match dir) + `description`; optional `license`. Body = procedure. Sibling scripts/docs are discovered when the skill runs.
- `allowed-tools` (e.g. `shell`) pre-approves those tools. **Do not** pre-approve `shell`/`bash` for untrusted skills — that skips confirmation and is an injection/RCE path (`malicious-skills-supply-chain`). Omit it so Copilot asks.
- `gh skill` (GitHub CLI **≥ 2.90.0**, public preview): `search`, `preview` (read before install), `install OWNER/REPO [SKILL][@TAG|@SHA]` (`--pin`, `--agent`, `--scope`), `update` / `update --all` (uses provenance in frontmatter; pinned skipped), `publish` / `--dry-run` / `--fix`. Default install is Copilot + project scope. Skills are **not** GitHub-verified.
- Code review: prefer a review-shaped directory name (`code-review`); other `.github/skills` still auto-apply when relevant. Review reads skills from the **head** branch (`github-copilot-instructions`).
- Use instructions for short always-on standards; Skills for long, task-specific workflows (`agent-skills-open-standard`, `skills-dispatch-hygiene`). Collections: `github/awesome-copilot`, `anthropics/skills`.

## Sources

- [About agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) — accessed 2026-09-06
- [Adding agent skills for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills) — accessed 2026-09-06
- [Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) — accessed 2026-09-06
- [Agent Skills specification](https://agentskills.io/specification) — accessed 2026-09-06
