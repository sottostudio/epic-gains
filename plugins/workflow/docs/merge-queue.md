# Product integration and merge queue

The target workflow uses owned product branches and a single consolidated PR per ready product branch. A coordinator tracks dependencies, sensitive reviews, required checks and queue state. Nothing in this starter enables auto-merge, branch protection, a queue, or automatic deployments.

## Adopt the gate

1. Define real project precheck, affected tests and full gate commands; add them to CI. The starter's check validates this starter only.
2. With the repository owner's explicit approval, configure branch protection or a ruleset for `main`, required checks and GitHub's merge queue. Confirm plan availability and the repository's actual settings. Configure auto-merge only if desired and permitted.
3. Trigger required workflows on both `pull_request` and `merge_group`. Ensure the required check names are stable and actually emitted on merge-group commits. The queue runs full application checks on the combined revision against the latest base. Test the configuration with an authorized non-production change before relying on it.
4. Record the responsible coordinator, sensitive-review criteria, exception process, and service-specific deployment approvals in project instructions. Queue configuration is enforcement; this plugin's prompts are not.

## Run the loop

1. Verify the PR base, head SHA, issue links, current diff, approvals and checks. Sensitive work (payments, sign-in/access, secrets, migrations) gets an independent review before the first push for review; migrations also get a migration review. Invalidate those reviews after code changes. Resolve findings rather than dismissing them to get green.
2. Enable auto-merge for ordinary PRs when authorized and supported. The coordinator handles enqueueing sensitive or workflow changes after their required review. Review bots may advise but are not a substitute for required human or independent review.
3. Check both PR checks and the queue's merge-group run. If a queue run fails, diagnose its actual failure and fix it. If the branch needs the current base, merge the base into the product branch without rewriting shared history; rerun checks and any required reviews on the resulting head.
4. Confirm the PR actually merged and record the merge commit, checks and any follow-up. Enqueued or auto-merge enabled is not merged. Never disable checks, override protections, or deploy as a workaround.

The source workflow retired its separate merge train, freshness check, and old main gate in favor of the merge queue. Do not recreate them as implied requirements. Post-merge monitoring and deployment gates are project-specific and still need explicit design.

References: [GitHub merge queues](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue) and [`merge_group` event](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#merge_group).
