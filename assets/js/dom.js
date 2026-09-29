// Tiny element builders. Text always goes in as text nodes, never as HTML.
const SVG_NS = 'http://www.w3.org/2000/svg';

function applyAttrs(el, attrs) {
  for (const [k, v] of Object.entries(attrs ?? {})) {
    if (v == null || v === false) continue;
    if (k === 'class') el.setAttribute('class', v);
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : String(v));
  }
}

function append(el, children) {
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}

export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  applyAttrs(el, attrs);
  append(el, children);
  return el;
}

export function s(tag, attrs = {}, ...children) {
  const el = document.createElementNS(SVG_NS, tag);
  applyAttrs(el, attrs);
  append(el, children);
  return el;
}

export function clear(el) {
  el.replaceChildren();
  return el;
}

export const pad = (n) => String(n).padStart(2, '0');

export function mark(size = 28) {
  return s('svg', { class: 'mark', viewBox: '0 0 48 48', width: size, height: size, 'aria-hidden': 'true', focusable: 'false' },
    s('path', { d: 'M8 43 24 5l16 38', class: 'mark__legs' }),
    s('rect', { x: 19, y: 26, width: 10, height: 10, class: 'mark__block' }));
}
