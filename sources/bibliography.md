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

## Daily ingest 2026-08-22 (evening gap-fill)

| Topic | URL |
| --- | --- |
| AG-UI overview | https://docs.ag-ui.com/introduction |
| AG-UI GitHub | https://github.com/ag-ui-protocol/ag-ui/ |
| A2UI home | https://a2ui.org/ |
| What is A2UI | https://github.com/a2ui-project/a2ui/blob/main/docs/introduction/what-is-a2ui.md |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Bugbot docs | https://cursor.com/docs/bugbot.md |
| Building a better Bugbot | https://cursor.com/blog/building-bugbot |
| Bugbot updates (June 2026) | https://cursor.com/blog/bugbot-updates-june-2026 |
| Claude Code permissions | https://code.claude.com/docs/en/permissions |
| Claude Code hooks guide | https://code.claude.com/docs/en/hooks-guide |
| Guardrails and human review (OpenAI) | https://developers.openai.com/api/docs/guides/agents/guardrails-approvals |
| MCP caching (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/caching |
| SEP-2549 TTL for list results | https://modelcontextprotocol.io/seps/2549-TTL-for-list-results |
| MCP Python SDK — caching hints | https://py.sdk.modelcontextprotocol.io/client/caching/ |
| MCP subscriptions (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/subscriptions |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| MCP TypeScript SDK — subscribe to changes | https://ts.sdk.modelcontextprotocol.io/v2/clients/subscriptions.html |
| MCP completion (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion |
| MCP TypeScript SDK — Completion | https://ts.sdk.modelcontextprotocol.io/v2/servers/completion.html |
| MCP Python SDK — Completions | https://py.sdk.modelcontextprotocol.io/v2/servers/completions/ |
| microsoft/playwright-mcp | https://github.com/Microsoft/playwright-mcp |
| MCP Security Best Practices | https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices |
| Playwright MCP security guide | https://microsoft-playwright-mcp.mintlify.app/guides/security |
| OpenAI Agents SDK — Guardrails | https://openai.github.io/openai-agents-python/guardrails/ |
| NVIDIA NeMo Guardrails | https://github.com/NVIDIA-NeMo/Guardrails |
| MCP tools (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/tools |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |

## Daily ingest 2026-08-23 (gap-fill)

| Topic | URL |
| --- | --- |
| AST01 — Malicious Skills (OWASP) | https://owasp.org/www-project-agentic-skills-top-10/ast01.html |
| Agent Skills Guide 2026 (Termdock) | https://www.termdock.com/en/blog/agent-skills-guide |
| Agent Skills specification | https://agentskills.io/specification |
| Agent Discovery (A2A Protocol) | https://a2a-protocol.org/latest/topics/agent-discovery/ |
| A2A Agent Cards (StackA2A) | https://stacka2a.dev/blog/a2a-agent-card-explained |
| A2A Agent Card Specification (StackA2A) | https://stacka2a.dev/learn/agent-card-spec |
| MCP Discovery (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/discover |
| The 2026-07-28 Specification (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-07-28/ |
| How AgentCore Gateway supports the MCP 2026-07-28 spec | https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/ |
| Stateless MCP still needs an MCP-native dataplane (agentgateway) | https://agentgateway.dev/blog/2026-07-21-stateless-mcp-still-needs-mcp-native-dataplane/ |
| Agent Memory Poisoning (Tian Pan) | https://tianpan.co/blog/2026-04-10-agent-memory-poisoning-persistent-compromise |
| From Untrusted Input to Trusted Memory (αXiv 2606.04329) | https://www.alphaxiv.org/abs/2606.04329 |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Cloud Agents overview | https://cursor.com/docs/cloud-agent |
| Cloud Agent Builds | https://cursor.com/docs/cloud-agent/builds |
| Cloud agents start 3x faster with builds | https://cursor.com/blog/builds |
| OIDC tokens (Cursor Cloud Agents) | https://cursor.com/docs/cloud-agent/identity |
| Secrets & Network | https://cursor.com/docs/cloud-agent/security-network.md |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| The New MCP Roadmap (blog) | https://blog.modelcontextprotocol.io/posts/mcp-roadmap/ |

## Daily ingest 2026-08-24 (gap-fill)

| Topic | URL |
| --- | --- |
| MCP tools (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/tools |
| schema.ts ToolAnnotations / outputSchema | https://github.com/modelcontextprotocol/specification/blob/main/schema/2026-07-28/schema.ts |
| Tool Annotations as Risk Vocabulary (MCP Blog) | https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/ |
| 2026-07-28 changelog (SEP-2106) | https://modelcontextprotocol.io/specification/2026-07-28/changelog.md |
| MCP prompts (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/prompts |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |
| MCP completion (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion |
| MCP pagination (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/pagination |
| MCP Python SDK — Pagination | https://py.sdk.modelcontextprotocol.io/v2/advanced/pagination/ |
| Using Headless CLI | https://cursor.com/docs/cli/headless |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| GitHub Actions (Cursor CLI) | https://cursor.com/docs/cli/github-actions.md |
| CLI permissions | https://cursor.com/docs/cli/reference/permissions.md |
| CLI authentication | https://cursor.com/docs/cli/reference/authentication.md |
| Worktrees (Agents Window / IDE) | https://cursor.com/docs/configuration/worktrees.md |
| CLI changelog — Git worktrees | https://cursor.com/docs/cli/changelog |
| sandbox.json reference | https://cursor.com/docs/reference/sandbox.md |
| Run Modes | https://cursor.com/docs/agent/security/run-modes.md |
| Implementing a secure sandbox for local agents | https://cursor.com/blog/agent-sandboxing |
| Cursor Agent Skills | https://cursor.com/docs/skills |
| Claude Code skills | https://code.claude.com/docs/en/skills |
| Agent Skills specification | https://agentskills.io/specification |
| OWASP Top 10 for Agentic Applications for 2026 | https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ |
| Release post — ASI01–ASI10 examples | https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/ |
| OWASP Agentic Skills Top 10 | https://owasp.org/www-project-agentic-skills-top-10/ |
| Cursor Plugins | https://cursor.com/docs/plugins.md |
| Plugins help | https://cursor.com/help/customization/plugins.md |
| Agent Plugins standard | https://agent-plugins.org |

## Daily ingest 2026-08-25 (gap-fill)

| Topic | URL |
| --- | --- |
| Cursor Hooks | https://cursor.com/docs/hooks.md |
| Cloud Agents — hooks support | https://cursor.com/docs/cloud-agent |
| Cloud Agents help — Do Cloud Agents run hooks? | https://cursor.com/help/ai-features/cloud-agents |
| Agent mode help | https://cursor.com/help/ai-features/agent |
| Ask mode help | https://cursor.com/help/ai-features/ask-mode.md |
| Plan Mode | https://cursor.com/docs/agent/plan-mode |
| Debug Mode | https://cursor.com/docs/agent/debug-mode |
| Best practices for coding with agents | https://cursor.com/blog/agent-best-practices |
| Cursor Rules | https://cursor.com/docs/rules.md |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Deeplinks | https://cursor.com/docs/reference/deeplinks.md |
| MCP Progress (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/progress |
| MCP Streamable HTTP | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http |
| MCP changelog 2026-07-28 | https://modelcontextprotocol.io/specification/2026-07-28/changelog |
| MCP Cancellation (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/cancellation |
| A2A Streaming & Asynchronous Operations | https://a2a-protocol.org/latest/topics/streaming-and-async/ |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| A2A streaming-and-async (GitHub docs) | https://github.com/a2aproject/A2A/blob/main/docs/topics/streaming-and-async.md |
| Plugin commands format | https://cursor.com/docs/reference/plugins.md |
| Cursor Agent Skills — migrate-to-skills | https://cursor.com/docs/skills |
| Cursor Subagents | https://cursor.com/docs/subagents |
| MCP Basic — _meta and OpenTelemetry trace context (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic |
| OpenTelemetry semantic conventions for MCP | https://opentelemetry.io/docs/specs/semconv/gen-ai/mcp/ |
| MCP Logging (deprecated) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/logging |

## Daily ingest 2026-08-26 (gap-fill)

| Topic | URL |
| --- | --- |
| Cursor MCP | https://cursor.com/docs/mcp |
| MCP integrations (help) | https://cursor.com/help/customization/mcp |
| Cloud Agent capabilities — MCP tools | https://cursor.com/docs/cloud-agent/capabilities |
| Cursor ignore file | https://cursor.com/docs/reference/ignore-file |
| sandbox.json reference | https://cursor.com/docs/reference/sandbox.md |
| @ mentions and context (help) | https://cursor.com/help/customization/context.md |
| Prompting agents | https://cursor.com/docs/agent/prompting |
| MCP stdio (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio |
| MCP changelog 2026-07-28 | https://modelcontextprotocol.io/specification/2026-07-28/changelog |
| MCP Logging (deprecated) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/logging |
| MCP Basic — error codes (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic |
| MCP resources (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/resources |
| RFC 6570 URI Template | https://datatracker.ietf.org/doc/html/rfc6570 |
| MCP completion (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/utilities/completion |
| MCP Authorization Server Discovery (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/authorization-server-discovery |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| RFC 9728 OAuth 2.0 Protected Resource Metadata | https://datatracker.ietf.org/doc/html/rfc9728 |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| What's New in A2A v1.0 | https://a2a-protocol.org/latest/whats-new-v1/ |
| a2a.utils.signing (Python SDK) | https://a2a-protocol.org/latest/sdk/python/api/a2a.utils.signing.html |
| A2A Enterprise-Ready Features | https://a2a-protocol.org/latest/topics/enterprise-ready/ |
| MCP tools — content types (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/tools |

## Daily ingest 2026-08-27 (gap-fill)

| Topic | URL |
| --- | --- |
| MCP Base Protocol — icons (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic |
| SEP-973 — icons and websiteUrl | https://modelcontextprotocol.io/seps/973-expose-additional-metadata-for-implementations-res.md |
| MCP Streamable HTTP (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http |
| MCP Security Best Practices | https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices |
| MCP TypeScript SDK — Serve over HTTP | https://ts.sdk.modelcontextprotocol.io/v2/serving/http.html |
| MCP MRTR (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/mrtr |
| Privacy and Data Governance | https://cursor.com/docs/enterprise/privacy-and-data-governance |
| Cloud Agent security | https://cursor.com/docs/cloud-agent/security |
| Secrets & Network | https://cursor.com/docs/cloud-agent/security-network |
| Data Use & Privacy Overview | https://cursor.com/privacy-overview |
| Cloud Agent OIDC tokens | https://cursor.com/docs/cloud-agent/identity |
| Agent tools — Search | https://cursor.com/docs/agent/tools/search |
| Ignore file | https://cursor.com/docs/reference/ignore-file |
| Governed Cloud Agents / self-hosted | https://cursor.com/docs/cloud-agent/self-hosted |
| Choose where Cloud Agents run | https://cursor.com/docs/cloud-agent/self-hosted-guides/choose-runtime |
| A2A Life of a Task | https://a2a-protocol.org/latest/topics/life-of-a-task/ |
| A2A Core Concepts | https://a2a-protocol.org/latest/topics/key-concepts/ |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| A2A Extensions | https://a2a-protocol.org/latest/topics/extensions/ |
| SEP-2640 Skills Extension (draft) | https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2640-skills-extension.md |
| experimental-ext-skills SEP draft | https://github.com/modelcontextprotocol/experimental-ext-skills/blob/main/docs/sep-draft-skills-extension.md |
| fast-agent — Skills over MCP | https://fast-agent.ai/mcp/skills-over-mcp/ |

## Daily ingest 2026-08-28 (gap-fill)

| Topic | URL |
| --- | --- |
| Origin overview | https://cursor.com/docs/origin |
| Mirror a GitHub repository | https://cursor.com/docs/origin/mirror-github |
| Install the Origin CLI | https://cursor.com/docs/origin/cli |
| Origin Code Hosting changelog | https://cursor.com/changelog/origin-code-hosting |
| Cloud Environment Setup | https://cursor.com/docs/cloud-agent/setup |
| Cloud Agent Builds | https://cursor.com/docs/cloud-agent/builds |
| Cloud Agents overview | https://cursor.com/docs/cloud-agent |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Cloud Agents help | https://cursor.com/help/ai-features/cloud-agents |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Cursor changelog index | https://cursor.com/changelog |
| Feature Lifecycle and Deprecation Policy | https://modelcontextprotocol.io/community/feature-lifecycle |
| SEP-2596 | https://modelcontextprotocol.io/seps/2596-spec-feature-lifecycle-and-deprecation |
| MCP 2026-07-28 changelog | https://modelcontextprotocol.io/specification/2026-07-28/changelog |
| MCP Extensions overview | https://modelcontextprotocol.io/extensions/overview |
| SEP-2133 — Extensions | https://modelcontextprotocol.io/seps/2133-extensions |
| Authorization extensions overview | https://modelcontextprotocol.io/extensions/auth/overview |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| What's New in A2A v1.0 | https://a2a-protocol.org/latest/whats-new-v1/ |
| Custom Protocol Bindings | https://a2a-protocol.org/latest/topics/custom-protocol-bindings/ |
| MCP Security Best Practices — SSRF | https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices |
| MCP Client Registration (CIMD) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/client-registration |
| SEP-991 — CIMD | https://modelcontextprotocol.io/seps/991-enable-url-based-client-registration-using-oauth-c |
| Enterprise-Managed Authorization | https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| OAuth Client Credentials extension | https://modelcontextprotocol.io/extensions/auth/oauth-client-credentials |
| RFC 7523 JWT Bearer | https://datatracker.ietf.org/doc/html/rfc7523 |

## Daily ingest 2026-08-29 (gap-fill)

| Topic | URL |
| --- | --- |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| ACP v2 overview | https://agentclientprotocol.com/protocol/v2/overview |
| ACP v2 transports | https://agentclientprotocol.com/protocol/v2/transports |
| Migrating from ACP v1 | https://agentclientprotocol.com/protocol/v2/migration |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| Cursor joined the ACP Registry (JetBrains) | https://blog.jetbrains.com/ai/2026/03/cursor-joined-the-acp-registry-and-is-now-live-in-your-jetbrains-ide/ |
| Security Agents | https://cursor.com/docs/security-agents |
| PR Routing & Approval | https://cursor.com/docs/approval-agents |
| Automations (help) | https://cursor.com/help/ai-features/automations |
| Agent metadata | https://cursor.com/docs/cloud-agent/metadata |
| OIDC tokens | https://cursor.com/docs/cloud-agent/identity |
| Cursor Python SDK | https://cursor.com/docs/sdk/python |
| Using Headless CLI | https://cursor.com/docs/cli/headless |
| Agent SDK overview | https://code.claude.com/docs/en/agent-sdk/overview |
| Give Claude custom tools | https://code.claude.com/docs/en/agent-sdk/custom-tools |
| Configure permissions (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/permissions |
| Server Card Working Group charter | https://modelcontextprotocol.io/community/working-groups/server-card |
| File Uploads Working Group charter | https://modelcontextprotocol.io/community/working-groups/file-uploads |
| The New MCP Roadmap | https://blog.modelcontextprotocol.io/posts/mcp-roadmap/ |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| MCP resources (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/resources |
| Start from scratch, without a repo | https://cursor.com/changelog/start-from-scratch |
| A2A project (GitHub) | https://github.com/a2aproject/A2A |
| MCP vs A2A (Auth0) | https://auth0.com/blog/mcp-vs-a2a/ |
| MCP server concepts | https://modelcontextprotocol.io/docs/learn/server-concepts |

## Daily ingest 2026-08-30 (gap-fill)

| Topic | URL |
| --- | --- |
| Agent Skills overview | https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview |
| Using Agent Skills with the API | https://platform.claude.com/docs/en/build-with-claude/skills-guide |
| Claude Platform release notes | https://platform.claude.com/docs/en/release-notes/overview |
| Extend agents with skills (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/skills |
| Computer use (OpenAI) | https://developers.openai.com/api/docs/guides/tools-computer-use |
| Tools — OpenAI Agents SDK (JS) | https://openai.github.io/openai-agents-js/guides/tools/ |
| Computer use tool (Claude) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool |
| Browser use tool (Claude) | https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool |
| ACP v2 overview | https://agentclientprotocol.com/protocol/v2/overview |
| Migrating from ACP v1 | https://agentclientprotocol.com/protocol/v2/migration |
| ACP v2 draft announcement | https://github.com/agentclientprotocol/agent-client-protocol/blob/main/docs/announcements/acp-v2-draft.mdx |
| ACP (Cursor CLI) | https://cursor.com/docs/cli/acp.md |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| Model and Integration Management | https://cursor.com/docs/enterprise/model-and-integration-management |
| Enterprise | https://cursor.com/docs/enterprise |
| OpenAI Agents SDK | https://openai.github.io/openai-agents-python/ |
| Agent orchestration (OpenAI Agents SDK) | https://openai.github.io/openai-agents-python/multi_agent/ |
| Human-in-the-loop (OpenAI Agents SDK) | https://openai.github.io/openai-agents-python/human_in_the_loop/ |
| A2A joins AAIF’s open agentic stack | https://aaif.io/blog/a2a-joins-aaif |
| AAIF projects | https://aaif.io/projects |
| Agent2Agent (AAIF) | https://aaif.io/projects/agent2agent |
| A2A Protocol | https://a2a-protocol.org/latest/ |
| Agent Skills specification | https://agentskills.io/specification |
| Agent Skills overview (agentskills.io) | https://agentskills.io/home |
| Equipping agents with Agent Skills (Anthropic) | https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills |

## Daily ingest 2026-08-31 (gap-fill)

| Topic | URL |
| --- | --- |
| WebMCP (Chrome) | https://developer.chrome.com/docs/ai/webmcp |
| WebMCP Imperative API | https://developer.chrome.com/docs/ai/webmcp/imperative-api |
| WebMCP Declarative API | https://developer.chrome.com/docs/ai/webmcp/declarative-api |
| NLWeb README | https://github.com/microsoft/NLWeb |
| NLWeb REST API | https://github.com/microsoft/NLWeb/blob/main/docs/nlweb-rest-api.md |
| Codex SDK | https://developers.openai.com/codex/sdk |
| Codex SDK (learn.chatgpt.com) | https://learn.chatgpt.com/docs/codex-sdk |
| ACP Mode (Gemini CLI) | https://geminicli.com/docs/cli/acp-mode/ |
| gemini-cli acp-mode.md | https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/acp-mode.md |
| Create plugins (Claude Code) | https://code.claude.com/docs/en/plugins |
| Discover and install plugins | https://code.claude.com/docs/en/discover-plugins |
| Plugin marketplaces | https://code.claude.com/docs/en/plugin-marketplaces |
| Plugins reference | https://code.claude.com/docs/en/plugins-reference |
| AGENTS.md | https://agents.md/ |
| agentsmd/agents.md | https://github.com/agentsmd/agents.md |
| AAIF projects | https://aaif.io/projects |
| Linux Foundation announces AAIF | https://aaif.io/news/linux-foundation-announces-formation-of-aaif |
| permissions.json reference | https://cursor.com/docs/reference/permissions |
| Run Modes | https://cursor.com/docs/agent/security/run-modes |
| Enterprise deployment patterns | https://cursor.com/docs/enterprise/deployment-patterns |
| Cursor Rules | https://cursor.com/docs/rules.md |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| The New MCP Roadmap (blog) | https://blog.modelcontextprotocol.io/posts/mcp-roadmap/ |
| SEP-1932: DPoP Profile for MCP | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1932 |

## Daily ingest 2026-09-01 (gap-fill)

| Topic | URL |
| --- | --- |
| Introduction (agentgateway) | https://agentgateway.dev/docs/standalone/latest/about/introduction/ |
| agentgateway joins AAIF | https://aaif.io/blog/agentgateway-joins-aaif-as-an-open-gateway-for-agentic-ai-infrastructure |
| agentgateway/agentgateway | https://github.com/agentgateway/agentgateway |
| goose home | https://goose-docs.ai/ |
| Using Extensions (goose) | https://goose-docs.ai/docs/getting-started/using-extensions |
| ACP Providers (goose) | https://goose-docs.ai/docs/guides/acp-providers |
| Recipes (goose) | https://goose-docs.ai/docs/guides/recipes/ |
| aaif-goose/goose | https://github.com/aaif-goose/goose |
| Sandbox Agents (OpenAI API) | https://developers.openai.com/api/docs/guides/agents/sandboxes |
| Sandbox clients (Agents SDK JS) | https://openai.github.io/openai-agents-js/guides/sandbox-agents/clients/ |
| OpenAI Agents SDK | https://openai.github.io/openai-agents-python/ |
| Slack (Cursor docs) | https://cursor.com/docs/integrations/slack.md |
| Cloud Agents and Cursor Harness Improvements | https://cursor.com/changelog/08-19-26 |
| Model and Integration Management | https://cursor.com/docs/enterprise/model-and-integration-management |
| Google Workspace Plugins (changelog) | https://cursor.com/changelog/google-workspace-plugins |
| Cursor Plugins | https://cursor.com/docs/plugins |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| A2UI Protocol v0.9 | https://a2ui.org/specification/v0.9-a2ui/ |
| A2UI v0.8 → v0.9 evolution guide | https://github.com/google/A2UI/blob/main/specification/v0_9/docs/evolution_guide.md |
| A2UI v0.9 (Google Developers Blog) | https://developers.googleblog.com/a2ui-v0-9-generative-ui/ |
| Plugins in the SDK (Claude) | https://code.claude.com/docs/en/agent-sdk/plugins.md |

## Daily ingest 2026-09-02 (gap-fill)

| Topic | URL |
| --- | --- |
| Self-Hosted Machines | https://cursor.com/docs/cloud-agent/self-hosted |
| Team Pools | https://cursor.com/docs/cloud-agent/bring-your-own-machine/pools |
| Choose where Cloud Agents run | https://cursor.com/docs/cloud-agent/bring-your-own-machine/choose-runtime |
| Computer use and desktop sharing | https://cursor.com/docs/cloud-agent/bring-your-own-machine/computer-use |
| Self-hosted machines (changelog) | https://cursor.com/changelog/self-hosted-machines |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Run Worker Pools | https://cursor.com/docs/cloud-agent/self-hosted-cloud-run.md |
| Secrets & Network — private connectivity | https://cursor.com/docs/cloud-agent/security-network |
| Origin repository settings | https://cursor.com/docs/origin/settings |
| Codebase settings | https://cursor.com/docs/origin/codebase-settings |
| Origin API | https://cursor.com/docs/origin/api |
| Origin Code Hosting changelog | https://cursor.com/changelog/origin-code-hosting |
| Start from scratch, without a repo | https://cursor.com/changelog/start-from-scratch |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| MCP integrations (help) | https://cursor.com/help/customization/mcp |
| MCP Apps overview | https://apps.extensions.modelcontextprotocol.io/api/documents/overview.html |
| Codex App Server | https://learn.chatgpt.com/docs/app-server |
| codex-rs/app-server README | https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md |
| Codex SDK | https://developers.openai.com/codex/sdk |

## Daily ingest 2026-09-03 (gap-fill)

| Topic | URL |
| --- | --- |
| Linear (Cursor docs) | https://cursor.com/docs/integrations/linear |
| GitHub (Cursor docs) | https://cursor.com/docs/integrations/github |
| Cloud Agents | https://cursor.com/docs/cloud-agent |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities.md |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| My Machines | https://cursor.com/docs/cloud-agent/self-hosted-guides/my-machines |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Package your plugin (Codex) | https://developers.openai.com/plugins/build/plugins |
| Codex CLI developer commands | https://developers.openai.com/codex/cli/reference.md |
| Codex releases | https://github.com/openai/codex/releases |
| Claude Code hooks reference | https://code.claude.com/docs/en/hooks.md |
| Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide |
| Claude Code memory | https://code.claude.com/docs/en/memory |
| Claude Code GitHub Actions | https://code.claude.com/docs/en/github-actions.md |
| claude-code-action configuration | https://github.com/anthropics/claude-code-action/blob/main/docs/configuration.md |
| A2UI v0.9.1 → v1.0 evolution guide | https://a2ui.org/specification/v1.0-evolution-guide/ |
| A2UI home | https://a2ui.org/ |

## Daily ingest 2026-09-04 (gap-fill)

| Topic | URL |
| --- | --- |
| Create custom subagents | https://code.claude.com/docs/en/sub-agents |
| How Claude remembers your project | https://code.claude.com/docs/en/memory.md |
| Connect Claude Code to tools via MCP | https://code.claude.com/docs/en/mcp |
| Run parallel sessions with worktrees | https://code.claude.com/docs/en/worktrees |
| Common workflows (Claude Code) | https://code.claude.com/docs/en/common-workflows |
| Service Accounts (Cursor) | https://cursor.com/docs/account/enterprise/service-accounts |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Agents API v0 (legacy) | https://cursor.com/docs/cloud-agent/api/v0 |
| Webhooks (Cursor Cloud Agents) | https://cursor.com/docs/cloud-agent/api/webhooks |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| Cloud environments (Codex) | https://learn.chatgpt.com/docs/environments/cloud-environment |
| openai/codex-universal | https://github.com/openai/codex-universal |
| Permissions (Codex) | https://learn.chatgpt.com/docs/permissions |
| Codex GitHub Action | https://developers.openai.com/codex/github-action.md |
| openai/codex-action README | https://github.com/openai/codex-action/blob/main/README.md |
| About GitHub Copilot cloud agent | https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent |
| GitHub Copilot cloud agent how-tos | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent |
| Invoking custom agents (Copilot CLI) | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents |
| Copilot coding agent AGENTS.md | https://github.blog/changelog/2025-08-28-copilot-coding-agent-now-supports-agents-md-custom-instructions/ |
| Cursor MCP | https://cursor.com/docs/mcp |
| AGENTS.md | https://agents.md/ |

## Daily ingest 2026-09-05 (gap-fill)

| Topic | URL |
| --- | --- |
| Configure permissions (Claude Code) | https://code.claude.com/docs/en/permissions |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| Configure the sandboxed Bash tool | https://code.claude.com/docs/en/sandboxing |
| Run Claude Code programmatically | https://code.claude.com/docs/en/headless |
| CLI reference (Claude Code) | https://code.claude.com/docs/en/cli-reference |
| Model Context Protocol (Codex) | https://developers.openai.com/codex/mcp |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Command line options (Codex CLI) | https://developers.openai.com/codex/cli/reference |
| Custom instructions with AGENTS.md (Codex) | https://learn.chatgpt.com/docs/agent-configuration/agents-md |
| Advanced Configuration (Codex) | https://learn.chatgpt.com/docs/config-file/config-advanced |
| Custom agents configuration (Copilot) | https://docs.github.com/en/copilot/reference/custom-agents-configuration |
| Creating custom agents for Copilot cloud agent | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents |
| Invoking custom agents (Copilot CLI) | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents |
| About GitHub Copilot CLI | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli |
| Using GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview |
| Allowing and denying tool use (Copilot CLI) | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools |
| Agent Skills (Gemini CLI) | https://geminicli.com/docs/cli/skills/ |
| Creating Agent Skills (Gemini CLI) | https://geminicli.com/docs/cli/creating-skills/ |
| Agent Skills specification | https://agentskills.io/specification |
| MCP servers with Gemini CLI | https://geminicli.com/docs/tools/mcp-server/ |
| Gemini CLI configuration | https://geminicli.com/docs/reference/configuration/ |
| Gemini CLI for the enterprise | https://geminicli.com/docs/cli/enterprise/ |

## Daily ingest 2026-09-06 (gap-fill)

| Topic | URL |
| --- | --- |
| Provide context with GEMINI.md files | https://geminicli.com/docs/cli/gemini-md/ |
| Memory Import Processor | https://github.com/google-gemini/gemini-cli/blob/main/docs/reference/memport.md |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| Sandboxing in Gemini CLI | https://geminicli.com/docs/cli/sandbox/ |
| Gemini CLI for the enterprise | https://geminicli.com/docs/cli/enterprise/ |
| Extension reference (Gemini CLI) | https://geminicli.com/docs/extensions/reference/ |
| Gemini CLI configuration | https://geminicli.com/docs/reference/configuration/ |
| Adding repository custom instructions | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions |
| About customizing GitHub Copilot responses | https://docs.github.com/en/copilot/concepts/prompting/response-customization |
| Copilot customization cheat sheet | https://docs.github.com/en/copilot/reference/customization-cheat-sheet |
| Configure MCP servers for your repository | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers |
| Custom agents configuration (Copilot) | https://docs.github.com/en/copilot/reference/custom-agents-configuration |
| About agent skills (Copilot) | https://docs.github.com/en/copilot/concepts/agents/about-agent-skills |
| Adding agent skills for GitHub Copilot | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills |
| Agent Skills specification | https://agentskills.io/specification |
| Checkpointing (Claude Code) | https://code.claude.com/docs/en/checkpointing |
| Claude Code VS Code | https://code.claude.com/docs/en/vs-code |
| JetBrains (Cursor) | https://cursor.com/docs/integrations/jetbrains |
| ACP (Cursor CLI) | https://cursor.com/docs/cli/acp.md |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| Sandbox (Codex) | https://learn.chatgpt.com/docs/sandboxing |
| Agent approvals & security (Codex) | https://learn.chatgpt.com/docs/agent-approvals-security |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Permissions (Codex) | https://learn.chatgpt.com/docs/permissions |

## Daily ingest 2026-09-07 (gap-fill)

| Topic | URL |
| --- | --- |
| Agent Skills – Codex | https://developers.openai.com/codex/skills |
| Build skills (Codex) | https://developers.openai.com/codex/build-skills |
| Customization – Codex | https://developers.openai.com/codex/concepts/customization |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Agent Skills specification | https://agentskills.io/specification |
| Hooks (Codex) | https://developers.openai.com/codex/hooks |
| Managed configuration (Codex) | https://developers.openai.com/codex/enterprise/managed-configuration |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| Gemini CLI hooks | https://geminicli.com/docs/hooks/ |
| Hooks reference (Gemini CLI) | https://geminicli.com/docs/hooks/reference/ |
| Writing hooks for Gemini CLI | https://geminicli.com/docs/hooks/writing-hooks/ |
| Gemini CLI configuration | https://geminicli.com/docs/reference/configuration/ |
| Headless mode reference | https://geminicli.com/docs/cli/headless/ |
| Automate tasks with headless mode | https://geminicli.com/docs/cli/tutorials/automation/ |
| Trusted Folders (Gemini CLI) | https://geminicli.com/docs/cli/trusted-folders/ |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| Gemini CLI for the enterprise | https://geminicli.com/docs/cli/enterprise/ |
| Using GitHub Copilot code review on GitHub | https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/copilot-code-review |
| Copilot code review now runs on an agentic architecture | https://github.blog/changelog/2026-03-05-copilot-code-review-now-runs-on-an-agentic-architecture/ |
| Using custom instructions to unlock the power of Copilot code review | https://docs.github.com/en/copilot/tutorials/customize-code-review |
| Adding agent skills for GitHub Copilot | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills |
| Extend Claude with skills | https://code.claude.com/docs/en/custom-skills |
| Skills (Claude Code) | https://code.claude.com/docs/en/skills |
| Claude Code plugins | https://code.claude.com/docs/en/plugins |
| Choose a permission mode | https://code.claude.com/docs/en/permission-modes |
| Configure permissions | https://code.claude.com/docs/en/permissions |
| Commands reference | https://code.claude.com/docs/en/commands |
| Common workflows | https://code.claude.com/docs/en/common-workflows |
| Browser (Cursor) | https://cursor.com/docs/agent/tools/browser |
| Cursor Agent overview | https://cursor.com/docs/agent/overview |
| Subagents (Cursor) | https://cursor.com/docs/subagents |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| CLI Changelog | https://cursor.com/docs/cli/changelog |

## Daily ingest 2026-09-09 (gap-fill)

| Topic | URL |
| --- | --- |
| Output styles (Claude Code) | https://code.claude.com/docs/en/output-styles |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| What's new 2026-w34 — Concise style | https://code.claude.com/docs/en/whats-new/2026-w34 |
| Modifying system prompts (Agent SDK) | https://code.claude.com/docs/en/agent-sdk/modifying-system-prompts |
| Customize your status line | https://code.claude.com/docs/en/statusline |
| Discover and install plugins — code intelligence | https://code.claude.com/docs/en/discover-plugins |
| Plugins reference — LSP servers | https://code.claude.com/docs/en/plugins-reference |
| Create plugins — add LSP servers | https://code.claude.com/docs/en/plugins |
| Large codebases (Claude Code) | https://code.claude.com/docs/en/large-codebases |
| Use Claude Code in VS Code | https://code.claude.com/docs/en/vs-code |
| Claude Code overview — VS Code | https://code.claude.com/docs/en/overview |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| Code review (ChatGPT / Codex) | https://learn.chatgpt.com/docs/code-review |
| Codex CLI command reference — codex review | https://developers.openai.com/codex/cli/reference |
| Long-running work (Codex) | https://developers.openai.com/codex/long-running-work |
| Using Goals in Codex | https://developers.openai.com/cookbook/examples/codex/using_goals_in_codex |
| Run long horizon tasks with Codex | https://developers.openai.com/blog/run-long-horizon-tasks-with-codex |
| Plan Mode (Gemini CLI) | https://geminicli.com/docs/cli/plan-mode/ |
| Planning tools (Gemini CLI) | https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/planning.md |
| Gemini CLI commands | https://geminicli.com/docs/reference/commands/ |
| Plan mode announcement (Gemini CLI) | https://developers.googleblog.com/plan-mode-now-available-in-gemini-cli/ |
| Checkpointing (Gemini CLI) | https://geminicli.com/docs/cli/checkpointing/ |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| About GitHub Copilot Spaces | https://docs.github.com/en/copilot/concepts/context/spaces |
| Creating GitHub Copilot Spaces | https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces/create-copilot-spaces |
| Using GitHub Copilot Spaces | https://docs.github.com/en/copilot/how-tos/provide-context/use-copilot-spaces/use-copilot-spaces |
| Remote GitHub MCP Server — copilot_spaces | https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md |
| Asking GitHub Copilot questions in your IDE | https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide |
| About GitHub Copilot cloud agent — vs agent mode | https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent |
| GitHub Copilot features — agentic | https://docs.github.com/en/copilot/get-started/features |
| Using Copilot cloud agent in your IDE | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-in-your-ide |

## Daily ingest 2026-09-10 (gap-fill)

| Topic | URL |
| --- | --- |
| Dynamic workflows (Claude Code) | https://code.claude.com/docs/en/workflows |
| Run agents in parallel (Claude Code) | https://code.claude.com/docs/en/agents |
| Agent SDK subagents — Workflow tool | https://code.claude.com/docs/en/agent-sdk/subagents |
| Remote Control (Claude Code) | https://code.claude.com/docs/en/remote-control |
| Claude Code in Slack | https://code.claude.com/docs/en/slack |
| Agent teams (Claude Code) | https://code.claude.com/docs/en/agent-teams |
| Create custom subagents | https://code.claude.com/docs/en/sub-agents |
| Agent view (Claude Code) | https://code.claude.com/docs/en/agent-view |
| Auto Memory (Gemini CLI) | https://geminicli.com/docs/cli/auto-memory/ |
| Manage context and memory (Gemini CLI) | https://geminicli.com/docs/cli/tutorials/memory-management/ |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| Plan Mode — Conductor | https://geminicli.com/docs/cli/plan-mode/ |
| Conductor announcement | https://developers.googleblog.com/conductor-introducing-context-driven-development-for-gemini-cli/ |
| Gemini CLI extensions catalog | https://geminicli.com/extensions/ |
| Extension reference (Gemini CLI) | https://geminicli.com/docs/extensions/reference/ |
| About hooks for GitHub Copilot | https://docs.github.com/en/copilot/concepts/agents/hooks |
| GitHub Copilot hooks reference | https://docs.github.com/en/copilot/reference/hooks-reference |
| Using hooks with Copilot CLI | https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks |
| About GitHub Copilot plugins | https://docs.github.com/en/copilot/concepts/agents/about-plugins |
| Creating a plugin for GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating |
| GitHub Copilot CLI plugin reference | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference |
| Memories (Codex) | https://developers.openai.com/codex/customization/memories |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| Customization – Codex | https://developers.openai.com/codex/concepts/customization |
| Cursor CLI MCP | https://cursor.com/docs/cli/mcp |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| CLI slash commands | https://cursor.com/docs/cli/reference/slash-commands |
| CLI Changelog | https://cursor.com/docs/cli/changelog |

## Daily ingest 2026-09-11 (gap-fill)

| Topic | URL |
| --- | --- |
| Automate work with routines | https://code.claude.com/docs/en/routines |
| Schedule recurring tasks in Claude Code Desktop | https://code.claude.com/docs/en/desktop-scheduled-tasks |
| Run prompts on a schedule | https://code.claude.com/docs/en/scheduled-tasks |
| Push events into a running session with channels | https://code.claude.com/docs/en/channels |
| Channels reference | https://code.claude.com/docs/en/channels-reference |
| Claude Code in Slack | https://code.claude.com/docs/en/slack |
| Claude Tag | https://code.claude.com/docs/en/claude-tag |
| Use Claude Code on the web | https://code.claude.com/docs/en/claude-code-on-the-web |
| Get started with Claude Code on the web | https://code.claude.com/docs/en/web-quickstart |
| Remote Control | https://code.claude.com/docs/en/remote-control |
| Use Claude Code with Chrome | https://code.claude.com/docs/en/chrome |
| Computer use | https://code.claude.com/docs/en/computer-use |
| Observability with OpenTelemetry (Gemini CLI) | https://geminicli.com/docs/cli/telemetry/ |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| Session management (Gemini CLI) | https://geminicli.com/docs/cli/session-management.md |
| Checkpointing (Gemini CLI) | https://geminicli.com/docs/cli/checkpointing/ |
| Manage context and memory (Gemini CLI) | https://geminicli.com/docs/cli/tutorials/memory-management/ |
| Worktrees (Codex) | https://learn.chatgpt.com/docs/environments/git-worktrees |
| Worktrees (Codex app) | https://developers.openai.com/codex/app/worktrees |
| Use Codex in Slack | https://learn.chatgpt.com/docs/third-party/slack |
| Use Codex in Linear | https://learn.chatgpt.com/docs/third-party/linear |
| Codex cloud | https://learn.chatgpt.com/docs/cloud |
| Design Mode (Cursor) | https://cursor.com/docs/agent/design-mode |
| Agents Window | https://cursor.com/docs/agent/agents-window |
| Browser (Cursor) | https://cursor.com/docs/agent/tools/browser |

## Daily ingest 2026-09-12 (gap-fill)

| Topic | URL |
| --- | --- |
| Explore the context window | https://code.claude.com/docs/en/context-window |
| Manage sessions | https://code.claude.com/docs/en/sessions |
| Memory (Claude Code) | https://code.claude.com/docs/en/memory |
| Desktop application | https://code.claude.com/docs/en/desktop |
| Claude Code on the web | https://code.claude.com/docs/en/claude-code-on-the-web |
| Remote Control | https://code.claude.com/docs/en/remote-control |
| Code Review | https://code.claude.com/docs/en/code-review |
| Find bugs with ultrareview | https://code.claude.com/docs/en/ultrareview |
| JetBrains IDEs | https://code.claude.com/docs/en/jetbrains |
| Permissions (Claude Code) | https://code.claude.com/docs/en/permissions |
| Run prompts on a schedule | https://code.claude.com/docs/en/scheduled-tasks |
| Automate work with routines | https://code.claude.com/docs/en/routines |
| Schedule recurring tasks in Claude Code Desktop | https://code.claude.com/docs/en/desktop-scheduled-tasks |
| Command line options – Codex CLI | https://developers.openai.com/codex/cli/reference |
| Codex GitHub Action | https://developers.openai.com/codex/github-action.md |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| Troubleshooting – Codex app | https://developers.openai.com/codex/app/troubleshooting |
| Policy engine (Gemini CLI) | https://geminicli.com/docs/reference/policy-engine/ |
| Gemini CLI cheatsheet | https://geminicli.com/docs/cli/cli-reference/ |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| Gemini CLI for the enterprise | https://geminicli.com/docs/cli/enterprise/ |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| CLI overview | https://cursor.com/docs/cli/overview |
| CLI Changelog | https://cursor.com/docs/cli/changelog |
| Subagents (Cursor) | https://cursor.com/docs/subagents |
| Cloud Agents | https://cursor.com/docs/cloud-agent |

## Daily ingest 2026-09-13 (gap-fill)

| Topic | URL |
| --- | --- |
| Introducing Projects | https://cursor.com/blog/projects |
| Cursor Projects changelog | https://cursor.com/changelog/projects |
| Cloud Agents | https://cursor.com/docs/cloud-agent |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Agents Window | https://cursor.com/docs/agent/agents-window |
| Subagents (Cursor) | https://cursor.com/docs/subagents |
| Design Mode (Cursor) | https://cursor.com/docs/agent/design-mode |
| Configure auto mode | https://code.claude.com/docs/en/auto-mode-config |
| Configure permissions (Claude Code) | https://code.claude.com/docs/en/permissions |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| Model configuration (Claude Code) | https://code.claude.com/docs/en/model-config |
| Dynamic workflows | https://code.claude.com/docs/en/workflows |
| Debug your configuration | https://code.claude.com/docs/en/debug-your-config |
| Skills (Claude Code) | https://code.claude.com/docs/en/skills |
| Auto-review (Codex) | https://developers.openai.com/codex/concepts/sandboxing/auto-review |
| Agent approvals & security (Codex) | https://developers.openai.com/codex/agent-approvals-security |
| Managed configuration (Codex) | https://developers.openai.com/codex/enterprise/managed-configuration |
| Advanced configuration (Codex) | https://developers.openai.com/codex/config-advanced |
| Subagents (Gemini CLI) | https://geminicli.com/docs/core/subagents/ |
| Plan Mode (Gemini CLI) | https://geminicli.com/docs/cli/plan-mode/ |
| Gemini CLI configuration | https://geminicli.com/docs/reference/configuration/ |
| Model selection (Gemini CLI) | https://geminicli.com/docs/cli/model/ |
| Rewind (Gemini CLI) | https://geminicli.com/docs/cli/rewind/ |
| Checkpointing (Gemini CLI) | https://geminicli.com/docs/cli/checkpointing/ |
| Session management (Gemini CLI) | https://geminicli.com/docs/cli/session-management.md |
| Enterprise managed permissions (changelog) | https://github.blog/changelog/2026-09-09-enterprise-managed-permissions-for-github-copilot-agent-operations/ |
| Enterprise managed settings reference | https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference |
| Configuring enterprise-managed settings | https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings |
| About Copilot automations | https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-automations |
| Creating automations with Copilot cloud agent | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations |
| Managing access to GitHub Copilot cloud agent | https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/access-management |
| About GitHub Copilot cloud agent | https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent |

## Daily ingest 2026-09-14 (gap-fill)

| Topic | URL |
| --- | --- |
| Control MCP server access for your organization | https://code.claude.com/docs/en/managed-mcp |
| Deploy managed settings | https://code.claude.com/docs/en/managed-settings |
| Server-managed settings | https://code.claude.com/docs/en/server-managed-settings |
| Escalate hard decisions with the advisor tool | https://code.claude.com/docs/en/advisor |
| CLI reference (Claude Code) | https://code.claude.com/docs/en/cli-reference |
| Model configuration (Claude Code) | https://code.claude.com/docs/en/model-config |
| Using GitHub Copilot in JetBrains IDEs | https://docs.github.com/en/copilot/concepts/agents/copilot-in-jetbrains |
| Enterprise-managed sandbox in Copilot for JetBrains | https://github.blog/changelog/2026-09-08-enterprise-managed-sandbox-in-copilot-for-jetbrains/ |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| About cloud and local sandboxes for GitHub Copilot | https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes |
| Using local sandboxing | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference |
| Billing for cloud and local sandboxes | https://docs.github.com/billing/concepts/product-billing/cloud-and-local-sandboxes |
| Agent approvals & security (Codex) | https://developers.openai.com/codex/agent-approvals-security |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Advanced configuration (Codex) | https://developers.openai.com/codex/config-advanced |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| App Server (Codex) | https://developers.openai.com/codex/app-server |
| Plugins (Codex) | https://developers.openai.com/codex/plugins |
| SEP-2640 Skills Extension (PR) | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640 |
| experimental-ext-skills | https://github.com/modelcontextprotocol/experimental-ext-skills |
| Skills Over MCP: SEP-2640 status | https://unifiedharnessprotocol.dev/skills-over-mcp/ |
| Auto-resolution and analysis updates in Copilot code review | https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/ |
| Trusted Folders (Gemini CLI) | https://geminicli.com/docs/cli/trusted-folders/ |
| gemini-cli v0.59.0 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0 |

## Daily ingest 2026-09-15 (gap-fill)

| Topic | URL |
| --- | --- |
| Cursor Router | https://cursor.com/docs/cursor-router |
| Cursor Python SDK | https://cursor.com/docs/sdk/python |
| Cursor TypeScript SDK | https://cursor.com/docs/sdk/typescript |
| Review GitLab merge requests with Codex | https://learn.chatgpt.com/docs/third-party/gitlab |
| Connecting GitLab to ChatGPT and Codex | https://help.openai.com/en/articles/20001486-connecting-gitlab-to-chatgpt-and-codex |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Review GitHub pull requests with Codex | https://learn.chatgpt.com/docs/third-party/github |
| Visual Studio Code 1.136 | https://code.visualstudio.com/updates/v1_136 |
| GitHub Copilot weekly releases — August 31 | https://github.blog/changelog/2026-09-04-github-copilot-weekly-releases-august-31/ |
| Use the Agents window (Preview) | https://code.visualstudio.com/docs/agents/agents-window |
| Content exclusions generally available in Copilot app and CLI | https://github.blog/changelog/2026-09-02-content-exclusions-generally-available-in-copilot-app-and-cli/ |
| Content exclusion for GitHub Copilot | https://docs.github.com/en/copilot/concepts/content-exclusion |
| Excluding content from GitHub Copilot | https://docs.github.com/en/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot |
| REST API endpoints for Copilot content exclusion management | https://docs.github.com/en/rest/copilot/copilot-content-exclusion-management |
| Remote Subagents | https://geminicli.com/docs/core/remote-agents/ |
| Subagents (Gemini CLI) | https://geminicli.com/docs/core/subagents/ |
| Gemini CLI releases | https://geminicli.com/docs/releases/ |
| Test plugins with evals | https://code.claude.com/docs/en/plugin-evals |
| Plugins reference | https://code.claude.com/docs/en/plugins-reference |
| Create plugins | https://code.claude.com/docs/en/plugins |
| Codex Security plugin quickstart | https://developers.openai.com/codex/security/plugin |
| Codex Security | https://developers.openai.com/codex/security |
| Run a Codex Security scan | https://developers.openai.com/codex/security/plugin/scans |
| Review code changes for security | https://developers.openai.com/codex/security/plugin/code-changes |

## Daily ingest 2026-09-16 (gap-fill)

| Topic | URL |
| --- | --- |
| GitLab (Cursor docs) | https://cursor.com/docs/integrations/gitlab |
| Microsoft Teams (Cursor docs) | https://cursor.com/docs/integrations/microsoft-teams |
| Slack (Cursor docs) | https://cursor.com/docs/integrations/slack.md |
| Bitbucket (Cursor docs) | https://cursor.com/docs/integrations/bitbucket |
| Azure DevOps (Cursor docs) | https://cursor.com/docs/integrations/azure-devops |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Integrating Copilot cloud agent with Jira | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-jira |
| About GitHub Copilot cloud agent | https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent |
| About Copilot auto model selection | https://docs.github.com/en/copilot/concepts/auto-model-selection |
| Configure cost and quality in Copilot auto model selection | https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/ |
| Cursor Router | https://cursor.com/docs/cursor-router |
| Run Claude Code programmatically | https://code.claude.com/docs/en/headless |
| CLI reference (Claude Code) | https://code.claude.com/docs/en/cli-reference |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference |
| Model Context Protocol (Codex) | https://developers.openai.com/codex/mcp |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |

## Daily ingest 2026-09-17 (gap-fill)

| Topic | URL |
| --- | --- |
| Grok Bot | https://cursor.com/docs/grok-bot |
| Get started with Grok Bot | https://cursor.com/docs/grok-bot/get-started |
| Work with Grok Bot | https://cursor.com/docs/grok-bot/work |
| Grok Bot security | https://cursor.com/docs/grok-bot/security |
| Jira (Cursor docs) | https://cursor.com/docs/integrations/jira |
| Linear (Cursor docs) | https://cursor.com/docs/integrations/linear |
| Notion (Cursor docs) | https://cursor.com/docs/integrations/notion |
| Cloud Agents | https://cursor.com/docs/cloud-agent |
| Xcode (Cursor docs) | https://cursor.com/docs/integrations/xcode |
| MCP overview (Cursor) | https://cursor.com/docs/mcp |
| Agent Review | https://cursor.com/docs/agent/agent-review |
| Bugbot | https://cursor.com/docs/bugbot |
| Bugbot docs | https://cursor.com/docs/bugbot.md |
| Claude Code GitLab CI/CD | https://code.claude.com/docs/en/gitlab-ci-cd |
| Claude Code GitHub Actions | https://code.claude.com/docs/en/github-actions |
| CLI reference (Claude Code) | https://code.claude.com/docs/en/cli-reference |
| Sites (Codex/ChatGPT docs) | https://developers.openai.com/codex/sites |
| Plugins (Codex) | https://developers.openai.com/codex/plugins |
| Custom commands (Gemini CLI) | https://geminicli.com/docs/cli/custom-commands/ |
| Agent Skills (Gemini CLI) | https://geminicli.com/docs/cli/skills/ |
| Ignore files (.geminiignore) | https://geminicli.com/docs/cli/gemini-ignore/ |

## Daily ingest 2026-09-18 (gap-fill)

| Topic | URL |
| --- | --- |
| Agents API overview | https://developers.openai.com/api/docs/guides/agents-api/overview |
| Agents API quickstart | https://developers.openai.com/api/docs/guides/agents-api/quickstart |
| OpenAI-hosted sandboxes | https://developers.openai.com/api/docs/guides/agents-api/environments/openai-hosted |
| Self-hosted sandboxes (Agents API) | https://developers.openai.com/api/docs/guides/agents-api/environments/self-hosted |
| Agents API architecture | https://developers.openai.com/api/docs/guides/agents-api/architecture |
| Self-hosted environments (Claude Code) | https://code.claude.com/docs/en/self-hosted-environments |
| Self-hosted environments quickstart | https://code.claude.com/docs/en/self-hosted-environments-quickstart |
| Deploy self-hosted environments | https://code.claude.com/docs/en/self-hosted-environments-deploy |
| Self-hosted environments reference | https://code.claude.com/docs/en/self-hosted-environments-reference |
| Subagents (Codex) | https://developers.openai.com/codex/subagents |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Sample Configuration (Codex) | https://developers.openai.com/codex/config-sample |
| Project HydraFusion | https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/ |
| GitHub Copilot weekly releases — September 7 | https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/ |
| About Copilot auto model selection | https://docs.github.com/en/copilot/concepts/auto-model-selection |
| Cursor Agent (Sentry) | https://docs.sentry.io/integrations/coding-agents/cursor/ |
| Seer Autofix — handoff to coding agents | https://docs.sentry.io/product/ai-in-sentry/seer/autofix/ |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| GitHub Copilot Agent (Sentry) | https://docs.sentry.io/integrations/coding-agents/copilot/ |
| GitHub Copilot weekly releases — September 14 | https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/ |
| Configure MCP servers for Copilot | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers |
| Visual Studio Code 1.138 | https://code.visualstudio.com/updates/v1_138 |
| Trust and safety for AI agents | https://code.visualstudio.com/docs/agents/concepts/trust-and-safety |
| Use the Agents window | https://code.visualstudio.com/docs/agents/agents-window |
| Cloud agents overview | https://cursor.com/docs/cloud-agent |

## Daily ingest 2026-09-19 (gap-fill)

| Topic | URL |
| --- | --- |
| CLI Changelog | https://cursor.com/docs/cli/changelog |
| Cursor CLI overview | https://cursor.com/docs/cli/overview |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| Origin Migration API | https://cursor.com/docs/api/origin/migrations |
| Origin API Changelog | https://cursor.com/docs/api/origin/changelog |
| Usage Analytics | https://cursor.com/docs/account/teams/analytics |
| Analytics API | https://cursor.com/docs/account/teams/analytics-api |
| OpenTelemetry Export | https://cursor.com/docs/enterprise/opentelemetry-export |
| What is the Agent Host Protocol? | https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp |
| VS Code Agent Host architecture | https://code.visualstudio.com/docs/agents/concepts/agent-host |
| Introducing the Agent Host | https://code.visualstudio.com/blogs/2026/08/26/agent-host-architecture |
| Visual Studio Code 1.136 | https://code.visualstudio.com/updates/v1_136 |
| IDE extension (Codex) | https://developers.openai.com/codex/ide |
| Settings (Codex IDE) | https://developers.openai.com/codex/ide/settings |
| Commands (Codex IDE) | https://developers.openai.com/codex/ide/commands |
| Cross-session messaging | https://code.claude.com/docs/en/cross-session-messaging |
| Tools reference (Claude Code) | https://code.claude.com/docs/en/tools |
| What's new 2026-w32 | https://code.claude.com/docs/en/whats-new/2026-w32 |
| Behavioral Evaluations & EDK Guide | https://geminicli.com/docs/behavioral-evals/ |
| Latest stable release v0.53.0 | https://geminicli.com/docs/changelogs/latest/ |

## Daily ingest 2026-09-20 (gap-fill)

| Topic | URL |
| --- | --- |
| Scheduled tasks (Codex app) | https://developers.openai.com/codex/app/automations |
| Worktrees (Codex app) | https://developers.openai.com/codex/app/worktrees |
| Sandbox (Codex) | https://developers.openai.com/codex/agent-approvals-security |
| Choose and use an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| Understand agent sessions and handoff | https://code.visualstudio.com/docs/agents/concepts/sessions |
| Manage agent sessions in VS Code | https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions |
| VS Code Agent Host architecture | https://code.visualstudio.com/docs/agents/concepts/agent-host |
| GitHub Copilot weekly releases — September 14 | https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14/ |
| Cursor for iOS | https://cursor.com/docs/cloud-agent/mobile |
| Cloud Agents | https://cursor.com/docs/cloud-agent |
| Design Mode | https://cursor.com/docs/agent/design-mode |
| Agent Skills (Cursor) | https://cursor.com/docs/skills.md |
| Cursor Plugins | https://cursor.com/docs/plugins |
| Agent Discovery (A2A Protocol) | https://a2a-protocol.org/latest/topics/agent-discovery/ |
| What's New in A2A v1.0 | https://a2a-protocol.org/latest/whats-new-v1/ |
| A2A Protocol specification | https://a2a-protocol.org/latest/specification/ |
| Extension reference (Gemini CLI) | https://geminicli.com/docs/extensions/reference/ |
| Gemini CLI configuration | https://geminicli.com/docs/reference/configuration/ |
| Latest stable release v0.60.0 | https://geminicli.com/docs/changelogs/latest/ |

## Daily ingest 2026-09-21 (gap-fill)

| Topic | URL |
| --- | --- |
| Scan your codebase for vulnerabilities | https://code.claude.com/docs/en/claude-security |
| Catch security issues as Claude writes code | https://code.claude.com/docs/en/security-guidance |
| Code Review | https://code.claude.com/docs/en/code-review |
| Discover and install plugins | https://code.claude.com/docs/en/discover-plugins |
| Sandbox agent terminal commands | https://code.visualstudio.com/docs/agents/run/agent-sandboxing |
| Understand trust and safety for AI agents | https://code.visualstudio.com/docs/agents/concepts/trust-and-safety |
| Secure AI-assisted development in VS Code | https://code.visualstudio.com/docs/agents/run/security |
| Create and manage agent automations | https://code.visualstudio.com/docs/agents/run/automations |
| Choose and use an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| MCP configuration reference | https://code.visualstudio.com/docs/agents/reference/mcp-configuration |
| Cursor TypeScript SDK | https://cursor.com/docs/sdk/typescript |
| SDK Changelog | https://cursor.com/docs/sdk/changelog |
| Cursor SDK Bridge | https://cursor.com/docs/sdk/bridge |
| Cursor Python SDK | https://cursor.com/docs/sdk/python |
| Share session output as artifacts | https://code.claude.com/docs/en/artifacts |
| Feature availability | https://code.claude.com/docs/en/feature-availability |
| Tools reference | https://code.claude.com/docs/en/tools-reference |
| Record & Replay | https://developers.openai.com/codex/record-and-replay |
| Agent Skills – Codex | https://developers.openai.com/codex/skills |
| Build plugins | https://developers.openai.com/codex/plugins |

## Daily ingest 2026-09-22 (gap-fill)

| Topic | URL |
| --- | --- |
| Junie by JetBrains | https://www.jetbrains.com/help/ai-assistant/junie-agent.html |
| Junie IDE plugin | https://junie.jetbrains.com/docs/junie-ide-plugin.html |
| Junie CLI quickstart | https://junie.jetbrains.com/docs/junie-cli.html |
| Junie headless mode | https://junie.jetbrains.com/docs/junie-headless.html |
| Junie leaves Beta | https://blog.jetbrains.com/junie/2026/06/junie-coding-agent-out-of-beta/ |
| Kiro CLI setup | https://kiro.dev/docs/cli/setup/ |
| Kiro MCP | https://kiro.dev/docs/mcp/ |
| Upgrading from Q CLI | https://kiro.dev/docs/upgrade-guides/migrating-from-q/ |
| Upgrade to Kiro (AWS) | https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/upgrade-to-kiro.html |
| Kiro steering | https://kiro.dev/docs/steering |
| Kiro Agent Skills | https://kiro.dev/docs/skills |
| AGENTS.md (Cascade / Devin Desktop) | https://docs.windsurf.com/windsurf/cascade/agents-md |
| Cascade MCP configuration | https://docs.windsurf.com/windsurf/cascade/mcp |
| Cascade memories / rules | https://docs.windsurf.com/pt-BR/windsurf/cascade/memories |
| Cline skills | https://docs.cline.bot/customization/skills |
| Cline rules | https://docs.cline.bot/customization/cline-rules |
| Cline MCP | https://docs.cline.bot/mcp/mcp-overview |
| Cline config layout | https://docs.cline.bot/getting-started/config |
| Cline CLI reference | https://docs.cline.bot/cli/cli-reference |
| config.yaml reference | https://docs.continue.dev/reference |
| Continue MCP | https://docs.continue.dev/customize/deep-dives/mcp |
| Continue rules | https://docs.continue.dev/customize/deep-dives/rules |
| Customization overview | https://docs.continue.dev/customize/overview |
| How Claude remembers your project | https://code.claude.com/docs/en/memory |
| Latest stable release v0.60.0 | https://geminicli.com/docs/changelogs/latest/ |

## Daily ingest 2026-09-23 (gap-fill)

| Topic | URL |
| --- | --- |
| OpenHands docs | https://docs.openhands.dev/ |
| OpenHands MCP | https://docs.openhands.dev/openhands/usage/settings/mcp-settings |
| OpenHands repository skills | https://docs.openhands.dev/overview/skills/repo |
| OpenHands SDK skill architecture | https://docs.openhands.dev/sdk/arch/skill.md |
| OpenCode intro | https://opencode.ai/docs/ |
| OpenCode MCP servers | https://opencode.ai/v2/docs/mcp-servers/ |
| OpenCode Agent Skills | https://opencode.ai/docs/skills/ |
| OpenCode agents / permissions | https://opencode.ai/docs/agents/ |
| OpenCode config | https://opencode.ai/docs/config/ |
| Welcome to Factory | https://docs.factory.ai/ |
| Droid CLI overview | https://docs.factory.ai/droid-cli/overview |
| Droid CLI reference | https://docs.factory.ai/droid-cli/cli-reference |
| Factory AGENTS.md | https://docs.factory.ai/harness/agents-md |
| Factory Skills | https://docs.factory.ai/harness/skills |
| Factory custom droids | https://docs.factory.ai/harness/subagents |
| Amp manual | https://ampcode.com/manual |
| Amp MCP | https://ampcode.com/docs/customize/mcp |
| Amp AGENTS.md | https://ampcode.com/docs/markdown/customize/agents-md |
| Sourcegraph MCP client integrations | https://sourcegraph.com/docs/api/mcp/client-integrations |
| Zed External Agents | https://zed.dev/docs/ai/external-agents.html |
| Zed Agent Settings | https://zed.dev/docs/ai/agent-settings.html |
| ACP Registry is live | https://zed.dev/blog/acp-registry |
| Claude Cowork product | https://claude.com/product/cowork |
| Get started with Claude Cowork | https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork |
| Claude Code Desktop | https://code.claude.com/docs/en/desktop |
| Aider documentation | https://aider.chat/docs/ |
| Aider conventions | https://aider.chat/docs/usage/conventions.html |
| Aider YAML config | https://aider.chat/docs/config/aider_conf.html |
| AGENTS.md | https://agents.md/ |
| MCP 2026-07-28 specification | https://modelcontextprotocol.io/specification/2026-07-28 |
| modelcontextprotocol/ext-skills | https://github.com/modelcontextprotocol/ext-skills |
| SEP-2640 Skills Extension (PR) | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640 |
| Skills Over MCP is Final (API Evangelist) | https://apievangelist.com/2026/09/22/skills-over-mcp-is-final-and-now-it-needs-servers/ |
| fast-agent — Skills over MCP | https://fast-agent.ai/mcp/skills-over-mcp/ |

## Daily ingest 2026-09-24 (gap-fill)

| Topic | URL |
| --- | --- |
| Warp Agent | https://www.warp.dev/agents/warp-agent |
| Rules for agents | https://docs.warp.dev/agents/capabilities/rules/ |
| Skills for agents | https://docs.warp.dev/agents/capabilities/skills/ |
| Model Context Protocol (MCP) | https://docs.warp.dev/agents/capabilities/mcp/ |
| Customizing the Warp Agent CLI | https://docs.warp.dev/agents/cli/configuration/ |
| Devin CLI | https://devin.ai/cli |
| Devin CLI: Start Local, Hand Off to the Cloud | https://cognition.com/blog/devin-for-terminal |
| Extensibility overview | https://docs.devin.ai/cli/extensibility |
| Devin CLI plugins | https://docs.devin.ai/cli/extensibility/plugins/overview |
| MCP overview | https://docs.devin.ai/cli/extensibility/mcp/overview |
| MCP configuration | https://docs.devin.ai/cli/extensibility/mcp/configuration |
| AGENTS.md (Devin) | https://docs.devin.ai/onboard-devin/agents-md |
| Qwen Code docs | https://qwenlm.github.io/qwen-code-docs/en/ |
| QwenLM/qwen-code | https://github.com/QwenLM/qwen-code/ |
| Agent Skills | https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/ |
| Connect Qwen Code to tools via MCP | https://qwenlm.github.io/qwen-code-docs/en/users/features/mcp/ |
| Memory / QWEN.md | https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/ |
| Subagents | https://qwenlm.github.io/qwen-code-docs/en/users/features/sub-agents/ |
| Bots for the last mile: Rollouts, Security Review | https://cursor.com/blog/rollouts-and-security-reviewer |
| Rollouts and Security Review (changelog) | https://cursor.com/changelog/rollouts-and-security-reviewer |
| Security Agents | https://cursor.com/docs/security-agents |
| replit.md | https://docs.replit.com/features/project-setup/replit-dot-md |
| Agent Skills (Replit) | https://docs.replit.com/features/agent/skills |
| Customize Replit Agent with Skills | https://replit.com/blog/custom-skills |
| Connect via MCP | https://docs.replit.com/build/connect-via-mcp.md |
| Agent skills (learn) | https://docs.replit.com/learn/agent-skills |
| Warp rules (AGENTS.md) | https://docs.warp.dev/agents/capabilities/rules/ |
| Qwen Code memory (QWEN.md + AGENTS.md) | https://qwenlm.github.io/qwen-code-docs/en/users/features/memory/ |
| Devin CLI extensibility | https://docs.devin.ai/cli/extensibility |

## Daily ingest 2026-09-25 (gap-fill)

| Topic | URL |
| --- | --- |
| Create and manage custom agents (Trae) | https://docs.trae.ai/ide/agent |
| Trae rules | https://docs.trae.ai/ide/rules?_lang=en |
| Trae skills | https://docs.trae.ai/ide/skills |
| Trae CLI memories (AGENTS.md) | https://docs.trae.cn/cli_memories |
| Trae CLI skills | https://docs.trae.cn/cli_skills |
| Trae CLI MCP | https://docs.trae.cn/cli_model-context-protocol |
| Kilo docs | https://kilo.ai/docs |
| Kilo Code CLI | https://kilo.ai/docs/code-with-ai/platforms/cli |
| Kilo CLI command reference | https://kilo.ai/docs/code-with-ai/platforms/cli-reference |
| Kilo skills | https://kilo.ai/docs/customize/skills |
| The Great Roo Migration | https://kilo.ai/roo-migration |
| Jules getting started | https://jules.google/docs/ |
| Jules changelog | https://jules.google/docs/changelog/ |
| Jules API types | https://jules.google/docs/api/reference/types/ |
| @google/jules-mcp | https://www.npmjs.com/package/@google/jules-mcp |
| Kimi Code getting started | https://www.kimi.com/code/docs/en/kimi-code-cli/guides/getting-started |
| MoonshotAI/kimi-code | https://github.com/MoonshotAI/kimi-code |
| Kimi agents and sub-agents | https://moonshotai.github.io/kimi-code/en/customization/agents.html |
| Kimi Agent Skills | https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html |
| Kimi MCP | https://github.com/MoonshotAI/kimi-code/blob/main/docs/en/customization/mcp.md |
| charmbracelet/crush | https://github.com/charmbracelet/crush/ |
| Crush quick start | https://charmbracelet-crush.mintlify.app/quickstart |
| Crush context files | https://charmbracelet-crush.mintlify.app/guides/context-files |
| Crush MCP configuration | https://charmbracelet-crush.mintlify.app/configuration/mcp |
| Antigravity rules | https://antigravity.google/docs/rules/ |
| Antigravity Agent Skills | https://antigravity.google/docs/skills/ |
| Antigravity MCP | https://antigravity.google/docs/mcp/ |
| MCP in Antigravity CLI | https://antigravity.google/docs/cli/mcp/ |
| How Claude remembers your project | https://code.claude.com/docs/en/memory |
| Claude Code changelog | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md |
| Skills Over MCP is Final (API Evangelist) | https://apievangelist.com/2026/09/22/skills-over-mcp-is-final-and-now-it-needs-servers/ |

## Daily ingest 2026-09-26 (gap-fill)

| Topic | URL |
| --- | --- |
| Welcome to MiniMax Code | https://agent.minimax.io/docs/code/welcome |
| CLI quick start | https://agent.minimax.io/docs/cli/quick-start |
| CLI features | https://agent.minimax.io/docs/cli/features |
| CLI configuration | https://agent.minimax.io/docs/cli/configuration |
| Headless and CI | https://agent.minimax.io/docs/cli/automation |
| Security and permissions | https://agent.minimax.io/docs/cli/security |
| MCP Servers | https://agent.minimax.io/docs/code/agents/mcp |
| Plugin Marketplace | https://agent.minimax.io/docs/code/agents/plugins |
| OpenTelemetry for agent monitoring | https://docs.github.com/en/copilot/concepts/agents/opentelemetry |
| Monitor agent usage with OpenTelemetry | https://code.visualstudio.com/docs/agents/guides/monitoring-agents |
| Enterprise managed settings | https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference |
| OpenTelemetry in the GitHub Copilot app | https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app/ |
| Visual Studio Code 1.139 | https://code.visualstudio.com/updates/v1_139 |
| Integrating Copilot cloud agent with Slack | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-slack |
| Updates to GitHub Copilot for Slack and Microsoft Teams | https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams/ |
| The new GitHub Copilot experience in Slack | https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack/ |
| Shared agentic work with GitHub Copilot in Microsoft Teams | https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams/ |
| About cloud and local sandboxes for GitHub Copilot | https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes |
| Using local sandboxing | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing |
| Configuring local sandbox settings | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings |
| Local sandboxing in the GitHub Copilot app | https://github.blog/changelog/2026-09-23-local-sandboxing-in-the-github-copilot-app/ |
| GitHub Copilot weekly releases — September 21 | https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21/ |
| New features and improvements in Copilot for JetBrains | https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains/ |
| Adding organization custom instructions | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-organization-instructions |

## Daily ingest 2026-09-27 (gap-fill)

| Topic | URL |
| --- | --- |
| About GitHub Copilot Memory | https://docs.github.com/en/copilot/concepts/agents/copilot-memory |
| Managing Copilot Memory for your personal account | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself |
| Managing Copilot Memory for an organization or enterprise | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator |
| Copilot Memory controls for deletion, scope, and CLI | https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli/ |
| Agentic memory public preview | https://github.blog/changelog/2026-01-15-agentic-memory-for-github-copilot-is-in-public-preview/ |
| ACP authentication | https://agentclientprotocol.com/protocol/v2/authentication |
| Terminal Authentication RFD | https://agentclientprotocol.com/rfds/auth-methods |
| ACP RFD updates | https://agentclientprotocol.com/rfds/updates |
| ACP CHANGELOG | https://github.com/agentclientprotocol/agent-client-protocol/blob/main/CHANGELOG.md |
| Voice support (VS Code) | https://code.visualstudio.com/docs/configure/accessibility/voice |
| AI settings reference | https://code.visualstudio.com/docs/agents/reference/ai-settings |
| Use the Agents window | https://code.visualstudio.com/docs/agents/run/agents-window |
| Visual Studio Code 1.137 — Voice Mode | https://code.visualstudio.com/updates/v1_137 |
| What is Amazon Bedrock AgentCore? | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html |
| AgentCore Gateway | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway.html |
| MCP protocol contract | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-mcp-protocol-contract.html |
| How AgentCore Gateway supports MCP 2026-07-28 | https://aws.amazon.com/blogs/machine-learning/how-agentcore-gateway-supports-the-mcp-2026-07-28-spec/ |
| Get started with AgentCore CLI | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-get-started-cli.html |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| Monitoring usage (OpenTelemetry) | https://code.claude.com/docs/en/monitoring-usage |
| Claude Code CHANGELOG | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md |
| Latest stable release v0.60.0 | https://geminicli.com/docs/changelogs/latest/ |

## Daily ingest 2026-09-28 (gap-fill)

| Topic | URL |
| --- | --- |
| Import from another agent | https://developers.openai.com/codex/import |
| Developer commands — /import | https://developers.openai.com/codex/cli/reference |
| ACP elicitation | https://agentclientprotocol.com/protocol/v2/elicitation |
| Elicitation is stabilized | https://agentclientprotocol.com/announcements/elicitation-stabilized |
| MCP elicitation (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |
| Introducing Projects | https://cursor.com/blog/projects |
| Cursor changelog | https://cursor.com/changelog |
| More ways to request and configure Copilot code reviews | https://github.blog/changelog/2026-09-23-copilot-code-review-more-ways-to-request-and-configure-reviews/ |
| About GitHub Copilot code review | https://docs.github.com/en/copilot/concepts/agents/code-review |
| Claude Code CHANGELOG | https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md |
| Choose and use an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| Visual Studio Code 1.138 | https://code.visualstudio.com/updates/v1_138 |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| SEP-1932: DPoP Profile for MCP | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/1932 |
| typescript-sdk DPoP client PR | https://github.com/modelcontextprotocol/typescript-sdk/pull/2629 |
| typescript-sdk DPoP server PR | https://github.com/modelcontextprotocol/typescript-sdk/pull/2630 |
| TypeScript SDK Tier 1 Assessment | https://github.com/modelcontextprotocol/modelcontextprotocol/issues/3268 |

## Daily ingest 2026-09-29 (gap-fill)

| Topic | URL |
| --- | --- |
| Run Claude Code through a gateway | https://code.claude.com/docs/en/gateways |
| Claude apps gateway | https://code.claude.com/docs/en/claude-apps-gateway |
| Claude apps gateway configuration | https://code.claude.com/docs/en/claude-apps-gateway-config |
| Claude apps gateway deployment | https://code.claude.com/docs/en/claude-apps-gateway-deploy |
| Copilot feature matrix | https://docs.github.com/en/copilot/reference/copilot-feature-matrix |
| Installing the Copilot extension | https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension |
| Asking Copilot questions in your IDE | https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide |
| Creating custom agents in your IDE | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents-in-your-ide |
| Custom agents configuration | https://docs.github.com/en/copilot/reference/custom-agents-configuration |
| Use Agent Mode (Visual Studio) | https://learn.microsoft.com/en-us/visualstudio/ide/copilot-agent-mode |
| Get started with GitHub Copilot (Visual Studio) | https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-get-started |
| Visual Studio 2026 release notes | https://learn.microsoft.com/en-us/visualstudio/releases/2026/release-notes |
| Origin API | https://cursor.com/docs/origin/api |
| Origin API changelog | https://cursor.com/docs/api/origin/changelog |
| Codebase settings | https://cursor.com/docs/origin/codebase-settings |
| Pull request commands | https://cursor.com/docs/origin/cli/reference/pull-requests |
| Codex App Server | https://developers.openai.com/codex/app-server |

## Daily ingest 2026-09-30 (gap-fill)

| Topic | URL |
| --- | --- |
| Projects redesigned: from folder to conversation | https://claude.com/blog/projects-redesigned |
| Claude Code relaunches Projects (The Verge) | https://www.theverge.com/ai-artificial-intelligence/997134/anthropic-claude-code-projects |
| Agent teams | https://code.claude.com/docs/en/agent-teams |
| Claude Code on the web | https://code.claude.com/docs/en/claude-code-on-the-web |
| Manage approvals and permissions | https://code.visualstudio.com/docs/agents/run/approvals |
| AI settings reference | https://code.visualstudio.com/docs/agents/reference/ai-settings |
| Secure AI-assisted development in VS Code | https://code.visualstudio.com/docs/agents/run/security |
| New features in Copilot for JetBrains | https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains/ |
| server/scopeChallenge (TypeScript SDK) | https://ts.sdk.modelcontextprotocol.io/v2/api/@modelcontextprotocol/server/server/scopeChallenge.html |
| feat(server): add request-time OAuth scope challenges | https://github.com/modelcontextprotocol/typescript-sdk/pull/1624 |
| MCP Authorization (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization |
| MCP SDK 2.1.0: OAuth DPoP Tokens and Scope Challenges | https://fluidlabs.com/resources/mcp-sdk-2-1-0-oauth-dpop-scope-challenges |
| Cloud environments | https://learn.chatgpt.com/docs/environments/cloud-environments |
| Codex Security | https://developers.openai.com/codex/security |
| Codex Security Cloud setup | https://developers.openai.com/codex/security/setup |
| FAQ – Codex Security | https://developers.openai.com/codex/security/faq |
| Rolling back changes in Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/roll-back-changes |
| Canceling and rolling back (Copilot CLI) | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/cancel-and-roll-back |
| Computer use (Agents API) | https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use |
| Bedrock Managed Agents | https://developers.openai.com/api/docs/guides/agents-api/bedrock-managed-agents |

## Daily ingest 2026-10-01 (gap-fill)

| Topic | URL |
| --- | --- |
| GitHub Copilot can now interact with desktop apps with computer use | https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/ |
| Using GitHub Copilot CLI to interact with desktop applications | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/computer-use |
| Using the GitHub Copilot app to interact with desktop applications | https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use |
| Let Claude use your computer from the CLI | https://code.claude.com/docs/en/computer-use |
| Desktop application (Claude Code) | https://code.claude.com/docs/en/desktop |
| Let Claude use your computer in Cowork | https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork |
| About remote control of GitHub Copilot CLI sessions | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-remote-control |
| Steering a GitHub Copilot CLI session from another device | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/steer-remotely |
| Remote control for Copilot CLI sessions now generally available | https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code/ |
| v2.1.248 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.248 |
| Choose a permission mode | https://code.claude.com/docs/en/permission-modes |
| CLI reference (Claude Code) | https://code.claude.com/docs/en/cli-reference |

## Daily ingest 2026-10-02 (gap-fill)

| Topic | URL |
| --- | --- |
| Mods overview | https://code.claude.com/docs/en/plugins/mods/overview |
| Manage mods for your organization | https://code.claude.com/docs/en/plugins/mods/admin |
| Claude Code changelog v2.1.287 | https://github.com/anthropics/claude-code/releases/tag/v2.1.287 |
| About GitHub Agentic Workflows | https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows |
| Creating GitHub Agentic Workflows | https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows |
| Develop agentic workflows in GitHub Actions | https://docs.github.com/en/actions/tutorials/develop-agentic-workflows-in-github-actions |
| Automating tasks with Copilot CLI and GitHub Actions | https://docs.github.com/en/copilot/how-tos/copilot-cli/automate-copilot-cli/automate-with-actions |
| Dynamic workflows in Copilot CLI and the Copilot app | https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/ |
| Using dynamic workflows | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-dynamic-workflows |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/cli-command-reference |
| Running tasks in parallel with the /fleet command | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/fleet |
| Fleet mode (Copilot SDK) | https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/fleet-mode |
| GitHub Spec Kit | https://github.github.com/spec-kit/ |
| Spec-Driven Development Quickstart | https://github.github.com/spec-kit/quickstart.html |
| github/spec-kit | https://github.com/github/spec-kit/ |
| continual-learning README | https://github.com/cursor/plugins/tree/main/continual-learning |
| agents-memory-updater | https://cursor.com/marketplace/agents/agents-memory-updater |
| Cursor Plugins marketplace — Continual Learning | https://cursor.com/marketplace/cursor/continual-learning |
| Rules / AGENTS.md | https://cursor.com/docs/context/rules |

## Daily ingest 2026-10-03 (gap-fill)

| Topic | URL |
| --- | --- |
| Getting started (OpenClaw) | https://docs.openclaw.ai/start/getting-started |
| Agent workspace (OpenClaw) | https://docs.openclaw.ai/concepts/agent-workspace |
| Skills (OpenClaw) | https://docs.openclaw.ai/tools/skills |
| Code Mode (OpenClaw) | https://docs.openclaw.ai/tools/code-mode |
| openclaw agent | https://docs.openclaw.ai/cli/agent |
| Security (OpenClaw) | https://docs.openclaw.ai/gateway/security |
| Agent Client Protocol (Devin Desktop) | https://docs.devin.ai/desktop/acp |
| Building a custom ACP agent | https://docs.devin.ai/desktop/acp-custom |
| Spaces (Devin Desktop) | https://docs.devin.ai/desktop/spaces |
| Agent Command Center | https://docs.devin.ai/desktop/agent-command-center |
| Windsurf is now Devin Desktop | https://devin.ai/blog/windsurf-is-now-devin-desktop |
| CSA — Hidden Unicode Instruction Injection in AI Agent Skills | https://labs.cloudsecurityalliance.org/wp-content/uploads/2026/03/CSA_research_note_unicode_instruction_injection_ai_skills_20260310-csa-styled.pdf |
| Snyk — ToxicSkills | https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/ |
| SkillJect (arXiv:2602.14211) | https://arxiv.org/abs/2602.14211 |
| Skill-Inject benchmark | https://www.skill-inject.com/ |
| OWASP AST01 — Malicious Skills | https://owasp.org/www-project-agentic-skills-top-10/ast01.html |
| Agent Skills specification | https://agentskills.io/specification |
| agentskills/agentskills | https://github.com/agentskills/agentskills |
| skills.sh | https://www.skills.sh/ |
| AI Agent Skill Directories compared | https://agenticskills.io/ai-skills-directories |
| Connect Claude Code to tools via MCP | https://code.claude.com/docs/en/mcp |
| Hooks reference (Claude Code) | https://code.claude.com/docs/en/hooks |
| Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide |
| Agent SDK hooks | https://code.claude.com/docs/en/agent-sdk/hooks |
| Claude Code changelog v2.1.287 | https://github.com/anthropics/claude-code/releases/tag/v2.1.287 |
| MCP elicitation (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation |
| Explore the context window | https://code.claude.com/docs/en/context-window |
| Model configuration (Claude Code) | https://code.claude.com/docs/en/model-config |
| SEP-2631: File Objects and Transfer | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2631 |
| SEP-2356: File input support | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2356 |
| File Uploads Working Group charter | https://modelcontextprotocol.io/community/working-groups/file-uploads |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| MCP resources (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/server/resources |
| MCP Skills Extension overview | https://skills.extensions.modelcontextprotocol.io/ |
| Skills methods (stable) | https://skills.extensions.modelcontextprotocol.io/specification/stable/skills |
| modelcontextprotocol/ext-skills | https://github.com/modelcontextprotocol/ext-skills |
| SEP-2640 Skills Extension (PR) | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2640 |
| SEP-2640 status / SDK tracker | https://unifiedharnessprotocol.dev/skills-over-mcp/ |
| MCP 2026-07-28 specification | https://modelcontextprotocol.io/specification/2026-07-28 |

## Daily ingest 2026-10-04 (gap-fill)

| Topic | URL |
| --- | --- |
| Docs MCP | https://developers.openai.com/learn/docs-mcp |
| Codex MCP server removal | https://learn.chatgpt.com/docs/mcp-server |
| Codex App Server | https://developers.openai.com/codex/app-server.md |
| Selected models in GitHub Copilot deprecated | https://github.blog/changelog/2026-10-02-selected-models-in-github-copilot-deprecated/ |
| Upcoming deprecation of selected GitHub Copilot models in mid-October | https://github.blog/changelog/2026-09-18-upcoming-deprecation-of-selected-github-copilot-models-in-mid-october/ |
| Copilot code review: API support and new default effort level | https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level/ |
| Using GitHub Copilot code review | https://docs.github.com/en/copilot/how-tos/agents/copilot-code-review/using-copilot-code-review |
| About GitHub Copilot code review | https://docs.github.com/en/copilot/concepts/agents/code-review |
| v2.1.288 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.288 |
| v2.1.289 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.289 |
| Agent teams | https://code.claude.com/docs/en/agent-teams |
| Prompting agents | https://cursor.com/docs/agent/prompting |
| Design Mode | https://cursor.com/docs/agent/design-mode |
| Continue has joined Cursor | https://continue.dev/ |
| continuedev/continue | https://github.com/continuedev/continue |
| OpenCode ACP | https://opencode.ai/v2/docs/cli/acp/ |
| OpenCode instructions (V2) | https://opencode.ai/v2/docs/instructions/ |

## Daily ingest 2026-10-05 (gap-fill)

| Topic | URL |
| --- | --- |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Plugins | https://cursor.com/docs/plugins |
| Agent Skills | https://cursor.com/docs/skills |
| Cursor Agent | https://cursor.com/docs/agent/overview |
| CLI Changelog | https://cursor.com/docs/cli/changelog |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| Cloud Agents and Cursor Harness Improvements (2026-08-19) | https://cursor.com/changelog/08-19-26 |
| Cursor changelog index | https://cursor.com/changelog |
| Access tokens | https://developers.openai.com/codex/enterprise/access-tokens |
| Codex App Server | https://developers.openai.com/codex/app-server |
| Command line options | https://developers.openai.com/codex/cli/reference |
| Model Context Protocol (Codex) | https://developers.openai.com/codex/mcp |
| Configuration Reference | https://developers.openai.com/codex/config-reference |
| Changing settings with the /settings command | https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/change-settings |
| GitHub Copilot CLI configuration directory | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference |
| Configuring GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli |
| Configuring local sandbox settings | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| copilot-cli v1.0.92-4 | https://github.com/github/copilot-cli/releases/tag/v1.0.92-4 |

## Daily ingest 2026-10-06 (gap-fill)

| Topic | URL |
| --- | --- |
| Run Modes | https://cursor.com/docs/agent/security/run-modes |
| Agent Security | https://cursor.com/docs/agent/security |
| permissions.json reference | https://cursor.com/docs/reference/permissions |
| sandbox.json reference | https://cursor.com/docs/reference/sandbox.md |
| Cloud Agent Builds | https://cursor.com/docs/cloud-agent/builds |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Cursor TypeScript SDK | https://cursor.com/docs/sdk/typescript |
| SDK Changelog | https://cursor.com/docs/sdk/changelog |
| Prompting agents | https://cursor.com/docs/agent/prompting |
| CHANGELOG.md (Claude Code) | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Connect Claude Code to tools via MCP | https://code.claude.com/docs/en/mcp |
| Discover and install plugins | https://code.claude.com/docs/en/discover-plugins |
| Plugin marketplaces | https://code.claude.com/docs/en/plugin-marketplaces |
| Model configuration (Claude Code) | https://code.claude.com/docs/en/model-config |
| Mods overview | https://code.claude.com/docs/en/plugins/mods/overview |
| GitHub Copilot in VS Code, September 2026 releases | https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases/ |
| Skills (MCP extension overview) | https://modelcontextprotocol.io/extensions/skills/overview |

## Daily ingest 2026-10-07 (gap-fill)

| Topic | URL |
| --- | --- |
| Discover local models in GitHub Copilot CLI | https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli/ |
| Adding LLM models to GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models |
| About GitHub Copilot CLI | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli |
| Authenticating GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Using local sandboxing | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing |
| Service Accounts | https://cursor.com/docs/account/enterprise/service-accounts |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Agent Builds | https://cursor.com/docs/cloud-agent/builds |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| Self-Hosted Machines | https://cursor.com/docs/cloud-agent/self-hosted |
| Model Context Protocol (Codex) | https://developers.openai.com/codex/mcp |
| Codex 0.161.0 | https://github.com/openai/codex/releases/tag/rust-v0.161.0 |
| Files Working Group Meeting — October 2, 2026 | https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3412 |
| SEP-2631: File Objects and Transfer | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2631 |
| Gemini CLI v0.63.0 | https://geminicli.com/docs/changelogs/latest/ |

## Daily ingest 2026-10-08 (gap-fill)

| Topic | URL |
| --- | --- |
| Remote control for local agents (changelog) | https://cursor.com/changelog |
| Cursor for iOS | https://cursor.com/docs/cloud-agent/mobile |
| Cursor IDE changelog — Oct 7 2026 (3.23.23) | https://techdevnotes.com/releases/cursor-ide/20261007-020505Z-4e1ed0d5d240 |
| Adding agent skills for GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/cli-command-reference |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Local sandboxing for GitHub Copilot now generally available | https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available/ |
| About cloud and local sandboxes for GitHub Copilot | https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes |
| Sandbox Copilot Agent Host sessions | https://code.visualstudio.com/docs/agents/run/agent-sandboxing |
| Subagents | https://cursor.com/docs/subagents |
| v2.1.295 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.295 |
| Codex 0.162.0 | https://github.com/openai/codex/releases/tag/rust-v0.162.0 |
| Worktrees (Codex app) | https://developers.openai.com/codex/app/worktrees |

## Daily ingest 2026-10-09 (gap-fill)

| Topic | URL |
| --- | --- |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/cli-command-reference |
| Allowing and denying tool use | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools |
| Enterprise managed settings | https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference |
| GitHub Copilot CLI configuration directory | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-config-dir-reference |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Authenticating GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |
| Introducing Projects | https://cursor.com/blog/projects |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Cursor changelog | https://cursor.com/changelog |
| Hooks reference | https://code.claude.com/docs/en/hooks |
| Automate actions with hooks | https://code.claude.com/docs/en/hooks-guide |
| v2.1.295 | https://github.com/anthropics/claude-code/releases/tag/v2.1.295 |
| CHANGELOG.md (Claude Code) | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| Run Claude Code through a gateway | https://code.claude.com/docs/en/gateways |
| Claude apps gateway | https://code.claude.com/docs/en/claude-apps-gateway |
| Claude apps gateway configuration | https://code.claude.com/docs/en/claude-apps-gateway-config |
| Cursor Automations | https://cursor.com/docs/cloud-agent/automations |
| Cursor web release notes | https://cursor.com/docs/release-notes/web |
| GitLab (Cursor docs) | https://cursor.com/docs/integrations/gitlab |
| Desktop application | https://code.claude.com/docs/en/desktop |
| Cursor Plugins | https://cursor.com/docs/plugins |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Cursor IDE release notes | https://cursor.com/docs/release-notes/ide |

## Daily ingest 2026-10-10 (gap-fill)

| Topic | URL |
| --- | --- |
| Visual Studio Code 1.141 | https://code.visualstudio.com/updates/v1_141 |
| Manage agent sessions in VS Code | https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions |
| GitHub Copilot weekly releases — October 5 | https://github.blog/changelog/2026-10-09-github-copilot-weekly-releases-october-5/ |
| Agents Window release notes | https://cursor.com/docs/release-notes/agents-window |
| Release notes (all products) | https://cursor.com/docs/release-notes |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Secrets & Network | https://cursor.com/docs/cloud-agent/network-access |
| Create custom subagents | https://code.claude.com/docs/en/sub-agents |
| CHANGELOG.md (Claude Code) | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| copilot-cli 1.0.96-0 | https://github.com/github/copilot-cli/releases/tag/v1.0.96-0 |
| copilot-cli 1.0.96-1 | https://github.com/github/copilot-cli/releases/tag/v1.0.96-1 |
| copilot-cli 1.0.96-2 | https://github.com/github/copilot-cli/releases/tag/v1.0.96-2 |
| Configuring local sandbox settings | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings |
| Prompting agents | https://cursor.com/docs/agent/prompting |
| Cursor IDE release notes | https://cursor.com/docs/release-notes/ide |
| Choose and use an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| Understand agent sessions and handoff | https://code.visualstudio.com/docs/agents/concepts/sessions |
| VS Code Agent Host architecture | https://code.visualstudio.com/docs/agents/concepts/agent-host |

## Daily ingest 2026-10-11 (gap-fill)

| Topic | URL |
| --- | --- |
| Compliance and Monitoring | https://cursor.com/docs/enterprise/compliance-and-monitoring |
| Organization API | https://cursor.com/docs/account/organizations/organization-admin-api |
| Admin API | https://cursor.com/docs/account/teams/admin-api |
| Deployment Patterns | https://cursor.com/docs/enterprise/deployment-patterns |
| Cursor IDE release notes | https://cursor.com/docs/release-notes/ide |
| permissions.json reference | https://cursor.com/docs/reference/permissions |
| Cursor Hooks | https://cursor.com/docs/hooks |
| Cursor MCP | https://cursor.com/docs/mcp |
| Bugbot docs | https://cursor.com/docs/bugbot |
| Cursor web release notes | https://cursor.com/docs/release-notes/web |
| PR Routing & Approval | https://cursor.com/docs/approval-agents |
| Security Agents | https://cursor.com/docs/security-agents |
| Cloud Environment Setup | https://cursor.com/docs/cloud-agent/setup |
| Plugins (Antigravity) | https://antigravity.google/docs/plugins |
| Radar brief — 2026-10-10 | https://www.devagentradar.com/insights/radar-brief-2026-10-10 |



## Daily ingest 2026-10-12 (gap-fill)

| Topic | URL |
| --- | --- |
| Local Server Security | https://modelcontextprotocol.io/docs/draft/tutorials/security/local-server-security |
| MCP Inspector security | https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/security |
| MCP stdio (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio |
| OpenAI Daybreak — Trusted Access for Cyber Overview | https://help.openai.com/en/articles/20001258-openai-daybreak-trusted-access-for-cyber-overview |
| Set up Daybreak access for your team | https://help.openai.com/en/articles/20001531-openai-daybreak-set-up-access-for-your-team |
| Enterprise Daybreak onboarding | https://help.openai.com/en/articles/20001261-enterprise-daybreak-onboarding |
| Use Daybreak in the Responses API | https://developers.openai.com/api/docs/guides/daybreak |
| Daybreak troubleshooting | https://help.openai.com/en/articles/20001259-openai-daybreak-common-issues-and-troubleshooting |
| Codex 0.161.0 | https://github.com/openai/codex/releases/tag/rust-v0.161.0 |
| Codex 0.162.0 | https://github.com/openai/codex/releases/tag/rust-v0.162.0 |
| SEP-2127: MCP Server Cards | https://modelcontextprotocol.io/seps/2127-mcp-server-cards |
| SEP index | https://modelcontextprotocol.io/seps |
| experimental-ext-server-card | https://github.com/modelcontextprotocol/experimental-ext-server-card |
| MCP Protocol News — October 9, 2026 | https://library.mikesailab.com/news/ai-news/mcp-news/october-2026/2026-10-09/ |
| Skills overview (MCP) | https://modelcontextprotocol.io/extensions/skills/overview |
| Skills methods (stable) | https://skills.extensions.modelcontextprotocol.io/specification/stable/skills |
| Skills — MCP Python SDK | https://py.sdk.modelcontextprotocol.io/advanced/skills/ |
| modelcontextprotocol/ext-skills | https://github.com/modelcontextprotocol/ext-skills |
| SEP-2640 Skills Extension | https://modelcontextprotocol.io/seps/2640-skills-extension |
| About hooks for GitHub Copilot | https://docs.github.com/en/copilot/concepts/agents/hooks |
| GitHub Copilot hooks reference | https://docs.github.com/en/copilot/reference/hooks-reference |
| Hooks configuration | https://docs.github.com/en/copilot/reference/hooks-configuration |
| Using hooks with Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-hooks |
| copilot-cli 1.0.96 | https://github.com/github/copilot-cli/releases/tag/v1.0.96 |
| Agent Skills – Codex | https://developers.openai.com/codex/skills |
| Build skills | https://developers.openai.com/codex/build-skills |
| Customization – Codex | https://developers.openai.com/codex/concepts/customization |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Agent Skills specification | https://agentskills.io/specification |
| Cursor CLI MCP | https://cursor.com/docs/cli/mcp |
| Using Agent in CLI | https://cursor.com/docs/cli/using |
| CLI slash commands | https://cursor.com/docs/cli/reference/slash-commands |
| CLI Changelog | https://cursor.com/docs/cli/changelog |
| Command line options – Codex CLI | https://developers.openai.com/codex/cli/reference |
| Codex GitHub Action | https://developers.openai.com/codex/github-action.md |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| Customize Cursor | https://cursor.com/docs/customize-cursor |
| Cursor IDE release notes | https://cursor.com/docs/release-notes/ide |
| Plugins | https://cursor.com/docs/plugins |
| Agent Skills | https://cursor.com/docs/skills |
| Cursor MCP | https://cursor.com/docs/mcp |
| Custom agents configuration | https://docs.github.com/en/copilot/reference/custom-agents-configuration |
| Creating custom agents in your IDE | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents-in-your-ide |
| Creating and using custom agents for GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli |
| Creating custom agents for Copilot cloud agent | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents |
| Invoking custom agents | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/invoke-custom-agents |

## Daily ingest 2026-10-13 (gap-fill)

| Topic | URL |
| --- | --- |
| Allowing GitHub Copilot CLI to work autonomously | https://docs.github.com/en/copilot/concepts/agents/copilot-cli/autopilot |
| Delegating tasks to Copilot | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/delegate-tasks-to-cca |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Origin Apps | https://cursor.com/docs/origin/apps |
| Publish to the App Marketplace | https://cursor.com/docs/origin/apps/publish |
| Cursor changelog | https://cursor.com/changelog |
| Origin release notes | https://cursor.com/docs/release-notes/origin |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| CLI Changelog | https://cursor.com/docs/cli/changelog |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| Cloud Environment Setup | https://cursor.com/docs/cloud-agent/setup |
| Explore the context window | https://code.claude.com/docs/en/context-window |
| Claude Code CHANGELOG | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| GitHub Copilot hooks reference | https://docs.github.com/en/copilot/reference/hooks-reference |
| Custom agents configuration | https://docs.github.com/en/copilot/reference/custom-agents-configuration |

## Daily ingest 2026-10-14 (gap-fill)

| Topic | URL |
| --- | --- |
| Claude Code CHANGELOG | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| v2.1.299 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.299 |
| v2.1.300 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.300 |
| Explore the context window | https://code.claude.com/docs/en/context-window |
| Escalate hard decisions with the advisor tool | https://code.claude.com/docs/en/advisor |
| Claude Code in Slack | https://code.claude.com/docs/en/slack |
| Claude Tag | https://code.claude.com/docs/en/claude-tag |
| Use Claude Code on the web | https://code.claude.com/docs/en/claude-code-on-the-web |
| CLI reference | https://code.claude.com/docs/en/cli-reference |
| Model configuration | https://code.claude.com/docs/en/model-config |
| Session Notices RFD | https://agentclientprotocol.com/rfds/session-notices |
| Session Compaction RFD | https://agentclientprotocol.com/rfds/session-compaction |
| RFD Updates | https://agentclientprotocol.com/rfds/updates |
| ACP v1 initialization | https://agentclientprotocol.com/protocol/v1/initialization |
| ACP v1 prompt turn | https://agentclientprotocol.com/protocol/v1/prompt-turn |
| ACP v2 prompt lifecycle | https://agentclientprotocol.com/protocol/v2/prompt-lifecycle |
| Models (ChatGPT Learn) | https://learn.chatgpt.com/docs/models |
| Speed — Fast and Ultrafast | https://learn.chatgpt.com/docs/agent-configuration/speed |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Workspace model availability | https://learn.chatgpt.com/docs/enterprise/workspace-model-availability |
| SEP-3415: Events Extension (PR) | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3415 |
| MCP Events (OpenAI plugins) | https://developers.openai.com/plugins/build/mcp-events |
| SEP queue | https://voting.modelcontextprotocol.io/p/seps |
| MCP Extensions overview | https://modelcontextprotocol.io/extensions/overview |
| HydraFusion updates and new Max option | https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/ |
| HydraFusion in VS Code and the GitHub Copilot app | https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app/ |
| Project HydraFusion (GitHub Blog) | https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/ |
| About Copilot auto model selection | https://docs.github.com/en/copilot/concepts/auto-model-selection |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| copilot-cli 1.0.98 | https://github.com/github/copilot-cli/releases/tag/v1.0.98 |
| Gemini 4 Argon in GitHub Copilot | https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/ |
| Enterprise managed settings enforcement updates | https://github.blog/changelog/2026-10-13-enterprise-managed-settings-enforcement-updates/ |
| Enterprise managed settings | https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings |
| Enterprise managed settings reference | https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference |
| Configuring enterprise-managed settings | https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings |


## Daily ingest 2026-10-15 (gap-fill)

| Topic | URL |
| --- | --- |
| Client-Provided System Prompt RFD | https://agentclientprotocol.com/rfds/client-system-prompt |
| RFD Updates | https://agentclientprotocol.com/rfds/updates |
| Environment variables (Claude Code) | https://code.claude.com/docs/en/env-vars |
| Error reference (Claude Code) | https://code.claude.com/docs/en/errors |
| v2.1.301 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.301 |
| Claude Code gateway compatibility | https://code.claude.com/docs/en/llm-gateway-protocol |
| AI Scan for pull requests | https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections |
| AI Scan for pull requests generally available | https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available/ |
| About autofix for code scanning | https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning |
| Agentic autofix for code scanning alerts general availability | https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability/ |
| Resolving code scanning alerts | https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts |
| Upcoming deprecation of selected GitHub Copilot models in mid-November | https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/ |
| Codex 0.163.0 | https://github.com/openai/codex/releases/tag/rust-v0.163.0 |
| copilot-cli 1.0.99-1 | https://github.com/github/copilot-cli/releases/tag/v1.0.99-1 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Configuring GitHub Copilot CLI | https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli |
| Cursor CLI changelog | https://cursor.com/docs/cli/changelog |
| Cursor Plugins | https://cursor.com/docs/plugins |

## Daily ingest 2026-10-16 (gap-fill)

| Topic | URL |
| --- | --- |
| Canvases (Cursor) | https://cursor.com/docs/agent/tools/canvas |
| Cursor changelog | https://cursor.com/changelog |
| Agent Skills (Cursor) | https://cursor.com/docs/skills |
| Cloud Agents API endpoints | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Agents API overview | https://cursor.com/docs/cloud-agent/api/overview |
| Cloud Agents settings | https://cursor.com/docs/cloud-agent/settings |
| Visual Studio Code 1.142 | https://code.visualstudio.com/updates/v1_142 |
| Choose an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| Get started with Claude Design | https://support.claude.com/en/articles/14604416-get-started-with-claude-design |
| Migrate from standalone Claude Design | https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude |
| Claude Design product page | https://claude.com/product/design |
| v2.1.302 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.302 |
| Configure auto mode | https://code.claude.com/docs/en/auto-mode-config |
| Multi-repo support for Copilot in Slack and Teams | https://github.blog/changelog/2026-10-15-copilot-in-slack-and-teams-adds-model-and-repository-updates/ |
| copilot-cli 1.0.100-0 | https://github.com/github/copilot-cli/releases/tag/v1.0.100-0 |
| copilot-cli 1.0.99-3 | https://github.com/github/copilot-cli/releases/tag/v1.0.99-3 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Claude Code CHANGELOG | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |

## Daily ingest 2026-10-17 (gap-fill)

| Topic | URL |
| --- | --- |
| About open source license compliance | https://docs.github.com/en/code-security/concepts/supply-chain-security/open-source-license-compliance |
| Configuring open source license policies | https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-license-policies |
| REST API endpoints for license compliance | https://docs.github.com/en/enterprise-cloud@latest/rest/dependency-graph/license-compliance |
| Open source license compliance generally available | https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available/ |
| SEP-2792: Per-Request User Language Preference | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2792 |
| SEP-2792 vote | https://voting.modelcontextprotocol.io/polls/1368eab99def3f3839e2f863cef5ca94 |
| TypeScript SDK reference implementation | https://github.com/modelcontextprotocol/typescript-sdk/pull/2158 |
| MCP Spec TPM | https://plan.modelcontextprotocol.io/seps |
| SEP-2643: Structured Authorization Denials | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2643 |
| SEP-2848: Asynchronous Approval for Tool Calls | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2848 |
| Test iOS apps in the simulator | https://code.claude.com/docs/en/desktop-ios-simulator |
| Desktop application | https://code.claude.com/docs/en/desktop |
| Let Claude use your computer from the CLI | https://code.claude.com/docs/en/computer-use |
| Slack (Cursor docs) | https://cursor.com/docs/integrations/slack |
| Cloud Agents settings | https://cursor.com/docs/cloud-agent/settings |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Cloud Agents overview | https://cursor.com/docs/cloud-agent |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |
| Cursor web release notes | https://cursor.com/docs/release-notes/web |
| copilot-cli 1.0.100-1 | https://github.com/github/copilot-cli/releases/tag/v1.0.100-1 |

## Daily ingest 2026-10-18 (gap-fill)

| Topic | URL |
| --- | --- |
| SEP-3392: Extension Lifecycle | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3392 |
| MCP Core Maintainer Meeting — September 30, 2026 | https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3407 |
| SEP-2133 — Extensions | https://modelcontextprotocol.io/seps/2133-extensions |
| MCP Extensions overview | https://modelcontextprotocol.io/extensions/overview |
| MCP Spec TPM | https://plan.modelcontextprotocol.io/seps |
| SEP-2848: Asynchronous Approval for Tool Calls | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2848 |
| SEP-2643: Structured Authorization Denials | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2643 |
| MCP Tasks overview | https://modelcontextprotocol.io/extensions/tasks/overview |
| Workflow dependency lockfiles | https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles |
| Locking action dependencies in a repository's workflows | https://docs.github.com/en/actions/how-tos/secure-your-work/lock-workflow-dependencies |
| Enforcing lockfiles for action dependencies | https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/administer/enforce-workflow-lockfiles |
| GitHub Actions workflow lockfiles in public preview | https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/ |
| SEP-2778: Adding Type Constraints to the MCP | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2778 |
| Feature Lifecycle and Deprecation Policy | https://modelcontextprotocol.io/community/feature-lifecycle |
| SEP-2598: Pluggable Transports | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2598 |
| MCP stdio (2026-07-28) | https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio |
| Roadmap — Model Context Protocol | https://modelcontextprotocol.io/development/roadmap |
| Visual Studio Code 1.143 (Insiders) | https://code.visualstudio.com/updates/v1_143 |
| Add and manage MCP servers in VS Code | https://code.visualstudio.com/docs/agent-customization/mcp-servers |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Codex 0.163.0 | https://github.com/openai/codex/releases/tag/rust-v0.163.0 |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| ACP v2 Proposal (RFD overview) | https://agentclientprotocol.com/rfds/v2/overview |
| ACP v2 protocol overview | https://agentclientprotocol.com/protocol/v2/overview |

## Daily ingest 2026-10-19 (gap-fill)

| Topic | URL |
| --- | --- |
| Copilot model policy API for enterprise, orgs, and teams | https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams/ |
| REST API endpoints for enterprise AI controls | https://docs.github.com/en/enterprise-cloud@latest/rest/enterprise-admin/ai-controls |
| About default availability of Copilot features and models | https://docs.github.com/en/copilot/concepts/enterprise/default-availability |
| GitHub Copilot models deprecated on October 19, 2026 | https://github.blog/changelog/2026-10-19-github-copilot-models-deprecated-on-october-19-2026/ |
| Upcoming deprecation of selected GitHub Copilot models in mid-November | https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/ |
| Composer predictions in Codex | https://help.openai.com/en/articles/20001601-composer-predictions-in-codex |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Codex app: support composer predictions with a custom model provider | https://github.com/openai/codex/issues/52910 |
| Manage agent sessions in VS Code | https://code.visualstudio.com/docs/agents/run/sessions/manage-sessions/ |
| Visual Studio Code 1.142 | https://code.visualstudio.com/updates/v1_142/ |
| Understand sessions and chats | https://code.visualstudio.com/docs/agents/concepts/sessions |
| Choose an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| Purpose-built model for leaked secret detection | https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection/ |
| GitHub’s model for secret detection | https://github.blog/ai-and-ml/githubs-model-for-secret-detection-finding-more-secrets-with-less-noise/ |
| Secret protection must scale with software | https://github.blog/ai-and-ml/github-copilot/secret-protection-must-scale-with-software/ |
| New controls and chat improvements in Copilot for JetBrains | https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains/ |
| Client telemetry user attribution and configurable capture | https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture/ |
| Enterprise managed settings reference | https://docs.github.com/en/copilot/reference/enterprise-managed-settings-reference |
| Control MCP server access for your organization | https://code.claude.com/docs/en/managed-mcp |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Copilot code review: New organization billing options and controls | https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls/ |

## Daily ingest 2026-10-20 (gap-fill)

| Topic | URL |
| --- | --- |
| SEP-3398: Release Cycle Updates | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3398 |
| SEP-3398 vote | https://voting.modelcontextprotocol.io/p/v98cy36vp5 |
| MCP Core Maintainer Meeting — September 30, 2026 | https://github.com/modelcontextprotocol/modelcontextprotocol/discussions/3407 |
| MCP Spec TPM | https://plan.modelcontextprotocol.io/seps |
| MCP development roadmap | https://modelcontextprotocol.io/development/roadmap |
| Claude Managed Agents overview | https://platform.claude.com/docs/en/managed-agents/overview |
| Secure your Managed Agents deployment | https://platform.claude.com/docs/en/managed-agents/secure-deployment |
| Managed Agents tools | https://platform.claude.com/docs/en/managed-agents/tools |
| Start a session | https://platform.claude.com/docs/en/managed-agents/sessions |
| Session event stream | https://platform.claude.com/docs/en/managed-agents/events-and-streaming |
| GitHub package firewall in public preview | https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/ |
| Protecting endpoints with GitHub package firewall | https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall |
| Configure the sandboxed Bash tool | https://code.claude.com/docs/en/sandboxing |
| v2.1.305 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.305 |
| v2.1.304 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.304 |
| Configure auto mode | https://code.claude.com/docs/en/auto-mode-config |
| copilot-cli 1.0.101 | https://github.com/github/copilot-cli/releases/tag/v1.0.101 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |

## Daily ingest 2026-10-21 (gap-fill)

| Topic | URL |
| --- | --- |
| GitHub CLI: Opt in to expiring, auto-refreshing OAuth tokens | https://github.blog/changelog/2026-10-21-github-cli-opt-in-to-expiring-auto-refreshing-oauth-tokens/ |
| Authenticating with GitHub CLI | https://docs.github.com/en/github-cli/github-cli/authenticating-with-github-cli |
| gh auth login | https://cli.github.com/manual/gh_auth_login |
| gh config | https://cli.github.com/manual/gh_config |
| gh auth refresh | https://cli.github.com/manual/gh_auth_refresh |
| Compare model results (Preview) | https://code.visualstudio.com/docs/agents/run/compare-models |
| Visual Studio Code 1.143 | https://code.visualstudio.com/updates/v1_143 |
| Choose and use an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| AI language models in VS Code | https://code.visualstudio.com/docs/agent-customization/language-models |
| MAI-Code-1.1-Flash | https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/ |
| copilot-cli 1.0.102 | https://github.com/github/copilot-cli/releases/tag/v1.0.102 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Observability with OpenTelemetry | https://geminicli.com/docs/cli/telemetry/ |
| Gemini CLI settings | https://geminicli.com/docs/cli/settings/ |
| Gemini CLI v0.65.0 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0 |
| Trusted Folders | https://geminicli.com/docs/cli/trusted-folders/ |
| enforce read-only workspace settings in untrusted folders | https://github.com/google-gemini/gemini-cli/pull/29583 |

## Daily ingest 2026-10-22 (gap-fill)

| Topic | URL |
| --- | --- |
| Multiagent orchestration | https://platform.claude.com/docs/en/managed-agents/multiagent-orchestration |
| Workflow runs | https://platform.claude.com/docs/en/managed-agents/workflow-runs |
| Session threads | https://platform.claude.com/docs/en/managed-agents/session-threads |
| Claude Managed Agents overview | https://platform.claude.com/docs/en/managed-agents/overview |
| Global default for Copilot features generally available | https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/ |
| About default availability of Copilot features and models | https://docs.github.com/en/copilot/concepts/enterprise/default-availability |
| Industry comparisons in the Copilot impact dashboard | https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/ |
| Viewing the Copilot impact dashboard | https://docs.github.com/en/copilot/how-tos/administer-copilot/view-impact-dashboard |
| GitHub Copilot usage metrics | https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics |
| copilot-cli 1.0.103 | https://github.com/github/copilot-cli/releases/tag/v1.0.103 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| GitHub Copilot CLI command reference | https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-command-reference |
| Model Context Protocol (Cursor) | https://cursor.com/docs/mcp |
| Model and Integration Management | https://cursor.com/docs/enterprise/model-and-integration-management |
| Cursor web release notes | https://cursor.com/docs/release-notes/web |
| permissions.json reference | https://cursor.com/docs/reference/permissions |
| Code Review | https://code.claude.com/docs/en/code-review |
| Read and request reviews on a pull request | https://code.claude.com/docs/en/code-review-pull-requests |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |

## Daily ingest 2026-10-23 (gap-fill)

| Topic | URL |
| --- | --- |
| Custom skills, agents, and MCP servers in usage metrics API | https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api/ |
| Data available in Copilot usage metrics | https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics |
| REST API endpoints for Copilot usage metrics | https://docs.github.com/en/rest/copilot/copilot-usage-metrics |
| Enterprise installations for GitHub Apps generally available | https://github.blog/changelog/2026-10-23-enterprise-installations-for-github-apps-generally-available/ |
| Installing a GitHub App on your enterprise | https://docs.github.com/en/enterprise-cloud@latest/apps/using-github-apps/installing-a-github-app-on-your-enterprise |
| Codex 0.164.0 | https://github.com/openai/codex/releases/tag/rust-v0.164.0 |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Turn notifications into code with GitHub Copilot in Teams | https://github.blog/changelog/2026-10-23-turn-notifications-into-code-with-github-copilot-in-teams/ |
| Integrating GitHub with Teams | https://docs.github.com/en/integrations/how-tos/teams/integrate-github-with-teams |
| Integrating Copilot cloud agent with Teams | https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams |
| Find bugs with ultrareview | https://code.claude.com/docs/en/ultrareview |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| v2.1.309 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.309 |
| GitHub Copilot in Visual Studio — September update | https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2/ |

## Daily ingest 2026-10-24 (gap-fill)

| Topic | URL |
| --- | --- |
| Usage metrics API adds usage from tools like OpenCode | https://github.blog/changelog/2026-10-23-usage-metrics-api-adds-usage-from-tools-like-opencode/ |
| Data available in Copilot usage metrics | https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics |
| REST API endpoints for Copilot usage metrics | https://docs.github.com/en/rest/copilot/copilot-usage-metrics |
| Tools reference — Monitor | https://code.claude.com/docs/en/tools-reference |
| Week 15 · Monitor tool | https://code.claude.com/docs/en/whats-new/2026-w15 |
| Run prompts on a schedule | https://code.claude.com/docs/en/scheduled-tasks |
| Plugins reference — Monitors | https://code.claude.com/docs/en/plugins-reference |
| Add components to a plugin | https://code.claude.com/docs/en/plugins/components |
| v2.1.310 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.310 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Use Claude Code on the web | https://code.claude.com/docs/en/claude-code-on-the-web |
| copilot-cli 1.0.104-0 | https://github.com/github/copilot-cli/releases/tag/v1.0.104-0 |
| copilot-cli 1.0.104-2 | https://github.com/github/copilot-cli/releases/tag/v1.0.104-2 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| OpenTelemetry Export | https://cursor.com/docs/enterprise/opentelemetry-export |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |

## Daily ingest 2026-10-25 (gap-fill)

| Topic | URL |
| --- | --- |
| Code Tours | https://cursor.com/docs/origin/code-tours |
| Origin overview | https://cursor.com/docs/origin |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Set up and manage teams and Team Tasks | https://learn.chatgpt.com/docs/enterprise/teams |
| Creating and managing team tasks in ChatGPT | https://help.openai.com/en/articles/20001540-creating-and-managing-team-tasks-in-chatgpt |
| Scheduled tasks | https://learn.chatgpt.com/docs/automations |
| Scheduled tasks (Codex app) | https://developers.openai.com/codex/app/automations |
| Workspace connections | https://learn.chatgpt.com/docs/enterprise/shared-connections |
| What's new | https://learn.chatgpt.com/docs/whats-new |
| Remote Control | https://code.claude.com/docs/en/remote-control |
| Manage custom roles on Enterprise plans | https://support.claude.com/en/articles/13930452-manage-custom-roles-on-enterprise-plans |
| Use Claude Code in the cloud | https://code.claude.com/docs/en/claude-code-on-the-web |
| v2.1.310 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.310 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |
| Cloud Agents API | https://cursor.com/docs/cloud-agent/api/endpoints |
| Cloud Agents API overview | https://cursor.com/docs/cloud-agent/api/overview |
| Visual Studio Code 1.144 (Insiders) | https://code.visualstudio.com/updates/v1_144 |
| A2UI home | https://a2ui.org/ |
| AG-UI releases | https://github.com/ag-ui-protocol/ag-ui/releases |

## Daily ingest 2026-10-26 (gap-fill)

| Topic | URL |
| --- | --- |
| Loops | https://linear.app/docs/loops |
| Linear Agent | https://linear.app/docs/linear-agent |
| More ways to run and share Loops | https://linear.app/changelog/2026-10-22-slack-and-github-loops |
| GitHub (Linear) | https://linear.app/docs/github |
| GPT-6.1 Terra in GitHub Copilot | https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot/ |
| AI model comparison (Copilot) | https://docs.github.com/en/copilot/reference/ai-models/model-comparison |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Models (ChatGPT Work and Codex) | https://learn.chatgpt.com/docs/models |
| Upcoming deprecation of selected GitHub Copilot models in mid-November | https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november/ |
| Linear (Cursor docs) | https://cursor.com/docs/integrations/linear |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Team Pools | https://cursor.com/docs/cloud-agent/self-hosted/pool |
| Self-Hosted Machines | https://cursor.com/docs/cloud-agent/self-hosted |
| Secrets & Network | https://cursor.com/docs/cloud-agent/security-network |
| Canvases | https://cursor.com/docs/agent/tools/canvas |
| Cloud Environment Setup | https://cursor.com/docs/cloud-agent/setup |
| Cloud Agent capabilities | https://cursor.com/docs/cloud-agent/capabilities |
| Self-hosted environments | https://code.claude.com/docs/en/self-hosted-environments |
| Self-hosted environments reference | https://code.claude.com/docs/en/self-hosted-environments-reference |
| Deploy self-hosted environments | https://code.claude.com/docs/en/self-hosted-environments-deploy |
| v2.1.311 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.311 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |

## Daily ingest 2026-10-27 (gap-fill)

| Topic | URL |
| --- | --- |
| Agent SDK | https://cursor.com/docs/agent-sdk |
| Project layout | https://cursor.com/docs/agent-sdk/reference/project-layout |
| Deploy an Agent SDK project | https://cursor.com/docs/agent-sdk/deployment |
| Access | https://cursor.com/docs/agent-sdk/reference/access |
| Evals | https://cursor.com/docs/agent-sdk/evals |
| Agent SDK CLI | https://cursor.com/docs/agent-sdk/reference/cli |
| Agent config | https://cursor.com/docs/agent-sdk/reference/agent-config |
| What's New in Cursor | https://cursor.com/changelog |
| GitHub Copilot supports server-to-server authentication | https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication/ |
| Server-to-server authentication | https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/server-to-server-tokens |
| Authentication (Copilot SDK) | https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate |
| Manage GitHub Apps that use your organization's Copilot | https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-app-copilot-access |
| GitHub Copilot assisted permissions generally available | https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available/ |
| Allowing safe commands to run without manual approval | https://docs.github.com/en/copilot/concepts/customizations/allowing-safe-commands |
| Allowing and denying tool use | https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/allowing-tools |
| Working with agent sessions in the GitHub Copilot app | https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| copilot-cli 1.0.104 | https://github.com/github/copilot-cli/releases/tag/v1.0.104 |
| Claude apps gateway configuration | https://code.claude.com/docs/en/claude-apps-gateway-config |
| v2.1.312 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.312 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| SEP-3398: Release Cycle Updates | https://modelcontextprotocol.io/seps/3398-release-cycle-updates |
| SEP-3398 pull request | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3398 |
| MCP Spec TPM | https://plan.modelcontextprotocol.io/releases/2 |
| Memories (Codex) | https://developers.openai.com/codex/customization/memories |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Codex 0.165.0 | https://github.com/openai/codex/releases/tag/rust-v0.165.0 |

## Daily ingest 2026-10-28 (gap-fill)

| Topic | URL |
| --- | --- |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |
| Sample Configuration | https://learn.chatgpt.com/docs/config-file/config-sample.md |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Codex 0.165.0 | https://github.com/openai/codex/releases/tag/rust-v0.165.0 |
| Add a built-in Google Cloud Vertex AI provider (#56265) | https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1 |
| Allow configuring GCP project and location (#56560) | https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97 |
| Cursor TypeScript SDK | https://cursor.com/docs/sdk/typescript |
| SDK Changelog | https://cursor.com/docs/sdk/changelog |
| About GitHub Copilot Fusion | https://docs.github.com/en/copilot/concepts/models/copilot-fusion |
| Route and orchestrate models with GitHub Copilot Fusion | https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/ |
| GitHub Copilot Fusion now supports selection of local models | https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models/ |
| GitHub Copilot in JetBrains Universe releases | https://github.blog/changelog/2026-10-28-github-copilot-in-jetbrains-universe-releases/ |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| SEP-3392: Extension Lifecycle | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3392 |
| SEP-3392 vote | https://voting.modelcontextprotocol.io/p/bgza4vb9ae |
| MCP Spec TPM | https://plan.modelcontextprotocol.io/seps |
| MCP Extensions overview | https://modelcontextprotocol.io/extensions/overview |
| Latest stable release v0.66.0 | https://geminicli.com/docs/changelogs/latest/ |
| MCP servers with Gemini CLI (GitHub docs) | https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md |
| gemini-cli #29844 — allowPrivateNetwork | https://github.com/google-gemini/gemini-cli/pull/29844 |

## Daily ingest 2026-10-30 (gap-fill)

| Topic | URL |
| --- | --- |
| Copilot connectors | https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors |
| Supported Copilot connectors | https://docs.github.com/en/copilot/reference/supported-connectors |
| Connect your tools to Copilot without all the setup | https://github.blog/changelog/2026-10-28-connect-your-tools-to-copilot-without-all-the-setup/ |
| Customizing the GitHub Copilot app | https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app |
| Viewing and fixing security alerts in the GitHub Copilot app | https://docs.github.com/en/copilot/how-tos/github-copilot-app/view-and-fix-security-alerts |
| Security extension for the GitHub Copilot app | https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app/ |
| Copilot automations | https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations |
| Creating automations with Copilot cloud agent | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations |
| Build shared workflows for your team with Copilot Automations | https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations/ |
| Create and manage Copilot Automations in Visual Studio Code | https://github.blog/changelog/2026-10-28-create-and-manage-copilot-automations-in-visual-studio-code/ |
| Create and manage agent automations | https://code.visualstudio.com/docs/agents/run/automations |
| Visual Studio Code 1.144 | https://code.visualstudio.com/updates/v1_144 |
| Run agent sessions in the cloud | https://code.visualstudio.com/docs/agents/run/cloud-sandbox-sessions |
| Choose and use an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| GitHub Copilot in VS Code, Universe releases | https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/ |
| Getting pull requests ready to merge with Agent Merge | https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/watch-and-fix-pull-requests |
| REST API endpoints for Agent Merge | https://docs.github.com/en/rest/pulls/agent-merge |
| Agent Merge watches and fixes pull requests in the cloud | https://github.blog/changelog/2026-10-28-agent-merge-watches-and-fixes-pull-requests-in-the-cloud/ |
| GitHub Agentic Workflows generally available | https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/ |
| About GitHub Agentic Workflows | https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows |
| Creating GitHub Agentic Workflows | https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/creating-github-agentic-workflows |
| Your first agentic workflow | https://docs.github.com/en/copilot/how-tos/github-agentic-workflows/quickstart |
| Develop agentic workflows in GitHub Actions | https://docs.github.com/en/actions/tutorials/develop-agentic-workflows-in-github-actions |
| Configure permissions | https://code.claude.com/docs/en/permissions |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| v2.1.314 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.314 |
| CHANGELOG.md | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| Claude apps gateway configuration | https://code.claude.com/docs/en/claude-apps-gateway-config |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |

## Daily ingest 2026-10-31 (gap-fill)

| Topic | URL |
| --- | --- |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Model configuration | https://code.claude.com/docs/en/model-config |
| Create custom subagents | https://code.claude.com/docs/en/sub-agents |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| CHANGELOG.md | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| Claude Code CHANGELOG (raw) | https://raw.githubusercontent.com/anthropics/claude-code/blob/main/CHANGELOG.md |
| Claude apps gateway spend limits | https://code.claude.com/docs/en/claude-apps-gateway-spend-limits |
| Claude apps gateway | https://code.claude.com/docs/en/claude-apps-gateway |
| Claude apps gateway configuration | https://code.claude.com/docs/en/claude-apps-gateway-config |
| Use Claude Code on the web | https://code.claude.com/docs/en/claude-code-on-the-web |
| Codex 0.166.0 | https://github.com/openai/codex/releases/tag/rust-v0.166.0 |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Command line options – Codex CLI | https://developers.openai.com/codex/cli/reference |
| Slash commands in Codex CLI | https://developers.openai.com/codex/cli/slash-commands |
| Configuration Reference (Codex) | https://developers.openai.com/codex/config-reference |



## Daily ingest 2026-11-01 (gap-fill)

| Topic | URL |
| --- | --- |
| About GitHub Copilot Dreaming | https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming |
| Managing Copilot Memory for an enterprise, organization, or repository | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator |
| About GitHub Copilot Memory | https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory |
| Managing Copilot Memory for your personal account | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself |
| GitHub intelligence puts your code, context, and history to work | https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work/ |
| GitLab Duo Agent Platform | https://docs.gitlab.com/user/duo_agent_platform/ |
| Flows | https://docs.gitlab.com/user/duo_agent_platform/flows/ |
| GitLab Duo CLI (duo) | https://docs.gitlab.com/user/gitlab_duo_cli/ |
| GitLab for Slack app | https://docs.gitlab.com/user/project/integrations/gitlab_slack_application/ |
| GitLab's agent orchestration for software development | https://about.gitlab.com/blog/gitlab-agent-orchestration/ |
| Filesystems Charter | https://modelcontextprotocol.io/community/working-groups/filesystems |
| experimental-ext-filesystems | https://github.com/modelcontextprotocol/experimental-ext-filesystems |
| Filesystem WG events | https://meet.modelcontextprotocol.io/2026/11/filesystem-wg-0frl2w00v56a |
| Using LSP servers with GitHub Copilot CLI | https://docs.github.com/en/copilot/concepts/customizations/lsp-servers |
| About local sandboxing for GitHub Copilot | https://docs.github.com/en/copilot/concepts/about-cloud-and-local-sandboxes |
| Indexing repositories for GitHub Copilot | https://docs.github.com/en/copilot/concepts/prompting-and-context/repository-indexing |
| Using GitHub Code Search | https://docs.github.com/en/search-github/github-code-search/using-github-code-search |
| GitHub Copilot on GitHub.com and GitHub Mobile | https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-on-github |
| About cloud sandboxes for GitHub Copilot | https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes |
| Billing for cloud and local sandboxes | https://docs.github.com/en/billing/concepts/product-billing/cloud-and-local-sandboxes |
| Work from anywhere with a new, connected Copilot cloud experience | https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience/ |
| Managing cloud sandboxes for your organization or enterprise | https://docs.github.com/en/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization |
| About GitHub Copilot cloud agent | https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent |
| Visual Studio Code 1.145 (Insiders) | https://code.visualstudio.com/updates/v1_145 |
| Visual Studio Code 1.144 | https://code.visualstudio.com/updates/v1_144 |
| MCP Tasks overview | https://modelcontextprotocol.io/extensions/tasks/overview |
| SEP-2663: Tasks Extension | https://modelcontextprotocol.io/seps/2663-tasks-extension |
| SEP-3392: Extension Lifecycle | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3392 |

## Daily ingest 2026-11-02 (gap-fill)

| Topic | URL |
| --- | --- |
| GitHub Copilot app | https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app |
| Getting started with the GitHub Copilot app | https://docs.github.com/en/copilot/how-tos/github-copilot-app/getting-started |
| GitHub Copilot app, Universe releases | https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases/ |
| Application card: GitHub Copilot Agents | https://docs.github.com/en/copilot/responsible-use/agents |
| Working with projects in the GitHub Copilot app | https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects |
| pull_request_target blocked by default December 2 | https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2/ |
| About Actions policies | https://docs.github.com/en/actions/concepts/about-actions-policies |
| Governing execution of GitHub Actions workflows | https://docs.github.com/en/actions/how-tos/administer/control-workflow-execution |
| Securely using pull_request_target | https://docs.github.com/en/actions/reference/security/securely-using-pull_request_target |
| REST API endpoints for GitHub Actions policies | https://docs.github.com/en/rest/actions/policies |
| Agent Host architecture | https://code.visualstudio.com/docs/agents/concepts/agent-host |
| Run and manage remote agent sessions | https://code.visualstudio.com/docs/agents/run/remote-agent-sessions |
| GitHub Copilot in VS Code, Universe releases | https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases/ |
| VS Code Wrapped: GitHub Universe 2026 | https://code.visualstudio.com/blogs/2026/10/28/vscode-wrapped/ |
| Creating a custom environment for agents | https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-a-custom-environment |
| What is the Agent Host Protocol? | https://microsoft.github.io/agent-host-protocol/guide/what-is-ahp |
| AHP releases (1.0.0) | https://github.com/microsoft/agent-host-protocol/releases |
| Agent Skills (Cursor) | https://cursor.com/docs/skills |
| Skills help | https://cursor.com/help/customization/skills |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |

## Daily ingest 2026-11-03 (gap-fill)

| Topic | URL |
| --- | --- |
| GitHub Copilot is now available in JetBrains Air | https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air/ |
| Copilot CLI ACP server | https://docs.github.com/en/copilot/reference/copilot-cli-reference/acp-server |
| GitHub Copilot in IDEs | https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-in-ides |
| ACP protocol overview | https://agentclientprotocol.com/protocol/overview |
| Message threads | https://platform.claude.com/docs/en/build-with-claude/message-threads |
| Make long-running agents faster with message threads | https://claude.com/resources/articles/message-threads |
| Prompt caching (Claude) | https://platform.claude.com/docs/en/build-with-claude/prompt-caching |
| SEP-3498: Separating Data Model from Transport Representation | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3498 |
| SEP-3498 vote / TPM | https://voting.modelcontextprotocol.io/p/seps/3498 |
| MCP Spec TPM | https://plan.modelcontextprotocol.io/seps |
| Transports WG #58 | https://github.com/modelcontextprotocol/transports-wg/pull/58 |
| Agent SDK hooks | https://code.claude.com/docs/en/agent-sdk/hooks |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| v2.1.317 | https://github.com/anthropics/claude-code/releases/tag/v2.1.317 |
| Cursor IDE release notes | https://cursor.com/docs/release-notes/ide |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |
| Using GitHub Copilot in JetBrains IDEs | https://docs.github.com/en/copilot/concepts/agents/copilot-in-jetbrains |

## Daily ingest 2026-11-04 (gap-fill)

| Topic | URL |
| --- | --- |
| GitHub Copilot is now available in Xcode’s coding assistant | https://github.blog/changelog/2026-11-04-github-copilot-is-now-available-in-xcodes-coding-assistant/ |
| Setting up coding intelligence | https://developer.apple.com/documentation/xcode/setting-up-coding-intelligence |
| Xcode 27.3 Beta Release Notes | https://developer.apple.com/documentation/xcode-release-notes/xcode-27_3-release-notes |
| Copilot feature matrix | https://docs.github.com/en/copilot/reference/copilot-feature-matrix |
| BYOK and enterprise custom models in the Copilot usage API | https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api/ |
| Bring your own key for GitHub Copilot | https://docs.github.com/en/copilot/concepts/models/bring-your-own-key |
| Data available in Copilot usage metrics | https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics |
| REST API endpoints for Copilot usage metrics | https://docs.github.com/en/rest/copilot/copilot-usage-metrics |
| Visual Studio Code 1.145 | https://code.visualstudio.com/updates/v1_145 |
| Manage and troubleshoot MCP servers | https://code.visualstudio.com/docs/agents/run/manage-mcp-servers |
| MCP configuration reference | https://code.visualstudio.com/docs/agents/reference/mcp-configuration |
| Create and manage agent automations | https://code.visualstudio.com/docs/agents/run/automations |
| v2.1.318 | https://github.com/anthropics/claude-code/releases/tag/v2.1.318 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Claude apps gateway configuration | https://code.claude.com/docs/en/claude-apps-gateway-config |
| Control MCP server access for your organization | https://code.claude.com/docs/en/managed-mcp |

## Daily ingest 2026-11-05 (gap-fill)

| Topic | URL |
| --- | --- |
| Apps (Cloud Agents) | https://cursor.com/docs/cloud-agent/apps |
| Build Live Apps in Cursor (changelog) | https://cursor.com/changelog |
| Cloud Agent security | https://cursor.com/docs/cloud-agent/security |
| Agent Package Manager | https://microsoft.github.io/apm/ |
| Targets matrix | https://microsoft.github.io/apm/reference/targets-matrix/ |
| Primitives and targets | https://microsoft.github.io/apm/concepts/primitives-and-targets/ |
| Manage dependencies | https://microsoft.github.io/apm/consumer/manage-dependencies/ |
| Dependabot version updates support APM | https://github.blog/changelog/2026-11-03-dependabot-version-updates-support-agent-package-manager/ |
| Dependabot supported ecosystems | https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories |
| Dependabot options reference | https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference |
| Gemini CLI v0.67.0 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0 |
| feat: models command and --list-models | https://github.com/google-gemini/gemini-cli/pull/29880 |
| Gemini CLI cheatsheet | https://geminicli.com/docs/cli/cli-reference/ |
| Gemini CLI hooks | https://geminicli.com/docs/hooks/ |
| Hooks reference | https://geminicli.com/docs/hooks/reference/ |
| Agent Skills – Codex | https://developers.openai.com/codex/skills |
| Origin Apps | https://cursor.com/docs/origin/apps |

## Daily ingest 2026-11-06 (gap-fill)

| Topic | URL |
| --- | --- |
| Voice chat | https://cursor.com/docs/agent/voice-chat |
| Voice Chat with Agents (changelog) | https://cursor.com/changelog/voice-chat |
| Grok Bot inference hooks | https://cursor.com/docs/grok-bot/inference-hooks |
| Hermes Agent v0.23.0 | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.0 |
| Features overview | https://hermes-agent.nousresearch.com/docs/user-guide/features/overview |
| MCP | https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp |
| CLI interface | https://hermes-agent.nousresearch.com/docs/user-guide/cli |
| Usage metrics API adds code review details and addressed rate | https://github.blog/changelog/2026-11-05-usage-metrics-api-adds-code-review-details-and-addressed-rate/ |
| Copilot impact dashboard adds chat and VS Code agent usage | https://github.blog/changelog/2026-11-06-copilot-impact-dashboard-adds-chat-and-vs-code-agent-usage/ |
| Data available in Copilot usage metrics | https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics |
| REST API endpoints for Copilot usage metrics | https://docs.github.com/en/rest/copilot/copilot-usage-metrics |
| v2.1.319 | https://github.com/anthropics/claude-code/releases/tag/v2.1.319 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Configure permissions | https://code.claude.com/docs/en/permissions |
| Claude Code settings | https://code.claude.com/docs/en/settings |
| Codex 0.167.0 | https://github.com/openai/codex/releases/tag/rust-v0.167.0 |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |

## Daily ingest 2026-11-07 (gap-fill)

| Topic | URL |
| --- | --- |
| Usage metrics API flags telemetry and version gaps | https://github.blog/changelog/2026-11-05-usage-metrics-api-flags-telemetry-and-version-gaps/ |
| Data available in Copilot usage metrics | https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics |
| GitHub Copilot usage metrics (concepts) | https://docs.github.com/en/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics |
| REST API endpoints for Copilot usage metrics | https://docs.github.com/en/rest/copilot/copilot-usage-metrics |
| Copilot code review: API management and review overview updates | https://github.blog/changelog/2026-11-06-copilot-code-review-api-management-and-review-overview-updates/ |
| Configuring Copilot code review with the API | https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review |
| GraphQL API reference for Copilot | https://docs.github.com/en/graphql/reference/copilot |
| @GitHub in Slack and Teams is generally available | https://github.blog/changelog/2026-11-06-github-copilot-in-slack-and-teams-is-generally-available/ |
| Integrating Copilot cloud agent with Teams | https://docs.github.com/en/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams |
| Integrating Copilot cloud agent with Slack | https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-slack |
| GitHub Copilot weekly releases — November 2 | https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2/ |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Visual Studio Code 1.146 (Insiders) | https://code.visualstudio.com/updates/v1_146 |
| Compare model results (Preview) | https://code.visualstudio.com/docs/agents/run/compare-models |


## Daily ingest 2026-11-08 (gap-fill)

| Topic | URL |
| --- | --- |
| Spaces | https://ampcode.com/docs/markdown/spaces |
| Spaces (launch) | https://ampcode.com/news/spaces |
| Agent to Agent | https://ampcode.com/docs/orbs/agent-to-agent |
| Space (thread voice/video) | https://ampcode.com/docs/collaborate/space |
| GitLab | https://ampcode.com/docs/gitlab |
| GitLab Integration | https://ampcode.com/news/gitlab |
| GitHub & Git | https://ampcode.com/docs/github |
| Customizing Orbs | https://ampcode.com/docs/orbs/customizing |
| Projects | https://ampcode.com/docs/projects |
| Unified Claude in Claude Desktop on 3P | https://claude.com/docs/third-party/claude-desktop/unified-claude |
| Configuration reference | https://claude.com/docs/third-party/claude-desktop/configuration |
| Configuration changelog | https://claude.com/docs/third-party/claude-desktop/configuration-changelog |
| Cowork changelog | https://claude.com/docs/cowork/changelog |
| v2.1.319 | https://github.com/anthropics/claude-code/releases/tag/v2.1.319 |
| Convert a Cursor Automation | https://cursor.com/docs/agent-sdk/guides/convert-automation |
| Agent SDK | https://cursor.com/docs/agent-sdk |
| Droid CLI reference | https://docs.factory.com/droid-cli/cli-reference |
| Full Changelog | https://docs.factory.com/changelog/release-notes |
| Custom Automations | https://docs.factory.com/automations/custom |
| Workstream Automations | https://docs.factory.com/workstreams/automations |
| Devin Desktop changelog | https://docs.devin.ai/desktop/changelog |
| Agent Command Center | https://docs.devin.ai/desktop/agent-command-center |
| MCP Configuration | https://docs.devin.ai/cli/extensibility/mcp/configuration |
| v2026.11.1 | https://docs.openclaw.ai/releases/2026.11.1 |
| openclaw 2026.11.1 | https://github.com/openclaw/openclaw/releases/tag/v2026.11.1 |
| Use Agent Skills in VS Code | https://code.visualstudio.com/docs/agent-customization/agent-skills |
| Visual Studio Code 1.146 (Insiders) | https://code.visualstudio.com/updates/v1_146 |

## Daily ingest 2026-11-09 (gap-fill)

| Topic | URL |
| --- | --- |
| Cloud agents | https://cursor.com/docs/agent-sdk/guides/cloud-agents |
| Self-improvement | https://cursor.com/docs/agent-sdk/guides/improve |
| Peer agents | https://cursor.com/docs/agent-sdk/guides/agent-to-agent |
| MCP connections | https://cursor.com/docs/agent-sdk/reference/connections |
| Extensions | https://cursor.com/docs/agent-sdk/reference/extensions |
| Agent SDK | https://cursor.com/docs/agent-sdk |
| Convert a Cursor Automation | https://cursor.com/docs/agent-sdk/guides/convert-automation |
| Portals on Your Runner (news) | https://ampcode.com/news/runner-portals |
| Runners | https://ampcode.com/docs/cli/runners |
| Portals & Desktop | https://ampcode.com/docs/orbs/portals |
| Use Your Mac as a Runner | https://ampcode.com/docs/apps/mac/runner |
| Threads | https://ampcode.com/docs/threads |
| v2.1.321 | https://github.com/anthropics/claude-code/releases/tag/v2.1.321 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Remote Control | https://code.claude.com/docs/en/remote-control |
| claude-agent-sdk-typescript v0.3.321 | https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.321 |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| copilot-cli 1.0.108 | https://github.com/github/copilot-cli/releases/tag/v1.0.108 |
| Claude Fable 5.2 in GitHub Copilot | https://github.blog/changelog/2026-11-09-claude-fable-5-5-in-github-copilot/ |
| microsoft/tgrep | https://github.com/microsoft/tgrep |

## Daily ingest 2026-11-10 (gap-fill)

| Topic | URL |
| --- | --- |
| Hillclimbing | https://cursor.com/docs/agent-sdk/hillclimbing |
| Evals | https://cursor.com/docs/agent-sdk/evals |
| Evals reference | https://cursor.com/docs/agent-sdk/reference/evals |
| Build with a coding agent | https://cursor.com/docs/agent-sdk/building-with-agents |
| Self-improvement | https://cursor.com/docs/agent-sdk/guides/improve |
| Choose an agent harness | https://kiro.dev/docs/cli/agent-harness/ |
| Upgrade from CLI 2.x | https://kiro.dev/docs/cli/v3/ |
| V3 by Default, Classic and Desktop App Retired | https://kiro.dev/changelog/cli/3-0/ |
| Compaction Hooks and Session Credits | https://kiro.dev/changelog/cli/3-1/ |
| CLI commands | https://kiro.dev/docs/reference/cli-commands/ |
| Client-provided system prompts are stabilized | https://agentclientprotocol.com/announcements/client-system-prompt-stabilized |
| Client-Provided System Prompt RFD | https://agentclientprotocol.com/rfds/client-system-prompt |
| ACP v2 session setup — system prompt | https://agentclientprotocol.com/protocol/v2/session-setup |
| Rust Crate v1.16.0 | https://github.com/agentclientprotocol/agent-client-protocol/releases/tag/v1.16.0 |
| C++ language server now auto-configures MSBuild builds | https://github.blog/changelog/2026-11-10-c-language-server-now-auto-configures-msbuild-builds/ |
| Using LSP servers with GitHub Copilot CLI | https://docs.github.com/en/copilot/concepts/customizations/lsp-servers |
| Gemini 4 Carbon in GitHub Copilot | https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/ |
| copilot-cli changelog | https://github.com/github/copilot-cli/blob/main/changelog.md |
| Gemini CLI v0.68.0 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0 |
| Extension reference | https://geminicli.com/docs/extensions/reference/ |
| validate.ts (gemini-cli) | https://github.com/google-gemini/gemini-cli/blob/HEAD/packages/cli/src/commands/extensions/validate.ts |
| Cowork changelog | https://claude.com/docs/cowork/changelog |
| Unified Claude in Claude Desktop on 3P | https://claude.com/docs/third-party/claude-desktop/unified-claude |
| Configuration changelog | https://claude.com/docs/third-party/claude-desktop/configuration-changelog |
| Origin release notes | https://cursor.com/docs/release-notes/origin |
| Origin API changelog | https://cursor.com/docs/api/origin/changelog |

## Daily ingest 2026-11-11 (gap-fill)

| Topic | URL |
| --- | --- |
| Visual Studio Code 1.146 | https://code.visualstudio.com/updates/v1_146 |
| Organize and triage agent sessions | https://code.visualstudio.com/docs/agents/run/sessions/organize-sessions |
| Move from the Local to the Copilot harness | https://code.visualstudio.com/docs/agents/run/move-to-copilot |
| Choose an agent harness | https://code.visualstudio.com/docs/agents/run/agent-harnesses |
| Use Agent Skills in VS Code | https://code.visualstudio.com/docs/agent-customization/agent-skills |
| Compare model results | https://code.visualstudio.com/docs/agents/run/compare-models |
| Sandbox Copilot Agent Host sessions | https://code.visualstudio.com/docs/agents/run/agent-sandboxing |
| Manage approvals and permissions | https://code.visualstudio.com/docs/agents/run/approvals |
| A More Predictable Release Cycle for MCP | https://blog.modelcontextprotocol.io/posts/mcp-release-cycle/ |
| GitHub App support for Enterprise Copilot seat management | https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management/ |
| REST API endpoints for Copilot user management | https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-user-management |
| Permissions required for GitHub Apps | https://docs.github.com/en/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps |
| Full-Screen Diagram Viewer and Sign-In to More MCP Servers | https://kiro.dev/changelog/cli/3-2/ |
| MCP configuration (Kiro) | https://kiro.dev/docs/mcp/configuration/ |

## Daily ingest 2026-11-12 (gap-fill)

| Topic | URL |
| --- | --- |
| Boxes | https://ampcode.com/docs/boxes |
| Boxes (news) | https://ampcode.com/news/boxes |
| Bye Bye, Dial | https://ampcode.com/news/bye-bye-dial |
| Portals & Desktop | https://ampcode.com/docs/orbs/portals |
| GitHub agents | https://cursor.com/docs/agent-sdk/guides/github |
| Slack Agents | https://cursor.com/docs/agent-sdk/guides/slack |
| Connect a private MCP server with OAuth | https://cursor.com/docs/agent-sdk/guides/mcp-oauth |
| OpenTelemetry | https://cursor.com/docs/agent-sdk/guides/opentelemetry |
| OpenTelemetry Export | https://cursor.com/docs/enterprise/opentelemetry-export |
| Channels | https://cursor.com/docs/agent-sdk/reference/channels |
| Schedules and reminders | https://cursor.com/docs/agent-sdk/reference/schedules |
| Agent SDK | https://cursor.com/docs/agent-sdk |
| Exploring File Uploads and Downloads in MCP | https://blog.modelcontextprotocol.io/posts/exploring-file-uploads-and-downloads-in-mcp/ |
| experimental-ext-file-uploads | https://github.com/modelcontextprotocol/experimental-ext-file-uploads |
| Output Details and Sign-In Fixes | https://kiro.dev/changelog/cli/3-2-1/ |
| In-session settings | https://kiro.dev/docs/cli/chat/settings/ |
| Terminal UI | https://kiro.dev/docs/cli/terminal-ui/ |
| v2.1.323 release notes | https://github.com/anthropics/claude-code/releases/tag/v2.1.323 |
| CHANGELOG.md (v2.1.323) | https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md |

## Daily ingest 2026-11-13 (gap-fill)

| Topic | URL |
| --- | --- |
| Run tool calls from code with Code Mode | https://code.claude.com/docs/en/code-mode |
| v2.1.323 | https://github.com/anthropics/claude-code/releases/tag/v2.1.323 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Evals | https://cursor.com/docs/agent-sdk/evals |
| Evals reference | https://cursor.com/docs/agent-sdk/reference/evals |
| Hillclimbing | https://cursor.com/docs/agent-sdk/hillclimbing |
| Agent SDK CLI | https://cursor.com/docs/agent-sdk/reference/cli |
| Migrate an early-alpha project to architecture v2 | https://cursor.com/docs/agent-sdk/guides/migrate |
| Deploy an Agent SDK project | https://cursor.com/docs/agent-sdk/deployment |
| Fix common agent problems | https://cursor.com/docs/agent-sdk/troubleshooting |
| Agent SDK | https://cursor.com/docs/agent-sdk |
| GitHub Enterprise Server support in the GitHub Copilot app | https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app/ |
| Signing in to GitHub Enterprise Server in the GitHub Copilot app | https://docs.github.com/en/enterprise-server@3.22/copilot/copilot-on-ghes/sign-in-on-copilot-app |
| Upcoming deprecation of selected GitHub Copilot models in December | https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december/ |
| Gemini 4 Hydrogen in GitHub Copilot | https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/ |
| Codex 0.169.0 | https://github.com/openai/codex/releases/tag/rust-v0.169.0 |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |
| Plugins | https://developers.openai.com/codex/plugins |
| Package your plugin | https://developers.openai.com/plugins/build/plugins |

## Daily ingest 2026-11-14 (gap-fill)

| Topic | URL |
| --- | --- |
| Agent Development Kit | https://adk.dev/ |
| Python Quickstart | https://adk.dev/get-started/python/ |
| Installation | https://adk.dev/get-started/installation/ |
| AI Models for ADK agents | https://adk.dev/agents/models/ |
| Google Gemini models for ADK agents | https://adk.dev/agents/models/google-gemini/ |
| ADK 2.0 | https://github.com/google/adk-docs/blob/main/docs/2.0/index.md |
| Agent Framework documentation | https://learn.microsoft.com/en-us/agent-framework/ |
| Microsoft Agent Framework Overview | https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview |
| Microsoft Agent Framework Version 1.0 | https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-version-1-0/ |
| python-1.26.0 | https://github.com/microsoft/agent-framework/releases/tag/python-1.26.0 |
| dotnet-1.28.0 | https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.28.0 |
| What is Microsoft Foundry Agent Service? | https://learn.microsoft.com/en-us/azure/foundry/agents/overview |
| Set up your environment for Foundry Agent Service | https://learn.microsoft.com/en-us/azure/foundry/agents/environment-setup |
| Hosted agents in Foundry Agent Service | https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/hosted-agents |
| Prompt agents in Foundry Agent Service | https://learn.microsoft.com/en-us/azure/foundry/agents/concepts/prompt-agents |
| AI Scan for a repository's backlog | https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories |
| AI Scan for repositories in public preview | https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview/ |
| Manage AI Scan for repositories using the REST API | https://github.blog/changelog/2026-11-13-manage-ai-scan-for-repositories-using-the-rest-api/ |
| REST API endpoints for code scanning | https://docs.github.com/en/rest/code-scanning/code-scanning?apiVersion=2026-03-10 |
| Use Claude Code in VS Code | https://code.claude.com/docs/en/vs-code |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| v2.1.325 | https://github.com/anthropics/claude-code/releases/tag/v2.1.325 |
| copilot-cli 1.0.110 | https://github.com/github/copilot-cli/releases/tag/v1.0.110 |
| copilot-cli 1.0.111 | https://github.com/github/copilot-cli/releases/tag/v1.0.111 |
| copilot-cli 1.0.112 | https://github.com/github/copilot-cli/releases/tag/v1.0.112 |
| Copilot SDK is now generally available | https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/ |
| Build your first Copilot-powered app | https://docs.github.com/en/copilot/get-started/sdk-quickstart |
| Authentication (Copilot SDK) | https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/authenticate |
| Using MCP servers with the GitHub Copilot SDK | https://docs.github.com/en/copilot/how-tos/copilot-sdk/features/mcp |
| Server-to-server authentication | https://docs.github.com/en/copilot/how-tos/copilot-sdk/auth/server-to-server-tokens |
| github/copilot-sdk | https://github.com/github/copilot-sdk |
| Meet the A2A CLI | https://a2a-protocol.org/latest/blog/2026/10/01/introducing-a2a-cli/ |
| a2aproject/a2a-cli README | https://github.com/a2aproject/a2a-cli |
| a2a-cli SKILL.md | https://raw.githubusercontent.com/a2aproject/a2a-cli/main/skills/a2a-cli/SKILL.md |
| A2A Protocol | https://a2a-protocol.org/latest/ |
| A2A Protocol Specification | https://a2a-protocol.org/latest/specification/ |
| A2A protocol roadmap | https://a2a-protocol.org/latest/roadmap/ |
| A New Chapter for A2A: Joining the Agentic AI Foundation | https://a2a-protocol.org/latest/blog/2026/08/27/a-new-chapter-for-a2a-joining-the-agentic-ai-foundation/ |
| SEP-3415: Events Extension (PR) | https://github.com/modelcontextprotocol/modelcontextprotocol/pull/3415 |
| MCP Spec TPM — SEPs | https://plan.modelcontextprotocol.io/seps |
| Gemini CLI v0.68.0 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.68.0 |
| Gemini CLI changelogs | https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/index.md |
| Configure the sandboxed Bash tool | https://code.claude.com/docs/en/sandboxing |
| All settings — sandbox.autoAllowBashIfSandboxed | https://code.claude.com/docs/en/settings-reference |

## Daily ingest 2026-11-14 (directory gap-fill)

| Topic | URL |
| --- | --- |
| Gemini Code Assist consumer accounts | https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals |
| Agent mode overview | https://docs.cloud.google.com/gemini/docs/codeassist/agent-mode |
| Troubleshoot access to Gemini Code Assist features | https://docs.cloud.google.com/gemini/docs/codeassist/troubleshoot |
| Sunset of the consumer Gemini Code Assist GitHub app | https://developers.google.com/gemini-code-assist/docs/deprecations/consumer-code-review |
| Code with Gemini Code Assist Standard and Enterprise | https://docs.cloud.google.com/gemini/docs/codeassist/write-code-gemini |
| AI Assistant in JetBrains IDEs | https://www.jetbrains.com/help/idea/ai-assistant-in-jetbrains-ides.html |
| Agent Client Protocol (ACP) — AI Assistant | https://www.jetbrains.com/help/ai-assistant/acp.html |
| What's the difference between Junie and AI Assistant? | https://support.jetbrains.com/hc/en-us/articles/40036414168722-What-s-the-difference-between-Junie-and-AI-Assistant |
| Junie by JetBrains | https://www.jetbrains.com/help/ai-assistant/junie-agent.html |
| CodeRabbit platform overview | https://docs.coderabbit.ai/platforms/overview |
| CodeRabbit plans and pricing | https://docs.coderabbit.ai/management/plans |
| CodeRabbit configuration V2 | https://docs.coderabbit.ai/reference/configuration |
| CodeRabbit automatic approvals | https://docs.coderabbit.ai/pr-reviews/automatic-approvals |
| CodeRabbit approval policies | https://docs.coderabbit.ai/pr-reviews/approval-policies |
| CodeRabbit pull request reviews | https://docs.coderabbit.ai/overview/pull-request-review |
| The MCP Registry | https://modelcontextprotocol.io/registry/about |
| How to authenticate when publishing | https://modelcontextprotocol.io/registry/authentication |
| Quickstart: publish a server | https://modelcontextprotocol.io/registry/quickstart |
| Publishing remote servers | https://modelcontextprotocol.io/registry/remote-servers |
| Automate publishing with GitHub Actions | https://modelcontextprotocol.io/registry/github-actions |
| Official MCP Registry API | https://github.com/modelcontextprotocol/registry/blob/main/docs/reference/api/official-registry-api.md |
| Codex CLI 0.169.0 | https://github.com/openai/codex/releases/tag/rust-v0.169.0 |
| ChatGPT & Codex changelog | https://learn.chatgpt.com/docs/changelog |

## Daily ingest 2026-11-14 (Augment, Vibe, Greptile, llms.txt)

| Topic | URL |
| --- | --- |
| Introducing Auggie CLI | https://docs.augmentcode.com/cli/overview |
| Install Auggie CLI | https://docs.augmentcode.com/cli/setup-auggie/install-auggie-cli |
| Login and authentication | https://docs.augmentcode.com/cli/setup-auggie/authentication |
| CLI flags and options | https://docs.augmentcode.com/cli/reference |
| Rules and guidelines | https://docs.augmentcode.com/cli/rules |
| Tool permissions | https://docs.augmentcode.com/cli/permissions |
| Token-based pricing | https://docs.augmentcode.com/models/token-based-pricing |
| What is Augment Cosmos? | https://docs.augmentcode.com/cosmos/getting-started |
| Cosmos environments | https://docs.augmentcode.com/cosmos/environments/overview |
| Cloud environments | https://docs.augmentcode.com/cosmos/environments/cloud |
| Introduction | https://docs.augmentcode.com/introduction |
| Choose CLI, VS Code, or web sessions | https://docs.mistral.ai/vibe/code/choose-cli-vscode-web-sessions |
| Install and setup | https://docs.mistral.ai/vibe/code/cli/install-setup |
| API keys and profiles | https://docs.mistral.ai/vibe/code/cli/api-keys-profiles |
| Safety, approvals, and permissions | https://docs.mistral.ai/vibe/code/safety-approvals-permissions |
| Skills | https://docs.mistral.ai/vibe/code/cli/skills |
| MCP servers | https://docs.mistral.ai/vibe/code/cli/mcp-servers |
| Code providers | https://www.greptile.com/docs/integrations/code-providers |
| 5-minute quickstart | https://www.greptile.com/docs/quickstart |
| CLI onboarding | https://www.greptile.com/docs/code-review/cli-onboarding |
| Greptile CLI | https://www.greptile.com/docs/code-review/greptile-cli |
| Review tiers | https://www.greptile.com/docs/code-review/review-tiers |
| Billing | https://www.greptile.com/docs/account/billing-seats |
| Auto-approve PRs | https://www.greptile.com/docs/code-review/auto-approve-prs |
| The /llms.txt file, v2 | https://llmstxt.org/ |
| Projects (Cursor docs) | https://cursor.com/docs/agent/projects |
| Cursor Projects is now multiplayer | https://cursor.com/blog/projects-multiplayer |

## Daily ingest 2026-11-14 (directory gap-fill)

| Topic | URL |
| --- | --- |
| Pi quickstart | https://pi.dev/docs/latest/quickstart |
| Run Pi safely | https://pi.dev/docs/latest/security |
| Pi providers | https://pi.dev/docs/latest/providers |
| Pi packages | https://pi.dev/docs/latest/packages |
| Pi command line | https://pi.dev/docs/latest/cli |
| Pi configuration | https://pi.dev/docs/latest/configuration |
| Pi (GitHub) | https://github.com/earendil-works/pi |
| Grok Build overview | https://docs.x.ai/build/overview |
| Grok Build permissions | https://docs.x.ai/build/features/permissions |
| Grok Build sandbox | https://docs.x.ai/build/features/sandbox |
| Grok Build skills, plugins, and marketplaces | https://docs.x.ai/build/features/skills-plugins-marketplaces |
| Grok Build AGENTS.md | https://docs.x.ai/build/features/project-rules |
| Grok Build headless and scripting | https://docs.x.ai/build/cli/headless-scripting |
| Grok Build CLI reference | https://docs.x.ai/build/cli/reference |
| Grok Build enterprise deployments | https://docs.x.ai/build/enterprise |
| Grok Build product page | https://x.ai/build |
| Install Qodo on GitHub | https://docs.qodo.ai/install-qodo/github |
| Qodo git provider feature support | https://docs.qodo.ai/install-qodo/git-provider-feature-support |
| Qodo pull request command reference | https://docs.qodo.ai/code-review/pr-command-and-interaction-reference |
| Qodo Agentic Toolbox overview | https://docs.qodo.ai/agentic-toolbox/agentic-toolbox-overview |
| Install the Qodo Agentic Toolbox CLI | https://docs.qodo.ai/agentic-toolbox/cli |
| Qodo pricing and usage | https://docs.qodo.ai/pricing-and-usage |
| Qodo Merge is now part of the platform | https://www.qodo.ai/formerly-qodo-merge/ |
| E2B documentation | https://docs.e2b.dev/ |
| E2B sandbox lifecycle | https://docs.e2b.dev/sandbox |
| E2B sandbox lifetime | https://docs.e2b.dev/faq/sandbox-lifetime |
| E2B API key | https://docs.e2b.dev/api-key |
| E2B billing and limits | https://docs.e2b.dev/billing |
| E2B sandbox price | https://docs.e2b.dev/faq/calculate-sandbox-price |
| OpenAI Agents SDK on E2B | https://docs.e2b.dev/agents/openai-agents-sdk |
| Cloudflare Agents | https://developers.cloudflare.com/agents/ |
| Build your first Durable Agent | https://developers.cloudflare.com/agents/getting-started/quick-start/ |
| Cloudflare Pi harness | https://developers.cloudflare.com/agents/harnesses/pi/ |
| Cloudflare Agents limits | https://developers.cloudflare.com/agents/platform/limits/ |
| Cloudflare Agent class | https://developers.cloudflare.com/agents/agent-class/ |
| Amazon Q Developer IDE plugins end of support | https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-developer-ide-end-of-support.html |

## Daily ingest 2026-11-15

| Topic | URL |
| --- | --- |
| Daytona sandboxes | https://www.daytona.io/docs/en/sandboxes/ |
| Daytona quickstart | https://www.daytona.com/docs/quickstart |
| Daytona pricing | https://www.daytona.com/pricing |
| Daytona billing | https://www.daytona.com/docs/billing |
| Daytona MCP server | https://www.daytona.com/docs/mcp |
| Vercel Sandbox | https://vercel.com/docs/sandbox |
| Vercel Sandbox pricing and quotas | https://vercel.com/docs/sandbox/pricing |
| Vercel Sandbox JS SDK | https://vercel.com/docs/sandbox/sdk-reference |
| Vercel Sandbox Python SDK | https://vercel.com/docs/sandbox/python-sdk-reference |
| Strands get started | https://strandsagents.com/docs/user-guide/sdk/quickstart/overview/ |
| Strands Python quickstart | https://strandsagents.com/docs/user-guide/sdk/quickstart/python/ |
| Strands harness SDK | https://github.com/strands-agents/harness-sdk |
| Pydantic AI installation | https://pydantic.dev/docs/ai/install/ |
| Pydantic AI agents | https://pydantic.dev/docs/ai/agents/ |
| Pydantic AI function tools | https://pydantic.dev/docs/ai/tools/ |
| Pydantic AI deferred tools | https://pydantic.dev/docs/ai/deferred-tools/ |
| Pydantic AI MCP overview | https://pydantic.dev/docs/ai/mcp/overview |
| Pydantic AI MCP client | https://pydantic.dev/docs/ai/mcp/client |
| x402 protocol specification v2 | https://github.com/coinbase/x402/blob/main/specs/x402-specification-v2.md |
| x402 HTTP transport v2 | https://github.com/coinbase/x402/blob/main/specs/transports-v2/http.md |
| coinbase/x402 | https://github.com/coinbase/x402/ |
| How x402 works | https://docs.cdp.coinbase.com/x402/core-concepts/how-it-works |
| ACP v2 overview | https://agentclientprotocol.com/protocol/v2/overview |
| ACP v2 session setup | https://agentclientprotocol.com/protocol/v2/session-setup |
| LangGraph quickstart (Python) | https://docs.langchain.com/oss/python/langgraph/quickstart |
| LangGraph quickstart (JavaScript) | https://docs.langchain.com/oss/javascript/langgraph/quickstart |
| LangGraph checkpointers | https://docs.langchain.com/oss/python/langgraph/checkpointers |
| LangGraph interrupts | https://docs.langchain.com/oss/python/langgraph/interrupts |
| LangGraph license | https://github.com/langchain-ai/langgraph/blob/main/LICENSE |
| Mastra get started | https://mastra.ai/docs/getting-started/installation |
| Mastra human-in-the-loop | https://mastra.ai/docs/agents/human-in-the-loop |
| Mastra MCP | https://mastra.ai/docs/connections/mcp |
| Mastra built-in MCP server | https://mastra.ai/docs/server/mcp |
| Mastra workflows | https://mastra.ai/docs/workflows/overview |
| Mastra LICENSE.md | https://github.com/mastra-ai/mastra/blob/main/LICENSE.md |
| @mastra/core README | https://github.com/mastra-ai/mastra/blob/main/packages/core/README.md |
| Mastra Enterprise Edition license | https://github.com/mastra-ai/mastra/blob/HEAD/ee/LICENSE |
| Modal Sandboxes | https://modal.com/docs/guide/sandboxes |
| Modal sandbox resources and pricing | https://modal.com/docs/guide/sandbox-resources |
| Modal sandbox snapshots | https://modal.com/docs/guide/sandbox-snapshots |
| Modal sandbox networking | https://modal.com/docs/guide/sandbox-networking |
| modal token CLI | https://modal.com/docs/reference/cli/token |
| Modal Sandboxes product page | https://modal.com/products/sandboxes |
| AP2 repository README | https://github.com/google-agentic-commerce/AP2/blob/main/README.md |
| Agentic Payment Protocol v0.2 | https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md |
| AP2 flows | https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/flows.md |
| AP2 Checkout Mandate | https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/checkout_mandate.md |
| AP2 Payment Mandate | https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/payment_mandate.md |
| OpenTelemetry GenAI span conventions | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-spans.md |
| OpenTelemetry GenAI semantic conventions README | https://github.com/open-telemetry/semantic-conventions-genai/blob/main/README.md |
| OpenTelemetry GenAI attribute registry (moved) | https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/ |
| Inside the LLM Call: GenAI Observability with OpenTelemetry | https://opentelemetry.io/blog/2026/genai-observability/ |
| UCP specification overview (2026-08-25) | https://ucp.dev/2026-08-25/specification/overview/ |
| UCP release v2026-08-25 | https://github.com/Universal-Commerce-Protocol/ucp/releases/tag/v2026-08-25 |
| UCP Apache-2.0 license | https://raw.githubusercontent.com/Universal-Commerce-Protocol/ucp/main/LICENSE |
| Get started with UCP on Google | https://developers.google.com/merchant/ucp |
| Create a UCP profile (Google) | https://developers.google.com/merchant/ucp/implementation/2026-04-08/publish-profile |
| LangSmith Agent Server | https://docs.langchain.com/langsmith/deployment |
| Deploy other frameworks to LangSmith Agent Server | https://docs.langchain.com/langsmith/deploy-other-frameworks |
| LangSmith account and API key | https://docs.langchain.com/langsmith/create-account-api-key |
| CrewAI introduction | https://docs.crewai.com/en/introduction |
| CrewAI installation | https://docs.crewai.com/en/installation |
| CrewAI LLMs | https://docs.crewai.com/en/concepts/llms |
| smolagents | https://huggingface.co/docs/smolagents/index |
| smolagents secure code execution | https://huggingface.co/docs/smolagents/tutorials/secure_code_execution |
| What is Browserbase? | https://docs.browserbase.com/introduction/what-is-browserbase |
| Create a Browserbase session | https://docs.browserbase.com/fundamentals/create-browser-session |
| Browserbase pricing | https://www.browserbase.com/pricing |
| Letta Code CLI | https://docs.letta.com/platform/cli/index.md |
| Letta Code CLI reference | https://docs.letta.com/platform/cli/reference/index.md |
| Letta Code headless mode | https://docs.letta.com/platform/cli/headless/index.md |
| Letta Code configuration | https://docs.letta.com/reference/settings/index.md |
| Letta Code permissions | https://docs.letta.com/configuration/permissions/index.md |
| Letta Code skills | https://docs.letta.com/configuration/skills/index.md |
| Letta pricing | https://docs.letta.com/pricing/index.md |
| Hosted Letta MCP server | https://docs.letta.com/platform/hosted-mcp/index.md |
| FastMCP welcome | https://gofastmcp.com/docs/getting-started/welcome |
| FastMCP installation | https://gofastmcp.com/docs/getting-started/installation |
| What's New in FastMCP 4 | https://gofastmcp.com/docs/getting-started/whats-new |
| The FastMCP server | https://gofastmcp.com/docs/servers/server |
| FastMCP authentication | https://gofastmcp.com/docs/servers/auth/authentication |
| FastMCP updates | https://gofastmcp.com/docs/updates |
| MCP Inspector | https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector |
| MCP Inspector CLI client | https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/cli |
| MCP Inspector web client | https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/web |
| MCP Inspector security | https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector/security |
| Graphite AI Reviews | https://graphite.com/docs/ai-reviews |
| Graphite AI reviews setup | https://graphite.com/docs/ai-reviews-setup |
| Graphite billing and plans | https://graphite.com/docs/billing-plans |
| Graphite pricing FAQ | https://graphite.com/docs/pricing-faq |
| Graphite GitHub App auth | https://graphite.com/docs/authenticate-with-github-app |
| Graphite Agents | https://graphite.com/docs/agents |
| Use Rovo Dev CLI | https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/ |
| Install and run Rovo Dev CLI | https://support.atlassian.com/rovo/docs/install-and-run-rovo-dev-cli-on-your-device/ |
| Rovo Dev CLI commands | https://support.atlassian.com/rovo/docs/rovo-dev-cli-commands/ |
| Use tools in Rovo Dev CLI | https://support.atlassian.com/rovo/docs/use-tools-in-rovo-dev-cli/ |
| Extend Rovo Dev CLI with Agent Skills | https://support.atlassian.com/rovo/docs/extend-rovo-dev-cli-with-agent-skills/ |
| Switch models in Rovo Dev CLI | https://support.atlassian.com/rovo/docs/switch-between-large-language-models-in-rovo-dev-cli/ |
| ACP joins A2A (LF AI & Data) | https://lfaidata.foundation/communityblog/2025/08/29/acp-joins-forces-with-a2a-under-the-linux-foundations-lf-ai-data/ |
| i-am-bee/acp (archived) | https://github.com/i-am-bee/ACP |

## Daily ingest 2026-11-16

| Topic | URL |
| --- | --- |
| Stagehand v4 installation | https://docs.stagehand.dev/v4/first-steps/installation |
| Stagehand v4 quickstart | https://docs.stagehand.dev/v4/first-steps/quickstart |
| Stagehand v4 browser configuration | https://docs.stagehand.dev/v4/configuration/browser |
| Stagehand migrate v3 to v4 | https://docs.stagehand.dev/v4/migrations/v3 |
| Stagehand migrate Playwright to v4 | https://docs.stagehand.dev/v4/migrations/playwright |
| Deploying Stagehand | https://docs.stagehand.dev/v4/best-practices/deployments |
| Stagehand WebMCP | https://docs.stagehand.dev/v4/basics/webmcp |
| browserbase/stagehand | https://github.com/browserbase/stagehand |
| Agent Runtime | https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/runtime |
| Deploy an agent on Agent Runtime | https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale/runtime/deploy-an-agent |
| Scale your agents | https://docs.cloud.google.com/gemini-enterprise-agent-platform/scale |
| Gemini Enterprise Agent Platform pricing | https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing |
| Semgrep Guardian | https://docs.semgrep.dev/semgrep-guardian/overview |
| Semgrep Guardian quickstart | https://docs.semgrep.dev/semgrep-guardian/quickstart |
| Choose your Guardian setup | https://docs.semgrep.dev/semgrep-guardian/choose-your-setup |
| Guardian on Cursor | https://docs.semgrep.dev/semgrep-guardian/ide-setup/cursor |
| Install the Semgrep CLI for Guardian | https://docs.semgrep.dev/semgrep-guardian/install-cli |
| Guardian enterprise deployment | https://docs.semgrep.dev/semgrep-guardian/enterprise-deployment |
| Semgrep MCP (beta) | https://docs.semgrep.dev/mcp/overview |
| Semgrep MCP authentication | https://docs.semgrep.dev/mcp/authentication |
| LlamaIndex Workflows introduction | https://developers.llamaindex.ai/python/llamaagents/workflows/ |
| LlamaIndex agents | https://developers.llamaindex.ai/python/framework/use_cases/agents/ |
| WebMCP (Chrome) | https://developer.chrome.com/docs/ai/webmcp |
| Ollama local FAQ | https://docs.ollama.com/faq |
| Ollama authentication | https://docs.ollama.com/api/authentication |
| Ollama API introduction | https://docs.ollama.com/api/introduction |
| browser-use 1.0 introduction | https://docs.browser-use.com/open-source/introduction |
| browser-use quickstart | https://docs.browser-use.com/open-source/quickstart |
| browser-use Agent | https://docs.browser-use.com/open-source/agent |
| browser-use CLI | https://docs.browser-use.com/open-source/browser-use-cli |
| Browser Use Cloud quickstart | https://docs.browser-use.com/cloud/quickstart |
| AI SDK introduction | https://ai-sdk.dev/docs/introduction |
| AI SDK Node.js quickstart | https://ai-sdk.dev/docs/getting-started/nodejs |
| AI SDK building agents | https://ai-sdk.dev/docs/agents/building-agents |
| AI SDK agents overview | https://ai-sdk.dev/docs/agents/overview |
| AI SDK ToolLoopAgent | https://ai-sdk.dev/docs/reference/ai-sdk-core/tool-loop-agent |
| OpenRouter authentication | https://openrouter.ai/docs/api_reference/authentication |
| OpenRouter API overview | https://openrouter.ai/docs/api_reference/overview |
| OpenRouter provider routing | https://openrouter.ai/docs/guides/routing/provider-selection |
| OpenRouter model fallbacks | https://openrouter.ai/docs/guides/routing/model-fallbacks |
| OpenRouter Models API | https://openrouter.ai/docs/api_reference/models |
| Playwright MCP README | https://github.com/microsoft/playwright-mcp/blob/main/README.md |
| Playwright MCP getting started | https://playwright.dev/docs/getting-started-mcp |
| Playwright MCP configuration | https://playwright.dev/mcp/configuration/options |
| @playwright/mcp on npm | https://www.npmjs.com/package/@playwright/mcp |
| Codex 0.167.0 | https://github.com/openai/codex/releases/tag/rust-v0.167.0 |
| Codex 0.167.2 | https://github.com/openai/codex/releases/tag/rust-v0.167.2 |
| Codex 0.168.0 | https://github.com/openai/codex/releases/tag/rust-v0.168.0 |
| Codex 0.169.0 | https://github.com/openai/codex/releases/tag/rust-v0.169.0 |
| MCP TypeScript SDK v2 | https://ts.sdk.modelcontextprotocol.io/v2/ |
| typescript-sdk repository | https://github.com/modelcontextprotocol/typescript-sdk |
| MCP TypeScript SDK v1 | https://ts.sdk.modelcontextprotocol.io/ |
| MCP Python SDK | https://py.sdk.modelcontextprotocol.io/ |
| MCP Python SDK installation | https://py.sdk.modelcontextprotocol.io/get-started/installation/ |
| Langfuse get started with tracing | https://langfuse.com/docs/observability/get-started |
| Langfuse SDKs | https://langfuse.com/docs/observability/sdk/overview |
| Langfuse OpenTelemetry | https://langfuse.com/integrations/native/opentelemetry |
| LiteLLM proxy CLI quick start | https://docs.litellm.ai/docs/proxy/quick_start |
| LiteLLM virtual keys | https://docs.litellm.ai/docs/proxy/virtual_keys |
| LiteLLM grant MCP access | https://docs.litellm.ai/docs/mcp_grant_access |
| LiteLLM MCP configuration reference | https://docs.litellm.ai/docs/mcp_config_reference |
| Promptfoo getting started | https://www.promptfoo.dev/docs/getting-started/ |
| Promptfoo CI/CD | https://www.promptfoo.dev/docs/integrations/ci-cd/ |
| Promptfoo red team configuration | https://www.promptfoo.dev/docs/red-team/configuration/ |
| Promptfoo red team agents | https://www.promptfoo.dev/docs/red-team/agents/ |
| Codex subagents | https://developers.openai.com/codex/subagents |
| Run tool calls from code with Code Mode | https://code.claude.com/docs/en/code-mode |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Claude Code v2.1.326 | https://github.com/anthropics/claude-code/releases/tag/v2.1.326 |
| Context7 API guide | https://context7.com/docs/api-guide |
| Context7 plans and pricing | https://context7.com/docs/plans-pricing |
| Context7 for Cursor | https://context7.com/docs/clients/cursor |
| Context7 MCP clients | https://context7.com/docs/resources/all-clients |
| Context7 data safety | https://context7.com/docs/security/data-safety |
| Context7 get API usage | https://context7.com/docs/api-reference/usage/get-api-usage |
| Setting up the GitHub MCP Server | https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/set-up-the-github-mcp-server |
| Remote GitHub MCP Server | https://github.com/github/github-mcp-server/blob/main/docs/remote-server.md |
| GitHub MCP server README | https://github.com/github/github-mcp-server |
| GitHub MCP host integration | https://github.com/github/github-mcp-server/blob/main/docs/host-integration.md |
| Get started with Chrome DevTools for agents | https://developer.chrome.com/docs/devtools/agents/get-started |
| chrome-devtools-mcp README | https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/README.md |
| Chrome DevTools MCP configuration | https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/configuration.md |
| Chrome DevTools MCP changelog | https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/CHANGELOG.md |
| Get started with Braintrust | https://docs.braintrust.dev/ |
| Braintrust plans and limits | https://docs.braintrust.dev/plans-and-limits |
| Braintrust authentication | https://docs.braintrust.dev/admin/authentication |
| Braintrust evaluation quickstart | https://docs.braintrust.dev/evaluation-quickstart |
| Braintrust CLI quickstart | https://docs.braintrust.dev/reference/cli/quickstart |
| Braintrust remote evals and sandboxes | https://docs.braintrust.dev/evaluate/remote-evals |
| Braintrust Python install | https://docs.braintrust.dev/sdks/python/install-and-instrument |
| Inspect | https://inspect.aisi.org.uk/ |
| Inspect using agents | https://inspect.aisi.org.uk/agents.html |
| Inspect Deep Agent | https://inspect.aisi.org.uk/deepagent.html |
| Inspect agent bridge | https://inspect.aisi.org.uk/agent-bridge.html |
| Inspect tutorial | https://inspect.aisi.org.uk/tutorial |

## Daily ingest 2026-11-17

| Topic | URL |
| --- | --- |
| Docker MCP Catalog and Toolkit | https://docs.docker.com/ai/mcp-catalog-and-toolkit/ |
| Docker MCP Toolkit | https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/ |
| Use MCP Toolkit from the CLI | https://docs.docker.com/ai/mcp-catalog-and-toolkit/cli/ |
| MCP Profiles | https://docs.docker.com/ai/mcp-catalog-and-toolkit/profiles/ |
| MCP Toolkit FAQs | https://docs.docker.com/ai/mcp-catalog-and-toolkit/faqs/ |
| Dynamic MCP | https://docs.docker.com/ai/mcp-catalog-and-toolkit/dynamic-mcp/ |
| Build and operate AI agents (Composio) | https://docs.composio.dev/docs |
| Using sessions via MCP | https://docs.composio.dev/docs/sessions-via-mcp |
| Configuring sessions | https://docs.composio.dev/docs/configuring-sessions |
| Composio toolkits | https://docs.composio.dev/docs/toolkits |
| Composio platform pricing | https://composio.dev/pricing/platform |
| About Serena | https://oraios.github.io/serena/01-about/000_intro.html |
| Serena installation | https://oraios.github.io/serena/02-usage/010_installation.html |
| Running Serena | https://oraios.github.io/serena/02-usage/020_running.html |
| Connecting your MCP client (Serena) | https://oraios.github.io/serena/02-usage/030_clients.html |
| Serena project workflow | https://oraios.github.io/serena/02-usage/040_workflow.html |
| Serena security considerations | https://oraios.github.io/serena/02-usage/070_security.html |
| Welcome to Agno | https://docs.agno.com/ |
| Agno SDK | https://docs.agno.com/sdk/introduction |
| AgentOS as MCP server | https://docs.agno.com/agent-os/mcp/mcp |
| Agno security and auth | https://docs.agno.com/features/security-and-auth |
| Agno self-hosted authorization | https://docs.agno.com/agent-os/security/authorization/self-hosted |
| Phidata repository (archived) | https://github.com/agno-agi/phidata |
| Control where GitHub Copilot customizations come from | https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from/ |
| Enterprise managed settings | https://docs.github.com/en/copilot/reference/enterprise-administrators/enterprise-managed-settings |
| Managing plugin marketplaces and plugins | https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins |
| GitHub Copilot models deprecated on November 16, 2026 | https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/ |
| Firecrawl introduction | https://docs.firecrawl.dev/ |
| Firecrawl MCP | https://docs.firecrawl.dev/mcp-server |
| Firecrawl scrape | https://docs.firecrawl.dev/features/scrape |
| Firecrawl rate limits | https://docs.firecrawl.dev/rate-limits |
| Firecrawl pricing | https://www.firecrawl.dev/pricing |
| Firecrawl agent | https://docs.firecrawl.dev/features/agent |
| Start building with Exa | https://exa.ai/docs/index.md |
| Exa MCP | https://exa.ai/docs/get-started/exa-mcp.md |
| Exa pricing | https://exa.ai/docs/admin/pricing.md |
| Exa docs index | https://exa.ai/docs/llms.txt |
| DSPy | https://dspy.ai/current/ |
| Setting up DSPy | https://dspy.ai/current/getting-started/installation/ |
| Your first DSPy program | https://dspy.ai/current/getting-started/first-program/ |
| dspy.configure | https://dspy.ai/current/api/utils/configure/ |
| Getting started with Snyk Studio | https://docs.snyk.io/agent-security/agentic-security-with-snyk-studio/getting-started-with-snyk-studio |
| A2A Python SDK | https://a2aproject.github.io/a2a-python/ |
| a2a-sdk on PyPI | https://pypi.org/project/a2a-sdk/ |
| A2A Python SDK reference | https://a2a-protocol.org/latest/sdk/python/api/ |
| A2A agent skills and Agent Card | https://a2a-protocol.org/latest/tutorials/python/3-agent-skills-and-card/ |
| a2a-python pyproject.toml | https://github.com/a2aproject/a2a-python/blob/main/pyproject.toml |
| Claude Code v2.1.326 | https://github.com/anthropics/claude-code/releases/tag/v2.1.326 |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Tavily MCP | https://docs.tavily.com/documentation/mcp |
| Try Tavily without an API key | https://docs.tavily.com/documentation/keyless |
| Tavily credits and pricing | https://docs.tavily.com/documentation/api-credits |
| Tavily pricing | https://www.tavily.com/pricing |
| Inngest durable agents | https://www.inngest.com/docs/durable-execution/durable-agents |
| Inngest durable execution limits | https://www.inngest.com/docs/durable-execution/limits |
| Inngest pricing | https://www.inngest.com/pricing |
| Inngest signing keys | https://www.inngest.com/docs/platform/signing-keys |
| Inngest TypeScript environment variables | https://www.inngest.com/docs/sdk/environment-variables |
| Inngest Python environment variables | https://www.inngest.com/docs/reference/python/overview/env-vars |
| DeepEval introduction | https://deepeval.com/docs/introduction |
| DeepEval getting started | https://deepeval.com/docs/getting-started |
| DeepEval MCP evaluation quickstart | https://deepeval.com/docs/getting-started-mcp |
| confident-ai/deepeval | https://github.com/confident-ai/deepeval |
| snyk/agent-scan README | https://github.com/snyk/agent-scan/blob/main/README.md |
| Snyk Agent Scan releases | https://github.com/snyk/agent-scan/releases |
| Start Phoenix | https://arize.com/docs/phoenix/get-started |
| Phoenix self-hosting | https://arize.com/docs/phoenix/self-hosting |
| Phoenix 21 authentication by default | https://arize.com/docs/phoenix/release-notes/11-2026/11-02-2026-authentication-by-default-and-decision-annotations |
| arize-phoenix on PyPI | https://pypi.org/project/arize-phoenix/ |
| Arize Phoenix | https://arize.com/phoenix/ |
| Mem0 introduction | https://docs.mem0.ai/introduction |
| Mem0 platform overview | https://docs.mem0.ai/platform/overview |
| Mem0 platform vs open source | https://docs.mem0.ai/platform/platform-vs-oss |
| Mem0 open source overview | https://docs.mem0.ai/open-source/overview |
| Mem0 platform quickstart | https://docs.mem0.ai/platform/quickstart |
| Mem0 API reference | https://docs.mem0.ai/api-reference |
| Mem0 MCP | https://docs.mem0.ai/platform/mem0-mcp |
| Mem0 pricing FAQ | https://docs.mem0.ai/platform/pricing |
| Mem0 delete memory | https://docs.mem0.ai/core-concepts/memory-operations/delete |
| Sign up for Mem0 as an agent | https://docs.mem0.ai/platform/agent-signup |
| Portkey | https://portkey.ai/ |
| Prisma AIRS AI Gateway general availability | https://www.paloaltonetworks.com/blog/2026/07/announcing-general-availability-of-prisma-airs-ai-gateway/ |
| Portkey AI Gateway | https://portkey.ai/docs/product/ai-gateway |
| Getting started with Portkey AI Gateway | https://portkey.ai/docs/guides/getting-started/getting-started-with-ai-gateway |
| Portkey virtual keys | https://portkey.ai/docs/product/ai-gateway/virtual-keys |
| Portkey MCP Gateway | https://portkey.ai/docs/product/mcp-gateway |
| Portkey pricing | https://portkey.ai/pricing |
| vLLM quickstart | https://docs.vllm.ai/en/stable/getting_started/quickstart/ |
| vLLM installation | https://docs.vllm.ai/en/stable/getting_started/installation/ |
| vLLM OpenAI-compatible server | https://docs.vllm.ai/en/stable/serving/online_serving/openai_compatible_server/ |
| vLLM security | https://docs.vllm.ai/en/stable/usage/security/ |
| vLLM Docker | https://docs.vllm.ai/en/stable/deployment/docker/ |
| Mistral Managed Agents | https://docs.mistral.ai/studio/agents/overview |
| Mistral Agents SDK quickstart | https://docs.mistral.ai/studio/agents/getting-started/quickstart |
| Move from the Mistral Agents API | https://docs.mistral.ai/studio/agents/getting-started/from-agents-api |
| Mistral agents deploy | https://docs.mistral.ai/studio/agents/learn/where-it-runs/deploy |
| Create a Mistral organization | https://docs.mistral.ai/getting-started/quickstarts/admin/create-organization |
| Sourcegraph MCP server | https://sourcegraph.com/docs/api/mcp |
| Sourcegraph MCP authentication | https://sourcegraph.com/docs/api/mcp/authentication |
| Every Sourcegraph MCP tool, on the default endpoint | https://sourcegraph.com/changelog/mcp-every-tool-by-default |
| Sourcegraph pricing | https://sourcegraph.com/pricing |
| Sourcegraph getting started | https://sourcegraph.com/docs/getting-started |
| Sourcegraph Cloud | https://sourcegraph.com/docs/cloud |
| LiveKit Agents introduction | https://docs.livekit.io/agents/ |
| LiveKit voice AI quickstart | https://docs.livekit.io/agents/start/voice-ai/ |
| LiveKit pricing | https://livekit.com/pricing |
| livekit/agents | https://github.com/livekit/agents |
| Zep pricing | https://www.getzep.com/pricing/ |
| Zep install SDKs | https://help.getzep.com/install-sdks |
| Zep memory security | https://help.getzep.com/memory-security |
| Zep Context MCP server | https://help.getzep.com/context-mcp-server |
| Zep Context MCP authentication | https://help.getzep.com/context-mcp-server/authentication |
| Zep LiveKit integration | https://help.getzep.com/livekit-memory |
| Introducing GPT-6.2 Astra and Sol | https://openai.com/index/introducing-gpt-6-2-astra-sol |
| Using GPT-6.2 | https://developers.openai.com/api/docs/guides/latest-model |
| GPT-6.2 Astra | https://developers.openai.com/api/docs/models/gpt-6.2-astra |
| GPT-6.2 Sol | https://developers.openai.com/api/docs/models/gpt-6.2-sol |
| OpenAI API changelog | https://developers.openai.com/api/docs/changelog |
| Claude Agent SDK TypeScript v0.3.326 | https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.326 |
| Claude Agent SDK overview | https://code.claude.com/docs/en/agent-sdk/overview |

## Daily ingest 2026-11-18

| Topic | URL |
| --- | --- |
| Helicone quickstart | https://docs.helicone.ai/getting-started/quick-start |
| Helicone AI Gateway overview | https://docs.helicone.ai/gateway/overview |
| Helicone provider routing | https://docs.helicone.ai/gateway/provider-routing |
| Helicone error handling and fallback | https://docs.helicone.ai/gateway/concepts/error-handling |
| Helicone pricing | https://www.helicone.ai/pricing |
| Helicone manual self-hosting | https://docs.helicone.ai/getting-started/self-host/manual |
| Helicone platform overview | https://docs.helicone.ai/getting-started/platform-overview |
| GroqCloud overview | https://console.groq.com/docs/overview |
| Groq supported models | https://console.groq.com/docs/models |
| Groq quickstart | https://console.groq.com/docs/quickstart |
| Groq tool use | https://console.groq.com/docs/tool-use |
| Groq billing FAQs | https://console.groq.com/docs/billing-faqs |
| Groq spend limits | https://console.groq.com/docs/spend-limits |
| Groq Flex processing | https://console.groq.com/docs/flex-processing |
| Groq model deprecation | https://console.groq.com/docs/deprecations |
| Groq rate limits | https://console.groq.com/docs/rate-limits |
| ElevenAgents overview | https://elevenlabs.io/docs/eleven-agents/overview |
| ElevenAgents pricing | https://elevenlabs.io/pricing/agents |
| ElevenAgents MCP tools | https://elevenlabs.io/docs/eleven-agents/customization/tools/mcp |
| ElevenLabs hosted MCP server | https://elevenlabs.io/docs/eleven-agents/operate/hosted-mcp |
| Trigger.dev introduction | https://trigger.dev/docs/introduction |
| Trigger.dev pricing | https://trigger.dev/pricing |
| Trigger.dev deployment | https://trigger.dev/docs/deployment/overview |
| Trigger.dev AI agents | https://trigger.dev/docs/ai-chat/overview |
| Temporal durable AI | https://docs.temporal.io/ai |
| Temporal Cloud get started | https://docs.temporal.io/cloud/get-started |
| Temporal Cloud pricing | https://docs.temporal.io/cloud/pricing |
| Temporal Cloud Actions | https://docs.temporal.io/evaluate/cloud/actions |
| Temporal Cloud API keys | https://docs.temporal.io/cloud/api-keys |
| Temporal Cloud namespaces | https://docs.temporal.io/cloud/namespaces |
| Temporal design patterns | https://docs.temporal.io/design-patterns |
| Temporal OpenAI Agents integration | https://docs.temporal.io/develop/python/integrations/openai-agents |
| Vercel AI Gateway | https://vercel.com/docs/ai-gateway |
| Vercel AI Gateway pricing | https://vercel.com/docs/ai-gateway/pricing |
| Vercel AI Gateway authentication and BYOK | https://vercel.com/docs/ai-gateway/authentication-and-byok |
| Vercel AI Gateway FAQ | https://vercel.com/docs/ai-gateway/faq |
| Cloudflare AI Gateway | https://developers.cloudflare.com/ai-gateway/ |
| Cloudflare AI Gateway getting started | https://developers.cloudflare.com/ai-gateway/get-started/ |
| Cloudflare AI Gateway pricing | https://developers.cloudflare.com/ai-gateway/reference/pricing/ |
| Cloudflare AI Gateway limits | https://developers.cloudflare.com/ai-gateway/reference/limits/ |
| Cloudflare AI Gateway unified billing | https://developers.cloudflare.com/ai-gateway/features/unified-billing/ |
| Cloudflare AI Gateway caching | https://developers.cloudflare.com/ai-gateway/features/caching/ |
| Cloudflare MCP servers | https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/ |
| cloudflare/mcp-server-cloudflare | https://github.com/cloudflare/mcp-server-cloudflare |
| Auggie CLI 1.2.0 release notes | https://www.augmentcode.com/changelog/auggie-cli-1-2-0-release-notes |
| Auggie CLI overview | https://docs.augmentcode.com/cli/overview |
| FastMCP updates | https://gofastmcp.com/docs/updates |
| FastMCP installation | https://gofastmcp.com/docs/getting-started/installation |
| Perplexity Agent API quickstart | https://docs.perplexity.ai/docs/agent-api/quickstart |
| Perplexity Agent API effort levels | https://docs.perplexity.ai/docs/agent-api/effort |
| Perplexity API pricing | https://docs.perplexity.ai/docs/getting-started/pricing |
| Perplexity projects and billing | https://docs.perplexity.ai/docs/getting-started/projects |
| Perplexity rate limits and usage tiers | https://docs.perplexity.ai/docs/admin/rate-limits-usage-tiers |
| Perplexity API platform overview | https://docs.perplexity.ai/docs/getting-started/overview |
| How to migrate from Sonar | https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/how-to |
| Sonar request mapping (vendor skill) | https://github.com/perplexityai/api-platform-developers/blob/main/skills/migrate-sonar-to-agent-api/references/request-mapping.md |
| Cerebras Inference quickstart | https://inference-docs.cerebras.ai/quickstart |
| Cerebras model catalog | https://inference-docs.cerebras.ai/models/overview |
| Cerebras OpenAI GPT OSS | https://inference-docs.cerebras.ai/models/openai-oss |
| Cerebras Qwen 3.8 27B | https://inference-docs.cerebras.ai/models/qwen-3.8-27b |
| Cerebras rate limits | https://inference-docs.cerebras.ai/support/rate-limits |
| Cerebras reasoning | https://inference-docs.cerebras.ai/capabilities/reasoning |
| Cerebras OpenAI compatibility | https://inference-docs.cerebras.ai/resources/openai |
| Cerebras authentication | https://inference-docs.cerebras.ai/api-reference/authentication |
| Cerebras deprecations | https://inference-docs.cerebras.ai/support/deprecation |
| Fireworks Nexus quickstart | https://docs.fireworks.ai/nexus/quickstart |
| Fireworks Nexus Auto | https://docs.fireworks.ai/nexus/auto |
| Fireworks Nexus plans and accounts | https://docs.fireworks.ai/nexus/plans |
| Fireworks Nexus data security | https://docs.fireworks.ai/nexus/data-security |
| Self-hosted Claude Managed Agents | https://platform.claude.com/docs/en/managed-agents/self-hosted |
| Differences from the hosted Managed Agents service | https://platform.claude.com/docs/en/managed-agents/self-hosted/differences |
| Claude Platform release notes | https://platform.claude.com/docs/en/release-notes/overview |

## Daily ingest 2026-11-18 (Together AI, Together Link, Hatchet)

| Topic | URL |
| --- | --- |
| Together AI quickstart | https://docs.together.ai/docs/quickstart |
| Together AI OpenAI compatibility | https://docs.together.ai/docs/inference/openai-compatibility |
| Together AI authentication | https://docs.together.ai/docs/api-keys-authentication |
| Together AI account management | https://docs.together.ai/docs/account-management |
| Together AI credits | https://docs.together.ai/docs/billing-credits |
| Together AI pricing | https://www.together.ai/pricing |
| Together AI function calling | https://docs.together.ai/docs/inference/function-calling |
| Together AI spend controls | https://docs.together.ai/docs/billing-spend-controls |
| Together AI geo-specific inference | https://docs.together.ai/docs/serverless/geo-specific-inference |
| Together AI rate limits | https://docs.together.ai/docs/serverless/rate-limits |
| Together AI deprecations | https://docs.together.ai/docs/deprecations |
| Together Link | https://docs.together.ai/docs/togetherlink |
| Hatchet Cloud quickstart | https://docs.hatchet.run/v1/quickstart |
| Hatchet Cloud vs OSS | https://docs.hatchet.run/v1/cloud-vs-oss |
| Hatchet API tokens | https://docs.hatchet.run/v1/api-tokens |
| Hatchet pricing | https://hatchet.run/pricing |
| Hatchet region availability | https://docs.hatchet.run/v1/region-availability |
| Hatchet durable tasks | https://docs.hatchet.run/v1/durable-tasks |
| Hatchet task eviction | https://docs.hatchet.run/v1/task-eviction |

## Daily ingest 2026-11-19 (Restate, DBOS, Pipecat)

| Topic | URL |
| --- | --- |
| Restate durable agents | https://docs.restate.dev/ai/patterns/durable-agents |
| Restate agent SDK integration guide | https://docs.restate.dev/ai/sdk-integrations/integration-guide |
| Restate Cloud getting started | https://docs.restate.dev/cloud/getting-started |
| Choose how to run Restate | https://docs.restate.dev/hosting/overview |
| Restate pricing | https://restate.dev/pricing |
| Restate Cloud | https://restate.dev/cloud |
| Restate Cloud public launch | https://restate.dev/blog/announcing-restate-cloud-public |
| DBOS AI quickstart | https://docs.dbos.dev/ai/ai-quickstart |
| DBOS architecture | https://docs.dbos.dev/architecture |
| DBOS quickstart | https://docs.dbos.dev/quickstart |
| DBOS Vercel AI SDK integration | https://docs.dbos.dev/integrations/vercel-ai |
| DBOS Conductor overview | https://docs.dbos.dev/conductor/overview |
| Self-hosting DBOS Conductor | https://docs.dbos.dev/conductor/self-hosting/hosting-conductor |
| DBOS pricing | https://www.dbos.dev/dbos-pricing |
| DBOS Console | https://console.dbos.dev/ |
| Introduction to Pipecat | https://docs.pipecat.ai/pipecat/get-started/introduction |
| Pipecat quickstart | https://docs.pipecat.ai/pipecat/get-started/quickstart |
| Pipecat Cloud introduction | https://docs.pipecat.ai/pipecat-cloud/introduction |
| Pipecat Cloud accounts | https://docs.pipecat.ai/pipecat-cloud/fundamentals/accounts-and-organizations |
| Pipecat Cloud scaling | https://docs.pipecat.ai/pipecat-cloud/fundamentals/scaling |
| Pipecat Cloud pricing | https://www.daily.co/pricing/pipecat-cloud |
| Pipecat Cloud | https://pipecat.daily.co |

## Daily ingest 2026-11-19 (Copilot SDK 2.0, Vercel Workflows, Cloudflare Workflows, xAI API)

| Topic | URL |
| --- | --- |
| GitHub Copilot SDK is becoming Microsoft Copilot SDK | https://github.blog/changelog/2026-10-28-github-copilot-sdk-is-becoming-microsoft-copilot-sdk/ |
| microsoft/copilot-sdk | https://github.com/microsoft/copilot-sdk |
| Introducing the Microsoft Copilot SDK 2.0 | https://commandline.microsoft.com/microsoft-copilot-sdk-2-0-github/ |
| Copilot SDK multi-tenancy | https://docs.github.com/en/copilot/how-tos/copilot-sdk/setup/multi-tenancy |
| Copilot SDK quickstart | https://docs.github.com/en/copilot/get-started/sdk-quickstart |
| Claude Agent SDK TypeScript v0.3.327 | https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.327 |
| Vercel Workflows | https://vercel.com/docs/workflows |
| Vercel Workflows pricing | https://vercel.com/docs/workflows/pricing |
| Vercel Workflows data retention | https://vercel.com/docs/workflows/retention |
| Workflow SDK getting started | https://workflow-sdk.dev/docs/getting-started |
| Workflow SDK serialization | https://workflow-sdk.dev/docs/foundations/serialization |
| Workflow SDK serialization-failed | https://workflow-sdk.dev/docs/errors/serialization-failed |
| Cloudflare Workflows | https://developers.cloudflare.com/workflows/ |
| Cloudflare Workflows getting started | https://developers.cloudflare.com/workflows/get-started/guide/ |
| Cloudflare Workflows Workers API | https://developers.cloudflare.com/workflows/build/workers-api/ |
| Cloudflare Workflows events | https://developers.cloudflare.com/workflows/build/events-and-parameters/ |
| Cloudflare Workflows limits | https://developers.cloudflare.com/workflows/reference/limits/ |
| Cloudflare Workflows concurrency | https://developers.cloudflare.com/workflows/build/concurrency-limits/ |
| Cloudflare Workflows pricing | https://developers.cloudflare.com/workflows/reference/pricing/ |
| xAI API quickstart | https://docs.x.ai/developers/quickstart |
| xAI API pricing | https://docs.x.ai/developers/pricing |
| xAI API rate limits | https://docs.x.ai/developers/rate-limits |
| xAI generate text | https://docs.x.ai/developers/model-capabilities/text/generate-text |
| xAI tools overview | https://docs.x.ai/developers/tools/overview |
| xAI API security FAQ | https://docs.x.ai/developers/faq/security |

## Daily ingest 2026-11-19 (DeepSeek API, Qdrant Cloud, Brave Search API, Claude Code 2.1.328)

| Topic | URL |
| --- | --- |
| DeepSeek first API call | https://api-docs.deepseek.com/ |
| DeepSeek models and pricing | https://api-docs.deepseek.com/quick_start/pricing |
| DeepSeek rate limit and isolation | https://api-docs.deepseek.com/quick_start/rate_limit |
| DeepSeek thinking mode | https://api-docs.deepseek.com/guides/thinking_mode |
| DeepSeek Search and Fetch | https://api-docs.deepseek.com/guides/search |
| DeepSeek platform signup | https://platform.deepseek.com/sign_up |
| DeepSeek home | https://www.deepseek.com/ |
| Qdrant Cloud getting started | https://qdrant.tech/documentation/cloud-getting-started/ |
| Qdrant database authentication | https://qdrant.tech/documentation/cloud/authentication/ |
| Qdrant Cloud pricing | https://qdrant.tech/pricing/ |
| Qdrant Cloud console | https://cloud.qdrant.io/ |
| Brave Search API | https://brave.com/search/api/ |
| Brave Search API account | https://api-dashboard.search.brave.com/register |
| Brave Search API quickstart | https://api-dashboard.search.brave.com/documentation/quickstart |
| Brave Search API authentication | https://api-dashboard.search.brave.com/documentation/guides/authentication |
| Brave Search API rate limiting | https://api-dashboard.search.brave.com/documentation/guides/rate-limiting |
| Brave Search API help | https://api-dashboard.search.brave.com/documentation/resources/help-feedback |
| Brave Search API agent payments | https://api-dashboard.search.brave.com/documentation/guides/agent-payments |
| Brave Search payment proxy | https://search.agent.s.brave.app/llms.txt |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Claude Code setup | https://code.claude.com/docs/en/setup |
| Claude Code hooks | https://code.claude.com/docs/en/hooks |
| Claude Code product | https://claude.com/product/claude-code |

## Daily ingest 2026-11-19 (Pinecone, Cohere, n8n, Claude Agent SDK 0.3.328)

| Topic | URL |
| --- | --- |
| Pinecone quickstart | https://docs.pinecone.io/guides/get-started/quickstart |
| Understand Pinecone cost | https://docs.pinecone.io/guides/cost/understand-cost |
| Pinecone API authentication | https://docs.pinecone.io/reference/api/authentication |
| Pinecone manage API keys | https://docs.pinecone.io/admin/projects/manage-api-keys |
| Pinecone pricing | https://www.pinecone.io/pricing/ |
| Pinecone console | https://app.pinecone.io/ |
| Cohere API keys and rate limits | https://docs.cohere.com/docs/rate-limits |
| How Cohere pricing works | https://docs.cohere.com/docs/how-does-cohere-pricing-work |
| Cohere pricing | https://cohere.com/pricing |
| Introduction to Cohere embeddings | https://docs.cohere.com/docs/embeddings |
| Cohere Embed API (v2) | https://docs.cohere.com/reference/embed |
| Cohere Rerank API (v2) | https://docs.cohere.com/reference/rerank |
| Cohere API keys | https://dashboard.cohere.com/api-keys |
| n8n build and manage agents | https://docs.n8n.io/build/build-and-manage-agents |
| n8n AI Agent node | https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent |
| n8n MCP servers | https://docs.n8n.io/build/integrate-ai/mcp-servers |
| Choose how to use n8n | https://docs.n8n.io/choose-how-to-use-n8n |
| n8n compare editions | https://docs.n8n.io/deploy/host-n8n/community-edition-features |
| n8n pricing | https://n8n.io/pricing/ |
| Create an n8n Cloud account | https://app.n8n.cloud/register |
| n8n create and edit credentials | https://docs.n8n.io/build/understand-workflows/create-and-edit-credentials |
| Claude Agent SDK TypeScript v0.3.328 | https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.328 |

## Daily ingest 2026-11-20 (Weaviate, Voyage, Chroma Cloud, Jules turndown, Code Mode 2.1.329)

| Topic | URL |
| --- | --- |
| Weaviate Cloud create account | https://docs.weaviate.io/cloud/platform/create-account |
| Weaviate Cloud create a cluster | https://docs.weaviate.io/cloud/manage-clusters/create |
| Connect to Weaviate Cloud | https://docs.weaviate.io/cloud/manage-clusters/connect |
| Weaviate pricing | https://weaviate.io/pricing |
| Weaviate Query Agent | https://docs.weaviate.io/cloud/tools/query-agent |
| Weaviate Cloud console | https://console.weaviate.cloud/ |
| Voyage text embeddings | https://docs.voyageai.com/docs/embeddings |
| Voyage pricing | https://docs.voyageai.com/docs/pricing |
| Voyage rate limits | https://docs.voyageai.com/docs/rate-limits |
| Voyage API key | https://docs.voyageai.com/docs/api-key-and-installation |
| Voyage FAQ | https://docs.voyageai.com/docs/faq |
| Voyage | https://www.voyageai.com/ |
| Voyage dashboard | https://dash.voyageai.com/ |
| Chroma Cloud | https://docs.trychroma.com/cloud/getting-started |
| Chroma Cloud pricing | https://docs.trychroma.com/cloud/pricing |
| Chroma CLI login | https://docs.trychroma.com/docs/cli/login |
| Chroma GitHub sync | https://docs.trychroma.com/cloud/sync/github |
| Chroma signup | https://www.trychroma.com/signup |
| Jules turndown | https://jules.google/docs/changelog/2026-10-29/ |
| Jules changelog | https://jules.google/docs/changelog/ |
| Jules | https://jules.google/ |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Cursor sandbox.json reference | https://cursor.com/docs/reference/sandbox |
| Cursor CLI changelog | https://cursor.com/docs/cli/changelog |

## Daily ingest 2026-11-20 (Zilliz Cloud, turbopuffer, AgentCore V2, GPT-6.2 background)

| Topic | URL |
| --- | --- |
| Create a Zilliz Cloud account | https://docs.zilliz.com/docs/register-with-zilliz-cloud |
| Zilliz Cloud sign-up | https://cloud.zilliz.com/signup |
| Free and Serverless clusters | https://docs.zilliz.com/docs/free-and-serverless-clusters |
| Serverless cluster cost | https://docs.zilliz.com/docs/serverless-cluster-cost |
| Zilliz Cloud limits | https://docs.zilliz.com/docs/limits |
| Zilliz API keys | https://docs.zilliz.com/docs/manage-api-keys |
| Zilliz Cloud | https://zilliz.com/cloud |
| Sign up for turbopuffer | https://turbopuffer.com/join |
| turbopuffer | https://turbopuffer.com/ |
| turbopuffer quickstart | https://turbopuffer.com/docs/quickstart |
| turbopuffer regions | https://turbopuffer.com/docs/regions |
| turbopuffer list namespaces | https://turbopuffer.com/docs/namespaces |
| turbopuffer BYOC operations | https://turbopuffer.com/docs/byoc/operations |
| turbopuffer pricing | https://turbopuffer.com/pricing |
| turbopuffer pricing changelog | https://turbopuffer.com/docs/pricing-log |
| AgentCore microVMs | https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-how-it-works.html |
| AgentCore pricing | https://aws.amazon.com/bedrock/agentcore/pricing/ |
| Amazon Bedrock AgentCore | https://aws.amazon.com/bedrock/agentcore/ |
| AgentCore console | https://console.aws.amazon.com/bedrock-agentcore/home |
| OpenAI background mode | https://developers.openai.com/api/docs/guides/background |
| Using GPT-6.2 | https://developers.openai.com/api/docs/guides/latest-model |
| OpenAI API changelog | https://developers.openai.com/api/docs/changelog |
| OpenAI API pricing | https://developers.openai.com/api/docs/pricing |

## Daily ingest 2026-11-20 (Parallel, Hugging Face Inference Providers, LanceDB, Codex 0.171.0)

| Topic | URL |
| --- | --- |
| Parallel get started | https://platform.parallel.ai |
| Parallel | https://parallel.ai/ |
| Parallel pricing | https://parallel.ai/pricing |
| Parallel Search quickstart | https://docs.parallel.ai/search/search-quickstart |
| Parallel Search modes | https://docs.parallel.ai/search/modes |
| Parallel Search best practices | https://docs.parallel.ai/search/best-practices |
| Parallel API pricing | https://docs.parallel.ai/getting-started/pricing |
| Parallel rate limits | https://docs.parallel.ai/getting-started/rate-limits |
| Parallel MCP server | https://docs.parallel.ai/integrations/mcp/quickstart |
| Join Hugging Face | https://huggingface.co/join |
| Hugging Face | https://huggingface.co/ |
| Hugging Face Inference Providers | https://huggingface.co/docs/inference-providers/index |
| Hugging Face Inference Providers pricing | https://huggingface.co/docs/inference-providers/pricing |
| LanceDB Embedded quickstart 0.41.0 | https://docs.lancedb.com/oss/v0-41-0/quickstart |
| LanceDB Enterprise | https://docs.lancedb.com/enterprise/v1-12-0/enterprise |
| LanceDB | https://www.lancedb.com/ |
| Codex CLI 0.171.0 | https://github.com/openai/codex/releases/tag/rust-v0.171.0 |
| Codex exec remote app server | https://github.com/openai/codex/pull/61707 |
| Codex exec CLI flags 0.171.0 | https://github.com/openai/codex/blob/rust-v0.171.0/codex-rs/exec/src/cli.rs |
| Cloud Agents release notes | https://cursor.com/docs/release-notes/cloud-agents |

## Daily ingest 2026-11-20 (LlamaParse, Reducto, Upstash Vector, MCP draft changelog)

| Topic | URL |
| --- | --- |
| LlamaParse | https://www.llamaindex.ai/llamaparse |
| LlamaParse sign up | https://cloud.llamaindex.ai |
| LlamaParse platform quickstart | https://developers.llamaindex.ai/llamaparse/quickstart/ |
| LlamaParse API key | https://developers.llamaindex.ai/llamaparse/general/api_key/ |
| LlamaParse billing and usage | https://developers.llamaindex.ai/llamaparse/general/billing/ |
| LlamaParse pricing | https://developers.llamaindex.ai/llamaparse/general/pricing/ |
| LlamaParse regions | https://developers.llamaindex.ai/llamaparse/general/regions/ |
| LlamaParse parse a file | https://developers.llamaindex.ai/reference/resources/parsing/methods/create/ |
| LlamaParse configuring parse | https://developers.llamaindex.ai/llamaparse/parse/guides/configuring-parse/ |
| LlamaIndex docs index for agents | https://www.llamaindex.ai/llms.txt |
| Reducto | https://reducto.ai/ |
| Reducto Studio | https://studio.reducto.ai/ |
| Reducto API quickstart | https://docs.reducto.ai/quickstart |
| Reducto API reference for coding agents | https://docs.reducto.ai/agent-guide |
| Reducto account and settings | https://docs.reducto.ai/studio-account |
| Reducto authentication | https://reducto.ai/auth.md |
| Reducto usage and pricing | https://docs.reducto.ai/reference/credit-usage |
| Reducto parse overview | https://docs.reducto.ai/parse/overview |
| Reducto r-1 configuration compatibility | https://docs.reducto.ai/configs/parse/r-1-configuration-compatibility |
| Reducto Parse r-1 | https://docs.reducto.ai/parse/r-1 |
| Reducto processing settings | https://docs.reducto.ai/configs/parse/ocr-settings |
| Reducto agentic modes | https://docs.reducto.ai/configs/parse/agentic-modes |
| Upstash | https://upstash.com/ |
| Upstash console | https://console.upstash.com/ |
| Upstash Vector getting started | https://upstash.com/docs/vector/overall/getstarted |
| What is Upstash Vector? | https://upstash.com/docs/vector/overall/whatisvector |
| Upstash Vector pricing | https://upstash.com/pricing/vector |
| Upstash Vector FAQ | https://upstash.com/docs/vector/help/faq |
| MCP draft changelog | https://modelcontextprotocol.io/specification/draft/changelog |

## Daily ingest 2026-11-21 (Docling, Opik, Haystack, Smithery shutdown, Claude /loop expiry)

| Topic | URL |
| --- | --- |
| Docling | https://docling-project.github.io/docling/ |
| Docling installation | https://docling-project.github.io/docling/getting_started/installation/ |
| Docling on PyPI | https://pypi.org/project/docling/ |
| Docling MCP server | https://docling-project.github.io/docling/usage/mcp/ |
| Docling advanced options | https://docling-project.github.io/docling/usage/advanced_options/ |
| Docling for IBM watsonx concepts | https://developer.dcls.saas.ibm.com/concepts/ |
| Docling for IBM watsonx | https://www.ibm.com/products/docling |
| Opik | https://www.comet.com/site/products/opik/ |
| Opik sign-up | https://www.comet.com/signup?from=opik |
| Opik quickstart | https://www.comet.com/docs/opik/quickstart |
| Opik SDK configuration | https://www.comet.com/docs/opik/tracing/advanced/sdk_configuration |
| Opik log traces | https://www.comet.com/docs/opik/tracing/advanced/log_traces |
| Opik pricing | https://www.comet.com/site/pricing/ |
| Haystack | https://haystack.deepset.ai/ |
| Haystack installation | https://docs.haystack.deepset.ai/docs/installation |
| Haystack Agent | https://docs.haystack.deepset.ai/docs/agent |
| Haystack hooks | https://docs.haystack.deepset.ai/docs/hooks |
| Haystack human in the loop | https://docs.haystack.deepset.ai/docs/human-in-the-loop |
| Haystack migration guide | https://docs.haystack.deepset.ai/docs/migration |
| Haystack Agent Pack | https://docs.haystack.deepset.ai/docs/agent-pack |
| haystack-ai on PyPI | https://pypi.org/project/haystack-ai/ |
| The future of Smithery | https://www.smithery.ai/future |
| Claude Code scheduled tasks | https://code.claude.com/docs/en/scheduled-tasks |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Claude Code 2.1.330 | https://github.com/anthropics/claude-code/releases/tag/v2.1.330 |
| Claude Code setup | https://code.claude.com/docs/en/setup |
| Claude Code product | https://claude.com/product/claude-code |
| Claude Code routines | https://code.claude.com/docs/en/routines |

## Daily ingest 2026-11-21 (Gemini CLI 0.70 policy, Notion MCP, Figma MCP, Mistral OCR)

| Topic | URL |
| --- | --- |
| Gemini CLI policy engine | https://geminicli.com/docs/reference/policy-engine/ |
| Gemini CLI v0.70.0 changelog | https://github.com/google-gemini/gemini-cli/blob/main/docs/changelogs/latest.md |
| gemini-cli v0.70.0 | https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0 |
| Anchor commandPrefix to the top-level command | https://github.com/google-gemini/gemini-cli/pull/30355 |
| Keep ASK_USER for unresolved shell expansion | https://github.com/google-gemini/gemini-cli/pull/30338 |
| Connect to Notion MCP | https://developers.notion.com/guides/mcp/get-started-with-mcp |
| Notion MCP overview | https://developers.notion.com/guides/mcp/overview |
| Build an MCP client for Notion | https://developers.notion.com/guides/mcp/build-mcp-client |
| Notion MCP rate limits | https://developers.notion.com/guides/mcp/rate-limits |
| Notion request limits | https://developers.notion.com/reference/request-limits |
| Notion sign-up | https://www.notion.com/signup |
| Figma MCP server | https://developers.figma.com/docs/figma-mcp-server/ |
| Figma MCP remote server | https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/ |
| Figma MCP rate limits and access | https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/ |
| Figma MCP write to canvas | https://developers.figma.com/docs/figma-mcp-server/write-to-canvas/ |
| Figma MCP desktop server | https://developers.figma.com/docs/figma-mcp-server/local-server-installation/ |
| Figma sign-up | https://www.figma.com/signup |
| Mistral OCR processor | https://docs.mistral.ai/studio/document-processing/basic_ocr |
| Mistral OCR 4.1 | https://docs.mistral.ai/models/ocr-4-1 |
| Mistral OCR endpoint | https://docs.mistral.ai/api/endpoint/ocr |
| Mistral API pricing | https://docs.mistral.ai/inference/pricing |
| Mistral usage and limits | https://docs.mistral.ai/admin/billing-usage/usage-limits |
| Mistral Document AI PDF chunking cookbook | https://docs.mistral.ai/resources/cookbooks/mistral-ocr-documentchunking-document_chunking_cookbook |
| Mistral create an API key | https://docs.mistral.ai/getting-started/quickstarts/studio/activate-and-generate-api-key |
| Mistral API keys | https://console.mistral.ai/api-keys |

## Daily ingest 2026-11-21 (Clerk, Neon, Stripe, Supabase)

| Topic | URL |
| --- | --- |
| Clerk MCP server | https://clerk.com/docs/guides/ai/mcp/clerk-mcp-server |
| Using Clerk with AI | https://clerk.com/docs/guides/ai/overview |
| Clerk pricing | https://clerk.com/pricing |
| Clerk sign-up | https://dashboard.clerk.com/sign-up |
| Integrate Supabase with Clerk | https://clerk.com/docs/guides/development/integrations/databases/supabase |
| Neon plans | https://neon.com/docs/introduction/plans |
| Neon MCP server | https://neon.com/docs/ai/neon-mcp-server |
| Neon CLI mcp | https://neon.com/docs/cli/mcp |
| Neon scale to zero | https://neon.com/docs/introduction/scale-to-zero |
| Configuring Neon scale to zero | https://neon.com/docs/guides/scale-to-zero-guide |
| Neon sign-up | https://neon.com/signup |
| Stripe MCP | https://docs.stripe.com/mcp |
| Stripe tools README | https://raw.githubusercontent.com/stripe/ai/main/tools/README.md |
| Stripe sign-up | https://dashboard.stripe.com/register |
| Supabase MCP server | https://supabase.com/docs/guides/ai-tools/mcp |
| Supabase pricing | https://supabase.com/pricing |
| Supabase sign-up | https://supabase.com/dashboard/sign-up |

## Daily ingest 2026-11-21 (Resend, Sentry, WorkOS, Upstash Redis)

| Topic | URL |
| --- | --- |
| Resend MCP server | https://resend.com/docs/mcp-server |
| Resend pricing | https://resend.com/docs/knowledge-base/what-is-resend-pricing |
| Resend account quotas and limits | https://resend.com/docs/knowledge-base/account-quotas-and-limits |
| Resend add a domain | https://resend.com/docs/add-a-domain |
| Resend create API key | https://resend.com/docs/api-reference/api-keys/create-api-key |
| Resend sign-up | https://resend.com/signup |
| Resend n8n integration (test domain) | https://resend.com/docs/knowledge-base/n8n-integration |
| Sentry pricing | https://sentry.io/pricing/ |
| Sentry pricing and billing | https://docs.sentry.io/pricing/ |
| Sentry error quota | https://docs.sentry.io/pricing/quotas/manage-event-stream-guide/ |
| Sentry Seer | https://docs.sentry.io/product/ai-in-sentry/seer/ |
| Sentry agent setup | https://docs.sentry.io/ai/agent-setup/get-started/ |
| Sentry MCP | https://mcp.sentry.dev/ |
| Sentry CLI mcp | https://cli.sentry.dev/commands/mcp/ |
| Sentry sign-up | https://sentry.io/signup/ |
| Sentry Cursor Agent integration | https://docs.sentry.io/integrations/coding-agents/cursor/ |
| WorkOS MCP server | https://workos.com/docs/mcp |
| WorkOS management MCP blog | https://workos.com/blog/management-mcp-server |
| AuthKit for MCP | https://workos.com/docs/authkit/mcp |
| WorkOS pricing | https://workos.com/pricing |
| WorkOS sign-up | https://workos.com/signup |
| Upstash account MCP | https://upstash.com/docs/agent-resources/mcp |
| Upstash Redis MCP | https://upstash.com/docs/redis/sdks/mcp |
| Upstash Redis REST API | https://upstash.com/docs/redis/features/restapi |
| Upstash Redis pricing | https://upstash.com/pricing/redis |
| Upstash console | https://console.upstash.com/ |

## Daily ingest 2026-11-22 (PostHog, Linear MCP, Datadog, Convex)

| Topic | URL |
| --- | --- |
| PostHog MCP | https://posthog.com/docs/model-context-protocol |
| PostHog MCP FAQ | https://posthog.com/docs/model-context-protocol/faq |
| PostHog pricing | https://posthog.com/pricing |
| PostHog US sign-up | https://us.posthog.com/signup |
| PostHog EU sign-up | https://eu.posthog.com/signup |
| Linear MCP server | https://linear.app/docs/mcp |
| AI at Linear | https://linear.app/docs/ai-at-linear |
| Linear sign-up | https://linear.app/signup |
| Datadog MCP Server | https://docs.datadoghq.com/mcp_server/ |
| Set up the Datadog MCP Server | https://docs.datadoghq.com/mcp_server/setup/ |
| Datadog MCP access control | https://docs.datadoghq.com/account_management/rbac/mcp_access/ |
| Datadog free trial | https://www.datadoghq.com/free-datadog-trial/ |
| Datadog sign-up | https://app.datadoghq.com/signup |
| Convex MCP server | https://docs.convex.dev/ai/convex-mcp-server |
| npx convex mcp | https://docs.convex.dev/cli/reference/mcp |
| Convex limits | https://docs.convex.dev/production/state/limits |
| Convex pricing | https://www.convex.dev/pricing |
| Using Codex with Convex | https://docs.convex.dev/ai/using-codex |
| Convex sign-up | https://www.convex.dev/signup |

## Daily ingest 2026-11-22 (Turso, PlanetScale, MongoDB Atlas)

| Topic | URL |
| --- | --- |
| Turso Cloud | https://docs.turso.tech/turso-cloud |
| Turso SDKs | https://docs.turso.tech/sdk/introduction |
| Turso MCP | https://docs.turso.tech/integrations/mcp |
| Turso pricing | https://turso.tech/pricing.md |
| Recover deleted Turso databases | https://docs.turso.tech/features/recover-deleted-databases |
| Turso sign-up | https://app.turso.tech/signup |
| PlanetScale plans | https://planetscale.com/docs/planetscale-plans |
| PlanetScale pricing | https://planetscale.com/pricing.md |
| PlanetScale billing | https://planetscale.com/docs/billing |
| PlanetScale MCP | https://planetscale.com/docs/mcp-server |
| PlanetScale MCP service tokens | https://planetscale.com/docs/mcp/service-token |
| PlanetScale sign-up | https://auth.planetscale.com/sign-up |
| MongoDB MCP server overview | https://www.mongodb.com/docs/mcp-server/overview/ |
| MongoDB MCP access models | https://www.mongodb.com/docs/mcp-server/remote-mcp/access-models/ |
| MongoDB managed MCP rate limits | https://www.mongodb.com/docs/mcp-server/remote-mcp/rate-limits/ |
| Atlas Free cluster limits | https://www.mongodb.com/docs/atlas/reference/free-shared-limitations/ |
| Get started with the MongoDB MCP server | https://www.mongodb.com/docs/mcp-server/get-started/ |
| MongoDB pricing | https://www.mongodb.com/pricing |
| Atlas registration | https://www.mongodb.com/cloud/atlas/register |
| MongoDB Atlas product page | https://www.mongodb.com/products/platform/atlas-database |

## Daily ingest 2026-11-22 (Railway, Fly.io, Cloudflare R2)

| Topic | URL |
| --- | --- |
| Railway MCP server | https://docs.railway.com/ai/mcp-server |
| Railway pricing | https://docs.railway.com/pricing |
| Railway pricing plans | https://docs.railway.com/pricing/plans |
| Railway Free plan | https://docs.railway.com/pricing/free-plan |
| Railway | https://railway.com/ |
| Fly MCP | https://fly.io/mcp/ |
| Fly.io pricing | https://fly.io/pricing/ |
| Fly.io resource pricing | https://docs.fly.io/about/pricing |
| Fly.io Free plan | https://docs.fly.io/about/free-plan |
| Sign up and sign in to Fly.io | https://docs.fly.io/getting-started/sign-up-sign-in |
| Fly.io sign-up | https://fly.io/app/sign-up |
| Cloudflare R2 overview | https://developers.cloudflare.com/r2/ |
| R2 pricing | https://developers.cloudflare.com/r2/pricing/ |
| R2 limits | https://developers.cloudflare.com/r2/platform/limits/ |
| R2 authentication | https://developers.cloudflare.com/r2/api/tokens/ |
| R2 troubleshooting | https://developers.cloudflare.com/r2/platform/troubleshooting/ |
| Cloudflare R2 | https://www.cloudflare.com/products/r2/ |
| Cloudflare sign-up | https://dash.cloudflare.com/sign-up |
| Cloudflare Agents | https://developers.cloudflare.com/agents/ |
| Vercel sign-up | https://vercel.com/signup |
| Vercel Sandbox | https://vercel.com/docs/sandbox |
| Vercel | https://vercel.com/ |

## Daily ingest 2026-11-22 (Statsig, Svix, Deepgram, Standard Webhooks)

| Topic | URL |
| --- | --- |
| Statsig MCP overview | https://docs.statsig.com/integrations/mcp/overview |
| Statsig MCP manual setup | https://docs.statsig.com/integrations/mcp/manual-setup |
| Statsig MCP V3 tool reference | https://docs.statsig.com/integrations/mcp/tool-reference |
| Self-serve RBAC for Statsig MCP | https://www.statsig.com/updates/update/self-serve-rbac-mcp |
| Statsig pricing | https://www.statsig.com/pricing |
| Statsig sign-up | https://console.statsig.com/sign_up |
| Svix quickstart | https://docs.svix.com/quickstart |
| Svix API keys | https://docs.svix.com/api-keys |
| Svix pricing | https://www.svix.com/pricing/ |
| Svix retry schedule | https://docs.svix.com/retries |
| Svix idempotency | https://docs.svix.com/idempotency |
| Svix Dashboard MCP | https://docs.svix.com/ai/dashboard-mcp |
| Svix Consumer App Portal MCP | https://docs.svix.com/ai/app-portal-mcp |
| Svix connecting a coding agent | https://docs.svix.com/receiving/using-app-portal/connecting-your-coding-agent |
| Svix member access | https://docs.svix.com/account/org-members |
| Svix FAQ | https://docs.svix.com/faq |
| Svix sign-up | https://dashboard.svix.com/signup |
| Deepgram speech-to-text getting started | https://developers.deepgram.com/docs/stt/getting-started |
| Deepgram model options | https://developers.deepgram.com/docs/model |
| Deepgram authenticating | https://developers.deepgram.com/guides/fundamentals/authenticating |
| Deepgram API keys | https://developers.deepgram.com/docs/create-additional-api-keys |
| Deepgram API rate limits | https://developers.deepgram.com/reference/api-rate-limits |
| Deepgram concurrency | https://developers.deepgram.com/docs/working-with-concurrency-rate-limits |
| Deepgram pricing | https://deepgram.com/pricing |
| Deepgram sign-up | https://console.deepgram.com/signup |
| Standard Webhooks specification | https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md |
| Standard Webhooks | https://www.standardwebhooks.com/ |

## Daily ingest 2026-11-23 (Algolia, Infisical, QStash)

| Topic | URL |
| --- | --- |
| Algolia MCP servers | https://www.algolia.com/doc/guides/model-context-protocol |
| Algolia Public MCP | https://www.algolia.com/doc/guides/model-context-protocol/public-mcp |
| Algolia API keys | https://www.algolia.com/doc/guides/security/api-keys |
| Algolia pricing | https://www.algolia.com/pricing |
| How am I billed on the Grow plan? | https://support.algolia.com/hc/en-us/articles/15745996583441-How-am-I-billed-on-the-Grow-plan |
| Algolia sign-up | https://dashboard.algolia.com/users/sign_up |
| Algolia | https://www.algolia.com/ |
| Agent Vault overview | https://infisical.com/docs/documentation/platform/agent-vault/overview |
| Why Agent Vault | https://infisical.com/docs/documentation/getting-started/choose-a-product/agent-vault |
| Agent Vault projects | https://infisical.com/docs/documentation/platform/agent-vault/projects |
| Infisical pricing | https://infisical.com/pricing |
| Infisical MCP server README | https://github.com/Infisical/infisical-mcp-server/blob/main/README.md |
| Infisical sign-up | https://app.infisical.com/signup |
| Infisical | https://infisical.com/ |
| QStash getting started | https://upstash.com/docs/qstash/overall/getstarted |
| Verify QStash signatures | https://upstash.com/docs/qstash/howto/signature |
| QStash retry | https://upstash.com/docs/qstash/features/retry |
| QStash flow control | https://upstash.com/docs/qstash/features/flowcontrol |
| QStash pricing | https://upstash.com/pricing/qstash |
| QStash | https://upstash.com/qstash |
| Upstash console | https://console.upstash.com/ |

## Daily ingest 2026-11-23 (Better Auth, ClickHouse Cloud, Twilio)

| Topic | URL |
| --- | --- |
| Better Auth installation | https://better-auth.com/docs/installation |
| Better Auth options | https://better-auth.com/docs/reference/options |
| Better Auth security | https://better-auth.com/docs/reference/security |
| Better Auth Infrastructure | https://better-auth.com/docs/infrastructure/introduction |
| Better Auth pricing | https://better-auth.com/pricing |
| Better Auth email service | https://better-auth.com/docs/infrastructure/services/email |
| Better Auth | https://better-auth.com/ |
| ClickHouse Cloud pricing | https://clickhouse.com/pricing |
| ClickHouse Cloud pricing (markdown) | https://clickhouse.com/pricing.md |
| ClickHouse Cloud billing overview | https://clickhouse.com/docs/products/cloud/reference/billing/billing-overview |
| ClickHouse automatic idling | https://clickhouse.com/docs/products/cloud/features/autoscaling/idling |
| ClickHouse remote MCP | https://clickhouse.com/docs/products/cloud/features/ai-ml/remote-mcp |
| ClickHouse Cloud sign-up | https://console.clickhouse.cloud/signUp |
| ClickHouse | https://clickhouse.com/ |
| Twilio trial account | https://www.twilio.com/docs/usage/trials |
| Get started with your Twilio free trial account | https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account |
| Requests to Twilio | https://www.twilio.com/docs/usage/requests-to-twilio |
| A2P 10DLC registration application quickstart | https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/quickstart |
| Twilio MCP server | https://www.twilio.com/docs/ai/mcp |
| Twilio sign-up | https://www.twilio.com/try-twilio |
| Twilio | https://www.twilio.com/ |

## Daily ingest 2026-11-23 (Render, Polar, Checkly)

| Topic | URL |
| --- | --- |
| Render MCP server | https://render.com/docs/mcp-server |
| Deploy for free | https://render.com/docs/free |
| Render pricing | https://render.com/pricing |
| Render sign-up | https://dashboard.render.com/register |
| Render | https://render.com/ |
| Polar introduction | https://polar.sh/docs/introduction |
| Polar MCP | https://polar.sh/docs/integrate/mcp |
| Polar pricing | https://polar.sh/docs/merchant-of-record/fees |
| Polar sandbox | https://polar.sh/docs/integrate/sandbox |
| Polar auth.md | https://polar.sh/auth.md |
| Polar sign-up | https://polar.sh/signup |
| Polar | https://polar.sh/ |
| Checkly MCP server | https://www.checklyhq.com/docs/ai/mcp-server/ |
| Set up the Checkly MCP server | https://www.checklyhq.com/docs/ai/mcp-server/setup/ |
| Checkly pricing | https://www.checklyhq.com/pricing/ |
| Checkly pricing (markdown) | https://www.checklyhq.com/pricing.md |
| Checkly usage and check runs | https://www.checklyhq.com/docs/admin/usage/ |
| Checkly plan changes and billing | https://www.checklyhq.com/docs/admin/billing/ |
| Checkly create a browser check | https://www.checklyhq.com/docs/api-reference/checks/create-a-browser-check/ |
| Checkly sign-up | https://app.checklyhq.com/signup/ |
| Checkly | https://www.checklyhq.com/ |

## Daily ingest 2026-11-23 (Paddle, MotherDuck, LaunchDarkly, Claude Code 2.1.331)

| Topic | URL |
| --- | --- |
| Paddle MCP server | https://developer.paddle.com/sdks/ai/paddle-mcp/ |
| Connect the live Paddle MCP server with OAuth | https://developer.paddle.com/changelog/2026/paddle-mcp-oauth/ |
| Paddle go-live checklist | https://developer.paddle.com/build/go-live-checklist/ |
| Paddle pricing | https://www.paddle.com/pricing |
| Paddle sign-up | https://login.paddle.com/signup |
| Paddle | https://www.paddle.com/ |
| MotherDuck MCP setup | https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/mcp-setup/ |
| MotherDuck MCP access token | https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/connect-with-access-token/ |
| MotherDuck read-only MCP | https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/securing-read-only-access/ |
| MotherDuck pricing | https://motherduck.com/docs/about-motherduck/billing/pricing/ |
| MotherDuck agent account signup | https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-account-signup/ |
| MotherDuck | https://motherduck.com/ |
| MotherDuck app | https://app.motherduck.com/ |
| LaunchDarkly hosted MCP server | https://launchdarkly.com/docs/home/getting-started/mcp-hosted |
| Get started with LaunchDarkly | https://launchdarkly.com/docs/home/getting-started |
| Joining a LaunchDarkly account | https://launchdarkly.com/docs/home/getting-started/join-account |
| LaunchDarkly pricing | https://launchdarkly.com/pricing/ |
| LaunchDarkly sign-up | https://app.launchdarkly.com/signup |
| LaunchDarkly | https://launchdarkly.com/ |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Claude Code 2.1.331 | https://github.com/anthropics/claude-code/releases/tag/v2.1.331 |
| Claude Code Code Mode | https://code.claude.com/docs/en/code-mode |
| Claude Code plugin install | https://code.claude.com/docs/en/plugins/install |
| Claude Code plugins overview | https://code.claude.com/docs/en/plugins/overview |

## Daily ingest 2026-11-24 (Loops, Typesense Cloud, Axiom, Codex 0.172.0)

| Topic | URL |
| --- | --- |
| Loops MCP server | https://loops.so/docs/mcp-server |
| Loops API introduction | https://loops.so/docs/api-reference/intro |
| Loops pricing | https://loops.so/pricing |
| Loops billing | https://loops.so/docs/account/billing |
| Loops transactional email | https://loops.so/docs/transactional |
| Send a Loops transactional email | https://loops.so/docs/api-reference/send-transactional-email |
| Loops double opt-in | https://loops.so/docs/contacts/double-opt-in |
| Loops DNS zone file export | https://loops.so/docs/deliverability/dns-zone-file-export |
| Loops sign-up | https://app.loops.so/register |
| Loops | https://loops.so/ |
| Typesense Cloud MCP server | https://typesense.org/docs/guide/typesense-cloud/mcp-server.html |
| Typesense Cloud free tier | https://cloud-help.typesense.org/article/how-does-the-free-tier-work |
| Typesense Cloud billing process | https://cloud-help.typesense.org/article/billing-process |
| Typesense Cloud rate limits | https://typesense.org/docs/cloud-management-api/v1/rate-limits.html |
| Typesense Cloud sign-up | https://cloud.typesense.org/signup |
| Typesense Cloud | https://cloud.typesense.org/ |
| Typesense | https://typesense.org/ |
| Axiom MCP server | https://axiom.co/docs/console/intelligence/mcp-server |
| Axiom agent-created organizations | https://axiom.co/docs/console/intelligence/agent-created-orgs |
| Axiom query cost limits | https://axiom.co/docs/console/intelligence/query-cost-limits |
| Axiom limits | https://axiom.co/docs/reference/limits |
| Axiom pricing | https://axiom.co/pricing |
| Axiom sign-up | https://app.axiom.co/register |
| Axiom | https://axiom.co/ |
| Codex CLI 0.172.0 | https://github.com/openai/codex/releases/tag/rust-v0.172.0 |
| Enable lazy startup for stdio MCP servers by default | https://github.com/openai/codex/pull/62366 |
| ChatGPT and Codex changelog | https://learn.chatgpt.com/docs/changelog |

## Daily ingest 2026-11-24 (Honeycomb, Meilisearch Cloud, Netlify)

| Topic | URL |
| --- | --- |
| Connect to Honeycomb MCP | https://docs.honeycomb.io/integrations/mcp/configuration-guide |
| Honeycomb MCP tools | https://docs.honeycomb.io/integrations/mcp/tools |
| Troubleshooting Honeycomb MCP | https://docs.honeycomb.io/integrations/mcp/troubleshooting |
| Manage team API keys | https://docs.honeycomb.io/configure/teams/manage-api-keys |
| How Honeycomb calculates usage | https://docs.honeycomb.io/get-started/manage-costs/how-honeycomb-calculates-usage |
| 2026 Pro plan changes | https://docs.honeycomb.io/get-started/honeycomb/2026-pro-plan-changes |
| Honeycomb pricing | https://www.honeycomb.io/pricing |
| Sign up for Honeycomb | https://docs.honeycomb.io/get-started/create-account |
| Honeycomb | https://www.honeycomb.io/ |
| Meilisearch MCP | https://www.meilisearch.com/docs/getting_started/integrations/mcp |
| Meilisearch experimental features | https://www.meilisearch.com/docs/capabilities/platform/management/experimental_features |
| Meilisearch pricing model | https://www.meilisearch.com/docs/capabilities/platform/billing/pricing_model |
| Create a Meilisearch project | https://www.meilisearch.com/docs/capabilities/platform/infrastructure/create_a_project |
| Meilisearch billing overview | https://www.meilisearch.com/docs/capabilities/platform/billing/overview |
| Meilisearch first project | https://www.meilisearch.com/docs/getting_started/first_project |
| Meilisearch FAQ | https://www.meilisearch.com/docs/resources/help/faq |
| Meilisearch known limitations | https://www.meilisearch.com/docs/resources/help/known_limitations |
| Meilisearch pricing | https://www.meilisearch.com/pricing |
| Meilisearch | https://www.meilisearch.com/ |
| Authenticating AI agents with Netlify | https://www.netlify.com/auth.md |
| Netlify agent setup overview | https://docs.netlify.com/build/build-with-ai/agent-setup-guides/agent-setup-overview/ |
| Netlify credit-based pricing plans | https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/ |
| How Netlify credits work | https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/ |
| Resume paused Netlify projects | https://docs.netlify.com/manage/accounts-and-billing/billing/resume-paused-projects/ |
| Netlify credit-based billing FAQ | https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/ |
| Netlify Agent Runners overview | https://docs.netlify.com/build/build-with-ai/agent-runners/overview/ |
| Netlify pricing | https://www.netlify.com/pricing/ |
| Netlify | https://www.netlify.com/ |

## Daily ingest 2026-11-24 (Grafana Cloud, Auth0, Logfire)

| Topic | URL |
| --- | --- |
| Grafana Cloud MCP server | https://grafana.com/docs/grafana-cloud/ai-tools/mcp-servers/cloud-mcp/ |
| Grafana Assistant pricing | https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/assistant/ |
| Grafana Cloud pricing | https://grafana.com/pricing/ |
| Grafana Cloud logs pricing | https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/logs/ |
| Grafana Cloud traces pricing | https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/traces/ |
| Grafana Cloud metrics pricing | https://grafana.com/docs/grafana-cloud/platform/pricing-and-usage/metrics/ |
| Create a Grafana Cloud account | https://grafana.com/auth/sign-up/create-user |
| Grafana Cloud | https://grafana.com/products/cloud/ |
| Auth0 MCP server | https://auth0.com/docs/get-started/auth0-mcp-server |
| Getting started with the Auth0 MCP server | https://auth0.com/docs/get-started/auth0-mcp-server/getting-started-with-auth0-mcp-server |
| Auth0 MCP tools reference | https://auth0.com/docs/get-started/auth0-mcp-server/auth0-mcp-tools-reference |
| Auth0 MCP server repository | https://github.com/auth0/auth0-mcp-server |
| Auth0 pricing | https://auth0.com/pricing.md |
| Auth0 Free plan rate limits | https://auth0.com/docs/troubleshoot/customer-support/operational-policies/rate-limit-policy/rate-limit-configurations/free-public |
| Auth0 rate limit policy | https://auth0.com/docs/troubleshoot/customer-support/operational-policies/rate-limit-policy |
| Auth for MCP | https://auth0.com/ai/docs/mcp/overview |
| Sign up for Auth0 | https://auth0.com/signup |
| Auth0 | https://auth0.com/ |
| Logfire MCP server | https://pydantic.dev/docs/logfire/guides/mcp-server/ |
| Logfire query limits | https://pydantic.dev/docs/logfire/reference/query-limits/ |
| Logfire pricing | https://pydantic.dev/pricing |
| Sign up for Logfire | https://pydantic.dev/signup |
| Pydantic Logfire | https://pydantic.dev/logfire |
| Pydantic AI installation | https://pydantic.dev/docs/ai/overview/install/ |
| Pydantic AI overview | https://pydantic.dev/docs/ai/overview/ |
| Langfuse Cloud sign-up | https://cloud.langfuse.com/auth/sign-up |
| Get started with Langfuse tracing | https://langfuse.com/docs/observability/get-started |
| Langfuse | https://langfuse.com/ |
| Braintrust sign-up | https://www.braintrust.dev/signup |
| Braintrust docs | https://docs.braintrust.dev/ |
| Braintrust | https://www.braintrust.dev/ |

## Daily ingest 2026-11-24 (Knock, Unkey, Orb)

| Topic | URL |
| --- | --- |
| Knock MCP server | https://docs.knock.app/ai/mcp-server |
| Knock service tokens | https://docs.knock.app/developer-tools/service-tokens |
| Knock plans and usage | https://docs.knock.app/manage-your-account/knock-plans |
| Knock environments | https://docs.knock.app/version-control/environments |
| Knock pricing | https://knock.app/pricing |
| Knock sign-up | https://dashboard.knock.app/signup |
| Knock | https://knock.app/ |
| Unkey MCP servers | https://www.unkey.com/docs/platform/ai-coding/mcp-servers |
| Unkey limits | https://www.unkey.com/docs/platform/billing/limits |
| Issue and verify your first Unkey key | https://www.unkey.com/docs/api-management/get-started/quickstart |
| Unkey verify API key | https://www.unkey.com/docs/platform/api-reference/keys/verify-api-key |
| Unkey insufficient_permissions | https://www.unkey.com/docs/errors/unkey/authorization/insufficient_permissions |
| Unkey changelog, 2026-11-20 | https://www.unkey.com/changelog/2026-11-20 |
| Unkey pricing | https://www.unkey.com/pricing |
| Unkey sign-up | https://app.unkey.com/auth/sign-up |
| Unkey | https://www.unkey.com/ |
| Orb MCP server | https://docs.withorb.com/api-reference/mcp-server |
| Orb core concepts | https://docs.withorb.com/core-concepts |
| Orb ingest events | https://docs.withorb.com/api-reference/event/ingest-events |
| Orb backfill and amend events | https://docs.withorb.com/events-and-metrics/reporting-errors |
| Orb invoice issuance | https://docs.withorb.com/invoicing/invoice-issuance |
| Orb request idempotency | https://docs.withorb.com/api-reference/idempotency |
| Orb pricing | https://www.withorb.com/pricing |
| Orb credit consumption | https://www.withorb.com/pricing/consumption-table |
| Orb sign-up | https://app.withorb.com/signup |
| Orb | https://www.withorb.com/ |

## Daily ingest 2026-11-25 (Sanity, GrowthBook, Postmark, Claude Code 2.1.332)

| Topic | URL |
| --- | --- |
| Sanity MCP server | https://www.sanity.io/docs/ai/mcp-server |
| Context MCP reference | https://www.sanity.io/docs/context/mcp-reference |
| How AI credits work | https://www.sanity.io/docs/platform-management/how-ai-credits-work |
| Plans and payments | https://www.sanity.io/docs/platform-management/plans-and-payments |
| Understanding quotas | https://www.sanity.io/docs/help/understanding-quotas |
| Sanity pricing | https://www.sanity.io/pricing |
| Get started with Sanity | https://www.sanity.io/get-started |
| Sanity | https://www.sanity.io/ |
| Official GrowthBook MCP server | https://docs.growthbook.io/integrations/mcp |
| Connect AI agents to GrowthBook | https://docs.growthbook.io/integrations/ai-agents |
| GrowthBook pricing | https://www.growthbook.io/pricing |
| Get started with GrowthBook | https://www.growthbook.io/get-started |
| GrowthBook | https://www.growthbook.io/ |
| Postmark API overview | https://postmarkapp.com/developer/api/overview |
| Account and server API tokens | https://postmarkapp.com/support/article/1008-what-are-the-account-and-server-api-tokens |
| Account approval | https://postmarkapp.com/support/article/1084-how-does-the-account-approval-process-work |
| Server sandbox mode | https://postmarkapp.com/developer/user-guide/sandbox-mode/server-sandbox-mode/ |
| Message streams | https://postmarkapp.com/message-streams |
| Bulk email | https://postmarkapp.com/developer/api/bulk-email |
| Postmark pricing | https://postmarkapp.com/pricing |
| Sign up for Postmark | https://account.postmarkapp.com/sign_up |
| Postmark | https://postmarkapp.com/ |
| Postmark developer docs | https://postmarkapp.com/developer |
| Claude Code changelog | https://code.claude.com/docs/en/changelog |
| Claude Code 2.1.332 | https://github.com/anthropics/claude-code/releases/tag/v2.1.332 |

## Daily ingest 2026-11-25 (fal, Cartesia, Liveblocks)

| Topic | URL |
| --- | --- |
| fal Model API pricing | https://fal.ai/docs/documentation/model-apis/pricing |
| fal Model API FAQ | https://fal.ai/docs/documentation/model-apis/faq |
| fal concurrency limits | https://fal.ai/docs/documentation/model-apis/concurrency-limits |
| Get your fal API key | https://fal.ai/docs/documentation/setting-up/authentication |
| fal accounts and identity | https://fal.ai/docs/documentation/setting-up/accounts-and-identity |
| fal key-based authentication | https://fal.ai/docs/documentation/model-apis/authentication/key-based |
| fal MCP server | https://fal.ai/mcp |
| Login to fal | https://fal.ai/login |
| fal | https://fal.ai/ |
| fal documentation | https://fal.ai/docs/documentation |
| Cartesia pricing | https://www.cartesia.ai/pricing |
| How Cartesia charges | https://docs.cartesia.ai/pricing |
| Cartesia API conventions | https://docs.cartesia.ai/use-the-api/api-conventions |
| Cartesia concurrency and timeouts | https://docs.cartesia.ai/use-the-api/concurrency-limits-and-timeouts |
| Sonic 3.6 | https://docs.cartesia.ai/build-with-cartesia/tts-models/latest |
| Text-to-speech bytes | https://docs.cartesia.ai/api-reference/tts/bytes |
| Generate an access token | https://docs.cartesia.ai/api-reference/auth/access-token |
| Cartesia MCP | https://docs.cartesia.ai/tools/ai/mcp |
| Line agent concurrency | https://docs.cartesia.ai/line/infrastructure/scaling |
| Cartesia sign-up | https://play.cartesia.ai/sign-up |
| Cartesia | https://www.cartesia.ai/ |
| Cartesia overview | https://docs.cartesia.ai/get-started/overview |
| Liveblocks pricing | https://liveblocks.io/pricing |
| Liveblocks plans | https://liveblocks.io/docs/pricing/plans |
| Liveblocks pricing FAQ | https://liveblocks.io/docs/pricing/faqs |
| Liveblocks MCP server | https://liveblocks.io/docs/tools/mcp-server |
| liveblocks-mcp-server README | https://github.com/liveblocks/liveblocks-mcp-server/blob/main/README.md |
| Create a Liveblocks account | https://liveblocks.io/docs/platform/account-management/create-an-account |
| Liveblocks projects | https://liveblocks.io/docs/platform/projects |
| Liveblocks REST API | https://liveblocks.io/docs/api-reference/rest-api-endpoints |
| Liveblocks sign-up | https://liveblocks.io/signup |
| Liveblocks | https://liveblocks.io/ |
| Liveblocks docs | https://liveblocks.io/docs |


