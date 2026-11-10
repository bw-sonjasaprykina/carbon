import * as React from 'react';

export type ButtonKind = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger-tertiary' | 'danger-ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Carbon Button. Seven styles across five heights; icon-only variant is square.
 * @startingPoint section="Actions" subtitle="Primary, secondary, tertiary, ghost and danger buttons" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. @default "primary" */
  kind?: ButtonKind;
  /** Height: 32 / 40 / 48 / 64 / 80px. @default "lg" */
  size?: ButtonSize;
  /** Label. Omitted when iconOnly. */
  children?: React.ReactNode;
  /** Icon element, e.g. <Icon name="Add" />. Sits in the right padding well. */
  renderIcon?: React.ReactNode;
  /** Square icon-only button. @default false */
  iconOnly?: boolean;
  disabled?: boolean;
  /** Pill radius (the kit's Radius=Round mode). @default false */
  round?: boolean;
  /** Expressive 16px label instead of productive 14px. @default false */
  isExpressive?: boolean;
  /** Renders an <a> instead of a <button>. */
  href?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
