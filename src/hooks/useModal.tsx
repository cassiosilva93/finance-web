import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalProviderProps {
  children: ReactNode;
}

interface ModaContextProps {
  modalState: {
    visible: boolean;
  };
  handleOpenModal: (body: any) => void;
  handleCloseModal: () => void;
}

export const ModalContext = createContext<ModaContextProps>(
  {} as ModaContextProps,
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalState, setModalState] = useState({ visible: true });

  function handleOpenModal(body: any) {
    setModalState({ ...body, visible: true });
  }

  function handleCloseModal() {
    setModalState({ visible: false });
  }

  return (
    <ModalContext.Provider
      value={{ modalState, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
