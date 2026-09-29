import { h, s, clear, pad } from './dom.js';
import { domainSummary, skillName } from './model.js';
import { t, count } from './i18n.js';

export function statsLabel(lang, skills, projects) {
  const right = projects ? count(lang, 'count.project', projects) : t(lang, 'skills.extra');
  return `${count(lang, 'count.skill', skills)} · ${right}`;
}

let observer = null;

export function renderGraph(root, c) {
  observer?.disconnect();
  const { DOMAINS, PROFILE } = c.data;
  const startCol = h('div', { class: 'graph-col' });
  const endCol = h('div', { class: 'graph-col' });
  const core = h('div', { class: 'graph-core' },
    h('img', { class: 'graph-core__photo', src: PROFILE.photo, alt: PROFILE.name[c.lang], width: '88', height: '88' }),
    h('span', { class: 'graph-core__name' }, PROFILE.name[c.lang]),
    h('span', { class: 'graph-core__role' }, c.t('graph.core')));
  const svg = s('svg', { class: 'graph-traces', 'aria-hidden': 'true', focusable: 'false' });

  const nodes = DOMAINS.map((d, i) => {
    const sum = domainSummary(c.data, d.id);
    const stats = statsLabel(c.lang, sum.skills.length, sum.projects.length);
    const btn = h('button', { type: 'button', class: 'graph-node', 'data-domain': d.id, 'aria-expanded': 'false', 'aria-controls': 'inspector' },
      h('span', { class: 'graph-node__top' }, h('span', { class: 'lat' }, pad(i + 1)), h('span', {}, stats)),
      h('span', { class: 'graph-node__name' }, d.label[c.lang]));
    btn.addEventListener('click', () => c.actions.openDomain(d.id, btn));
    for (const [ev, on] of [['pointerenter', true], ['focus', true], ['pointerleave', false], ['blur', false]]) {
      btn.addEventListener(ev, () => light(d.id, on));
    }
    (i < 4 ? startCol : endCol).append(btn);
    return btn;
  });

  const stage = h('div', { class: 'graph-stage' }, svg, startCol, core, endCol);
  clear(root).append(stage);

  let expanded = null;
  function light(id, on) {
    svg.querySelectorAll(`[data-domain="${id}"]`).forEach((el) => el.classList.toggle('is-active', on || expanded === id));
  }
  const draw = () => { drawTraces(svg, stage, core, nodes, c.reducedMotion); if (expanded) light(expanded, true); };
  observer = new ResizeObserver(draw);
  observer.observe(stage);

  return {
    nodes,
    setExpanded(id) {
      expanded = id;
      nodes.forEach((n) => n.setAttribute('aria-expanded', String(n.dataset.domain === id)));
      svg.querySelectorAll('[data-domain]').forEach((el) => el.classList.toggle('is-active', el.dataset.domain === id));
    },
  };
}

function rel(r, box) {
  const left = r.left - box.left;
  const top = r.top - box.top;
  return { left, top, right: left + r.width, bottom: top + r.height, h: r.height, cx: left + r.width / 2, cy: top + r.height / 2 };
}

