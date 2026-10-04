import test from 'node:test';
import assert from 'node:assert/strict';
import { readSelection } from '../assets/js/calculator.js';
import { estimate, buildMessage, lineLabel } from '../assets/js/estimator.js';
import { t } from '../assets/js/i18n.js';

const form = (v) => ({ elements: {
  website: { value: v.website ?? 'none' }, pages: { value: v.pages ?? '0' }, features: { value: v.features ?? '0' }, dashboard: { value: v.dashboard ?? 'none' },
  sections: { value: v.sections ?? '0', disabled: v.sectionsDisabled ?? false }, chatbot: { checked: v.chatbot ?? false },
} });

test('extra sections are read even while the field is still disabled from an earlier choice', () => {
  const sel = readSelection(form({ dashboard: 'large', sections: '3', sectionsDisabled: true }));
  assert.equal(sel.sections, 3);
  assert.equal(estimate(sel).min, 6750);
});

test('the reader normalises what it reads', () => {
  const sel = readSelection(form({ website: 'x', pages: '-5', features: '2', dashboard: 'medium', sections: '4', chatbot: true }));
  assert.deepEqual(sel, { website: 'none', pages: 0, features: 2, dashboard: 'medium', sections: 0, chatbot: true });
});

test('English line labels use the singular for one item, in the UI and the outbound message', () => {
  const en = (k, v) => t('en', k, v);
  const one = estimate({ pages: 1, features: 1, dashboard: 'large', sections: 1 });
  assert.equal(lineLabel(one.lines[0], en), '1 extra page');
  assert.equal(lineLabel(one.lines[1], en), '1 extra feature');
  assert.equal(lineLabel(one.lines[3], en), '1 extra dynamic section');
  const msg = buildMessage(one, 'en', en);
  assert.match(msg, /- 1 extra page: 100 – 200 SAR/);
  assert.match(msg, /- 1 extra feature: 200 – 300 SAR/);
  assert.match(msg, /- 1 extra dynamic section: 250 SAR/);
  assert.equal(lineLabel(estimate({ pages: 2 }).lines[0], en), '2 extra pages');
  assert.equal(lineLabel(estimate({ features: 2 }).lines[0], en), '2 extra features');
});
