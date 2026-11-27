---
name: finish-branch
description: Verify a development branch, reviews, checks, and handoff before an authorized integration.
disable-model-invocation: true
---

# Finish a branch

Inspect the actual diff, current head, intended base and worktree state. Run relevant project checks; report any skipped or failing check. For a product lane, confirm its planned buildable issues are done and prepare one consolidated PR to `main` with closing references and platform-specific validation. Confirm the review and required CI correspond to the current head, including the merge-group checks on the queue's tested revision. If stale, safely merge the base into the product branch and repeat affected checks and reviews. Confirm the actual merged state rather than treating queue entry as success. Prepare a concise change summary and handoff. Push, create or merge a PR, or delete a branch only when authorized; never bypass protections or force-update someone else's work.
