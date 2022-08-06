import { Container } from './style';
import { ButtonProps } from './types';

export default function Button({
  children,
  isSelected,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Container
      type="button"
      {...rest}
      disabled={disabled}
      isSelected={isSelected}
    >
      {children}
    </Container>
  );
}
