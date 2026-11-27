---
name: finish-branch
description: Verify a development branch, reviews, checks, and handoff before an authorized integration.
disable-model-invocation: true
---

# Finish a branch

Inspect the actual diff, current head, intended base and worktree state. Run relevant project checks; report any skipped or failing check. Confirm the review and required CI correspond to the current head, including merge-queue checks where applicable. Prepare a concise change summary and handoff. Push, create or merge a PR, or delete a branch only when authorized; never bypass protections or force-update someone else's work.