function drawTraces(svg, stage, core, nodes, reduced) {
  clear(svg);
  if (getComputedStyle(svg).display === 'none') return;
  const box = stage.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
  const cr = rel(core.getBoundingClientRect(), box);
  const sides = { left: [], right: [] };
  for (const n of nodes) {
    const r = rel(n.getBoundingClientRect(), box);
    (r.cx < cr.cx ? sides.left : sides.right).push({ n, r });
  }
  for (const [side, list] of Object.entries(sides)) {
    list.sort((a, b) => a.r.cy - b.r.cy);
    const ports = list.map((_, k) => cr.top + (cr.h * (k + 1)) / (list.length + 1));
    const up = list.map((x, k) => x.r.cy < ports[k]);
    const upIdx = list.map((_, k) => up.slice(0, k).filter(Boolean).length);
    const downCount = up.filter((u) => !u).length;
    list.forEach(({ n, r }, k) => {
      // Stagger the vertical runs so traces never cross: nodes above the port bend nearest the core first,
      // nodes below bend nearest the core last.
      const rank = up[k] ? upIdx[k] : downCount - 1 - (k - up.filter(Boolean).length);
      const x1 = side === 'left' ? cr.left : cr.right;
      const x2 = side === 'left' ? r.right : r.left;
      const mid = x1 + (x2 - x1) * (0.28 + 0.14 * rank);
      const y1 = ports[k];
      const d = `M${x1} ${y1} H${mid} V${r.cy} H${x2}`;
      const id = n.dataset.domain;
      svg.append(s('path', { class: 'trace', d, 'data-domain': id }));
      svg.append(s('circle', { class: 'jn', cx: mid, cy: y1, r: 2.2, 'data-domain': id }));
      svg.append(s('circle', { class: 'jn', cx: mid, cy: r.cy, r: 2.2, 'data-domain': id }));
      svg.append(s('circle', { class: 'port', cx: x2, cy: r.cy, r: 3.5, 'data-domain': id }));
      if (!reduced) {
        const pk = s('rect', { class: 'pk', x: -2.5, y: -2.5, width: 5, height: 5, 'data-domain': id });
        pk.append(s('animateMotion', { dur: `${3.4 + k * 0.45}s`, repeatCount: 'indefinite', begin: `${-k * 0.9}s`, path: d }));
        svg.append(pk);
      }
    });
  }
}

export function createInspector(el, getCtx) {
  let trigger = null;
  let current = null;
  const onKey = (e) => {
    if (e.key === 'Escape' && !document.querySelector('dialog[open]')) close();
  };

  function open(id, from) {
    const c = getCtx();
    const d = c.data.DOMAINS.find((x) => x.id === id);
    if (!d) return;
    current = id;
    trigger = from ?? trigger;
    const sum = domainSummary(c.data, id);
    clear(el).append(
      h('div', { class: 'inspector__head' },
        h('div', {}, h('p', { class: 'eyebrow lat' }, `inspect · ${d.id}`), h('h3', { id: 'inspector-title', tabindex: '-1' }, d.label[c.lang])),
        h('button', { type: 'button', class: 'icon-btn', 'aria-label': c.t('inspector.close'), onclick: () => close() }, '×')),
      h('div', { class: 'inspector__body' },
        h('p', { class: 'inspector__sum' }, d.summary[c.lang]),
        h('div', { class: 'prop' },
          h('p', { class: 'prop__label' }, c.t('inspector.skills')),
          h('div', { class: 'chips' }, sum.skills.map(({ skill, count }) =>
            h('span', { class: `chip${count ? '' : ' is-extra'}` },
              h('span', { class: 'lat' }, skillName(skill, c.lang)),
              h('span', { class: 'chip__n' }, count ? String(count) : c.t('skills.extra')))))),
        h('div', { class: 'prop' },
          h('p', { class: 'prop__label' }, c.t('inspector.projects')),
          sum.projects.length
            ? h('div', { class: 'link-list' }, sum.projects.map((p) => h('button', {
              type: 'button', class: 'link-row', 'aria-haspopup': 'dialog', onclick: (e) => c.actions.openProject(p.id, e.currentTarget),
            }, h('span', {}, p.name[c.lang]), h('span', { class: 'mono lat' }, p.code))))
            : h('p', { class: 'inspector__sum' }, c.t('inspector.none')))));
    el.hidden = false;
    c.actions.onInspector(id);
    document.removeEventListener('keydown', onKey);
    document.addEventListener('keydown', onKey);
    el.querySelector('#inspector-title').focus();
  }

  function close(restore = true) {
    if (el.hidden) return;
    el.hidden = true;
    current = null;
    document.removeEventListener('keydown', onKey);
    getCtx().actions.onInspector(null);
    if (restore) trigger?.focus?.();
  }

  return { open, close, get current() { return current; } };
}
