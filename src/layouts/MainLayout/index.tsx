import BoxSummary from '@src/components/BoxSummary';
import Button from '@src/components/Button';
import Header from '@src/components/Header';
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

  return (
    <>
      <Header />

      <MainContainer>
        <BoxSummary
          title="Entrada"
          value={190000.43}
          color={theme.colors.green[900]}
          icon={BsArrowUpCircle}
        />

        <BoxSummary
          title="Saída"
          value={34230.21}
          color={theme.colors.red[900]}
          icon={BsArrowDownCircle}
        />

        <BoxSummary
          title="Total"
          value={155770.22}
          color={theme.colors.orange[800]}
          icon={FiDollarSign}
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
