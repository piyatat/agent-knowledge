# Market research — agent-knowledge

**Seat:** market  
**Date:** 2026-08-07  
**Product:** Lookup corpus for AI coding agents (markdown notes + `manifest.json` / `INDEX.md`). Not a code app.

## Snapshot

`agent-knowledge` is a **curated progressive-disclosure corpus**: lean index → tagged short notes with sources. Seed coverage is thin (4 practices, 1 failure-mode page, 1 glossary, 1 runbook) but the *shape* matches where the market is converging — OKF-style markdown+frontmatter bundles, Agent Skills L1/L2 loading, and “map not territory” AGENTS.md guidance.

Demand signal is strong around **context engineering**, not around another RAG product or agent memory store. The underserved wedge is **shared, citable, agent-readable process knowledge** that sits *between* always-on steering files and task-triggered skills — with explicit trust/freshness, not fuzzy retrieval.

## Market signals (web)

| Signal | Implication for this repo |
| --- | --- |
| AGENTS.md is an open standard (AAIF / Linux Foundation); 60k+ repos; best practice = keep thin (~150 lines), hand-curated | Corpus should absorb the overflow that people dump into AGENTS.md; notes already teach “rules budget” — need clearer **layering** vs Skills |
| Anthropic Agent Skills: L1 metadata always (~100 tok), L2 body on trigger, L3 resources on demand | Same architecture as this corpus’s manifest→page pattern; market lacks a **distilled map** of when to use AGENTS.md vs Skill vs lookup note |
| Progressive disclosure (Ardalis, MCP client best practices, tools-at-scale) | Already seeded; still room for **selector quality** (`when_to_use`) as the discovery UX |
| Failure taxonomies (InContext, Codex NIST-style classes, Growth Engineer 11 modes): context pollution, stale instructions, compaction amnesia, instruction conflict dominate production pain | Corpus has **only** tool-call failures — a large empty shelf |
| OKF v0.1/v0.2 (Google Cloud): markdown+YAML concepts; v0.2 adds trust, lifecycle (`stale_after`), provenance | Near-identical product shape; adopting optional trust/lifecycle fields is cheap interoperability without becoming a catalog product |
| Hybrid curated-spine + RAG long-tail (OKF+RAG / loopctl knowledge layer) | Stay the **curated spine**; do not become a vector store. Provenance flags matter more than embeddings |
| Skills ≠ RAG ≠ knowledge pack | Skills = capability/workflow; RAG = reach; this repo = authoritative distilled facts agents look up |

## Overlap guardrails (do not duplicate)

| Repo | Owns | Stay out of |
| --- | --- | --- |
| **agentbrief** | Task-scoped context packing from a *project* tree | Building a packer / brief CLI here |
| **ruleradar** | Path → which rules load + token tax UI | Rules activation visualizer |
| **mcplint** | Static lint for MCP tool names/descriptions/schemas | Shipping an MCP eslint product |
| **dangertape** | Session transcript replay for destructive patterns | Runtime session scanners |
| **helpgate** | README/`--help` flag parity | CLI docs CI product |
| **diffguard** | PR risk heuristics | Diff risk scanner |
| **lockplain** | Lockfile changelog | Package-diff tooling |
| **redline** | Designer markup → agent inbox | Mobile/design feedback loop |
| **orbitdesk / signal-drift / invoicekit** | Unrelated consumer apps | N/A |
| **daily-idea-lab** | Idea generation lab | Don’t reinvent ideation loops as product |

If an idea needs executable enforcement, **point** to the owning repo and keep this repo as the note that explains *when/why*.

## Coverage gaps (current corpus)

- Practices skew MCP/Cursor/steering; little on Skills vs corpus, freshness, provenance.
- Failure modes: 1 of ~10–14 widely documented classes.
- No lifecycle beyond `status: active|draft|deprecated` (no revalidation cadence).
- No `type` / trust vocabulary for cross-bundle consumers (OKF-adjacent).
- `when_to_use` exists but no authoring quality bar (Skills literature treats description as the *entire* trigger).

---

## Improvement ideas (≤5)

### 1. Context & instruction failure catalog

- **One-liner:** Add 2–4 short `failure-modes/` notes covering context pollution / lost-in-the-middle, stale instructions, compaction amnesia, and instruction conflict — with mitigations and citations.
- **Why:** Market taxonomies and production writeups treat these as the dominant coding-agent failures; the corpus only documents tool-call bugs. Agents debugging “why did it ignore the rule?” have nowhere to look here. Pure content fill on an empty shelf.
- **Effort:** S
- **Overlap:** Not dangertape (no transcript replay). Optional cross-link: “for destructive shell patterns in logs → dangertape.”

### 2. Layer map: AGENTS.md × Skills × lookup corpus

- **One-liner:** One practice page with a decision table — always-on steering vs on-demand Skill vs lookup note — plus anti-examples of AGENTS.md bloat.
- **Why:** 2025–2026 noise conflates Skills, RAG, CLAUDE.md, Cursor rules, and “knowledge packs.” A distilled routing note is an underserved wedge and sharpens this repo’s unique job (lookup spine, not workflow pack, not always-on tax).
- **Effort:** S
- **Overlap:** Complements existing `agents-md-and-rules-budget` and `knowledge-corpus-pattern`; does not build Skills tooling or agentbrief.

