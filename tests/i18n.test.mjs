import test from 'node:test';
import assert from 'node:assert/strict';
import { count } from '../assets/js/i18n.js';
import { statsLabel } from '../assets/js/graph.js';

test('Arabic counts follow number agreement (1, 2, 3–10, 11+)', () => {
  assert.equal(count('ar', 'count.project', 1), 'مشروع واحد');
  assert.equal(count('ar', 'count.project', 2), 'مشروعان');
  assert.equal(count('ar', 'count.skill', 8), '8 مهارات');
  assert.equal(count('ar', 'count.skill', 13), '13 مهارة');
});

test('English counts use singular only for one', () => {
  assert.equal(count('en', 'count.project', 1), '1 project');
  assert.equal(count('en', 'count.project', 6), '6 projects');
});

test('graph node stats read naturally and say "other work" when no project is shown', () => {
  assert.equal(statsLabel('en', 4, 1), '4 skills · 1 project');
  assert.equal(statsLabel('en', 13, 6), '13 skills · 6 projects');
  assert.equal(statsLabel('en', 4, 0), '4 skills · other work');
  assert.equal(statsLabel('ar', 6, 2), '6 مهارات · مشروعان');
  assert.equal(statsLabel('ar', 7, 0), '7 مهارات · أعمال أخرى');
});
