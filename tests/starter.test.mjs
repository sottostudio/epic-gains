import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';

const root = new URL('../', import.meta.url);
const read = (file) => readFile(new URL(file, root), 'utf8');

test('marketplace points to the named plugin', async () => {
  const marketplace = JSON.parse(await read('.claude-plugin/marketplace.json'));
  const plugin = JSON.parse(await read('plugins/workflow/.claude-plugin/plugin.json'));
  assert.equal(marketplace.plugins.length, 1);
  assert.equal(marketplace.plugins[0].name, plugin.name);
  assert.equal(marketplace.plugins[0].source, './plugins/workflow');
});

test('skills have matching names, descriptions, and explicit invocation', async () => {
  const skills = await readdir(new URL('plugins/workflow/skills/', root));
  assert.deepEqual(skills.sort(), ['agent-workflow', 'build', 'debug', 'finish-branch', 'handoff', 'head-session', 'lane-charter', 'plan-work', 'pr-check', 'product-session', 'review', 'review-digest', 'service-audit', 'start', 'test-first', 'toolbox', 'verify', 'workflow-status', 'worktree']);
  for (const skill of skills) {
    const text = await read(path.posix.join('plugins/workflow/skills', skill, 'SKILL.md'));
    assert.match(text, new RegExp(`^---\\nname: ${skill}\\ndescription: .+\\ndisable-model-invocation: true\\n---\\n`));
  }
});

test('agents have named, described definitions', async () => {
  for (const agent of ['gate-doctor', 'issue-triage', 'migration-reviewer', 'ops-observer', 'planner', 'pr-conductor', 'researcher', 'reviewer', 'security-reviewer']) {
    const text = await read(`plugins/workflow/agents/${agent}.md`);
    assert.match(text, new RegExp(`^---\\nname: ${agent}\\ndescription: .+\\ntools: .+\\n---\\n`));
  }
});
