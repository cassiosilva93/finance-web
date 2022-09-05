import Transaction from '@src/pages/TransactionPage/types';

export default interface FooterModalProps {
  hasDeleteButton?: boolean;
  closeModalFn: () => void;
  actionButton?: (id?: string) => void;
  buttonTitle: string;
  isDisabledButton?: boolean;
  transaction?: Transaction;
  formStates?: {
    isValid?: boolean;
    isDirty?: boolean;
    loading?: boolean;
  };
}
