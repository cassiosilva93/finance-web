interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

interface ModalFooterProps {
  disabled: boolean;
}

interface FormProps {
  title: string;
  value: number;
  category: string;
}

export type { RadioBoxProps, FormProps, ModalFooterProps };
