import { useState } from 'react';
import Modal from './components/Modal';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Home onOpenModal={handleOpenModal} />
      <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      <GlobalStyle />
    </>
  );
}

export default App;
