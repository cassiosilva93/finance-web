import { useModal } from '@src/hooks/useModal';
import theme from '@src/theme';
import { FormEvent, useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';
import ReactModal from 'react-modal';
import {
  CancelContainer,
  Content,
  ModalBody,
  ModalFooter,
  RadioBox,
  RemoveTransactionContainer,
  TransactionTypeContainer,
} from './style';

export default function Modal() {
  const [type, setType] = useState('income');
  const { isVisible, handleCloseModal } = useModal();

  function handleEditTransaction(event: FormEvent) {
    event.preventDefault();
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

      <form onSubmit={handleEditTransaction}>
        <Content>
          <h2>Informações da transação</h2>
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
        </Content>

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
