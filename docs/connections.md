# Connections and CLI setup

Connections are **not configured by this starter**. Use only the services required by the task, authenticate interactively through each vendor's supported flow, and check account, organization, project, and environment before any write. Never paste credentials into prompts, checked-in config, logs, or PRs. Use least privilege, short-lived credentials where available, and a secret manager or CI secret store.

| Tool | Purpose | Read-only first check | Setup reference |
| --- | --- | --- | --- |
| Claude Code | Agent, plugins, and optional MCP clients | `claude --version`; `claude mcp list` | [Setup](https://code.claude.com/docs/en/setup), [MCP](https://code.claude.com/docs/en/mcp) |
| GitHub CLI | Repository, issues, PRs, and checks | `gh auth status`; `gh repo view` in the project | [GitHub CLI](https://cli.github.com/manual/) |
| Vercel CLI | Project and deployment inspection | `vercel --version`; inspect the selected project in the dashboard | [Vercel CLI](https://vercel.com/docs/cli) |
| Supabase CLI | Local development and database migrations | `supabase --version`; inspect the selected project in the dashboard | [Supabase CLI](https://supabase.com/docs/reference/cli/introduction) |
| Notion | Optional durable plans, decisions, handoffs | Verify the intended workspace and read permissions in the connected client | [Notion MCP](https://developers.notion.com/guides/mcp) |

These commands check availability or identity; they do not prove that the correct project, production access, or permissions are configured. CLI installation and login are separate user decisions. Do not run deployment, database push, linking, token creation, or service setup just to test a connection.

This starter documents integrations rather than bundling connections. Vercel and Supabase CLI workflows have not been verified against a live project; follow current vendor docs and verify each setup in the target project. Avoid reading authentication configuration that could expose credentials.

## Claude MCP

MCP is optional and separate from the plugin. Inspect the provider's current official setup, endpoint, permissions, and privacy terms before connecting. For a trusted HTTP endpoint, Claude supports the following pattern (replace placeholders; no credentials in the command):

```sh
claude mcp add --transport http --scope local SERVICE_NAME https://SERVICE_ENDPOINT
claude mcp list
```

Use `/mcp` in Claude Code for connection status and supported interactive authentication. Local, project, and user scopes have different sharing behavior; project scope can create a shared `.mcp.json`, so review it before committing. Do not commit access tokens or environment-specific identifiers. A connected server can expose powerful write tools; review actions and access before using it. Other clients have their own connection and consent flows.

## Environments

Keep local, preview, and production targets distinct. Review database migrations locally and test against an isolated environment before requesting approval for any hosted migration. For Vercel, verify project, environment variables, build and preview before requesting a production release. Prepare verification and rollback before any live change. The project owner, not the plugin, decides when to proceed.

Additional references: [GitHub Actions security](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions), [Vercel environments](https://vercel.com/docs/deployments/environments), [Supabase database migrations](https://supabase.com/docs/guides/deployment/database-migrations).
