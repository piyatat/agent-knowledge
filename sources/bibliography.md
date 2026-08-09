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
