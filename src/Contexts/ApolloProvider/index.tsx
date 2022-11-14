import React from "react";
import { ApolloProvider } from "@apollo/client";
import { InMemoryCache, ApolloClient } from "@apollo/client";

export function getApiDomain() {
  const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:8000`;
  return apiUrl;
}

export function getWebsiteDomain() {
  const websiteUrl = process.env.REACT_APP_HOST_URL || `http://localhost:3000`;
  return websiteUrl;
}

export const client = new ApolloClient({
  uri: getApiDomain(),
  cache: new InMemoryCache(),
});

export function ApolloClientProvider(props: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
