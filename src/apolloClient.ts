import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//ดัก Error
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message:${message}, Location:${locations} ,Path:${path}`
      );
    });
  }
  if (networkError) {
    console.error(`[Network Error]: ${networkError}`);
  }
});

//URL ของ GitHub GraphQL
const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

//ช่องทางส่ง request
const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API, //ยิง request ที่นี่
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

//รวม Link
const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
