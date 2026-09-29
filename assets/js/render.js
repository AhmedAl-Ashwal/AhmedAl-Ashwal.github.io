import { h, clear, pad } from './dom.js';
import { formatAmount } from './estimator.js';
import { skillById, skillName, projectsForSkill, skillsForDomain } from './model.js';

export function sectionHead(id, c, { eyebrow, title, lede }) {
  return h('header', { class: 'sec-head' },
    h('p', { class: 'eyebrow lat' }, c.t(eyebrow)),
    h('h2', { class: 'h2', id: `${id}-h` }, c.t(title)),
    lede ? h('p', { class: 'lede' }, c.t(lede)) : null);
}

export function renderNav(el, c) {
  clear(el).append(...c.data.SECTIONS.map((s) => h('a', { href: `#${s.id}` }, c.t(s.labelKey))));
}


const text = (o, lang) => (typeof o === 'string' ? o : o[lang]);

export function renderAbout(el, c) {
  const { PROFILE, PROJECTS } = c.data;
  const stats = [
    { value: String(PROJECTS.length), key: 'stats.systems' },
    { value: PROFILE.stats.tests, key: 'stats.tests' },
    { value: PROFILE.stats.erpApps, key: 'stats.apps' },
  ];
  clear(el).append(
    sectionHead('about', c, { eyebrow: 'about.eyebrow', title: 'about.title' }),
    h('article', { class: 'panel file' },
      h('div', { class: 'file__tab' },
        h('span', { class: 'file__dot', 'aria-hidden': 'true' }),
        h('b', { class: 'lat' }, 'README.md'),
        h('span', { class: 'lat file__path' }, PROFILE.handle)),
      h('div', { class: 'file__body' },
        h('div', { class: 'file__text' }, h('p', {}, c.t('about.p1')), h('p', {}, c.t('about.p2'))),
        h('dl', { class: 'stats' }, stats.map((s) => h('div', { class: 'stat' }, h('dt', {}, c.t(s.key)), h('dd', { class: 'num lat' }, s.value)))))));
}

function skillChip(skill, c) {
  const n = projectsForSkill(c.data, skill.id).length;
  const name = h('span', { class: 'lat' }, skillName(skill, c.lang));
  if (n === 0) return h('span', { class: 'chip is-extra' }, name, h('span', { class: 'chip__n' }, c.t('skills.extra')));
  return h('button', {
    type: 'button', class: 'chip', 'data-skill': skill.id, 'aria-pressed': String(c.state.skillFilter === skill.id),
    'aria-label': c.t('skills.show', { name: skillName(skill, c.lang) }),
    onclick: () => c.actions.highlightSkill(skill.id, 'skills'),
  }, name, h('span', { class: 'chip__n num' }, String(n)));
}

export function renderSkills(el, c) {
  const { DOMAINS } = c.data;
  const filters = [{ id: 'all', label: c.t('skills.all') }, ...DOMAINS.map((d) => ({ id: d.id, label: d.label[c.lang] }))];
  const bar = h('div', { class: 'filter', role: 'toolbar', 'aria-label': c.t('skills.title') },
    filters.map((f) => h('button', {
      type: 'button', class: 'chip', 'data-filter': f.id, 'aria-pressed': String(c.state.domainFilter === f.id),
      onclick: () => { c.state.domainFilter = f.id; renderSkills(el, c); el.querySelector(`[data-filter="${f.id}"]`)?.focus(); },
    }, f.label)));
  const groups = DOMAINS.map((d) => {
    const skills = skillsForDomain(c.data, d.id);
    const hidden = c.state.domainFilter !== 'all' && c.state.domainFilter !== d.id;
    return h('section', { class: 'panel skill-group', hidden, 'aria-label': d.label[c.lang] },
      h('div', { class: 'skill-group__head' }, h('h3', {}, d.label[c.lang]), h('span', { class: 'mono' }, pad(skills.length))),
      h('div', { class: 'chips' }, skills.map((s) => skillChip(s, c))));
  });
  clear(el).append(sectionHead('skills', c, { eyebrow: 'skills.eyebrow', title: 'skills.title', lede: 'skills.lede' }), bar, h('div', { class: 'skill-grid' }, groups));
}

