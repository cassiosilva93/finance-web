import Modal from './components/Modal';
import { ModalProvider } from './hooks/useModal';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ModalProvider>
      <Home />
      <Modal />
      <GlobalStyle />
    </ModalProvider>
  );
}

export default App;
