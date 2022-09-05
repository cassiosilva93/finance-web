import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@src/components/Input';
import {
  GetAllTransactionsDocument,
  GetBoxSummaryInfoDocument,
  GetTransactionInfoDocument,
  useCreateNewTransactionMutation,
} from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import FooterModal from '../FooterModal';
import { ModalProps } from '../types';
import { schema } from './schema';
import {
  Content,
  ModalBody,
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
    formState: { isDirty, isValid, errors },
    reset,
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
        refetchQueries: [
          { query: GetAllTransactionsDocument },
          { query: GetTransactionInfoDocument },
          { query: GetBoxSummaryInfoDocument },
        ],
      });
      toast.success('Transação salva com sucesso.');
      reset();
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
            <Input
              type="text"
              id="title"
              register={register}
              error={errors.title}
              placeholder="Digite o título da transação"
            />

            <Input
              type="string"
              id="value"
              register={register}
              error={errors.value}
              placeholder="Digite o valor da transação"
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

            <Input
              type="text"
              id="category"
              register={register}
              error={errors.category}
              placeholder="Digite a categoria da transação"
            />
          </ModalBody>
        </Content>

        <FooterModal
          buttonTitle="Salvar"
          closeModalFn={handleCloseModal}
          isDisabledButton={true}
          formStates={{ isDirty, isValid, loading }}
        />
      </form>
    </ReactModal>
  );
}
