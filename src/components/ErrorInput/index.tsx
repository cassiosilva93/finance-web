import theme from '@src/theme';
import { TbAlertCircle } from 'react-icons/tb';
import { Container } from './style';
import ErrorInputProps from './types';

export default function ErrorInput({ message }: ErrorInputProps) {
  return (
    <Container>
      <TbAlertCircle size={20} color={theme.colors.orange[800]} />
      <p>{message}</p>
    </Container>
  );
}
