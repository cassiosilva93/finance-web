import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('O título precisa ser preenchido.'),
  category: yup.string().required('A categoria precisa ser preenchida.'),
  value: yup
    .number()
    .typeError('O valor precisa ser um número.')
    .positive('O valor deve ser positivo e acima de zero'),
});
