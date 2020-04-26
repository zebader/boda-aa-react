import React, { Component } from "react";
import { Switch } from "react-router-dom";
import './scss/App.scss'

import CreateUser from "./pages/admin/components/CreateUser";
import AdminHome from "./pages/admin/AdminHome";
import UserHome from "./pages/user/UserHome";
import Login from "./pages/login/Login";
import Splash from "./pages/splash/Splash";

import PrivateAdminRoute from "./components/routes/PrivateAdminRoute";
import PrivateUserRoute from "./components/routes/PrivateUserRoute";

import AnonRoute from "./components/routes/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <main>
      <AuthProvider>
          <Switch>
            <AnonRoute path="/" component={Splash} exact/>     
            <AnonRoute path="/login" component={Login} exact/>
            <PrivateAdminRoute path="/admin" component={AdminHome} exact/>
            <PrivateAdminRoute path="/admin/create-user" component={CreateUser} exact/>
            <PrivateUserRoute path="/home" component={UserHome} exact/>
          </Switch>
      </AuthProvider>
      </main>
    );
  }
}

export default App;
