interface ModalProps {
  transactionId?: string;
  isVisibleModal: boolean;
  handleCloseModal: () => void;
}

interface FileProps {
  name: string;
  size: number;
}

export type { ModalProps, FileProps };
