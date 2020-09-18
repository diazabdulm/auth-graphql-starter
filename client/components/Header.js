import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { GET_CURRENT_USER, LOG_OUT_USER } from "../actions/userActions";

export default function Header() {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const [logOutUser] = useMutation(LOG_OUT_USER, {
    refetchQueries: [{ query: GET_CURRENT_USER }],
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleLogOut = () => {
    logOutUser();
  };

  const renderLoggedIn = (
    <li>
      <a href="#" onClick={handleLogOut}>
        Log Out
      </a>
    </li>
  );

  const renderLoggedOut = (
    <Fragment>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/login">Log In</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">
          {data.currentUser ? renderLoggedIn : renderLoggedOut}
        </ul>
      </div>
    </nav>
  );
}
