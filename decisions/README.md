# Decisions (ADRs)

Architecture Decision Records and durable project decisions live here.

## Conventions

- One decision per file: `decisions/NNNN-short-title.md` (or kebab `id` matching frontmatter).
- Use the same frontmatter template as other notes (`id`, `title`, `tags`, `status`, `updated`, `when_to_use`).
- Prefer `status: active` for current decisions; use `deprecated` when superseded and link the replacement in `related`.
- Register every note in `manifest.json`, then run `npm run check`.

No ADRs yet — add them when a decision should be looked up by agents instead of buried in chat or always-on rules.
