import { skillName } from './model.js';

const FOLDS = [
  [/[\u064B-\u065F\u0670]/g, ''], // harakat
  [/\u0640/g, ''], // tatweel
  [/[أإآ]/g, 'ا'],
  [/ة/g, 'ه'],
  [/ى/g, 'ي'],
];

export function normalize(value) {
  let out = String(value ?? '').toLowerCase().trim();
  for (const [re, rep] of FOLDS) out = out.replace(re, rep);
  return out.replace(/\s+/g, ' ');
}

export function buildIndex(data, lang, tt) {
  const domainLabel = (id) => data.DOMAINS.find((d) => d.id === id)?.label[lang] ?? '';
  const items = [
    ...data.SECTIONS.map((s) => ({ type: 'section', id: s.id, label: tt(s.labelKey), hint: '', keywords: [s.id] })),
    ...data.PROJECTS.map((p) => ({
      type: 'project', id: p.id, label: p.name[lang], hint: p.code,
      keywords: [p.code, p.short, p.sector[lang], ...p.stack.map((id) => skillName(data.SKILLS.find((s) => s.id === id), lang))],
    })),
    ...data.SKILLS.map((s) => ({ type: 'skill', id: s.id, label: skillName(s, lang), hint: domainLabel(s.domain), keywords: [s.id] })),
    ...data.ACTIONS.map((a) => ({ type: 'action', id: a.id, label: tt(a.labelKey), hint: '', keywords: a.keywords ?? [] })),
  ];
  return items.map((it) => ({ ...it, _label: normalize(it.label), _kw: normalize(it.keywords.join(' ')) }));
}

const TYPE_BONUS = { skill: 3, project: 2, section: 1, action: 0 };

export function search(index, query, limit = 8) {
  const q = normalize(query);
  if (!q) return index.filter((i) => i.type === 'section' || i.type === 'action').slice(0, 12);
  const scored = [];
  for (const it of index) {
    let score = 0;
    if (it._label.startsWith(q)) score = 100;
    else if (it._label.split(/[\s·—\-/]+/).some((w) => w.startsWith(q) || w.replace(/^ال/, '').startsWith(q))) score = 80;
    else if (it._label.includes(q)) score = 60;
    else if (it._kw.includes(q)) score = 40;
    if (score) scored.push({ it, score: score + TYPE_BONUS[it.type] });
  }
  scored.sort((a, b) => b.score - a.score || a.it.label.localeCompare(b.it.label));
  return scored.slice(0, limit).map((x) => x.it);
}
