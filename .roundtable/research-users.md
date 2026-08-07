# Users seat — research brief

**Repo:** `agent-knowledge` (curated lookup corpus only — notes + index, not a product runtime)  
**Date:** 2026-08-07  
**Question:** What do practitioners complain about / wishlist for agent memory, ADR lookup, and org knowledge — and which **new notes** would help without reinventing sibling tools?

---

## Method

Web scan of 2025–2026 material on coding-agent memory, ADR tooling, AGENTS.md / context rot, and agent runbooks (HN Show HNs, industry blogs, Mem0 state-of-memory, ArcticMem/Onevium, adr-kit/decider/Mneme, Junction runbook guides, Stack Overflow / Vellum “almost right” framing).

Checked existing corpus: practices on progressive disclosure, tool hygiene, rules budget, knowledge-corpus pattern; one failure-mode; thin `runbooks/` (collect-only).

---

## User pain themes (external)

| Theme | Signal | Implication for this repo |
| --- | --- | --- |
| **Cross-session amnesia** | Agents re-explain auth, conventions, failed approaches every session; context windows are RAM not disk ([Onevium](https://onevium.com/blog/why-your-ai-coding-agent-forgets-everything), [ArcticMem](https://www.snowflake.com/en/blog/engineering/arcticmem-persistent-memory-ai-agents/)) | Corpus should teach **what to persist as facts**, not how to build Mem0 |
| **Bigger windows ≠ memory** | Context rot / lost-in-the-middle; cost up, quality down ([Hamed Taheri](https://hamedtaheri.com/articles/why-coding-agents-forget/), Mem0 2026) | Reinforce lean index + selective open (already started); add **staleness / supersede** guidance |
| **Stale steering is worse than thin** | AGENTS.md path/script/framework rot; ETH-linked claims on success↓ / tokens↑; HN on agents-lint ([HN](https://news.ycombinator.com/item?id=47189911)) | Need a **failure-mode note** on confident wrong instructions — content freshness, not RuleRadar’s activation tax |
| **ADR unread / unenforced** | Agents load all ADRs, none, or treat them as soft advice; toolkits add indexes + mid-edit checks ([adr-kit](https://github.com/rvdbreemen/adr-kit), [decider](https://github.com/sventorben/decider), [Mneme](https://mnemehq.com/insights/how-ai-coding-agents-use-adrs/)) | Store **how to shape ADRs for selective lookup** — not an enforcement CLI |
| **Code ≠ work knowledge** | Agents miss ownership, tickets, deploy blockers, tribal “we tried X” ([Vellum](https://www.vellum.ai/blog/best-ai-coding-agents)); “almost right” is the top SO frustration | Curate **note types** for non-code org facts agents actually need |
| **Agents bloat “memory”** | HN: agents don’t know what’s worth remembering; journals fill with noise ([Agent Kernel thread](https://news.ycombinator.com/item?id=47486287)) | Publish **extract / reject criteria** for durable notes |
| **Task-class runbooks** | Short SOPs with scope, verify, stop conditions beat mega-prompts ([Junction](https://junctionpanel.dev/blog/ai-coding-agent-runbooks/)) | Expand `runbooks/` beyond “how to scrape” |

Hard open problems called out industry-wide: **memory staleness**, temporal reasoning, provenance, conflict detection — perfect for glossary + practices pages, not for shipping a memory server here.

---

## Overlap check (do not reinvent)

| Sibling | Job | Stay out of |
| --- | --- | --- |
| **ruleradar** | Which rules load / token tax | Don’t build a rules scanner; may *cite* tax as reason to keep notes off always-on |
| **agentbrief** | Pack ranked repo files for a task | Don’t pack code; notes may say “pair corpus hits with a packer” |
| **mcplint** | Lint MCP tool UX | Already have tool-description practice; don’t duplicate linter product |
| **dangertape** | Replay transcripts for dangerous tool use | Not session forensics |
| **diffguard** | PR risk heuristics | Not diff scanning |
| **helpgate** / **lockplain** | Docs↔CLI / lockfile changelogs | Unrelated |
| **redline** | Designer markup → agent | Unrelated |
| **orbitdesk** / **signal-drift** / **invoicekit** | Timer / radio / invoices | Unrelated |

This repo’s lane: **curated, tagged, cited markdown** agents open by `when_to_use` — templates and failure modes welcome; runtimes and CLIs belong elsewhere.

---

## Proposed ideas (≤5)

### 1. Durable fact schema & memory hygiene
- **One-liner:** A practice note defining typed durable facts (decision, preference, gotcha, ownership) with `captured_at`, `supersedes`, `stale_when`, and reject criteria for chat bloat.
- **Why:** Amnesia is the loudest complaint; dumping transcripts fails; HN confirms agents over-memorize. Users need a **write shape** for knowledge that stays correct as code moves.
- **Effort:** S
- **Overlap:** None of the siblings — pattern doc only (not Mem0/ArcticMem).

### 2. Selective ADR context cookbook
- **One-liner:** How to author ADRs + a lean index (status, paths/globs, topics, relationships) so agents open 3–5 governing decisions instead of the whole catalogue.
- **Why:** ADRs are human docs agents ignore or drown in; 2026 ADR kits all converge on selective retrieval. Corpus gap: we say “store ADRs” but don’t teach **agent-queryable shape**.
- **Effort:** S
- **Overlap:** Not decider/adr-kit (no CLI/hooks); complementary pointers in `sources/`.

### 3. Org knowledge inventory (what agents need beyond code)
- **One-liner:** A short catalogue of high-value note types — module ownership, env/setup gotchas, “we tried X / don’t do Y”, deploy/rollback pointers, interface contracts — with examples of what *not* to paste (tickets, secrets, logs).
- **Why:** “Knows your code, not your work” + almost-right frustration; teams over-collect Confluence and under-collect the tribal constraints that make agents miss.
- **Effort:** M (several exemplar stubs + inventory page)
- **Overlap:** Extends `knowledge-corpus-pattern`; does not replace agentbrief’s file ranking.

### 4. Task-class agent runbook anatomy
- **One-liner:** Template for narrow runbooks: task class, allowed paths, forbidden areas, verify commands, stop/escalate conditions, definition of done.
- **Why:** Recurring work is where memory + process meet; users retype the same boundaries every session. `runbooks/` is nearly empty.
- **Effort:** S
- **Overlap:** Not dangertape (pre-task SOP vs post-session replay); not helpgate.

### 5. Context-rot failure mode (stale steering)
- **One-liner:** Failure-modes note: renamed paths, dead npm scripts, superseded framework APIs in AGENTS.md/rules — why confident wrong context hurts more than missing context; maintainer checklist (supersede vs edit, link to corpus, periodic freshness).
- **Why:** Fresh HN + lint tooling energy; ETH-cited cost/quality hit. Complements rules-budget practice (quantity) with **correctness over time**.
- **Effort:** S
- **Overlap:** RuleRadar = activation/tax UI; this = content freshness narrative for agents/maintainers. Point out agents-lint-class tools in sources; don’t ship one.

---

## Ranked top 3 (users seat recommendation)

1. **Durable fact schema & memory hygiene** — highest demand signal; unlocks trustworthy growth of the corpus.
2. **Selective ADR context cookbook** — clear gap vs hot external tooling; fits existing ADR tag in corpus pattern.
3. **Org knowledge inventory** — answers “what data agents need” directly; guides what to collect next.

Runbook anatomy (#4) and context-rot failure mode (#5) are strong fast follows (both S).

---

## Sources (accessed 2026-08-07)

- https://onevium.com/blog/why-your-ai-coding-agent-forgets-everything
- https://www.snowflake.com/en/blog/engineering/arcticmem-persistent-memory-ai-agents/
- https://hamedtaheri.com/articles/why-coding-agents-forget/
- https://mem0.ai/blog/state-of-ai-agent-memory-2026
- https://www.vellum.ai/blog/best-ai-coding-agents
- https://github.com/rvdbreemen/adr-kit
- https://github.com/sventorben/decider
- https://mnemehq.com/insights/how-ai-coding-agents-use-adrs/
- https://news.ycombinator.com/item?id=47189911 (agents-lint / AGENTS.md rot)
- https://news.ycombinator.com/item?id=47486287 (Agent Kernel / memory bloat)
- https://junctionpanel.dev/blog/ai-coding-agent-runbooks/
- Sibling README skim: redline, ruleradar, lockplain, helpgate, dangertape, mcplint, orbitdesk, agentbrief, invoicekit, diffguard, signal-drift
