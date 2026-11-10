# Carbon Design System

A design system extracted from the Figma community file **"(v11) Carbon Design System (Community).fig"**, which was mounted as a read-only virtual filesystem during the build. Everything in `tokens.json`, `components/` and `assets/` comes out of that file — variable values, variant axes, glyph paths — not from public documentation. The system was built in the standalone version and moved here; the old file layout and where each piece now lives is recorded at the end of this README.

## Sources

| Source | Detail |
| --- | --- |
| Figma file | `(v11) Carbon Design System (Community).fig` — attached by the user, mounted as a VFS. Not a shareable link; the reader may not have it. |
| Token collections | Figma Variables: Ungrouped, Theme, Tag, AI, Spacing, Radius, Breakpoint, Grid mode — 6,155 variables across 67 modes. The colours, spacing, radius, type and motion values the page can hold are in `tokens.json` (587 colours in 8 themes); the readable `--cds-*` role aliases and every remaining variable stay declared in `components/bundle.css`. |
| Text styles | The file defines **no** Figma TEXT styles. The type system lives entirely in Variables (`fixed/*` and `fluid/*` groups) and was transcribed by hand into the `.cds-*` classes in `components/bundle.css`; the Productive and Expressive groups of `tokens.json` carry the same values as `type-*` styles. |
| Fonts | IBM Plex Sans + IBM Plex Mono. No binaries ship inside a `.fig`; the faces in `fonts/` come from IBM's official `@ibm/plex-sans` and `@ibm/plex-mono` packages (Sans 300, 400, 400 italic, 600; Mono 400, 600) under the SIL Open Font License (`fonts/OFL-LICENSE.txt`). `bundle.css` also imports them from Google Fonts as a fallback. |
| Logo / brand mark | **The source file contains no logo or wordmark.** Nothing was drawn to fill the gap — the brand name renders in plain IBM Plex Sans wherever a mark would go, including the cover. |

## Product context

Carbon is an open-source design system for building products and digital experiences. It is not a marketing brand system: there is no hero imagery, no illustration library, no photography treatment in the file. What the file *is* is an exhaustive interface toolkit — four themes, a 16-column grid, a two-family type stack, and a component library for dense, data-heavy enterprise software (cloud consoles, admin dashboards, resource tables, configuration forms).

Two consequences for anyone designing with it:

1. **Productive over expressive.** Nearly every component is tuned for information density — 32px and 40px control heights, 14px body copy, zero corner radius. The expressive end of the system (fluid display type, 96px spacing) exists for a small number of marketing and landing surfaces.
2. **The theme is the palette.** You almost never reach for `--cds-blue-60` directly. You reach for `--cds-button-primary`, `--cds-layer-01`, `--cds-text-secondary` — semantic roles that re-resolve when the theme changes. Hard-coding a ramp value breaks dark mode.

---

## CONTENT FUNDAMENTALS

**Voice.** Plain, declarative, unhurried. The system's own copy never sells and never jokes. Labels are nouns; actions are verbs; messages state a fact and, where useful, a next step.

**Casing.** Sentence case everywhere — buttons, headings, table column headers, menu items, tabs, form labels. `Create resource`, not `Create Resource`. The only exceptions are proper nouns and acronyms. There is no all-caps styling and no small-caps.

**Person.** Second person for instructions addressed to the user (`Select a region`, `Your changes have been saved`). First person only inside consent and ownership statements (`I agree to the terms`). Never first-person plural on behalf of the product — no "we've saved your changes".

**Punctuation.** No terminal period on labels, buttons, headings, table cells or single-sentence helper text. Periods appear in multi-sentence body copy and inside notification descriptions. No exclamation marks.

**Length.** Button labels are one to three words. Form labels are one to four. Helper text is one sentence. Error messages name the constraint, not the failure: `Password must be at least 8 characters`, not `Invalid password`.

**Emoji.** Never. Not in labels, not in empty states, not in documentation. The icon library covers every case emoji would otherwise fill.

**Examples pulled from the file's own component content:**

- Buttons: `Primary`, `Secondary`, `Ghost`, `Danger`, `View all`, `Cancel`
- Table headers: `Name`, `Rule`, `Status`, `Other`, `Example`
- Helper text: `Optional helper text`
- Placeholder: `Placeholder text`
- Errors: `Error message`, shown below the field in `--cds-text-error`
- Empty/loading: `Loading`, `Fetching assets…`

