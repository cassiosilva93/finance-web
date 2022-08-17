import Button from '@src/components/Button';
import {
  GetAllTransactionsDocument,
  GetBoxSummaryInfoDocument,
  GetTransactionInfoDocument,
  useDeleteTransactionMutation,
} from '@src/services/graphql/generated/schema';
import theme from '@src/theme';
import { CgClose } from 'react-icons/cg';
import ReactLoading from 'react-loading';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import { ModalProps } from '../types';
import { CancelContainer, ModalBody, ModalFooter } from './style';

export default function ConfirmDeleteModal({
  transaction,
  isVisibleModal,
  handleCloseModal,
}: ModalProps) {
  const [deleteTransactionMutation, { loading }] =
    useDeleteTransactionMutation();

  async function handleDelete(id: string) {
    try {
      await deleteTransactionMutation({
        variables: { id },
        refetchQueries: [
          { query: GetAllTransactionsDocument },
          { query: GetTransactionInfoDocument },
          { query: GetBoxSummaryInfoDocument },
        ],
      });
      toast.success('Transação removida com sucesso.');
    } catch {
      toast.error('Ocorreu um erro ao remover a transação.');
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

      <ModalBody>Tem certeza que deseja excluir esse registro?</ModalBody>

      <ModalFooter>
        <div>
          <CancelContainer onClick={handleCloseModal}>Cancelar</CancelContainer>
          <Button
            onClick={() => {
              if (!transaction?.id) return;
              handleDelete(transaction.id);
            }}
          >
            {loading ? (
              <ReactLoading type="spin" height={20} width={20} />
            ) : (
              'Confirmar'
            )}
          </Button>
        </div>
      </ModalFooter>
    </ReactModal>
  );
}
