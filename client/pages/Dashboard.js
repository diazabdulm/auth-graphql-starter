import React from "react";
import withRequireAuth from "../components/RequireAuth";

function Dashboard() {
  return <p>Dashboard</p>;
}

export default withRequireAuth(Dashboard);
