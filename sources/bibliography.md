# Bibliography

Sources consulted for initial seed (2026-08-06). Notes in this repo are summaries; follow links for originals.

| Topic | URL |
| --- | --- |
| MCP progressive discovery | https://modelcontextprotocol.io/docs/develop/clients/client-best-practices |
| Tools at scale / defer loading | https://gziolo.pl/2026/04/09/research-architecting-tools-for-ai-agents-at-scale/ |
| Progressive disclosure MCP skill notes | https://www.developersdigest.tech/library/skills/progressive-disclosure-mcp |
| Progressive disclosure (Ardalis) | https://ardalis.com/optimizing-ai-agents-with-progressive-disclosure/ |
| Cursor rules tutorial | https://aitoolsguidebook.com/en/articles/cursor-rules-tutorial/ |
| Cursor rules guide | https://www.vibecodingacademy.ai/blog/cursor-rules-complete-guide |
| AGENTS.md vs rules comparison | https://blog.buildbetter.ai/agents-md-vs-cursorrules-vs-claude-skills-2026-comparison/ |
| AGENTS.md vs CLAUDE.md vs Cursor | https://codersera.com/blog/agents-md-vs-claude-md-vs-cursor-rules-comparison-2026/ |
| Schema vs referent validation | https://tianpan.co/blog/2026-06-02-the-hallucinated-tool-argument-that-passed-schema-validation |
| Local model agent failure modes | https://specpicks.com/reviews/local-coding-agent-small-model-failure-modes-2026 |
| Agent tool hallucinations | https://manveerc.substack.com/p/ai-agent-hallucinations-prevention |
| Hallucinated tools pattern | https://www.agentpatternscatalog.org/patterns/hallucinated-tools/ |

## Daily ingest 2026-08-08

| Topic | URL |
| --- | --- |
| Demystifying evals for AI agents (Anthropic) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| Agent Evaluation Harness: Replay + CI Gates | https://www.kunalganglani.com/blog/agent-evaluation-harness-replay |
| How to Build an Evaluation Harness for Your AI Agent | https://www.scien.cx/2026/07/08/how-to-build-an-evaluation-harness-for-your-ai-agent-so-it-doesnt-break-in-production/ |
| Context Compaction: Delete Noise, Keep Signal | https://www.morphllm.com/context-compaction |
| Microsoft Agent Framework — compaction | https://learn.microsoft.com/en-us/agent-framework/agents/conversations/compaction |
| Collet research notes on context management | https://github.com/epicsagas/collet/blob/main/docs/research/context-management.md |
| Tools vs MCP vs Skills | https://sujaltangde.hashnode.dev/tools-mcp-and-skills-what-each-one-actually-does |
| MCP Servers vs Agent Skills (Developers Digest) | https://www.developersdigest.tech/blog/mcp-servers-vs-agent-skills-2026 |
| Skills vs MCP vs Tools (Agentmelt) | https://agentmelt.com/blog/ai-agent-skills-vs-mcp-vs-tools/ |
| OWASP LLM Prompt Injection Prevention Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html |
| GenAI LLM Top 10 — LLM01 Prompt Injection (2026) | https://github.com/GenAI-Security-Project/GenAI-LLM-Top10/blob/main/2026/LLM01_PromptInjection.md |
| Prompt Injection Defense for AI Agents | https://www.exploreagentic.ai/insights/prompt-injection-defense-enterprise-agents/ |
| OpenAI — Orchestration and handoffs | https://developers.openai.com/api/docs/guides/agents/orchestration |
| Microsoft Agent Framework — handoff orchestration | https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff |
| AI Agent Orchestration: Handoff Patterns for 2026 | https://coommit.com/blog/ai-agent-orchestration-2026 |
| OpenTelemetry GenAI semantic conventions (overview) | https://blog.triplecloud.tech/posts/instrument-llm-agent-opentelemetry |
| OTel GenAI attributes registry | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/registry/attributes/gen-ai.md |
| AI Agent Observability with OpenTelemetry | https://docs.base14.io/guides/ai-observability/agent-observability/ |
| OpenAI cookbook — Structured Outputs for Multi-Agent Systems | https://developers.openai.com/cookbook/examples/structured_outputs_multi_agent |
| Claude — Structured outputs | https://platform.claude.com/docs/en/build-with-claude/structured-outputs |
| Structured Outputs Are Doing More Work Than Most Teams Realize | https://agentengineering.org/articles/structured-outputs-are-doing-more-work-than-most-teams-realize/ |
| RAG vs LLM Wiki vs Plain Text decision framework | https://zhuoqidev.com/en/posts/memory-choice-framework/ |
| LLM Wiki vs RAG for Internal Codebase Memory | https://www.mindstudio.ai/blog/llm-wiki-vs-rag-internal-codebase-memory |
| ADRs before memory RAG | https://dev.to/shimo4228/claude-codes-memory-has-no-vectors-try-adrs-before-memory-rag-4kik |

