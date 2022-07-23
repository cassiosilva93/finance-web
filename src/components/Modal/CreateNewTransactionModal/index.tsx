import theme from '@src/theme';
import { FormEvent, useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import ReactModal from 'react-modal';
import { ModalProps } from '../types';
import {
  CancelContainer,
  Content,
  ModalBody,
  ModalFooter,
  RadioBox,
  TransactionTypeContainer,
} from './style';

export default function CreateNewTransactionModal({
  isVisibleModal,
  handleCloseModal,
}: ModalProps) {
  const [type, setType] = useState('income');

  function handleEditTransaction(event: FormEvent) {
    event.preventDefault();
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

      <form onSubmit={handleEditTransaction}>
        <Content>
          <h2>Criar transação</h2>
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
