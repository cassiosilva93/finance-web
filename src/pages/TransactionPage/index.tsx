import Button from '@src/components/Button';
import CreateNewTransactionModal from '@src/components/Modal/CreateNewTransactionModal';
import UploadFileModal from '@src/components/Modal/UploadFileModal';
import NoContent from '@src/components/NoContent';
import TransactionItem from '@src/components/TransactionItem';
import { DateHelper } from '@src/helpers/DateHelper';
import MainLayoult from '@src/layouts/MainLayout';
import {
  useGetAllTransactionsLazyQuery,
  useGetTransactionInfoQuery,
} from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { useEffect, useState } from 'react';
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
import Transaction from './types';

export default function TransactionPage() {
  const [isVisibleEditTransactionModal, setIsVisibleEditTransactionModal] =
    useState(false);
  const [
    isVisibleCreateNewTransactionModal,
    setIsVisibleCreateNewTransactionModal,
  ] = useState(false);

  const [
    getAllTransactionsLazyQuery,
    { data: getAlltransactionData, loading: getAlltransactionLoading },
  ] = useGetAllTransactionsLazyQuery();
  const { data: getTransactionInfoData } = useGetTransactionInfoQuery();

  useEffect(() => {
    getAllTransactionsLazyQuery().then(res => res.refetch());
  }, []);

  const transactionMapped = getAlltransactionData?.getTransactions.map(
    transaction => {
      return {
        id: transaction?.id,
        type: transaction?.type,
        title: transaction?.title,
        date: transaction?.created_at,
        value: transaction?.value,
        category: transaction?.category,
      };
    },
  ) as Transaction[];

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
            {(getTransactionInfoData?.getConsolidedValues
              ?.totalTransactionRegister as number) > 1
              ? 'Registros'
              : 'Registro'}
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
                type="spinningBubbles"
                color={theme.colors.orange[800]}
              />
            </LoadingContainer>
          ) : getAlltransactionData?.getTransactions.length ? (
            <Scrollbars style={{ height: '50vh' }}>
              <TransactionsContainer>
                {transactionMapped?.map(transaction => (
                  <TransactionItem
                    transaction={transaction}
                    key={transaction.id}
                  />
                ))}
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
