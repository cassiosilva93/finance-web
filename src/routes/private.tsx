import { useAuth } from '@src/hooks/auth/auth';
import { Navigate, Outlet } from 'react-router-dom';

export default function Private() {
  const { isLogged } = useAuth();
  console.log(isLogged);

  return isLogged ? <Outlet /> : <Navigate to="/" />;
}
