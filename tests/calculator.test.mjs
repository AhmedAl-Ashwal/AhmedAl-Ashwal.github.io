import test from 'node:test';
import assert from 'node:assert/strict';
import { readSelection } from '../assets/js/calculator.js';
import { estimate, buildMessage, lineLabel } from '../assets/js/estimator.js';
import { t } from '../assets/js/i18n.js';

const form = (v) => ({ elements: {
  website: { value: v.website ?? 'none' }, extras: { value: v.extras ?? '0' }, dashboard: { value: v.dashboard ?? 'none' },
  sections: { value: v.sections ?? '0', disabled: v.sectionsDisabled ?? false }, chatbot: { checked: v.chatbot ?? false },
} });

test('extra sections are read even while the field is still disabled from an earlier choice', () => {
  const sel = readSelection(form({ dashboard: 'large', sections: '3', sectionsDisabled: true }));
  assert.equal(sel.sections, 3);
  assert.equal(estimate(sel).min, 7500);
});

test('the reader normalises what it reads', () => {
  const sel = readSelection(form({ website: 'x', extras: '-5', dashboard: 'medium', sections: '4', chatbot: true }));
  assert.deepEqual(sel, { website: 'none', extras: 0, dashboard: 'medium', sections: 0, chatbot: true });
});

test('English line labels use the singular for one item, in the UI and the outbound message', () => {
  const en = (k, v) => t('en', k, v);
  const one = estimate({ extras: 1, dashboard: 'large', sections: 1 });
  assert.equal(lineLabel(one.lines[0], en), '1 extra page or feature');
  assert.equal(lineLabel(one.lines[2], en), '1 extra dynamic section');
  assert.match(buildMessage(one, 'en', en), /- 1 extra page or feature: 300 – 500 SAR/);
  assert.equal(lineLabel(estimate({ extras: 2 }).lines[0], en), '2 extra pages or features');
});
