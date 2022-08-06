import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isSelected?: boolean;
  disabled?: boolean;
};

interface ContainerButtonProps {
  isSelected?: boolean;
}

export type { ButtonProps, ContainerButtonProps };
