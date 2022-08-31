import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@src/components/Button';
import Input from '@src/components/Input';
import { useCreateNewUserMutation } from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible, AiFillRocket } from 'react-icons/ai';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { schema } from './schema';
import { AlreadyHaveRgistration, Container, Form } from './style';
import FormProps from './types';

export default function SignUpPage() {
  const [eyeIsOpen, setEyeIsOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { isDirty, isValid },
    reset,
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const passwordInputState = {
    eyeIcon: eyeIsOpen ? AiFillEye : AiFillEyeInvisible,
    typePasswordInput: eyeIsOpen ? 'text' : 'password',
  };

  const [createNewUserMutation, { loading }] = useCreateNewUserMutation();

  async function onSubmit({ email, password, name }: FormProps) {
    try {
      await createNewUserMutation({
        variables: {
          email,
          password,
          name,
        },
      });
      toast.success('Usuário criado com sucesso.');
      reset();
    } catch {
      toast.error('Ocorreu um erro ao criar o usuário.');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <AiFillRocket
          size={70}
          style={{ color: theme.colors.orange[700], marginBottom: '30px' }}
        />

        <Input
          type="text"
          id="name"
          title="Nome"
          register={register}
          placeholder="Digite seu nome completo"
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

        <Input
          type={passwordInputState.typePasswordInput}
          id="confirm_password"
          icon={passwordInputState.eyeIcon}
          title="Confirmar senha"
          changeStateCallback={setEyeIsOpen}
          register={register}
          placeholder="Confirme sua senha"
        />

        <Button
          type="submit"
          style={{ height: 40 }}
          disabled={loading || !isDirty || !isValid}
        >
          {loading ? (
            <ReactLoading type="spin" height={20} width={20} />
          ) : (
            'Cadastrar'
          )}
        </Button>

        <AlreadyHaveRgistration>
          Já tem cadastro? <Link to="/">Login</Link>
        </AlreadyHaveRgistration>
      </Form>
    </Container>
  );
}
