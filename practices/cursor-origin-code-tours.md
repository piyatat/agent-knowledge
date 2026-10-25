---
id: cursor-origin-code-tours
title: Origin Code Tours — PR walkthrough next to the diff
tags: [cursor, review, git, ux]
status: active
updated: 2026-10-25
when_to_use: Opening a Cursor Origin pull-request Tour, customizing depth/files, or contrasting it with Bugbot comments
---

## Summary

**Code Tours** walk a pull request in review order: Cursor reads the diff, groups related changes, and explains each group next to its code. Every Origin PR has a tour on the **Changes** tab (`Diff / Tour`, or `T`). Not Bugbot comments (`cursor-bugbot-review`), not local Agent Review (`cursor-agent-review`), and not a merge gate.

## Notes

- Open at `cursor.com/codebase` → repo → Pull Requests → Changes → **Tour**. Origin-hosted PRs get the full surface; **mirrored GitHub** PRs get tours with fewer features (custom tours omit **highlights**). Origin is still early beta (`cursor-origin`).
- A tour usually starts with what changed and why, then walks grouped hunks. Dotted terms have hover definitions. Screenshots/recordings from the PR description or the **authoring Cloud Agent** may appear; agent-authored PRs can also reuse the agent’s notes (approach, watch-outs, tests). Ask Cursor about a section (`+` or select text → Add to chat / `Cmd I`). A Cloud Agent on the PR can rewrite a section, add media, or regenerate the whole tour.
- Navigate: section list (short lines, top left); share a section via the heading link; check a section to mark its files viewed (Diff keeps the same progress). Test / deleted / generated / binary files may start collapsed.
- **Generate custom tour**: highlights, file subset, depth, extra instructions. Version picker covers a commit, range, or **Changes since your last review**. After the last section on PRs with **>3 files**, a **What next?** card may offer follow-up tours or **Add media**.
- Prefetch: Cursor writes tours in the background only for **team-owned Origin-created** repos (opens, including drafts, and new pushes). Otherwise it writes on the spot. New commits: you keep reading; **Updating…** then swaps if you are on latest (`See latest` if not). **Too large for a tour** → **View files** (split the PR). Retry under **Couldn't generate the tour**.
- Billing: prefetch does **not** count as usage. On-demand generate (open or ask) counts like an agent request — **paid plan** required (free / trial can only read existing tours). Reading a written tour is free. Agent edits count toward that agent. Privacy follows the repo owner’s Privacy Mode (`cursor-privacy-mode`); the diff + description go to a model; anyone who can see the PR can read the tour. Cloud Agents RN (2026-10): tall stacks that failed mid-generation now error instead of hanging.

## Sources

- [Code Tours](https://cursor.com/docs/origin/code-tours) — accessed 2026-10-25
- [Cloud Agents release notes](https://cursor.com/docs/release-notes/cloud-agents) — accessed 2026-10-25
- [Origin overview](https://cursor.com/docs/origin) — accessed 2026-10-25
