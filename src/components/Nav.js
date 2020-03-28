import React from 'react'
import Logo from './Logo'
import LogOut from './logOut'
import Counter from './counter/Counter'

function Nav() {
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