export function renderProjects(el, c) {
  const f = c.state.skillFilter;
  const fSkill = f ? skillById(c.data, f) : null;
  const note = h('p', { class: 'filter-note', role: 'status', tabindex: '-1' },
    fSkill ? [c.t('projects.filtered', { name: skillName(fSkill, c.lang) }), ' ',
      h('button', { type: 'button', class: 'text-btn', onclick: () => c.actions.highlightSkill(null, 'projects') }, c.t('projects.clear'))] : null);
  const frames = c.data.PROJECTS.map((p) => {
    const state = f ? (p.stack.includes(f) ? ' is-match' : ' is-dim') : '';
    return h('article', { class: `frame${state}`, id: `p-${p.id}`, 'aria-labelledby': `p-${p.id}-t` },
      h('div', { class: 'frame__label' }, h('span', { class: 'lat' }, `${p.code} · ${p.short}`), h('span', { class: 'lat' }, p.years)),
      h('div', { class: 'panel frame__card' },
        h('h3', { id: `p-${p.id}-t` }, p.name[c.lang]),
        h('p', { class: 'frame__meta' }, `${p.sector[c.lang]} · ${p.role[c.lang]}`),
        h('p', { class: 'frame__sum' }, p.summary[c.lang]),
        h('dl', { class: 'highlights' }, p.highlights.map((x) => h('div', { class: 'highlight' }, h('dt', {}, x.label[c.lang]), h('dd', { class: 'num lat' }, x.value)))),
        h('div', { class: 'frame__foot' },
          h('ul', { class: 'chips', 'aria-label': c.t('projects.stack') },
            p.stack.slice(0, 5).map((id) => h('li', { class: 'chip' }, h('span', { class: 'lat' }, skillName(skillById(c.data, id), c.lang))))),
          h('button', { type: 'button', class: 'btn btn--ghost btn--sm', 'aria-haspopup': 'dialog', onclick: (e) => c.actions.openProject(p.id, e.currentTarget) }, c.t('projects.inspect')))));
  });
  clear(el).append(sectionHead('projects', c, { eyebrow: 'projects.eyebrow', title: 'projects.title', lede: 'projects.lede' }), note, h('div', { class: 'projects' }, frames));
}

export function openProjectDialog(dlg, c, id, trigger) {
  const p = c.data.PROJECTS.find((x) => x.id === id);
  if (!p) return;
  const list = (items) => h('ul', { class: 'bullets' }, items.map((i) => h('li', {}, i)));
  clear(dlg).append(
    h('div', { class: 'dialog__head' },
      h('div', {},
        h('p', { class: 'eyebrow lat' }, p.code),
        h('h2', { id: 'project-title' }, p.name[c.lang]),
        h('p', { class: 'frame__meta' }, `${p.sector[c.lang]} · ${p.role[c.lang]} · `, h('span', { class: 'lat' }, p.years))),
      h('button', { type: 'button', class: 'icon-btn', 'aria-label': c.t('projects.close'), onclick: () => dlg.close() }, '×')),
    h('div', { class: 'dialog__body' },
      h('section', {}, h('h3', {}, c.t('projects.problem')), h('p', {}, p.detail.context[c.lang])),
      h('section', {}, h('h3', {}, c.t('projects.built')), list(p.detail.built[c.lang])),
      h('section', {}, h('h3', {}, c.t('projects.engineering')), list(p.detail.engineering[c.lang])),
      h('section', {}, h('h3', {}, c.t('projects.stack')),
        h('div', { class: 'chips' }, p.stack.map((sid) => h('span', { class: 'chip' }, h('span', { class: 'lat' }, skillName(skillById(c.data, sid), c.lang))))))));
  dlg.addEventListener('close', () => trigger?.focus?.(), { once: true });
  dlg.onclick = (e) => { if (e.target === dlg) dlg.close(); };
  if (!dlg.open) dlg.showModal();
}

