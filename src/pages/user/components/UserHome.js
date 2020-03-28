import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Nav'
import utils from '../../../utils/utils'

export default function UserHome() {
  useEffect(() => utils.removeBackground() , []);
  return (
    <section className='user-section'>
      <Nav/>
      <article className='user-article'>
      </article>
    </section>
  )
}