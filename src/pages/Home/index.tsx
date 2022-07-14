import BoxSummary from '@src/components/BoxSummary';
import Button from '@src/components/Button';
import Header from '@src/components/Header';
import Pagination from '@src/components/Pagination';
import { DataHelper } from '@src/helpers/DataHelper';
import { StringHelper } from '@src/helpers/StringHelper';
import { ValueHelper } from '@src/helpers/ValueHelper';
import theme from '@src/theme';
import database from '@src/tmp/database';
import { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import {
  ButtonContainer,
  MainContainer,
  PaginationContainer,
  Span,
  TableContainer,
} from './style';

export default function Home() {
  const [offset, setOffset] = useState(0);

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
        <Button>Dashboard</Button>
        <Button>Transações</Button>
      </ButtonContainer>

      {/* <DashboardContainer>
        <main></main>
        <AsideDashboards>
          <aside></aside>
          <aside></aside>
        </AsideDashboards>
      </DashboardContainer> */}

      <TableContainer>
        <div>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {database.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td>{StringHelper.formatTitle(transaction.title)}</td>
                    <td>
                      <Span type={transaction.type}>
                        {ValueHelper.formatToBRLCurrency(transaction.value)}
                      </Span>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{DataHelper.formatToBRDate(transaction.date)}</td>
                    <td>
                      <HiDotsHorizontal size={25} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TableContainer>

      <PaginationContainer>
        <Pagination
          limit={12}
          total={1200}
          offset={240}
          setOffset={setOffset}
        />
      </PaginationContainer>
    </>
  );
}
