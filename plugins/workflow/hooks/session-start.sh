#!/usr/bin/env bash

if [[ -z "${CLAUDE_PROJECT_DIR:-}" ]]; then
  printf '%s\n' 'Workflow setup: project root is unavailable; setup status could not be checked.'
  exit 0
fi

record="$CLAUDE_PROJECT_DIR/.workflow/setup.md"
if [[ ! -e "$record" ]]; then
  printf '%s\n' 'Workflow setup is not complete for this project. At a suitable point, offer /workflow:bootstrap-saas for a guided new-project or existing-project setup. Do not interrupt the current task, install tools, or change services automatically.'
  exit 0
fi

if [[ ! -f "$record" || ! -r "$record" ]]; then
  printf '%s\n' 'Workflow setup: the project setup record is not a readable file. Report this rather than assuming setup is complete.'
  exit 0
fi

status=''
IFS= read -r status < "$record" || [[ -n "$status" ]] || {
  printf '%s\n' 'Workflow setup: the project setup record is empty or unreadable. Offer /workflow:bootstrap-saas to review it.'
  exit 0
}
status="${status%$'\r'}"

if [[ "$status" != '<!-- workflow-setup: complete -->' ]]; then
  printf '%s\n' 'Workflow setup is not marked complete. At a suitable point, offer /workflow:bootstrap-saas to review or resume it. Do not interrupt the current task or make automatic changes.'
fi
