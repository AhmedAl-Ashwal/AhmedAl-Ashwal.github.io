---
version: alpha
name: alashwal-system-canvas
description: >-
  Ahmed Alashwal's personal system canvas. A navy work canvas with a 24px dot grid, navy panels
  with 1px hairlines and 10px corners, and one accent, cobalt, reserved for what is active right
  now: the selected node, the hovered connection, selection chrome, the primary call to action,
  the estimator result and the Keystone mark's block. IBM Plex Sans carries English, Thmanyah
  Sans and Thmanyah Serif Display carry Arabic, IBM Plex Mono carries every number, ID and key.
  Every object on the canvas is a working control. The system refuses colour gradients, glass,
  neon, skill-percentage bars, decorative icons, green accents and heritage motifs.

colors:
  primary: "#2F5FD0"
  primary-bright: "#6E95F0"
  primary-ink: "#2451C7"
  on-primary: "#FFFFFF"
  canvas: "#0B1628"
  dot: "#1D2C4A"
  panel: "#16233D"
  panel-2: "#1C2B49"
  hairline: "#26365A"
  hairline-strong: "#3A4D75"
  ink: "#F2F5FA"
  ink-muted: "#C9D4E5"
  ink-subtle: "#8FA3C2"
  ink-tertiary: "#5E7090"
  status-ok: "#2E9E6B"
  shadow: "rgba(4,9,20,0.55)"
  overlay: "rgba(4,9,20,0.72)"
  paper: "#F7F8FA"
  paper-surface: "#FFFFFF"
  paper-2: "#E4E9F1"
  paper-line: "#D5DCE8"
  paper-ink: "#0B1628"
  paper-muted: "#33425C"
  paper-subtle: "#5A6B85"

typography:
  display-xl:    { fontFamily: "IBM Plex Sans", fontSize: 60px, fontWeight: 600, lineHeight: 1.06, letterSpacing: -1.6px }
  display-xl-ar: { fontFamily: "Thmanyah Serif Display", fontSize: 56px, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0 }
  headline:      { fontFamily: "IBM Plex Sans", fontSize: 34px, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.6px }
  headline-ar:   { fontFamily: "Thmanyah Serif Display", fontSize: 34px, fontWeight: 700, lineHeight: 1.35, letterSpacing: 0 }
  title:         { fontFamily: "IBM Plex Sans", fontSize: 18px, fontWeight: 600, lineHeight: 1.35, letterSpacing: -0.2px }
  title-ar:      { fontFamily: "Thmanyah Sans", fontSize: 18px, fontWeight: 700, lineHeight: 1.5, letterSpacing: 0 }
  body:          { fontFamily: "IBM Plex Sans", fontSize: 16px, fontWeight: 400, lineHeight: 1.65, letterSpacing: 0 }
  body-ar:       { fontFamily: "Thmanyah Sans", fontSize: 16px, fontWeight: 400, lineHeight: 1.9, letterSpacing: 0 }
  body-sm:       { fontFamily: "IBM Plex Sans", fontSize: 14px, fontWeight: 400, lineHeight: 1.6, letterSpacing: 0 }
  body-sm-ar:    { fontFamily: "Thmanyah Sans", fontSize: 14px, fontWeight: 400, lineHeight: 1.8, letterSpacing: 0 }
  mono:          { fontFamily: "IBM Plex Mono", fontSize: 12.5px, fontWeight: 500, lineHeight: 1.4, letterSpacing: 0.3px }
  mono-num:      { fontFamily: "IBM Plex Mono", fontSize: 15px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  price:         { fontFamily: "IBM Plex Mono", fontSize: 30px, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.6px }

rounded:
  xs: 4px
  sm: 6px
  md: 10px
  pill: 999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  gutter: 24px

components:
  top-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  eyebrow:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.mono}"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
  panel-meta:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
  node:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
  node-meta:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.mono}"
  chip:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
  link:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.primary-bright}"
    typography: "{typography.body-sm}"
  estimate-result:
    backgroundColor: "{colors.panel-2}"
    textColor: "{colors.primary-bright}"
    typography: "{typography.price}"
  status-bar:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.mono}"
  guide-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-muted}"
    typography: "{typography.body-sm}"
  guide-meta:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-subtle}"
    typography: "{typography.mono}"
  guide-title:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.headline-ar}"
  guide-accent:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.mono-num}"
---

## Overview

