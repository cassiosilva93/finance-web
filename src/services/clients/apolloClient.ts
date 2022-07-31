import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from '@src/config';

const apolloClient = new ApolloClient({
  uri: config.api.baseUrl,
  cache: new InMemoryCache(),
});

export default apolloClient;
