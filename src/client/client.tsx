import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const link = createHttpLink({
  uri: 'https://graphql-weather-api.herokuapp.com/',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});
