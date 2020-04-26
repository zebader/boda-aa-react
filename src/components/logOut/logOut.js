import React from 'react';
import { withAuth } from '../../lib/AuthProvider';
import logOutImg from "../../images/logout.svg";
import utils from '../../utils/utils'

const LogOut = (props) => {
  const logoutApp = () => {
    utils.addBackground();
    props.logout();
  }
  return (
    <img
    className={props.LogOutType}
    src={logOutImg}
    alt='logout input'
    onClick={logoutApp}
    />
  )
}

export default withAuth(LogOut);