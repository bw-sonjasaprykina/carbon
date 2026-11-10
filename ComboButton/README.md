A split primary button: the label fires the default action, the chevron opens alternates. Use when one action dominates but siblings exist.

\`\`\`jsx
<ComboButton label="Deploy" items={[{ label: 'Deploy and watch' }, { label: 'Dry run' }]} />
\`\`\`

The two halves are separated by a 1px \`--cds-button-separator\` rule. Only the primary kind is defined in the kit.
