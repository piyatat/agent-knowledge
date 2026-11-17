---
id: snyk-agent-scan
title: Snyk Agent Scan — inventory MCP servers, agents, and skills
kind: tool
tags: [snyk, security, mcp, skills]
status: active
updated: 2026-11-17
when_to_use: Inventorying local coding-agent MCP servers and skills for prompt injection before trusting them
---

## Summary

**Snyk Agent Scan** (`snyk-agent-scan`, formerly mcp-scan) discovers agent configs, MCP servers, and skills on a machine and sends them for analysis. **v0.6+** reports scored risks via the **2026-07-10** API. **v0.5.x** still emits issue codes via the **2025-09-02** API and is planned for deprecation. It is a scanner, not the IDE hooks in Snyk Studio (`snyk-studio`).

## Notes

- **Access.** There is no npm package. Use the Python package `snyk-agent-scan` or a standalone binary from GitHub releases (`links.get`). Releases include an SBOM and signed checksums. The project does not take external contributions.
- **Auth.** Scans need `SNYK_TOKEN` from the Snyk account API-token page. Free-tier tokens hit a daily cap and then the message “Daily usage limit reached”. The numeric cap is not published on the README. Enterprise fleet scans are Snyk Evo background mode, arranged with Snyk.
- **What it checks.** v0.6 reports prompt injection, untrusted content, private data, destructive capabilities, and malicious skills. It discovers Claude, Cursor, Copilot, Windsurf, Gemini CLI, Amp, Amazon Q, and others, with gaps: Gemini CLI project skills and servers, Amp project skills, Claude Code system skills, and Claude Desktop user skills are not all scanned. `inspect` lists components without analysis. `--ci` exits non-zero when findings or operational failures remain.
- **What leaves the machine.** Analysis sends agent details, MCP config and signatures, tool names and descriptions, and skill content. Secrets in config and text are redacted first. Tool-call arguments and results are not logged. Large-scale use of the standard analysis API is treated as abuse. Terms are in the repo `TERMS.md`.
- **Alternatives.** Snyk Studio when a coding agent should scan the code it just wrote (`snyk-studio`). Semgrep Guardian for SAST findings in the editor (`semgrep-guardian`).
- **Caveats.** A scan can execute stdio MCP commands and call remote MCP URLs (`snyk-agent-scan-executes`). CLI field names, risk names, and JSON shape are experimental; do not pin a production parser to them. v0.5 and v0.6 output are different schemas. State lives in `~/.mcp-scan` by default.

## Sources

- [snyk/agent-scan README](https://github.com/snyk/agent-scan/blob/main/README.md) — accessed 2026-11-17
- [Agent Scan releases](https://github.com/snyk/agent-scan/releases) — accessed 2026-11-17
