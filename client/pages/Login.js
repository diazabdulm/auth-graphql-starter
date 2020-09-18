import React from "react";
import { useMutation } from "@apollo/client";

import AuthForm from "../components/AuthForm";
import { GET_CURRENT_USER, LOG_IN_USER } from "../actions/userActions";

function LoginPage() {
  const [logIn] = useMutation(LOG_IN_USER, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  return (
    <div className="container">
      <h3>Login</h3>
      <AuthForm authenticate={logIn} />
    </div>
  );
}

export default LoginPage;
