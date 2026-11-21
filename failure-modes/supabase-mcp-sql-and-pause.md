---
id: supabase-mcp-sql-and-pause
title: Supabase MCP runs unexpected SQL, or a free project is paused
kind: knowledge
tags: [supabase, mcp, postgres, billing]
status: active
updated: 2026-11-21
when_to_use: A Supabase agent query followed instructions in a row, a project will not connect, or a branch creation billed you
---

## Summary

Supabase MCP (`supabase`) runs SQL with the developer’s permissions unless the URL opts into read-only mode. Rows can contain prompt injection, and the destructive-SQL prompt does not see every dangerous statement. A free project also pauses after a week without traffic, which looks like a connection failure.

## Notes

- **Untrusted rows.** The documented attack is a support ticket, or any other cell, that tells the model to query another table. Supabase wraps SQL results with instructions not to follow commands in the data. That wrapper is not reliable. Keep the client’s per-call approval on. An unattended job should be project-scoped and read-only, and should stop rather than write. Do not hand this server to end users; it acts as a developer.
- **Confirmations are optional.** `read_only=true` is off until the URL sets it. Outside that mode, `execute_sql` and `apply_migration` ask only when the server classifies the SQL as destructive, and only if the client supports form elicitation. Unclassified SQL runs with no extra prompt. `skip_elicitations=execute_sql,apply_migration` removes that prompt. Some clients answer elicitations from a hook, so a dialog is not proof a person approved the call. Read-only mode still applies when the prompt is skipped.
- **Projects and branches.** A zero-cost `create_project` does not ask for cost confirmation. Branch creation asks you to confirm the list price before allowances. Skipping the form does not waive the charge; the legacy `get_cost` / `confirm_cost` path still applies, and those helpers are hidden on a project-scoped connection. Branch tools require a paid plan. On Pro, a branch is **$0.01344 per hour**. Paid projects are not paused for inactivity. Free projects pause after **one week**, and only **two** free projects can be active.
- **Notebooks.** Enabling the Notebooks group lets the agent run cells even when the Database group is off. A plain read, including a `SELECT` that calls a function that writes, runs without the notebook form. Plain reads use a read-only Postgres role. One `run_notebook` call runs at most **50** query cells. If the client cannot show forms, cells that need confirmation are refused rather than run. `skip_elicitations` removes that refusal.
- **Secrets.** `create_edge_function_secret` asks for a name, not the value. The value belongs in the Dashboard page the client opens. Canceling the tool does not delete a secret already saved there.

## Sources

- [Supabase MCP server](https://supabase.com/docs/guides/ai-tools/mcp) — accessed 2026-11-21
- [Supabase pricing](https://supabase.com/pricing) — accessed 2026-11-21
