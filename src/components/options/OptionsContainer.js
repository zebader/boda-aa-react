import React from 'react'
import {withAuth} from '../../lib/AuthProvider'

const OptionsContainer = props => { 
  const {title , subtitle , isActive} = props
  return (
    <section className={`options-container ${isActive ? 'options-container--active' : 'options-container--inactive'}`}>
      <article className='options-container-text'>
        <h3 className='options-container-text-title'>{title}</h3>
        <p className='options-container-text-subtitle'>{subtitle}</p>
      </article>
    </section>
  )
}

export default withAuth(OptionsContainer);