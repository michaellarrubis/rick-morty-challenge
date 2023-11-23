import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const host = 'https://rickandmortyapi.com/graphql';

const httpLink = createHttpLink({ uri: host });
const client = new ApolloClient({ cache: new InMemoryCache(), link: httpLink });

export default client;