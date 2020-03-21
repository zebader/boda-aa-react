import React, { Component } from "react";
import { Switch } from "react-router-dom";
import './scss/App.scss'

import CreateUser from "./pages/admin/components/CreateUser";
import AdminHome from "./pages/admin/components/AdminHome";
import UserHome from "./pages/user/components/UserHome";
import Login from "./pages/login/components/Login";

import PrivateAdminRoute from "./components/PrivateAdminRoute";
import PrivateUserRoute from "./components/PrivateUserRoute";

import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <main>
      <AuthProvider>
          <Switch>
            <AnonRoute path="/" component={Login} exact/>     
            <AnonRoute path="/login" component={Login} exact/>
            <PrivateAdminRoute path="/admin" component={AdminHome} exact/>
            <PrivateAdminRoute path="/create-user" component={CreateUser} exact/>
            <PrivateUserRoute path="/home" component={UserHome} exact/>
          </Switch>
      </AuthProvider>
      </main>
    );
  }
}

export default App;
