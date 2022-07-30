import DropzoneContentMessage from '@src/components/DropzoneContentMessage';
import FileUploaded from '@src/components/FileUploaded';
import theme from '@src/theme';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CgClose } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io';
import ReactModal from 'react-modal';
import { File, ModalProps } from '../types';
import {
  CancelContainer,
  Content,
  DropzoneContainer,
  FileUploadedContainer,
  ModalBody,
  ModalFooter,
  RemoveTransactionContainer,
} from './style';

export default function UploadFileModal({
  isVisibleModal,
  handleCloseModal,
}: ModalProps) {
  const [file, setFile] = useState<File | null>();

  const onDrop = useCallback((acceptedFile: any) => {
    setFile(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: {
        'text/csv': ['.csv'],
      },
    });

  function iconColor(isDragActive: boolean, isDragReject: boolean) {
    if (!isDragActive) return theme.colors.orange[800];
    if (isDragReject) return theme.colors.red[900];
    return theme.colors.green[900];
  }

  return (
    <ReactModal
      isOpen={isVisibleModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleCloseModal}
      >
        <CgClose size={20} color={theme.colors.gray[700]} />
      </button>

      <Content>
        <h2>Upload de arquivo</h2>
        <div className="divider" />
        <p className="info-drag-and-drop">
          Arraste e solte seu o seu arquivo aqui.
        </p>
        <ModalBody>
          <DropzoneContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            <IoMdCloudUpload
              size={60}
              color={iconColor(isDragActive, isDragReject)}
            />
            <DropzoneContentMessage
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            />
          </DropzoneContainer>
        </ModalBody>
      </Content>

      {!!file && (
        <FileUploadedContainer>
          <FileUploaded name={file.name} size={file.size} />
          <RemoveTransactionContainer>
            <FaTrash />
            <a onClick={() => setFile(null)}>Excluir</a>
          </RemoveTransactionContainer>
        </FileUploadedContainer>
      )}

      <ModalFooter>
        <div>
          <CancelContainer onClick={handleCloseModal}>Cancelar</CancelContainer>
          <button type="submit">Salvar</button>
        </div>
      </ModalFooter>
    </ReactModal>
  );
}
