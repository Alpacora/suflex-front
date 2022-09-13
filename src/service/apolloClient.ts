import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const rickAndMorty = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const baseEndpoint = new HttpLink({
  uri: 'http://localhost:3333',
});

export const client = new ApolloClient({
  link: ApolloLink.split(op => op.getContext().clientName === 'rickAndMorty', rickAndMorty, baseEndpoint),
  cache: new InMemoryCache({})
});
