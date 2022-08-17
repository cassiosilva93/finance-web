interface Transaction {
  id: string;
  type: string;
  title: string;
  date: string;
  value: number;
  category: string;
}

interface ModalProps {
  transaction?: Transaction;
  isVisibleModal: boolean;
  handleCloseModal: () => void;
}

interface FileProps {
  name: string;
  size: number;
}

export type { ModalProps, FileProps };
