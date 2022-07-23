import { Container } from './style';
import { ButtonProps } from './types';

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
