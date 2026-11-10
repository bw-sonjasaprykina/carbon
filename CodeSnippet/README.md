Always IBM Plex Mono at 12px/16px on \`--cds-layer-01\`. Three types: \`inline\` inside a sentence, \`single\` for one command, \`multi\` for blocks.

\`\`\`jsx
<CodeSnippet type="single">ibmcloud ks cluster ls</CodeSnippet>
<CodeSnippet type="multi" maxCollapsedRows={6}>{yaml}</CodeSnippet>
Run <CodeSnippet type="inline">npm i</CodeSnippet> first.
\`\`\`

The copy button occupies the 64px right well — never overlap it with code. Multi snippets over \`maxCollapsedRows\` gain a Show more control.
