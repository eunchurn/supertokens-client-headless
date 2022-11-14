import React from "react";
// import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useNavigate } from "react-router-dom";
import { signOut } from "supertokens-web-js/recipe/thirdpartyemailpassword";
import Logout from "./Logout";
import SuccessView from "./SuccessView";

export function Home() {
  // const session = useSessionContext();
  const navigate = useNavigate();

  async function logoutClicked() {
    await signOut();
    navigate("/signin");
  }

  return (
    <div>
      {/* <div>User ID: {data?.getMe!.user_id}</div>
      <div>Recipe: {data?.getMe!.recipe_id}</div>
      <div>From Session: {JSON.stringify(session)}</div> */}
      <div className="fill">
        <Logout logoutClicked={logoutClicked} />
        <SuccessView />
      </div>
    </div>
  );
}
