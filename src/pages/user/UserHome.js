import React, { useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import OptionsContainer from '../../components/options/OptionsContainer'
import { withAuth } from '../../lib/AuthProvider';

import utils from '../../utils/utils'

const UserHome = props => { 
  const {username} = props.user
  useEffect(() => utils.removeBackground(), []);

  return (
    <section className='user-section'>
      <Nav/>
      <p className='user-section-message'>Bienvenido <span>{username}</span>, completa tus preferencias:</p>
      <article className='user-article'>
        <OptionsContainer 
        title="Mis preferences"
        subtitle="Indicadnos vuestras necesidades"
        isActive={true} // TEST change this with the corresponding flag from preferences
        />
        <OptionsContainer 
        title="Localización"
        subtitle="Cómo ir y alojamientos"
        isActive={false}
        />
        <OptionsContainer 
        title="Mucho más"
        subtitle="Que ver, que comer...."
        isActive={false}
        />
      </article>
    </section>
  )
}

export default withAuth(UserHome);