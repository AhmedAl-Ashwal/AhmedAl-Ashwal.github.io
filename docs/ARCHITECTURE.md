# Architecture

Static site, no build step. GitHub Pages and Vercel serve the repository root as-is.

## Modules (`assets/js`, ES modules)

| Module | Kind | Responsibility |
|---|---|---|
| `data.js` | pure | All content: profile, domains, skills, projects, log, services |
| `i18n.js` | pure | UI strings (en/ar) and `t()` |
| `model.js` | pure | Skill ↔ project ↔ domain lookups |
| `estimator.js` | pure | Price-guide arithmetic, formatting, email/WhatsApp links |
| `search.js` | pure | Command index and ranking (Arabic-normalised) |
| `platform.js` | pure | Language preference and palette shortcut rules |
| `dom.js` | DOM | Safe element builders |
| `render.js` | DOM | Nav, about, skills, projects + dialog, log, services, contact |
| `graph.js` | DOM | Hero system graph and inspector |
| `calculator.js` | DOM | Estimator form and result |
| `palette.js` | DOM | Command palette |
| `main.js` | DOM | Boot, state, language switching, wiring |

## Design tokens

`DESIGN.md` is the contract. `assets/css/tokens.css` is generated from it:
`python <design-md skill>/scripts/design_md.py export DESIGN.md --format css -o assets/css/tokens.css`.
Never edit `tokens.css` by hand.

## External resources

- Google Fonts: IBM Plex Sans, IBM Plex Mono, IBM Plex Sans Arabic (fallback).
- jsDelivr: `@dawod/thmanyah-font-web@1.2.0` (Thmanyah Sans, Serif Display). Personal-use licence.

## Tests

`node --test "tests/*.test.mjs"` (Node 22+, no dependencies). Pure modules only.

## Languages

English by default. `?lang=ar|en` overrides the stored choice; the toggle stores it in `localStorage` when allowed.
