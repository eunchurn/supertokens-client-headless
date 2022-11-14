import React from "react";
import { useQuery, gql } from "@apollo/client";
import { getUserId } from "supertokens-web-js/recipe/session";

const query = gql`
  query me {
    getMe {
      email
      authId
    }
  }
`;

const getMeData = (data: any) => {
  if (!data) return "";
  const { getMe } = data;
  if (!getMe) return "";
  const { authId } = getMe;
  if (!authId) return "";
  return authId;
};

export default function SuccessView() {
  const { data } = useQuery(query, {
    fetchPolicy: "network-only",
  });
  const [userId, setUserId] = React.useState("");
  React.useEffect(() => {
    getUserId().then((userId) => setUserId(userId));
  }, []);
  return (
    <div
      className="fill"
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        color: "#333333",
        paddingTop: "10px",
        paddingBottom: "40px",
      }}
    >
      <span
        style={{
          fontSize: "50px",
        }}
      >
        🥳🎉
      </span>
      Login successful
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      Your user ID from GraphQL API is
      <div />
      {getMeData(data)}
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      Your user ID from Session is
      <div />
      {userId}
      <div style={{ height: "10px" }} />
      ------------------------------------
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
      <div style={{ height: "10px" }} />
    </div>
  );
}
