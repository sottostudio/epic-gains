---
name: worktree
description: Plan and use a Git worktree for isolated development without disturbing existing branches or uncommitted changes.
disable-model-invocation: true
---

# Worktree

Check whether the current environment already supplies isolation and inspect branch and dirty state before changing anything. Follow the user's and project's worktree and branch rules; do not create or remove a worktree merely because this skill is invoked. When creation is authorized, choose an unused path and branch, confirm that a worktree directory inside the repository is ignored, and use Git's worktree commands. Never overwrite another checkout or delete uncommitted work. Verify the resulting branch and status. Install dependencies only when required and authorized by project rules.
