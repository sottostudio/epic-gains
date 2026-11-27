---
name: bootstrap-saas
description: Interview and guide new or existing projects through workflow, tool, and connection setup.
disable-model-invocation: true
---

# Guided project setup

Read `../../docs/saas-playbook.md`, `../../docs/operating-rhythm.md`, `../../docs/connections.md`, `../../docs/toolbox.md`, and `../../templates/README.md`, resolving paths relative to this skill file. Inspect existing project instructions, repository, branch and working state; preserve existing work. Ask whether this is a new project or an existing build adopting the plugin partway through. If the answer is already clear, confirm it rather than repeating known facts.

## Interview

Map the interview as a decision tree. In each round, ask every decision whose prerequisites are settled, number the questions, give a recommended answer, and word each so "yes" accepts the recommendation. Wait for answers before asking decisions that depend on them. Cover the product outcome, users, first milestone, scope, constraints, architecture, environments, owners, available services, and approval boundaries. Check files and available read-only evidence for facts before asking. Distinguish confirmed answers, assumptions and unresolved choices. When all decisions are settled, summarize the proposed setup and get confirmation before implementing it. Follow the host's supported question mechanism and higher-priority instructions.

Do not invent product requirements. This starter describes how to build, not what to build: never import the previous product's features, business rules or private data.

For a **new project**, identify what already exists and what the user wants to build before recommending project structure or integrations. For an **existing build**, inspect its current instructions, code structure, tools, services, work state and checks first. Compare the existing workflow to the starter, show differences and risks, and let the user choose what to adopt. Do not overwrite or replace existing decisions, files, branches or integrations.

## Tools, connections and workflow

Recommend only tools and connections relevant to the approved plan. Distinguish executable availability from version, authentication, account, project, permissions and actual readiness. Use the included `../../scripts/check-tools.mjs` as an optional local availability check; it does not run tools or access credentials. For each missing capability, explain purpose, install or authentication prerequisites, cost/privacy considerations, read-only verification and potential impact. Follow current vendor documentation. Obtain explicit approval before each install, authentication, account/project link, repository setting, or hosted-service change. Never request that credentials be pasted into chat or files.

Prepare a project charter, branch map, session briefs, real validation commands, model policy, issue/knowledge workflow, review requirements, and queue adoption plan. Assign one head session and independently owned product sessions when the host supports them; otherwise prepare manual handoffs. Plan direct product-branch development, precheck and independent review, a consolidated PR, and merge-queue verification where the user adopts that workflow. Make clear what is configured, unverified, blocked, or deliberately deferred. A plugin does not create sessions, configure services or enforce GitHub protections.

## Review and record

Show the proposed changes, commands and remaining gaps. Obtain approval before writing any target-project files; preserve existing content and use targeted changes. Adapt `../../templates/setup-record.md` as `.workflow/setup.md` in the target project only when authorized. Include no credentials, account IDs or private data. Only after the user reviews and approves the setup and remaining gaps are recorded, use `<!-- workflow-setup: complete -->` as the first line. An existing complete record must be updated, not overwritten, with approval. The marker only suppresses the startup reminder; it does not certify integrations.

Never push, merge, deploy, provision infrastructure or change live services merely because setup was invoked. Report what actually changed, what remains unconfigured, and the next safe action.
