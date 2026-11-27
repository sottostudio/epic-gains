---
name: workflow-status
description: Produce a read-only workflow status digest covering tasks, checks, handoffs, blockers, and approvals.
disable-model-invocation: true
---

# Workflow status

Use the project-selected sources and only authorized read access to summarize current lanes, open work, checks, waiting work, and requested approvals. Verify live status where available and label stale or inaccessible information. Surface blockers first. Never retrieve secret values or infer approval from a status record. This is a text digest, not a live dashboard; do not mutate services or notify others unless requested.