The site is Ahmed's work canvas: a navy surface `{colors.canvas}` with a 24px dot grid in
`{colors.dot}`. Everything on it behaves like an object in an engineering tool. The hero is a live
system graph, sections are frames and files, and the contact block is an inspector panel. The idea
is literal: every skill connects back to one engineer, and every claim links to a project that
proves it.

Cobalt is the only accent. On dark surfaces it is `{colors.primary-bright}` for lines, text and
selection, and `{colors.primary}` for fills (primary button, the Keystone block). On light sheets
(the price guide) text accents use `{colors.primary-ink}`. It never fills a section or a card.
`{colors.status-ok}` is a semantic status colour for the availability dot only.

**Key Characteristics:**
- Navy dot-grid canvas; panels `{colors.panel}` → `{colors.panel-2}` with 1px `{colors.hairline}` and 10px corners.
- One accent (cobalt) for what is active right now; no second chromatic colour.
- Hierarchy through the surface step and hairlines; one shadow `{colors.shadow}`, only on floating panels.
- IBM Plex Sans (EN), Thmanyah (AR), IBM Plex Mono for every number, ID and key.
- No gradients, glass, neon, percentage bars, decorative icons or heritage ornament.

## Colors

- **Primary / Primary Bright / Primary Ink:** cobalt fill / cobalt on dark / cobalt text on light.
- **Canvas → Panel → Panel 2:** page → cards and frames → nodes, chips, nested panels.
- **Hairline / Hairline Strong:** 1px borders / section rules, traces at rest.
- **Ink → Ink Muted → Ink Subtle → Ink Tertiary:** headings → body → meta → decorative only.
- **Paper set:** the light sheets of the printed price guide.

## Typography

| Token | Use |
|---|---|
| `{typography.display-xl}` / `-ar` | Hero title |
| `{typography.headline}` / `-ar` | Section titles |
| `{typography.title}` / `-ar` | Node, card and frame titles |
| `{typography.body}` / `-ar` | Body |
| `{typography.mono}` | Eyebrows, IDs, axis, status bar |
| `{typography.price}` | Estimator total |

Arabic is never letter-spaced. Latin tech names inside Arabic lines are isolated with `unicode-bidi: isolate`.

### Note on Font Substitutes
Thmanyah is licensed for personal use. The fallback that keeps the system intact is IBM Plex Sans Arabic, which is loaded as a fallback face.

## Layout

Base 4px. Content max width 1180px, gutter `{spacing.gutter}`; sections separated by `{spacing.section}`.
The hero graph uses three columns (4 nodes | core | 4 nodes) above 860px and stacks below.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Canvas + dot grid | Page |
| 1 | `{colors.panel}` + hairline | Frames, files, estimator |
| 2 | `{colors.panel-2}` + hairline | Nodes, chips, result panel |
| float | `{colors.panel}` + hairline-strong + `{colors.shadow}` | Inspector, palette, dialogs |

The dot grid is a pattern, not a colour gradient; it is the only background decoration.

## Shapes

`{rounded.xs}` chips · `{rounded.sm}` buttons, inputs · `{rounded.md}` panels, nodes · `{rounded.pill}` status dot only.
Keystone mark: A with two 4.2-unit legs on a 48-unit box, no crossbar; a 10×10 cobalt square sits where the crossbar would be.

## Components

top-bar, eyebrow, panel, node, chip, button-primary, button-ghost, link, estimate-result, status-bar;
guide-sheet / guide-title / guide-accent for the printed guide.

## Do's and Don'ts

### Do
- Tie every skill to projects; show "other work" instead of inventing numbers.
- Put every number in IBM Plex Mono.
- Keep cobalt to one active thing per view.

### Don't
- No green except the status dot; no `#5B9DFF`, no `#3ECF8E`, no `< • >` mark.
- No gradients, glass, neon glow, skill bars, emoji or decorative icons.
- No letter-spacing on Arabic.

## Responsive Behavior

| Width | Change |
|---|---|
| ≤ 900px | Top-bar nav hides (palette and status bar remain) |
| ≤ 860px | Graph stacks; traces hide; estimator stacks |
| ≤ 820px | Projects 1-up; contact stacks |
| ≤ 700px | Inspector becomes a bottom sheet; hero title 40px |

## Iteration Guide

1. Change one component at a time by its `components:` name.
2. Run `python <skill>/scripts/design_md.py check DESIGN.md` after every edit, then re-export tokens.
3. Accent budget: one cobalt focus per view.

## Known Gaps

- No light theme for the site; the paper tokens serve the printed guide only.
