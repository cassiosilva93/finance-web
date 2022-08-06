import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routers from './routes';
import { apolloClient } from './services/clients/apolloClient';
import GlobalStyle from './styles/global';
import theme from './theme';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Routers />
        <ToastContainer
          toastStyle={{
            backgroundColor: theme.colors.gray[800],
            color: theme.colors.txt,
          }}
        />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
