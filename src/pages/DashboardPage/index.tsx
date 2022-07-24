import MainLayoult from '@src/layouts/MainLayout';
import { Container, MainDashboard, SideDashboard } from './style';

export default function DashboardPage() {
  return (
    <MainLayoult>
      <Container>
        <MainDashboard></MainDashboard>
        <SideDashboard></SideDashboard>
      </Container>
    </MainLayoult>
  );
}
