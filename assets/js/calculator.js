import { h, clear } from './dom.js';
import { estimate, normalizeSelection, formatAmount, buildMessage, lineLabel, mailtoHref, waHref, PRICES } from './estimator.js';

// Reads straight from form.elements: FormData would skip the sections field while it is still disabled.
export function readSelection(form) {
  const el = form.elements;
  return normalizeSelection({
    website: el.website.value, pages: el.pages.value, features: el.features.value, dashboard: el.dashboard.value,
    sections: el.sections.value, chatbot: el.chatbot.checked,
  });
}

export function renderCalculator(root, c) {
  const sel = normalizeSelection(c.state.selection);
  c.state.selection = sel;

  const radio = (name, value, labelKey) => h('label', { class: 'opt' },
    h('input', { type: 'radio', name, value, id: `est-${name}-${value}`, checked: sel[name] === value }),
    h('span', {}, c.t(labelKey)));

  const stepper = (name, labelKey, hintKey) => {
    const input = h('input', { type: 'number', inputmode: 'numeric', name, id: `est-${name}`, min: 0, max: PRICES.maxCount, step: 1, value: sel[name] });
    const bump = (delta) => {
      input.value = String(Math.min(PRICES.maxCount, Math.max(0, (Number(input.value) || 0) + delta)));
      input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    return h('div', { class: 'field' },
      h('label', { for: `est-${name}`, class: 'field__label' }, c.t(labelKey)),
      h('div', { class: 'stepper' },
        h('button', { type: 'button', 'data-step': name, 'aria-label': `${c.t('est.decrease')}: ${c.t(labelKey)}`, onclick: () => bump(-1) }, '−'),
        input,
        h('button', { type: 'button', 'data-step': name, 'aria-label': `${c.t('est.increase')}: ${c.t(labelKey)}`, onclick: () => bump(1) }, '+')),
      hintKey ? h('p', { class: 'field__hint' }, c.t(hintKey)) : null);
  };

  const form = h('form', { class: 'est-form', 'aria-labelledby': 'est-title', novalidate: true },
    h('h3', { class: 'est-title', id: 'est-title' }, c.t('est.title')),
    h('fieldset', {}, h('legend', {}, c.t('est.website')),
      h('div', { class: 'opts' }, radio('website', 'none', 'est.none'), radio('website', 'basic', 'est.basic'), radio('website', 'full', 'est.full'))),
    stepper('pages', 'est.pages', 'est.pagesHint'),
    stepper('features', 'est.features', 'est.featuresHint'),
    h('fieldset', {}, h('legend', {}, c.t('est.dashboard')),
      h('div', { class: 'opts' }, radio('dashboard', 'none', 'est.none'), radio('dashboard', 'standard', 'est.standard'), radio('dashboard', 'medium', 'est.medium'), radio('dashboard', 'large', 'est.large'))),
    stepper('sections', 'est.sections', 'est.sectionsHint'),
    h('label', { class: 'check' }, h('input', { type: 'checkbox', name: 'chatbot', id: 'est-chatbot', checked: sel.chatbot }), h('span', {}, c.t('est.chatbot'))));

  const out = h('div', { class: 'est-result' });
  const total = h('p', { class: 'est-total num', 'aria-live': 'polite', 'aria-atomic': 'true' });
  const body = h('div', { class: 'est-body' });
  out.append(h('p', { class: 'eyebrow' }, c.t('est.result')), total, body);

  function update() {
    c.state.selection = readSelection(form);
    const off = c.state.selection.dashboard !== 'large';
    form.querySelector('#est-sections').disabled = off;
    form.querySelectorAll('[data-step="sections"]').forEach((b) => { b.disabled = off; });
    paint(estimate(c.state.selection));
  }

  function paint(res) {
    total.textContent = res.empty ? '—' : formatAmount(res.min, res.max, c.lang);
    const message = buildMessage(res, c.lang, c.t);
    const disabled = res.empty ? 'true' : null;
    clear(body).append(
      res.empty
        ? h('p', { class: 'est-note' }, c.t('est.empty'))
        : h('ul', { class: 'est-lines' }, res.lines.map((l) => h('li', {},
          h('span', {}, lineLabel(l, c.t)),
          h('span', { class: 'num' }, formatAmount(l.min, l.max, c.lang))))),
      h('div', { class: 'est-actions' },
        h('a', { class: 'btn btn--primary', href: res.empty ? null : mailtoHref(c.data.PROFILE.email, c.t('msg.subject'), message), 'aria-disabled': disabled }, c.t('est.sendEmail')),
        h('a', { class: 'btn btn--ghost', href: res.empty ? null : waHref(c.data.PROFILE.whatsapp, message), target: '_blank', rel: 'noopener', 'aria-disabled': disabled }, c.t('est.sendWhatsapp'))),
      h('p', { class: 'est-note' }, c.t('est.note')));
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('submit', (e) => e.preventDefault());
  clear(root).append(form, out);
  update();
}
