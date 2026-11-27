# Development workflow

## Start and scope

Read project instructions, the task, relevant code and tests, and the current branch and dirty state. Identify acceptance criteria and dependencies. Check only tools needed for the work. For a multi-step change, keep a concise plan and record decisions in the team's chosen durable location.

## Build and validate

Use small, coherent changes. Prefer existing patterns. Test the behavior changed, run targeted lint/type/build/test checks, and broaden checks for high-risk changes. Do not claim a green gate until the actual run finishes. If selective tests are uncertain, run the broader suite rather than silently skipping coverage.

For an authorized product lane, work directly on its owned product branch: precheck and affected tests before pushing, a fresh independent reviewer before each code commit, and one consolidated PR to `main` once the planned buildable issues are complete. Keep short-lived branches short, unfinished work off by default, and coordinate shared files with their owner. See [session orchestration](session-orchestration.md).

## Review and integrate

Inspect the diff and independently review sensitive work touching payments, authentication or access, secrets, and migrations before the first push for review. Also use a migration specialist for migrations. Reviewers must be independent of the builder, and a new code revision requires a fresh review when the rule applies. Workflow and CI changes need careful review and coordinator handling, but are not automatically subject to the sensitive-change review-status requirement. Keep one issue per small, observable change when a team uses issues; keep broader plans, decisions, waiting work, and handoffs in the team's chosen knowledge base. Link them without duplicating sensitive data.

Open or merge a PR only when authorized. Preserve required checks and branch protections. For the adopted queue workflow, ordinary PRs use auto-merge where permitted; the coordinator handles sensitive and workflow PRs after their required review. GitHub's queue tests the merge-group commit against the current base and merges only after its required checks succeed. Required workflows must handle `merge_group` as well as pull requests. Check the current head, reviews, required checks, queue result, and merged commit rather than treating enqueue as a merge. If the queue rejects a stale branch, incorporate the current base with a merge commit and repeat affected checks and review; never bypass a failed gate. See [merge queue](merge-queue.md).

## Finish and resume

Record a brief handoff: outcome, current branch and PRs, checks and failures, pending approvals, and next steps. Keep credentials and personal data out. A handoff or prior approval does not authorize a new live change.

## Efficient use

Load only the instructions and files needed. Use targeted searches and tests, parallelize genuinely independent work with bounded assignments where available, and follow the project's [model and usage policy](models-and-usage.md). Summarize findings rather than copying long logs, but never filter away errors or hide failing exit codes. Reuse durable project decisions, but verify volatile state and current documentation. Do not trade safety or full required tests for lower usage.
