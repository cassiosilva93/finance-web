import Button from '@src/components/Button';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import {
  CancelContainer,
  Container,
  RemoveTransactionContainer,
} from './style';
import FooterModalProps from './types';

export default function FooterModal({
  hasDeleteButton = false,
  closeModalFn,
  actionButton,
  buttonTitle,
  isDisabledButton = false,
  transaction,
  formStates,
}: FooterModalProps) {
  const [isVisibleConfirmDeleteModal, setIsVisibleConfirmDeleteModal] =
    useState(false);

  function handleShowConfirmDeleteModal() {
    setIsVisibleConfirmDeleteModal(prev => !prev);
  }

  function disabledButton() {
    if (isDisabledButton)
      return (
        formStates?.loading || !formStates?.isDirty || !formStates?.isValid
      );
    return;
  }

  return (
    <>
      <Container hasDeleteButton={hasDeleteButton}>
        {hasDeleteButton && (
          <RemoveTransactionContainer
            onClick={() => handleShowConfirmDeleteModal()}
          >
            <FaTrash />
            <a>Excluir</a>
          </RemoveTransactionContainer>
        )}

        <div>
          <CancelContainer onClick={closeModalFn}>Cancelar</CancelContainer>
          <Button
            type="submit"
            disabled={disabledButton()}
            style={{ height: '40px', width: '150px' }}
            onClick={() => {
              if (actionButton?.name === '') actionButton();
              if (!transaction?.id) return;
              if (actionButton) actionButton(transaction.id);
            }}
          >
            {formStates?.loading ? (
              <ReactLoading type="spin" height={20} width={20} />
            ) : (
              buttonTitle
            )}
          </Button>
        </div>
      </Container>

      {isVisibleConfirmDeleteModal && (
        <ConfirmDeleteModal
          transaction={transaction}
          isVisibleModal={isVisibleConfirmDeleteModal}
          handleCloseModal={handleShowConfirmDeleteModal}
        />
      )}
    </>
  );
}
