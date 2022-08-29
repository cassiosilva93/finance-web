import { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  isLogged: boolean;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

export type { AuthProviderProps, AuthContextData, User, SignInCredentials };
