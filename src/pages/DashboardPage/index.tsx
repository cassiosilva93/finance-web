import MainLayoult from '@src/layouts/MainLayout';
import { Container, MainDashboard, SideDashboard } from './style';

export default function DashboardPage() {
  return (
    <MainLayoult>
      <Container>
        <MainDashboard />
        <SideDashboard />
      </Container>
    </MainLayoult>
  );
}