## Daily ingest 2026-08-09

| Topic | URL |
| --- | --- |
| MCP OAuth 2.1 implementation (PKCE & scopes) | https://www.practical-devsecops.com/mcp-oauth-2-1-implementation/ |
| Authorization: OAuth 2.1 for HTTP MCP Servers | https://imti.co/mcp-authorization-oauth/ |
| MCP Server Authentication: OAuth 2.1, PKCE, and Token Exchange | https://facio.bot/blog/mcp-server-authentication-oauth-2-1-pkce-2026 |
| AI Agent Sandboxing: MicroVMs, gVisor, WASM | https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation |
| Choosing a Sandbox for AI Agent Code Execution (2026) | https://tanayshah.dev/blog/choosing-agent-sandbox-2026/ |
| Sandboxing an Agent That Executes Code | https://dev.to/multigrid/sandboxing-an-agent-that-executes-code-1noi |
| OpenAI — Prompt caching | https://developers.openai.com/api/docs/guides/prompt-caching |
| Anthropic skills — prompt caching guidance | https://github.com/anthropics/skills/blob/main/skills/claude-api/shared/prompt-caching.md |
| Tool use with prompt caching (Claude) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-use-with-prompt-caching |
| How to Redact Sensitive User Prompts in GenAI OTel Traces | https://oneuptime.com/blog/post/2026-02-06-redact-sensitive-prompts-genai-opentelemetry-traces/view |
| LangSmith — OTel gateway trace redaction | https://docs.langchain.com/langsmith/otel-gateway-trace-redaction |
| OpenTelemetry Collector contrib — redaction processor | https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/processor/redactionprocessor/README.md |
| AgentOS — Citation verification | https://docs.agentos.sh/features/citation-verification |
| Citation-Enhanced Generation (ACL 2024) | https://aclanthology.org/2024.acl-long.79/ |
| Groundedness API overview | https://groundedness.walkosystems.com/ |
| Demystifying evals for AI agents — isolation and flaky runs | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| Tool-call failure modes (related corpus note) | https://github.com/piyatat/agent-knowledge/blob/main/failure-modes/tool-call-failures.md |
| OWASP LLM prompt injection cheat sheet — action screening | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html |
| OpenAI — Orchestration and handoffs | https://developers.openai.com/api/docs/guides/agents/orchestration |
| Microsoft Agent Framework — handoff vs agents-as-tools | https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff |
| Context compaction patterns | https://www.morphllm.com/context-compaction |
| Agent cost/step budgets (related corpus note) | https://github.com/piyatat/agent-knowledge/blob/main/practices/agent-cost-step-budgets.md |
| MCP security — rate limit by agent identity | https://apiscout.dev/guides/anthropic-mcp-server-security-2026 |
| MCP Servers vs Agent Skills — progressive disclosure | https://www.developersdigest.tech/blog/mcp-servers-vs-agent-skills-2026 |
| Tools vs MCP vs Skills | https://sujaltangde.hashnode.dev/tools-mcp-and-skills-what-each-one-actually-does |
| Claude Code skills architecture / progressive loading | https://www.mindstudio.ai/blog/claude-code-skills-architecture-progressive-context-loading |
| Agent Evaluation Harness — Replay + CI Gates | https://www.kunalganglani.com/blog/agent-evaluation-harness-replay |
| How to Build an Evaluation Harness for Your AI Agent | https://www.scien.cx/2026/07/08/how-to-build-an-evaluation-harness-for-your-ai-agent-so-it-doesnt-break-in-production/ |

## Daily ingest 2026-08-10

