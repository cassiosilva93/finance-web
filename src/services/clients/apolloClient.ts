import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import config from '@src/config';

const httpLink = new HttpLink({
  uri: `${config.api.baseUrl}/graphql`,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('@financeweb:token');

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }));

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  uri: config.api.baseUrl,
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
