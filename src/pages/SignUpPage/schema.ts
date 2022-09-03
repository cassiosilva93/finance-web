import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, {
      message: 'O nome precisa ser completo',
    })
    .required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(10, 'A senha precisa ter no mínimo 10 caracteres'),
  confirm_password: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password'), null], 'As senhas não coincidem'),
});
