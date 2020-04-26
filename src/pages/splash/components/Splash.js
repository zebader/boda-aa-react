import React from 'react';
import { withAuth } from '../../../lib/AuthProvider';
import Logo from '../../../components/Logo'
import { Link } from 'react-router-dom'
import Counter from '../../../components/counter/Counter'

const Splash = () => {

  return (
    <article className="splash-article">
    <Logo LogoType='login-logo'/>
      <p>Bienvenido a la app de nuestra boda</p>
      <Counter counterType="splashCounter"/>
      <Link to={`/login`} className="splash-link">
        <button>Accede</button>
      </Link>

    </article>
  )
}

export default withAuth(Splash);