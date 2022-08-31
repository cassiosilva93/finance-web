import { ComponentType, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  id: string;
  title?: string;
  changeStateCallback?: (param: (state: boolean) => boolean) => void;
  icon?: ComponentType<IconBaseProps>;
}
