import React from "react";
import { useMutation } from "@apollo/client";

import AuthForm from "../components/AuthForm";
import { GET_CURRENT_USER, SIGN_UP_USER } from "../actions/userActions";

function SignupPage() {
  const [signUp] = useMutation(SIGN_UP_USER, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  return (
    <div className="container">
      <h3>Sign up</h3>
      <AuthForm authenticate={signUp} />
    </div>
  );
}

export default SignupPage;
