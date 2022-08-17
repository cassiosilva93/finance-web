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
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiZDUzNGM3NTctOTA4Zi00NDliLTllZTktYTNhOTQzNmU5ZjQ4IiwibmFtZSI6IkpvYW8gRmVycmVpcmEiLCJlbWFpbCI6ImpvYW9AZ21haWwuY29tIn0sImlhdCI6MTY2MDU3MzA1NiwiZXhwIjoxNjYxMDA1MDU2fQ.G6GwkvdG3GO2bUayqbLqdIUonTR2W4VbsAkGLD9qhj0';

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
