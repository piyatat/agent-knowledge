# Research — craft seat

Focus: content structure, index integrity, and maintainability of the lookup corpus.  
Out of scope: productizing agentbrief / mcplint / ruleradar.

Grounded in README, AGENTS, CONTRIBUTING, `manifest.json`, `INDEX.md`, and the seven seed notes.

---

## Proposals (up to 5)

### C1. Manifest as single source of truth; generate INDEX.md

- **One-liner:** Treat `manifest.json` as canonical; generate `INDEX.md` (and keep humans editing only the manifest + notes).
- **Why:** CONTRIBUTING requires updating both on every collect; today `INDEX.md` drops `tags` that only live in the manifest, so “read INDEX or manifest” (AGENTS/README) yields unequal selection power. Dual edit will drift as the corpus grows past seven entries.
- **Effort:** S
- **Files:** `scripts/generate-index.mjs` (or `.sh`), `INDEX.md` (generated), `CONTRIBUTING.md`, `README.md`, optionally `package.json` / Makefile target

### C2. Promote `status`, `updated`, and `related` into the lean index

- **One-liner:** Extend each `manifest.json` entry with `status`, `updated`, and optional `related: [id,…]` mirrored from frontmatter.
- **Why:** Notes already carry `status` / `updated`, but agents matching from the lean index never see draft vs active or recency. Cross-links today are buried in prose (e.g. tool-call-failures → `` `tool-description-hygiene` ``) with no graph for 1–3 page selection. Pattern note itself recommends index → tagged pages.
- **Effort:** S
- **Files:** `manifest.json`, all note frontmatter under `practices/` `failure-modes/` `glossary/` `runbooks/`, `CONTRIBUTING.md` (template), `AGENTS.md` (selection rule: prefer `active`)

### C3. Corpus integrity check (frontmatter ↔ manifest ↔ bibliography)

- **One-liner:** Small validator: required frontmatter fields, id/path uniqueness, every on-disk note listed in manifest, every note Source URL present in `sources/bibliography.md`.
- **Why:** Collect runbook steps 4–5 and CONTRIBUTING rules 4–5 are manual; seed is consistent now but nothing prevents orphan files, id mismatches, or bibliography drift. This is repo hygiene for *this* corpus, not a general MCP/tool linter product.
- **Effort:** M
- **Files:** `scripts/validate-corpus.mjs`, optional `schemas/manifest.schema.json` + frontmatter checklist in `CONTRIBUTING.md`, wire into README “Adding data” / CI later if desired

### C4. Align layout with the knowledge-corpus Store list

- **One-liner:** Add a `decisions/` (ADR) folder + INDEX/manifest section, or narrow `practices/knowledge-corpus-pattern.md` Store bullets to folders that actually exist.
- **Why:** The pattern note claims the corpus holds ADRs/decisions, but layout (README table) only has practices / failure-modes / glossary / runbooks / sources. Agents following the pattern will look for a missing path; either ship the stub or stop advertising it.
- **Effort:** S
- **Files:** `decisions/.gitkeep` + optional `decisions/README.md` stub *or* edit `practices/knowledge-corpus-pattern.md`; `README.md` layout table; `INDEX.md` / `manifest.json` if a real entry ships

### C5. Controlled tag vocabulary + markdown see-also links

- **One-liner:** Document allowed tags (e.g. in `glossary/core.md` or `glossary/tags.md`) and replace bare id backticks with relative links plus a short `## See also` on multi-topic notes.
- **Why:** Tags are freeform (`mcp`, `tools`, `tokens`, `lint`, …) with no glossary entry for the vocabulary; selection quality depends on tag match (AGENTS step 2). Relative links improve human browse and any tool that resolves markdown paths without changing the lean-index-first flow.
- **Effort:** S
- **Files:** `glossary/core.md` or new `glossary/tags.md`, `manifest.json` / `INDEX.md` if new glossary page, touch notes that cross-reference (`failure-modes/tool-call-failures.md`, `practices/*`), `CONTRIBUTING.md`

---

## Ranked top 3 (craft recommendation)

1. **C1** — kill INDEX/manifest dual-write; biggest structural win for agent selection consistency  
2. **C2** — status/related on the lean index; directly improves “open 1–3 pages” without loading every note  
3. **C3** — integrity check; protects C1/C2 as collect volume grows  

C4/C5 are worthwhile follow-ons; prefer C4 as a one-file honesty fix if scope is tight.
