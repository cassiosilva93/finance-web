import { ComponentType, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

interface ErrorProps {
  message?: string;
}

export default interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  id: string;
  changeStateCallback?: (param: (state: boolean) => boolean) => void;
  error?: ErrorProps;
  icon?: ComponentType<IconBaseProps>;
}
