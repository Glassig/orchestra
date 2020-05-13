/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import App from "./src/App";
import { name as appName } from "./app.json";
import { DB_HASURA_KEY, DB_HASURA_VALUE } from "./.env.js";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://orchestra-backend.herokuapp.com/v1/graphql",
    headers: {
      [DB_HASURA_KEY]: DB_HASURA_VALUE,
    },
  }),
});

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
