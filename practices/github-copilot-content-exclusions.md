---
id: github-copilot-content-exclusions
title: Copilot content exclusions — policy vs agent mode
tags: [github, privacy, security, governance]
status: active
updated: 2026-09-15
when_to_use: Configuring Copilot to ignore paths, or checking whether CLI/app vs IDE agent mode will honor those rules
---

## Summary

**Content exclusions** tell Copilot not to use listed files as context (and to skip inline suggestions there). Repo admins, org owners, and enterprise owners configure them. **Copilot Business / Enterprise**. As of 2026-09-02, the **Copilot app and Copilot CLI** honor enterprise/org/repo exclusions. This is **not** `.cursorignore` (`cursor-ignore-files`) and **not** a sandbox.

## Notes

- Effects when honored: no inline suggestions in excluded files; those files do not inform suggestions elsewhere or Chat replies; Copilot **code review** on github.com also skips them. Org/`*` patterns can exclude files **outside Git** (e.g. `"*": ["**/.env"]`). fnmatch, case-insensitive. REST: `GET`/`PUT /orgs/{org}/copilot/content_exclusion` (comments and duplicate keys are stripped on PUT).
- **Still unsupported** (docs as of 2026-09-15): **Edit and Agent modes** of Copilot Chat in VS Code and other IDEs — the how-to explicitly says IDE Agent mode does not support content exclusion. Do not assume an IDE agent loop will refuse `.env` because org policy exists. Reload: VS Code **Developer: Reload Window**; JetBrains/VS restart; Vim fetches per file. Propagation can take ~30 minutes.
- Limitations: IDE-indirect semantics (types, hovers, build config) can still leak; **symlinks** and **remote filesystems** are not covered. After configure, the client sends the **current repository URL** so GitHub can return policy; GitHub says those URLs are not logged.
- Verify: open a non-excluded file, confirm a suggestion; open an excluded file, expect none; in Chat, attach only the excluded file and prompt `explain this file` — it should not be used as a reference. Treat exclusions as a policy hint, not confidentiality.

## Sources

- [Content exclusions generally available in Copilot app and CLI](https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/) — accessed 2026-09-15
- [Content exclusion for GitHub Copilot](https://docs.github.com/en/copilot/concepts/content-exclusion) — accessed 2026-09-15
- [Excluding content from GitHub Copilot](https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot) — accessed 2026-09-15
- [REST API endpoints for Copilot content exclusion management](https://docs.github.com/en/rest/copilot/copilot-content-exclusion-management) — accessed 2026-09-15
