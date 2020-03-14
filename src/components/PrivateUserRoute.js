import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function PrivateUserRoute({ component: Component, isLoggedin,isAdminAccount, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        { if(!isLoggedin) {
          return (<Redirect to="/login"/>)
        } else if (isLoggedin && !isAdminAccount) {
          return (<Component {...props} />)
        } else {
          return (<Redirect to="/admin"/>)
        }
      }}
    />
  );
}

export default withAuth(PrivateUserRoute);
