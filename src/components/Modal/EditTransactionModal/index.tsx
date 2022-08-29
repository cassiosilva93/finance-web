import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@src/components/Button';
import ErrorInput from '@src/components/ErrorInput';
import {
  GetAllTransactionsDocument,
  GetBoxSummaryInfoDocument,
  GetTransactionInfoDocument,
  useUpdateTransactionMutation,
} from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import { ModalProps } from '../types';
import { schema } from './schema';
import {
  CancelContainer,
  Content,
  ErrorsContainer,
  ModalBody,
  ModalFooter,
  RadioBox,
  RemoveTransactionContainer,
  TransactionTypeContainer,
} from './style';
import { FormProps } from './types';

export default function EditTransactionModal({
  transaction,
  isVisibleModal,
  handleCloseModal,
}: ModalProps) {
  const [type, setType] = useState<string | null | undefined>('');
  const [isVisibleConfirmDeleteModal, setIsVisibleConfirmDeleteModal] =
    useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isValid },
  } = useForm<FormProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [updateTransactionMutation, { loading }] =
    useUpdateTransactionMutation();

  useEffect(() => {
    setType(transaction?.type);
  }, [transaction?.type]);

  function handleShowConfirmDeleteModal() {
    setIsVisibleConfirmDeleteModal(prev => !prev);
  }

  async function onSubmit({ category, title, value }: FormProps) {
    try {
      await updateTransactionMutation({
        variables: {
          id: transaction?.id,
          data: { category, title, type, value },
        },
        refetchQueries: [
          { query: GetAllTransactionsDocument },
          { query: GetTransactionInfoDocument },
          { query: GetBoxSummaryInfoDocument },
        ],
      });
      toast.success('Transação atualizada com sucesso.');
    } catch {
      toast.error('Ocorreu um erro ao atualizar a transação.');
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
          <h2>Editar transação</h2>
          <div className="divider" />

          <ModalBody>
            <input
              type="text"
              id="title"
              placeholder="Título"
              {...register('title')}
              defaultValue={transaction?.title}
            />

            <input
              type="text"
              id="value"
              placeholder="Valor"
              {...register('value')}
              defaultValue={transaction?.value}
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
              defaultValue={transaction?.category}
            />
          </ModalBody>
        </Content>

        <ErrorsContainer>
          {errors.title && <ErrorInput message={errors.title.message} />}
          {errors.value && <ErrorInput message={errors.value.message} />}
          {errors.category && <ErrorInput message={errors.category.message} />}
        </ErrorsContainer>

        <ModalFooter>
          <RemoveTransactionContainer
            onClick={() => handleShowConfirmDeleteModal()}
          >
            <FaTrash />
            <a>Excluir</a>
          </RemoveTransactionContainer>

          <div>
            <CancelContainer onClick={handleCloseModal}>
              Cancelar
            </CancelContainer>
            <Button
              type="submit"
              disabled={loading || !isDirty || !isValid}
              style={{ height: '40px', width: '150px' }}
            >
              {loading ? (
                <ReactLoading type="spin" height={20} width={20} />
              ) : (
                'Salvar'
              )}
            </Button>
          </div>
        </ModalFooter>
      </form>

      {isVisibleConfirmDeleteModal && (
        <ConfirmDeleteModal
          transaction={transaction}
          isVisibleModal={isVisibleConfirmDeleteModal}
          handleCloseModal={handleShowConfirmDeleteModal}
        />
      )}
    </ReactModal>
  );
}
