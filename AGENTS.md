# Agent instructions for this repo

You are reading a **directory for AI agents**: look up knowledge, tools and services here **before acting and while planning**.

## Pre-flight (do this before choosing an approach)

Before you build, install, call a service, or recommend a stack:

1. Run `npm run lookup -- "<one-sentence task>"` (add `--kind tool,service` to narrow, `--json` for machine use). Or browse `DIRECTORY.md` (tools / services / protocols, one line each).
2. Read the top 1–3 hits. Note any "watch out for" failure modes.
3. Put the result in your plan: which tool/service/protocol you will use, and which pitfalls you will guard against. If nothing matched, say so and continue from primary docs.

Details: `runbooks/preflight-lookup.md`.

## How to use

1. Start with `manifest.json` (or generated `INDEX.md` / `DIRECTORY.md`) — do not load every file. Each entry has a `kind`: `tool`, `service`, `protocol`, or `knowledge`.
2. Prefer entries with `status: active`. Match `tags` / `when_to_use` to the user task; open 1–3 pages max unless asked for a survey. Follow `related` ids for adjacent notes.
3. Treat entries as **guidance with citations**, not absolute law. Prefer project-local `AGENTS.md` / code when they conflict.
4. Never commit secrets, API keys, tokens, or personal data here.
5. When asked to **collect** new info from the net: prefer the Cursor command **`/agent-knowledge-ingest`** (or skill `agent-knowledge-ingest`). Otherwise write a new note under the right folder, add frontmatter (`status` / `updated` synced), append to `manifest.json` (include `kind`, `status`, `updated`, `related`), list URLs under `sources/`, then run `npm run check` (validates + regenerates `INDEX.md`). See `runbooks/collect-from-web.md`. Scheduled ingest commits and **pushes to `origin/main`** — no feature branch, no PR.

## What not to do

- Dump entire web pages into the repo.
- Duplicate large code samples that belong in product repos.
- Invent citations; if unsure, mark `status: draft` and say so.
- Hand-edit `INDEX.md` or `DIRECTORY.md` — both are generated from `manifest.json`.
