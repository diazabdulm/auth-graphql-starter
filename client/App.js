import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

import Header from "./components/Header";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </Fragment>
  );
}
