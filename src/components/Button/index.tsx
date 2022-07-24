import { Container } from './style';
import { ButtonProps } from './types';

export default function Button({ children, isSelected, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest} isSelected={isSelected}>
      {children}
    </Container>
  );
}
