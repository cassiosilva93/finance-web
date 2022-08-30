import axiosClientApi from '@src/services/clients/axiosClient';
import { useLoginLazyQuery } from '@src/services/graphql/generated/schema';
import { createContext, useCallback, useContext, useState } from 'react';
import { AuthContextData, AuthProviderProps, SignInCredentials } from './types';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@financeweb:token');
    const user = localStorage.getItem('@financeweb:user');

    if (token && user) {
      axiosClientApi.defaults.headers.common.Authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const [loginQuery] = useLoginLazyQuery();

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const { data: loginQueryData } = await loginQuery({
      variables: { data: { email, password } },
    });

    const token = loginQueryData?.login?.token as string;
    const user = loginQueryData?.login?.user;

    if (!token && !user) return false;

    localStorage.setItem('@financeweb:token', token);
    localStorage.setItem('@financeweb:user', JSON.stringify(user));

    axiosClientApi.defaults.headers.common.Authorization = `Bearer ${token}`;

    setData({ token, user });

    return true;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@financeweb:token');
    localStorage.removeItem('@financeweb:user');
    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        isLogged: !!data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export { AuthProvider, useAuth };