| Topic | URL |
| --- | --- |
| Graceful tool-output truncation (Agent Patterns) | https://agentpatterns.ai/tool-engineering/graceful-tool-output-truncation/ |
| Tool Results Are Context Too (Multigrid) | https://multigrid.ai/learn/tool-result-context |
| Writing tools for agents (Anthropic) | https://www.anthropic.com/engineering/writing-tools-for-agents |
| Tool Calling Best Practices for LLMs (2026) | https://ai-tldr.dev/learn/llm-apis/function-calling/tool-calling-best-practices/ |
| LLM Agent Tool Result Summarization and Truncation | https://solana.garden/guides/llm-agent-tool-result-summarization-truncation-explained/ |
| How we contain Claude across products (Anthropic) | https://www.anthropic.com/engineering/how-we-contain-claude |
| Trustworthy agents in practice (Anthropic) | https://www.anthropic.com/research/trustworthy-agents |
| Guardrails and human review (OpenAI) | https://developers.openai.com/api/docs/guides/agents/guardrails-approvals |
| A2A project (GitHub) | https://github.com/a2aproject/A2A |
| MCP vs A2A (Auth0) | https://auth0.com/blog/mcp-vs-a2a/ |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |
| WorkflowAgent (AI SDK) | https://ai-sdk.dev/docs/agents/workflow-agent |
| What is WorkflowAgent? (Vercel KB) | https://vercel.com/kb/guide/what-is-workflowagent |
| Agent approval workflow stack guide | https://vercel.com/kb/guide/agent-approval-workflow-stack-guide |
| Demystifying evals for AI agents (Anthropic) | https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents |
| judge-audit-mcp | https://github.com/asif786ka/judge-audit-mcp |
| When AIs Judge AIs (arXiv) | https://arxiv.org/html/2508.02994v1 |
| MCP tools specification | https://modelcontextprotocol.io/specification/2025-03-26/server/tools |
| Tools vs Resources vs Prompts | https://prashamhtrivedi.in/mcp-primitive-youre-misusing/ |
| AI Agent Sandboxing: MicroVMs, gVisor, WASM | https://zylos.ai/research/2026-04-04-ai-agent-sandboxing-security-isolation |
| Sandboxing an Agent That Executes Code | https://dev.to/multigrid/sandboxing-an-agent-that-executes-code-1noi |
| gitleaks | https://github.com/gitleaks/gitleaks |
| Catching Secrets in AI-Generated Code Before They Reach Git | https://dev.to/marcin_brzozka_ff45b1ccb6/catching-secrets-in-ai-generated-code-before-they-reach-git-2kdk |
| I let an AI agent into my repo — lock down first | https://dev.to/mikobuilds/i-let-an-ai-agent-into-my-repo-heres-what-i-lock-down-first-5145 |

## Daily ingest 2026-08-12

