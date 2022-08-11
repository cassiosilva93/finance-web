import Button from '@src/components/Button';
import CreateNewTransactionModal from '@src/components/Modal/CreateNewTransactionModal';
import UploadFileModal from '@src/components/Modal/UploadFileModal';
import NoContent from '@src/components/NoContent';
import TransactionItem from '@src/components/TransactionItem';
import { DateHelper } from '@src/helpers/DateHelper';
import MainLayoult from '@src/layouts/MainLayout';
import {
  useGetAllTransactionsQuery,
  useGetTransactionInfoQuery,
} from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ReactLoading from 'react-loading';
import {
  AddTransactionContainer,
  Container,
  Content,
  LoadingContainer,
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

  const { data: getAlltransactionData, loading: getAlltransactionLoading } =
    useGetAllTransactionsQuery();
  const { data: getTransactionInfoData } = useGetTransactionInfoQuery();

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
            <strong>
              {getTransactionInfoData?.getConsolidedValues
                ?.totalTransactionRegister || 0}
            </strong>{' '}
            Registros
          </p>

          <p className="last-transaction">
            <strong>Última transação:</strong>{' '}
            {getTransactionInfoData?.getConsolidedValues
              ?.lastTransactionRegistered
              ? DateHelper.formatToBRDate(
                  getTransactionInfoData?.getConsolidedValues
                    ?.lastTransactionRegistered,
                )
              : '--'}
          </p>
        </RegisterInformationContainer>

        <Content>
          {getAlltransactionLoading ? (
            <LoadingContainer>
              <ReactLoading
                type={'spinningBubbles'}
                color={theme.colors.orange[800]}
              />
            </LoadingContainer>
          ) : getAlltransactionData?.getTransactions ? (
            <Scrollbars style={{ height: '50vh' }}>
              <TransactionsContainer>
                {getAlltransactionData?.getTransactions.map(transaction => {
                  const transactionMapped = {
                    id: transaction?.id as string,
                    type: transaction?.type as string,
                    title: transaction?.title as string,
                    date: transaction?.created_at as string,
                    value: transaction?.value as number,
                  };

                  return (
                    <TransactionItem
                      transaction={transactionMapped}
                      key={transactionMapped.id}
                    />
                  );
                })}
              </TransactionsContainer>
            </Scrollbars>
          ) : (
            <NoContent />
          )}
        </Content>
      </Container>

      {isVisibleEditTransactionModal && (
        <UploadFileModal
          isVisibleModal={isVisibleEditTransactionModal}
          handleCloseModal={handleShowEditTransactionModal}
        />
      )}

      {isVisibleCreateNewTransactionModal && (
        <CreateNewTransactionModal
          isVisibleModal={isVisibleCreateNewTransactionModal}
          handleCloseModal={handleShowCreateNewTransactionModal}
        />
      )}
    </MainLayoult>
  );
}
