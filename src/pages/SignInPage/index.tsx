import Button from '@src/components/Button';
import Input from '@src/components/Input';
import { useAuth } from '@src/hooks/auth/auth';
import theme from '@src/theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible, AiFillRocket } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Form, NoHaveRegister } from './style';
import FormProps from './types';

export default function SignInPage() {
  const [eyeIsOpen, setEyeIsOpen] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const { handleSubmit, register } = useForm<FormProps>({
    mode: 'onChange',
  });

  const eyeIcon = eyeIsOpen ? AiFillEye : AiFillEyeInvisible;
  const typePasswordInput = eyeIsOpen ? 'text' : 'password';

  async function onSubmit({ email, password }: FormProps) {
    const result = await signIn({ email, password });
    if (!result) return toast.error('Email ou senha incorreto.');
    navigate('/transactions');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AiFillRocket
          size={70}
          style={{ color: theme.colors.orange[700], marginBottom: '30px' }}
        />

        <Input type="email" id="email" title="E-mail" register={register} />

        <Input
          type={typePasswordInput}
          id="password"
          icon={eyeIcon}
          title="Senha"
          changeStateCallback={setEyeIsOpen}
          register={register}
        />

        <Button type="submit" style={{ height: 40 }}>
          Entrar
        </Button>

        <a href="#" className="forgot-password">
          Esqueceu sua senha?
        </a>

        <NoHaveRegister>
          Não tem cadastro?{' '}
          <a href="#" className="no-have-register">
            Cadastrar
          </a>
        </NoHaveRegister>
      </Form>
    </Container>
  );
}
