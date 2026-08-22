# Agent instructions for this repo

You are reading a **knowledge lookup** repository.

## How to use

1. Start with `manifest.json` (or generated `INDEX.md`) — do not load every file.
2. Prefer entries with `status: active`. Match `tags` / `when_to_use` to the user task; open 1–3 pages max unless asked for a survey. Follow `related` ids for adjacent notes.
3. Treat entries as **guidance with citations**, not absolute law. Prefer project-local `AGENTS.md` / code when they conflict.
4. Never commit secrets, API keys, tokens, or personal data here.
5. When asked to **collect** new info from the net: prefer the Cursor command **`/agent-knowledge-ingest`** (or skill `agent-knowledge-ingest`). Otherwise write a new note under the right folder, add frontmatter (`status` / `updated` synced), append to `manifest.json` (include `status`, `updated`, `related`), list URLs under `sources/`, then run `npm run check` (validates + regenerates `INDEX.md`). See `runbooks/collect-from-web.md`. Scheduled ingest commits and **pushes to `origin/main`** — no feature branch, no PR.

## What not to do

- Dump entire web pages into the repo.
- Duplicate large code samples that belong in product repos.
- Invent citations; if unsure, mark `status: draft` and say so.
- Hand-edit `INDEX.md` — it is generated from `manifest.json`.
