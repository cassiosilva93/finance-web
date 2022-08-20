import SignInPage from '@src/pages/SignInPage';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import TransactionPage from '../pages/TransactionPage';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/transactions" element={<TransactionPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
