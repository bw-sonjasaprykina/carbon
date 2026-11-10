# Migration report — `Carbon Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Carbon Design System` — a design-system project from the standalone version (authored there, namespace `CarbonDesignSystem_c5eb93`), so it becomes a system made from the Design System type rather than a canvas.  
Result: 587 colors × 8 theme(s), 60 spacing, 5 radius, 22 shadow, 12 motion, 12 font stacks, 0 font files, 190 other tokens (2798 dropped); 51 components (4 with previews); 0 starter template(s) kept aside; 154 files in the system’s table (2.0 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).

- `readme             1 file      16 KB`
- `extra sections     1 file      389 B`
- `tokens             1 file     165 KB`
- `manifest           1 file      12 KB`
- `bundle.js          1 file     197 KB`
- `bundle.css         1 file     291 KB`
- `libraries          2 files    142 KB`
- `d.ts              38 files     33 KB`
- `previews+guides   45 files     30 KB`
- `sources           39 files    158 KB`
- `assets             2 files      4 KB`
- `other             24 files    259 KB`

Build warnings (58):

- `component Icon: no components/Icon/preview.html`
- `component Button: no components/Button/preview.html`
- `component ComboButton: no components/ComboButton/preview.html`
- `component IconButton: no components/IconButton/preview.html`
- `component Link: no components/Link/preview.html`
- `component MenuButton: no components/MenuButton/preview.html`
- `component OverflowMenu: no components/OverflowMenu/preview.html`
- `component CodeSnippet: no components/CodeSnippet/preview.html`
- `component ContainedList: no components/ContainedList/preview.html`
- `component DataTable: no components/DataTable/preview.html`
- `component UnorderedList: no components/UnorderedList/preview.html`
- `component OrderedList: no components/OrderedList/preview.html`
- `component ListItem: no components/ListItem/preview.html`
- `component Pagination: no components/Pagination/preview.html`
- `component StructuredList: no components/StructuredList/preview.html`
- `component Tag: no components/Tag/preview.html`
- `component TAG_COLORS: no components/TAG_COLORS/preview.html`
- `component Tile: no components/Tile/preview.html`
- `component Checkbox: no components/Checkbox/preview.html`
- `component CheckboxGroup: no components/CheckboxGroup/preview.html`
- `component DatePicker: no components/DatePicker/preview.html`
- `component Dropdown: no components/Dropdown/preview.html`
- `component FileUploader: no components/FileUploader/preview.html`
- `component Form: no components/Form/preview.html`
- `component FormGroup: no components/FormGroup/preview.html`
- `component FormLabel: no components/FormLabel/preview.html`
- `component Stack: no components/Stack/preview.html`
- `component NumberInput: no components/NumberInput/preview.html`
- `component PasswordInput: no components/PasswordInput/preview.html`
- `component RadioButton: no components/RadioButton/preview.html`
- `component RadioButtonGroup: no components/RadioButtonGroup/preview.html`
- `component Search: no components/Search/preview.html`
- `component Select: no components/Select/preview.html`
- `component Slider: no components/Slider/preview.html`
- `component TextArea: no components/TextArea/preview.html`
- `component TextInput: no components/TextInput/preview.html`
- `component StatusGlyph: no components/StatusGlyph/preview.html`
- `component TimePicker: no components/TimePicker/preview.html`
- `component Toggle: no components/Toggle/preview.html`
- `component Breadcrumb: no components/Breadcrumb/preview.html`
- +18 more

Build notes:

- `manifest.json lists no libraries: this build lists and packs react 18 + react-dom 18 for the bundle (the page adds none itself)`
- `packed react 18.3.1 + react-dom 18.3.1 into components/lib/ (139 KB) — manifest.json libraries[].file`
- `1 extra section(s): docs/components/data/List.md`
- `24 files outside the layout, kept as is (listed under Claude’s context, no section of their own): docs/_ds_bundle.js, guidelines/color-ai.card.html, guidelines/color-blue.card.html, guidelines/color-button.card.html, guidelines/color-cool.card.html, guidelines/color-gray.card.html, guidelines/color-layer.card.html, guidelines/color-notification.card.html, …`

