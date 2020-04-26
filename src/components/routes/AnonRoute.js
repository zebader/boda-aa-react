import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

const AnonRoute = ({ component: Component, isLoggedin, isAdminAccount, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if(!isLoggedin) {
          return (<Component {...props}/>)
        } else if (isLoggedin && isAdminAccount) {
          return (<Redirect to="/admin"/>)
        } else {
          return (<Redirect to="/home"/>)
        }
      }
      }
    />
  );
}

export default withAuth(AnonRoute);
