import { ApolloExplorer } from "@apollo/explorer/react";
import { styled } from "@mui/joy";

const StyledApolloExplorer = styled(ApolloExplorer)(() => ({
  width: "100%",
  height: "100vh",
  overflowY: "hidden",
}));

export function EmbeddedExplorer() {
  return (
    <StyledApolloExplorer
      graphRef="builderhub-api@current"
      persistExplorerState
      includeCookies
      initialState={{
        document: `query ExampleQuery {
  getMe {
    authId
  }
}
`,
        variables: {},
        headers: {},
        displayOptions: {
          showHeadersAndEnvVars: true,
          docsPanelState: "open",
          theme: "light",
        },
      }}
    />
  );
}
