import { Container } from './style';
import InputErrorProps from './types';

export default function InputError({ message }: InputErrorProps) {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}
