import * as data from './data.js';
import { t } from './i18n.js';
import { readLang, writeLang, shouldOpenPalette } from './platform.js';
import { buildIndex } from './search.js';
import { createPalette } from './palette.js';
import { renderGraph, createInspector } from './graph.js';
import { renderNav, renderAbout, renderSkills, renderProjects, renderLog, renderServices, renderContact, openProjectDialog, copyText } from './render.js';
import { renderCalculator } from './calculator.js';

const $ = (sel) => document.querySelector(sel);
const storage = (() => { try { return window.localStorage; } catch { return null; } })();
const query = new URLSearchParams(window.location.search).get('lang');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

let graph = null;
const state = { lang: readLang(storage, query), selection: {}, skillFilter: null, domainFilter: 'all' };

function getCtx() {
  return { data, state, lang: state.lang, t: (key, vars) => t(state.lang, key, vars), reducedMotion: motion.matches, actions };
}

const actions = {
  openDomain(id, trigger) { inspector.open(id, trigger); },
  onInspector(id) { graph?.setExpanded(id); },
  go(id, moveFocus = true) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: motion.matches ? 'auto' : 'smooth', block: 'start' });
    if (!moveFocus) return;
    // Keyboard and screen-reader users land where the page scrolled, not back at the top bar.
    const heading = target.querySelector('h1, h2, h3') ?? target;
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  },
  openProject(id, trigger) { openProjectDialog($('#project-dialog'), getCtx(), id, trigger); },
  highlightSkill(id, from) {
    const previous = state.skillFilter;
    state.skillFilter = id && state.skillFilter !== id ? id : null;
    renderSkills($('#skills'), getCtx());
    renderProjects($('#projects'), getCtx());
    // Both lists were re-rendered, so put focus back somewhere meaningful.
    if (state.skillFilter) {
      actions.go('projects', false);
      $('#projects .filter-note').focus({ preventScroll: true });
    } else if (from === 'skills' && previous) {
      $(`#skills [data-skill="${previous}"]`)?.focus();
    } else {
      actions.go('projects');
    }
  },
  setLang(lang) {
    const d = $('#project-dialog');
    if (d.open) d.close();
    palette.close();
    inspector.close(false);
    state.lang = lang;
    writeLang(storage, lang);
    render();
  },
};

const inspector = createInspector($('#inspector'), getCtx);

const palette = createPalette($('#palette'), {
  getCtx,
  getIndex: () => buildIndex(data, state.lang, (k, v) => t(state.lang, k, v)),
  onSelect: runCommand,
});

function runCommand(item) {
  const c = getCtx();
  if (item.type === 'section') actions.go(item.id);
  else if (item.type === 'project') actions.openProject(item.id, null);
  else if (item.type === 'skill') {
    const skill = data.SKILLS.find((x) => x.id === item.id);
    actions.go('top');
    inspector.open(skill.domain, graph?.nodes.find((n) => n.dataset.domain === skill.domain));
  } else if (item.type === 'action') runAction(item.id, c);
}

function runAction(id, c) {
  const P = data.PROFILE;
  if (id === 'lang') actions.setLang(state.lang === 'en' ? 'ar' : 'en');
  else if (id === 'copy-email') copyText(P.email, null, c);
  else if (id === 'guide') window.location.assign(P.guidePdf);
  else if (id === 'estimator') actions.go('estimator');
  else if (id === 'github') window.open(P.github, '_blank', 'noopener');
  else if (id === 'linkedin') window.open(P.linkedin, '_blank', 'noopener');
}

function render() {
  const c = getCtx();
  const root = document.documentElement;
  root.lang = state.lang;
  root.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.title = c.t('meta.title');
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = c.t(el.dataset.i18n); });
  document.querySelectorAll('kbd[data-shortcut]').forEach((k) => { k.textContent = isMac ? '⌘K' : 'Ctrl K'; });
  const lb = $('#lang-btn');
  lb.textContent = c.t('lang.switch');
  lb.lang = state.lang === 'en' ? 'ar' : 'en';
  lb.setAttribute('aria-label', c.t('lang.aria'));
  renderNav($('#nav'), c);
  graph = renderGraph($('#graph'), c);
  renderAbout($('#about'), c);
  renderSkills($('#skills'), c);
  renderProjects($('#projects'), c);
  renderLog($('#log'), c);
  renderServices($('#services'), c);
  renderCalculator($('#estimator'), c);
  renderContact($('#contact'), c);
}

const toggleLang = () => actions.setLang(state.lang === 'en' ? 'ar' : 'en');
$('#lang-btn').addEventListener('click', toggleLang);
$('#status-lang').addEventListener('click', toggleLang);
motion.addEventListener('change', () => { graph = renderGraph($('#graph'), getCtx()); });
$('#cmd-btn').addEventListener('click', () => palette.open());
$('#status-cmd').addEventListener('click', () => palette.open());
document.addEventListener('keydown', (e) => {
  if (!palette.isOpen && shouldOpenPalette(e)) { e.preventDefault(); palette.open(); }
});
render();
