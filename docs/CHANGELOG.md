# Changelog

All notable changes to this project are documented here, in the style of [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- System-canvas redesign: hero system graph with an inspector, README panel, skill map with project evidence, eight project frames with detail dialogs, `git log` timeline, services grid, project estimator, contact inspector, status bar and a Ctrl/⌘K command palette.
- `DESIGN.md` token contract and generated `assets/css/tokens.css`.
- Keystone mark and navy/cobalt identity; new favicon.
- `?lang=ar|en` links.
- Price guide v3 PDF at `assets/files/web-pricing-guide-2026.pdf`.
- Unit tests for data integrity, estimator, search and platform helpers (`node --test "tests/*.test.mjs"`).
- `docs/ARCHITECTURE.md` and this changelog.
- Test that the service cards and the estimator quote the same prices.

### Changed
- Prices follow the October 2026 list: an extra page is 100–200 SAR and an extra feature 200–300 SAR (both were one 300–500 "extra item"), and an extra dynamic section is 250 SAR (was 500). The estimator counts pages and features separately.
- Services grid lists the eight price points (website, content preparation, extra pages, extra features, the three dashboard tiers, AI chatbot) instead of four summaries; the chatbot card names Google, Anthropic and OpenAI.
- Price guide PDF rebuilt as v4 with the same prices; its price chart shows pages and features as separate rows.
- The site URL is now `https://ahmed-alashwal-sandy.vercel.app/` in the Open Graph tag, the structured data, the profile data and the README; the price guide's contact line, page footers and QR code point there too.
- Automated-test counts are no longer used as selling points: project highlights now show currencies and books per institute (Wasl), the app and its dashboard (Fasl) and encrypted cross-device sync (Aman); About shows years of experience instead of a test total.
- Content rewritten from verified project history; clients shown by sector only.
- Contact email is now `aalashwal.sa@gmail.com`.
- Arabic set in Thmanyah; English in IBM Plex.

### Removed
- Personal photo: removed from the hero graph (the Keystone mark is now the core node), the social preview image and the structured data; `assets/images/profile.png` deleted.
- The *qamariyya*/System Map design, the `< • >` logo and the old single-file `main.js` dictionary.
