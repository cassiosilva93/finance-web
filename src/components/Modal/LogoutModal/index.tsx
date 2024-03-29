import Button from '@src/components/Button';
import theme from '@src/theme';
import { CgClose } from 'react-icons/cg';
import ReactModal from 'react-modal';
import { ModalProps } from '../types';
import { CancelContainer, ModalBody, ModalFooter } from './style';

export default function LogoutModal({
  isVisibleModal,
  handleCloseModal,
}: ModalProps) {
  function handleLogout() {}

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

      <ModalBody>Tem certeza que deseja sair?</ModalBody>

      <ModalFooter>
        <div>
          <CancelContainer onClick={handleCloseModal}>Cancelar</CancelContainer>
          <Button onClick={handleLogout}>Sair</Button>
        </div>
      </ModalFooter>
    </ReactModal>
  );
}
