import Button from '@src/components/Button';
import CreateNewTransactionModal from '@src/components/Modal/CreateNewTransactionModal';
import UploadFileModal from '@src/components/Modal/UploadFileModal';
import TransactionItem from '@src/components/TransactionItem';
import MainLayoult from '@src/layouts/MainLayout';
import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import database from '../../tmp/database';
import {
  AddTransactionContainer,
  Container,
  RegisterInformationContainer,
  TransactionsContainer,
} from './style';

export default function TransactionPage() {
  const [isVisibleEditTransactionModal, setIsVisibleEditTransactionModal] =
    useState(false);
  const [
    isVisibleCreateNewTransactionModal,
    setIsVisibleCreateNewTransactionModal,
  ] = useState(false);

  function handleShowEditTransactionModal() {
    setIsVisibleEditTransactionModal(prev => !prev);
  }

  function handleShowCreateNewTransactionModal() {
    setIsVisibleCreateNewTransactionModal(prev => !prev);
  }

  return (
    <MainLayoult>
      <Container>
        <AddTransactionContainer>
          <Button
            style={{ height: 40, width: 120 }}
            onClick={() => handleShowCreateNewTransactionModal()}
          >
            Adicionar
          </Button>
          <Button
            style={{ height: 40, width: 120 }}
            onClick={() => handleShowEditTransactionModal()}
          >
            Upload
          </Button>
        </AddTransactionContainer>

        <RegisterInformationContainer>
          <p>
            <strong>79</strong> Registros
          </p>

          <p className="last-transaction">
            <strong>Última transação:</strong> 29/12/1992
          </p>
        </RegisterInformationContainer>

        <Scrollbars style={{ height: '50vh' }}>
          <TransactionsContainer>
            {database.map(transaction => (
              <TransactionItem transaction={transaction} />
            ))}
          </TransactionsContainer>
        </Scrollbars>
      </Container>

      <UploadFileModal
        isVisibleModal={isVisibleEditTransactionModal}
        handleCloseModal={handleShowEditTransactionModal}
      />

      <CreateNewTransactionModal
        isVisibleModal={isVisibleCreateNewTransactionModal}
        handleCloseModal={handleShowCreateNewTransactionModal}
      />
    </MainLayoult>
  );
}
