import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

export interface BoxSummaryContentProps {
  title: string;
  value: number;
  color: string;
  icon?: ComponentType<IconBaseProps>;
  changeColor?: boolean;
}
