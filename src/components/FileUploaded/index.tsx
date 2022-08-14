import filesize from 'filesize';
import { FaFileCsv } from 'react-icons/fa';
import { FileProps } from '../Modal/types';
import { Container, FileInfo } from './style';

export default function FileUploaded({ name, size }: FileProps) {
  return (
    <Container>
      <FileInfo>
        <FaFileCsv size={30} />
        <div>
          <span>{name}</span>
          <strong>{filesize(size)}</strong>
        </div>
      </FileInfo>
    </Container>
  );
}
