import * as React from 'react';
import { ButtonSize } from './Button';
import { MenuItemSpec } from '../navigation/Menu';

/** Split button: a primary action plus a menu of alternates, divided by a 1px separator. */
export interface ComboButtonProps {
  /** Primary action label. */
  label?: string;
  /** Alternate actions in the menu. */
  items?: MenuItemSpec[];
  /** @default "lg" */
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}
export declare function ComboButton(props: ComboButtonProps): JSX.Element;
