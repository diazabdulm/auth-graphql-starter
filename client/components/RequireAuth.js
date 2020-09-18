import React from "react";
import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

import { GET_CURRENT_USER } from "../actions/userActions";

export default function withRequireAuth(WrappedComponent) {
  const RequireAuth = (props) => {
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;
    if (!data.user) return <Redirect to="/" />;

    return <WrappedComponent {...props} />;
  };

  return RequireAuth;
}
