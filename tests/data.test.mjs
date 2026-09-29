import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import * as data from '../assets/js/data.js';
import { STRINGS, t } from '../assets/js/i18n.js';
import { projectsForSkill, domainSummary, skillName } from '../assets/js/model.js';

const bi = (o, where) =>
  assert.ok(o && typeof o.en === 'string' && o.en.trim() && typeof o.ar === 'string' && o.ar.trim(), `${where} needs en and ar`);

test('ids are unique in every list', () => {
  for (const list of [data.DOMAINS, data.SKILLS, data.PROJECTS, data.SECTIONS, data.ACTIONS]) {
    const ids = list.map((x) => x.id);
    assert.equal(new Set(ids).size, ids.length);
  }
});

test('there are exactly eight projects and eight domains', () => {
  assert.equal(data.PROJECTS.length, 8);
  assert.equal(data.DOMAINS.length, 8);
});

test('every project stack entry is a known skill', () => {
  const ids = new Set(data.SKILLS.map((s) => s.id));
  for (const p of data.PROJECTS) for (const sid of p.stack) assert.ok(ids.has(sid), `${p.id} → ${sid}`);
});

test('every skill is proven by a shown project or marked extra, never both', () => {
  for (const s of data.SKILLS) {
    const n = projectsForSkill(data, s.id).length;
    assert.ok(s.extra ? n === 0 : n > 0, `${s.id}: extra=${Boolean(s.extra)} projects=${n}`);
  }
});

test('skills belong to known domains and every domain has skills', () => {
  const domains = new Set(data.DOMAINS.map((d) => d.id));
  for (const s of data.SKILLS) assert.ok(domains.has(s.domain), s.id);
  for (const d of data.DOMAINS) {
    bi(d.label, `${d.id}.label`);
    bi(d.summary, `${d.id}.summary`);
    assert.ok(domainSummary(data, d.id).skills.length > 0, d.id);
  }
});

test('descriptive skill names are bilingual', () => {
  for (const s of data.SKILLS) if (typeof s.name !== 'string') bi(s.name, s.id);
  assert.equal(skillName({ name: 'Laravel' }, 'ar'), 'Laravel');
});

test('project copy is bilingual and complete', () => {
  for (const p of data.PROJECTS) {
    for (const k of ['name', 'sector', 'role', 'summary']) bi(p[k], `${p.id}.${k}`);
    bi(p.detail.context, `${p.id}.context`);
    for (const k of ['built', 'engineering']) {
      const v = p.detail[k];
      assert.ok(v.en.length > 0 && v.en.length === v.ar.length, `${p.id}.${k} en/ar lengths`);
    }
    assert.equal(p.highlights.length, 2, `${p.id} highlights`);
    for (const x of p.highlights) bi(x.label, `${p.id}.highlight`);
  }
});

test('project codes follow AA-XXX-NN and are unique', () => {
  const codes = data.PROJECTS.map((p) => p.code);
  assert.equal(new Set(codes).size, codes.length);
  for (const c of codes) assert.match(c, /^AA-(ERP|WEB|MOB|SYS)-\d{2}$/);
});

// Client and employer names are kept out of this public repo: only truncated SHA-256 hashes of them live here.
const BANNED = new Set(["3a9d6b19f5089df2", "f5eea4204689bfd8", "1bb0b3a466ce8e76", "ca8fb089cf5afa71", "2b14726188da8c76", "8dc1f42392eddfa8", "78ff1aff07970c7c", "991d4e3096c13527", "7e63852cfd755370", "51a984c5768b69f5"]);
const sha = (w) => createHash('sha256').update(w).digest('hex').slice(0, 16);
export const leaks = (value) => (JSON.stringify(value).toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []).filter((w) => BANNED.has(sha(w)));

test('project cards never name a client or employer', () => {
  for (const p of data.PROJECTS) assert.deepEqual(leaks(p), [], p.id);
});

test('timeline, courses and languages are bilingual', () => {
  for (const e of data.LOG) {
    bi(e.title, 'log.title');
    bi(e.org, 'log.org');
    assert.equal(e.points.en.length, e.points.ar.length);
  }
  for (const c of [...data.COURSES, ...data.LANGUAGES]) bi(c, 'course/language');
});

test('English and Arabic UI strings have the same keys and no empty values', () => {
  assert.deepEqual(Object.keys(STRINGS.ar).sort(), Object.keys(STRINGS.en).sort());
  for (const lang of ['en', 'ar']) for (const [k, v] of Object.entries(STRINGS[lang])) assert.ok(v.trim(), `${lang}.${k}`);
});

test('every label key referenced by data exists', () => {
  for (const x of [...data.SECTIONS, ...data.ACTIONS]) assert.ok(STRINGS.en[x.labelKey], x.labelKey);
});

test('t() fills variables and falls back to English, then the key', () => {
  assert.equal(t('en', 'line.extras', { n: 3 }), '3 extra pages or features');
  assert.equal(t('xx', 'nav.about'), 'About');
  assert.equal(t('en', 'missing.key'), 'missing.key');
});

test('contact details match the approved values', () => {
  assert.equal(data.PROFILE.email, 'aalashwal.sa@gmail.com');
  assert.equal(data.PROFILE.whatsapp, '967774007288');
});

test('the site carries no personal photo (page, social preview or structured data)', async () => {
  const { readFile } = await import('node:fs/promises');
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.equal('photo' in data.PROFILE, false);
  assert.doesNotMatch(html, /profile\.(png|jpe?g|webp)/i);
});
