The standard Carbon action; use primary for the single most important action per view and ghost for low-emphasis inline actions.

\`\`\`jsx
<Button kind="primary" size="lg" renderIcon={<Icon name="Add" />}>Create</Button>
<Button kind="secondary">Cancel</Button>
<Button kind="danger" size="md">Delete</Button>
<Button kind="ghost" iconOnly renderIcon={<Icon name="OverflowMenuVertical" />} aria-label="More" />
\`\`\`

Kinds: \`primary\`, \`secondary\`, \`tertiary\`, \`ghost\`, \`danger\`, \`danger-tertiary\`, \`danger-ghost\`.
Sizes map to the kit's heights: sm 32, md 40, lg 48, xl 64, 2xl 80. Buttons are square-cornered by default; \`round\` opts into the kit's Radius=Round mode.
Text buttons carry asymmetric padding (15px left, 63px right) — that empty right well is where \`renderIcon\` lands. Never centre a Carbon button label.
