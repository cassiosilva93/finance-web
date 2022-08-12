import theme from '@src/theme';
import { useState } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { DateHelper } from '../../helpers/DateHelper';
import { ValueHelper } from '../../helpers/ValueHelper';
import EditTransactionModal from '../Modal/EditTransactionModal';
import {
  Container,
  LeftInfo,
  RightInfo,
  TransactionInfoContainer,
} from './style';
import { TransactionItemProps } from './types';

export default function TransactionItem({
  transaction: { date, title, type, value },
}: TransactionItemProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const transactionInfoFormatted = {
    value: ValueHelper.formatToBRLCurrency(value),
    date: DateHelper.formatToBRDate(date),
    hour: DateHelper.getCompleteHourOfDate(date),
  };

  function handleShowModal() {
    setIsVisibleModal(prev => !prev);
  }

  return (
    <>
      <Container>
        <AiOutlineDollar
          className="icon"
          size={40}
          color={
            type === 'outcome' ? theme.colors.red[900] : theme.colors.green[900]
          }
        />

        <TransactionInfoContainer>
          <LeftInfo>
            <p>{title}</p>
            <strong>{`${transactionInfoFormatted.date} ${transactionInfoFormatted.hour}`}</strong>
          </LeftInfo>

          <RightInfo type={type}>
            <p>{transactionInfoFormatted.value}</p>

            <BsThreeDots size={30} onClick={() => handleShowModal()} />
          </RightInfo>
        </TransactionInfoContainer>
      </Container>

      <EditTransactionModal
        isVisibleModal={isVisibleModal}
        handleCloseModal={handleShowModal}
      />
    </>
  );
}
