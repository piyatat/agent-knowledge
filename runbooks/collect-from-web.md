---
id: collect-from-web
title: Runbook — collect a web note into this repo
tags: [runbook, contributing]
status: active
updated: 2026-11-14
when_to_use: User asks to scrape/collect information into agent-knowledge (prefer /agent-knowledge-ingest)
---

## Preferred entry

In Cursor, run **`/agent-knowledge-ingest`** (skill: `agent-knowledge-ingest`). It scrapes, dedupes against the manifest, writes notes, and runs `npm run check`.

Optional args: `topic:…` `tags:…` `limit:N` `gap-fill` `dry-run` `no-push` `draft` `kind:tool|service|protocol|knowledge` `folder:practices|failure-modes|glossary|runbooks|decisions`.

This repo is a **pre-flight directory**: agents look up the tool, service or protocol for a job before acting (`npm run lookup`, `DIRECTORY.md`). Prefer gap-filling `tool` and `service` entries (what it is, when to use it, auth/install, alternatives, caveats) and the failure modes that go with them over more general commentary.

## Scheduled / cloud ingest

Daily (and other automated) ingest runs **commit and push to `origin/main`**. Do not create a feature branch, do not open a pull request, and do not leave the ingest only on a `cursor/*` working branch.

If the harness already checked out a throwaway branch, fast-forward `main` to the ingest commit and **`git push origin main`**. Commit message lists the note ids added or updated.

## Steps (manual)

1. Clarify the topic / tags the user wants.
2. WebSearch + WebFetch primary sources (prefer docs, RFCs, primary blogs).
3. Write a **summary note** under `practices/`, `failure-modes/`, `glossary/`, or `runbooks/` using the CONTRIBUTING template.
4. Add URLs to the note’s `## Sources` and append `sources/bibliography.md`.
5. Update `manifest.json` (include `kind`, `status`, `updated`, `related`; write `when_to_use` as the task an agent would be planning), then run `npm run check`.
6. Do **not** paste full copyrighted pages; quote sparingly if at all.
7. For interactive collection: commit/push only if the user asks. For scheduled ingest: always push `origin/main` after `npm run check` passes (unless `no-push` / `dry-run`).

## Done when

- Note has frontmatter + when_to_use (`status` / `updated` match manifest)
- Manifest updated with a `kind`; `npm run check` passes (`INDEX.md` and `DIRECTORY.md` regenerated)
- Sources attributed
- Scheduled ingest is on `origin/main`
