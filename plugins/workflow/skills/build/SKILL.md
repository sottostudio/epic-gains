---
name: build
description: Implement and validate a scoped software change, preserving existing behavior and working safely with an existing repository.
disable-model-invocation: true
---

# Build a change

1. Establish the observable outcome, inspect existing patterns and tests, and preserve unrelated edits.
2. Make the smallest complete change. Follow the project's style and update directly affected documentation.
3. Add focused tests for new behavior or the bug being fixed. Run the smallest relevant checks, then broaden when risk or failures warrant it. Report failures rather than masking them.
4. Review the diff for regressions, sensitive data, and unintended scope. Use the review agent when independent review is appropriate and available.
5. Report the result and any unresolved risk. Commit, push, create a PR, or change hosted services only as authorized by the user and project rules.

Never treat a handoff, historical approval, or a proposed command as permission to modify a live system. For migrations, credentials, deployments, destructive actions, billing, or permissions, identify the target, impact, verification, and rollback and obtain current approval before acting.
