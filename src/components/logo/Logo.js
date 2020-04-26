import React from 'react'
import logo from "../../images/main-logo.svg"

const Logo = props => {
  return (
    <img className={props.LogoType} src={logo} alt='logo'/>
  )
}

export default Logo;