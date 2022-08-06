import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@src/components/Button';
import ErrorInput from '@src/components/ErrorInput';
import { useCreateNewTransactionMutation } from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import ReactLoading from 'react-loading';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import { ModalProps } from '../types';
import { schema } from './schema';
import {
  CancelContainer,
  Content,
  ErrorsContainer,
  ModalBody,
  ModalFooter,
  RadioBox,
  TransactionTypeContainer,
} from './style';
import { FormProps } from './types';

export default function CreateNewTransactionModal({
  isVisibleModal,
  handleCloseModal,
}: ModalProps) {
  const [type, setType] = useState('income');

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [createNewTransactionMutation, { loading }] =
    useCreateNewTransactionMutation();

  async function onSubmit({ category, title, value }: FormProps) {
    try {
      await createNewTransactionMutation({
        variables: {
          title,
          category,
          value: Number(value),
          type,
        },
      });
      toast.success('Transação salva com sucesso.');
    } catch {
      toast.error('Ocorreu um erro ao salvar a transação.');
    }
  }

  return (
    <ReactModal
      isOpen={isVisibleModal}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleCloseModal}
      >
        <CgClose size={20} color={theme.colors.gray[700]} />
      </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <h2>Criar transação</h2>
          <div className="divider" />

          <ModalBody>
            <input
              type="text"
              id="title"
              placeholder="Título"
              {...register('title')}
            />

            <input
              type="string"
              id="value"
              placeholder="Valor"
              {...register('value')}
            />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                onClick={() => setType('income')}
                isActive={type === 'income'}
                activeColor="green"
              >
                <span>Entrada</span>
                <BsArrowUpCircle color={theme.colors.green[900]} size={20} />
              </RadioBox>

              <RadioBox
                type="button"
                onClick={() => setType('outcome')}
                isActive={type === 'outcome'}
                activeColor="red"
              >
                <span>Saída</span>
                <BsArrowDownCircle color={theme.colors.red[900]} size={20} />
              </RadioBox>
            </TransactionTypeContainer>

            <input
              type="text"
              id="category"
              placeholder="Categoria"
              {...register('category')}
            />
          </ModalBody>
        </Content>

        <ErrorsContainer>
          {errors.title && <ErrorInput message={errors.title.message} />}
          {errors.value && <ErrorInput message={errors.value.message} />}
          {errors.category && <ErrorInput message={errors.category.message} />}
        </ErrorsContainer>

        <ModalFooter>
          <div>
            <CancelContainer onClick={handleCloseModal}>
              Cancelar
            </CancelContainer>
            <Button type="submit" disabled={loading || !isDirty || !isValid}>
              {loading ? (
                <ReactLoading type={'spin'} height={20} width={20} />
              ) : (
                'Salvar'
              )}
            </Button>
          </div>
        </ModalFooter>
      </form>
    </ReactModal>
  );
}
