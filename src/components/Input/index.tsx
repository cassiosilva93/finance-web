import { Container, ContainerInput, ErrorContainer } from './style';
import InputProps from './types';

export default function Input({
  register,
  id,
  icon: Icon,
  error,
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
      <ContainerInput>
        <input {...register(id)} {...rest} />
        {Icon && <Icon size={25} onClick={handleChangeEyeVisibility} />}
      </ContainerInput>

      {error && (
        <ErrorContainer>
          <p>{error.message}</p>
        </ErrorContainer>
      )}
    </Container>
  );
}
