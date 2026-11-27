# Development toolbox

Tools are optional capabilities, not assumed installations or authenticated connections. Run `node scripts/check-tools.mjs --profile all` to inspect executable availability locally without running the tools, making network requests, or reading credentials. Use `--json` for machine-readable output; `--profile core` or another named profile limits the check. Executable presence does not verify version, authentication, permissions, project selection, or functionality.

| Profile | Tools | Typical workflow |
| --- | --- | --- |
| `core` | Git, GitHub CLI, Node.js, ripgrep | Worktree/branch state, issues and PRs, focused checks, code search |
| `ai` | Claude Code, Copilot CLI, Antigravity CLI, Firecrawl, Graphify, Notion CLI | Agent sessions, optional second opinions, research, current code graphs, durable knowledge |
| `cloud` | Vercel, Supabase, Cloudflare CLI/Wrangler, Google Cloud, Stripe, Sentry, 1Password CLI | Inspect only the authorized account and environment; secrets, deploys and hosted changes require explicit approval |
| `quality` | actionlint, zizmor, ShellCheck, Gitleaks, OSV-Scanner, act, hyperfine, Ruff, Pyright | Workflow/shell lint, security checks, optional local Actions, timing, Python checks |
| `data` | jq, yq, DuckDB, pgcli | Structured output and local data inspection; hosted data requires authorization |
| `apple` | xcodebuild, swift, xcrun, SwiftLint, xcbeautify, xcsift, App Store Connect CLI | macOS/iOS builds, tests and read-only release inspection where available |
| `media` | FFmpeg/ffprobe, MediaInfo, ExifTool, scene detection | Local media inspection and processing only when the project needs it |
| `docs` | Pandoc, Graphviz, D2 | Documents and diagrams |

Before using a tool, check the project-specific version and documented commands. Never silently install or upgrade it. Confirm license, cost, data handling and permissions before using hosted AI or research services; do not send private source, credentials, or customer data to an external tool without the applicable authorization and policy. A second opinion is information, not approval. Never use blanket permission-bypass flags as a shortcut.

Use LSP or a current local code graph where available, and fall back to targeted search. Only trust graph results for the revision they represent. Limit context and output without masking errors or exit status; run required full checks when selective coverage is uncertain. Time and optimize actual bottlenecks rather than assuming savings.

For service setup and authorization see [connections](connections.md). For plugin and session capabilities see [plugin](plugin.md) and [session orchestration](session-orchestration.md). Tool availability and external integrations are not verified by this document.
