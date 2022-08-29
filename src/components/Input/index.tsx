import { Container, ContainerInput } from './style';
import InputProps from './types';

export default function Input({
  register,
  id,
  icon: Icon,
  title,
  changeStateCallback,
  ...rest
}: InputProps) {
  function handleChangeEyeVisibility() {
    if (changeStateCallback) {
      changeStateCallback(state => !state);
    }
  }

  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <ContainerInput>
        <input {...register(id)} {...rest} />
        {Icon && <Icon size={25} onClick={handleChangeEyeVisibility} />}
      </ContainerInput>
    </Container>
  );
}
