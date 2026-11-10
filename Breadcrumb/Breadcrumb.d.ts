import * as React from 'react';

export interface BreadcrumbItemSpec {
  label: string;
  href?: string;
  /** The current page — rendered as plain text, not a link. */
  current?: boolean;
}

/** Carbon Breadcrumb — slash-separated hierarchy above a page title. */
export interface BreadcrumbProps {
  items?: BreadcrumbItemSpec[];
  /** 12px or 14px text. @default "md" */
  size?: 'sm' | 'md';
  /** Drop the trailing slash after the last crumb. @default false */
  noTrailingSlash?: boolean;
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
