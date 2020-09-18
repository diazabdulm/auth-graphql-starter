import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AuthForm({ authenticate }) {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate({ variables: { ...userCredentials } }).catch((error) => {
      const errorMessages = error.graphQLErrors.map((error) => error.message);
      setErrors(errorMessages);
    });
    history.push("/dashboard");
  };

  const renderErrors = errors.map((error) => <p key={error}>{error}</p>);

  return (
    <div className="row">
      <form className="col s6" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            required
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="errors red-text">{renderErrors}</div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
