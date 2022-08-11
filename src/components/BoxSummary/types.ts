import { IconType } from 'react-icons/lib';

export interface BoxSummaryContentProps {
  title: string;
  value: number;
  color: string;
  icon: IconType;
  changeColor?: boolean;
}