export function renderLog(el, c) {
  const range = (e) => `${e.from} → ${e.to ?? c.t('log.present')}`;
  const commits = c.data.LOG.map((e) => h('li', { class: `commit${e.head ? ' is-head' : ''}${e.edu ? ' is-edu' : ''}` },
    h('span', { class: 'commit__date num lat' }, range(e)),
    h('div', { class: 'commit__body' },
      h('h3', {}, e.title[c.lang], e.head ? h('span', { class: 'ref lat' }, 'HEAD → main') : null),
      h('p', { class: 'commit__org' }, e.org[c.lang]),
      h('ul', { class: 'bullets' }, e.points[c.lang].map((pt) => h('li', {}, pt))))));
  const side = (key, items) => h('section', { class: 'panel log-side__panel' }, h('h3', {}, c.t(key)), h('ul', { class: 'bullets' }, items.map((i) => h('li', {}, i[c.lang]))));
  clear(el).append(
    sectionHead('log', c, { eyebrow: 'log.eyebrow', title: 'log.title' }),
    h('ol', { class: 'log' }, commits),
    h('div', { class: 'log-side' }, side('log.courses', c.data.COURSES), side('log.languages', c.data.LANGUAGES)));
}

export async function copyText(value, button, c) {
  let ok = false;
  try { await navigator.clipboard.writeText(value); ok = true; } catch { ok = false; }
  const msg = document.getElementById('status-msg');
  if (msg) msg.textContent = ok ? `${c.t('contact.copied')}: ${value}` : value;
  if (button && ok) {
    const old = button.textContent;
    button.textContent = c.t('contact.copied');
    setTimeout(() => { button.textContent = old; }, 1600);
  }
}

export function renderContact(el, c) {
  const P = c.data.PROFILE;
  const row = (labelKey, value, extra) => h('div', { class: 'prop-row' }, h('dt', {}, c.t(labelKey)), h('dd', {}, value), extra ?? h('span'));
  clear(el).append(
    h('div', { class: 'contact' },
      h('div', { class: 'contact__text' },
        sectionHead('contact', c, { eyebrow: 'contact.eyebrow', title: 'contact.title', lede: 'contact.lede' }),
        h('div', { class: 'hero__ctas' },
          h('a', { class: 'btn btn--primary', href: `mailto:${P.email}` }, c.t('contact.write')),
          h('a', { class: 'btn btn--ghost', href: `https://wa.me/${P.whatsapp}`, target: '_blank', rel: 'noopener' }, c.t('contact.whatsapp')))),
      h('dl', { class: 'panel props' },
        row('contact.email', h('a', { class: 'lat', href: `mailto:${P.email}` }, P.email),
          h('button', { type: 'button', class: 'copy-btn', onclick: (e) => copyText(P.email, e.currentTarget, c) }, c.t('contact.copy'))),
        row('contact.phone', h('a', { class: 'lat', href: `https://wa.me/${P.whatsapp}`, target: '_blank', rel: 'noopener' }, P.phone)),
        row('contact.github', h('a', { class: 'lat', href: P.github, target: '_blank', rel: 'noopener' }, 'AhmedAl-Ashwal')),
        row('contact.linkedin', h('a', { class: 'lat', href: P.linkedin, target: '_blank', rel: 'noopener' }, 'ahmed-alashwal')),
        row('contact.location', h('span', {}, c.t('contact.locationValue'))))));
}

export function renderServices(el, c) {
  const cards = c.data.SERVICES.map((sv) => h('article', { class: 'panel module' },
    h('span', { class: 'mono lat' }, sv.code),
    h('h3', {}, sv.title[c.lang]),
    h('p', { class: 'module__text' }, sv.text[c.lang]),
    h('p', { class: 'module__price num' }, formatAmount(sv.min, sv.max, c.lang), sv.perItem ? h('small', {}, ` ${c.t('services.perItem')}`) : null)));
  clear(el).append(
    sectionHead('services', c, { eyebrow: 'services.eyebrow', title: 'services.title', lede: 'services.lede' }),
    h('div', { class: 'modules' }, cards),
    h('div', { class: 'panel estimator', id: 'estimator' }),
    h('p', { class: 'guide-link' }, h('a', { href: c.data.PROFILE.guidePdf, download: 'Ahmed-Alashwal-web-pricing-guide-2026.pdf' }, c.t('services.guide'))));
}
