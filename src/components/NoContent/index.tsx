import { TbMoodEmpty } from 'react-icons/tb';
import { Container } from './style';

export default function NoContent() {
  return (
    <Container>
      <TbMoodEmpty size={50} />
      <p>Você não tem nenhuma transação cadastrada.</p>
    </Container>
  );
}
