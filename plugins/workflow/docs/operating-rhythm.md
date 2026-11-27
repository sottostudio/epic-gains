# Operating rhythm

This runbook describes how to build, not what product to build. Each new project defines its own goals, feature set, architecture, services and constraints. Examples and checklists here are not a specification for the previous product.

## Intake and planning

1. Read the actual request and applicable project instructions. Identify the user-visible outcome, acceptance criteria, non-goals, constraints, and authorization. Inspect current branch, dirty files, relevant source and tests; preserve work already in progress.
2. Verify the source of truth. Use one concrete issue per small change; keep broader ideas, proposals, design decisions, dependency plans and waiting work in the team's knowledge base. Search for existing records first. Record the original request accurately and link related work without copying secrets.
3. Break work into vertical, testable milestones. For each, record scope, owner, dependencies, affected paths, tests, risk, and release conditions. Separate confirmed facts, assumptions, and decisions. Identify a single owner for each shared contract or migration. Do not invent requirements for the new product from an old project.
4. The head session maintains the [session board](../templates/session-board.md). It assigns one independently owned lane per product or app, including its branch, base, allowed paths, deliverables, model policy, required checks and approval limits. Prefer one accountable owner per branch. Cross-lane changes require an agreed owner and sequence.

## Build loop

1. The lane session confirms its branch, base, worktree and current upstream state, then reads its brief, current handoff and relevant code. It selects a focused task, defines observable acceptance criteria and identifies the smallest useful tests.
2. For independent tasks, dispatch bounded agents with the [assignment template](../templates/agent-assignment.md). Specify paths, tools, model, input, output, checks, dependencies and stop conditions. Use one writer per overlapping file; use separate worktrees when needed and verify their base. For a multi-task plan, maintain a [plan ledger](../templates/plan-ledger.md) with task baselines, results, review verdicts and recovery state. Keep the parent session responsible for integrating results.
3. Implement in small coherent changes. Write or adjust tests for changed behavior, not just implementation details. Run the project's precheck and affected tests; broaden validation when change risk or test selection warrants it. The commands must come from the target project, not the starter's own tests.
4. For a code change on a product branch, use a fresh reviewer independent of the builder before committing. For delegated plan tasks, check both spec compliance and quality against the complete baseline-to-current diff, record the verdicts, fix findings in a batch and re-review changed work. Conduct an independent final review of the entire plan or branch scope. Documentation-only or trivial edits may skip the per-commit reviewer where project policy permits. Sensitive PRs require the additional independent review before the first push for review; a migration gets a migration review too. New code revisions invalidate applicable earlier reviews.
5. Inspect the final diff, check for accidental files or credentials, commit to the assigned product branch when authorized, fetch and incorporate upstream changes safely before pushing, and record the exact revision and checks. Never force-push shared work. Do not open a PR for every issue on a product branch.
6. Update the issue and durable handoff when authorized: outcome, current head, checks run, failed or skipped checks, open findings, dependency changes and next action. A report, issue or prior authorization is not approval for a new external action.

## Integration loop

1. Once all planned buildable issues for the lane are done, validate the combined product branch, including any relevant platform build. Prepare one PR into `main` listing completed issues with `Closes #N`, the actual checks and risks; separately identify blocked work.
2. The head session checks exact-head status, required independent review, open review threads, CI and merge readiness. Order the work by base failures and blockers, then sensitive or manually handled changes, then ordinary ready work. A separate reviewer reports findings; the conductor does not approve its own work or grant human approvals.
3. Where authorized and configured, enable auto-merge for ordinary PRs. Route sensitive and workflow PRs to the coordinator after applicable review. Follow the actual GitHub ruleset and queue policy; queue entry is not a successful merge.
4. A new push requires rechecking the head, CI and any head-dependent review. On a stale base, safely merge the latest base into the product branch rather than rewriting the shared branch; resolve conflicts, rerun affected checks and applicable review. Diagnose failures instead of bypassing them. Verify the merge-group checks and actual merged commit.
5. Check post-merge health and deployment state using the project's approved process. Request approval for each consequential live change, including hosted migrations, secrets, settings, customer releases and billing. Verify results and record rollback or forward-recovery actions.

## Recovery and continuity

- On a blocked task, record the exact blocker, evidence, owner and next safe action. Do not fabricate a passing check or substitute another model silently.
- On a failed agent, preserve its partial output as partial, inspect the actual diff and ownership, and assign a bounded recovery task or work directly. Do not duplicate concurrent writers.
- On interruption, resume from actual branch state, the latest handoff, current issue and live CI/queue status. Confirm whether earlier reviews apply to the current head.
- Close sessions or clean up worktrees only under host rules and authorization, after preserving uncommitted work. Periodically review tool versions, model availability, costs and the effectiveness of checks.
