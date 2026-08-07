# Consensus — agent-knowledge

## Winner: Corpus integrity toolkit

**Title:** Manifest as single source of truth + index generator + validate script  

**Rationale:** Market/users want trust/freshness and lean discovery; craft shows INDEX/manifest already drift (tags only in JSON). One small improvement fixes selection quality without becoming agentbrief/RAG.

**MVP:**
1. Extend `manifest.json` entries with `status`, `updated`, optional `related[]`
2. `scripts/generate-index.mjs` writes `INDEX.md` from manifest
3. `scripts/validate-corpus.mjs` checks frontmatter ↔ manifest ↔ on-disk notes; bibliography URLs optional soft warn
4. Update CONTRIBUTING/README/AGENTS to prefer `active` and edit manifest then regenerate
5. Add empty `decisions/` with README stub (layout alignment)

**Files:** `manifest.json`, `INDEX.md`, `scripts/*`, `CONTRIBUTING.md`, `README.md`, `AGENTS.md`, `decisions/README.md`, note frontmatter sync

**Update existing:** yes (this repo)
