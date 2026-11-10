import * as React from 'react';

/** Carbon Checkbox — 16px square, 8px gap to a 14px label. */
export interface CheckboxProps {
  id?: string;
  label?: React.ReactNode;
  checked?: boolean;
  /** @default false */
  defaultChecked?: boolean;
  /** Mixed state — renders the dash glyph. @default false */
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  invalid?: boolean;
  invalidText?: string;
  helperText?: string;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;

/** Groups checkboxes under a shared 12px legend with group-level validation. */
export interface CheckboxGroupProps {
  legend?: string;
  children?: React.ReactNode;
  helperText?: string;
  invalid?: boolean;
  invalidText?: string;
  style?: React.CSSProperties;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;
