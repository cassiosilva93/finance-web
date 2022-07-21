import { FaFileCsv, FaTrash } from 'react-icons/fa';
import { Container, FileInfo, RemoveTransactionContainer } from './style';

export default function FileUploaded() {
  return (
    <Container>
      <FileInfo>
        <FaFileCsv size={30} />
        <div>
          <span>my_transactions.png</span>
          <strong>125kb</strong>
        </div>
      </FileInfo>

      <RemoveTransactionContainer>
        <FaTrash />
        <a onClick={() => {}}>Excluir</a>
      </RemoveTransactionContainer>
    </Container>
  );
}
