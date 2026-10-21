---
id: vscode-on-device-models
title: VS Code on-device models — MAI Code 1.1 Flash via llama.cpp
tags: [vscode, models, privacy, cost]
status: active
updated: 2026-10-21
when_to_use: Running Copilot’s MAI Code 1.1 Flash locally in a VS Code Copilot harness, or contrasting it with BYOK Ollama
---

## Summary

**VS Code 1.143** experimental **on-device models** let a **local Copilot harness** session run **MAI Code 1.1 Flash** through **llama.cpp** on your GPU. Copilot downloads and manages the weights. Responses are labeled **On-device** and use **0 AI credits**. Not BYOK/Ollama (no GitHub sign-in), not Copilot CLI local discovery (`github-copilot-cli-local-models`), and not Auto tiers by themselves (`github-copilot-auto-model`).

## Notes

- Requirements: GitHub sign-in with Copilot; Business/Enterprise needs **Editor Preview Features**. Local Copilot harness only (Chat view or Agents window — not Cloud). **NVIDIA GPU ≥ 96 GB VRAM** (unified memory counts). ~**55 GB** disk (download 52.8 GB; setup 54.8 GB — details page shows the exact size). Install llama.cpp yourself; VS Code does **not**. MAI Code 1.1 Flash needs **llama.cpp b11658+**.
- Setup: set machine-scoped `chat.copilot.localModel.llamaServerPath` to the `llama-server` absolute path (VS Code runs only that binary). Enable `chat.copilot.localModel.enabled` (local Copilot runtime restarts after in-flight responses). Model picker → **On This Device** → details (size, Azure ML registry, license) → Download. Pause is allowed; keep using cloud Copilot meanwhile. Weights land in `~/.copilot/azureml-models` and are **shared with other Copilot apps**, including Copilot CLI.
- Chat: after verify/load (can take minutes), switch from the notice or the On This Device tab. Footer shows the model name + **On-device** and **0 credits**. Details: Effort Low/Medium/High; context size from GPU memory (reload after in-flight work). Only **one** on-device model loaded at a time. Palette: `Chat: Set Up / Make Active / Start / Stop / Update / Remove On-Device Model…`.
- Auto: enable **Use in Auto** on the details page or `chat.copilot.localModel.useInAuto`. Router can pick the local model with **cloud fallback before first output**. Many requests still go to cloud. “Too slow for Auto” still allows explicit selection. Local models may **not** use the same safety filters as Copilot cloud models — do not pair with Allow-all / auto-approve on untrusted input (`prompt-injection-agent-defense`).
- Troubleshoot statuses: missing/old llama.cpp, GPU driver, not enough / busy VRAM, already running in another window, disk, download interrupt, **Blocked by policy**. Contrast BYOK: Ollama works signed-out; the built-in Ollama provider is **deprecated** in favor of the Marketplace Ollama extension.

## Sources

- [AI language models in VS Code](https://code.visualstudio.com/docs/agent-customization/language-models) — accessed 2026-10-21
- [Visual Studio Code 1.143](https://code.visualstudio.com/updates/v1_143) — accessed 2026-10-21
- [MAI-Code-1.1-Flash](https://microsoft.ai/news/mai-code-1-1-flash-br-better-faster-at-a-quarter-of-the-cost/) — accessed 2026-10-21
