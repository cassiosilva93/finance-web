import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
