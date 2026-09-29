import test from 'node:test';
import assert from 'node:assert/strict';
import { readLang, writeLang, shouldOpenPalette } from '../assets/js/platform.js';

test('readLang falls back to English when storage throws, is missing or holds junk', () => {
  const throwing = { getItem() { throw new Error('blocked'); } };
  assert.equal(readLang(throwing), 'en');
  assert.equal(readLang(null), 'en');
  assert.equal(readLang({ getItem: () => 'fr' }), 'en');
  assert.equal(readLang({ getItem: () => 'ar' }), 'ar');
});

test('a valid ?lang= value wins over storage; an invalid one is ignored', () => {
  assert.equal(readLang({ getItem: () => 'en' }, 'ar'), 'ar');
  assert.equal(readLang({ getItem: () => 'ar' }, 'xx'), 'ar');
  assert.equal(readLang({ getItem() { throw new Error('x'); } }, 'ar'), 'ar');
});

test('writeLang swallows storage errors', () => {
  assert.doesNotThrow(() => writeLang({ setItem() { throw new Error('quota'); } }, 'ar'));
  assert.doesNotThrow(() => writeLang(null, 'ar'));
});

test('Ctrl/Cmd+K opens the palette, even inside inputs and on an Arabic layout', () => {
  assert.equal(shouldOpenPalette({ key: 'k', ctrlKey: true, target: { tagName: 'INPUT' } }), true);
  assert.equal(shouldOpenPalette({ key: 'K', metaKey: true, target: {} }), true);
  assert.equal(shouldOpenPalette({ key: 'ن', code: 'KeyK', ctrlKey: true, target: {} }), true);
});

test('"/" opens the palette only outside text fields, on any layout', () => {
  assert.equal(shouldOpenPalette({ key: '/', target: { tagName: 'BODY' } }), true);
  assert.equal(shouldOpenPalette({ key: 'ظ', code: 'Slash', target: { tagName: 'BUTTON' } }), true);
  assert.equal(shouldOpenPalette({ key: '/', target: { tagName: 'INPUT' } }), false);
  assert.equal(shouldOpenPalette({ key: '/', target: { tagName: 'TEXTAREA' } }), false);
  assert.equal(shouldOpenPalette({ key: '/', target: { tagName: 'DIV', isContentEditable: true } }), false);
  assert.equal(shouldOpenPalette({ key: 'k', target: {} }), false);
  assert.equal(shouldOpenPalette({ key: '/', altKey: true, target: {} }), false);
});
