import DropzoneContentMessage from '@src/components/DropzoneContentMessage';
import FileUploaded from '@src/components/FileUploaded';
import { useModal } from '@src/hooks/useModal';
import theme from '@src/theme';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CgClose } from 'react-icons/cg';
import { IoMdCloudUpload } from 'react-icons/io';
import ReactModal from 'react-modal';
import {
  CancelContainer,
  Content,
  DropzoneContainer,
  ModalBody,
  ModalFooter,
} from './style';

interface File {}

export default function Modal() {
  const { isVisible, handleCloseModal } = useModal();

  const onDrop = useCallback((acceptedFile: any) => {
    console.log(acceptedFile);
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
      isOpen={isVisible}
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

      <FileUploaded />

      <ModalFooter>
        <div>
          <CancelContainer onClick={handleCloseModal}>Cancelar</CancelContainer>
          <button type="submit">Salvar</button>
        </div>
      </ModalFooter>
    </ReactModal>
  );
}
