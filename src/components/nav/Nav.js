import React from 'react'
import Logo from '../logo/Logo'
import LogOut from '../logOut/logOut'
import Counter from '../counter/Counter'

const Nav = () => {
  return (
    <nav>
      <section className='nav-section'>
        <Logo LogoType='nav-logo'/>
        <Counter counterType="navCounter"/>
        <LogOut LogOutType='nav-logout'/>
      </section>
    </nav>
  )
}

export default Nav;
