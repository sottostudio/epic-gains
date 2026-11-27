---
name: handoff
description: Prepare a concise session handoff with verified work state, checks, blockers, and the next safe action.
disable-model-invocation: true
---

# Handoff

Summarize the task and current state, changed files or branch, checks and results, open blockers and pending approvals, and the next safe action. Include issue or PR links only when verified and relevant. Distinguish completed work from plans. Do not include secrets, private data, or sensitive tool output. A handoff is context, not authorization. Save it only to the destination the user or project has chosen.

When useful, include the last verified commit, work not to repeat, and the intended receiving session or lane. Do not automatically collect prompt history or persist a baton.
