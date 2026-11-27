# Development workflow

## Start and scope

Read project instructions, the task, relevant code and tests, and the current branch and dirty state. Identify acceptance criteria and dependencies. Check only tools needed for the work. For a multi-step change, keep a concise plan and record decisions in the team's chosen durable location.

## Build and validate

Use small, coherent changes. Prefer existing patterns. Test the behavior changed, run targeted lint/type/build/test checks, and broaden checks for high-risk changes. Do not claim a green gate until the actual run finishes. If selective tests are uncertain, run the broader suite rather than silently skipping coverage.

## Review and integrate

Inspect the diff and independently review high-risk work, especially workflow definitions, permissions, secrets, authentication, payment paths, migrations, and deployment automation. Keep one issue per small, observable change when a team uses issues; keep broader plans, decisions, waiting work, and handoffs in the team's chosen knowledge base. Link them without duplicating sensitive data.

Open or merge a PR only when authorized. Preserve required checks and branch protections. If a GitHub merge queue is used, required workflows must handle `merge_group` as well as pull requests; verify the tested revision and queue result. Never work around a failed gate. State the risk and owner of any blocked approval.

## Finish and resume

Record a brief handoff: outcome, current branch and PRs, checks and failures, pending approvals, and next steps. Keep credentials and personal data out. A handoff or prior approval does not authorize a new live change.

## Efficient use

Load only the instructions and files needed. Use targeted searches and tests, parallelize genuinely independent work with bounded assignments where available, and choose a suitable model for the task without hard-coding account-specific tiers. Summarize findings rather than copying long logs, but never filter away errors or hide failing exit codes. Reuse durable project decisions, but verify volatile state and current documentation. Do not trade safety or full required tests for lower usage.