**Numbers and units.** Digits always, never spelled out. Units are separated by a space and lower-cased (`24 px`, `4 GB`, `2 vCPU`). Ranges use an en dash.

---

## VISUAL FOUNDATIONS

### Colour

A 10-step ramp (10 → 100) for each of thirteen hues plus three neutral greys (gray, cool gray, warm gray). Ramps are raw material; product work uses the **Theme** collection's semantic roles. Four themes ship: White, Gray 10 (both light) and Gray 90, Gray 100 (both dark). In this artifact the theme picker sets `data-theme` (`default` is White, then `root-gray-10`, `root-gray-90`, `root-gray-100`), which re-resolves every token in `tokens.json`. The `--cds-*` role aliases in `bundle.css` still follow the original switch, `data-mode="gray-10-theme" | "gray-90-theme" | "gray-100-theme"` on `:root`, so code consuming the bundle sets both; each component preview here mirrors `data-theme` onto `data-mode` for that reason. The other four entries in the theme list (`root-md-672px`, `root-lg-1056px`, `root-xl-1312px`, `root-max-max-plus-1584-1784px`) are the file's breakpoint modes, not colour themes.

The interactive colour is Blue 60 in light themes, Blue 50 in dark. Every accent has a dedicated hover token (`--cds-hover-*`) rather than an opacity or filter.

### Layering

The single most important structural idea. Surfaces nest: `background` → `layer-01` → `layer-02` → `layer-03`, each one step lighter (light themes) or lighter-grey (dark themes) than its parent. Controls sitting on a layer use the matching `field-0n`; rules and accents use `layer-accent-0n`. Get the layer wrong and the whole screen reads as flat.

### Type

IBM Plex Sans for everything; IBM Plex Mono for code and token names. Two scales:

- **Fixed** — the productive scale. `label-01` 12/16, `body-01` 14/20, `body-02` 16/24, `heading-01` 14/18 at 600, up to `heading-07` 54/64 at 300. Compact variants (`body-compact-01` 14/18) tighten line-height for dense tables and controls.
- **Fluid** — `display-01`…`display-04`, `quotation-*`, `paragraph-01`, which step up at 672 / 1312 / 1584px. `display-04` runs 42px on small screens and 156px at max.

Tracking is not zero at small sizes: 12px carries **0.32px**, 14px carries **0.16px**, 16px and above carry 0. Large display sizes go negative (−0.64px, −0.96px). These are the file's exact values.

Weight does the hierarchy work, and it runs *backwards* from most systems: small headings are SemiBold 600, large headings are Light 300.

### Spacing

A 13-step scale — 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160 — mirrored into negatives. It is not a pure 8px grid: 2, 4 and 12 exist and are used constantly (12px is the standard horizontal pad inside a small control). Control heights are a separate, fixed set: 24 / 32 / 40 / 48 / 64 / 80.

Layout is a 16-column 2x grid, 32px gutters (1px condensed), 16px outer margin.

### Corner radius

**Zero.** The Radius collection contains exactly two values: `none` (0) and `round` (100px). There is no 4px, no 8px, no "slightly rounded card". Square corners are the most recognisable thing about the system. `round` appears only on pills — tags, and the optional round button.

### Borders and shadows

Borders carry the weight that shadows carry elsewhere. A 1px `--cds-border-subtle-0n` hairline separates most surfaces; `--cds-border-strong-0n` marks inputs and interactive edges; `--cds-border-interactive` (Blue 60) marks selection. Tiles get `--cds-border-tile-0n`.

There is essentially **no shadow system**. Overlays use a flat `--cds-overlay` scrim. The only defined drop shadows in the whole file belong to the AI components — `ai-drop-shadow`, `ai-inner-shadow`, and the two-layer `ai-callout-shadow-first/second` — which is precisely why AI surfaces read as floating and everything else reads as flush.

Focus is not a shadow either: a 2px solid `--cds-focus` outline, with `--cds-focus-inset` for the inner ring on filled controls and `--cds-focus-inverse` on dark grounds. Never a soft glow.

### Cards / tiles

