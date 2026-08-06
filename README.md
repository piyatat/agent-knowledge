# agent-knowledge

A **lookup corpus for AI coding agents** — short, tagged markdown notes they can browse or search before inventing process.

This is not a second codebase and not a scrapyard of full articles. Each page is a distilled note with **source links**. Ask the maintainer to collect more from the net; new entries land here with attribution.

## For agents

1. Read [`manifest.json`](manifest.json) or [`INDEX.md`](INDEX.md) first (lean index).
2. Open only the pages whose tags match the task.
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
| `sources/` | Bib-style source list for collected notes |

## Quick start (humans)

```bash
# browse
cat INDEX.md
# or search
rg -n "progressive disclosure" practices/
```

## Adding data

When collecting from the web: summarize in your own words, add frontmatter + `sources`, update `manifest.json` and `INDEX.md`. See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

MIT for original notes in this repo. Linked third-party pages keep their own licenses — we store summaries + URLs, not full scrapes.
