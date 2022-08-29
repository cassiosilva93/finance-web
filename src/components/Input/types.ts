import { ComponentType, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<{ password: string; email: string }>;
  id: 'password' | 'email';
  title?: string;
  changeStateCallback?: (param: (state: boolean) => boolean) => void;
  icon?: ComponentType<IconBaseProps>;
}