### 3. Freshness / revalidation protocol

- **One-liner:** Extend frontmatter with optional `stale_after` (or `revalidate_by`) + a runbook that agents/humans use to re-check source URLs and bump `updated` / demote `status`.
- **Why:** Stale instructions are a top failure mode; OKF v0.2 made lifecycle/trust signals first-class. Corpus notes cite sources with “accessed” dates but have no recall mechanism — trust decays silently.
- **Effort:** S
- **Overlap:** Not ruleradar (doesn’t measure rule token tax). Not helpgate (doesn’t sync CLI flags).

### 4. Selector hygiene for `when_to_use` + tags

- **One-liner:** Authoring checklist (and optional JSON Schema for `manifest.json` entries) so discovery text answers *what + when*, stays short, and avoids “wall of prose” skill-description anti-patterns.
- **Why:** Progressive disclosure only works if L1/index selection is crisp. Skills docs and Ardalis both warn that verbose selectors burn tokens and confuse routing — the same applies to this corpus’s only UX for agents.
- **Effort:** S
- **Overlap:** **Do not** ship an MCP/tool linter — that is **mcplint**. Keep schema/checklist in-repo; if a shared linter grows legs later, extract or point to mcplint-style patterns for *corpus* entries only.

### 5. OKF-lite trust fields (optional, additive)

- **One-liner:** Document optional OKF-aligned frontmatter (`type`, provenance/`sources` shape, optional `verified`) and map existing folders → concept types without rewriting the tree.
- **Why:** OKF formalizes the LLM-wiki pattern this repo already implements; light alignment improves portability for consumers that prefer curated bundles over RAG, without building a Knowledge Catalog or visualizer.
- **Effort:** M (schema docs + migrate a few entries + CONTRIBUTING; not a full OKF compliance project)
- **Overlap:** Belongs here as *format convention*, not as Google Cloud catalog tooling. Do not build hybrid RAG routers (orchestration belongs elsewhere).

---

## Explicit non-proposals (wrong repo or wrong product)

| Tempting idea | Why not here |
| --- | --- |
| MCP `list`/`get` server for the corpus | Productizes into tooling; optional later — note already mentions it; prefer agentbrief-style packing in consuming projects |
| Vector / RAG index over notes | Fights the curated-spine positioning; RAG is the long-tail half |
| Agent memory / session journal | Different problem (agent-written, per-user); literature separates memory vs curated knowledge |
| Rules token-tax dashboard | **ruleradar** |
| MCP description eslint | **mcplint** |
| Session destructive-pattern scanner | **dangertape** |
| Full Agent Skills marketplace pack | Skills are workflows; this is lookup — use idea #2 to clarify, don’t become a skill repo |

---

## Ranked bets (top 3)

| Rank | Bet | Rationale |
| --- | --- | --- |
| **1** | Context & instruction failure catalog | Highest demand × emptiest shelf; pure corpus value; S effort |
| **2** | Layer map (AGENTS / Skills / corpus) | Differentiates the product in a confused market; prevents wrong-repo features |
| **3** | Freshness / revalidation protocol | Trust is the next OKF-era battleground; cheap metadata + one runbook |

Ideas #4 and #5 are strong follow-ons once the top three land: selector hygiene raises discovery quality as the catalog grows; OKF-lite pays off if external consumers appear.

## Suggested sequencing

1. Failure-mode notes (content, immediate agent utility)  
2. Layer-map practice (positioning + prevents AGENTS.md dumps)  
3. Freshness runbook + frontmatter field (operational trust)  
4. Selector checklist / manifest schema  
5. OKF-lite field mapping (interop polish)

## Sources consulted

- https://agents.md/ — AGENTS.md open standard  
- https://addyosmani.com/agents/15-agents-md/ — adoption & AAIF context  
- https://www.betterclaw.io/blog/agents-md-best-practices — length / curation research claims  
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview.md — Skills progressive disclosure  
- https://ardalis.com/optimizing-ai-agents-with-progressive-disclosure/ — map-not-territory pattern  
- https://incontext.info/docs/reference/failure-modes/ — context failure taxonomy  
- https://codex.danielvaughan.com/2026/06/03/coding-agent-failure-taxonomy-nist-style-classification-detection-codex-cli/ — coding-agent failure classes  
- https://growthengineer.ai/blog/ai-agent-failure-modes — production failure modes  
- https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing — OKF  
- https://cloud.google.com/blog/products/data-analytics/okf-v0-2-adds-trust-signals — OKF trust/lifecycle  
- https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md — OKF spec  
- https://aitechconnect.in/tips/agent-memory-production-short-long-term-2026 — memory ≠ curated knowledge  
- https://aiskill.market/blog/skills-vs-rag-when-to-use — Skills vs RAG split  
- Sibling README skim: agentbrief, ruleradar, mcplint, dangertape, helpgate, diffguard, lockplain, redline, orbitdesk, signal-drift, invoicekit
