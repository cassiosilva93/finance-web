import BoxSummary from '@src/components/BoxSummary';
import Button from '@src/components/Button';
import Header from '@src/components/Header';
import { useGetBoxSummaryInfoQuery } from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { ButtonContainer, MainContainer } from './style';
import MainLayoutProps from './types';

export default function MainLayoult({ children }: MainLayoutProps) {
  const { pathname } = useLocation();
  const isSelectedTransactions = pathname.includes('transactions');
  const isSelectedDahboard = pathname.includes('dashboard');

  const { data } = useGetBoxSummaryInfoQuery();

  const income = data?.getConsolidedValues?.totalIncome || 0;
  const outcome = data?.getConsolidedValues?.totalOutcome || 0;
  const total = income - outcome;

  return (
    <>
      <Header />

      <MainContainer>
        <BoxSummary
          title="Entrada"
          value={income}
          color={theme.colors.green[900]}
          icon={BsArrowUpCircle}
        />

        <BoxSummary
          title="Saída"
          value={outcome}
          color={theme.colors.red[900]}
          icon={BsArrowDownCircle}
        />

        <BoxSummary
          title="Total"
          value={total}
          color={theme.colors.orange[800]}
          icon={FiDollarSign}
          changeColor
        />
      </MainContainer>

      <ButtonContainer>
        <Link to="/dashboard">
          <Button
            className="dashboard"
            isSelected={isSelectedDahboard}
            style={{ height: 50, width: 200 }}
          >
            Dashboard
          </Button>
        </Link>

        <Link to="/transactions">
          <Button
            className="transactions"
            isSelected={isSelectedTransactions}
            style={{ height: 50, width: 200 }}
          >
            Transações
          </Button>
        </Link>
      </ButtonContainer>

      {children}
    </>
  );
}
