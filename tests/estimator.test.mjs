import test from 'node:test';
import assert from 'node:assert/strict';
import { estimate, normalizeSelection, formatAmount, buildMessage, mailtoHref, waHref } from '../assets/js/estimator.js';
import { STRINGS, t } from '../assets/js/i18n.js';

test('an empty selection has no lines and is flagged empty', () => {
  const r = estimate({});
  assert.deepEqual([r.empty, r.min, r.max, r.lines.length], [true, 0, 0, 0]);
});

test('basic website is 3,000–4,000', () => {
  const r = estimate({ website: 'basic' });
  assert.deepEqual([r.min, r.max, r.openEnded], [3000, 4000, false]);
});

test('full website with two extras adds 600–1,000', () => {
  const r = estimate({ website: 'full', extras: 2 });
  assert.deepEqual([r.min, r.max], [4600, 6000]);
});

test('standard dashboard plus chatbot is 5,000–6,000', () => {
  const r = estimate({ dashboard: 'standard', chatbot: true });
  assert.deepEqual([r.min, r.max], [5000, 6000]);
});

test('medium dashboard makes the total open-ended from 5,000', () => {
  const r = estimate({ dashboard: 'medium' });
  assert.deepEqual([r.min, r.max, r.openEnded], [5000, null, true]);
});

test('large dashboard adds 500 per extra section', () => {
  const r = estimate({ dashboard: 'large', sections: 2 });
  assert.deepEqual([r.min, r.openEnded], [7000, true]);
});

test('extra sections count only with a large dashboard', () => {
  assert.equal(normalizeSelection({ dashboard: 'medium', sections: 4 }).sections, 0);
  assert.equal(estimate({ dashboard: 'standard', sections: 3 }).min, 3000);
});

test('hostile input is normalised, never trusted', () => {
  assert.deepEqual(normalizeSelection({ website: 'enterprise', extras: -3, dashboard: 42, chatbot: 'yes' }),
    { website: 'none', extras: 0, dashboard: 'none', sections: 0, chatbot: false });
  assert.equal(normalizeSelection({ extras: 'abc' }).extras, 0);
  assert.equal(normalizeSelection({ extras: '2' }).extras, 2);
  assert.equal(normalizeSelection({ extras: 2.7 }).extras, 2);
  assert.equal(normalizeSelection({ extras: 999 }).extras, 20);
  assert.equal(normalizeSelection({ extras: null }).extras, 0);
  assert.equal(normalizeSelection(undefined).website, 'none');
  const r = estimate({ website: 'basic', extras: 'NaN' });
  assert.ok(Number.isFinite(r.min) && r.min >= 0);
});

test('normalizeSelection is idempotent, so state survives a language switch', () => {
  const once = normalizeSelection({ website: 'full', extras: 3, dashboard: 'large', sections: 1, chatbot: true });
  assert.deepEqual(normalizeSelection(once), once);
});

test('formatAmount in both languages', () => {
  assert.equal(formatAmount(3000, 4000, 'en'), '3,000 – 4,000 SAR');
  assert.equal(formatAmount(3000, 4000, 'ar'), '3,000 – 4,000 ريال');
  assert.equal(formatAmount(2000, 2000, 'en'), '2,000 SAR');
  assert.equal(formatAmount(5000, null, 'en'), 'From 5,000 SAR');
  assert.equal(formatAmount(5000, null, 'ar'), 'تبدأ من 5,000 ريال');
});

test('every line key has an i18n string in both languages', () => {
  const all = estimate({ website: 'full', extras: 1, dashboard: 'large', sections: 1, chatbot: true });
  const keys = [...all.lines.map((l) => `line.${l.key}`), 'line.website.basic', 'line.dashboard.standard', 'line.dashboard.medium'];
  for (const k of keys) for (const lang of ['en', 'ar']) assert.ok(STRINGS[lang][k], `${lang}:${k}`);
});

test('the message lists every line and the total', () => {
  const r = estimate({ website: 'basic', chatbot: true });
  const msg = buildMessage(r, 'en', (k, v) => t('en', k, v));
  assert.match(msg, /Basic website: 3,000 – 4,000 SAR/);
  assert.match(msg, /AI chatbot: 2,000 SAR/);
  assert.match(msg, /Estimated range: 5,000 – 6,000 SAR/);
});

test('links percent-encode Arabic text and new lines; WhatsApp keeps digits only', () => {
  const wa = waHref('+967 774 007 288', 'سطر\nثانٍ');
  assert.ok(wa.startsWith('https://wa.me/967774007288?text='));
  assert.doesNotMatch(wa, /[\u0600-\u06FF\n ]/);
  assert.equal(mailtoHref('x@y.z', 'Hi there', 'l1\nl2'), 'mailto:x@y.z?subject=Hi%20there&body=l1%0Al2');
});
