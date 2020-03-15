import React, { Component } from "react";
import auth from "../services/auth-service";
const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authStore => {
            return (
              <Comp
                login={authStore.login}
                signup={authStore.signup}
                user={authStore.user}
                logout={authStore.logout}
                isLoggedin={authStore.isLoggedin}
                isAdminAccount={authStore.isAdminAccount}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    isAdminAccount: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    auth
      .me()
      .then(user => {
        if(user.userType === 'admin') {
          this.setState({
          isLoggedin: true,
          user,
          isLoading: false,
          isAdminAccount: true,
          })
        } else {
          this.setState({
            isLoggedin: true,
            user,
            isLoading: false
          });
        }
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
      });
  }

  login = user => {
    const { username, password } = user;
    auth
      .login({ username, password })
      .then(user => {
        if(user.userType === 'admin') {
          this.setState({
            isLoggedin: true,
            user,
            isAdminAccount: true,
          });
        } else {
          this.setState({
            isLoggedin: true,
            user
          });
        }
      })
      .catch(() => {});
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isAdminAccount: false,
        });
      })
      .catch(() => {});
  };
  render() {
    const { isLoading, isLoggedin, user, isAdminAccount } = this.state;
    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          isAdminAccount,
          user,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;
