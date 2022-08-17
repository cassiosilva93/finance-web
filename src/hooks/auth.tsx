import axiosClientApi from '@src/services/clients/axiosClient';
import { useLoginLazyQuery } from '@src/services/graphql/generated/schema';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthState {
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@financeweb:token');
    if (token) {
      axiosClientApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
      return { token };
    }
    return {} as AuthState;
  });

  const [useLoginQuery, { data: loginData }] = useLoginLazyQuery();

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    await useLoginQuery({ variables: { data: { email, password } } });
    const token = loginData?.login as string;
    localStorage.setItem('@GoBarber:token', token);
    axiosClientApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@financeweb:token');

    history.push('/');

    setData({} as AuthState);
  }, [history]);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
