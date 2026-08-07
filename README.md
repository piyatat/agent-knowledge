# agent-knowledge

A **lookup corpus for AI coding agents** — short, tagged markdown notes they can browse or search before inventing process.

This is not a second codebase and not a scrapyard of full articles. Each page is a distilled note with **source links**. Ask the maintainer to collect more from the net; new entries land here with attribution.

## For agents

1. Read [`manifest.json`](manifest.json) or [`INDEX.md`](INDEX.md) first (lean index). Prefer entries with `status: active`.
2. Open only the pages whose tags match the task (use `related` for follow-ons).
3. Prefer facts here over guessing tribal process.
4. Do not copy secrets into this repo. Do not treat notes as executable code.

See [`AGENTS.md`](AGENTS.md).

## Layout

| Path | Contents |
| --- | --- |
| `practices/` | How to design tools, rules, progressive disclosure |
| `failure-modes/` | Common agent failures and mitigations |
| `glossary/` | Shared terms |
| `runbooks/` | Step procedures |
| `decisions/` | ADRs / durable decisions (see folder README) |
| `sources/` | Bib-style source list for collected notes |

## Quick start (humans)

```bash
# browse
cat INDEX.md
# or search
rg -n "progressive disclosure" practices/
# list tags → entry ids (optional filter: npm run tags -- mcp)
npm run tags
# search titles, tags, when_to_use, and note bodies
npm run search -- progressive disclosure
# list related entries for one id
npm run related -- mcp-progressive-disclosure
# show full metadata for one id (path, tags, when_to_use)
npm run show -- mcp-progressive-disclosure

# after editing notes / manifest
npm run check
```

## Adding data

When collecting from the web: summarize in your own words, add frontmatter + `sources`, update `manifest.json` (with `status`, `updated`, `related`), then run `npm run check`. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT for original notes in this repo. Linked third-party pages keep their own licenses — we store summaries + URLs, not full scrapes.