## Mapped

- README.md ← the project’s readme
- tokens.json ← the compiler’s token list (_ds_manifest.json): 587 colors, 60 spacing, 5 radius, 22 shadow, 12 motion, 12 font stacks, 190 other; 2584 kept as aliases of another colour, 630 var() reference(s) resolved to their value, 92 re-filed by value or name
- components/bundle.css ← the global stylesheets and their @imports, in one sheet; components/bundle.js ← _ds_bundle.js
- fonts/ ← 0 font file(s) the @font-face rules point at (tokens.json type.fonts lists them)
- `_ds_manifest.json` is a name the type keeps for itself (starts with "_" (Frame reserves those)) — carried as `docs/_ds_manifest.json`
- `_ds_bundle.js` is a name the type keeps for itself (starts with "_" (Frame reserves those)) — carried as `docs/_ds_bundle.js`
- 1842 token declaration(s) were taken out of bundle.css’s root and theme rules — tokens.json (the Colors, Type and Spacing tables) is now where those values live, so an edit in the page reaches the component previews
- no component has a preview card of its own in the export, so the Components table lists them from the bundle without live examples
- component previews load `@babel/standalone@7.29.0` from cdn.jsdelivr.net/npm instead of unpkg.com — the same files (an integrity= hash stays valid)
- 4 preview(s) (`Actions`, `Data`, `Forms`, `Navigation`) run their JSX through the card’s own Babel at view time, as they did in the standalone version: that needs a Design System release whose preview frame admits the artifact script CDNs (jsDelivr, cdnjs, Tailwind, jQuery); on an earlier release, which admits no script by URL, those previews are blank — if the system must render there, re-run with --transpile-jsx (the inline JSX is compiled and the Babel tag dropped)
- Components from showcase pages: 4 (Actions, Data, Forms, Navigation) — each page became components/<Name>/ with the page itself (unchanged from the standalone version) as the live preview and its caption as the guide; no React export is needed for these
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `Icon` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Button` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ComboButton` | ✓ | ✓ | — (listed without an example) | ✓ |
| `IconButton` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Link` | ✓ | ✓ | — (listed without an example) | ✓ |
| `MenuButton` | ✓ | ✓ | — (listed without an example) | ✓ |
| `OverflowMenu` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CodeSnippet` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ContainedList` | ✓ | ✓ | — (listed without an example) | ✓ |
| `DataTable` | ✓ | ✓ | — (listed without an example) | ✓ |
| `UnorderedList` | — | — | — (listed without an example) | ✓ |
| `OrderedList` | — | — | — (listed without an example) | ✓ |
| `ListItem` | — | — | — (listed without an example) | ✓ |
| `Pagination` | ✓ | ✓ | — (listed without an example) | ✓ |
| `StructuredList` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Tag` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TAG_COLORS` | — | — | — (listed without an example) | ✓ |
| `Tile` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Checkbox` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CheckboxGroup` | — | — | — (listed without an example) | ✓ |
| `DatePicker` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Dropdown` | ✓ | ✓ | — (listed without an example) | ✓ |
| `FileUploader` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Form` | ✓ | ✓ | — (listed without an example) | ✓ |
| `FormGroup` | — | — | — (listed without an example) | ✓ |
| `FormLabel` | — | — | — (listed without an example) | ✓ |
| `Stack` | — | — | — (listed without an example) | ✓ |
| `NumberInput` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PasswordInput` | ✓ | ✓ | — (listed without an example) | ✓ |
| `RadioButton` | ✓ | ✓ | — (listed without an example) | ✓ |
| `RadioButtonGroup` | — | — | — (listed without an example) | ✓ |
| `Search` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Select` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Slider` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TextArea` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TextInput` | ✓ | ✓ | — (listed without an example) | ✓ |
| `StatusGlyph` | — | — | — (listed without an example) | ✓ |
| `TimePicker` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Toggle` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Breadcrumb` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ContentSwitcher` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Menu` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SideNav` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SwitcherPanel` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Tabs` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TreeView` | ✓ | ✓ | — (listed without an example) | ✓ |
| `UIShellHeader` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Actions` | — | ✓ | live | — |
| `Data` | — | ✓ | live | — |
| `Forms` | — | ✓ | live | — |
| `Navigation` | — | ✓ | live | — |

Types = components/<Name>/<Name>.d.ts · Guide = its README (the .prompt.md) · Preview = its card as preview.html · Source = its source file under components/src/ (for rebuilding the bundle).

## Token decisions

- the system has 67 theme scopes; a Design System artifact holds 8 themes — kept the first 7 after the base
- theme `Root Gray 10` was selected by `:root[data-mode="gray-10-theme"]` in the CSS; the artifact applies it as data-theme="root-gray-10" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `Root Gray 90` was selected by `:root[data-mode="gray-90-theme"]` in the CSS; the artifact applies it as data-theme="root-gray-90" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `Root Gray 100` was selected by `:root[data-mode="gray-100-theme"]` in the CSS; the artifact applies it as data-theme="root-gray-100" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `Root Md 672px` was selected by `:root[data-mode="md-672px"]` in the CSS; the artifact applies it as data-theme="root-md-672px" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `Root Xl 1312px` was selected by `:root[data-mode="xl-1312px"]` in the CSS; the artifact applies it as data-theme="root-xl-1312px" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `Root Max Max Plus 1584 1784px` was selected by `:root[data-mode="max-max-plus-1584-1784px"]` in the CSS; the artifact applies it as data-theme="root-max-max-plus-1584-1784px" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `Root Lg 1056px` was selected by `:root[data-mode="lg-1056px"]` in the CSS; the artifact applies it as data-theme="root-lg-1056px" (bundle.css rules keyed on the old selector do not follow the picker)
- 92 token(s) were listed under one kind by the export but their value, or their fs-/lh-/fw-/ls- name, shows another — re-filed: `--12-column-width` `color`→other, `--2-column-max-width` `color`→other, `--2-column-min-width` `color`→other, `--2-column-width` `color`→other, `--300-light-2` `color`→other, `--300-light-3` `color`→other, `--300-light` `color`→other, `--4-column-max-width` `color`→other +84 more
- font stack `--cds-font-sans` is type.families.cds-font-sans — tokens.css declares it as --font-cds-font-sans
- font stack `--cds-font-mono` is type.families.cds-font-mono — tokens.css declares it as --font-cds-font-mono
- font stack `--cds-font-serif` is type.families.cds-font-serif — tokens.css declares it as --font-cds-font-serif
- font stack `--arabic-font-family` is type.families.arabic-font-family — tokens.css declares it as --font-arabic-font-family
- font stack `--chinese-font-family` is type.families.chinese-font-family — tokens.css declares it as --font-chinese-font-family
- font stack `--english-condensed-font-family` is type.families.english-condensed-font-family — tokens.css declares it as --font-english-condensed-font-family
- font stack `--english-mono-font-family` is type.families.english-mono-font-family — tokens.css declares it as --font-english-mono-font-family
- font stack `--english-sans-font-family` is type.families.english-sans-font-family — tokens.css declares it as --font-english-sans-font-family
- font stack `--english-serif-font-family` is type.families.english-serif-font-family — tokens.css declares it as --font-english-serif-font-family
- font stack `--fixed-body-weight-2` is type.families.fixed-body-weight-2 — tokens.css declares it as --font-fixed-body-weight-2
- font stack `--fixed-body-weight` is type.families.fixed-body-weight — tokens.css declares it as --font-fixed-body-weight
- font stack `--fixed-heading-heading-01-weight` is type.families.fixed-heading-heading-01-weight — tokens.css declares it as --font-fixed-heading-heading-01-weight
- other values: 515 tokens; the artifact holds 60 per family — the rest are dropped: `condensed-grid-8-column-max-widt…[33 chars]`, `condensed-grid-8-column-min-widt…[33 chars]`, `condensed-grid-8-column-width`, `condensed-grid-aside-left-spacer…[42 chars]`, `condensed-grid-aside-left-spacer…[42 chars]`, `condensed-grid-aside-left-spacer` …
- letter spacing: 174 tokens; the artifact holds 60 per family — the rest are dropped: `fluid-max-heading-heading-03-let…[43 chars]`, `fluid-max-heading-heading-04-let…[45 chars]`, `fluid-max-heading-heading-04-let…[43 chars]`, `fluid-max-heading-heading-05-let…[45 chars]`, `fluid-max-heading-heading-05-let…[43 chars]`, `fluid-max-heading-heading-06-let…[45 chars]` …
- spacing: 273 tokens; the artifact holds 60 — the rest are dropped
- 8 size token(s) were paired by name with their line-height / weight / letter-spacing / family tokens into the Type section’s styles (group "Type scale"), which the component previews do not follow: bundle.css keeps the export’s own declarations for those tokens, so editing a style in the page does not change a preview; metrics that pair with no size stay plain token families (font weights, letter spacing, line heights)
- 1 type style(s) were read from CSS rules on elements and named classes (body); each style’s usage line names the rule it came from
- 73 font-stack token(s) are plain aliases of another stack and are not repeated as families (bundle.css still declares them): `--body-body-01-02-weight-2`→`--fixed-body-weight`, `--body-body-01-02-weight`→`--fixed-body-weight`, `--fixed-body-body-01-02-weight-2`→`--body-body-01-02-weight`, `--fixed-body-body-01-02-weight-3`→`--body-body-01-02-weight`, `--fixed-body-body-01-02-weight`→`--body-body-01-02-weight`, `--fixed-body-font-family-2`→`--font-family` +67 more
- dropped 266 — not a length the artifact can hold (px/rem/em/% or 0; no calc()): `--12px-0-75rem-spacing-04` = `12`, `--132-pt-size-2` = `var(--132-pt-size)` → `132`, `--132-pt-size-adjusted` = `125.4`, `--132-pt-size-default` = `132`, `--132-pt-size` = `var(--132-pt-size-default)` → `132`, `--14-pt-size-2` = `var(--14-pt-size)` → `14` +260 more
- dropped 72 — not a plain CSS value the artifact can hold (no quotes, var() or url()): `--300-light-2` = `var(--normal-300-light)` → `"Light"`, `--300-light-3` = `var(--normal-300-light)` → `"Light"`, `--300-light` = `var(--normal-300-light)` → `"Light"`, `--400-regular-2` = `var(--normal-400-regular)` → `"Regular"`, `--400-regular-3` = `var(--normal-400-regular)` → `"Regular"`, `--400-regular` = `var(--normal-400-regular)` → `"Regular"` +66 more
- dropped 36 — not a name the artifact can hold (letters, digits, _ . -; ≤64): `--app-icons-color-custom-colors-magenta-to-blue-…[73 chars]` = `var(--light-magenta-to-blue-gradient-stop-1)`, `--app-icons-color-custom-colors-magenta-to-blue-…[73 chars]` = `var(--light-magenta-to-blue-gradient-stop-2)`, `--app-icons-color-custom-colors-magenta-to-purpl…[75 chars]` = `var(--light-magenta-to-purple-gradient-stop-1)`, `--app-icons-color-custom-colors-magenta-to-purpl…[75 chars]` = `var(--light-magenta-to-purple-gradient-stop-2)`, `--carbon-for-ibm-products-user-profile-images-da…[67 chars]` = `var(--default-orange-60)`, `--carbon-for-ibm-products-user-profile-images-da…[67 chars]` = `var(--default-yellow-60)` +30 more
- dropped 129 — one font family more than the artifact holds (12): `--fixed-heading-heading-02-weight` = `var(--600-semibold)`, `--fixed-heading-heading-03-weight` = `var(--400-regular)`, `--fixed-heading-heading-04-weight` = `var(--400-regular)`, `--fixed-heading-heading-05-weight` = `var(--400-regular)`, `--fixed-heading-heading-06-weight` = `var(--300-light)`, `--fixed-heading-heading-07-weight` = `var(--300-light)` +123 more
- dropped 480 — a per-theme override of a other token; only colours and shadows vary by theme in the artifact: `--aside-left-min-width` [root-md-672px] = `256`, `--aside-right-min-width` [root-md-672px] = `256`, `--aspect-ratio` [root-md-672px] = `"None"`, `--auto-layout-direction-horizontal-direction-hor…[55 chars]` [root-md-672px] = `"Horizontal"`, `--auto-layout-direction-horizontal-direction-lg-…[53 chars]` [root-md-672px] = `"Vertical"`, `--auto-layout-direction-horizontal-direction-rev…[52 chars]` [root-md-672px] = `"String value"` +474 more
- dropped 164 — a per-theme override of a spacing token; only colours and shadows vary by theme in the artifact: `--condensed-grid-left-end-margin-3` [root-md-672px] = `16`, `--condensed-grid-left-end-margin-with-aside` [root-md-672px] = `var(--condensed-grid-left-end-margin-3)`, `--condensed-grid-right-end-margin-3` [root-md-672px] = `16`, `--condensed-grid-right-end-margin-with-aside` [root-md-672px] = `var(--condensed-grid-right-end-margin-3)`, `--grid-external-margin` [root-md-672px] = `16`, `--narrow-grid-left-end-margin-3` [root-md-672px] = `16` +158 more
- dropped 152 — a per-theme override of a font token; only colours and shadows vary by theme in the artifact: `--modal-text-margin-right` [root-md-672px] = `var(--medium-modal-text-margin-right)`, `--typography-fluid-display-display-01-letter-spa…[52 chars]` [root-md-672px] = `var(--fluid-md-display-display-01-letter-spacing…[49 chars]`, `--typography-fluid-display-display-01-line-heigh…[49 chars]` [root-md-672px] = `var(--fluid-md-display-display-01-line-height)`, `--typography-fluid-display-display-01-weight` [root-md-672px] = `var(--fluid-md-display-display-01-weight)`, `--typography-fluid-display-display-02-letter-spa…[52 chars]` [root-md-672px] = `var(--fluid-md-display-display-02-letter-spacing…[49 chars]`, `--typography-fluid-display-display-02-line-heigh…[49 chars]` [root-md-672px] = `var(--fluid-md-display-display-02-line-height)` +146 more
- dropped 658 — an override under a selector that is not one of the system’s themes (the base value is kept): `--12-column-width` [`:root[data-mode="narrow"]`] = `var(--narrow-grid-12-column-width)`, `--2-column-max-width` [`:root[data-mode="narrow"]`] = `var(--narrow-grid-2-column-max-width)`, `--2-column-min-width` [`:root[data-mode="narrow"]`] = `var(--narrow-grid-2-column-min-width)`, `--2-column-width` [`:root[data-mode="narrow"]`] = `var(--narrow-grid-2-column-width)`, `--4-column-max-width` [`:root[data-mode="narrow"]`] = `var(--narrow-grid-4-column-max-width)`, `--4-column-min-width` [`:root[data-mode="narrow"]`] = `var(--narrow-grid-4-column-min-width)` +652 more
- tokens.json: `color ai-chat-chat-bubble-active [default]: {light-theme-chat-bubble-active} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-active [root-gray-10]: {light-theme-chat-bubble-active} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-border [default]: {light-theme-chat-bubble-border} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-border [root-gray-10]: {light-theme-chat-bubble-border} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-hover [default]: {light-theme-chat-bubble-hover} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-hover [root-gray-10]: {light-theme-chat-bubble-hover} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble [default]: {light-theme-chat-bubble} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble [root-gray-10]: {light-theme-chat-bubble} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-color-app-icons-gradient-stop-1 [default]: {light-gradient-stop-1} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-color-app-icons-gradient-stop-1 [root-gray-10]: {light-gradient-stop-1} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-color-app-icons-gradient-stop-2 [default]: {light-gradient-stop-2} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-color-app-icons-gradient-stop-2 [root-gray-10]: {light-gradient-stop-2} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-color-app-icons-solid-vector [default]: {light-solid-vector} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-color-app-icons-solid-vector [root-gray-10]: {light-solid-vector} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-monochromatic-app-icons-gradient-stop-1 [default]: {light-monochromatic-gradient-stop-1} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-monochromatic-app-icons-gradient-stop-1 [root-gray-10]: {light-monochromatic-gradient-stop-1} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-monochromatic-app-icons-gradient-stop-2 [default]: {light-monochromatic-gradient-stop-2} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-monochromatic-app-icons-gradient-stop-2 [root-gray-10]: {light-monochromatic-gradient-stop-2} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-monochromatic-app-icons-solid-vector [default]: {light-monochromatic-solid-vector} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color app-icons-monochromatic-app-icons-solid-vector [root-gray-10]: {light-monochromatic-solid-vector} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-major-warning [default]: {support-support-caution-major} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-major-warning [root-gray-10]: {support-support-caution-major} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-major-warning [root-gray-90]: {support-support-caution-major} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-major-warning [root-gray-100]: {support-support-caution-major} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-minor-warning [default]: {support-support-warning} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-minor-warning [root-gray-10]: {support-support-warning} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-minor-warning [root-gray-90]: {support-support-warning} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-minor-warning [root-gray-100]: {support-support-warning} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-undefined [default]: {support-support-undefined} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-undefined [root-gray-10]: {support-support-undefined} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-undefined [root-gray-90]: {support-support-undefined} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-undefined [root-gray-100]: {support-support-undefined} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color chat-prompt-background [default]: {tag-background-4} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color chat-prompt-border [default]: {tag-background-4} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble-active [default]: {user-type-user-dark-theme-chat-bubble-active} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble-border [default]: {user-type-user-dark-theme-chat-bubble-border} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble-hover [default]: {user-type-user-dark-theme-chat-bubble-hover} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble [default]: {user-type-user-dark-theme-chat-bubble} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-major-warning: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-minor-warning: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color carbon-for-ibm-products-status-icons-c4ip-status-undefined: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color chat-prompt-background: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color chat-prompt-border: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble-active: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble-border: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble-hover: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color dark-theme-chat-bubble: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-active [default]: {dark-theme-chat-bubble-active} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-active [root-gray-100]: {dark-theme-chat-bubble-active} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-border [default]: {dark-theme-chat-bubble-border} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-border [root-gray-100]: {dark-theme-chat-bubble-border} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-hover [default]: {dark-theme-chat-bubble-hover} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-hover [root-gray-100]: {dark-theme-chat-bubble-hover} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble [default]: {dark-theme-chat-bubble} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble [root-gray-100]: {dark-theme-chat-bubble} names no color token` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-active: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-border: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble-hover: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color ai-chat-chat-bubble: no valid value` (dropped by the artifact’s own parser, so left out)
- tokens.json: `color tokens capped at 600 — the rest are ignored`

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

Kept in the artifact exactly as they were in the project, not parsed and not shown by any section (26 files):
- 23 × HTML pages that are neither a component card nor a template
- 2 × raw outputs of the standalone version’s compiler
- 1 × agent-instruction files (renamed so no agent tool auto-loads them)

## Kept aside

Nothing.

## Dropped

Nothing.
