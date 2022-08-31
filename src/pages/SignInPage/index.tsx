import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import { useAuth } from '@src/hooks/auth/auth';
import theme from '@src/theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible, AiFillRocket } from 'react-icons/ai';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { schema } from './schema';
import { Container, Form, NoHaveRegister } from './style';
import FormProps from './types';

export default function SignInPage() {
  const [eyeIsOpen, setEyeIsOpen] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const passwordInputState = {
    eyeIcon: eyeIsOpen ? AiFillEye : AiFillEyeInvisible,
    typePasswordInput: eyeIsOpen ? 'text' : 'password',
  };

  async function onSubmit({ email, password }: FormProps) {
    const result = await signIn({ email, password });
    if (!result) return toast.error('Email ou senha incorreto.');
    return navigate('/transactions');
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AiFillRocket
          size={70}
          style={{ color: theme.colors.orange[700], marginBottom: '30px' }}
        />

        <Input
          type="email"
          id="email"
          title="E-mail"
          register={register}
          placeholder="Digite seu e-mail"
        />

        <Input
          type={passwordInputState.typePasswordInput}
          id="password"
          icon={passwordInputState.eyeIcon}
          title="Senha"
          changeStateCallback={setEyeIsOpen}
          register={register}
          placeholder="Digite sua senha"
        />

        <Button
          type="submit"
          style={{ height: 40 }}
          disabled={isSubmitting || !isDirty || !isValid}
        >
          {isSubmitting ? (
            <ReactLoading type="spin" height={20} width={20} />
          ) : (
            'Entrar'
          )}
        </Button>

        <a href="#" className="forgot-password">
          Esqueceu sua senha?
        </a>

        <NoHaveRegister>
          Não tem cadastro? <a href="/register">Cadastrar</a>
        </NoHaveRegister>
      </Form>
    </Container>
  );
}
