import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const host = import.meta.env.VITE_API_HOST;

const httpLink = createHttpLink({ uri: host });
const client = new ApolloClient({ cache: new InMemoryCache(), link: httpLink });

export default client;