import { h, clear } from './dom.js';
import { search } from './search.js';

export function createPalette(dlg, { getCtx, getIndex, onSelect }) {
  let index = [];
  let results = [];
  let active = 0;
  let returnFocus = null;

  const input = h('input', {
    class: 'palette__input', id: 'palette-input', type: 'text', role: 'combobox', autocomplete: 'off', spellcheck: 'false',
    'aria-expanded': 'true', 'aria-controls': 'palette-list', 'aria-autocomplete': 'list',
  });
  const list = h('ul', { class: 'palette__list', id: 'palette-list', role: 'listbox' });
  const foot = h('div', { class: 'palette__foot' });
  dlg.append(input, list, foot);

  function mark() {
    list.querySelectorAll('[role="option"]').forEach((li, i) => li.setAttribute('aria-selected', String(i === active)));
    if (results.length) {
      input.setAttribute('aria-activedescendant', `pal-${active}`);
      list.querySelector(`#pal-${active}`)?.scrollIntoView({ block: 'nearest' });
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  }

  function paint() {
    const c = getCtx();
    input.placeholder = c.t('cmd.placeholder');
    input.setAttribute('aria-label', c.t('cmd.open'));
    foot.textContent = c.t('cmd.navigate');
    clear(list);
    if (!results.length) {
      list.append(h('li', { class: 'palette__empty' }, c.t('cmd.empty')));
    } else {
      results.forEach((r, i) => {
        const type = c.t(`cmd.${r.type}`);
        list.append(h('li', {
          class: 'palette__item', role: 'option', id: `pal-${i}`, 'aria-selected': 'false',
          onpointermove: () => { if (active !== i) { active = i; mark(); } },
          onclick: () => choose(i),
        }, h('span', { class: 'palette__label' }, r.label), h('span', { class: 'palette__hint' }, r.hint ? `${type} · ${r.hint}` : type)));
      });
    }
    mark();
  }

  function run() { results = search(index, input.value); active = 0; paint(); }
  function choose(i) { const r = results[i]; if (!r) return; returnFocus = null; dlg.close(); onSelect(r); }

  input.addEventListener('input', run);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, results.length - 1); mark(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); mark(); }
    else if (e.key === 'Enter') { e.preventDefault(); choose(active); }
  });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', () => { returnFocus?.focus?.(); });

  return {
    open() {
      if (dlg.open) return;
      returnFocus = document.activeElement;
      index = getIndex();
      input.value = '';
      run();
      dlg.showModal();
      input.focus();
    },
    close() { if (dlg.open) dlg.close(); },
    get isOpen() { return dlg.open; },
  };
}
