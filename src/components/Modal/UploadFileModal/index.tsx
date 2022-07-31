import DropzoneContentMessage from '@src/components/DropzoneContentMessage';
import FileUploaded from '@src/components/FileUploaded';
import { saveFile } from '@src/services/transactions';
import theme from '@src/theme';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { CgClose } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io';
import ReactLoading from 'react-loading';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
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
  const [file, setFile] = useState<File | null>(null);

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onDrop = useCallback((acceptedFile: any) => {
    if (!acceptedFile.length) return toast.warning('Arquivo não suportado.');
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

  async function onSubmit() {
    try {
      const isSave = await saveFile(file);
      if (isSave) return toast.success('Arquivo salvo com sucesso.');
      return toast.info('Selecione um arquivo.');
    } catch {
      toast.error('Ocorreu um erro ao salvar o arquivo.');
    }
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
            <RemoveTransactionContainer onClick={() => setFile(null)}>
              <FaTrash />
              <a>Excluir</a>
            </RemoveTransactionContainer>
          </FileUploadedContainer>
        )}

        <ModalFooter>
          <div>
            <CancelContainer onClick={handleCloseModal}>
              Cancelar
            </CancelContainer>
            <button type="submit" disabled={isSubmitting}>
              {true ? (
                <ReactLoading type={'spin'} height={20} width={20} />
              ) : (
                'Salvar'
              )}
            </button>
          </div>
        </ModalFooter>
      </form>
    </ReactModal>
  );
}
