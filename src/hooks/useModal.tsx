import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalProviderProps {
  children: ReactNode;
}

interface ModaContextProps {
  isVisible: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

export const ModalContext = createContext<ModaContextProps>(
  {} as ModaContextProps,
);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleOpenModal() {
    setIsVisible(true);
  }

  function handleCloseModal() {
    setIsVisible(false);
  }

  return (
    <ModalContext.Provider
      value={{ isVisible, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  return context;
}
