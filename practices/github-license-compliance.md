---
id: github-license-compliance
title: GitHub license compliance — rulesets plus agent package-checks
tags: [github, security, governance, ci]
status: active
updated: 2026-10-17
when_to_use: Blocking PRs on license policy, or having a coding agent check PURLs before adding a dependency
---

## Summary

**Open source license compliance** (GA 2026-10-16) is an Enterprise Cloud + Code Security control: an enterprise **allow** policy of SPDX licenses, enforced by branch rulesets. A separate REST **package-checks** endpoint lets coding agents query the same policy before they recommend or add a package. Not CodeQL / AI Scan (`github-code-scanning-ai-scan`) and not agentic autofix (`github-agentic-autofix`).

## Notes

- Scope: GitHub Enterprise Cloud (including data-resident GHEC). Enforcement on a repo also needs **GitHub Code Security** and a live **dependency graph**. Policy is an allow list (built-in picker or pasted SPDX IDs). Evaluation includes **transitive** deps seen in the graph.
- Rulesets (enterprise / org / repo) add **Requires license compliance results before merging**. **Active** blocks the PR until the violation is gone. **Evaluate** annotates only — unless a branch-protection rule that requires comment resolution is also on, in which case Evaluate annotations still gate merge. Start in Evaluate.
- Violations annotate the PR; they do **not** auto-open an exception. Resolution: replace the dep, amend the enterprise policy, or have an **Enterprise Open-Source License Manager** approve a package / license / pattern exception (repo or enterprise scope). Managers get email + enterprise security views. Developers with write can read the effective policy on the repo’s License policy settings page.
- Agent path (changelog: “enables coding agents to avoid recommending or incorporating packages which violate an organization’s license usage policy”): `POST /repos/{owner}/{repo}/license-compliance/package-checks` with `{"purls":["pkg:npm/lodash@4.17.21"]}`. Duplicates are checked once. Caller needs write or **View repository license policy**; classic PAT / OAuth needs `repo`. **404** = no policy. Treat a 200 as advisory until the ruleset is Active — agents should still not add a denied PURL. Policy CRUD and audit events (`license_compliance_policy` create/modify) are separate dependency-graph APIs.
- Rollout: a repo custom property (`inactive` / `evaluate` / `active`) plus two rulesets targeting those values. This is not a substitute for SCA/CVE review (`github-code-scanning-ai-scan`).

## Sources

- [About open source license compliance](https://docs.github.com/en/code-security/concepts/supply-chain-security/open-source-license-compliance) — accessed 2026-10-17
- [Configuring open source license policies](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-license-policies) — accessed 2026-10-17
- [REST API endpoints for license compliance](https://docs.github.com/en/enterprise-cloud@latest/rest/dependency-graph/license-compliance) — accessed 2026-10-17
- [Open source license compliance generally available](https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available/) — accessed 2026-10-17
