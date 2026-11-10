Zero-or-more selection. Wrap two or more in a CheckboxGroup so they share one legend.

\`\`\`jsx
<CheckboxGroup legend="Notifications">
  <Checkbox id="n1" label="Email" defaultChecked />
  <Checkbox id="n2" label="SMS" />
  <Checkbox id="n3" label="Push" indeterminate />
</CheckboxGroup>
\`\`\`

The box is a 16px square (never rounded) that fills solid \`--cds-icon-primary\` when checked. Labels are 14px primary text — not secondary.
