import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms)
    .required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(10),
  confirm_password: yup.string().oneOf([yup.ref('password'), null]),
});