A tile is a rectangle of `--cds-layer-01` with a 1px `--cds-border-tile-01`, square corners, 16px padding, no shadow. Clickable tiles darken to `--cds-layer-hover-01`; selected tiles take a 1px `--cds-border-interactive` edge plus `--cds-layer-selected-01`. That is the whole card language.

### Interaction states

- **Hover** — a named token, always. `--cds-button-primary-hover`, `--cds-layer-hover-01`, `--cds-hover-blue-60`. Never an opacity change, never a CSS filter.
- **Press / active** — a further, darker named token (`--cds-*-active`). No scale transform, no shrink. The system does not bounce.
- **Selected** — `--cds-layer-selected-0n` plus a border or a 3px accent bar (tabs, side nav).
- **Disabled** — `--cds-button-disabled`, `--cds-text-disabled`, `--cds-border-disabled`. Disabled elements stay at full opacity; the colour carries the state.

### Motion

The file carries no motion variables, so the `cds-ease-*` and `cds-duration-*` tokens supply Carbon's published values (flagged below as an intentional addition). Two easing families: **productive** `cubic-bezier(.2,0,.38,.9)` at 70–240ms for anything the user triggered, and **expressive** `cubic-bezier(.4,.14,.3,1)` at 400–700ms for entrances and larger surfaces. Transitions are colour and position; they are not fades, and they never bounce or overshoot.

### Transparency and blur

Almost none. `--cds-overlay` is the one translucent surface. There is no backdrop blur, no frosted glass, no glassmorphism anywhere in the file. Tag "transparent" borders and `--cds-neutral-transparent` exist to keep layout stable, not as a visual effect.

### Imagery and backgrounds

The file contains no photography, no illustration, no texture, no pattern and no gradient backgrounds. Surfaces are flat colour, full stop. The **only** gradients in the entire token set are the AI ones: `ai-aura-start → ai-aura-end`, `ai-border-start → ai-border-end`, and the two-stop slug gradient. Gradient therefore *means* AI in this system — using one decoratively is a semantic error, not just a stylistic one.

### Layout rules

The UI shell is fixed: a 48px header pinned to the top, a 256px side nav and a 256px right panel. Content scrolls under them. Data tables use sticky headers and a 48px (or 40px compact) row height.

---

## ICONOGRAPHY

**System.** Carbon's own icon library. Glyphs are SVG on a 32×32 viewBox, rendered at 16px (inline, inside controls), 20px (toolbars) or 24px (standalone), with `fill="currentColor"` so they inherit `--cds-icon-primary` / `--cds-icon-secondary` / `--cds-icon-on-color`.

**Style.** Solid fill, no strokes, no outline variants, 1px-equivalent optical weight, square-ish terminals matching the zero-radius geometry. Status glyphs come in outline and `-Filled` pairs (`Checkmark` / `CheckmarkFilled`, `Warning` / `WarningFilled`) — filled for inline status, outline for decorative.

**What shipped here.** 61 glyphs were extracted from the source file's component instances and are bundled into `components/bundle.js` behind the `Icon` component (`<Icon name="Add" size={16} />`; sources in `components/src/assets/icons/`). The Icons asset group holds a specimen sheet of all of them (`assets/icons/carbon-glyphs.svg`); for use in code, take them from the bundle:

`Add Analytics ArrowDown ArrowRight ArrowUp Bee CaretDown CaretLeft CaretRight Caution CheckboxCheckedFilled CheckboxIndeterminateFilled Checkmark CheckmarkFilled CheckmarkOutline ChevronDown ChevronLeft ChevronRight ChevronUp CircleDash CircleFill CircleStroke Close Copy Critical CriticalSeverity Debug DiamondFill Document Edit ErrorFilled Filter Folder Help Image InProgress Incomplete Information InformationFilled InformationSquareFilled Launch LowSeverity Moon OverflowMenuHorizontal OverflowMenuVertical PendingFilled RadioButton RadioButtonChecked Renew Search Settings Subtract UndefinedFilled Undo UnknownFilled View ViewOff Warning WarningAltFilled WarningAltInvertedFilled WarningFilled`

These are the glyphs the file itself uses. They are extracted paths, not redraws. For anything outside this set, pull from `@carbon/icons` (2,000+ glyphs, same geometry) rather than substituting another library — mixing stroke icons into Carbon is immediately visible.

**No icon font.** SVG only. **No emoji.** **No unicode glyphs as icons** — chevrons, arrows and ellipses are all real SVG.

