import test from 'node:test';
import assert from 'node:assert/strict';
import * as data from '../assets/js/data.js';
import { t } from '../assets/js/i18n.js';
import { buildIndex, search, normalize } from '../assets/js/search.js';

const idx = (lang) => buildIndex(data, lang, (k, v) => t(lang, k, v));

test('normalize folds Arabic letter variants, diacritics and case', () => {
  assert.equal(normalize('إدارةٌ'), 'اداره');
  assert.equal(normalize('  Laravel  '), 'laravel');
  assert.equal(normalize('أمـان'), 'امان');
});

test('a skill prefix ranks that skill first', () => {
  const r = search(idx('en'), 'lara');
  assert.equal(r[0].type, 'skill');
  assert.equal(r[0].id, 'laravel');
});

test('stack names find projects', () => {
  assert.ok(search(idx('en'), 'flutter').some((x) => x.type === 'project' && x.id === 'fasl'));
});

test('project codes are searchable', () => {
  assert.equal(search(idx('en'), 'AA-SYS')[0].id, 'helix');
});

test('Arabic section names are searchable without the definite article', () => {
  assert.ok(search(idx('ar'), 'مشاريع').some((x) => x.type === 'section' && x.id === 'projects'));
});

test('an empty query lists sections and actions only', () => {
  const r = search(idx('en'), '');
  assert.ok(r.length >= 6);
  assert.ok(r.every((x) => x.type === 'section' || x.type === 'action'));
});

test('no match returns an empty list', () => {
  assert.deepEqual(search(idx('en'), 'zzzz-nothing'), []);
});
