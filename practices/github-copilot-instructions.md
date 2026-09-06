---
id: github-copilot-instructions
title: GitHub Copilot custom instructions — copilot-instructions.md vs AGENTS.md
tags: [github, agents-md, memory, prompts]
status: active
updated: 2026-09-06
when_to_use: Authoring .github/copilot-instructions.md, path-specific instructions, or choosing vs AGENTS.md
---

## Summary

Copilot **custom instructions** are always-on context. Repo-wide file: **`.github/copilot-instructions.md`**. Path-specific: **`.github/instructions/*.instructions.md`** with `applyTo` globs. Agents also read **`AGENTS.md`** (nearest wins) plus optional root `CLAUDE.md` / `GEMINI.md`. Not a custom agent profile (`github-copilot-custom-agents`) and not a Skill (`github-copilot-skills`).

## Notes

- Priority when several instruction sets apply: **personal** (GitHub UI) > **repository** > **organization**. All matching sets are still sent — avoid contradictions. Chat on github.com/copilot lists `.github/copilot-instructions.md` as a reference when it was used.
- Path-specific files need YAML `applyTo` (comma-separated globs). Optional `excludeAgent: "code-review"` or `"cloud-agent"`. On GitHub.com, path-specific files are **only** for cloud agent and code review. If `applyTo` matches the file in play **and** a repo-wide file exists, **both** apply.
- Feature matrix differs by surface (VS Code ✓, JetBrains/Eclipse/Xcode preview, CLI ✓). Prompt files (`.github/prompts/*.prompt.md`) are **manual** templates — supported in VS Code / Visual Studio, not github.com or Copilot CLI. Code review: enabled by default; toggle in repo Settings → Copilot → Code review. Review reads instructions/skills from the **head** branch.
- Keep repo-wide text short (GitHub’s onboard prompt: ≤ ~2 pages; not task-specific). Put long procedures in Skills. First cloud-agent PR may comment a link to auto-generate instructions. Whitespace between paragraphs is ignored.
- Copilot CLI also honors these files plus `AGENTS.md` (`github-copilot-cli`). Do not treat third-party blogs that claim “CLI ignores AGENTS.md” as current — prefer GitHub docs + `agents-md-open-format`.

## Sources

- [Adding repository custom instructions](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions) — accessed 2026-09-06
- [About customizing GitHub Copilot responses](https://docs.github.com/en/copilot/concepts/prompting/response-customization) — accessed 2026-09-06
- [Copilot customization cheat sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet) — accessed 2026-09-06
