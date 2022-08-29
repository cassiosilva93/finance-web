import SignInPage from '@src/pages/SignInPage';
import { Route, Routes } from 'react-router-dom';
import TransactionPage from '../pages/TransactionPage';
import Private from './private';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="transactions" element={<Private />}>
        <Route path="/transactions" element={<TransactionPage />} />
      </Route>
      <Route path="dashboard" element={<Private />}>
        <Route path="/dashboard" element={<TransactionPage />} />
      </Route>
    </Routes>
  );
}
