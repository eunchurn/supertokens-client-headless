import React from "react";
import SuperTokens from "supertokens-web-js";
import Session, { getUserId } from "supertokens-web-js/recipe/session";
import { useLocation, useNavigate } from "react-router-dom";
import ThirdPartyEmailPassword, {
  getAuthStateFromURL,
} from "supertokens-web-js/recipe/thirdpartyemailpassword";
import { getApiDomain } from "../ApolloProvider";

SuperTokens.init({
  appInfo: {
    appName: "auth",
    apiDomain: getApiDomain(),
    apiBasePath: "/auth",
  },
  recipeList: [ThirdPartyEmailPassword.init({}), Session.init()],
});

interface ContextValue {
  existSession: boolean | null;
  authState: string;
  userId: string;
}

const Context = React.createContext({} as ContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [existSession, setExistSession] = React.useState<boolean | null>(null);
  const [authState, setAuthState] = React.useState<string>("");
  const [userId, setUserId] = React.useState<string>("");
  const location = useLocation();
  React.useEffect(() => {
    Session.doesSessionExist().then((exist) => {
      setExistSession(exist);
      if (exist === false && location.pathname !== "/signup") {
        navigate("signin");
      }
    });
    getUserId().then((id) => setUserId(id));
    const authState = getAuthStateFromURL();
    setAuthState(authState);
  }, [location.pathname, navigate]);
  return (
    <Context.Provider value={{ existSession, authState, userId }}>
      {children}
    </Context.Provider>
  );
}

export const useSessionAuth = () => React.useContext(Context);
