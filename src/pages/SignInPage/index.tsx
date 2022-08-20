import Button from '@src/components/Button';
import { useAuth } from '@src/hooks/auth/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormProps from './types';

export default function SignInPage() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { handleSubmit, register } = useForm<FormProps>({
    mode: 'onChange',
  });

  async function onSubmit({ email, password }: FormProps) {
    const token = await signIn({ email, password });
    console.log(token);
    navigate('/transactions');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        id="email"
        placeholder="Email"
        {...register('email')}
      />

      <input
        type="password"
        id="password"
        placeholder="Senha"
        {...register('password')}
      />

      <Button type="submit" style={{ height: 40, width: 120 }}>
        Entrar
      </Button>
    </form>
  );
}