| Topic | URL |
| --- | --- |
| MCP elicitation (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation |
| MCP round-trip requests replace elicitation | https://www.channel.tel/blog/mcp-round-trip-requests-replace-elicitation |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| FastMCP elicitation guide | https://gofastmcp.com/servers/elicitation |
| Scaling AI Agent Infrastructure — MCP stateless (Google) | https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/ |
| MCP 2026-07-28: what the stateless core removes | https://packetnebula.com/articles/mcp-2026-07-28-what-stateless-removes/ |
| MCP stateless migration guide | https://hashnode.com/blog/mcp-stateless-migration |
| SEP-2577: Deprecate Roots, Sampling, and Logging | https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2577-deprecate-roots-sampling-and-logging.md |
| AAIF: MCP 2026-07-28 migration | https://aaif.io/blog/mcp-2026-07-28-whats-changing-and-how-to-migrate |
| SessionTrail — transcript behavior reviewer | https://github.com/Conalh/SessionTrail |
| Agent Trace Hub | https://github.com/selimozten/agent-trace-hub |
| Agent-Trail dashboard | https://github.com/camtrik/agent-trail |
| Claude Code self-telemetry guide | https://github.com/ytrofr/claude-code-guide/blob/main/docs/guide/part5-advanced/03-self-telemetry.md |
| JSONL observability gaps (Claude Code #41215) | https://github.com/anthropics/claude-code/issues/41215 |
| Cronitor heartbeat monitoring | https://cronitor.io/docs/heartbeat-monitoring |
| incident.io heartbeat monitoring | https://docs.incident.io/alerts/heartbeat-monitoring |
| Webhook + heartbeat monitoring | https://cronalert.com/blog/webhook-endpoint-monitoring |
| Monitoring webhook receivers (inbound) | https://cronalert.com/blog/webhook-receiver-monitoring |
| Synthetic end-to-end webhook pipeline testing | https://gethook.to/blog/synthetic-end-to-end-webhook-pipeline-testing |

## Daily ingest 2026-08-15 (cloud catch-up)

| Topic | URL |
| --- | --- |
| Lost in the Middle (Liu et al.) | https://arxiv.org/abs/2307.03172 |
| Context Compaction: Delete Noise, Keep Signal | https://www.morphllm.com/context-compaction |
| AGENTS.md vs Cursor rules — context budget | https://github.com/piyatat/agent-knowledge/blob/main/practices/agents-md-and-rules-budget.md |
| OWASP LLM Prompt Injection Prevention | https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html |
| Human-in-the-loop approvals (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/human-in-the-loop-approvals.md |
| ADRs before memory RAG | https://dev.to/shimo4228/claude-codes-memory-has-no-vectors-try-adrs-before-memory-rag-4kik |
| Knowledge corpus pattern | https://github.com/piyatat/agent-knowledge/blob/main/practices/knowledge-corpus-pattern.md |
| MCP 2026-07-28 specification blog | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| Google: MCP stateless updates | https://developers.googleblog.com/scaling-ai-agent-infrastructure-with-the-mcp-stateless-updates/ |
| OpenTelemetry GenAI semantic conventions | https://github.com/open-telemetry/semantic-conventions/blob/v1.37.0/docs/gen-ai/gen-ai-spans.md |
| AI Agent Observability with OpenTelemetry | https://docs.base14.io/guides/ai-observability/agent-observability/ |
| Agent cost/step budgets (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/agent-cost-step-budgets.md |
| Rate limits and backoff (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/rate-limit-backoff-tools.md |
| A2A project | https://github.com/a2aproject/A2A |
| MCP vs A2A (Auth0) | https://auth0.com/blog/mcp-vs-a2a/ |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |
| Heartbeat dead-man-switch (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/practices/heartbeat-dead-man-switch.md |
| Collect from web (corpus) | https://github.com/piyatat/agent-knowledge/blob/main/runbooks/collect-from-web.md |

## Daily ingest 2026-08-22 (gap-fill)

| Topic | URL |
| --- | --- |
| MCP Apps overview | https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html |
| SEP-1865: MCP Apps | https://modelcontextprotocol.io/seps/1865-mcp-apps-interactive-user-interfaces-for-mcp |
| MCP Apps are live (MCP Blog, 2026-01-26) | https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/ |
| MCP Tasks overview | https://modelcontextprotocol.io/extensions/tasks/overview |
| SEP-2663: Tasks Extension | https://modelcontextprotocol.io/seps/2663-tasks-extension |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| Code execution with MCP (Anthropic) | https://www.anthropic.com/engineering/code-execution-with-mcp |
| Programmatic Tool Calling (OpenAI) | https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling |
| The next generation of MCP (Cloudflare) | https://blog.cloudflare.com/mcp-v2/ |
| Tool search (OpenAI) | https://developers.openai.com/api/docs/guides/tools-tool-search |
| API deployment checklist — use tool_search | https://developers.openai.com/api/docs/guides/deployment-checklist |
| The MCP Registry (about) | https://modelcontextprotocol.io/registry/about |
| MCP Registry in 2026: discover, verify, connect | https://digitalthoughtdisruption.com/2026/07/20/mcp-registry-discover-verify-safely-connect-servers/ |
| MCP supply chain: treat servers as artifacts | https://nhimg.org/articles/mcp-supply-chain-security-means-treating-servers-as-artifacts/ |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Cursor changelog index | https://cursor.com/changelog |
| Cursor gives cloud agents subscriptions, /goal and subagent VMs | https://aiweekly.co/alerts/cursor-gives-cloud-agents-subscriptions-goal-and-subagent-vms |
| Claude Code memory | https://code.claude.com/docs/en/memory |
| Claude Code hooks guide | https://code.claude.com/docs/en/hooks-guide |
| Which CLAUDE.md files actually load | https://dev.to/rulestack/which-claudemd-files-claude-code-actually-loads-and-in-what-order-3be0 |
| MCP Security Best Practices (2026-07-28) | https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices |
| MCP authorization security considerations | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/security-considerations |
| MCP Security: risks and best practices (OX) | https://www.ox.security/academy/ai-security/mcp-security-risks-and-best-practices-for-model-context-protocol/ |
| Agent Skills specification | https://agentskills.io/specification |
| Agent Skills overview | https://agentskills.io/home |
| Equipping agents with Agent Skills (Anthropic) | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| MCP OAuth 2.1 implementation (PKCE & scopes) | https://www.practical-devsecops.com/mcp-oauth-2-1-implementation/ |
| Authorization: OAuth 2.1 for HTTP MCP Servers | https://imti.co/mcp-authorization-oauth/ |
