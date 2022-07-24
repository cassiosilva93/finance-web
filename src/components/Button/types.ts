import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isSelected?: boolean;
};

interface ContainerButtonProps {
  isSelected?: boolean;
}

export type { ButtonProps, ContainerButtonProps };
