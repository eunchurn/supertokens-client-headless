import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloClientProvider } from "./ApolloProvider";
import { AuthProvider } from "./AuthProvider";
import { CssVarsProvider } from "@mui/joy/styles";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ApolloClientProvider>
          <CssVarsProvider>{children}</CssVarsProvider>
        </ApolloClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
