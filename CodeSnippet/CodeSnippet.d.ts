import * as React from 'react';

/** Carbon Code snippet — inline, single-line or multi-line, with a copy button. */
export interface CodeSnippetProps {
  /** The code, as a string. */
  children?: React.ReactNode;
  /** @default "single" */
  type?: 'inline' | 'single' | 'multi';
  /** Copy-button tooltip. @default "Copy to clipboard" */
  copyText?: string;
  /** @default false */
  hideCopyButton?: boolean;
  /** Wrap instead of scroll horizontally. @default false */
  wrapText?: boolean;
  /** Rows shown before "Show more" in multi mode. @default 15 */
  maxCollapsedRows?: number;
  style?: React.CSSProperties;
}
export declare function CodeSnippet(props: CodeSnippetProps): JSX.Element;
