interface ModalProps {
  transactionId?: string;
  isVisibleModal: boolean;
  handleCloseModal: () => void;
}

interface FileProps extends File {
  name: string;
  size: number;
}

export type { ModalProps, FileProps };
