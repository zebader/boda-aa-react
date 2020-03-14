import React, { Component } from "react";
import { Switch } from "react-router-dom";

import CreateUser from "./pages/CreateUser";
import AdminHome from "./pages/CreateUser";
import Login from "./pages/Login";
import UserHome from "./pages/Login";

import PrivateAdminRoute from "./components/PrivateAdminRoute";
import PrivateUserRoute from "./components/PrivateUserRoute";

import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
          <Switch>
            <AnonRoute path="/login" component={Login} exact/>
            <PrivateAdminRoute path="/admin" component={AdminHome} exact/>
            <PrivateAdminRoute path="/create-user" component={CreateUser} exact/>
            <PrivateUserRoute path="/home" component={UserHome} exact/>
          </Switch>
      </AuthProvider>
    );
  }
}

export default App;
