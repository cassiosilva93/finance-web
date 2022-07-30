interface ModalProps {
  isVisibleModal: boolean;
  handleCloseModal: () => void;
}

interface File {
  name: string;
  size: number;
}

export type { ModalProps, File };
