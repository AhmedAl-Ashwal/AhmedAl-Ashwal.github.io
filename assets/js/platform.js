// Browser-facing helpers kept pure so they can be tested in Node.
const LANGS = ['en', 'ar'];

export function readLang(storage, query = null) {
  if (LANGS.includes(query)) return query;
  try {
    const saved = storage?.getItem('lang');
    return LANGS.includes(saved) ? saved : 'en';
  } catch {
    return 'en';
  }
}

export function writeLang(storage, lang) {
  try {
    storage?.setItem('lang', lang);
  } catch {
    // Storage blocked (private mode, disabled site data): the choice lasts for this page view only.
  }
}

export function shouldOpenPalette(e) {
  const key = String(e.key ?? '').toLowerCase();
  if ((e.ctrlKey || e.metaKey) && (key === 'k' || e.code === 'KeyK')) return true;
  const isSlash = key === '/' || e.code === 'Slash';
  if (!isSlash || e.ctrlKey || e.metaKey || e.altKey) return false;
  const tag = e.target?.tagName;
  const typing = e.target?.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  return !typing;
}
