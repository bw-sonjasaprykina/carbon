Slash-separated hierarchy, placed directly above a page title. Every crumb is a link except the current page.

\`\`\`jsx
<Breadcrumb noTrailingSlash items={[
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'my-cluster', current: true },
]} />
\`\`\`

Separators are literal "/" characters with 8px padding either side — not chevrons.
