// Price-guide arithmetic. Pure and deterministic; the UI lives in calculator.js.
export const PRICES = Object.freeze({
  website: { basic: { min: 3000, max: 4000 }, full: { min: 4000, max: 5000 } },
  extraItem: { min: 300, max: 500 },
  dashboard: { standard: { min: 3000, max: 4000 }, medium: { min: 5000, max: null }, large: { min: 6000, max: null } },
  extraSection: 500,
  chatbot: 2000,
  maxCount: 20,
});

const WEBSITE = ['none', 'basic', 'full'];
const DASHBOARD = ['none', 'standard', 'medium', 'large'];

function count(value) {
  if (value === null || value === undefined || value === '') return 0;
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(n, PRICES.maxCount);
}

export function normalizeSelection(sel = {}) {
  const src = sel ?? {};
  const website = WEBSITE.includes(src.website) ? src.website : 'none';
  const dashboard = DASHBOARD.includes(src.dashboard) ? src.dashboard : 'none';
  return {
    website,
    extras: count(src.extras),
    dashboard,
    sections: dashboard === 'large' ? count(src.sections) : 0,
    chatbot: src.chatbot === true,
  };
}

export function estimate(input) {
  const sel = normalizeSelection(input);
  const lines = [];
  if (sel.website !== 'none') {
    const p = PRICES.website[sel.website];
    lines.push({ key: `website.${sel.website}`, qty: 1, min: p.min, max: p.max });
  }
  if (sel.extras > 0) {
    lines.push({ key: 'extras', qty: sel.extras, min: sel.extras * PRICES.extraItem.min, max: sel.extras * PRICES.extraItem.max });
  }
  if (sel.dashboard !== 'none') {
    const p = PRICES.dashboard[sel.dashboard];
    lines.push({ key: `dashboard.${sel.dashboard}`, qty: 1, min: p.min, max: p.max });
  }
  if (sel.sections > 0) {
    const cost = sel.sections * PRICES.extraSection;
    lines.push({ key: 'sections', qty: sel.sections, min: cost, max: cost });
  }
  if (sel.chatbot) lines.push({ key: 'chatbot', qty: 1, min: PRICES.chatbot, max: PRICES.chatbot });

  const openEnded = lines.some((l) => l.max === null);
  const min = lines.reduce((sum, l) => sum + l.min, 0);
  const max = openEnded ? null : lines.reduce((sum, l) => sum + l.max, 0);
  return { selection: sel, lines, min, max, openEnded, empty: lines.length === 0 };
}

const numberFormat = new Intl.NumberFormat('en-US');
export const formatSAR = (n) => numberFormat.format(n);

export function formatAmount(min, max, lang) {
  const currency = lang === 'ar' ? 'ريال' : 'SAR';
  if (max === null) return lang === 'ar' ? `تبدأ من ${formatSAR(min)} ${currency}` : `From ${formatSAR(min)} ${currency}`;
  if (min === max) return `${formatSAR(min)} ${currency}`;
  return `${formatSAR(min)} – ${formatSAR(max)} ${currency}`;
}

const SINGULAR_KEYS = new Set(['extras', 'sections']);
export const lineLabel = (line, tt) =>
  tt(SINGULAR_KEYS.has(line.key) && line.qty === 1 ? `line.${line.key}.one` : `line.${line.key}`, { n: line.qty });

export function buildMessage(result, lang, tt) {
  const rows = result.lines.map((l) => `- ${lineLabel(l, tt)}: ${formatAmount(l.min, l.max, lang)}`);
  return [tt('msg.hello'), '', tt('msg.intro'), ...rows, '', `${tt('msg.total')}: ${formatAmount(result.min, result.max, lang)}`].join('\n');
}

export const mailtoHref = (email, subject, body) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const waHref = (phone, text) => `https://wa.me/${String(phone).replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