---

## Intentional additions

Three things here have no direct counterpart in the source file. They are called out so nobody mistakes them for extracted data:

- **The motion tokens** (`cds-ease-*`, `cds-duration-*`) — the file carries no motion variables; these are Carbon's published easing curves and durations.
- **The `Icon` component** — a wrapper component so the 61 extracted glyphs are addressable by name. The file has no "Icon" component set; the glyphs are raw vectors inside instances.
- **The `--cds-*` aliases in `bundle.css`** — readable names over the machine-named Figma variables. Same values, friendlier names.

Nothing else was invented. There is no logo, so none was drawn.

---

## Where things are

| Path | What it is |
| --- | --- |
| `tokens.json` | Colours (8 themes), spacing, radius, shadow, motion, weights and the type styles, each with a usage note. `tokens.css` is generated from it. |
| `components/bundle.css` | The original global stylesheets in one sheet: the `--cds-*` role aliases, the `.cds-*` type classes and every variable `tokens.json` cannot hold. |
| `components/bundle.js` | All 47 exports on `window.CarbonDesignSystem_c5eb93`; React 18.3.1 is packed in `components/lib/`. |
| `components/<Name>/` | Per component: `README.md` (when and how), `<Name>.d.ts` (props) and `preview.html` (live examples). |
| `components/Actions`, `Data`, `Forms`, `Navigation` | The four showcase pages from the standalone version, kept whole. |
| `components/src/` | The JSX sources the bundle was built from. |
| `guidelines/*.card.html` | Foundation specimen cards from the standalone version (colour, type, spacing, grid, themes). |
| `fonts/` | IBM Plex Sans and Mono, woff2, with the OFL licence. |
| `assets/icons/` | A specimen sheet of the 61 glyphs, the group's README and the original icon card. |
| `assets/notes/` | The migration report, the carried README and the standalone skill file. |

### Components

**Actions** — Button, ComboButton, IconButton, Link, MenuButton, OverflowMenu

**Forms** — Checkbox, CheckboxGroup, DatePicker, Dropdown, FileUploader, Form, FormGroup, FormLabel, Stack, NumberInput, PasswordInput, RadioButton, RadioButtonGroup, Search, Select, Slider, TextArea, TextInput, StatusGlyph, TimePicker, Toggle

**Data** — CodeSnippet, ContainedList, DataTable, UnorderedList, OrderedList, ListItem, Pagination, StructuredList, Tag, TAG_COLORS, Tile

**Navigation** — Breadcrumb, ContentSwitcher, Menu, SideNav, SwitcherPanel, Tabs, TreeView, UIShellHeader

**Icons** — Icon

Every export has a live preview. Known issue: `UIShellHeader` draws a light bar in the dark themes, because its fill resolves to the inverse background there; Carbon's header stays Gray 100.

### Not yet built

Coverage is **incomplete**, and the Figma file was detached before it could be finished. Component families from the source that have no implementation yet include the feedback group (Notification, Modal, Loading, ProgressBar, ProgressIndicator, InlineLoading, Toggletip, Tooltip, Popover, Accordion), the AI group (AI label/slug, chat surfaces — the tokens for these *are* present in `tokens.json` and `components/bundle.css`), and the UI kits (full-screen product recreations). See the caveats at the end of the build conversation; re-attaching the `.fig` is required to finish these against the source rather than from memory.

## Migrated from a legacy design system

This system was carried over from the standalone version on 2026-09-18. The part of this README the author wrote predates the move, so any file names in it are the old ones. Where things are now:

- `styles.css`, `tokens/fonts.css`, `tokens/fig-tokens.css`, `tokens/fig-typography.css`, `tokens/theme.css`, `tokens/spacing.css`, … and 3 more (the global stylesheets) → `project/components/bundle.css`, with the token declarations moved to `project/tokens.json` (`project/tokens.css` is generated from them)
- `_ds_bundle.js` → `project/components/bundle.js`
- showcase pages, each kept whole as one component’s preview (a page of examples, not an export of the bundle): `components/actions/actions.card.html` → `project/components/Actions/preview.html`; `components/data/data.card.html` → `project/components/Data/preview.html`; `components/forms/forms.card.html` → `project/components/Forms/preview.html`; `components/navigation/navigation.card.html` → `project/components/Navigation/preview.html`
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
