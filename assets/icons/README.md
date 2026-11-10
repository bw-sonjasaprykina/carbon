# Icons

The 61 Carbon glyphs the source Figma file uses, extracted as paths (not redrawn), on a single sheet: `carbon-glyphs.svg`.

The sheet is a specimen for looking, drawn in Gray 100 (`#161616`) on white because an uploaded SVG can't inherit a colour. In product code, use the `Icon` component from the bundle (`<Icon name="Add" size={16} />`). It paints with `currentColor`, so set `color` to `--cds-icon-primary`, `--cds-icon-secondary` or `--cds-icon-on-color`. Sizes are 16 px inside controls, 20 px in toolbars and 24 px standalone.

For a glyph outside this set, take it from `@carbon/icons` (same geometry) rather than another icon library.
