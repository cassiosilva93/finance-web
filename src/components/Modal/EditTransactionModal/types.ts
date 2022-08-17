interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

interface FormProps {
  id: string;
  title: string;
  value: number;
  category: string;
}

export type { RadioBoxProps, FormProps };
