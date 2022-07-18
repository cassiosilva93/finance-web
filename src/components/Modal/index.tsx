import { useModal } from '@src/hooks/useModal';
import theme from '@src/theme';
import { FormEvent, useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';
import ReactModal from 'react-modal';
import {
  CancelContainer,
  Container,
  ModalBody,
  ModalFooter,
  RadioBox,
  RemoveTransactionContainer,
  TransactionTypeContainer,
} from './style';

export default function Modal() {
  const [type, setType] = useState('income');
  const { modalState, handleCloseModal } = useModal();

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <ReactModal
      isOpen={modalState.visible}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleCloseModal}
      >
        <CgClose size={20} color={theme.colors.gray[700]} />
      </button>

      <form onSubmit={handleCreateNewTransaction}>
        <Container>
          <h2>Título</h2>
          <div className="divider" />

          <ModalBody>
            <input type="text" placeholder="Título" />

            <input type="number" placeholder="Valor" />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                onClick={() => setType('income')}
                isActive={type === 'income'}
                activeColor="green"
              >
                <span>Entrada</span>
                <BsArrowUpCircle color={theme.colors.green[900]} size={20} />
              </RadioBox>

              <RadioBox
                type="button"
                onClick={() => setType('outcome')}
                isActive={type === 'outcome'}
                activeColor="red"
              >
                <span>Saída</span>
                <BsArrowDownCircle color={theme.colors.red[900]} size={20} />
              </RadioBox>
            </TransactionTypeContainer>

            <input type="text" placeholder="Categoria" />
          </ModalBody>
        </Container>

        <ModalFooter>
          <RemoveTransactionContainer>
            <FaTrash />
            <a onClick={() => {}}>Excluir</a>
          </RemoveTransactionContainer>

          <div>
            <CancelContainer onClick={handleCloseModal}>
              Cancelar
            </CancelContainer>
            <button type="submit">Salvar</button>
          </div>
        </ModalFooter>
      </form>
    </ReactModal>
  );
}
